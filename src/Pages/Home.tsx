import { Box, Container, Typography } from "@material-ui/core";
import { ReactElement, useEffect } from "react";
import { useHistory } from "react-router";
import styled from "styled-components";
import useDeviceDetect from "../hooks/useDevice";
const Icon = styled(Box)`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
`;

const IconImage = styled.img`
  width: 80px;
  height: 80px;
`;
interface Props {}

function Home({}: Props): ReactElement {
  const history = useHistory();
  const { isMobile } = useDeviceDetect();
  useEffect(() => {}, [isMobile]);
  return (
    <Container style={{ position: "relative" }} maxWidth="md" fixed>
      <Icon
        onDoubleClick={() => {
          history.push("/t/home");
        }}
        onClick={() => {
          if (isMobile) {
            history.push("/t/home");
          }
        }}
        top="100px"
      >
        <IconImage src="/icons/terminal.png" />
        <Typography variant="subtitle2">Terminal</Typography>
      </Icon>
      <Icon
        onDoubleClick={() => {
          history.push("/p/instagram-clone");
        }}
        onClick={() => {
          if (isMobile) {
            history.push("/p/instagram-clone");
          }
        }}
        top="100px"
        left="120px"
      >
        <IconImage src="/icons/portfolio.png" />
        <Typography variant="subtitle2">Portfolio</Typography>
      </Icon>
      <Icon
        top="220px"
        onDoubleClick={() => {
          window.open("https://github.com/devleeon");
        }}
        onClick={() => {
          if (isMobile) {
            window.open("https://github.com/devleeon");
          }
        }}
      >
        <IconImage src="/icons/github.png" />
        <Typography variant="subtitle2">Github</Typography>
      </Icon>
      <Icon
        top="220px"
        left="120px"
        onDoubleClick={() => {
          window.open("https://instagram.com/______lxxonx");
        }}
        onClick={() => {
          if (isMobile) {
            window.open("https://instagram.com/______lxxonx");
          }
        }}
      >
        <IconImage src="/icons/instagram.png" />
        <Typography variant="subtitle2">Instagram</Typography>
      </Icon>
    </Container>
  );
}

export default Home;
