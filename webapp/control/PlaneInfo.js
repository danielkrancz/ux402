sap.ui.define(
    [
        "sap/ui/core/Control",
        "student00/com/sap/training/ux402/listdetail/ux402listdetail/control/PlaneInfoRenderer"
    ],
    function(Control, PlaneInfoRenderer) {
      "use strict";
  
      return Control.extend("student00.com.sap.training.ux402.listdetail.ux402listdetail.control.PlaneInfo", {
        metadata: {
            properties: {
                "seatsMax": {
                    type: "string"
                },
                "seatsOcc": {
                    type: "string"
                }
            }
        },

        renderer: PlaneInfoRenderer

      });
    }
  );
  