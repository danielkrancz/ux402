sap.ui.define(
    [
        "sap/m/Button"
    ],
    function(Button) {
      "use strict";
  
      return Button.extend("student00.com.sap.training.ux402.listdetail.ux402listdetail.control.HoverButton", {
        metadata: {
            properties: {
                "allowHover": {
                    type: "boolean",
                    defaultValue: false
                },
                "hoverText": {
                    type: "string"
                }
            },
            events: {
                "hover": {}
            }
        },

        onmouseover: function(oEvent) {
            if(this.getAllowHover()){
                this.fireHover();
            }
        },

        renderer: {}

      });
    }
  );
  