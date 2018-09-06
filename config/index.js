/*globals module */
/*
    Module to define all the Configurations required
*/
let Config = function () {
	return {
		//appMode:	"production",
		appMode:	"development",
		appPort:	"80",
		pathStatic: "frontend/dist", 
	};
};

module.exports = new Config();