import { Box } from "@material-ui/core";
import { ReactElement } from "react";
import { Redirect } from "react-router";
import { Route, Switch } from "react-router-dom";
import styled from "styled-components";
import useHeight from "../hooks/useHeight";
import Home from "../Pages/Home";
import Portfolio from "../Pages/Portfolio";
import Terminal from "../Pages/Terminal";

interface BgProps {
  url: string;
}

const Backgound = styled(Box)<BgProps>`
  background-color: #e1e1f9;
  background-image: url(${(props) => props.url});
  background-repeat: no-repeat;
  background-size: cover;
  image-rendering: optimizeSpeed;
`;

function AppRouter(): ReactElement {
  const windowHeight = useHeight();

  return (
    <>
      <Backgound
        height={windowHeight}
        url="https://images.unsplash.com/photo-1554310603-d39d43033735?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80"
      >
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/t/:address" component={Terminal} />
          <Route path="/p/:name" component={Portfolio} />
          <Redirect from="*" to="/" />
        </Switch>
      </Backgound>
    </>
  );
}

export default AppRouter;
