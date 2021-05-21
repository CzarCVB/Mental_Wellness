import { Meteor } from 'meteor/meteor';
import { check } from 'meteor/check';

import { fetchMenu } from '../functions';

Meteor.methods({
	fetchMenuByRestaurant(restaurantIdentifier) {
		check(restaurantIdentifier, String);

		return fetchMenu(restaurantIdentifier);
	},
});
