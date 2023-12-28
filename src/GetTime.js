// converts system local time given local time, city timezone UTC mod in props.offset


// Daylight savings calculator
function localHasDST(date) {
	
	let hasDSTNow = null;
	
	
	
	let winterGMTOffset = new Date(date.getFullYear(), 0, 1).getTimezoneOffset();
	
	let SummerGMTOffset = new Date(date.getFullYear(), 6, 1).getTimezoneOffset();
	
	
	// if there is a diffence between offsets client has DST at some point
	
	// if client region has dst AND the current offset matches summer then dst is in effect
	if ((winterGMTOffset !== SummerGMTOffset) && date.getTimezoneOffset() === SummerGMTOffset){
		
		hasDSTNow = true;
		
	} else {hasDSTNow = false}

	return hasDSTNow;
}


function GetTime(props) {
	
	let date = new Date();
	
	// convert local system timezone into negative UTC mod
	let localOffset = date.getTimezoneOffset() / 60; // mins / hours
	
	// account for local DST
	if (localHasDST(date) && props.dst === 0){ 
	
		localOffset -= 1;
		
	}
	
	
	//combine local system time, offset for city UTC and local offest
	date.setHours(date.getHours() + props.offset + localOffset)
	
	// return in format hh:mm:ss + " " + AM / PM
	return date.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: true });
}

export default GetTime;