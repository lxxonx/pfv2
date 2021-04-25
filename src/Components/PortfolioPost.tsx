import React, { ReactElement, useEffect, useState } from "react";
import { Box, Container, Grid, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
import { ContentProps } from "../Contents/contents";
import { GitHub } from "@material-ui/icons";
const GridContainer = styled(Grid)`
  width: 100%;
  height: 100%;
`;
const ImageContainer = styled.div`
  border-radius: 7px;
  position: relative;
  width: 100%;
  height: 240px;
  margin-top: 10px;
  cursor: pointer;
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
const Tech = styled.article`
  white-space: pre-wrap;
  font-size: 16px;
`;
interface TitleProps {
  fontSize: string;
}
const Title = styled(Typography)<TitleProps>`
  white-space: pre-wrap;
  text-transform: capitalize;
  font-size: ${(props) => props.fontSize};
  padding-top: 10px;
  padding-bottom: 10px;
`;
const Footer = styled(Box)`
  padding-top: 20px;
  padding-bottom: 40px;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`;
interface Props {
  content: ContentProps;
}

function PortfolioPost({ content }: Props): ReactElement {
  const [currentContent, setCurrentContent] = useState<ContentProps>(content);

  const imgClickHandler = () => {
    window.open(currentContent.content.demo.url);
  };
  const onClickGithubLink = () => {
    window.open(currentContent.content.doc);
  };

  return (
    <>
      <GridContainer container spacing={1}>
        <Grid item xs={12} sm={12} md={5} lg={4} xl={3}>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            padding="10px"
          >
            <Title variant="h3" fontSize="45px">
              {currentContent?.title}
            </Title>
            <ImageContainer onClick={imgClickHandler}>
              <Image src={currentContent?.content.photo} />
              <Box display="none">{currentContent?.title}</Box>
            </ImageContainer>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={7} lg={8} xl={9}>
          <Box paddingTop="10px" paddingLeft="20px">
            <Box>
              <Title variant="h5" fontSize="30px">
                Tool for the App
              </Title>
              <Tech>{currentContent?.content.tech}</Tech>
            </Box>
            {currentContent.content.demo.id && (
              <Box>
                <Title variant="h6" fontSize="20px">
                  Test Id
                </Title>
                <Tech>
                  id: {currentContent.content.demo.id}
                  <br />
                  pw: {currentContent.content.demo.pw}
                </Tech>
              </Box>
            )}
          </Box>
        </Grid>
      </GridContainer>
      <Container maxWidth="sm">
        <Footer onClick={onClickGithubLink}>
          <GitHub fontSize="small" style={{ marginRight: "5px" }} />
          <Typography>Get more infomation from Github</Typography>
        </Footer>
      </Container>
    </>
  );
}

export default PortfolioPost;
