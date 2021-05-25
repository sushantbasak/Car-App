const validatePassword = (password) => {
  if (password.length <= 5 || password === '') {
    return false;
  }
  return true;
};

const isEmpty = (input) => {
  if (input === undefined || input === '') return true;
  if (input.replace(/\s/g, '').length) {
    // globally searching for all types of unicode whitespaces and removing them and if after removing the length is still not 0 then there must be something other than spaces.
    return false;
  }
  return true;
};

const empty = (input) => {
  if (input === undefined || input === '') return true;
  return false;
};

module.exports = { isValidEmail, validatePassword, isEmpty, empty };
