import { useEffect, FC, useState } from "react"
import { map } from "lodash"
import { useTranslation } from "react-i18next"

import Box from "components/Box"
import Text from "components/Text"

import { convertToTranslationKey } from "./helpers"

import { EventType } from "./types"

type EventsHeaderPropsType = {
    events: EventType[]
}
const EventsHeader: FC<EventsHeaderPropsType> = ({ events }) => {
    const { t: translate } = useTranslation()

    const [names, setNames] = useState<string[]>([])

    useEffect(() => {
        if (events?.length > 0) {
            const eventNames = map(Object.entries(events[0].matchResultOdds), ([key, { name }]) => name)
            setNames(eventNames)
        } else {
            setNames([])
        }

    }, [events])

    return (
        <Box css={{ display: "flex", fd: "row", ai: "center", width: "100%", pb: "10px" }}>
            <Box css={{ flex: "0 0 10%", maxWidth: 100, ta: "center" }}>
                <Text role="mbc-header" weight="semibold">{translate("events.mbd")}</Text>
            </Box>
            <Box css={{ flex: "0 0 25%" }}>
                <Text role="event-name-header" weight="semibold">{translate("events.event")}</Text>
            </Box>
            <Box css={{ display: "flex", fd: "row", ai: "center", flex: "1", justifyContent: "space-around", width: 200 }}>
                {
                    names?.length > 0 ?
                        map(names, (name =>
                            <Text
                                role={`odd-${convertToTranslationKey(name)}-header`}
                                weight="semibold"
                                css={{
                                    width: "100%",
                                    ta: "center"
                                }}
                                key={name}
                            >
                                <strong>{translate(`events.${convertToTranslationKey(name)}`)}</strong>
                            </Text>
                        )) :
                        <Text>#</Text>
                }
            </Box>
        </Box>
    )
}

export default EventsHeader