const prisma = require('../models/PrismaService');

const ProductController = {
    async list(req, res) {
        try {
            const products = await prisma.product.findMany();
            res.json(products);
        } catch (error) {
            console.error('Erro ao listar produtos:', error);
            res.status(500).json({ message: 'Erro interno ao listar produtos.' });
        }
    },

    async add(req, res) {
        try {
            console.log('Dados recebidos:', req.body);
            console.log('Role do usuário:', req.userRole);

            const { name, description, price } = req.body;
            const userRole = req.userRole;

            if (userRole !== 'admin') {
                return res.status(403).json({ message: 'Apenas administradores podem cadastrar produtos.' });
            }

            if (!name || !description || !price) {
                return res.status(400).json({ message: 'Todos os campos são obrigatórios.' });
            }

            const newProduct = await prisma.product.create({
                data: {
                    name,
                    description,
                    price: parseFloat(price),
                },
            });

            res.status(201).json(newProduct);
        } catch (error) {
            console.error('Erro ao adicionar produto:', error);
            res.status(500).json({ message: 'Erro interno ao adicionar produto.' });
        }
    },
};

module.exports = ProductController;
