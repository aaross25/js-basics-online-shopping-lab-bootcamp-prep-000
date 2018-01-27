var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
    const price = Math.floor(Math.random() * 100+1);
    cart.push({ [item]: price});
    console.log(`${item} has been added to your cart.`);
    return cart;
}

function viewCart() {

}

function total() {
  cart 
}

function removeFromCart(item) {
  for (let i=0; i<cart.length;i++){
    if (cart[i]==item){
      cart.splice(i,1);
      console.log('${item} removed from cart.');
    } else {
      console.log('${item} is not in cart.');
    }
  }
  return cart;
}

function placeOrder(cardNumber) {
  // write your code here
}
