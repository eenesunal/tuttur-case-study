import { map, reduce } from "lodash"

import { CouponItemType } from "contexts/types"

export const calculateTotalOutCome = (coupon: CouponItemType[]) => reduce(map(coupon, (c) => c?.outCome ? Number(c?.outCome) : 0), ((prev, next) => prev + next), 0)
export const calculatePossibleWinAmount = (coupon: CouponItemType[], multiplier: number) => multiplier * calculateTotalOutCome(coupon)