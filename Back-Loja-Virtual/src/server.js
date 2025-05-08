const app = require('./app');
const PORT = process.env.PORT || 5500;

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
}).on('error', (err) => {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
});
