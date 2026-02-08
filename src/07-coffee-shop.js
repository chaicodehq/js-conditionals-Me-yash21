/**
 * ☕ Bean & Brew Cafe
 *
 * Bean & Brew, the cozy neighborhood cafe, wants to go digital! They
 * need a system that calculates the total price of a coffee order.
 * Here's their menu:
 *
 * Base price by size:
 *   - "small"  → $3.00
 *   - "medium" → $4.00
 *   - "large"  → $5.00
 *
 * Add-on for coffee type:
 *   - "regular"    → +$0.00
 *   - "latte"      → +$1.00
 *   - "cappuccino" → +$1.50
 *   - "mocha"      → +$2.00
 *
 * Optional extras:
 *   - whippedCream → +$0.50 (if true)
 *   - extraShot    → +$0.75 (if true)
 *
 * Rules:
 *   - If size is not "small", "medium", or "large", return -1
 *   - If type is not "regular", "latte", "cappuccino", or "mocha", return -1
 *   - Return the total price rounded to 2 decimal places
 *
 * @param {string} size - "small", "medium", or "large"
 * @param {string} type - "regular", "latte", "cappuccino", or "mocha"
 * @param {{ whippedCream?: boolean, extraShot?: boolean }} extras - Optional extras
 * @returns {number} Total price or -1 for invalid input
 */
export function calculateCoffeePrice(size, type, extras = {}) {
  // Your code here

  const valid_sizes = ["small","medium","large"];
  const valid_types = ["regular","latte","cappuccino","mocha"]
  const add_on_prices = {
    "regular": 0,
    "latte": 1.00,
    "cappuccino":1.50,
    "mocha":2.00
  }

  if(
    valid_sizes.some((valid_size)=> valid_size == size)
    &&
    valid_types.some((valid_type) => valid_type == type)
  ){
    let coffee_price = 0.00;
    // decide the base price in basis of cup size.
    switch(size){
      case "small":
        coffee_price = 3.00;
        break;
      case "medium":
        coffee_price = 4.00;
        break;
      case "large":
        coffee_price = 5.00;
        break;
    }

    // Add-on according to coffee type
    switch(type){
      case "regular":
        coffee_price += 0.00;
        break;
      case "latte":
        coffee_price += 1.00;
        break;
      case "cappuccino":
        coffee_price += 1.50;
        break;
      case "mocha":
        coffee_price += 2.00;
        break;
    }

    // add price for optional extras
    if(Object.keys(extras).length === 0){
      return Number(coffee_price.toFixed(2));
    }else{
      coffee_price += (extras['whippedCream'] ? 0.50 : 0.00 );
      coffee_price += (extras['extraShot'] ? 0.75 : 0.00);
    }

    return Number(coffee_price.toFixed(2));

  }else{
    return -1;
  }
  
}
