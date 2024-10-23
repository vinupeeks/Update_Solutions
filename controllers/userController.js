const User = require("../models/User");

exports.createUser = async (req, res) => {
  const { name, mobileNumber, houseName, state, district, pincode } = req.body;

  // Validate user inputs
  if (!name || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (!mobileNumber || mobileNumber.length !== 10 || !/^\d{10}$/.test(mobileNumber)) {
    return res.status(400).json({ error: 'Mobile number must be a valid 10-digit number' });
  }

  if (!houseName || houseName.trim() === '') {
    return res.status(400).json({ error: 'House name is required' });
  }

  if (!state || state.trim() === '') {
    return res.status(400).json({ error: 'State is required' });
  }

  if (!district || district.trim() === '') {
    return res.status(400).json({ error: 'District is required' });
  }

  if (!pincode || pincode.length !== 6 || !/^\d{6}$/.test(pincode)) {
    return res.status(400).json({ error: 'Pincode must be a valid 6-digit number' });
  }

  try {
    const newUser = new User({ name, mobileNumber, houseName, state, district, pincode });
    await newUser.save();

    res.status(201).json({ message: 'User created successfully', user: newUser });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

