import { forwardRef, ReactNode } from "react"
import { Helmet } from "react-helmet-async"

interface PagePropsType {
    children: ReactNode
    title: string
}

type Ref = HTMLDivElement

const Page = forwardRef<Ref, PagePropsType>(({ children, title, ...other }, ref) => (
    <div ref={ref} {...other}>
        <Helmet>
            <title>{title}</title>
        </Helmet>
        {children}
    </div>
))

export default Page
