
const authMiddleware = (req, res, next) => {
    const authKey = process.env.SHIPPING_SECRET_KEY
    const shipping_secret_key  = req.headers["shipping_secret_key"];
    if (!shipping_secret_key) {
        return res.status(403).json({
            "error": "SHIPPING_SECRET_KEY is missing or invalid"
        });
    }
    console.log(shipping_secret_key , authKey)
    if (shipping_secret_key != authKey) {
        return res.status(403).json({
            "error": "Failed to authenticate SHIPPING_SECRET_KEY"
        });
    }
    next()
}

module.exports = authMiddleware;