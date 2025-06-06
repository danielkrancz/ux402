/*global QUnit*/

sap.ui.define([
	"student00/com/sap/training/ux402/listdetail/ux402listdetail/controller/List.controller"
], function (Controller) {
	"use strict";

	QUnit.module("List Controller");

	QUnit.test("I should test the List controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
