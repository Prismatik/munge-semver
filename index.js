var semver = require('semver');

module.exports = function(version) {
  if (semver.valid(version)) return version;
  if (semver.valid('0.'+version)) return '0.'+version;
  if (semver.valid('0.0.'+version)) return '0.0.'+version;
  return new Error ("Cannot munge version: "+version);
};
