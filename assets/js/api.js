(function () {
  var config = [];

  var xhr = new XMLHttpRequest();
  var url = "https://dev-matrix-api.qyeah.net/api/website/cropWebsiteConfig";
  var data = JSON.stringify({ uid: "GSagqdtmEa" });

  xhr.open("POST", url, true);
  xhr.setRequestHeader("Content-Type", "application/json");

  xhr.onload = function () {
    if (xhr.status === 200) {
      var response = JSON.parse(xhr.responseText);
      var infoUrl = response.data.websiteConfig.infoUrl;
      var updatedUrl = infoUrl.replace("http://", "https://");

      fetch(updatedUrl)
        .then((response) => response.json())
        .then((data) => {
          var transformedData = {};

          for (var i = 0; i < data.length; i++) {
            var item = data[i];
            transformedData[item.field] = item.value;
          }

          window.config = transformedData;
          // console.log(window.config);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      console.log("Request failed with status: " + xhr.status);
    }
  };

  xhr.onerror = function () {
    console.log("Request failed");
  };

  xhr.send(data);
})();
