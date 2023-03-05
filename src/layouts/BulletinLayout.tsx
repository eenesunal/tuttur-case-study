import { ChangeEvent, FC, useState } from "react"
import { Outlet } from "react-router-dom"
import { useTranslation } from "react-i18next"

import Box from "components/Box"

const BulletinLayout: FC = () => {
    const { i18n } = useTranslation()
    const [language, setLanguage] = useState("en")

    const onLanguageSelect = (e: ChangeEvent<HTMLSelectElement>) => {
        i18n.changeLanguage(e.target.value)
        setLanguage(e.target.value)
    }

    return (
        <Box css={{ display: "flex", fd: "column", width: "100vw", p: 20 }}>
            <header>
                <select
                    value={language}
                    onChange={onLanguageSelect}
                >
                    <option value="tr">Türkçe</option>
                    <option value="en">English</option>
                </select>
            </header>
            <Outlet />
        </Box>
    )
}

export default BulletinLayout