import { supabase } from "../supabaseClient";

export const getAllDrivers = async () => {
  const { data, error } = await supabase
    .from('drivers')
    .select('*')

  if (error) {
    console.error('Error fetching drivers:', error)
    return []
  }

  return data
};

export const getDriverById = async (id) => {
  const { data, error } = await supabase
    .from('drivers')
    .select('*')
    .eq('id', id)

  if (error) {
    console.error('Error fetching driver by id:', error)
    return []
  }

  return data
};

export const getDriverByEmail = async (email) => {
  const { data, error } = await supabase
    .from('drivers')
    .select('*')
    .eq('email', email)

  if (error) {
    console.error('Error fetching driver by email:', error)
    return []
  }

  return data
};

export const updateDriver = async (driver) => {
  const { data, error } = await supabase
    .from('drivers')
    .update(driver)
    .eq('id', driver.id)
    .select()

  if (error) {
    console.error('Error updating driver:', error)
    return null
  }

  return data[0]
};

export const createDriver = async (driver) => {
  const { data, error } = await supabase
    .from('drivers')
    .insert([driver])
    .select()

  if (error) {
    console.error('Error creating driver:', error)
    return null
  }

  return data[0]
};
