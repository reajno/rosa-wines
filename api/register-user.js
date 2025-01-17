import db from "../knex.js";
import throwError from "../src/utils/throwError.js";
import handleError from "../src/utils/handleError.js";
import bcrypt from "bcrypt";

export default async function handler(req, res) {
  const { email, password } = req.body;

  try {
    //  Check if email and password fields are populated
    if (!email || !password) {
      throwError(400, "Both email and password fields are required");
    }

    const userResult = await db("users").select("*").where("email", email);

    // Check if user already exists in DB
    if (userResult.length > 0) {
      throwError(409, "User already exists, please log in");
    }

    //  Define salt rounds
    const saltRounds = 10;

    // Generate password hash
    const hash = await bcrypt.hash(password, saltRounds);

    // Insert user email and hashed password to DB
    await db("users").insert({ email, hash });

    res.status(201).json({ message: "User created" });
  } catch (err) {
    handleError(res, err);
  }
}
