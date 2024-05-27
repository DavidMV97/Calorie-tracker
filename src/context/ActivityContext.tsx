import { Dispatch, ReactNode, createContext, useReducer } from "react";
import { ActivityActions, ActivityState, activityReducer, initialState } from "../reducers/activity-reducer";

type ActivityProviderProps = {
    children: ReactNode
}

type ActivityContextProps = {
    state: ActivityState
    dispatch: Dispatch<ActivityActions>
}

export const activityContext = createContext<ActivityContextProps>(null!)

export const ActivityProvider = ({children} : ActivityProviderProps) => {
    const [state, dispatch] = useReducer(activityReducer, initialState)

    return(
        <activityContext.Provider
            value={{ 
                state,
                dispatch
             }}
        >
            {children}
        </activityContext.Provider>
    )

}