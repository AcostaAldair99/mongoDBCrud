import {Schema,model} from 'mongoose';

//Schema ->Campos que quiero Guardar
// model ->Nombre de la Tabla

const taskSchema=new Schema({
    title :{
        type:String,
        required:true, //Nos ayuda a requerir siempre este String
        unique:true,   //Nos ayuda a no repetir mismo Parametro
        trim:true  //Nos elimina los espacios del dato
    },
    description :{
        type: String,
        required:true 
    },
    done : {
        type:Boolean,
        default:false
    },
},{
    //Este objeto ayuda a crear propiedades
    //CreatedAt y updatedAt
    timestamps:true ,
    versionKey: false
});

//Ingresamos el modelo a la tabla y la exportamos
export default model('Tasks',taskSchema);

