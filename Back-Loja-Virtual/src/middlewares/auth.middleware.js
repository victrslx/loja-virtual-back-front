const jwt = require('jsonwebtoken');
const ACCESS_KEY = process.env.ACCESS_KEY;

module.exports = function verificarToken(req, res, next) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        console.error('Token não fornecido.');
        return res.status(401).json({ message: 'Token não fornecido.' });
    }

    const token = authHeader.split(' ')[1];

    try {
        const decoded = jwt.verify(token, ACCESS_KEY);
        req.userId = decoded.userId;
        req.userRole = decoded.role;
        next();
    } catch (error) {
        console.error('Erro ao verificar token:', error);
        res.status(401).json({ message: 'Token inválido.' });
    }
};
