import {
    calculateTotalOutCome,
    calculatePossibleWinAmount
} from "components/Bulletin/helpers"

import { CouponItemType } from "contexts/types"

const coupon: CouponItemType[] = [
    { eventName: "Arsenal - Liverpool", oddName: "Match Result: Home", outCome: "2.00", mbc: 3 },
    { eventName: "Manchester City - Fulham", oddName: "Match Result: Draw", outCome: "3.00", mbc: 3 },
]

test("calculate total outcome", () => {
    const totalOutcome = calculateTotalOutCome(coupon)

    expect(totalOutcome).toBe(5)
})

test("calculate possible win amount", () => {
    expect(calculatePossibleWinAmount(coupon, 5)).toBe(25)
    expect(calculatePossibleWinAmount(coupon, 10)).toBe(50)
    expect(calculatePossibleWinAmount(coupon, 20)).toBe(100)
})