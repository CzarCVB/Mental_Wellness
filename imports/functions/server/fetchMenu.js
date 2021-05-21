import { Menu, Restaurant } from '../../models';

export const fetchMenu = (restaurantIdentifier) => {

	// const restaurant = Restaurant.findByRestaurantIdentifier(restaurantIdentifier);
	const result = Menu.findByRestaurantId(restaurantIdentifier).fetch();
    
	return result;
}