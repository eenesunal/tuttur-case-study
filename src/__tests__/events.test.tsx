import { render, screen } from "../renderWithProviders"
import "@testing-library/jest-dom"

import Events from "components/Bulletin/Events"

jest.mock("../api/index.ts", () => ({
    fetchEvents: () => Promise.resolve({
        data: {
            events: [
                {
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
            ]
        }
    })
}))

describe("events", () => {
    test("if loads and displays Events with data", async () => {
        render(<Events />)

        expect(screen.getByRole("loading-spinner")).toBeInTheDocument()
        expect(await screen.findByText(/arsenal - liverpool/i)).toBeInTheDocument()
    })
})