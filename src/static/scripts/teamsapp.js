(function () {
  "use strict";

  // Call the initialize API first
  microsoftTeams.app.initialize().then(function () {
    microsoftTeams.app.getContext().then(function (context) {
      microsoftTeams.settings.setValidityState(true);
      microsoftTeams.settings.registerOnSaveHandler(function (data) {
        console.log("Saved", data);
      });
      if (context?.app?.host?.name) {
        updateHubState(context.app.host.name);
      }
    });
  });

  function updateHubState(hubName) {
    if (hubName) {
      document.getElementById("hubState").innerHTML = "in " + hubName;
    }
  }
})();
