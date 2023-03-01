import { createContext, FC, useReducer } from "react"
import{ find, map } from "lodash"

import { playBetslip as playBetslipCall } from "api"

import {
    AddEventToBetslipType,
    BetslipContextType,
    BetslipProviderType,
    CleanBetslipType,
    IBetslipContextState,
    PlayBetslipType,
    ReducerType,
    RemoveEventFromBetslipType
} from "./types"

const initialState: IBetslipContextState = {
    coupon: [],
    loading: false,
    error: null
}

const reducer: ReducerType = (state, action) => {
    switch(action.type) {
        case "ADD_EVENT_TO_BETSLIP":
            return {
                ...state,
                coupon: find(state.coupon, ["eventName", action.payload.couponItem?.eventName]) ? 
                    map(state.coupon, (couponItem) => couponItem?.eventName === action.payload.couponItem?.eventName ? action.payload.couponItem : couponItem) : 
                    [...state.coupon, action.payload.couponItem]
            }
        case "ADD_EVENT_TO_BETSLIP_FAILED":
            return {
                ...state,
                error: action.payload.error
            }
    case "CLEAN_BETSLIP":
            return {
                ...initialState
            }
        case "REMOVE_ITEM_FROM_BETSLIP":
            return {
                ...initialState,
                coupon: state.coupon.filter(couponItem => couponItem?.eventName !== action.payload.eventName)
            }
        case "PLAY_BETSLIP_FETCH":
            return {
                ...state,
                loading: true,
                error: null
            }
        case "PLAY_BETSLIP_FAILED":
            return {
                ...state,
                loading: false,
                error: action.payload.error
            }
        case "PLAY_BETSLIP_SUCCESS":
            return {
                ...initialState
            }
        default:
            return state
    }
}

const BetslipContext = createContext<BetslipContextType>({
    ...initialState,
    addEventToBetslip: () => {},
    cleanBetslip: () => {},
    playBetslip: () => {},
    removeEventFromBetslip: () => {},
})

const BetslipProvider: FC<BetslipProviderType> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addEventToBetslip: AddEventToBetslipType = (couponItem) => {
        try {

            dispatch({
                type: "ADD_EVENT_TO_BETSLIP",
                payload: { couponItem }
            })
        } catch (error: unknown) {
            dispatch({
                type: "ADD_EVENT_TO_BETSLIP_FAILED",
                payload: { error }
            })
        }
    }

    const cleanBetslip: CleanBetslipType = () => {
        dispatch({
            type: "CLEAN_BETSLIP"
        })
    }

    const removeEventFromBetslip: RemoveEventFromBetslipType = (eventName) => {
        dispatch({
            type: "REMOVE_ITEM_FROM_BETSLIP",
            payload: {
                eventName
            }
        })
    }

    const playBetslip: PlayBetslipType = async () => {
        try {
            dispatch({
                type: "PLAY_BETSLIP_FETCH"
            })

            await playBetslipCall()

            dispatch({
                type: "PLAY_BETSLIP_SUCCESS"
            })
        } catch(error) {
            dispatch({
                type: "PLAY_BETSLIP_FAILED",
                payload: { error }
            })
        }
    }

    return (
        <BetslipContext.Provider
            value={{
                ...state,
                addEventToBetslip,
                cleanBetslip,
                playBetslip,
                removeEventFromBetslip
            }}
        >
            {children}
        </BetslipContext.Provider>
    )
}

export { BetslipContext, BetslipProvider }
