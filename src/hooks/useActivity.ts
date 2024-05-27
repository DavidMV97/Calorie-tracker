import { useContext } from "react"
import { activityContext } from "../context/ActivityContext"

export const useActivity = () => {
    const context = useContext(activityContext)
    if (!context) {
        throw new Error('useActivity hook must be used within a ActivityProvider')
    }
    return context
}