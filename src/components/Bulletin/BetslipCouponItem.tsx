import { FC } from "react"

import Text from "components/Text"
import Box from "components/Box"
import Button from "components/Button"

import useBetslip from "hooks/useBetslip"

import { CouponItemType } from "contexts/types"

const BetslipCouponItem: FC<{ couponItem: CouponItemType }> = ({ couponItem }) => {
    const { removeEventFromBetslip } = useBetslip()

    return (
        <Box css={{ mb: 5, p: 5, display: "flex", alignItems: "center", "&:hover": { backgroundColor: "$gray100" } }}>
            <Text css={{ text: "lg", mr: 5 }}>{couponItem?.mbc}</Text>
            <Box css={{ display: "flex", fd: "column", ml: 25}}>
                <Text weight="bold" css={{ text: "sm" }}>{couponItem?.eventName}</Text>
                <Text variant="footnote" css={{ text: "sm" }}>{couponItem?.oddName}</Text>
            </Box>
            <Text weight="bold" css={{ text: "sm", ml: "auto", mr: 5 }}>{couponItem?.outCome}</Text>
            <Button role="remove-coupon-item" variant="remove" size="mini" onClick={() => removeEventFromBetslip(couponItem)}>X</Button>
        </Box>
    )
}

export default BetslipCouponItem