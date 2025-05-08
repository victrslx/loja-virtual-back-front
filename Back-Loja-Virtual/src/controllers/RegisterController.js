const prisma = require('../models/PrismaService');
const bcrypt = require('bcrypt');

const RegisterController = {
    async register(req, res) {
        try {
            const { username, password } = req.body;

            if (!username || !password) {
                return res.status(400).json({ message: 'Username e senha são obrigatórios.' });
            }

            const existingUser = await prisma.user.findUnique({
                where: { username },
            });

            if (existingUser) {
                return res.status(400).json({ message: 'Usuário já existente.' });
            }

            const hashedPassword = await bcrypt.hash(password, 10);

            await prisma.user.create({
                data: {
                    username,
                    password: hashedPassword,
                },
            });

            res.status(201).json({ message: 'Usuário criado com sucesso!' });
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
            res.status(500).json({ message: 'Erro interno ao criar usuário.' });
        }
    }
};

module.exports = RegisterController;
