import useBetslip from "hooks/useBetslip"
import { FC, useEffect, useState } from "react"
import { map } from "lodash"

import Box from "components/Box"
import Button from "components/Button"
import Text from "components/Text"

import { CouponItemType } from "contexts/types"
import { EventType } from "./types"

type EventItemPropsType = {
    eventItem: EventType
}

type AddToBetslipType = (oddName: string, outCome: string, isAlreadySelected: boolean) => void

const EventItem: FC<EventItemPropsType> = ({ eventItem }) => {
    const { eventName, matchResultOdds, mbc } = eventItem
    const { addEventToBetslip, removeEventFromBetslip, selectedEvents } = useBetslip()

    const [selectedOddName, setSelectedBetName] = useState<string>("")

    const addToBetslip: AddToBetslipType = (oddName, outCome, isAlreadySelected) => {
        const createdCouponItem: CouponItemType = { eventName, oddName, outCome, mbc }

        if (isAlreadySelected) {
            removeEventFromBetslip(createdCouponItem)
        } else {
            addEventToBetslip(createdCouponItem)
        }
    }

    useEffect(() => {
        setSelectedBetName(selectedEvents[eventItem.eventName]?.oddName || "")
    }, [selectedEvents, eventItem])

    return (
        <Box
            css={{
                display: "flex", fd: "row", ai: "center", width: "100%", py: "5px",
                "&:nth-of-type(even)": { backgroundColor: "#eaeaea" },
                "&:hover": { backgroundColor: "#cecccc" }
            }}
        >
            <Text css={{ fg: 0, fs: 0, fb: "10%", maxWidth: 100, ta: "center" }}>{mbc}</Text>
            <Text css={{ fg: 0, fs: 0, fb: "25%", }}>{eventName}</Text>
            <Box css={{ display: "flex", fd: "row", ai: "center", flex: "1", jc: "space-around", width: 200 }}>
                {
                    map(Object.entries(matchResultOdds), ([key, { name, outCome }]) => {
                        const isOddSelected = selectedOddName === name

                        return (
                            <Button
                                variant={isOddSelected ? "oddSelected" : "odd"}
                                key={key}
                                onClick={() => addToBetslip(name, outCome, isOddSelected)}
                                css={{ width: 100 }}
                                size="mini"
                                role={`event-odd-${key}`}
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