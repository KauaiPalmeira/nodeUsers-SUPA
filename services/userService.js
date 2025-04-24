const supabase = require('../config/db');

async function getAllUsers() {
    const { data, error } = await supabase.from('usuario').select('*');
    if (error) throw error;
    return data;
}

async function getUserById(id) {
    const { data, error } = await supabase.from('usuario').select('*').eq('id', id).single();
    if (error) throw error;
    return data;
}

async function deleteUserById(id) {
    const { data, error } = await supabase.from('usuario').delete().eq('id', id);
    if (error) throw error;
    return data;
}

async function createUser(user) {
    const { data, error } = await supabase.from('usuario').insert([user]).select().single();
    if (error) throw error;
    return data;
}

module.exports = {
    getAllUsers,
    getUserById,
    deleteUserById,
    createUser,
};