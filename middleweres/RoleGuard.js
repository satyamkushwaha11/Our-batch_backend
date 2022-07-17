module.exports = (roles) => async (req, res, next) => {
  console.log(req.tokenData, "req.tokendata", roles, "roles");
  if (!roles.includes(req.tokenData.role)) {
    return res.status(403).send({
      message: "Access denied!",
      status: 403,
    });
  }
  next();
};


