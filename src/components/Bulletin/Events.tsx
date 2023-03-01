import { useEffect, useState, FC } from "react"

import { fetchEvents } from "api"

import EventItem from "./EventItem"
import EventsHeader from "./EventsHeader"

import {
    InitialStateType
} from "./types"

const INITIAL_STATE: InitialStateType = {
    data: [],
    error: null,
    loading: true
}

const Events: FC = () => {
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

    if(loading) return <p>Loading . . .</p>
    if(error) return <p>Error . . .</p>
    return (
        <div style={{ display: "flex", flex: 1, flexDirection: "column" }}>
            {
                <EventsHeader events={data} />
            }
            {
                data.map(event => <EventItem key={event.eventName} eventItem={event} />)
            }
        </div>
    )
}

export default Events