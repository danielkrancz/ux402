sap.ui.define(
    [
        "sap/ui/core/Renderer"
    ],
    function(Renderer) {
      "use strict";
  
      var PlaneInfoRender = Renderer.extend("student00.com.sap.training.ux402.listdetail.ux402listdetail.control.PlaneInfoRenderer");

      PlaneInfoRender.apiVersion = 2;

      PlaneInfoRender.render = function(oRm, oControl) {
        oRm.openStart("div", oControl);
        oRm.openEnd();

            oRm.openStart("table");
            oRm.attr("align", "center");
            oRm.openEnd();

                oRm.openStart("tr");
                oRm.openEnd();

                    oRm.openStart("td");
                    oRm.openEnd();

                        oRm.icon("sap-icon://account");
                        oRm.text(" " + oControl.getSeatsMax() );

                    oRm.close("td");

                oRm.close("tr");

                oRm.openStart("tr");
                oRm.openEnd();

                    oRm.openStart("td");
                    oRm.openEnd();

                        oRm.icon("sap-icon://collaborate");
                        oRm.text(" " + oControl.getSeatsOcc() );

                    oRm.close("td");

                oRm.close("tr");

            oRm.close("table");
        oRm.close("div", oControl);
      };

      return PlaneInfoRender;
    }
  );
  