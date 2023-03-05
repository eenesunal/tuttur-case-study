import { useEffect, FC, useState } from "react"
import { map } from "lodash"

import Text from "components/Text"

import { EventType } from "./types"
import Box from "components/Box"

type EventsHeaderPropsType = {
    events: EventType[]
}
const EventsHeader: FC<EventsHeaderPropsType> = ({ events }) => {
    const [names, setNames] = useState<string[]>([])

    useEffect(() => {
        if(events?.length > 0) {
            const eventNames = map(Object.entries(events[0].matchResultOdds), ([key, { name }]) => name)
            setNames(eventNames)
        } else {
            setNames([])
        }

    }, [events])

    return (
        <Box css={{ display: "flex", fd: "row", ai: "center", width: "100%", pb: "10px" }}>
            <Box css={{ flex: "0 0 10%", maxWidth: 100, ta: "center" }}><Text weight="semibold">MBD</Text></Box>
            <Box css={{ flex: "0 0 25%" }}><Text weight="semibold">Event</Text></Box>
            <Box css={{ display: "flex", fd: "row", ai: "center", flex: "1", justifyContent: "space-around", width: 200 }}>
                {
                    names?.length > 0 ?
                        map(names, (name => <Text weight="semibold" css={{ width: "100%", ta: "center" }} key={name}><strong>{name.replace("Match Result", "MR").replace("Under", "U").replace("Over", "O")}</strong></Text>)) :
                        <Text>#</Text>
                }
            </Box>
        </Box>
    )
}

export default EventsHeader