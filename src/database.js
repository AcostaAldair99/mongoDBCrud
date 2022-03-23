import {connect} from "mongoose";
import {MONGODB_URI} from "./config"
//De esta forma no se necesita llamar a la funcion
//para que esta se ejecute.

(async()=>{
    try{
        const db = await connect(MONGODB_URI);
        console.log("Db connected to",db.connection.name);
    }catch(error){
        console.log(error);
    }
    

})()