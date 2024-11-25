import jwt from 'jsonwebtoken'
export const verifyToken = (req, res, next) => {
    const token = req.cookies.accessToken
    if (!token) {
        return res.status(401).json({ success: false, message: "You're not authorize" })
    }
    // if token is exist then verify the token
    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if (err) {
            return res.status(401).json({ success: false, message: "Invalid token" })
        }
        req.user = user
        next() //don't forget to call naxt
    });
};

export const verifyUser = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.id === req.params.id || req.user.role === 'admin') {
            next()
        } else {
            return res
                .status(401)
                .json({ success: false, message: "You're not authenticated" });
        }
    });
};

export const verifyAdmin = (req, res, next) => {
    verifyToken(req, res, next, () => {
        if (req.user.role === 'admin') {
            next()
        } else {
            return res
                .status(401)
                .json({ success: false, message: "You're not authorize" });
        }
    });
};

// suhana
// accessToken = eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDRlMDFlNzc2NTg2MzY5MjlmN2M3MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI1MjI3NjQwLCJleHAiOjE3MjY1MjM2NDB9.2Dw7qxRwDPgJpRtwGTLOYPOxbJDe70uxOTMYChKEgoI; Path =/; HttpOnly;


// user
// accessToken=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY2ZDRlMDFlNzc2NTg2MzY5MjlmN2M3MCIsInJvbGUiOiJ1c2VyIiwiaWF0IjoxNzI1MjI3NjQwLCJleHAiOjE3MjY1MjM2NDB9.2Dw7qxRwDPgJpRtwGTLOYPOxbJDe70uxOTMYChKEgoI; Path=/; HttpOnly;