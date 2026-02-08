/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  function isNonEmptyString(str){
    return typeof str === 'string' && str.trim() !== "";
  }

  // If password is non empty string. then check for futher conditions
  //   otherwise return "weak"
  if(isNonEmptyString(password) ){
    
    // Test cases to determine the strength of the password
    let test_for_length = password.length >= 8;
    let test_uppercase = /[A-Z]/.test(password);
    let test_lowercase = /[a-z]/.test(password);
    let test_for_number = /\d/.test(password);
    let test_for_special_char = /[^a-zA-Z0-9]/.test(password)

    // array of result of the all tests.
    const test_result_array = [test_for_length, test_uppercase, test_lowercase, test_for_number, test_for_special_char];

    //function to check how many test result are true.
    function num_passed_test(result_array=[]){
      return result_array.reduce((total_passed_tests,one_test_result)=>{
        if(one_test_result == true)
          return total_passed_tests + 1;
        else
          return total_passed_tests;
      },0);
    }

    // Number of passed tests.
    const total_number_of_passed_test = num_passed_test(test_result_array);

    //base of the passed test number, return the strenth of the password.
    if(total_number_of_passed_test == test_result_array.length){
      return "very strong";
    }else if( total_number_of_passed_test == 4)
    {
      return "strong";
    }else if(total_number_of_passed_test == 2 || total_number_of_passed_test == 3){
      return "medium";
    }else{
      return "weak"
    }

  }else{
    return "weak"
  }
}
