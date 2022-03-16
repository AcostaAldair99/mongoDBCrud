//Aqui se guardan todas las funciones
//Controladoras
import task from '../models/Task.js'
export const renderTask =async(req,res)=>{
    //Lean es para devolver objetos JSON
    const tareas=await task.find().lean();

    res.render("index",{tasks:tareas});
};

export const renderEdit =async(req,res)=>{
    try {
        const tarea=await task.findById(req.params.id).lean();
        res.render('edit',{tarea});
    } catch (error) {
        console.log(error)
    }
}

export const addTask =async(req,res)=>{
    try{
        const tasks=task(req.body);
        const taskSaved=await tasks.save();
        console.log(taskSaved);
        res.redirect('/');
    }catch(error){
        console.log(error);
    }
}


export const deleteTask =async(req,res)=>{
    try{
        const {id}=req.params;
        await task.findByIdAndDelete(id);
        res.redirect('/');
    }catch(error){
        console.log(error);
    }
}

export const toogleDone= async(req,res)=>{
    //Para recibir los parametros de la peticions
    const {id}=req.params;

    const tarea=await task.findById(id);
    tarea.done=!tarea.done;
    await tarea.save();
    res.redirect('/');
};


export const editTask=async(req,res)=>{
    try{
        console.log(req.body);
        const {id}=req.params;

       await task.findByIdAndUpdate(id,req.body);
        res.redirect('/');
    }catch(error){
        console.log(error);
    }
}