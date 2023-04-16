import React from 'react';
import {GiCircle} from "react-icons/Gi";





function MainBody({ heading, chaneelName, views ,time}) {
  return (
    <div>
      <img
        className="img-thumbnail "
        src="https://media.istockphoto.com/id/517188688/photo/mountain-landscape.jpg?s=612x612&w=0&k=20&c=A63koPKaCyIwQWOTFBRWXj_PwCrR4cEoOw2S9Q7yVl8="
       
      />

      <div className="d-flex">
        <div>
          <GiCircle className="subheadingicon"></GiCircle>
        </div>
        <div className="mainsubheading">
          <p className="m-0">{heading}</p>
          <p className="m-0">{chaneelName}</p>
          <div className="d-flex ">
            <p>{views}</p>

            <p className="mx-1">{time}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainBody