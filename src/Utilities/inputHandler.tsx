import styled from "styled-components";
import Navi from "../Components/Navi";
import getTime from "./getTime";

const Result = styled.div`
  padding-top: 5px;
  color: white;
  white-space: pre-wrap;
  padding-bottom: 5px;
  strong {
    font-weight: 600;
  }
`;

export function inputHandler(
  setClear: Function,
  setCurrentTime: React.Dispatch<React.SetStateAction<string>>,
  setIndex: Function,
  address: string,
  index: number,
  setResult: React.Dispatch<React.SetStateAction<JSX.Element>>
) {
  return (event: any) => {
    if (event.key === "Enter") {
      const input = event.target.value;
      if (input === "clear") {
        document.getElementsByTagName("input")[0].disabled = false;
        document.getElementsByTagName("input")[0].value = "";
        document.getElementsByTagName("input")[0].focus();
        document.getElementsByClassName(
          "times"
        )[0].childNodes[0].nodeValue = getTime();
        setClear(true);
        setCurrentTime(getTime());
        setIndex(1);
      } else if (input === "ls") {
        event.target.disabled = true;
        setResult(
          <Result>
            <Navi
              setResult={setResult}
              address={address}
              setIndex={setIndex}
              index={index}
            />
          </Result>
        );
        setClear(false);
      } else {
        switch (input) {
          case "":
            break;
          case "help":
            setResult(
              <Result>
                <strong>clear</strong>: clears the console
                <br />
                <strong>help</strong>: shows command list.
                <br />
                <strong>ls</strong>: displays the names of files and
                subdirectories containing in the folder. You can click the files
                and directories to access
                <br />
                <strong>version</strong>: gets the version of this portfolio
              </Result>
            );
            break;
          case "version":
            setResult(<Result>version 0.1</Result>);
            break;
          default:
            setResult(
              <Result>
                lxxsh: command not found: {event.target.value}
                <br />
                if you need more help, type "help"
              </Result>
            );
            break;
        }
        setClear(false);
        setIndex(index + 1);
        event.target.disabled = true;
      }
    }
  };
}
