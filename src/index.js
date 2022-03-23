import { PORT } from './config.js';
import app from './app.js'
import './database.js'


//Codigo para Arrancar la aplicacion
app.listen(PORT);
console.log("Server on porasdt",PORT);



