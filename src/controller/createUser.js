exports.post = (req, res) => {
    console.log('my user data is', req.body)

    
    res.redirect('/');
}