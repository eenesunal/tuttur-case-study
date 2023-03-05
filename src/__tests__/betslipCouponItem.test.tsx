import { render, screen } from "../renderWithProviders"
import "@testing-library/jest-dom"

import BetslipCouponItem from "components/Bulletin/BetslipCouponItem"
import { CouponItemType } from "contexts/types"

test("loads and displays Coupon Item with data", async () => {
    const couponItem: CouponItemType = {
        eventName: "Beşiktaş JK - West Ham Utd.",
        oddName: "Over 2.5",
        outCome: "2,05",
        mbc: 1,
    }

    render(<BetslipCouponItem couponItem={couponItem} />)

    expect(screen.getByText(/beşiktaş jk - west ham utd./i)).toBeInTheDocument()

    const removeCouponItem = screen.getByRole(/remove-coupon-item/i)
    expect(removeCouponItem).toBeInTheDocument()
})