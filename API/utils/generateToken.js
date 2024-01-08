import jwt from 'jsonwebtoken';

const generateToken = (res, userId, specialistId, customerId) => {
   const token = jwt.sign({ userId, specialistId, customerId }, process.env.JWT_SECRET, {
    expiresIn: '30d',
  });

  res.cookie('jwt', token, {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'production', // Use secure cookies in production
    sameSite: 'strict', // Prevent CSRF attacks
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  });
  return token
};

export default generateToken;