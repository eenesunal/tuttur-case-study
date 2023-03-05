import { useEffect, useState, FC } from "react"
import { map } from "lodash"
import { useTranslation } from "react-i18next"

import EventItem from "./EventItem"
import EventsHeader from "./EventsHeader"
import Text from "components/Text"

import { fetchEvents } from "api"

import { InitialStateType } from "./types"
import Box from "components/Box"

const INITIAL_STATE: InitialStateType = {
    data: [],
    error: null,
    loading: true
}

const Events: FC = () => {
    const { t: translate } = useTranslation()

    const [state, setState] = useState(INITIAL_STATE)
    const { data, error, loading } = state

    useEffect(() => {
        fetchEvents()
            .then(response => {
                setState(s => ({ ...s, data: response.data.events, error: null, loading: false}))
            })
            .catch(error => {
                setState(s => ({ ...s, data: [], error: error, loading: false}))
            })
    }, [])

    if(loading) return <Text role="loading-spinner" variant="body">{translate("common.loading")}</Text>
    if(error) return <Text variant="body" css={{ color: "$red600" }}>{error}</Text>
    return (
        <Box css={{ display: "flex", flex: 1, fd: "column", p: 15 }}>
            <Text variant="title2">{translate("events.todaysEvents")}</Text>
            {
                <EventsHeader events={data} />
            }
            {
                map(data, event => <EventItem key={event.eventName} eventItem={event} />)
            }
        </Box>
    )
}

export default Events