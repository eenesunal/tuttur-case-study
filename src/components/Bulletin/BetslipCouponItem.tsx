import { FC } from "react"

import Text from "components/Text"
import Box from "components/Box"
import Button from "components/Button"

import useBetslip from "hooks/useBetslip"

import { CouponItemType } from "contexts/types"

const BetslipCouponItem: FC<{couponItem: CouponItemType}> = ({ couponItem }) => {
    const { removeEventFromBetslip } = useBetslip()

    return (
        <Box css={{ mb: 5, p: 5, display: "flex", alignItems: "center" }}>
            <Text css={{ text: "sm", mr: 5 }}>{couponItem?.mbc}</Text>
            <Text weight="bold" css={{ text: "sm" }}>{couponItem?.eventName}</Text>
            <Text css={{ text: "sm", mx: 5 }}>{couponItem?.oddName}</Text>
            <Text weight="bold" css={{ text: "sm", ml: "auto" }}>{couponItem?.outCome}</Text>
            <Button role="remove-coupon-item" variant="remove" size="mini" css={{ ml: "auto" }} onClick={() => removeEventFromBetslip(couponItem)}>X</Button>
        </Box>
    )
}

export default BetslipCouponItem