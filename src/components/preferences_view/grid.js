import React from 'react'
import { Component } from 'react'
import { Grid, Image, Button } from 'semantic-ui-react'
import LeftGrid from './leftgrid.js';
import RightGrid from './rightgrid.js';

export default class PreferencesGrid extends Component {
    constructor(props){
        super(props)
        this.savePreferences = this.savePreferences.bind(this)
    }


    savePreferences() {
      this.props.history.push("/map-view")
    }

    render(){
      return (
        <Grid>
          <Grid.Column width={9}>
            <LeftGrid {...this.props}/>
          </Grid.Column>
          <Grid.Column width={7}>
            <RightGrid {...this.props}/>
          </Grid.Column>
        </Grid>
      )
    }
}