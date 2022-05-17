class HashTable {
  constructor (size) {
    this.data = new Array(size); //Cada elemento del array sera un Bucket para nuestros datos.
  }

  //HASH FUNCTION
  hashMethod(key) {
    let hash = 0; // Variable que almacenara la posición del hash indice.
    for ( let i = 0; i < key.length; i++ ) { // Ciclo for que iterara la cantidad de caracteres de la key.
      /*Se sobreescribe la variable hash con el resultado de: lo que contenga hash + el código UTF-16 del carácter actual * el numero de indice de la iteración y este resultado obteniendo el modulo del tamaño del array.*/
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    /*Al finalizar la iteración y la asignación final de la variable hash se retorna el numero de indice que se guardara la información.*/
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    //console.log("Indice generado (HASH): ", address);
    if( !this.data[address] ) {
      this.data[address] = [];
    } 
    this.data[address].push([key, value])
    //console.log(this.data);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];

    if(currentBucket) {
      for( let i = 0; i < currentBucket.length; i++ ) {
        if( currentBucket[i][0] === key ) {
          return currentBucket[i][1]; // value
        };
      };
    };

    return undefined;
  }
};

const myHashTable = new HashTable(50);

//function test (string) {
  //let hash = 0;
  //arrayCount = 50;
  //console.log(`Array Count: ${arrayCount}`);
  //console.log(`String to hash: "${string}"`);
  //for ( let i = 0; i < string.length; i++ ) {
    //hash = (hash + string.charCodeAt(i) * i) % 50;
    //console.log('-------------------------------');
    //console.log("Charcode", string[i], "=",  string.charCodeAt(i));
    //console.log(`Charcode ${string[i]} multyplied by the index ${i}: ${string.charCodeAt(i)} * ${i} = ${string.charCodeAt(i) * i}`);
    //console.log(`Charcode hash module array count: ${string[i]}: (${string.charCodeAt(i) * i}) % ${arrayCount} = ${(string.charCodeAt(i) * i) % arrayCount}`)
    //console.log(`(${hash} + ${string.charCodeAt(i)} * ${i}) % ${arrayCount} = ${hash}`);
  //}
  //console.log('-------------------------------');
  //console.log(hash);
//};

//test("aloh");
