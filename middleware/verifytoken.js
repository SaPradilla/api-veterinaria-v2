const jwt = require("jsonwebtoken")
const config = process.env
const verifyToken = (req, res, next) => {
  const token =
    req.body.token || req.headers["auth-token"]
  if (!token) {
    return res.status(403).json({error:"Se requiere un token para la autenticación"})
  }
  try {
    const verified = jwt.verify(token,config.TOKEN_KEY)
    req.user = verified
    next()
  } catch (err) {
    return res.status(401).json("token no es válido")
  }
}
module.exports = verifyToken
