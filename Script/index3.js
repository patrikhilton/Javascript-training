function isValidPassword(password, username) {
if (password.length < 8) {
    return false;
  }
    if (password.includes(" ")) {
    return false;
  }
    if (password.includes(username)) {
    return false;
  }
  return true;
    }

    console.log(isValidPassword("1234567", "bob"));
    console.log(isValidPassword("Sunshine2024", "bob"));
console.log(isValidPassword("my password1", "bob"));
console.log(isValidPassword("bob12345678", "bob"));
