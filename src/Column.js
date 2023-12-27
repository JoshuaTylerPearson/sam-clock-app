// generates clock columns 

import GetTime from './GetTime.js';
import React, { useState, useEffect } from 'react';


function Column(props) {
	
	//TODO: review hooks more, this works but I need to better understand why and how
	
	/*NOTE: 
	if i'm understanding this right this sould only be for
	the time part of the column, seperate out the rest of the column to improve performce.
	*/
	//NOTE: i think this is the hook that triggers the component to reload 
	const [time, setTime] = useState(Date.now());
	
	
	//NOTE: i think this tells the hook (above) to change state after a 1 sec timeout
	useEffect(() => {
		const interval = setInterval(() => {
			setTime(new Date());
		}, 1000); //delay in milliseconds 

		return () => clearInterval(interval);
	}, []);
	
	
	return (
		<>
			<div className="col-sm-4 text-center" >
				<h2>{props.name}</h2>
				
				<p className="text-secondary">UTC {props.offset}</p>

				<h3><GetTime offset={parseInt(props.offset)} dst={parseInt(props.dst)} /></h3>
			</div>
		</>
	);
}

export default Column;