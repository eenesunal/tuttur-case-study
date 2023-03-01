import { FC } from "react"

import useBetslip from "hooks/useBetslip"

const Betslip: FC = () => {
    const { coupon, error, loading, cleanBetslip, playBetslip, removeEventFromBetslip } = useBetslip()

    return (
        <div style={{ width: "30%", height: "90vh", borderLeft: "1px solid #cdcdcd" }}>
            Betslip
            <div>
                {
                    coupon.length > 0 ?
                        coupon.map((couponItem) => (
                            <div key={couponItem?.eventName}>
                                <span>{couponItem?.eventName}</span>
                                <span>{couponItem?.oddName}</span>
                                <span>{couponItem?.outCome}</span>
                                <button onClick={() => removeEventFromBetslip(couponItem?.eventName || "")}>X</button>
                            </div>
                        )) :
                        <span>Add items to coupon</span>
                }
            </div>
            <div>
                <button
                    disabled={loading}
                    onClick={cleanBetslip}
                >
                    CLEAN
                </button>
                <button
                    disabled={loading}
                    onClick={playBetslip}
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