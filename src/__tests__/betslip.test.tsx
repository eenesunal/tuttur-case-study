import { fireEvent, render, screen } from "../renderWithProviders"
import "@testing-library/jest-dom"

import { BetslipProvider } from "contexts/BetslipContext"

import Betslip from "components/Bulletin/Betslip"
import * as helpers from "components/Bulletin/helpers"

import { IBetslipContextState } from "contexts/types"

describe("betslip", () => {
    test("loads and displays Betslip without data", async () => {
        const betslipState: IBetslipContextState = {
            coupon: [],
            isBetslipPlayable: false,
            selectedEvents: {}
        }

        render(
            <BetslipProvider value={betslipState}>
                <Betslip />
            </BetslipProvider>
        )

        expect(screen.getByRole("no-items-text")).toBeInTheDocument()

        expect(screen.getByRole(/multiplier-box/i)).toBeInTheDocument()
        expect(screen.getByRole(/total-outcome/i)).toHaveTextContent("$0.00")
        expect(screen.getByRole(/possible-win-amount/i)).toHaveTextContent("$0.00")
        
        expect(screen.getByRole("clean-betslip")).toBeInTheDocument()

        const playButton = screen.getByRole("play-betslip")
        expect(playButton).toBeDisabled()
    })

    test("loads and displays Betslip with data", async () => {
        const betslipState: IBetslipContextState = {
            coupon: [
                {
                    eventName: "Beşiktaş JK - Borussia Dortmund",
                    oddName: "Over 2.5",
                    outCome: "2,05",
                    mbc: 1,
                },
                {
                    eventName: "West Ham - Millwall",
                    oddName: "Over 2.5",
                    outCome: "3,00",
                    mbc: 1,
                },
            ],
            isBetslipPlayable: true,
            selectedEvents: {
                "Beşiktaş JK - Borussia Dortmund": { oddName: "Over 2.5", outCome: "2,05" },
                "West Ham - Millwall": { oddName: "Over 2.5", outCome: "3,00" },
            }
        }

        const mockOutCome = jest.spyOn(helpers, "calculateTotalOutCome")
        mockOutCome.mockReturnValue(5.05)

        const mockPossibleWinAmount = jest.spyOn(helpers, "calculatePossibleWinAmount")
        mockPossibleWinAmount.mockReturnValue(25.25)

        render(
            <BetslipProvider value={betslipState}>
                <Betslip />
            </BetslipProvider>
        )

        expect(screen.getByText(/beşiktaş jk - borussia dortmund/i)).toBeInTheDocument()

        expect(screen.getByRole(/multiplier-box/i)).toBeInTheDocument()

        expect(screen.getByRole("total-outcome")).toHaveTextContent("$5.05")
        expect(screen.getByRole("possible-win-amount")).toHaveTextContent("$25.25")

        expect(screen.getByRole("clean-betslip")).toBeInTheDocument()

        const playButton = screen.getByRole("play-betslip")
        expect(playButton).toBeEnabled()
    })
    
    test("cleans betslip after coupon played", async () => {
        global.alert = jest.fn()
    
        const betslipState: IBetslipContextState = {
            coupon: [
                {
                    eventName: "Beşiktaş JK - Borussia Dortmund",
                    oddName: "Over 2.5",
                    outCome: "2,05",
                    mbc: 1,
                },
                {
                    eventName: "West Ham - Millwall",
                    oddName: "Over 2.5",
                    outCome: "3,00",
                    mbc: 1,
                },
            ],
            isBetslipPlayable: true,
            selectedEvents: {
                "Beşiktaş JK - Borussia Dortmund": { oddName: "Over 2.5", outCome: "2,05" },
                "West Ham - Millwall": { oddName: "Over 2.5", outCome: "3,00" },
            }
        }

        const mockOutCome = jest.spyOn(helpers, "calculateTotalOutCome")
        mockOutCome.mockReturnValue(5.05)

        const mockPossibleWinAmount = jest.spyOn(helpers, "calculatePossibleWinAmount")
        mockPossibleWinAmount.mockReturnValue(25.25)
        
        const { rerender } = render(
            <BetslipProvider value={betslipState}>
                <Betslip />
            </BetslipProvider>
        )

        const playButton = screen.getByRole("play-betslip")
        expect(playButton).toBeEnabled()
        fireEvent.click(playButton)
        
        rerender(
            <BetslipProvider value={{ coupon: [], isBetslipPlayable: false, selectedEvents: {} }}>
                <Betslip />
            </BetslipProvider>
        )

        expect(screen.getByRole("play-betslip")).toBeDisabled()
    })
})