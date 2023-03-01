
export type InitialStateType = {
    data: EventType[],
    error: string | null,
    loading: boolean
}

type MatchResultOddNames  = "Over 2.5" | "Under 2.5" | "Match Result: Home" | "Match Result: Draw" | "Match Result: Away"

export type MatchResultOddsType = {
    [key: number]: {
        name: MatchResultOddNames
        outCome: string
    }
}

export type EventType = {
    eventName: string,
    matchResultOdds: MatchResultOddsType,
    mbc: number
}
