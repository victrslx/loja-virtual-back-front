const prisma = require('../models/PrismaService');

class CartController {
    static async                                                                                                                                                                                                                                                                 add(req, res) {
        try {
            const { productId, quantity } = req.body;
            const userId = req.userId;

            if (!userId) {
                console.error('Erro: userId não encontrado no request.');
                return res.status(400).json({ message: 'Usuário não autenticado.' });
            }

            console.log(`Adicionando item ao carrinho: userId=${userId}, productId=${productId}, quantity=${quantity}`);

            await prisma.cartItem.create({
                data: {
                    productId,
                    quantity,
                    userId,
                },
            });

            res.status(201).json({ message: 'Item adicionado ao carrinho com sucesso!' });
        } catch (error) {
            console.error('Erro ao adicionar item ao carrinho:', error);
            res.status(500).json({ message: 'Erro interno ao adicionar item ao carrinho' });
        }
    }

    static async list(req, res) {
        try {
            const userId = req.userId;

            const cartItems = await prisma.cartItem.findMany({
                where: { userId },
                include: {
                    product: true,
                }
            });

            res.status(200).json(cartItems);
        } catch (error) {
            console.error('Erro ao listar carrinho:', error);
            res.status(500).json({ message: 'Erro interno ao listar carrinho' });
        }
    }
}

module.exports = CartController;

