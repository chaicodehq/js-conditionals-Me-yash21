/**
 * 🅿️ City Central Parking
 *
 * City Central Parking garage is the busiest in downtown. They need an
 * automated system to calculate parking fees. Different vehicle types
 * have different rates, and there's a daily maximum so customers
 * aren't overcharged.
 *
 * Rates (first hour / each additional hour):
 *   - "car":        $5 first hour, then $3/hour
 *   - "motorcycle": $3 first hour, then $2/hour
 *   - "bus":        $10 first hour, then $7/hour
 *
 * Daily Maximum (fee can never exceed this):
 *   - "car":        $30
 *   - "motorcycle": $18
 *   - "bus":        $60
 *
 * Rules:
 *   - Partial hours are rounded UP (e.g., 1.5 hours → 2 hours)
 *   - The fee should never exceed the daily maximum
 *   - If hours is 0 or negative, return -1
 *   - If vehicleType is not "car", "motorcycle", or "bus", return -1
 *
 * Examples:
 *   - car, 1 hour     → $5
 *   - car, 3 hours    → $5 + $3 + $3 = $11
 *   - car, 0.5 hours  → rounds up to 1 hour → $5
 *   - car, 24 hours   → $5 + 23×$3 = $74 → capped at $30
 *
 * @param {number} hours - Number of hours parked
 * @param {string} vehicleType - "car", "motorcycle", or "bus"
 * @returns {number} Parking fee or -1 for invalid input
 */
export function calculateParkingFee(hours, vehicleType) {
  // Your code here
  // funciton to check the valid vehicle type  
  function isValidVehicleType(vehicleType){
    return vehicleType === "car" || vehicleType === "motorcycle" || vehicleType === "bus";
  }

  const vehicle_first_hour_charges = {
    "car":5,
    "motorcycle":3,
    "bus":10
  }

  const vehicle_additional_hours_charges ={
    "car":3,
    "motorcycle":2,
    "bus":7
  }

  const daily_maximum = {
    "car":30,
    "motorcycle":18,
    "bus":60
  }

  
  if( hours<=0 || !isValidVehicleType(vehicleType)){
    return -1;
  }else{
    //rounded the hours.
    // we can't use Math.round() method here, because it return the nearest integer number. in the case of 2.1 hour Math.round(2.1) return 2 that effect fee charges. we use math.ceil() method because it roundes up to the nearest integer. 
    let rounded_hours = Math.ceil(hours)

    // first hour fee + (total_hours - 1) additionl hour fee
    let fee = vehicle_first_hour_charges[vehicleType] + (rounded_hours - 1) *vehicle_additional_hours_charges[vehicleType] ;

    // if fee is greater then daily maximum fee , then return maximum fee.
    if(fee > daily_maximum[vehicleType]){
      return daily_maximum[vehicleType];
    }

    return fee;
  }

}
