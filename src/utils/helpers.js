export const changeToken = (setCookie, token) => {
  setCookie("token", token, {
    path: "/"
  });
  console.log('token changed to: ' + token);
};

export const convert = (dollars) => {
  const pounds = Number((dollars * 0.85).toFixed(2))
  const response = {
    pounds: pounds,
    poundsDisplay: pounds.toFixed(2)
  };
  return response.poundsDisplay;
};