import mongoose from 'mongoose'
import ejercicio1 from './ejercicios/ejercicio1.js';
import ejercicio2 from './ejercicios/ejercicio2.js';
import ejercicio3 from './ejercicios/ejercicio3.js';

const db = mongoose.connection;

db.on('connected', () => {
    console.log('Se ha conectado a la base de datos 🟢')
})
db.on('connecting', () => {
    console.log('Intentando conectar a la base de datos 🟡')
})
db.on('disconnected', () => {
    console.log('Se ha desconectado de la base de datos 🔴')
})
db.on('error', () => {
    console.error('Error en la conexion a la base de datos 🔴')
})
mongoose.connect('mongodb+srv://usuario1:123456fa@cluster0.4mlvpxs.mongodb.net/Queries?retryWrites=true&w=majority', async() => {
    console.log('Ejercicios')
    //await ejercicio1();
    //await ejercicio2();
    await ejercicio3();
    /**
     * 1.- Entregue todos los documentos de la seleccion restaurants
     * 2.- Entregue los campos restaurant_id, name, borough y cousine de todos los documentos
     */
})