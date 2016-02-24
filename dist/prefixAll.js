(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g.Prefixer = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
exports['default'] = prefixAll;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _prefixProps = require('./prefixProps');

var _prefixProps2 = _interopRequireDefault(_prefixProps);

/*
import calc from './plugins/calc'
import cursor from './plugins/cursor'
import flex from './plugins/flex'
import sizing from './plugins/sizing'
import gradient from './plugins/gradient'
import transition from './plugins/transition'
// special flexbox specifications
import flexboxIE from './plugins/flexboxIE'
import flexboxOld from './plugins/flexboxOld'

export default [
  calc,
  cursor,
  sizing,
  gradient,
  transition,
  flexboxIE,
  flexboxOld,
  // this must be run AFTER the flexbox specs
  flex
]*/

// helper to capitalize strings
var capitalizeString = function capitalizeString(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

/**
 * Returns a prefixed version of the style object using all vendor prefixes
 * @param {Object} styles - Style object that gets prefixed properties added
 * @returns {Object} - Style object with prefixed properties and values
 */

function prefixAll(styles) {
  return Object.keys(styles).reduce(function (prefixedStyles, property) {
    var value = styles[property];
    if (value instanceof Object) {
      // recurse through nested style objects
      prefixedStyles[property] = prefixAll(value);
    } else {
      Object.keys(_prefixProps2['default']).forEach(function (prefix) {
        var properties = _prefixProps2['default'][prefix];
        // add prefixes if needed
        if (properties.has(property)) {
          prefixedStyles[prefix + capitalizeString(property)] = value;
        }
      });
    }

    return prefixedStyles;
  }, styles);
}

module.exports = exports['default'];
},{"./prefixProps":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = { "Webkit": new Set(["transform", "transformOrigin", "transformOriginX", "transformOriginY", "backfaceVisibility", "perspective", "perspectiveOrigin", "transformStyle", "transformOriginZ", "animation", "animationDelay", "animationDirection", "animationFillMode", "animationDuration", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction", "appearance", "userSelect", "fontKerning", "textEmphasisPosition", "textEmphasis", "textEmphasisStyle", "textEmphasisColor", "boxDecorationBreak", "clipPath", "maskImage", "maskMode", "maskRepeat", "maskPosition", "maskClip", "maskOrigin", "maskSize", "maskComposite", "mask", "maskBorderSource", "maskBorderMode", "maskBorderSlice", "maskBorderWidth", "maskBorderOutset", "maskBorderRepeat", "maskBorder", "maskType", "textDecorationStyle", "textDecorationSkip", "textDecorationLine", "textDecorationColor", "filter", "fontFeatureSettings", "breakAfter", "breakBefore", "breakInside", "columnCount", "columnFill", "columnGap", "columnRule", "columnRuleColor", "columnRuleStyle", "columnRuleWidth", "columns", "columnSpan", "columnWidth", "flex", "flexBasis", "flexDirection", "flexGrow", "flexFlow", "flexShrink", "flexWrap", "alignContent", "alignItems", "alignSelf", "justifyContent", "order", "transition", "transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction", "backdropFilter", "scrollSnapType", "scrollSnapPointsX", "scrollSnapPointsY", "scrollSnapDestination", "scrollSnapCoordinate", "shapeImageThreshold", "shapeImageMargin", "shapeImageOutside", "hyphens", "flowInto", "flowFrom", "regionFragment", "textSizeAdjust", "borderImage", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "tabSize", "objectFit", "objectPosition"]), "Moz": new Set(["appearance", "userSelect", "boxSizing", "textAlignLast", "textDecorationStyle", "textDecorationSkip", "textDecorationLine", "textDecorationColor", "tabSize", "hyphens", "fontFeatureSettings", "breakAfter", "breakBefore", "breakInside", "columnCount", "columnFill", "columnGap", "columnRule", "columnRuleColor", "columnRuleStyle", "columnRuleWidth", "columns", "columnSpan", "columnWidth"]), "ms": new Set(["flex", "flexBasis", "flexDirection", "flexGrow", "flexFlow", "flexShrink", "flexWrap", "alignContent", "alignItems", "alignSelf", "justifyContent", "order", "transform", "transformOrigin", "transformOriginX", "transformOriginY", "userSelect", "wrapFlow", "wrapThrough", "wrapMargin", "scrollSnapType", "scrollSnapPointsX", "scrollSnapPointsY", "scrollSnapDestination", "scrollSnapCoordinate", "touchAction", "hyphens", "flowInto", "flowFrom", "breakBefore", "breakAfter", "breakInside", "regionFragment", "gridTemplateColumns", "gridTemplateRows", "gridTemplateAreas", "gridTemplate", "gridAutoColumns", "gridAutoRows", "gridAutoFlow", "grid", "gridRowStart", "gridColumnStart", "gridRowEnd", "gridRow", "gridColumn", "gridColumnEnd", "gridColumnGap", "gridRowGap", "gridArea", "gridGap", "textSizeAdjust"]) };
module.exports = exports["default"];
},{}]},{},[1])(1)
});