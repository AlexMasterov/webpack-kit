import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';

// Material UI
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import lightBaseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';

import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

const lightMuiTheme = getMuiTheme(lightBaseTheme);

class App extends Component {
  constructor(props) {
    injectTapEventPlugin();
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log('Clicked.');
  }

  render() {
    return (
      <MuiThemeProvider muiTheme={lightMuiTheme}>
        <Paper zDepth={1}>
          <RaisedButton
            label='Button'
            fullWidth={true}
            onClick={this.handleClick}
          />
        </Paper>
      </MuiThemeProvider>
    );
  }
}

export default App;
