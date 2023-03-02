import { ChangeEvent, FC, useMemo, useState } from "react"
import { map, reduce } from "lodash"

import useBetslip from "hooks/useBetslip"

import { playBetslip } from "api"

import { CouponItemType } from "contexts/types"

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
        <div style={{ width: "30%", height: "90vh", borderLeft: "1px solid #cdcdcd" }}>
            <h4>Betslip</h4>
            <div>
                {
                    coupon.length > 0 ?
                        map(coupon, (couponItem) => (
                            <div key={couponItem?.eventName} style={{ marginBottom: 5, padding: 5, display: "flex" }}>
                                <span style={{ marginRight: 5 }}>{couponItem?.mbc}</span>
                                <span>{couponItem?.eventName}</span>
                                <span>{couponItem?.oddName}</span>
                                <span>{couponItem?.outCome}</span>
                                <button style={{ marginLeft: "auto" }} onClick={() => removeEventFromBetslip(couponItem?.eventName || "")}>X</button>
                            </div>
                        )) :
                        <span>Add items to coupon</span>
                }
            </div>
            <div style={{ height: 1, borderBottom: "1px solid #cdcdcd", marginTop: 10, marginBottom: 10 }} />
            <div style={{ display: "flex", flexDirection: "column" }}>
                <label style={{ marginRight: 5 }}>Multiplier: </label>
                <select
                    onChange={onMultiplierChange}
                    value={multiplier}
                >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={15}>15</option>
                    <option value={20}>20</option>
                </select>
                <label style={{ paddingTop: 5 }}>Total Outcome: </label>
                <span>${totalOutCome.toFixed(2)}</span>
                <label style={{ paddingTop: 5 }}>Possible Win Amount: </label>
                <span>${possibleWinAmount.toFixed(2)}</span>
            </div>
            <div style={{ height: 1, borderBottom: "1px solid #cdcdcd", marginTop: 10, marginBottom: 10 }} />
            <div>
                <button
                    disabled={loading}
                    onClick={cleanBetslip}
                >
                    CLEAN
                </button>
                <button
                    disabled={loading || !isBetslipPlayable}
                    onClick={onPlayClick}
                >
                    PLAY NOW
                </button>
            </div>
            {
                error ?
                    <p>An error occured while playing coupon.</p> :
                    <></>
            }
        </div>
    )
}

export default Betslip