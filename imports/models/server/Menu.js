import { Base } from './_Base';

export class Menu extends Base {
    constructor(...args) {
        super(...args);
        this.tryEnsureIndex({ restaurantId: 1 });
    }
    
    findByRestaurantId(restaurantId) {
        const query = {
            restaurantId,
        };

        return this.find(query);
    }
}

export default new Menu('menu');