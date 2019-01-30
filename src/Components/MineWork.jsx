import React, { Component } from 'react'
import { Grid, Paper } from '@material-ui/core'

export default class MineWork extends Component {
  render() {
    return (
      <Grid container>
        <Grid item sm={3}>
          <Paper>
            <p>Left</p>
            <p>Left</p>
            <p>Left</p>
            <p>Left</p>
            <p>Left</p>
            <p>Left</p>
            <p>Left</p>
            <p>Left</p>
            <p>Left</p>
            <p>Left</p>
            <p>Left</p>
          </Paper>
        </Grid>
        <Grid item sm={9}>
          <Paper>
            <p>right</p>
            <p>right</p>
            <p>right</p>
            <p>right</p>
            <p>right</p>
            <p>right</p>
            <p>right</p>

          </Paper>
        </Grid>
      </Grid>
    )
  }
}
