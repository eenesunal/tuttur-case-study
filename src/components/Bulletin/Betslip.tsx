import { ChangeEvent, FC, useMemo, useState } from "react"
import { map } from "lodash"
import { useTranslation } from "react-i18next"

import BetslipCouponItem from "./BetslipCouponItem"
import Box from "components/Box"
import Button from "components/Button"
import Text from "components/Text"

import useBetslip from "hooks/useBetslip"
import { playBetslip } from "api"
import { calculateTotalOutCome, calculatePossibleWinAmount } from "components/Bulletin/helpers"

const Betslip: FC = () => {
    const { t: translate } = useTranslation()
    
    const [multiplier, setMultiplier] = useState<number>(5)
    const [playBetslipState, setPlayBetslipState] = useState({ error: null, loading: false })
    const { loading, error } = playBetslipState

    const { coupon, isBetslipPlayable, cleanBetslip } = useBetslip()

    const totalOutCome = useMemo(() => calculateTotalOutCome(coupon), [coupon])
    const possibleWinAmount = useMemo(() => calculatePossibleWinAmount(coupon, multiplier), [coupon, multiplier])

    const onMultiplierChange = (e: ChangeEvent<HTMLSelectElement>) => {
        setMultiplier(Number(e.target.value))
    }

    const onPlayClick = () => {
        setPlayBetslipState({ loading: true, error: null })
        playBetslip(coupon)
            .then(() => {
                alert(`Played Betslip with Multiplier: ${multiplier}, Total Outcome: $${totalOutCome}, Possible Win Amount: $${possibleWinAmount.toFixed(2)}`)
                setPlayBetslipState({ loading: false, error: null })
                cleanBetslip()
                setMultiplier(5)
            })
            .catch((error) => {
                setPlayBetslipState({ loading: false, error: error })
                alert(error)
            })
    }

    return (
        <Box css={{ width: "30%", height: "90vh", borderLeft: "1px solid #cdcdcd", p: 15 }}>
            <Text variant="title2">{translate("events.betslip.title")}</Text>
            <Box>
                {
                    coupon.length > 0 ?
                        map(coupon, (couponItem) => (
                            <BetslipCouponItem key={couponItem?.eventName} couponItem={couponItem} />
                        )) :
                        <Text>{translate("events.betslip.addItemsToCoupon")}</Text>
                }
            </Box>

            <Box css={{ height: 1, borderBottom: "1px solid #cdcdcd", my: 10 }} />

            <Box role="multiplier-box" css={{ display: "flex", fd: "column" }}>
                <Text css={{ mr: 5 }}>{translate("events.betslip.multiplier")}: </Text>
                <select
                    onChange={onMultiplierChange}
                    value={multiplier}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                <Text weight="bold" css={{ pt: 5 }}>{translate("events.betslip.totalOutCome")}: </Text>
                <Text role="total-outcome">${totalOutCome.toFixed(2)}</Text>
                <Text weight="bold" css={{ pt: 5 }}>{translate("events.betslip.possibleWinAmount")}: </Text>
                <Text role="possible-win-amount">${possibleWinAmount.toFixed(2)}</Text>
            </Box>

            <Box css={{ height: 1, borderBottom: "1px solid #cdcdcd", my: 10 }} />

            <Box>
                <Button
                    variant="remove"
                    disabled={loading}
                    onClick={cleanBetslip}
                >
                    {translate("events.betslip.clean")}
                </Button>
                <Button
                    variant="success"
                    disabled={loading || !isBetslipPlayable}
                    onClick={onPlayClick}
                >
                    {translate("events.betslip.playNow")}
                </Button>
            </Box>
            {
                error ?
                    <Text css={{ color: "$red600" }}>{error}</Text> :
                    <></>
            }
        </Box>
    )
}

export default Betslip