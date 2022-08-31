const { Authorizer } = require("@authorizerdev/authorizer-js");
module.exports = verifyToken;
const authRef = new Authorizer({
  authorizerURL: process.env.REACT_APP_AUTH_URL,
  redirectURL: `${process.env.REACT_APP_SITE_URL}/wall`,
  clientID: process.env.REACT_APP_AUTH_CLIENT_ID,
});
async function verifyToken(req, res, next) {
  try {
    const res = await authRef.validateJWTToken({
      token_type: `access_token`,
      token: req.headers.authorization,
    });
    //check if token is valid
    res.is_valid
      ? next()
      : res.status(401).json({ message: "token not valid" });
  } catch (err) {
    res.status(500).json({ message: "internal server error" });
  }
}
