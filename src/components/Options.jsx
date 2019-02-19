import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
  button: {
    margin: theme.spacing.unit,
  }
});

class Options extends React.Component {
  render() {
    const { classes } = this.props;

    return <>
      <TextField
        id="options-length"
        label="Length"
        type="number"
        className={classes.textField}
        margin="normal"
      />

      <Button id='generate-button' variant="contained" color="primary" className={classes.button}>
        Generate the Numbers!
      </Button>

    </>
  }
}

export default withStyles(styles)(Options);
