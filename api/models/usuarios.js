const knex = require('./../bd');

async function getUsers(userId) {
    try {
        let query = knex('usuarios').select('*');
        
        if (userId) {
            query = query.where('id', userId).first();
        }

        let result = await query;

        return result;
    } catch (error) {
        throw error;
    }
}
async function saveUser(nuevoUsuario) {
    try {
        await knex('usuarios').insert(nuevoUsuario);
    } catch (error) {
        throw error;
    }
}
async function deleteUserById(userId) {
    try {
        await knex('usuarios').where('id', userId).del();
    } catch (error) {
        throw error;
    }
}
async function updateUserById(userId, updatedUserData) {
    try {
      
      await knex('usuarios').where('id', userId).update(updatedUserData);
    } catch (error) {
      throw error;
    }
  }
  
module.exports ={
    getUsers,
    saveUser,
    deleteUserById,
    updateUserById
}