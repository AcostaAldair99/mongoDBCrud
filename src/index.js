
//Inicializaciones

const express=require('express');
const app=express();
const path=require('path');
const exphbs=require('express-handlebars');

//Settings 
app.set('port',process.env.PORT || 3000);
app.set('views',path.join(__dirname,'views'));
app.engine('.hbs',exphbs({
    defaultLayout:'main',
    layoutDir:path.join(app.get('views'),'layouts'),
    partialsDir:path.join(app.get('views'),'partials'),
    extname:'.hbs'
}));
app.set('view engine','.hbs');


//Middlewares Funciones que sean ejecutadas antes de pasarse a rutas



//Global Variables 



//Routes

//Static Files


//Server is Listening
app.listen(app.get('port'),()=>{
    console.log("Server is listening",app.get('port'));
});







