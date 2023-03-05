import { render, screen } from "../renderWithProviders"
import "@testing-library/jest-dom"

import EventItem from "components/Bulletin/EventItem"
import { EventType } from "components/Bulletin/types"

test("loads and displays Event Item with data", () => {
    const eventItem: EventType = {
        "eventName": "Arsenal - Liverpool",
        "matchResultOdds": {
            "111": {
                "name": "Match Result: Home",
                "outCome": "1.77"
            },
            "115": {
                "name": "Match Result: Draw",
                "outCome": "3.12"
            },
            "119": {
                "name": "Match Result: Away",
                "outCome": "3.23"
            },
            "19": {
                "name": "Over 2.5",
                "outCome": "1.37"
            },
            "96": {
                "name": "Under 2.5",
                "outCome": "3.22"
            }
        },
        "mbc": 3
    }

    render(<EventItem eventItem={eventItem} />)

    expect(screen.getByText(/arsenal - liverpool/i)).toBeInTheDocument()

    expect(screen.getByRole("event-odd-111")).toBeInTheDocument()
})