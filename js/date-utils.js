// Taken from MDC @ Core_JavaScript_1.5_Reference/Objects/Date.
function dateToISO8601(d) {
  function pad(n) { return n < 10 ? '0' + n : n; }
  
  return (d.getUTCFullYear() + '-' +
          pad(d.getUTCMonth() + 1) + '-' +
          pad(d.getUTCDate()) + 'T' +
          pad(d.getUTCHours()) + ':' +
          pad(d.getUTCMinutes()) + ':' +
          pad(d.getUTCSeconds()) + 'Z');
}

function timeAgo(ms) {
  var then = new Date((new Date()) - ms);
  return dateToISO8601(then);
}
