import { useTranslation } from "react-i18next"

import Betslip from "components/Bulletin/Betslip"
import { Page, Events } from "components"

const Bulletin = () => {
    const { t: translate } = useTranslation()

    return (
        <Page 
            title={translate("bulletin.helmetTitle")}
            style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start", width: "80vw", margin: "0 auto", border: "1px solid #cdcdcd" }}
        >
            <Events />
            <Betslip />
        </Page>
    )
}

export default Bulletin