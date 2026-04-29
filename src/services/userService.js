import { supabase } from "../supabaseClient";

export const getAllUsers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*')

  if (error) {
    console.error('Error fetching users:', error)
    return []
  }

  return data
};

export const getUserDrivers = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*, drivers(*)')

  if (error) {
    console.error('Error fetching drivers:', error)
    return []
  }

  return data
};

export const getUserRiders = async () => {
  const { data, error } = await supabase
    .from('users')
    .select('*, riders(*)')

  if (error) {
    console.error('Error fetching user riders:', error)
    return []
  }

  return data
};

export const getUserById = async (id) => {
  const { data, error } = await supabase
    .from('users')
    .select('*')
    .eq('id', id)

  if (error) {
    console.error('Error fetching user by id:', error)
    return []
  }

  return data
};

export const createUser = async (user) => {
  const { data, error } = await supabase
    .from('users')
    .insert([user])
    .select()

  if (error) {
    console.error('Error creating user:', error)
    return null
  }

  return data[0]
};
