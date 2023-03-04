import { FC } from "react"
import { Outlet } from "react-router-dom"

import Text from "components/Text"
import Box from "components/Box"

const BulletinLayout: FC = () => {
    return (
        <Box css={{ display: "flex", fd: "column", width: "100vw", p: 20 }}>
            <Text variant="title1">Bulletin</Text>
            <Outlet />
        </Box>
    )
}

export default BulletinLayout