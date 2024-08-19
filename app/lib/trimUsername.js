export default trimUsername = (username) => {
  // Trim max 10 char from username
  if (username.length > 8) {
    return username.substring(0, 8) + "...";
  } else {
    return username;
  }
};
