import React, { useState } from 'react'

const Pagination = ({ carsPerPage, totalCars, paginate}) => {
	const pageNumbers = []
	const [clickedId, setClicked] = useState('')

	for(let i = 1; i <= Math.ceil(totalCars/carsPerPage); i++){
		pageNumbers.push(i)
	}

	return(
		<nav>
			<ul className="pagination">
				{pageNumbers.map((number, id) => (
					<li key={number} className="pageItem">
						<a onClick={() => {
							paginate(number)
							setClicked(id)
							//apply active class only to element with clickedId
						}} href="#" id={id} className={id === clickedId ? "pageItem a active" : ""}>
						{number}
						</a>
					</li>
				))}
			</ul>
		</nav>
	)
}


export default Pagination