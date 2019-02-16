import React from 'react';

class Tabs extends React.Component{
  constructor(props) {
    super(props);
    this.state = {selected: 0};
  }

  componentDidMount(){
    const lis = document.getElementsByClassName("tab-header");
    lis.forEach( li => {
      li.addEventListener("click", e => {
      })
    })
  }

  render() {
    return(
      <div>
        <ul class="all-tabs">{this.props.array.map((tab) =>
          <li class="tab-header">{tab.title}</li>
        )}</ul>
          <article class="tab-content">{this.props.array[this.state.selected].content}</article>
      </div>
    )
  }
}


export default Tabs