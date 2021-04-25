import {
  Box,
  Container,
  Grid,
  Grow,
  Paper,
  Slide,
  Typography,
} from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import { useHistory, useLocation, useParams } from "react-router";
import styled from "styled-components";
import {
  NavigateNextRounded,
  NavigateBeforeRounded,
  ListRounded,
} from "@material-ui/icons";
import Windows from "../Components/Windows";
import PortfolioPost from "../Components/PortfolioPost";
import PortfolioList from "./PortfolioList";
import { content } from "../Contents/contents";

const Wrapper = styled(Box)`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Content = styled(Box)`
  height: 100%;
`;

const Prev = styled.div`
  z-index: 9;

  position: absolute;
  top: 50%;
  left: 0px;
  cursor: pointer;
  transform: translateY(-50%);
  opacity: 0.3;
  :hover {
    opacity: 0.8;
  }
`;

const Next = styled.div`
  z-index: 9;
  position: absolute;
  top: 50%;
  right: 0px;
  cursor: pointer;
  transform: translateY(-50%);
  opacity: 0.3;
  :hover {
    opacity: 0.8;
  }
`;
const Menu = styled.div`
  z-index: 9;

  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  opacity: 0.3;
  :hover {
    opacity: 0.8;
  }
`;
interface Props {}
type Params = {
  name: string;
};
function Portfolio({}: Props): ReactElement {
  const history = useHistory();
  const { pathname } = useLocation();
  const { name } = useParams<Params>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const moveNext = () => {
    if (currentIndex < content.length - 1) {
      history.push(`/p/${content[currentIndex + 1].title}`);
    } else {
      history.push(`/p/${content[0].title}`);
    }
  };
  const movePrev = () => {
    if (currentIndex !== 0) {
      history.push(`/p/${content[currentIndex - 1].title}`);
    } else {
      history.push(`/p/${content[content.length - 1].title}`);
    }
  };
  const toggleList = () => {
    if (pathname === "/p/list") {
      history.goBack();
    } else {
      history.push("/p/list");
    }
  };
  useEffect(() => {
    content.map((c, i) => {
      if (c.title === name) {
        setCurrentIndex(i);
      }
    });
    return () => {};
  }, [name]);
  return (
    <Windows color={name === "list" ? "#d3d1f7" : "#e0edfa"}>
      <Wrapper>
        <Menu onClick={toggleList}>
          <ListRounded style={{ fontSize: "50px" }} />
        </Menu>

        {name === "list" ? (
          <PortfolioList />
        ) : (
          <>
            <Prev onClick={movePrev}>
              <NavigateBeforeRounded fontSize="large" />
            </Prev>
            <Next onClick={moveNext}>
              <NavigateNextRounded fontSize="large" />
            </Next>

            <Container maxWidth="lg">
              {content.map((c, index) => {
                return (
                  <Slide
                    key={index}
                    in={index === currentIndex}
                    direction={index > currentIndex ? "left" : "right"}
                    mountOnEnter
                    unmountOnExit
                  >
                    <Box>
                      <PortfolioPost content={c} />
                    </Box>
                  </Slide>
                );
              })}
            </Container>
          </>
        )}
      </Wrapper>
    </Windows>
  );
}

export default Portfolio;
