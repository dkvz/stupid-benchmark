const fetch = require('node-fetch');

async function fetchStats(url) {
  const start = Date.now();
  const res = {};
  try {
    const response = await fetch(url);
    res.totalTime = Date.now() - start;
    if (response.status === 200) {
      res.status = 'Success';
    } else {
      res.status = 'Error';
      res.statusCode = response.status;
    }
  } catch (ex) {
    res.status = 'Error';
  }
  return res;
}

module.exports = fetchStats;