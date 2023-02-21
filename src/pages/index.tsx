import Landing from "./landing"
import Portfolio from "./projects"
import Navbar from "./navbar"

export default function Home() {

  return (
    <div className="relative">
      <Navbar />
      <Landing />
      <Portfolio />
    </div>
  )
}
