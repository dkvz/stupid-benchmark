const fetchStats = require('./requester');

(async () => {
  if (process.argv.length >= 3 && process.argv[2]) {
    const result = await fetchStats(process.argv[2]);
    console.log(`Request to ${process.argv[2]} ended with ${result.status}`);
    if (result.totalTime) {
      console.log(`Total time: ${result.totalTime} ms`);
    }
  } else {
    console.log('Please provide a URL as the first parameter');
  }
})();
