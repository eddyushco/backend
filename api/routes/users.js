var express = require('express');
var router = express.Router();
const usuarios = require('../models/usuarios');
/* GET users listing. */
router.get('/:userId?', async (req, res, next) => {
  try {
      const userId = req.params.userId;
      let result = await usuarios.getUsers(userId);

      if (!result) {
          return res.status(404).send('Usuario no encontrado');
      }

      res.json(result);
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al consultar usuario(s)');
  }
});

router.post('/', async (req, res, next) => {
  try {
      const nuevoUsuario = req.body;

      // Lógica para guardar el nuevo usuario en la base de datos
      await usuarios.saveUser(nuevoUsuario);

      res.status(201).send('Usuario guardado exitosamente');
  } catch (error) {
      console.error(error);
      res.status(500).send('Error al guardar usuario');
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
module.exports = router;
