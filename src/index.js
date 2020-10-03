const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');
const mysql = require('mysql');
const myConnection = require('express-myconnection');
const customerRoutes= require('./routes/customer');

//settings
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname,'views'));

//middleware
app.use(morgan('dev'))//esto es para registrar las rutas y solicitudes a nuestro server
app.use(myConnection(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    port:'3306',
    database:'crudnodejs'
},'single'))

app.use(express.urlencoded({extended:false}));
//routes
app.use('/',customerRoutes);

//archivos estaticos
app.use(express.static(path.join(__dirname,'public')));

//listen server
app.listen(app.get('port'),()=>{
    console.log('server running on port 3000');
})