const authService = require("../services/authService");

const signUp = async (req, res) => {
  try {
    const { email, password, name} = req.body;
    
    if ( !email || !password ) {
        return res.status(400).json({ message: 'KEY_ERROR' });
    }
    await authService.signUp(email, password, name);

    res.status(201).json("SIGNUP_SUCCESS");
  } catch (err) {
    res
      .status(err.statusCode ? err.statusCode : 400)
      .json({ message: err.message });
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    
    if ( !email || !password ) {
      return res.status(400).json({ message: 'KEY_ERROR' });
}
    const accessToken = await authService.signIn(email, password);

    res.status(200).json({ accessToken: accessToken });
  } catch (err) {
    res
      .status(err.statusCode ? err.statusCode : 401)
      .json({ message: err.message });
  }
};

module.exports = { signUp, signIn };