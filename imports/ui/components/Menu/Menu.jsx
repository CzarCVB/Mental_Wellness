import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';

import Navbar from './navbar';
import Invoice from './invoice';

const menu = props => {

	const [menuItems, setMenuItems] = useState([]);
	const [loading, setLoading] = useState(true);
	const [selectedItems, seSelectedItems] = useState([]);

	useEffect(() => {
		Meteor.call('fetchMenuByRestaurant', 'test', (err, data) => {
    		if (err) {
    			console.log(err);
    		} else {
				setMenuItems(data);
				console.log(data);
    		}
			setLoading(false);
		});
	}, []);

	return (
    	<div className="row menu">
            <div className="col-md-8 container main">
				<div className="row">
					<div className="col-md-2 bg-white">
						<Navbar />
					</div>
					<div className="col-md-10 bg-grey">
						<p><b>Menu</b> Category</p>
						<p><b>Choose</b> Order</p>
						<div className="row">
							<div className="col-md-3">
							<div class="card">
								<img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1804&q=80" class="card-img-top img-fluid" alt="..."/>
								<div class="card-body">
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<p>$10</p>
								</div>
							</div>
							</div>
							<div className="col-md-3">
							<div class="card">
								<img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1804&q=80" class="card-img-top img-fluid" alt="..."/>
								<div class="card-body">
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<p>$10</p>
								</div>
							</div>
							</div>
							<div className="col-md-3">
							<div class="card">
								<img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1804&q=80" class="card-img-top img-fluid" alt="..."/>
								<div class="card-body">
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<p>$10</p>
								</div>
							</div>
							</div>
							<div className="col-md-3">
							<div class="card">
								<img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1804&q=80" class="card-img-top img-fluid" alt="..."/>
								<div class="card-body">
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<p> $10</p>
								</div>
							</div>
							</div>
							<div className="col-md-3">
							<div class="card">
								<img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1804&q=80" class="card-img-top img-fluid" alt="..."/>
								<div class="card-body">
									<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
									<p> $10</p>
								</div>
							</div>
							</div>
						</div>
					</div>
				</div>
            </div>
            <div className="col-md-4 container">
                <Invoice />
            </div>
    	</div>
	);
}

export default menu;
