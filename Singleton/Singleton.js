// Singleton.js
class Singleton {
    constructor() {
      if (!Singleton.instance) {
        this._data = [];
        Singleton.instance = this;
      }
  
      return Singleton.instance;
    }
  
    addData(item) {
        //agrega una variable al singleton
      this._data.push(item);
    }
  
    getData() {
        // retorna todos los datos dentro de la instancia 
      return this._data;
    }
    add(key, obj) {
        // agrega un objeto al arreglo
      return this._data[key] = obj;
    }
  
    get(key) {
        // obtiene un objeto con la lalve asignada
        

        try {
           return this._data[key]
            
        } catch (error) {
            return null;
        }
     }
    

    // getJson(key) {
    //   const data = (localStorage.getItem(key))
    //  if (JSON.parse(data) !== null) {
    //   return data
    //  } else {
    //   return null;
    //  }
    // }
   
  }
  
  const instance = new Singleton();
  Object.freeze(instance);
  
  module.exports = instance;