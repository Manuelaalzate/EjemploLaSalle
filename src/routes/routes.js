const { Router } = require('express');
const path = require('path');
const router = Router();

router.get('/',(req,res) => {
  res.send('Mi primera clase Backend');
});

router.get('/Saludo', (req,res) => {
  res.send('Hola Manuela Bienvenida');
});

module.exports = router;
