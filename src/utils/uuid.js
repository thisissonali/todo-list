// short random string for ids - not guaranteed to be unique
const randomId = function(length = 6) {
  return Math.random().toString(36).substring(2, length+2);
};

// check if the id matches any other existing ids provided as an array
const checkId = function(id, existing = []) {
  let match = existing.find(function(item) {
    return item === id;
  });
  return match ? false : true;
};

export const getId = function({ length, existing = [] }) {
  const limit = 100; // max tries to create unique id
  let attempts = 0; // how many attempts
  let id = false;
  while(!id && attempts < limit) {
    id = randomId(length); // create id
    if(!checkId(id, existing)) { // check unique
      id = false; // reset id
      attempts++; // record failed attempt
    }
  }
  return id; // the id or false if did not get unique after max attempts
};