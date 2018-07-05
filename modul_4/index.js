const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    chicken: 50,
    cheese: 40,
  };
  
  function Cashier(name, productsDatabase) {
    this.name = name,
    this.productsDatabase = products,
    this.totalPrice = 0,
    this.customerMoney = 0,
    this.changeAmount = 0,
    this.greet = function (){
      console.log(`Здравствуйте, вас обслуживает ${this.name}`)
    },
    this.onSuccess = function(){
  if (this.changeAmount > 0){
    console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
  } else if(this.changeAmount == 0){
    console.log(`Спасибо за покупку`);
  }
    },
    this.onError = function(){
      console.log('Очень жаль, вам не хватает денег на покупки' ); 
    },
    this.countTotalPrice = function (order){
      for(const prop in order){
        if(order.hasOwnProperty(prop) && this.productsDatabase.hasOwnProperty(prop)){
         let price = order[prop] * this.productsDatabase[prop];
         this.totalPrice += price;
        }
      }return this.totalPrice;
    },
    this.getCustomerMoney = function (value){
      this.customerMoney = value;
      return this.customerMoney;
    },
    this.countChange = function (){
      this.changeAmount = this.customerMoney - this.totalPrice;
      if (this.customerMoney >= this.totalPrice){
        return this.changeAmount;
      }else return null;
    },
    this.reset = function (){
      this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
    }
  };
  
  const order = {
    bread: 2,
    milk: 2,
    apples: 1,
    cheese: 1
  };
  const mango = new Cashier('Mango', products);
  console.log(mango.name); // Mango
  console.log(mango.productsDatabase); // ссылка на базу данных продуктов (объект products)
  console.log(mango.totalPrice); // 0
  console.log(mango.customerMoney); // 0
  console.log(mango.changeAmount); // 0
  
  mango.greet();
  
  mango.countTotalPrice(order);
  console.log(mango.totalPrice);
  
  mango.getCustomerMoney(300);
  
  // Проверяем что в поле с деньгами пользователя
  console.log(mango.customerMoney); // 300
  
  const result = mango.countChange();
  
  // Проверяем что нам вернул countChange
  console.log(result); // 190
  if(result !== null) {
    // При успешном обслуживании вызываем метод onSuccess
   mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
  } else {
   // При неудачном обслуживании вызываем метод onError   
   mango.onError(); // Очень жаль, вам не хватает денег на покупки
  }
  
  
  mango.reset();
  console.log(mango.totalPrice); // 0
  console.log(mango.customerMoney); // 0
  console.log(mango.changeAmount); // 0