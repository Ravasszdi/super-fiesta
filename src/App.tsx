import JatekTer from "./components/JatekTer"
import {useJatekContext } from "./contexts/JatekContext"


function App() {


  const { jatekAllapot } = useJatekContext();

  return (
    <>
      <JatekTer allapotok={jatekAllapot}></JatekTer>
    </>
  )
}

export default App
