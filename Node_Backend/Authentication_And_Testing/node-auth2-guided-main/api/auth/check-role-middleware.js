module.exports = (role) => (req,res,next) => {
  if (req.decodedtoken.role === role){
    next();
  } else {
    res.status(403).json("Admins only");
  }
}
