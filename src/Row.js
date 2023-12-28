// generates the clock row content by mapping cities to Column components

import Column from './Column.js';

const cities = [
{city: 'TKJP', name: 'Tokyo', dst: 0, offset: 9},
{city: 'DNCO', name: 'Denver', dst: 1, offset: -7},
{city: 'LDEN', name: 'London', dst: 1, offset: 0}
];
	
function Row() {
	
	
	const rowElement = (
		<>
			<div className="container mt-5">
			  <div className="row">
			  
			  {cities.map((city) => <Column code={city.city} name={city.name} dst={city.dst} offset={city.offset} />)}
			  </div>
			</div>
		</>
	);
	
	
	return (rowElement);
}

export default Row;