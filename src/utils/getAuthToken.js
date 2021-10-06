const getAuthToken = () => {
  const token = JSON.parse(localStorage.getItem("token"));
  if (token !== null || undefined) return token.token;
  else {
    return "Token does not exist!";
  }
};

export default getAuthToken;
