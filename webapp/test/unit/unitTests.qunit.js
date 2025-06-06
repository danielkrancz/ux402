/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"student00/com/sap/training/ux402/listdetail/ux402listdetail/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
