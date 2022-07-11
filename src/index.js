import React from "react";

import ReactDom from "react-dom";

//this works as a component to prevent hard coding stuff by taping into the properties of the object
function Card(props){
  return (<div>
    <h2>{props.name}</h2>

    <img src={props.img} alt="avatar_img" />

    <p>{props.telnum}</p>
    <p>{props.email}</p>
  </div>)
};

ReactDom.render(
  //include the proprties that need to be accessed by the component above
  <div>
    <h1>My Contacts</h1>
    <Card
    name="Beyonce"
    img = "https://blackhistorywall.files.wordpress.com/2010/02/picture-device-independent-bitmap-119.jpg"
    telnum = "+123 456 789"
    email = "b@beyonce.com"
    ></Card>
    <Card
    name="lokoshjvhhve"
    img = "https://pbs.twimg.com/profile_images/625247595825246208/X3XLea04_400x400.jpg"
    telnum = "32473284732637"
    email = "loksojafda@hotmail.com"
    ></Card> 
  </div>,
  
  document.getElementById("root")
);