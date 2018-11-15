import React, { Component } from 'react';

import Form from './../../components/Form'
import ProgramForm from './../../components/ProgramForm'
import './App.css';
import { Progress } from 'reactstrap'
import { Route, Switch } from 'react-router-dom';
import Banner from './../../components/Banner'
import Logo from '../../assets/sce_logo.png'

class App extends Component {
  state = {
    progress: 0
  }

  progressUpdateHandler = () => {
    this.setState({ progress: this.state.progress + 50 })
  }

  render() {
    return (
      <div className="App">
        <Progress value={this.state.progress} color="warning" className="Progress" />
        <div className="Filler" />
        <Banner logo={Logo} logoLink="/" title="SCE Windows Upgrade Form"/>
        
        <Switch>
          <Route path="/2" component={() => <ProgramForm updateProgress={this.progressUpdateHandler} />} />
          <Route path="/" exact component={this.state.progress%100 === 0 && this.state.progress !== 0 ? () => <h2>Your form has been successfully submitted. Thank you.</h2> : () => <Form updateProgress={this.progressUpdateHandler} />} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
