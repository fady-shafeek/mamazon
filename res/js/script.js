var userName;
var userMail;
var userPass;
function signUp() {
  userName = document.getElementById("upName").value;
  userMail = document.getElementById("upMail").value;
  userPass = document.getElementById("upPassword").value;
  localStorage.setItem("fullname", userName);
  localStorage.setItem("upMail", userMail);
  localStorage.setItem("upPass", userPass);
}
document.getElementById("myuser").innerHTML =
  "Welcome: " + localStorage.getItem("fullname");

var inuserMail;
var inuserPass;
function chkData() {
  inuserMail = document.getElementById("inMail").value;
  inuserPass = document.getElementById("inPass").value;
  if (
    inuserMail == localStorage.getItem("upMail") &&
    inuserPass == localStorage.getItem("upPass")
  ) {
    document.getElementById("loginbtn").disabled = false;
  } else {
    document.getElementById("vlddata").innerHTML =
      "Enter a valid data to continue";
  }
}

var data;
var val;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function () {
  if (this.status == 200 && this.readyState == 4) {
    data = JSON.parse(this.responseText);
    for (var item in data)
      document.getElementById("UserName").innerHTML +=
        "<div class='grid-item'><img src='" +
        data[item].image +
        "'><p>'" +
        data[item]["title"] +
        "'</p><p>'" +
        data[item]["price"] +
        "' EGP</p><div class='field btn'><div class='btn-layer'></div><input onclick='addCart()' type='submit' value='ADD TO CART' /></div></div>";

    var val = document.images.length;
  }
};
function addCart() {
  // console.log(data[item]);
  alert("ADDED TO CART");
}
xhttp.open("GET", "https://fakestoreapi.com/products/", true);
xhttp.send();
function add(item) {
  this.item = item;
  alert(item);
}

function hideAd() {
  var x = document.getElementById("ads");
  x.style.display = "none";
}
