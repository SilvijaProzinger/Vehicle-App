import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
	return (
		<div className="selector">
			<div className="makes">
				<img className="listImage" src="https://seeklogo.net/wp-content/uploads/2014/06/toyota-logo-vector-download.jpg" alt=""/>
				<Link to={`/makes`}><button className="selectorButton addButton">Makes</button></Link>
			</div>
			<div className="models">
				<img className="listImage" src="https://dealerimages.dealereprocess.com/image/upload/c_limit,f_auto,fl_lossy,w_600/v1/svp/dep/17toyotayarisiafwdsa1a/toyota_17yarisiafwdsa1a_angularfront_abyss" alt="" />
				<Link to={`/models`}><button className="selectorButton addButton">Models</button></Link>
			</div>
		</div>
	)
}

export default Home