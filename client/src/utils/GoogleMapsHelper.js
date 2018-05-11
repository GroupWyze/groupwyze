export function getCity(response) {
  let locationData = response.data.results[0];
  return findDataInGeoCodeResponseByType(locationData, "locality");
};

export function getZip(response) {
  let locationData = response.data.results[0];
  return findDataInGeoCodeResponseByType(locationData, "postal_code");
};

function findDataInGeoCodeResponseByType(locationData, type) {
  for (let i = 0; i < locationData.address_components.length; i++) {
    if (locationData.address_components[i].types.includes(type)) {
      return locationData.address_components[i].long_name;
    }
  }
}