const {Router} = require('express');
const controller = require('../controllers/customerController');
const router = Router();

router.get('/',controller.list);

router.post('/add',controller.save);

router.get('/delete/:id',controller.delete);

router.get('/update/:id',controller.edit);

router.post('/update/:id',controller.actualizar);


module.exports=router;