import React from 'react';

class Clock extends React.Component {
  constructor(props){
    super(props);
    this.state = {time: new Date()};
  }

  tick(){
    this.setState({time: new Date()})
  }

  render (){
    return(
    <>
      <h1>Clock</h1>
      <div className="widget-body">
        <div>
          <h2>Time:</h2>
          <h2>Date:</h2>
        </div>
        <div>
          <h2>{this.state.time.toLocaleTimeString()}</h2>
          
          <h2>{this.state.time.toLocaleDateString()}</h2> 
        </div>
      </div>
    </>
    )
  }

  componentDidMount() {
    this.setState({handle: setInterval(() => {
      this.tick()
    }, 1000)})
  }

  componentWillUnmount(){
    clearInterval(this.state.handle);
  }
}

export default Clock;