import React, { ReactElement } from "react"
import { BrowserRouter } from "react-router-dom"
import { HelmetProvider } from "react-helmet-async"
import { render, RenderOptions } from "@testing-library/react"

const AllTheProviders = ({ children }: { children: React.ReactNode }) => {
    return (
        <HelmetProvider>
            <BrowserRouter>
                <div>{children}</div>
            </BrowserRouter>
        </HelmetProvider>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: AllTheProviders, ...options })

export * from "@testing-library/react"
export { customRender as render }