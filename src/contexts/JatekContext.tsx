import { createContext, useContext, useState, type ReactNode } from "react";
import Cella from "../components/Cella";

export type cellaAllapot = " " | "O" | "X";

type JatekContextValue = {
  jatekAllapot: cellaAllapot[];
  lepes: (index: number) => void;
};

export const JatekContext = createContext<JatekContextValue | undefined>(
  undefined,
);

interface JatekProviderProps {
  children: ReactNode;
}

export default function JatekProvider({ children }: JatekProviderProps) {
  const [jatekAllapot, setJatekAllapot] = useState<cellaAllapot[]>([
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
    " ",
  ]);
  const [nofLepes, setNofLepes] = useState<number>(0);
  function lepes(index: number) {
    const cellak = [...jatekAllapot];
    if (jatekAllapot[index] === " ") {
      if (nofLepes % 2 == 0) {
        cellak[index] = "O";
        setNofLepes(nofLepes + 1);
      } else {
        cellak[index] = "X";
        setNofLepes(nofLepes + 1);
      }
      setJatekAllapot(cellak);
    }

    switch (nyertesKereso(cellak)) {
      case "O": {
        alert("A O játékos nyert!");
        break;
      }
      case "X": {
        alert("A X játékos nyert!");
        break;
      }
      default: {
        if (nofLepes >= 8) alert("Döntetlen!!");
        break;
      }
    }

  }

  return (
    <JatekContext.Provider value={{ lepes, jatekAllapot }}>
      {children}
    </JatekContext.Provider>
  );
}

export function useJatekContext() {
  const context = useContext(JatekContext);

  if (context === undefined) {
    throw new Error("ez probléma");
  } else {
    return context;
  }
}

function nyertesKereso(lista: cellaAllapot[]): cellaAllapot | null {
  const vonalak = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],   // sorok
    [0, 3, 6], [1, 4, 7], [2, 5, 8],   // oszlopok
    [0, 4, 8], [2, 4, 6]               // diagonal
  ]

  for (const [a, b, c] of vonalak) {
    if (lista[a] !== " " && lista[a] === lista[b] && lista[a] === lista[c]) {
      return lista[a]   // "X" vagy "O"
    }
  }
  return null   // nincs nyertes (még)
}
