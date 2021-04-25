import { Avatar, Box, Grid, Typography, withStyles } from "@material-ui/core";
import { blue, lime } from "@material-ui/core/colors";
import {
  AccessTime,
  Check,
  FolderOpen,
  Home as HomeIcon,
} from "@material-ui/icons";
import React, { ReactElement, useEffect, useState } from "react";
import { useLocation } from "react-router";
import styled from "styled-components";
import getTime from "../Utilities/getTime";
import { inputHandler } from "../Utilities/inputHandler";
import { CodeResult } from "./Navi";
const Logo = styled(Box)`
  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
  background-color: white;
  padding: 1px 5px 1px 10px;
  position: relative;
  height: 24px;
  display: flex;
  align-items: center;
  ::after {
    z-index: 2;
    content: "";
    position: absolute;
    right: -12px;
    top: 0;
    border-top: 12px solid transparent;
    border-left: 12px solid white;
    border-bottom: 12px solid transparent;
  }
`;
const Location = styled(Box)`
  height: 24px;
  color: white;
  position: relative;
  background-color: ${blue.A100};
  display: flex;
  align-items: center;
  padding-left: 17px;
  padding-right: 5px;
  ::after {
    content: "";
    position: absolute;
    right: -12px;
    top: 0;
    border-top: 12px solid transparent;
    border-left: 12px solid ${blue.A100};
    border-bottom: 12px solid transparent;
  }
`;
const LocationText = styled(Typography)`
  white-space: nowrap;
  margin-left: 5px;
  font-weight: 600;
`;
const CodeInput = styled.input`
  font-family: "Source Code Pro", monospace;
  width: 100%;
  color: white;
  background-color: transparent;
  border: 0;
  margin-left: 17px;
  font-weight: 600;
  font-size: 16px;
  height: 24px;
  line-height: 24px;
  :focus {
    outline: none;
  }
`;
const CurrentTime = styled(Box)`
  border-top-right-radius: 6px;
  border-bottom-right-radius: 6px;
  background-color: white;
  position: relative;
  padding-left: 2px;
  padding-right: 6px;
  height: 24px;
  ::before {
    position: absolute;
    left: -12px;
    content: "";
    border-top: 12px solid transparent;
    border-right: 12px solid white;
    border-bottom: 12px solid transparent;
  }
`;
const Tick = styled(Box)`
  position: relative;
  padding-right: 12px;
  ::before {
    position: absolute;
    left: -12px;
    content: "";
    border-top: 12px solid transparent;
    border-right: 12px solid black;
    border-bottom: 12px solid transparent;
  }
`;

const GridContainer = withStyles({
  root: {},
})(Grid);

interface LineProps {
  setIndex: Function;
  index: number;
  clear: boolean;
  setClear: Function;
  location: string;
}
function CodeLine({
  setIndex,
  index,
  clear,
  setClear,
  location,
}: LineProps): ReactElement {
  const [currentTime, setCurrentTime] = useState(getTime());
  const { pathname } = useLocation();
  const [address, setAddress] = useState(location);
  const [result, setResult] = useState(<></>);
  const enterDetect = inputHandler(
    setClear,
    setCurrentTime,
    setIndex,
    address,
    index,
    setResult
  );
  useEffect(() => {
    if (clear) {
      setResult(<></>);
      setAddress(pathname.slice(3));
    }
  }, [clear]);
  return (
    <GridContainer container spacing={0}>
      {/* left side of the console */}
      <Grid item xs={12} sm={12} md={9} lg={10} xl={11}>
        <Box display="flex" flexDirection="column">
          <Box display="flex" flexDirection="row" width="100%">
            <Logo>
              <Avatar style={{ width: "20px", height: "20px" }} />
            </Logo>
            <Location>
              {address === "home" ? (
                <HomeIcon fontSize="small" />
              ) : (
                <FolderOpen fontSize="small" />
              )}
              <LocationText>
                {address === "home" ? "~" : "~ /" + address + "/"}
              </LocationText>
            </Location>
            <CodeInput
              type="text"
              className="code"
              onKeyDown={enterDetect}
              autoFocus
            />
          </Box>
          {result !== <></> && (
            <CodeResult
              color="white"
              marginLeft="6px"
              whiteSpace="pre"
              className="result"
            >
              {result}
            </CodeResult>
          )}
        </Box>
      </Grid>
      {/* right side of the console */}
      <Grid item xs={12} sm={12} md={3} lg={2} xl={1}>
        <Box
          display="flex"
          flexDirection="row"
          width="100%"
          justifyContent="flex-end"
        >
          <Tick
            bgcolor="black"
            display="flex"
            alignItems="center"
            color={lime.A400}
          >
            <Check fontSize="small" />
          </Tick>
          <CurrentTime
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
          >
            <Typography className="times">{currentTime}</Typography>
            <AccessTime fontSize="small" />
          </CurrentTime>
        </Box>
      </Grid>
    </GridContainer>
  );
}
export default CodeLine;
