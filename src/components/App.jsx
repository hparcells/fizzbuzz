import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import Options from './Options';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#1e88e5"
    },
    secondary: {
      main: '#11d83c',
    },
  },
  typography: {
    useNextVariants: true,
  }
});

class App extends React.Component {
  render() {
    return <MuiThemeProvider theme={theme}>
      <AppBar position="sticky" color="primary">
        <Toolbar>
          <Typography variant="h6" color="inherit">
            FizzBuzz
          </Typography>
        </Toolbar>
      </AppBar>

      <div id="content">
        <br />
        <Typography variant="h2" gutterBottom>
          FizzBuzz
        </Typography>
        <Typography paragraph>FizzBuzz is a game where players sit in a circle, and start saying whole numbers in numerical order. When someone gets to a number that is divisable by three, they must say <em>Fizz</em>, and
          if they say a number that is divisable by five, they must say <em>Buzz</em>. In the special case they come by a number that is divisable by five and three, they must say <em>FizzBuzz</em>.
        </Typography>
        <Typography>In programming, FizzBuzz is a common interview questions for computer programmers for interviewers to see who is capable of programming more than others.</Typography>
        <Typography paragraph>Below is a tool which is a generator to make a large list for any size sequence of numbers and words as you wish. You may not enter zero or a negative number. You also might not want to generate
          a list bigger than one million, since it would take a little while for your browser to generate that many numbers.
        </Typography>

        <Typography variant="h4">List</Typography>

        <Options />

        <Typography paragraph id="data" paragraph>No Data Yet!</Typography>
      </div>
    </MuiThemeProvider>
  }
}

export default App;
