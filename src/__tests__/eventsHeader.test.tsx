import { render, screen } from "../renderWithProviders"
import "@testing-library/jest-dom"

import EventsHeader from "components/Bulletin/EventsHeader"
import { EventType } from "components/Bulletin/types"

test("loads and displays Events Header with data", () => {
    const events: EventType[] = [{
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
    }]

    const { rerender } = render(<EventsHeader events={events} />)
    
    expect(screen.getByRole("mbc-header")).toBeInTheDocument()
    expect(screen.getByRole("event-name-header")).toBeInTheDocument()
    expect(screen.getByRole("odd-Over2.5-header")).toBeInTheDocument()

    rerender(<EventsHeader events={[]} />)
    expect(screen.queryByRole("odd-Over2.5-header")).not.toBeInTheDocument()
})