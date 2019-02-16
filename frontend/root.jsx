import React from 'react';
import Clock from './clock';
import Tabs from './tabs'

class Root extends React.Component {
  render() {
    return (
    <div className="root">
      <Clock/>
        <Tabs array={[{ title: "tab1", content: "This is content1" }, { title: "tab2", content: "This is content2" }, { title: "tab3", content: "This is content3"}]}/>
    </div>
    )
  }
}

export default Root