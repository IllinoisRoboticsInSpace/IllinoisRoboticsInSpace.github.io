import React, { forwardRef } from "react";

import "./People.css";
import Person from "./Person";

const People = (props, ref) => {
  return (
    <div ref={ref} className="peopleSection sectionContainer">
      <h1>People</h1>
      <div className="peopleList">
        <Person
          name="Victoria Jiron"
          position="President"
          imageSrc="/people/victoria.jpg"
        />
        <Person
          name="Liz Boehning"
          position="Vice President"
          imageSrc="/people/liz.jpg"
        />
        <Person
          name="Lukas Adomaviciute"
          position="Secretary"
          imageSrc="/people/lukas.jpg"
        />
        <Person
          name="Patrick Kulach"
          position="Treasurer"
          imageSrc="/people/patrick.jpg"
        />
        <Person
          name="Jake Nickel"
          position="Project Manager and Electrical Lead"
          imageSrc="/people/jake.jpg"
        />
        <Person
          name="Gavin Chan"
          position="Publicity Chair"
          imageSrc="/people/gavin.jpg"
        />
        <Person
          name="Aryan Dawra"
          position="Outreach Chair"
          imageSrc="/people/aryan.jpg"
        />
        <Person
          name="Christian Held"
          position="Electrical Consultant"
          imageSrc="/people/christian.jpg"
        />
        <Person
          name="Ethan Hoggard"
          position="Systems Team Lead"
          imageSrc="/people/ethan.jpg"
        />
        <Person
          name="Ananya Yammanuru"
          position="Auto Team Lead"
          imageSrc="/people/ananya.jpg"
        />
        <Person
          name="Peter Gutfeldt"
          position="Mechanical Team Lead"
          imageSrc="/people/peter.jpg"
        />
        <Person
          name="Elizabeth Karlovics"
          position="Social Media Chair"
          imageSrc="/people/elizabeth.jpg"
        />
        <Person
          name="Megan Shapland"
          position="Corporate Outreach"
          imageSrc="/people/megan.jpg"
        />
        <Person
          name="Aditya Gupta"
          position="Webmaster"
          imageSrc="/people/adithya.jpg"
        />
        <Person
          name="Ajay Arasanipalai"
          position="Webmaster"
          imageSrc="/people/ajay.jpg"
        />
      </div>
    </div>
  );
};

export default forwardRef(People);
