class Hamburger {
    constructor(size, stuffing) {
     this._size = size;
     this._stuffing = stuffing;
     this._toppings = [];
   }
 
   addTopping(topping){
       if(!this._toppings.includes(topping)){
         this._toppings.push(topping);
       }
       return this._toppings;
     }
 
     removeTopping(topping) {
       if (this._toppings.includes(topping)){
         this._toppings.pop(topping);
       }
       return this._toppings;
     }
       
       getToppings() {
         return  this._toppings;
       }
 
        getSize() {
         return this._size;
       }
 
        getSize (value) {
         this._size = value;
       }
 
        getStuffing() {
         return this._stuffing;
       }
 
 
       calculatePrice() {
         let sumTop = this._toppings.reduce((acc, val) => Hamburger.TOPPINGS[this._topping].price + acc, 0);
         let sum =  Hamburger.SIZES[this._size].price + Hamburger.STUFFINGS[this._stuffing].price + sumTop;
         return sum;
       }
     
       calculateCalories() {
         let totalCalories = Hamburger.SIZES[this._size].calories + Hamburger.STUFFINGS[this._stuffing].calories;
         return totalCalories;
       }
   }
   
   
   
 Hamburger.SIZE_SMALL = 'SIZE_SMALL';
 Hamburger.SIZE_LARGE = 'SIZE_LARGE';
 
 Hamburger.SIZES = {
   [Hamburger.SIZE_SMALL]: {
     price: 30,
     calories: 50,
   },
   [Hamburger.SIZE_LARGE]: {
     price: 50,
     calories: 100,
   }
 };
 
 
 Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
 Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
 Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';
 
 
 Hamburger.STUFFINGS = {
   [Hamburger.STUFFING_CHEESE]: {
     price: 15,
     calories: 20,
   },
   [Hamburger.STUFFING_SALAD]:{
     price: 20,
     calories: 5,
   },
   [Hamburger.STUFFING_MEAT]:{
     price: 35,
     calories: 15,
   },
 };
 
 
 
 
 
 
 Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
 Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';
 
 Hamburger.TOPPINGS = {
   [Hamburger.TOPPING_SPICE]: {
     price: 10,
     calories: 0,
   },
   [Hamburger.TOPPING_SAUSE]: {
     price: 15,
     calories: 5,
   }
 };
 
 
 const hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);
 
 console.log(hamburger.addTopping(Hamburger.TOPPING_SPICE));
 console.log("Price: ", hamburger.calculatePrice());
 console.log("Calories: ", hamburger.calculateCalories());
 console.log(hamburger.addTopping(Hamburger.TOPPING_SAUCE));
 console.log("Price with sauce: ", hamburger.calculatePrice());
 console.log("Is hamburger large: ", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
 
 hamburger.removeTopping(Hamburger.TOPPING_SPICE);
 console.log("Hamburger has %d toppings", hamburger.getToppings().length); // 1
 
 
 
 