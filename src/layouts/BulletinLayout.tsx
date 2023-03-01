import { FC } from "react"
import { Outlet } from "react-router-dom"

const BulletinLayout: FC = () => {
    return (
        <div>
            <h2>BulletinLayout</h2>
            <Outlet />
        </div>
    )
}

export default BulletinLayout