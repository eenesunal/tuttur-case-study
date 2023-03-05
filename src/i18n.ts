import i18n from "i18next"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"

i18n
    // detect user language
    .use(LanguageDetector)
    // pass the i18n instance to react-i18next.
    .use(initReactI18next)
    // init i18next
    .init({
        debug: false,
        fallbackLng: "en",
        resources: {
            en: {
                translation: {
                    common: {
                        loading: "Loading..."
                    },
                    bulletin: {
                        title: "Bulletin",
                        helmetTitle: "Bulletin | Events"
                    },
                    events: {
                        title: "Events",
                        todaysEvents: "Today's Events",
                        mbd: "MBD",
                        event: "Event",
                        "Over2.5": "O 2.5",
                        "Under2.5": "U 2.5",
                        "MatchResultHome": "Result: Home",
                        "MatchResultDraw": "Result: Draw",
                        "MatchResultAway": "Result: Away",
                        betslip: {
                            title: "Betslip",
                            addItemsToCoupon: "Add items to coupon",
                            multiplier: "Multiplier",
                            totalOutCome: "Total Outcome",
                            possibleWinAmount: "Possible Win Amount",
                            clean: "Clean",
                            playNow: "Play Now",
                            betslipPlayed: "Played betslip with Multiplier: {{multiplier}}, Total Outcome: {{totalOutCome}}, Possible Win Amount: {{possibleWinAmount}}."
                        },
                    }
                }
            },
            tr: {
                translation: {
                    common: {
                        loading: "Yükleniyor..."
                    },
                    bulletin: {
                        title: "Bülten",
                        helmetTitle: "Bülten | Müsabakalar"
                    },
                    events: {
                        title: "Müsabakalar",
                        todaysEvents: "Bugün",
                        mbd: "MMS",
                        event: "Maç",
                        "Over2.5": "2.5 Üst",
                        "Under2.5": "2.5 Alt",
                        "MatchResultHome": "MS: 1",
                        "MatchResultDraw": "MS: 0",
                        "MatchResultAway": "MS: 2",
                        betslip: {
                            title: "Kupon",
                            addItemsToCoupon: "Kupona maç ekleyin",
                            multiplier: "Misli",
                            totalOutCome: "Toplam",
                            possibleWinAmount: "Maks. Kazanç",
                            clean: "Temizle",
                            playNow: "Hemen Oyna",
                            betslipPlayed: "{{multiplier}} misli, {{totalOutCome}}$ değerinde, {{possibleWinAmount}} maks. kazanç tutarında kupon oynandı."
                        }
                    }
                }
            }
        }
    })