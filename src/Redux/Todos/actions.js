import {ADDED, ALLCOMPLETED, CLEARCOMPLETED, COLORSELEFCTED, DELETED, TOGGLED } from './actionTypes';

export const added = (todoText) => {
     return {
        type: ADDED,
        payload: todoText
     }
}

export const toggled = (todoId) => {
     return {
        type: TOGGLED,
        payload: todoId
     }
}

export const colorslected = (todoId, color) => {
    return {
        type: COLORSELEFCTED,
        payload :{
          todoId,
          color
        }
    }
}

export const deleted = (todoId) => {
    return {
        type: DELETED,
        payload: todoId
    }
}

export const allcompleted = () => {
    return {
        type: ALLCOMPLETED,
    }
}



export const clearcompleted = () => {
      return {
        type: CLEARCOMPLETED,
      }
}
