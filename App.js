import React from "react";
import ReactDOM from "react-dom";

import React from 'react'

export const Title = () => {
  return (<div>Title</div>)
}


//React Element Created by jsx
const JsxHeading = ( )=> {

    <Title />     
    return (
   <>     
    
    <h1>Functional Component </h1>
    </>
)
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<JsxHeading />);
