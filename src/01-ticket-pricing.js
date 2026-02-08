/**
 * 🎬 The Starlight Cinema
 *
 * You've just been hired at Starlight Cinema! Your first task is to build
 * the automated ticket pricing system. The manager hands you a sticky note
 * with the pricing rules scribbled on it:
 *
 * Age Groups:
 *   - Children (0–12): $8
 *   - Teens (13–17): $12
 *   - Adults (18–59): $15
 *   - Seniors (60+): $10
 *
 * Weekend Surcharge:
 *   - Add $3 on weekends (when isWeekend is true)
 *
 * Rules:
 *   - If age is negative or not a number, return -1
 *   - isWeekend is a boolean
 *
 * @param {number} age - The customer's age
 * @param {boolean} isWeekend - Whether it's a weekend
 * @returns {number} The ticket price, or -1 for invalid input
 */
export function getTicketPrice(age, isWeekend) {

  let category;
  if (age < 0) {
    category = false;
  } else if (age <= 12) {
    category = "child";
  } else if (age <= 17) {
    category = "teen";
  } else if (age <= 59) {
    category = "adult";
  } else if (age > 59) {
    category = "senior";
  } else {
    category = false;
  }

  if (category) {
    if (isWeekend) {
      if (category == "child") {
        return 8 + 3;
      } else if (category == "teen") {
        return 12 + 3;
      } else if (category == "adult") {
        return 15 + 3;
      } else if (category == "senior") {
        return 10 + 3;
      }
    } else {
      if (category == "child") {
        return 8;
      } else if (category == "teen") {
        return 12;
      } else if (category == "adult") {
        return 15;
      } else if (category == "senior") {
        return 10;
      }
    }
  } else {
    return -1;
  }

}
