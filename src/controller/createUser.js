exports.post = (req, res) => {
    console.log('signup - my user data is', req.body);
    res.redirect('/search-page');
}