import React from 'react'
import { Grid } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles'

import AddAddress from '../../components/AddAddress';
import GetAllAddresses from '../../components/GetAllAddresses';


const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
  },
})

class Home extends React.Component {

  render() {
    const { classes } = this.props
    return (
      <Grid container className={classes.root}>
        <AddAddress />
        <GetAllAddresses />

      </Grid>
    )
  }
}

export default withStyles(styles)(Home)