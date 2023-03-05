import {
    removeItemFromObject,
    getIsPlayable
} from "contexts/helpers"
import { CouponItemType } from "contexts/types"

test("if removes item from object and returns new array", () => {
    const couponItem = { eventName: "Arsenal - Liverpool", oddName: "Match Result: Home", outCome: "2.00", mbc: 3, fieldToRemove: "hi" }
    const newObject = removeItemFromObject(couponItem, "fieldToRemove")

    expect(newObject).not.toHaveProperty("fieldToRemove")
})

test("if betslip is playable after adding new coupon item", () => {
    const coupon: CouponItemType[] = [{ eventName: "Arsenal - Liverpool", oddName: "Match Result: Home", outCome: "2.00", mbc: 2 }]
    const newCouponItem: CouponItemType = { eventName: "Ajax - Napoli", oddName: "Match Result: Away", outCome: "2.00", mbc: 1 }

    expect(getIsPlayable(coupon, newCouponItem, false)).toBeTruthy()
})

test("if betslip is playable after removing a coupon item from the betslip", () => {
    const coupon: CouponItemType[] = [{ eventName: "Arsenal - Liverpool", oddName: "Match Result: Home", outCome: "2.00", mbc: 2 }]
    const newCouponItem: CouponItemType = { eventName: "Arsenal - Liverpool", oddName: "Match Result: Home", outCome: "2.00", mbc: 2 }

    expect(getIsPlayable(coupon, newCouponItem, true)).toBeFalsy()
})