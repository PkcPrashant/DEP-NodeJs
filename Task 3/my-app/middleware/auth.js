module.exports = (req, res, next) => {
    const cookies = req.cookies;
    fs.readFile(path.join(__dirname, '../helpers/user.json'), (err, data) => {
        if(err) throw err;
        const password = (JSON.parse(data))[cookies.username].password;
        const auth_token = crypto.createHash('sha1').update(cookies.username+password).digest('hex');
        if(cookies.username && (cookies.auth_token === auth_token)) {
            next();
        } else {
            res.status(302).send({"location": '/login.html'});
        }
    })
};

