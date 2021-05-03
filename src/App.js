import React from './react/packages/react';
import logo from './logo.svg';
import './App.css';
import {Test} from './test'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      view: true
    }
  }

  switch = () => {
    this.setState({
      view: !this.state.view
    })
  }

  render() {
    const {view} = this.state
    return (
      <Test/>
    //   view ? <div className="App" onClick={() => this.switch()}>
    //     <header className="App-header" onClick={()=>{console.log("app页面点击事件")}}>
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload.
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //     <div style={{width:'100px',height:'100px',backgroundColor:'#FF0000',position:'absolute',left:'0px',top:'0px'}} key="123" onMouseMove={()=>{console.log("move");}}></div>
    //     <div style={{width:'100px',height:'100px',backgroundColor:'#0000FF',position:'absolute',left:'300px',top:'300px'}} key="456" onMouseMove={()=>{console.log("move2");}}></div>
    //   </div> : <div className="App" onClick={() => this.switch()}>
    //   <div style={{width:'100px',height:'100px',backgroundColor:'#FF0000',position:'absolute',left:'0px',top:'0px'}} key="123" onMouseMove={()=>{console.log("move");}}></div>
    //   <div style={{width:'100px',height:'100px',backgroundColor:'#0000FF',position:'absolute',left:'300px',top:'300px'}} key="456" onMouseMove={()=>{console.log("move2");}}></div>
    // </div>
    );
  }
}

export default App;
