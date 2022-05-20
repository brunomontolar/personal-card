const response = await fetch("./data/info.json");
const info = await response.json();

document.getElementById("name").innerHTML = info.name;
document.getElementById("position").innerHTML = info.position;
document.getElementById("phone").innerHTML = info.phone;
document.getElementById("email").innerHTML = info.email;
document.getElementById("whatsapp-link").href = info.whatsapp;
document.getElementById("mailto").href = info.mailto;
document.getElementById("company-website").href = info.website;