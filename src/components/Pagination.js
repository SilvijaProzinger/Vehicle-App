import React, { useState } from 'react'

const Pagination = ({ carsPerPage, totalCars, paginate}) => {
	const pageNumbers = []
	const [active, setActive] = useState(false)

	for(let i = 1; i <= Math.ceil(totalCars/carsPerPage); i++){
		pageNumbers.push(i)
	}

	return(
		<nav>
			<ul className="pagination">
				{pageNumbers.map(number => (
					<li key={number} className="pageItem">
						<a onClick={() => paginate(number)} href="#" className={`pageItem a ${active ? "active": ""}`}>
						{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}


export default Pagination