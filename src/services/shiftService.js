import { supabase } from "../supabaseClient";

export const getAllShifts = async () => {
  const { data, error } = await supabase
    .from('shifts')
    .select('*')

  if (error) {
    console.error('Error fetching shifts:', error)
    return []
  }

  return data
};

export const getShiftsByDriverAndRiderShifts = async () => {
  const { data, error } = await supabase
    .from('shifts')
    .select('*, driver:drivers(*), riderShifts(*)')

  if (error) {
    console.error('Error fetching shifts by driver and rider shifts:', error)
    return []
  }

  return data
};

export const createShift = async (newShift) => {
  const { data, error } = await supabase
    .from('shifts')
    .insert([newShift])
    .select()

  if (error) {
    console.error('Error creating shift:', error)
    return null
  }

  return data[0]
};

export const editShift = async (shiftObject) => {
  const { data, error } = await supabase
    .from('shifts')
    .update(shiftObject)
    .eq('id', shiftObject.id)
    .select()

  if (error) {
    console.error('Error updating shift object:', error)
    return null
  }

  return data[0]
};

export const deleteShift = async (shiftId) => {
  const { error } = await supabase
    .from('shifts')
    .delete()
    .eq('id', shiftId)

  if (error) {
    console.error('Error deleting shift:', error)
    return null
  }
};
