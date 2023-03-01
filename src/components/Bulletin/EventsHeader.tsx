import { useEffect, FC, useState } from "react"

import {
    EventType
} from "./types"

type EventsHeaderPropsType = {
    events: EventType[]
}
const EventsHeader: FC<EventsHeaderPropsType> = ({ events }) => {
    const [names, setNames] = useState<string[]>([])

    useEffect(() => {
        const eventNames = Object.entries(events[1].matchResultOdds).map(([key, { name }]) => name)
        setNames(eventNames)

    }, [events])

    return (
        <div style={{ display: "flex", flexDirection: "row", alignItems: "center", width: "100%", paddingBottom: "10px" }}>
            <div style={{ flex: "0 0 10%", maxWidth: 100, textAlign: "center" }}><strong>MBD</strong></div>
            <div style={{ flex: "0 0 25%" }}><strong>Event</strong></div>
            <div style={{ display: "flex", flexDirection: "row", alignItems: "center", flex: "1", justifyContent: "space-around", width: 200 }}>
                {
                    names?.length > 0 ?
                        names.map((name => <span style={{ width: 100, textAlign: "center" }} key={name}><strong>{name.replace("Match Result", "MR").replace("Under", "U").replace("Over", "O")}</strong></span>)) :
                        <span>#</span>
                }
            </div>
        </div>
    )
}

export default EventsHeader