import useBetslip from "hooks/useBetslip"
import { FC, useEffect, useState } from "react"

import Text from "components/Text"
import Button from "components/Button"

import { map } from "lodash"
import { EventType } from "./types"
import Box from "components/Box"

type EventItemPropsType = {
    eventItem: EventType
}

type AddToBetslipType = (oddName: string, outCome: string) => void

const EventItem: FC<EventItemPropsType> = ({ eventItem }) => {
    const { eventName, matchResultOdds, mbc } = eventItem
    const { addEventToBetslip, selectedEvents } = useBetslip()

    const [selectedBetName, setSelectedBetName] = useState<string>("")

    const addToBetslip: AddToBetslipType = (oddName, outCome) => {
        addEventToBetslip({ eventName, oddName, outCome, mbc })
    }
    
    useEffect(() => {
        setSelectedBetName(selectedEvents[eventItem.eventName]?.oddName || "")
    }, [selectedEvents, eventItem])
    
    return (
        <Box css={{ display: "flex", fd: "row", ai: "center", width: "100%", pb: "10px" }}>
            <Text css={{ fg: 0, fs: 0, fb: "10%", maxWidth: 100, ta: "center" }}>{mbc}</Text>
            <Text css={{ fg: 0, fs: 0, fb: "25%", }}>{eventName}</Text>
            <Box css={{ display: "flex", fd: "row", ai: "center", flex: "1", jc: "space-around", width: 200 }}>
                {
                    map(Object.entries(matchResultOdds), ([key, { name, outCome }]) => {
                        return (
                            <Button 
                                variant={selectedBetName === name ? "oddSelected" : "odd"}
                                key={key}
                                onClick={() => addToBetslip(name, outCome)}
                                css={{ width: 100 }}
                                size="mini"
                            >
                                {outCome}
                            </Button>
                        )
                    })
                }
            </Box>
        </Box>
    )
}

export default EventItem