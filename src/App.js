import React, { useState } from 'react';
import './style.css';
import MapObject from './MapObject';
function App() {
  //array
  //  const arr1=['a','b','c','d','e']
  //  console.log(arr1)
  return (
    <div>
      {/* iterating through map */}
      {/* {arr1.map(ar=>{
      return(
        <h1>{ar}</h1>
      ) 
    })} */}
      <MapObject />
    </div>
  );
}
export default App;
