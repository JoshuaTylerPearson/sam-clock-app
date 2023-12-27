// generates the clock row content by mapping cities to Column components

import Column from './Column.js';

const cities = [
{city: 'TKJP', name: 'Tokyo', dst: 0, offset: 9},
{city: 'DNCO', name: 'Denver', dst: 1, offset: -7},
{city: 'LDEN', name: 'London', dst: 1, offset: 0}
];
	
function Row() {
	return (
		<>
			<div className="container mt-5">
			  <div className="row">
			  
			  {cities.map((city) => <Column key={city.city} code={city.city} name={city.name} dst={city.dst} offset={city.offset} />)}
			  </div>
			</div>
		</>
	);
}

export default Row;