exports.post = (req, res) => {
    console.log('my location is', req.body)
    const location = req.body
    res.cookie(location);
    res.end();
}