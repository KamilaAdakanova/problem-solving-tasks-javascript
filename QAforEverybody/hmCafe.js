//https://docs.google.com/document/d/1YHK8vAmYJaWQvpfKB9SxsO-YmONX-pBAjAY24q4f6JI/edit

const makeCoffee = (coffee, size, quantity) => {
  let cafeMenu = [
    { coffee: 'brewed', price: '2' },
    { coffee: 'cappuccino', price: '3' },
    { coffee: 'espresso', price: '3' },
    { coffee: 'latte', price: '4' },
  ];
  for (let i = 0; i < cafeMenu.length; i++) {
    if (cafeMenu[i].coffee === coffee) {
      if (size === 'small') {
        return (
          coffee,
          `1.Make sure that coffee machine has enouth water to brew 2-12 cups of coffee per cycle. Use only clean, fresh water to make coffee.
       \n2. Add filter.
       \n3. Add coffee grounds ${coffee}. 
       \n4. Brew. When it's ready it automatically turn off.
       \n5. Press the button 'Pour ${coffee}, ${size} cup'
       \n6. The price for the ${coffee}, ${size} is  ${(
            cafeMenu[i].price *
            1 *
            quantity
          ).toFixed(2)}
       \n7. Give the order to the client and wish to enjoy`
        );
      }
      if (size === 'medium') {
        return (
          coffee,
          `1.Make sure that coffee machine has enouth water to brew 2-12 cups of coffee per cycle. Use only clean, fresh water to make coffee.
       \n2. Add filter.
       \n3. Add coffee grounds ${coffee}. 
       \n4. Brew. When it's ready it automatically turn off.
       \n5. Press the button 'Pour ${coffee}, ${size} cup'
       \n6. The price for the ${coffee}, ${size} is  ${(
            cafeMenu[i].price *
            1.1 *
            quantity
          ).toFixed(2)}
       \n7. Give the order to the client and wish to enjoy`
        );
      }
      if (size === 'big') {
        return (
          coffee,
          `1.Make sure that coffee machine has enouth water to brew 2-12 cups of coffee per cycle. Use only clean, fresh water to make coffee.
       \n2. Add filter.
       \n3. Add coffee grounds ${coffee}. 
       \n4. Brew. When it's ready it automatically turn off.
       \n5. Press the button 'Pour ${coffee}, ${size} cup'
       \n6. The price for the ${coffee}, ${size} is  ${(
            cafeMenu[i].price *
            1.3 *
            quantity
          ).toFixed(2)}
       \n7. Give the order to the client and wish to enjoy`
        );
      }
    }
  }
};
res = makeCoffee('brewed', 'medium', 2);
console.log(res);
