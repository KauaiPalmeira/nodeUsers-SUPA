const { createClient } = require('@supabase/supabase-js');
require('dotenv').config();

const supabaseUrl = process.env.URL;
const supabaseKey = process.env.API;

const supabase = createClient(supabaseUrl, supabaseKey);

module.exports = supabase;