import { ChangeEvent, FC, useMemo, useState } from "react"
import { map, reduce } from "lodash"

import Text from "components/Text"
import Button from "components/Button"

import useBetslip from "hooks/useBetslip"
import { playBetslip } from "api"

import { CouponItemType } from "contexts/types"
import Box from "components/Box"

const calculateTotalOutCome = (coupon: CouponItemType[]) => reduce(map(coupon, (c) => c?.outCome ? Number(c?.outCome) : 0), ((prev, next) => prev + next), 0)
const calculatePossibleWinAmount = (coupon: CouponItemType[], multiplier: number) => multiplier * calculateTotalOutCome(coupon)

const Betslip: FC = () => {
    const [multiplier, setMultiplier] = useState<number>(5)
    const [playBetslipState, setPlayBetslipState] = useState({ error: null, loading: false })
    const { loading, error } = playBetslipState

    const { coupon, isBetslipPlayable, cleanBetslip, removeEventFromBetslip } = useBetslip()

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
            <Text variant="title2">Betslip</Text>
            <Box>
                {
                    coupon.length > 0 ?
                        map(coupon, (couponItem) => (
                            <Box key={couponItem?.eventName} css={{ mb: 5, p: 5, display: "flex" }}>
                                <Text css={{ text: "sm", mr: 5 }}>{couponItem?.mbc}</Text>
                                <Text css={{ text: "sm" }}>{couponItem?.eventName}</Text>
                                <Text css={{ text: "sm" }}>{couponItem?.oddName}</Text>
                                <Text css={{ text: "sm" }}>{couponItem?.outCome}</Text>
                                <Button variant="remove" size="mini" css={{ ml: "auto" }} onClick={() => removeEventFromBetslip(couponItem?.eventName || "")}>X</Button>
                            </Box>
                        )) :
                        <Text>Add items to coupon</Text>
                }
            </Box>

            <Box css={{ height: 1, borderBottom: "1px solid #cdcdcd", my: 10 }} />

            <Box css={{ display: "flex", fd: "column" }}>
                <Text css={{ mr: 5 }}>Multiplier: </Text>
                <select
                    onChange={onMultiplierChange}
                    value={multiplier}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                <Text weight="bold" css={{ pt: 5 }}>Total Outcome: </Text>
                <Text>${totalOutCome.toFixed(2)}</Text>
                <Text weight="bold" css={{ pt: 5 }}>Possible Win Amount: </Text>
                <Text>${possibleWinAmount.toFixed(2)}</Text>
            </Box>

            <Box css={{ height: 1, borderBottom: "1px solid #cdcdcd", my: 10 }} />

            <Box>
                <Button
                    variant="remove"
                    disabled={loading}
                    onClick={cleanBetslip}
                >
                    CLEAN
                </Button>
                <Button
                    variant="success"
                    disabled={loading || !isBetslipPlayable}
                    onClick={onPlayClick}
                >
                    PLAY NOW
                </Button>
            </Box>
            {
                error ?
                    <Text css={{ color: "$red600" }}>An error occured while playing coupon.</Text> :
                    <></>
            }
        </Box>
    )
}

export default Betslip