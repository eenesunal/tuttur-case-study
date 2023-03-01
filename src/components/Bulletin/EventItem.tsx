import useBetslip from "hooks/useBetslip"
import { FC } from "react"

import { EventType } from "./types"

type EventItemPropsType = {
    eventItem: EventType
}

type AddToBetslipType = (oddName: string, outCome: string) => void

const EventItem: FC<EventItemPropsType> = ({ eventItem }) => {
    const { eventName, matchResultOdds, mbc } = eventItem
    const { addEventToBetslip } = useBetslip()
    
    const addToBetslip: AddToBetslipType = (oddName, outCome) => {
        addEventToBetslip({ eventName, oddName, outCome })
    }

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", paddingBottom: "10px" }}>
            <span style={{ flex: "0 0 10%", maxWidth: 100, textAlign: "center" }}>{mbc}</span>
            <span style={{ flex: "0 0 25%" }}>{eventName}</span>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flex: "1", justifyContent: "space-around", width: 200 }}>
                {
                    Object.entries(matchResultOdds).map(([key, { name, outCome }]) => {
                        return (
                            <button 
                                key={key}
                                onClick={() => addToBetslip(name, outCome)}
                                style={{ width: 100 }} 
                            >
                                {outCome}
                            </button>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default EventItem