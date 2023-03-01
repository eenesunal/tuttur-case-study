import { Page, Events } from "components"
import Betslip from "components/Bulletin/Betslip"

const Bulletin = () => {

    return (
        <Page 
            title="Bulletin | Events"
            style={{ display: "flex", flexDirection: "row", justifyContent: "start", alignItems: "start", width: "80vw", margin: "0 auto", border: "1px solid #cdcdcd" }}
        >
            <Events />
            <Betslip />
        </Page>
    )
}

export default Bulletin