(function(f){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=f()}else if(typeof define==="function"&&define.amd){define([],f)}else{var g;if(typeof window!=="undefined"){g=window}else if(typeof global!=="undefined"){g=global}else if(typeof self!=="undefined"){g=self}else{g=this}g=(g.cahoots||(g.cahoots = {}));g=(g.firefox||(g.firefox = {}));g.content = f()}})(function(){var define,module,exports;return (function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict'

var firefoxContentScript = function() {

    var handleFullDetails = function(lookupId, dataCallback) {
        self.port.once('gotFullDetails', function(data){
            dataCallback(data);
        });
        self.port.emit('getFullDetails', lookupId);
    }

    var handleAuthorHints = function(dataCallback) {
        self.port.once("gotAuthorHints", function(authorHints) {
            dataCallback(authorHints);
        })
        self.port.emit("getAuthorHints");
    }

    var CahootsUiFormatter = cahoots.content.CahootsUiFormatter;
    var CahootsRunner = cahoots.content.CahootsRunner;
    
    var uif = new CahootsUiFormatter();
    var cahootsRunner = new CahootsRunner(handleFullDetails,handleAuthorHints,uif);
    cahootsRunner.run();
};

module.exports = firefoxContentScript


},{}]},{},[1])(1)
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9ncnVudC1icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvbWFpbi9qcy9maXJlZm94L2RhdGEvRmlyZWZveENvbnRlbnRTY3JpcHQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsIid1c2Ugc3RyaWN0J1xuXG52YXIgZmlyZWZveENvbnRlbnRTY3JpcHQgPSBmdW5jdGlvbigpIHtcblxuICAgIHZhciBoYW5kbGVGdWxsRGV0YWlscyA9IGZ1bmN0aW9uKGxvb2t1cElkLCBkYXRhQ2FsbGJhY2spIHtcbiAgICAgICAgc2VsZi5wb3J0Lm9uY2UoJ2dvdEZ1bGxEZXRhaWxzJywgZnVuY3Rpb24oZGF0YSl7XG4gICAgICAgICAgICBkYXRhQ2FsbGJhY2soZGF0YSk7XG4gICAgICAgIH0pO1xuICAgICAgICBzZWxmLnBvcnQuZW1pdCgnZ2V0RnVsbERldGFpbHMnLCBsb29rdXBJZCk7XG4gICAgfVxuXG4gICAgdmFyIGhhbmRsZUF1dGhvckhpbnRzID0gZnVuY3Rpb24oZGF0YUNhbGxiYWNrKSB7XG4gICAgICAgIHNlbGYucG9ydC5vbmNlKFwiZ290QXV0aG9ySGludHNcIiwgZnVuY3Rpb24oYXV0aG9ySGludHMpIHtcbiAgICAgICAgICAgIGRhdGFDYWxsYmFjayhhdXRob3JIaW50cyk7XG4gICAgICAgIH0pXG4gICAgICAgIHNlbGYucG9ydC5lbWl0KFwiZ2V0QXV0aG9ySGludHNcIik7XG4gICAgfVxuXG4gICAgdmFyIENhaG9vdHNVaUZvcm1hdHRlciA9IGNhaG9vdHMuY29udGVudC5DYWhvb3RzVWlGb3JtYXR0ZXI7XG4gICAgdmFyIENhaG9vdHNSdW5uZXIgPSBjYWhvb3RzLmNvbnRlbnQuQ2Fob290c1J1bm5lcjtcbiAgICBcbiAgICB2YXIgdWlmID0gbmV3IENhaG9vdHNVaUZvcm1hdHRlcigpO1xuICAgIHZhciBjYWhvb3RzUnVubmVyID0gbmV3IENhaG9vdHNSdW5uZXIoaGFuZGxlRnVsbERldGFpbHMsaGFuZGxlQXV0aG9ySGludHMsdWlmKTtcbiAgICBjYWhvb3RzUnVubmVyLnJ1bigpO1xufTtcblxubW9kdWxlLmV4cG9ydHMgPSBmaXJlZm94Q29udGVudFNjcmlwdFxuXG4iXX0=
