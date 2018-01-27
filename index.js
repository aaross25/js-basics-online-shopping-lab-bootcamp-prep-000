var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  var cost = Math.floor(Math.random() * 100);
  var cartItem = { [item]: cost };
  cart = [...cart, cartItem];
  console.log('${item} has been added to your cart.');
  return cart;
}

function viewCart() {
   var items = [];
   var intro = 'In your cart, you have ';
    if (cart.length==0){
      console.log('Your shopping cart is empty.');
    }else{
      for(let i=0;i<cart.length;i++){
        cartString = ${item[i]}
    }
}

function total() {
  cart 
}

function removeFromCart(item) {
  for (let i=0; i<cart.length;i++){
    if (cart[i]==item){
      cart.splice(i,1)
      console.log('${item} removed from cart.')
    } else {
      console.log('${item} is not in cart.')
    }
  }
  return cart
}

function placeOrder(cardNumber) {
  // write your code here
}
