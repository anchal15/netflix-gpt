export const /* The `checkValidData` function in JavaScript is used to validate an email and password
input. It uses regular expressions to check if the email and password meet certain
criteria. */
  checkValidData = (email, password) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);

    if (!isEmailValid) return "Email ID is not valid";
    if (!isPasswordValid) return "Password is not valid";

    return null;
  };
