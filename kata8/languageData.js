//https://www.codewars.com/kata/577ff15ad648a14b780000e7/train/javascript

function greet(language) {
  let obj = {
    english: 'Welcome',
    czech: 'Vitejte',
    danish: 'Velkomst',
    dutch: 'Welkom',
    estonian: 'Tere tulemast',
    finnish: 'Tervetuloa',
    flemish: 'Welgekomen',
    french: 'Bienvenue',
    german: 'Willkommen',
    irish: 'Failte',
    italian: 'Benvenuto',
    latvian: 'Gaidits',
    lithuanian: 'Laukiamas',
    polish: 'Witamy',
    spanish: 'Bienvenido',
    swedish: 'Valkommen',
    welsh: 'Croeso',
  };

  for (let key in obj) {
    // console.log({ key }, obj[key]);
    if (key == language) {
      return obj[key];
      //console.log(obj[key]);
    }
  }
  return 'Welcome';
}
res = greet('swedish');
console.log(res);
