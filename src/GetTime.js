// converts system local time to the given timezone UTC mod in props.offset

function GetTime(props) {
	
	let date = new Date();
	
	// convert local system timezone into reverse UTC mod
	const localOffset = date.getTimezoneOffset() / 60;
	
	//combine local system time, offset for city UTC and local offest
	date.setHours(date.getHours() + props.offset + localOffset)
	
	// return in format hh:mm:ss + " " + AM / PM
	return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
}

export default GetTime;