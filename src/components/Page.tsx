import { forwardRef, ReactNode } from "react"
import { Helmet } from "react-helmet-async"

import Box from "./Box"
interface PagePropsType {
    children: ReactNode
    title: string
    style: object
}

type Ref = HTMLDivElement

const Page = forwardRef<Ref, PagePropsType>(({ children, title, ...other }, ref) => (
    <Box ref={ref} {...other}>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        {children}
    </Box>
))

export default Page
