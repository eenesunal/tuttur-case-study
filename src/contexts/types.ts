import { ReactNode } from "react"

export interface IBetslipContextState {
    coupon: CouponItemType[]
    error: string | unknown
    loading: boolean
    selectedEvents: SelectedEventsType
}

export type SelectedEventsType = {
    [key: string]: { oddName: string | undefined, outCome: string | undefined }
}

export type CouponItemType = null | {
    eventName: string
    oddName: string
    outCome: string
}

export interface IBetslipContextAction<T> {
    type: T
}

export interface AddEventToBetslipAction extends IBetslipContextAction<"ADD_EVENT_TO_BETSLIP"> {
    payload: {
        couponItem: CouponItemType
    }
}

export interface AddEventToBetslipFailedAction extends IBetslipContextAction<"ADD_EVENT_TO_BETSLIP_FAILED"> {
    payload: {
        error: string | unknown
    }
}


export type PlayBetslipFetchAction = IBetslipContextAction<"PLAY_BETSLIP_FETCH">
export interface PlayBetslipFailedAction extends IBetslipContextAction<"PLAY_BETSLIP_FAILED"> {
    payload: {
        error: string | unknown
    }
}
export interface RemoveItemFromBetslipType extends IBetslipContextAction<"REMOVE_ITEM_FROM_BETSLIP"> {
    payload: {
        eventName: string
    }
}
export type PlayBetslipSuccessAction = IBetslipContextAction<"PLAY_BETSLIP_SUCCESS">

export type CleanBetslipFailedAction = IBetslipContextAction<"CLEAN_BETSLIP">

export type CleanBetslipFailedPayloadType = null

export interface BetslipContextType extends IBetslipContextState {
    addEventToBetslip: AddEventToBetslipType
    cleanBetslip: CleanBetslipType
    playBetslip: CleanBetslipType
    removeEventFromBetslip: RemoveEventFromBetslipType
}

export type BetslipProviderType = {
    children: ReactNode
}

export type ReducerType = (state: IBetslipContextState, action: AddEventToBetslipAction | AddEventToBetslipFailedAction | CleanBetslipFailedAction | PlayBetslipFetchAction | PlayBetslipFailedAction | PlayBetslipSuccessAction | RemoveItemFromBetslipType) => IBetslipContextState

export type AddEventToBetslipType = (couponItem: CouponItemType) => void
export type CleanBetslipType = () => void
export type PlayBetslipType = () => void
export type RemoveEventFromBetslipType = (eventName: string) => void
