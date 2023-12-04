const btn = document.querySelector("button");
const statu = document.querySelector(".status");

btn.addEventListener("click", () => {
  const success = (position) => {
    console.log(position);
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    const geolocation = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}longitude=${longitude}$localityLanguage=en`;
    fetch(geolocation)
      .then((res) => res.json())
      .then((data) => {
        statu.innerHTML = `
        country:${data.countryName}
        Subdivision:${data.principalSubdivision}
        city:${data.city}
         locality:${data.locality}`;
      });
  };
  const error = () => {
    statu.innerHTML = `Unable to retrieve your location`;
  };
  navigator.geolocation.getCurrentPosition(success, error);
  console.log("hey");
});
