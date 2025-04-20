import {generateUsername} from '../services/usernameGen.js';
import {generatePassword} from '../utils/passwordGen.js'

export const createUsername = async (req, res) => {
  try {
    const { firstName, lastName } = req.body;
    if (!firstName || !lastName) {
      return res
        .status(400)
        .json({ message: "First name and last name are required" });
    }
    const username = await generateUsername(firstName, lastName);

    if (!username) {
      return res.status(400).json({ message: "No available username found." });
    }

    return res.status(200).json({ username });
  } catch (error) {
    console.error("Error generating username:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while generating the username." });
  }
};

export const createPassword = (req, res) => {
  try {
    const {firstName , lastName} =req.body;

    const password = generatePassword(firstName,lastName);

    return res.status(200).json({ password });
  } catch (error) {
    console.error("Error generating password:", error);
    return res
      .status(500)
      .json({ message: "An error occurred while generating the password." });
  }
};