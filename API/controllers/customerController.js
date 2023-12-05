import asyncHandler from 'express-async-handler';
import Customer from '../models/customerModel.js';
import generateToken from '../utils/generateToken.js';

const getAllCustomer = asyncHandler(async (req, res) => {
  const results = await Customer.find();
  return res.json(results);
});

// @desc    Auth customer & get token
// @route   POST /api/customers/auth
// @access  Public
const authCustomer = asyncHandler(async (req, res) => {
  // Get values - destructure
  const { email, password } = req.body;
  //console.log(customerName)
  const customer = await Customer.findOne({ email });

  if (customer && (await customer.matchPassword(password))) {
    generateToken(res, customer._id);

    res.json({
      _id: customer._id,
      customerName: customer.customerName,
      email: customer.email
    });
  } else {
    res.status(401);
    throw new Error('Invalid email or password');
  }
});

// @desc    Register a new customer
// @route   POST /api/customers
// @access  Public
const registerCustomer = asyncHandler(async (req, res) => {
  const { customerName, email, password } = req.body;

  const customerExists = await Customer.findOne({ email });

  if (customerExists) {
    res.status(400);
    throw new Error('customerName already exists');
  }

  const customer = await Customer.create({
    customerName,
    email,
    password,
  });

  if (customer) {
    generateToken(res, customer._id);

    res.status(201).json({
      _id: customer._id,
      customerName: customer.customerName,
      email: customer.email,
    });
  } else {
    res.status(400);
    throw new Error('Invalid customer data');
  }
});

// @desc    Logout customer / clear cookie
// @route   POST /api/customers/logout
// @access  Public
const logoutCustomer = (req, res) => {
  try {
    res.cookie('jwt', '', {
      httpOnly: true,
      expires: new Date(0),
    });

    res.status(200).json({ message: 'Logged out successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to logout' });
  }
};

// @desc    Get customer profile
// @route   GET /api/customers/profile
// @access  Private
const getCustomerProfile = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.customer._id);
  console.log(req.customer._id);
  if (customer) {
    res.json({
      _id: customer._id,
      customerName: customer.customerName,
      email: customer.email,
    });
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});

// @desc    Update customer profile
// @route   PUT /api/customers/profile
// @access  Private
const updateCustomerProfile = asyncHandler(async (req, res) => {
  const customer = await Customer.findById(req.customer._id);

  if (customer) {
    customer.customerName = req.body.customerName || customer.customerName;
    customer.email = req.body.email || customer.email;

    if (req.body.password) {
      customer.password = req.body.password;
    }

    const updatedCustomer = await customer.save();

    res.json({
      _id: updatedCustomer._id,
      customerName: updatedCustomer.customerName,
      email: updatedCustomer.email,
      role: updatedCustomer.role,
    });
  } else {
    res.status(404);
    throw new Error('Customer not found');
  }
});

export {
  authCustomer,
  getAllCustomer,
  registerCustomer,
  logoutCustomer,
  getCustomerProfile,
  updateCustomerProfile,
};