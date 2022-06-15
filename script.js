let user = {
   name: 'Shaxzod ',
   sureName: 'Burxonov',
   age: 15,


   flyOnATrip: {
      fly: 'Dubay ',
      fly: 'America',
      fly: 'Korea',
   },
};
let PassportData = {
   serries: 'AC',
   number: '411140407'
}

let tupes = {
   string: [],
   number: [],
   boolean: [],
   Object: [],
};

let a = Object.assign(user , PassportData , tupes)
console.log(a);

let b = Object.keys(a)
console.log(b);

let c = Object.values(a)
console.log(c);

let d = b.concat(c)
let bc = b.concat(c);
console.log(bc);

let filtred =bc.filter(e => typeof e === 'string')
console.log(filtred);


let fil =bc.filter(e => typeof e === 'number')
console.log(fil);

let filed =bc.filter(y => typeof y === 'object')
console.log(filed);
// Соеденить два объекта в один
// получить все ключи в один массив и все значения тоже в один отдельный массив
// соеденить два массива в один
// отфильтровать массив по типам данных элементов  