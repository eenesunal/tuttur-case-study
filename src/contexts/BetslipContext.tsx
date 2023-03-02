import { createContext, FC, useReducer } from "react"
import { find, filter, map } from "lodash"

import {
    AddEventToBetslipType,
    BetslipContextType,
    BetslipProviderType,
    CleanBetslipType,
    CouponItemType,
    IBetslipContextState,
    ReducerType,
    RemoveEventFromBetslipType,
    SelectedEventsType
} from "./types"

const removeItemFromObject = (object: object, field: string) => {
    const newObject: SelectedEventsType = { ...object }
    delete newObject[field]

    return newObject
}

const getIsPlayable = (coupon: CouponItemType[], newCouponItem: CouponItemType) => {
    const newCoupon: CouponItemType[] = find(coupon, ["eventName", newCouponItem?.eventName]) ?
        map(coupon, (couponItem) => couponItem?.eventName === newCouponItem?.eventName ? newCouponItem : couponItem) :
        [...coupon, newCouponItem]

    const highestMBC =  newCoupon.length > 0 ? Math.max(...map(newCoupon, c => c?.mbc ? c?.mbc : 0)) : newCouponItem?.mbc

    return highestMBC ? newCoupon.length >= highestMBC : false
}

const initialState: IBetslipContextState = {
    coupon: [],
    isBetslipPlayable: false,
    selectedEvents: {}
}

const reducer: ReducerType = (state, action) => {
    switch (action.type) {
        case "ADD_EVENT_TO_BETSLIP":
            return {
                ...state,
                coupon: find(state.coupon, ["eventName", action.payload.couponItem?.eventName]) ?
                    map(state.coupon, (couponItem) => couponItem?.eventName === action.payload.couponItem?.eventName ? action.payload.couponItem : couponItem) :
                    [...state.coupon, action.payload.couponItem],
                selectedEvents: { ...state.selectedEvents, [action.payload.couponItem?.eventName || "event"]: { oddName: action.payload.couponItem?.oddName, outCome: action.payload.couponItem?.eventName } },
                isBetslipPlayable: action.payload.isPlayable
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
                coupon: filter(state.coupon, couponItem => couponItem?.eventName !== action.payload.eventName),
                selectedEvents: removeItemFromObject(state.selectedEvents, action.payload.eventName)
            }
        default:
            return state
    }
}

const BetslipContext = createContext<BetslipContextType>({
    ...initialState,
    addEventToBetslip: () => { },
    cleanBetslip: () => { },
    removeEventFromBetslip: () => { },
})

const BetslipProvider: FC<BetslipProviderType> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    const addEventToBetslip: AddEventToBetslipType = (couponItem) => {
        try {
            const isPlayable = getIsPlayable(state.coupon, couponItem)

            dispatch({
                type: "ADD_EVENT_TO_BETSLIP",
                payload: { couponItem, isPlayable }
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
    return (
        <BetslipContext.Provider
            value={{
                ...state,
                addEventToBetslip,
                cleanBetslip,
                removeEventFromBetslip
            }}
        >
            {children}
        </BetslipContext.Provider>
    )
}

export { BetslipContext, BetslipProvider }
