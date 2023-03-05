import { find, filter, map } from "lodash"

import {
    CouponItemType,
    SelectedEventsType
} from "./types"

export const removeItemFromObject = (object: object, field: string | undefined) => {
    const newObject: SelectedEventsType = { ...object }

    if (field) {
        delete newObject[field]
    }

    return newObject
}

export const getIsPlayable = (coupon: CouponItemType[], newCouponItem: CouponItemType, isRemove: boolean) => {
    let newCoupon: CouponItemType[]
    if(isRemove) {
        newCoupon = filter(coupon, (couponItem) => couponItem?.eventName !== newCouponItem?.eventName)
    } else {
        newCoupon = find(coupon, ["eventName", newCouponItem?.eventName]) ?
        map(coupon, (couponItem) => couponItem?.eventName === newCouponItem?.eventName ? newCouponItem : couponItem) :
        [...coupon, newCouponItem]
    }
    
    const highestMBC = newCoupon.length > 0 ? Math.max(...map(newCoupon, c => c?.mbc ? c?.mbc : 0)) : newCouponItem?.mbc
    return highestMBC ? newCoupon.length >= highestMBC : false
}