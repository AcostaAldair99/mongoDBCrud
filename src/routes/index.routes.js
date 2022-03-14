//Crear Rutas con Express
import {Router} from 'express';
import task from '../models/Task.js'
const router=Router();

router.get('/',async(req,res)=>{
    //Lean es para devolver objetos JSON
    const tareas=await task.find().lean();

    res.render("index",{tasks:tareas});

});

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/edit/:id',async(req,res)=>{
    try {
        const tarea=await task.findById(req.params.id).lean();
        res.render('edit',{tarea});
    } catch (error) {
        console.log(error)
    }
    
});

//Tomar datos del formulario
router.post('/task/add',async(req,res)=>{
    try{
        const tasks=task(req.body);
        const taskSaved=await tasks.save();
        console.log(taskSaved);
        res.redirect('/');
    }catch(error){
        console.log(error);
    }
    
});

router.post('/edit/:id',async(req,res)=>{
    try{
        console.log(req.body);
        const {id}=req.params;

       await task.findByIdAndUpdate(id,req.body);
        res.redirect('/');
    }catch(error){
        console.log(error);
    }
});


router.get('/delete/:id',async(req,res)=>{
    try{
        const {id}=req.params;
        await task.findByIdAndDelete(id);
        res.redirect('/');
    }catch(error){
        console.log(error);
    }
    
});
export default router;

