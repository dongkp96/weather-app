/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("/* Visual crossing API key =  NMNT3RLNJR5DDLMQP9S378A3B  */\n\n/*\nTokyo Japan \n- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Tokyo%2C%20Japan?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json\n\nRichmond, VA \n- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Richmond%20VA?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json\n- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Richmond%2CVirginia?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json\n\nBrookline MA\n- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Brookline%20Massachusetts?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json\n\nMassachusetts\n- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Massachusetts?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json\n\nMaryland\n- https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Maryland?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json\n*/\n\n/*\nGoal 1:\nCreate code that will take an input such as from a input bar with a button and be able to receive the data from the weather API \nvia the fetch() function and check out what returns from this after being parsed to JSON such as if its an array etc. \n-data.resolved address = returns string with the address of the location (can be used as one of the text items in the weather app)\n-data.days returns an array containing 15 objects representing the next 15 days compared to when it was logged this array contains a day that includes information such as:\na. conditions\nb.temp = current temperature, tempmax/tempmin = highest and lowest temp\nc. preciprob = for chance of precipitation\n\nGoal 2:\nFIgure out if you can create a forecast object containing the methods commented out in the code or if you need to create different async functions to call each portion of the data\n\n*/\n\nasync function getData(){\n    const response = await fetch(\"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/Brookline%20Massachusetts?unitGroup=us&key=NMNT3RLNJR5DDLMQP9S378A3B&contentType=json\", {mode:\"cors\"});\n    const data = await response.json();\n    console.log(response);\n    console.log(data);\n    console.log(data.resolvedAddress);\n    console.log(data.days[0]);\n    console.log(data.days[0].temp)\n    /*return{\n        address: data.resolvedAddress,\n        forecastCollection: data.days,\n        dayTemp: function(dayNumber){\n            return this.forecastCollection[dayNumber].temp;\n        },\n        dayHigh: function(dayNumber){\n            return this.forecastCollection[dayNumber].tempmax;\n        },\n        dayLow: function(dayNumber){\n            return this.forecastCollection[dayNumber].tempmin;\n        },\n        dayCondition: function(dayNumber){\n            return this.forecastCollection[dayNumber].conditions;\n        },\n        dayPrecipProb: function(dayNumber){\n            return this.forecastCollection[dayNumber].precipprob;\n        },\n        dayPrecipType: function(dayNumber){\n            return this.forecastCollection[dayNumber].preciptype;\n        },\n\n    }*/\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0EsK01BQStNLFlBQVk7QUFDM047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTOztBQUVULEtBQUs7QUFDTCIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbIi8qIFZpc3VhbCBjcm9zc2luZyBBUEkga2V5ID0gIE5NTlQzUkxOSlI1RERMTVFQOVMzNzhBM0IgICovXG5cbi8qXG5Ub2t5byBKYXBhbiBcbi0gaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvVG9reW8lMkMlMjBKYXBhbj91bml0R3JvdXA9dXMma2V5PU5NTlQzUkxOSlI1RERMTVFQOVMzNzhBM0ImY29udGVudFR5cGU9anNvblxuXG5SaWNobW9uZCwgVkEgXG4tIGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL1JpY2htb25kJTIwVkE/dW5pdEdyb3VwPXVzJmtleT1OTU5UM1JMTkpSNURETE1RUDlTMzc4QTNCJmNvbnRlbnRUeXBlPWpzb25cbi0gaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvUmljaG1vbmQlMkNWaXJnaW5pYT91bml0R3JvdXA9dXMma2V5PU5NTlQzUkxOSlI1RERMTVFQOVMzNzhBM0ImY29udGVudFR5cGU9anNvblxuXG5Ccm9va2xpbmUgTUFcbi0gaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvQnJvb2tsaW5lJTIwTWFzc2FjaHVzZXR0cz91bml0R3JvdXA9dXMma2V5PU5NTlQzUkxOSlI1RERMTVFQOVMzNzhBM0ImY29udGVudFR5cGU9anNvblxuXG5NYXNzYWNodXNldHRzXG4tIGh0dHBzOi8vd2VhdGhlci52aXN1YWxjcm9zc2luZy5jb20vVmlzdWFsQ3Jvc3NpbmdXZWJTZXJ2aWNlcy9yZXN0L3NlcnZpY2VzL3RpbWVsaW5lL01hc3NhY2h1c2V0dHM/dW5pdEdyb3VwPXVzJmtleT1OTU5UM1JMTkpSNURETE1RUDlTMzc4QTNCJmNvbnRlbnRUeXBlPWpzb25cblxuTWFyeWxhbmRcbi0gaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvTWFyeWxhbmQ/dW5pdEdyb3VwPXVzJmtleT1OTU5UM1JMTkpSNURETE1RUDlTMzc4QTNCJmNvbnRlbnRUeXBlPWpzb25cbiovXG5cbi8qXG5Hb2FsIDE6XG5DcmVhdGUgY29kZSB0aGF0IHdpbGwgdGFrZSBhbiBpbnB1dCBzdWNoIGFzIGZyb20gYSBpbnB1dCBiYXIgd2l0aCBhIGJ1dHRvbiBhbmQgYmUgYWJsZSB0byByZWNlaXZlIHRoZSBkYXRhIGZyb20gdGhlIHdlYXRoZXIgQVBJIFxudmlhIHRoZSBmZXRjaCgpIGZ1bmN0aW9uIGFuZCBjaGVjayBvdXQgd2hhdCByZXR1cm5zIGZyb20gdGhpcyBhZnRlciBiZWluZyBwYXJzZWQgdG8gSlNPTiBzdWNoIGFzIGlmIGl0cyBhbiBhcnJheSBldGMuIFxuLWRhdGEucmVzb2x2ZWQgYWRkcmVzcyA9IHJldHVybnMgc3RyaW5nIHdpdGggdGhlIGFkZHJlc3Mgb2YgdGhlIGxvY2F0aW9uIChjYW4gYmUgdXNlZCBhcyBvbmUgb2YgdGhlIHRleHQgaXRlbXMgaW4gdGhlIHdlYXRoZXIgYXBwKVxuLWRhdGEuZGF5cyByZXR1cm5zIGFuIGFycmF5IGNvbnRhaW5pbmcgMTUgb2JqZWN0cyByZXByZXNlbnRpbmcgdGhlIG5leHQgMTUgZGF5cyBjb21wYXJlZCB0byB3aGVuIGl0IHdhcyBsb2dnZWQgdGhpcyBhcnJheSBjb250YWlucyBhIGRheSB0aGF0IGluY2x1ZGVzIGluZm9ybWF0aW9uIHN1Y2ggYXM6XG5hLiBjb25kaXRpb25zXG5iLnRlbXAgPSBjdXJyZW50IHRlbXBlcmF0dXJlLCB0ZW1wbWF4L3RlbXBtaW4gPSBoaWdoZXN0IGFuZCBsb3dlc3QgdGVtcFxuYy4gcHJlY2lwcm9iID0gZm9yIGNoYW5jZSBvZiBwcmVjaXBpdGF0aW9uXG5cbkdvYWwgMjpcbkZJZ3VyZSBvdXQgaWYgeW91IGNhbiBjcmVhdGUgYSBmb3JlY2FzdCBvYmplY3QgY29udGFpbmluZyB0aGUgbWV0aG9kcyBjb21tZW50ZWQgb3V0IGluIHRoZSBjb2RlIG9yIGlmIHlvdSBuZWVkIHRvIGNyZWF0ZSBkaWZmZXJlbnQgYXN5bmMgZnVuY3Rpb25zIHRvIGNhbGwgZWFjaCBwb3J0aW9uIG9mIHRoZSBkYXRhXG5cbiovXG5cbmFzeW5jIGZ1bmN0aW9uIGdldERhdGEoKXtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly93ZWF0aGVyLnZpc3VhbGNyb3NzaW5nLmNvbS9WaXN1YWxDcm9zc2luZ1dlYlNlcnZpY2VzL3Jlc3Qvc2VydmljZXMvdGltZWxpbmUvQnJvb2tsaW5lJTIwTWFzc2FjaHVzZXR0cz91bml0R3JvdXA9dXMma2V5PU5NTlQzUkxOSlI1RERMTVFQOVMzNzhBM0ImY29udGVudFR5cGU9anNvblwiLCB7bW9kZTpcImNvcnNcIn0pO1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEpO1xuICAgIGNvbnNvbGUubG9nKGRhdGEucmVzb2x2ZWRBZGRyZXNzKTtcbiAgICBjb25zb2xlLmxvZyhkYXRhLmRheXNbMF0pO1xuICAgIGNvbnNvbGUubG9nKGRhdGEuZGF5c1swXS50ZW1wKVxuICAgIC8qcmV0dXJue1xuICAgICAgICBhZGRyZXNzOiBkYXRhLnJlc29sdmVkQWRkcmVzcyxcbiAgICAgICAgZm9yZWNhc3RDb2xsZWN0aW9uOiBkYXRhLmRheXMsXG4gICAgICAgIGRheVRlbXA6IGZ1bmN0aW9uKGRheU51bWJlcil7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JlY2FzdENvbGxlY3Rpb25bZGF5TnVtYmVyXS50ZW1wO1xuICAgICAgICB9LFxuICAgICAgICBkYXlIaWdoOiBmdW5jdGlvbihkYXlOdW1iZXIpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9yZWNhc3RDb2xsZWN0aW9uW2RheU51bWJlcl0udGVtcG1heDtcbiAgICAgICAgfSxcbiAgICAgICAgZGF5TG93OiBmdW5jdGlvbihkYXlOdW1iZXIpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9yZWNhc3RDb2xsZWN0aW9uW2RheU51bWJlcl0udGVtcG1pbjtcbiAgICAgICAgfSxcbiAgICAgICAgZGF5Q29uZGl0aW9uOiBmdW5jdGlvbihkYXlOdW1iZXIpe1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZm9yZWNhc3RDb2xsZWN0aW9uW2RheU51bWJlcl0uY29uZGl0aW9ucztcbiAgICAgICAgfSxcbiAgICAgICAgZGF5UHJlY2lwUHJvYjogZnVuY3Rpb24oZGF5TnVtYmVyKXtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmZvcmVjYXN0Q29sbGVjdGlvbltkYXlOdW1iZXJdLnByZWNpcHByb2I7XG4gICAgICAgIH0sXG4gICAgICAgIGRheVByZWNpcFR5cGU6IGZ1bmN0aW9uKGRheU51bWJlcil7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5mb3JlY2FzdENvbGxlY3Rpb25bZGF5TnVtYmVyXS5wcmVjaXB0eXBlO1xuICAgICAgICB9LFxuXG4gICAgfSovXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;