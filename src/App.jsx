import { AboutMe } from "./AboutMe"
import { Avatar } from "./Avatar"
import { Contact } from "./Contact"
import { Header } from "./Header"
import { Projects } from "./Projects"
import { Skills } from "./Skills"

function App() {

  return (
    <div className="App">
      <Header/>
      <AboutMe/>
      <Avatar/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
