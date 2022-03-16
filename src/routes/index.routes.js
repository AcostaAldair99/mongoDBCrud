//Crear Rutas con Express
import {Router} from 'express';

import {editTask,renderTask,renderEdit,addTask,deleteTask,toogleDone} from '../controllers/task.controller.js';

const router=Router();

router.get('/', renderTask);

router.get('/about',(req,res)=>{
    res.render('about');
});

router.get('/edit/:id',renderEdit);

//Tomar datos del formulario
router.post('/task/add',addTask);

router.post('/edit/:id',editTask);


router.get('/delete/:id',deleteTask);


router.get('/toogleDone/:id',toogleDone);
export default router;

