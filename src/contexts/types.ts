import { ReactNode } from "react"

export interface IBetslipContextState {
    coupon: CouponItemType[]
    isBetslipPlayable: boolean
    selectedEvents: SelectedEventsType
}

export type SelectedEventsType = {
    [key: string]: { oddName: string | undefined, outCome: string | undefined }
}

export type CouponItemType = null | {
    eventName: string
    oddName: string
    outCome: string
    mbc: number
}

export interface IBetslipContextAction<T> {
    type: T
}

export interface AddEventToBetslipAction extends IBetslipContextAction<"ADD_EVENT_TO_BETSLIP"> {
    payload: {
        couponItem: CouponItemType,
        isPlayable: boolean
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
        eventName: string | undefined,
        isPlayable: boolean
    }
}

export type CleanBetslipFailedAction = IBetslipContextAction<"CLEAN_BETSLIP">

export type CleanBetslipFailedPayloadType = null

export interface BetslipContextType extends IBetslipContextState {
    addEventToBetslip: AddEventToBetslipType
    cleanBetslip: CleanBetslipType
    removeEventFromBetslip: RemoveEventFromBetslipType
}

export type BetslipProviderType = {
    children: ReactNode,
    value?: IBetslipContextState
}

export type ReducerType = (state: IBetslipContextState, action: AddEventToBetslipAction | AddEventToBetslipFailedAction | CleanBetslipFailedAction | PlayBetslipFetchAction | PlayBetslipFailedAction | RemoveItemFromBetslipType) => IBetslipContextState

export type AddEventToBetslipType = (couponItem: CouponItemType) => void
export type CleanBetslipType = () => void
export type RemoveEventFromBetslipType = (couponItem: CouponItemType) => void
