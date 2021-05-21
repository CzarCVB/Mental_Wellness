import { Base } from './_Base';

export class Restaurant extends Base {
	constructor(...args) {
        super(...args);
		this.tryEnsureIndex({ restaurantIdentifier: 1 });
    }
    
    findByRestaurantIdentifier(restaurantIdentifier) {
        const query = {
            restaurantIdentifier,
        };

        return this.find(query);
    }
}

export default new Restaurant('restaurant');