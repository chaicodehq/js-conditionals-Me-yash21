/**
 * 🚦 The Driving Simulator
 *
 * SafeDrive Driving School is building a simulator for new students.
 * You need to write the logic that tells student drivers what to do
 * when they encounter different traffic light signals.
 *
 * Signal → Action:
 *   - "green"        → "GO"
 *   - "yellow"       → "SLOW DOWN"
 *   - "red"          → "STOP"
 *   - "flashing red" → "STOP AND PROCEED WITH CAUTION"
 *   - anything else  → "INVALID SIGNAL"
 *
 * Rules:
 *   - The function should be case-insensitive
 *     (e.g., "GREEN", "Green", "green" should all return "GO")
 *
 * Hint: Use a switch statement!
 *
 * @param {string} color - The traffic light signal
 * @returns {string} The driving action to take
 */
export function getTrafficAction(color) {
  // Your code here
  let color_lowercase = color.toLowerCase()
  let valid_signals = ["green","yellow","red","flashing red"];

  if(valid_signals.some((valid_signal) => valid_signal == color_lowercase)){
    switch(color_lowercase){
      case "green":
        return "GO";
        break;
      case "yellow":
        return "SLOW DOWN";
        break;
      case "red":
        return "STOP";
        break;
      case "flashing red":
        return "STOP AND PROCEED WITH CAUTION";
        break;
      
    }
  }else{
    return "INVALID SIGNAL"
  }

}
