window.onload = makeAjaxRequest;

function makeAjaxRequest() {
  if (window.XMLHttpRequest) {
    xhr = new XMLHttpRequest();
  } else {
    if (window.ActiveXObject) {
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  }

  if (xhr) {
    xhr.open("GET", "counties.json", true);
    xhr.send();
    xhr.onreadystatechange = showContents;
  } else {
    document.getElementById("updatemessage").innerHTML =
      "Could not perform stated Request";
  }
}

function showContents() {
  if (xhr.readyState == 4) {
    if (xhr.status == 200) {
      let data = JSON.parse(xhr.responseText);
      let text = "";
      for (let i in data.counties) {
        text += "<tr><td>" + data.counties[i].name + "</td></tr>";
      }
      document.getElementById("countylist").innerHTML = text;
    } else {
      document.getElementById("updatemeassage").innerHTML =
        "An error occured " + xhr.status;
    }
  }
}
