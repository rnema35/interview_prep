import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';

export async function verifyToken(req, res, next) {
    const token = req.cookies['authorization'];

    if (!token) {
        res.status(400).json({message: error.message});
    }
    try {
        const decoded = await jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();    
    } catch (err) {
        res.status(401).json({message: "Invalid Token"});
    }
}

export async function setAuthCookie(res, user){
   const token = jwt.sign(
        {
            id: user.id,
            name: user.name,   
        },
        process.env.JWT_SECRET,
        {expiresIn: '24h'}
    );
    
    res.cookie("authorization", token, {
        path: '/'
    })
    
    res.status(200).json({message: "Log in successfull"})
}