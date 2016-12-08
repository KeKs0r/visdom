import React, { Component, PropTypes } from 'react'
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { browserHistory, Router } from 'react-router'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();

class AppContainer extends Component {
  static propTypes = {
    routes : PropTypes.object.isRequired,
    store  : PropTypes.object.isRequired
  }

  shouldComponentUpdate () {
    return false
  }

  render () {
    const { routes, store } = this.props

    return (
      <Provider store={store}>
        <MuiThemeProvider muiTheme={getMuiTheme()}>
          <Router history={browserHistory} children={routes} />
        </MuiThemeProvider>
      </Provider>
    )
  }
}

export default AppContainer
