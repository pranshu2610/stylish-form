import React, { Component } from 'react';
import FormInput from './component/formInput/formInput.component';
import Tag from './component/tag/tag.component';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      guess: ''
    }
  }

  render() {
    var {guess} = this.state;
    return(
      <div className="main">
      <div className="main-body">
        <h1 className="title">Stylish Form Component</h1>
        <FormInput
          name='text'
          type='text'
          handleChange={e=> this.setState({guess: e.target.value})}
          value={guess}
          label={"Enter anything"}
          required
        />
        <div className="response-box">
          <Tag response={guess}/>
        </div>
      </div>
      <h1 className="footer">Check out my Medium article !</h1>
      </div>
    );
  }
}

export default App;
