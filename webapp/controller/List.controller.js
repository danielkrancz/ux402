sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
function (Controller) {
    "use strict";

    return Controller.extend("student00.com.sap.training.ux402.listdetail.ux402listdetail.controller.List", {
        onInit: function () {

        },

        onListItemPressed: function(oEvent) {
            let sPath = oEvent.getSource().getBindingContext().getPath(),
                oRouter = this.getOwnerComponent().getRouter(),
                sCarrId = oEvent.getSource().getBindingContext().getObject().Carrid;
            debugger;

            oRouter.navTo("RouteDetail", {
                carrid: sCarrId
            });
        }
    });
});
