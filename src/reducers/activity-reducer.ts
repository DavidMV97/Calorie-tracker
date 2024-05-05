import { Activity } from "../types"

export type ActivityActions = {
    type: 'save-activity',
    payload: { newActiviy : Activity }
}

type ActivityState = {
    activities : Activity[]
}

export const initialState : ActivityState = {
    activities : []
}

export const activityReducer = (
    state : ActivityState = initialState ,
    actions : ActivityActions
) => {

    if (actions.type === 'save-activity') {
        // Este código maneja la logica para manejar el state
        console.log('Ddesde el tiype de saveactivity');
    }

    return state
}