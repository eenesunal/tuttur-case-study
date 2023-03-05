import { render, screen } from "../renderWithProviders"
import "@testing-library/jest-dom"

import Betslip from "components/Bulletin/Betslip"
import { BetslipProvider } from "contexts/BetslipContext"

jest.mock("../api")

test("loads and displays Betslip without data", async () => {
    render(
        <BetslipProvider>
            <Betslip />
        </BetslipProvider>
    )

    expect(screen.getByText(/add items to coupon/i)).toBeInTheDocument()

    const multiplierBox = expect(screen.getByRole(/multiplier-box/i))
    multiplierBox.toHaveTextContent(/multiplier: /i)
    multiplierBox.toHaveTextContent(/5/i)

    multiplierBox.toHaveTextContent(/total outcome: /i)
    multiplierBox.toHaveTextContent(/possible win amount: /i)
    multiplierBox.toHaveTextContent(/0/)

    expect(screen.getByText(/clean/i)).toBeInTheDocument()

    const playButton = screen.getByText(/play now/i)
    expect(playButton).toBeDisabled()
})