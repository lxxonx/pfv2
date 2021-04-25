import { Box } from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";
import CodeLine from "../Components/CodeLine";
import Windows from "../Components/Windows";

type Params = {
  address: string;
};
type State = {
  newLine?: boolean;
};
function Terminal(): ReactElement {
  const { address } = useParams<Params>();
  const { state } = useLocation<State>();
  const [index, setIndex] = useState(1);
  const [clear, setClear] = useState(false);
  const lines = Array.from({ length: 20 }, (_, i) => i);

  useEffect(() => {
    if (state?.newLine) {
      setIndex(index + 1);
    }
  }, [state]);
  return (
    <Windows index={index} color="primary.main">
      <Box padding="10px">
        {lines.map((i, number) => {
          if (index > i) {
            return (
              <CodeLine
                location={address}
                setIndex={setIndex}
                index={index}
                key={number}
                clear={clear}
                setClear={setClear}
              />
            );
          }
        })}
      </Box>
    </Windows>
  );
}

export default Terminal;
