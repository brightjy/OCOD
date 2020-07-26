import React from 'react';

function Food(props){
  return (<p>I like {props.favorite}</p>);
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      <Food favorite="kimchi"/> 
      <Food favorite="ramen"/>
      <Food favorite="gogi"/>
      <Food favorite="hue"/>
    </div>
  );
}

export default App;
