import db from "../knex.js";
import throwError from "../src/utils/throwError.js";
import handleError from "../src/utils/handleError.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { TbRulerMeasure } from "react-icons/tb";
import { MdTaxiAlert } from "react-icons/md";

const handler = async (req, res) => {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      throwError(400, "Both email and password fields are required");
    }

    // Find user email from DB
    const userResult = await db("users").select("*").where("email", email);

    // Check if email exists
    if (userResult.length === 0) {
      throwError(401, "Unknown email, please register your account");
    }

    // Define valid user
    const user = userResult[0];

    // Match password input with user hash stored in DB
    const passwordMatch = await bcrypt.compare(password, user.hash);

    if (!passwordMatch) {
      throwError(401, "Incorrect password");
    }

    const expires_in = 60 * 60 * 24; // 24 hours
    const exp = Math.floor(Date.now() / 1000) + expires_in;

    const token = jwt.sign({ email, exp }, process.env.JWT_SECRET);
    const encodedToken = encodeURIComponent(token);
    // res.cookie("jwt", token, {
    //   httpOnly: true,
    //   // secure: true, // SET TRUE FOR PRODUCTION
    //   sameSite: "Strict",
    //   maxAge: exp,
    // });

    res.setHeader(
      "Set-Cookie",
      `jwt=${encodedToken}; HttpOnly; SameSite=Strict; Max-Age=${expires_in}`
    );
    res.status(200).json({
      message: "Login success",
    });
  } catch (err) {
    handleError(res, err);
  }
};

export default handler;
