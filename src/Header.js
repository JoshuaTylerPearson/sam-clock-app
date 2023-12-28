// generates the page header

function Header() {
	
	const headerElement = (
		<>
			<div className="container-fluid p-5 bg-primary text-white text-center">
				<h1>React / Bootstrap Clock</h1>
				<p>By Sam Pearson</p> 
			</div>
		</>
	);
	
	return (headerElement);
}

export default Header;