import { supabase } from "../supabaseClient";

export const getAllRiders = async () => {
  const { data, error } = await supabase
    .from('riders')
    .select('*')

  if (error) {
    console.error('Error fetching riders:', error)
    return []
  }

  return data
};

export const createRider = async (rider) => {
  const { data, error } = await supabase
    .from('riders')
    .insert([rider])
    .select()

  if (error) {
    console.error('Error creating riders:', error)
    return null
  }

  return data[0]
};

export const createRiderShift = async (riderShift) => {
  const { data, error } = await supabase
    .from('riderShifts')
    .insert([riderShift])
    .select()

  if (error) {
    console.error('Error creating rider shifts:', error)
    return null
  }

  return data[0]
}

export const deleteRiderShift = async (id) => {
  const { error } = await supabase
    .from('riderShifts')
    .delete()
    .eq('id', id)

  if (error) {
    console.error('Error deleting rider shift:', error)
    return null
  }
}; 
