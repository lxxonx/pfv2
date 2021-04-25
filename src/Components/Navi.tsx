import { Box } from "@material-ui/core";
import { amber, cyan, green, lightBlue } from "@material-ui/core/colors";
import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
const Directories = styled(Box)`
  color: ${cyan[400]};
  font-weight: 600;
  font-size: 16px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;
const Files = styled(Box)`
  color: white;
  font-weight: 600;
  font-size: 16px;
  :not(:last-child) {
    margin-right: 10px;
  }
`;
const Info = styled(Box)`
  strong {
    color: ${lightBlue[500]};
    font-weight: 600;
    font-size: 16px;
  }
`;
const Language = styled(Box)`
  strong {
    color: ${green[500]};
    font-weight: 600;
    font-size: 16px;
  }
  b {
    color: ${amber[500]};
    font-weight: 600;
    font-size: 16px;
  }
`;
export const CodeResult = styled(Box)`
  font-family: "Source Code Pro", monospace;
  width: 100%;
  white-space: pre-wrap;
`;
interface Props {
  setResult: Function;
  setIndex: Function;
  index: number;
  address: string;
}

function Navi({ setResult, address, setIndex, index }: Props): ReactElement {
  const history = useHistory();
  return (
    <Box display="flex" flexDirection="row">
      {address === "home" && (
        <>
          <Directories
            onClick={() => {
              history.push("/t/about", { newLine: true });
              setResult(<></>);
            }}
          >
            about
          </Directories>
          <Files
            onClick={() => {
              history.push("/p/instagram-clone");
            }}
          >
            Portfolio
          </Files>
        </>
      )}
      {address === "about" && (
        <>
          <Directories
            onClick={() => {
              history.push("/t/home", { newLine: true });
              setResult(<></>);
            }}
          >
            home
          </Directories>

          <Files
            onClick={() => {
              setIndex(index + 1);
              setResult(
                <CodeResult>
                  <Info>
                    <strong>info</strong> Nationality
                  </Info>
                  └─ Korea.
                  <Info>
                    <strong>info</strong> Education
                  </Info>
                  ├─ University: Chungnam National University, Daejeon, Korea.
                  <br />
                  ├─ Major: Business Management.
                  <br />
                  └─ Minor: Computer Science.
                  <br />✨ Done in 2021.Oct.
                </CodeResult>
              );
            }}
          >
            WhoAmI
          </Files>
          <Files
            onClick={() => {
              setIndex(index + 1);
              setResult(
                <CodeResult>
                  <Language>
                    <strong>✨ fluent</strong>
                  </Language>
                  ├─ Korean, English
                  <br />
                  └─ Javascript, Typescript, Python, and more...
                  <Language>
                    <b>🔍 learning</b>
                  </Language>
                  └─ Japanese, Java, Golang, C, and more...
                </CodeResult>
              );
            }}
          >
            Languages
          </Files>
          <Files
            onClick={() => {
              setIndex(index + 1);
              setResult(
                <CodeResult>
                  <Info>
                    <strong>Back End</strong>
                  </Info>
                  ├─ DB: PostgreSQL, Redis
                  <br />
                  ├─ ORM: PrismaORM, TypeORM
                  <br />
                  └─ Server: Node.js, Express.js, Apollo Server/Graphql
                  <br />
                  <Info>
                    <strong>Front End</strong>
                  </Info>
                  ├─ Frameworks: React.js, React Native, Next.js
                  <br />
                  └─ State manager: Apollo Client, React Hooks
                </CodeResult>
              );
            }}
          >
            ToolsIUse
          </Files>
        </>
      )}
    </Box>
  );
}

export default Navi;
