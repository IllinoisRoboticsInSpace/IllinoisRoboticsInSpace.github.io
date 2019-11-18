import React, { forwardRef } from 'react';

import './People.css';
import Person from './Person';

const People = (props, ref) => {
	return (
		<div ref={ref} className="peopleSection sectionContainer">
			<h1>People</h1>
			<div className="peopleList">
				<Person name="Madara Uchiha" position="Caster of the infinite tsukuyomi" imageSrc="/people/madara.png" />
				<Person name="Hagoromo Ōtsutsuki" position="Sage of the six paths" imageSrc="/people/hagoromo.png" />
				<Person name="Naruto Uzumaki" position="Seventh Hokage of the hidden leaf and a whole lot of other things" imageSrc="/people/naruto.png" />
			</div>
		</div>
	);
};

export default forwardRef(People);
