import throwError from "./throwError";

const validate = (email, password) => {
  try {
    if (!email || !password)
      throwError(400, "Email and password fields are required");
    else if (password.length < 6)
      throwError(400, "Password must be at least 6 characters");
  } catch (error) {
    throw error;
  }
  return;
};

export default validate;
