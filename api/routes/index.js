var express = require('express');
var router = express.Router();
const usuarios = require('./../models/usuarios');

router.get('/', async (req, res, next) => {
  try {
    let result = await usuarios.getUsers();
    console.log(result);

    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al consultar usuarios');
  }
});

router.post('/', async (req, res, next) => {
  try {
    const nuevoUsuario = req.body;
    console.log('Nuevo usuario:', nuevoUsuario);
    await usuarios.saveUser(nuevoUsuario);
    res.status(201).send('Usuario guardado exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al guardar usuario');
  }
});
router.delete('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;

    await usuarios.deleteUserById(userId);

    res.status(200).send('Usuario eliminado exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al eliminar usuario');
  }
});
router.put('/:id', async (req, res, next) => {
  try {
    const userId = req.params.id;
    const updatedUserData = req.body;

    await usuarios.updateUserById(userId, updatedUserData);

    res.status(200).send('Usuario actualizado exitosamente');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al actualizar usuario');
  }
});
module.exports = router;
