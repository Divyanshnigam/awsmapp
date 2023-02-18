// var React = require('react');
// var ReactDom = require('react-dom');
import React from "react"; // For use of JSX we must import react else for each HTML element we have to create element
import ReactDom from "react-dom";

// babbel converts the mordern JS code to browser readable format.

ReactDom.render(
    <>
        
    <div>Hello World</div>  
      {/* to enclose multiple elements as JSX elememts then include in a container like div, etc. OR [ , ,  , ,] as a array
    without array take a react fragment as <React.Fragment>  or "<> </>" */}
    <p> This a another JSX element inside a react fragment</p>
    </>
    ,document.getElementById("root")
);

/*
without React render 

 we have to write in js as->
 
 var h1 = document.createElement("h1");
 h1.innerHTML = "hello World";
 document.getElementById("root").appendChild(h1);

 */

