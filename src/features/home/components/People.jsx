import React, { forwardRef } from 'react';

import './People.css';
import Person from './Person';

const People = (props, ref) => {
	return (
		<div ref={ref} className="peopleSection sectionContainer">
			<h1>People</h1>
			<div className="peopleList">
				<Person name="Victoria Jiron" position="President" imageSrc="/people/victoria.jpg" />
				<Person name="Liz Boehning" position="Vice President" imageSrc="/people/liz.jpg" />
				<Person name="Lukas Adomaviciute" position="Secretary" imageSrc="/people/null.jpg" />
				<Person name="Patrick Kulach" position="Treasurer" imageSrc="/people/null.jpg" />
				<Person name="Jake Nickel" position="Project Manager and Electrical Lead" imageSrc="/people/null.jpg" />
				<Person name="Gavin Chan" position="Publicity Chair" imageSrc="/people/gavin.jpg" />
				<Person name="Aryan Dawra" position="Outreach Chair" imageSrc="/people/null.jpg" />
				<Person name="Ethan Hoggard" position="Systems Team Lead" imageSrc="/people/null.jpg" />
				<Person name="Ananya Yammanuru" position="Auto Team Lead" imageSrc="/people/null.jpg" />
				<Person name="Peter Gutfeldt" position="Mechanical Team Lead" imageSrc="/people/null.jpg" />
				<Person name="Elizabeth Karlovics" position="Social Media Chair" imageSrc="/people/null.jpg" />
				<Person name="Nate Claussen" position="Corporate Outreach" imageSrc="/people/null.jpg" />
				<Person name="Aditya Gupta" position="Webmaster" imageSrc="/people/null.jpg" />
				<Person name="Ajay Arasanipalai" position="Webmaster" imageSrc="/people/null.jpg" />
			</div>
		</div>
	);
};

export default forwardRef(People);
