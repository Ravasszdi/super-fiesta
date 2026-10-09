import type { cellaAllapot } from "../contexts/JatekContext";
import Cella from "./Cella";
import "./JatekTer.css";

export default JatekTer;

interface jatekTerProps{
  allapotok: cellaAllapot[]
}

function JatekTer({allapotok}:jatekTerProps) {
  return (<div className="cellak">
    {
      allapotok.map((e, i) => {
        return(<Cella allapot={e} index={i} key={i}></Cella>)
      })
    }
  </div>)
}
