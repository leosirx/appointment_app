import jwt from 'jsonwebtoken';

<<<<<<< HEAD
const generateToken = (res, userId, specialistId, customerId) => {
  const token = jwt.sign({ userId, specialistId, customerId }, process.env.JWT_SECRET, {
=======
const generateToken = (res, userId, specialistId) => {
  const token = jwt.sign({ userId, specialistId }, process.env.JWT_SECRET, {
>>>>>>> f2a7cc6108f40b4a9922291bc240d7b718e4ae09
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
};

export default generateToken;