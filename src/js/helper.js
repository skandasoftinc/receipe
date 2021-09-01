import { TIMEOUT_SEC } from './config';
const timeout = function (sec) {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request took too long! Timeout after ${sec} second`));
    }, sec * 1000);
  });
};

export const getJSON = async url => {
  try {
    const res = await Promise.race([fetch(url), timeout(TIMEOUT_SEC)]);
    const data = await res.json();
    if (!res.ok) {
      console.log(res, 'data');
      throw Error(`${data.message} ${res.status}`);
    }
    console.log('data', data);
    return data;
  } catch (err) {
    throw err;
  }
};
