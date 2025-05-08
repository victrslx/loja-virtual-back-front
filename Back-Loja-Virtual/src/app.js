const express = require('express');
const cors = require('cors');

const authRoutes = require('./routes/auth.routes');
const productRoutes = require('./routes/product.routes');
const cartRoutes = require('./routes/cart.routes');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/auth', authRoutes);
console.log('Auth routes loaded!');

app.use('/products', productRoutes);
app.use('/cart', cartRoutes);
app.get('/teste', (req, res) => {
    res.send('Servidor está funcionando!');
});

// Tratamento de erros globais
app.use((err, req, res, next) => {
    console.error('Erro não tratado:', err);
    res.status(500).json({ message: 'Erro interno no servidor' });
});

// Captura de erros não tratados e rejeições de Promises
process.on('uncaughtException', (err) => {
    console.error('Erro não tratado:', err);
    process.exit(1); // Encerra o processo para evitar estado inconsistente
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Rejeição não tratada em:', promise, 'Razão:', reason);
    process.exit(1); // Encerra o processo para evitar estado inconsistente
});

module.exports = app;
