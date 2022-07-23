const validCampos = (name, email, file, phone) => {
  if (!name || !email || !file || !phone) {
    return false;
  }
  return true;
};

const validPhone = (phone) => {
  if (phone.length > 9 && phone.length < 12) {
    return true;
  }
  return false;
};

const isValidEmail = (email) => {
  const regex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
  return regex.test(email);
};

export {
  validCampos,
  validPhone,
  isValidEmail,
};
