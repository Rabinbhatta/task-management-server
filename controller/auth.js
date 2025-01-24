import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  try {
    const { fullName, email, password } = req.body;
    const user = await User.findOne({ email });
    const userName = await User.findOne({ fullName });
    if (user) {
      return res.status(404).json({ message: "Email already used!!" });
    } else if (userName) {
      return res.status(404).json({ message: "Username already used!!" });
    } else {
      const passwordhash = await bcrypt.hash(password, 10);
      const newUser = new User({
        fullName,
        email,
        password: passwordhash,
      });
      const savedUser = await newUser.save();

      return res.status(201).json({ msg: "Sucess" });
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({ message: "User not found!!" });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(404).json({ message: "Wrong password!!" });
    } else {
      const token = jwt.sign(user.id, process.env.JWT_KEY);

      return res.status(200).json({
        jwt: token,
        user: { name: user.fullName, email: user.email, id: user._id },
      });
    }
  } catch (error) {
    return res.status(404).json({ error: error.message });
  }
};
