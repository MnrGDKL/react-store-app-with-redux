import { SET_ADD_ITEMS, SET_REMOVE_ITEM } from '../types/addItemsTypes'

export const setActionAddItems = (parameter) => {
  return { type: SET_ADD_ITEMS, payload: parameter }
}

export const setActionRemoveItems = (parameter) => {
  return { type: SET_REMOVE_ITEM, payload: parameter,}
}
