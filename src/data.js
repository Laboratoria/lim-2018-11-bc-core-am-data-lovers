
// en esta variable se almacenan los datos
let data = null;


function initData() {

data = convertObjectToArray(WORLDBANK);

 // console.log(data);

}


function getCountryByCode(code) {


  return data.find(c => c[0] == code);

}

function getAllCountries() {

  return data.map(c => ({ 'code': c[0], 'name': c[1].indicators[0].countryName }));
}


function getNameByCode(code) {
  const countries = getAllCountries();
  return countries.find(c => c.code == code).name;
}
