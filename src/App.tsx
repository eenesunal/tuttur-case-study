import Routes from "routes"

import { BetslipProvider } from "contexts/BetslipContext"

import "App.css"

function App() {
  return (
    <div className="App">
      <BetslipProvider>
        <Routes />
      </BetslipProvider>
    </div>
  )
}

export default App
