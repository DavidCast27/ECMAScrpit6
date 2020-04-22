(() => {

 let map = new Map();
 map.set('nombre','David');
 map.set('edad',26);

 console.log(map.has('edad'));
 console.log(map);
 console.log(map.size);
 console.log(map.values);
 console.log(map.get('edad'));

})();

