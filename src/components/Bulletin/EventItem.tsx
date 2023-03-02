import useBetslip from "hooks/useBetslip"
import { FC, useEffect, useState } from "react"

import { EventType } from "./types"

type EventItemPropsType = {
    eventItem: EventType
}

type AddToBetslipType = (oddName: string, outCome: string) => void

const EventItem: FC<EventItemPropsType> = ({ eventItem }) => {
    const { eventName, matchResultOdds, mbc } = eventItem
    const { addEventToBetslip, selectedEvents } = useBetslip()

    const [selectedBetName, setSelectedBetName] = useState<string>("")

    const addToBetslip: AddToBetslipType = (oddName, outCome) => {
        addEventToBetslip({ eventName, oddName, outCome })
    }
    
    useEffect(() => {
        setSelectedBetName(selectedEvents[eventItem.eventName]?.oddName || "")
    }, [selectedEvents, eventItem])
    
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
                                style={{ 
                                    width: 100,
                                    backgroundColor: selectedBetName === name ? "#cfaeba" : ""
                                }}
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