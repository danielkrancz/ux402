sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/m/MessageBox"
],
function (Controller, MessageToast, MessageBox) {
    "use strict";

    return Controller.extend("student00.com.sap.training.ux402.listdetail.ux402listdetail.controller.Detail", {
        onInit: function () {
            this.getOwnerComponent().getRouter().getRoute("RouteDetail").attachPatternMatched(this._onObjectMatched, this);

            //let oHoverButton = new HoverButton();
        },

        _onObjectMatched: function(oEvent){
            let sCarrId = oEvent.getParameters().arguments.carrid;

            //this.getView().bindElement("/UX_C_Carrier_TP('" + sCarrId + "')");
            //this.getView().bindElement(`/UX_C_Carrier_TP('${sCarrId}')`);

            let sPath = this.getView().getModel().createKey("/UX_C_Carrier_TP", {
                Carrid: sCarrId
            });

            this.getView().bindElement({
                path: sPath,
                events: {
                    dataReceived: (oEvent) => {
                        if(!oEvent.data){
                            //this.getOwnerComponent().getRouter().navTo("RouteNotFound", {}, true);
                        }
                    }
                }
            });
        },

        onHover: function(oEvent) {
            let sHoverText = oEvent.getSource().getHoverText();
            let sText = this.getView().getModel("i18n").getResourceBundle().getText("msgSeatsAv", [sHoverText]);

            MessageToast.show(sText);
        },

        onHoverPressed: function(oEvent){

            let oObject = oEvent.getSource().getBindingContext().getObject(),
                sPath = oEvent.getSource().getBindingContext().getPath();

            MessageBox.confirm("Are you sure that you want to book this flight?", {
                actions: [ MessageBox.Action.YES, MessageBox.Action.NO ],
                emphasizedAction: MessageBox.Action.YES,
                onClose: (sAction) => {
                    if(sAction === MessageBox.Action.YES){

                        let oCreateObject = {
                            Carrid: oObject.Carrid,
                            Connid: oObject.Connid,
                            Fldate: oObject.Fldate,
                            Counter: "1",
                            Customid: "00003406",
                            Passname: "John Doe"
                        };

                        let oModel = this.getView().getModel();

                        oModel.create("/UX_C_Booking_TP", oCreateObject, {
                            success: (oData) => {
                                MessageBox.success("Booking created with ID: " + oData.Bookid);
                                //this.getView().getModel().refresh()
                                //this.getView().byId("flightTable").getBinding("items").refresh()
                                //this.getView().getElementBinding().refresh()
                                oModel.read(sPath, {
                                    urlParameters: { "$select": "Seatsmax,Seatsocc" }
                                });
                            },
                            error: (oError) => {
                                //oMessageBox.error(JSON.parse(oError.responseText).inner)
                            }
                        });
                    }
                }
            });
        }
    });
});
