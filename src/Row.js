// generates the clock row content by mapping cities to Column components

import Column from './Column.js';

const cities = [
{city: 'LACA', name: 'Los Angeles'},
{city: 'DNCO', name: 'Denver'},
{city: 'NYNY', name: 'New York'}
];
	
function Row() {
	return (
		<>
			<div className="container mt-5">
			  <div className="row">
			  
			  {cities.map((city) => <Column key={city.city} code={city.city} name={city.name} />)}
			  </div>
			</div>
		</>
	);
}

export default Row;