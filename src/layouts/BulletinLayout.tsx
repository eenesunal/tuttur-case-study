import { FC } from "react"
import { Outlet } from "react-router-dom"

const BulletinLayout: FC = () => {
    return (
        <div style={{ display: "flex", flexDirection: "column", width: "100vw", padding: 20 }}>
            <h2>Bulletin</h2>
            <Outlet />
        </div>
    )
}

export default BulletinLayout