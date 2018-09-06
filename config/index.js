/*globals module */
/*
    Module to define all the Configurations required
*/
let Config = function () {
	return {
		//appMode:	"production",
		appMode:	"development",
		appPort:	"8080",
		pathStatic: "frontend/dist", 
	};
};

module.exports = new Config();