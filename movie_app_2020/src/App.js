import React from 'react';
import axios from 'axios';


/**
 * 2020.07.28 
 * setState를 할 때마다 react는 새로운 state와 함께 render function을 호출!
 */


class App extends React.Component{

  state = {
    isLoading: true,
    movies: []
  };
  
  componentDidMount(){

    axios.get("https://yts-proxy.now.sh/list_moives.json");

    /*
        setTimeout(() => {
        this.setState({ isLoading: false });
      }, 6000);
    */
  }


  render(){
    const { isLoading } = this.state;
    return <div>{isLoading ? "Loading..." : "We are ready"}</div>;
  }

  /*
  constructor(props){
    super(props);
    console.log("hello");
  }*/

  /**
   *  state는 하나의 동적 object
   *  바꾸고 싶은 데이터를 여기에 넣는다.
  
  state = { 
    count: 0
  };
  */

  /* 예시
  add = () => {
    this.setState(current => ({count: current.count + 1}));
  };

  minus = () => {
    this.setState(current => ({count: current.count -1}));
  };
  */

  /* constructor -> render -> componentDidMount() -> 
     변화가 있는 경우 render -> componentDidUpdate()
  componentDidMount(){
    console.log("component rendered");
  }  

  componentDidUpdate(){
    console.log("I just updated");
  }
  */

  /**
   * 실행하고자 하는 것을 render method에 넣는다.
  
  render(){ 
    console.log("I'm rendering");
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
  */

}

export default App;
