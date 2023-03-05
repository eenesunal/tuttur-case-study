import { Link } from "react-router-dom"
import Box from "./Box"
import Text from "./Text"

const PageNotFound = () => {
    return (
        <Box css={{ width: "100vw", margin: 0, padding: 50, display: "flex", fd: "column", jc: "center", ai: "center" }}>
            <Text variant="largeTitle">404: Not found ¯\_(ツ)_/¯</Text>
            <Text variant="title2">Go back to the <Link to="/bulletin">Bulletin</Link></Text>
        </Box>
    )
}

export default PageNotFound