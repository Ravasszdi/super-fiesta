import { useJatekContext, type cellaAllapot } from "../contexts/JatekContext";
import "./Cella.css"

export default Cella;

interface cellaProps{
  allapot: cellaAllapot
  index: number
}

function Cella({allapot, index}:cellaProps) {
  const { lepes } = useJatekContext();
  return (<>
    <button onClick={()=>{lepes(index)}}>{allapot}</button>
  </>)
}
