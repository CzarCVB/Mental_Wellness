import React, { useState, useEffect } from 'react';
import { Meteor } from 'meteor/meteor';

const hello = props => {

	const [menuItems, setMenuItems] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		Meteor.call('fetchMenuByRestaurant', 'test', (err, data) => {
    		if (err) {
    			console.log(err);
    		} else {
    			setMenuItems(data);
    		}
			setLoading(false);
		});
	}, []);

	return (
    	<div>
      		<h1>Menu Items</h1>
      		{loading ?
        		<p>Loading ...</p>
        		:
        		menuItems.map((item, index) => {
          			return <li key={index}>{item.name}</li>
        		})
      		}
    	</div>
	);
}

export default hello;
