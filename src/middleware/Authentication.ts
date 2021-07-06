import { verify } from "jsonwebtoken";

export function verifyJWT(req, res, next){
    const token = req.headers['x-access-token'];
    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });
    
    verify(token, "@#$%df!#GD@", function(err, decoded) {
      if (err) return res.status(401).json({ auth: false, message: 'Invalid token.' });
      
      req.userId = decoded.id;
      next();
    });
}