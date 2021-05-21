import { Meteor } from 'meteor/meteor';
import { Menu } from '../../imports/models';

Meteor.startup(() => {
    if(Menu.find({}).fetch().length == 0) {
        Menu.insert({
            name: "test",
            restaurantId: "test",
            price: 10
        });
        Menu.insert({
            name: "test1",
            restaurantId: "test",
            price: 10
        })
    }
});