import {connect} from "mongoose";

//De esta forma no se necesita llamar a la funcion
//para que esta se ejecute.
(async()=>{
    try{
        const db=await connect("mongodb://localhost/crud-mongo");
        console.log("Db connected to",db.connection.name);
    }catch(error){
        console.log(error);
    }
    

})()