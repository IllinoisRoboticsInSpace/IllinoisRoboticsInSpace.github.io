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
          imageSrc="/people/victoria.webp"
        />
        <Person
          name="Liz Boehning"
          position="Vice President"
          imageSrc="/people/liz.webp"
        />
        <Person
          name="Lukas Adomaviciute"
          position="Secretary"
          imageSrc="/people/lukas.webp"
        />
        <Person
          name="Patrick Kulach"
          position="Treasurer"
          imageSrc="/people/patrick.webp"
        />
        <Person
          name="Jake Nickel"
          position="Electrical Lead"
          imageSrc="/people/jake.webp"
        />
        <Person
          name="Gavin Chan"
          position="Publicity Chair"
          imageSrc="/people/gavin.webp"
        />
        <Person
          name="Aryan Dawra"
          position="Outreach Chair"
          imageSrc="/people/aryan.webp"
        />
        <Person
          name="Christian Held"
          position="Electrical Consultant"
          imageSrc="/people/christian.webp"
        />
        <Person
          name="Ethan Hoggard"
          position="Systems Team Lead"
          imageSrc="/people/ethan.webp"
        />
        <Person
          name="Ananya Yammanuru"
          position="Auto Team Lead"
          imageSrc="/people/ananya.webp"
        />
        <Person
          name="Peter Gutfeldt"
          position="Mechanical Team Lead"
          imageSrc="/people/peter.webp"
        />
        <Person
          name="Elizabeth Karlovics"
          position="Social Media Chair"
          imageSrc="/people/elizabeth.webp"
        />
        <Person
          name="Megan Shapland"
          position="Corporate Outreach"
          imageSrc="/people/megan.webp"
        />
        <Person
          name="Aditya Gupta"
          position="Webmaster"
          imageSrc="/people/adithya.webp"
        />
        <Person
          name="Adithya Gupta"
          position="Webmaster"
          imageSrc="/people/adithya.webp"
        />
      </div>
    </div>
  );
};

export default forwardRef(People);
