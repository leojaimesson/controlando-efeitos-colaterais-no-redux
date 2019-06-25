import React, { Component } from "react";
import { createStructuredSelector } from "reselect";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { ModalProvider } from "styled-react-modal";
import HomeContainer from "./containers/HomeContainer";
import { ui } from "./redux";
import { themes } from "./css.settings";

class App extends Component {
  render() {
    const { theme } = this.props;
    return (
      <ThemeProvider theme={themes[theme]}>
        <ModalProvider>
          <>
            <BrowserRouter>
              <Switch>
                <Route exact path="*" component={HomeContainer} />
              </Switch>
            </BrowserRouter>
          </>
        </ModalProvider>
      </ThemeProvider>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  theme: ui.selectors.getTheme
});

export default connect(mapStateToProps)(App);
