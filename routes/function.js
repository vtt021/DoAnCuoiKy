module.exports = function(app, passport) {

    // route middleware để kiểm tra một user đã đăng nhập hay chưa?
    function isLoggedIn(req, res, next) {
        // Nếu một user đã xác thực, cho đi tiếp
        if (req.isAuthenticated())
            return next();
        // Nếu chưa, đưa về trang chủ
        res.redirect('/');
    }
};