const express = require('express');
const mongoose = require('mongoose');
const taskRoutes = require('./routes/taskRoutes');
const app = express();
const port = 3000;
// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// Conexión a la base de datos MongoDB
mongoose.connect('mongodb://mongo:27017/taskmanager', {
 useNewUrlParser: true,
 useUnifiedTopology: true,
}).then(() => {
 console.log('Conectado a MongoDB');
}).catch(err => console.log(err));
// Rutas
app.use('/api/tasks', taskRoutes);
// Servidor escuchando
app.listen(port, () => {
 console.log(`Servidor corriendo en http://localhost:${port}`);
});