const authMiddleware = (req, res, next) => {
    const authKey = "a1b2c3d4e5f67890123456789abcdef"
    const apiauthkey  = req.headers;
    if (!apiauthkey) {
        return res.status(403).json({
            "error": "SHIPPING_SECRET_KEY is missing or invalid"
        });
    }
    if (apiauthkey !== authKey) {
        return res.status(403).json({
            "error": "Failed to authenticate SHIPPING_SECRET_KEY"
        });
    }
    next()
}

module.exports = authMiddleware;