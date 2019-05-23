exports.post = (req, res) => {
  console.log("my location is", req.body);
  const location = req.body;
  res.cookie("location", JSON.stringify(location));
  res.end();
};
