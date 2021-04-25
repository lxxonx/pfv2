import { Box, Container, Grow, withStyles } from "@material-ui/core";
import { amber, green, red } from "@material-ui/core/colors";
import { FiberManualRecord } from "@material-ui/icons";
import React, { ReactChild, ReactElement, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import useHeight from "../hooks/useHeight";

const WindowButtons = withStyles({
  root: {
    background: "black",
    display: "flex",
    alignItems: "center",
    paddingTop: "7px",
    paddingBottom: "7px",
    paddingLeft: "20px",
  },
})(Box);

const WindowButton = styled(Box)`
  width: 20px;
  padding: 0;
  height: 20px;
  cursor: pointer;
`;

interface TitleProps {
  setFullScreen: Function;
  fullScreen: boolean;
}

function WindowTitle({ fullScreen, setFullScreen }: TitleProps): ReactElement {
  const history = useHistory();
  return (
    <WindowButtons
      style={
        fullScreen
          ? {}
          : { borderTopRightRadius: "7px", borderTopLeftRadius: "7px" }
      }
      onDoubleClick={() => {
        setFullScreen(!fullScreen);
      }}
    >
      <WindowButton
        onClick={() => {
          history.push("/");
        }}
      >
        <FiberManualRecord style={{ color: red[500] }} fontSize="small" />
      </WindowButton>
      <FiberManualRecord style={{ color: amber[500] }} fontSize="small" />
      <WindowButton
        onClick={() => {
          setFullScreen(!fullScreen);
        }}
      >
        <FiberManualRecord style={{ color: green[500] }} fontSize="small" />
      </WindowButton>
    </WindowButtons>
  );
}

const WindowWrapper = styled(Box)`
  width: 100%;
  position: absolute;
`;
const Window = styled(Box)`
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;
interface Props {
  children: ReactChild;
  index?: number;
  color: string;
}

function Windows({ children, index, color }: Props): ReactElement {
  const [fullScreen, setFullScreen] = useState(false);
  const windowHeight = useHeight();

  return (
    <WindowWrapper style={{ zIndex: 9 }}>
      <Grow in={fullScreen ? fullScreen : !fullScreen}>
        <Box width="100%" style={fullScreen ? {} : { paddingTop: "100px" }}>
          <Container
            fixed={fullScreen ? false : true}
            style={
              fullScreen ? { padding: 0, margin: 0, maxWidth: "100%" } : {}
            }
          >
            <Window bgcolor={color} borderRadius="7px">
              <WindowTitle
                setFullScreen={setFullScreen}
                fullScreen={fullScreen}
              />
              <Box
                id="window"
                overflow="scroll"
                style={
                  fullScreen ? { height: windowHeight } : { height: "400px" }
                }
                onClick={() => {
                  if (index !== undefined) {
                    document.getElementsByTagName("input")[index - 1].focus();
                  }
                }}
              >
                {children}
              </Box>
            </Window>
          </Container>
        </Box>
      </Grow>
    </WindowWrapper>
  );
}

export default Windows;
