import AboutMe from './component/AboutMe'
import LiveClock from './component/LiveClock'
import FunFact from './component/FunFact'

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto space-y-6">
        <AboutMe />
        <LiveClock />
        <FunFact />
      </div>
    </div>
  )
}



