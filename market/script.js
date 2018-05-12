var Products = function(name, place, weight, price) {
    this.place = place;
    this.name = name;
    this.weight = weight;
    this.price = price;

};
Products.prototype.name = function() {
    return this.name;
};
Products.prototype.place = function() {
    return this.place;
};
Products.prototype.weight = function() {
    return this.weight;
};
Products.prototype.price = function() {
    return this.price;
};

Products.prototype.bill = function() {
    return this.name + ' is stored in the ' + this.place + ' and cost ' + this.price * this.weight  + ' grn ';
};


var apple = new Products('Apple', 'fruit department', 2, 33);
var banana = new Products('Banana', 'fruit department', 2, 45);
var cherry = new Products('Cherry', 'fruit department', 0.9, 50);
var papaya = new Products('Papaya', 'fruit department', 2, 70);


var cucumber = new Products('Cucumber', 'vegitables department', 0.3, 50);
var corn = new Products('Corn', 'vegitables department', 2, 20);
var onion = new Products('Onion', 'vegitables department', 1, 10);
var tomato = new Products('Tomato', 'vegitables department', 2, 60);
var broccoli = new Products('Broccoli', 'vegitables department', 5, 30);
var carrot = new Products('Carrot', 'vegitables department', 6, 15);

var orange = new Products('Orange', 'fruit department', 5, 10);
var cheese = new Products('Cheese', 'milk department', 0.5, 84);
var chicken = new Products('Chicken', 'meat department', 1, 90);
var sausage = new Products('Sausage', 'meat department', 5, 70);


console.log(cucumber.bill());
console.log(papaya.bill());
console.log(cheese.bill());
console.log(chicken.bill());
console.log(cherry.bill());
console.log(broccoli.bill());