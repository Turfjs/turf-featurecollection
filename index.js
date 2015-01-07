/**
 * Creates a {@link FeatureCollection}
 *
 * @module turf/featurecollection
 * @param {Feature[]} features
 * @returns {FeatureCollection} output
 * @example
 * var pt1 = turf.point(-75.343, 39.984, {name: 'Location A'})
 * var pt2 = turf.point(-75.833, 39.284, {name: 'Location B'})
 * var pt3 = turf.point(-75.534, 39.123, {name: 'Location C'})
 * var fc = turf.featurecollection([pt1, pt2, pt3])
 * console.log(fc)
 */
module.exports = function(features){
  var fc = {
    "type": "FeatureCollection",
    "features": features
  };

  return fc;
}
