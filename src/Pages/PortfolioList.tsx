import {
  Box,
  Container,
  Grid,
  Grow,
  Paper,
  useMediaQuery,
  useTheme,
} from "@material-ui/core";
import React, { ReactElement, useEffect, useState } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import { content } from "../Contents/contents";

const GridContainer = styled(Grid)`
  width: 100%;
  height: 100%;
  padding: 10px;
`;

const ImageContainer = styled(Box)`
  border-radius: 7px;
  position: relative;
  margin-top: 10px;
  cursor: pointer;
  width: 100%;
  height: 200px;
  :hover {
    div {
      display: flex;
    }
  }
  div {
    height: 100%;
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 7px;
    position: absolute;
    top: 0;
    left: 0;
    justify-content: center;
    align-items: center;
    color: white;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 20px;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 7px;
`;
interface Props {}

function PortfolioList({}: Props): ReactElement {
  const history = useHistory();
  const onClickHandler = (title: string) => {
    history.push(`/p/${title}`);
  };

  return (
    <Container maxWidth="lg">
      <GridContainer container spacing={3}>
        {content.map((ctt, index) => {
          return (
            <Grid
              item
              xs={12}
              sm={6}
              md={4}
              lg={4}
              xl={4}
              key={index}
              id={`grid-${index}`}
            >
              <Grow in={true} {...{ timeout: 300 + index * 300 }}>
                <ImageContainer onClick={() => onClickHandler(ctt.title)}>
                  <Image src={ctt.content.photo} alt={ctt.title} />
                  <Box display="none">{ctt.title}</Box>
                </ImageContainer>
              </Grow>
            </Grid>
          );
        })}
      </GridContainer>
    </Container>
  );
}

export default PortfolioList;
