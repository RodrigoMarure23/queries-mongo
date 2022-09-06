import mongoose from 'mongoose'

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
mongoose.connect('mongodb+srv://usuario1:123456fa@cluster0.4mlvpxs.mongodb.net/?retryWrites=true&w=majority', () => {
    console.log('Ejercicios')
})