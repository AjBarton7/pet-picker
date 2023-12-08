const knex = require('./db/models/knex');

const generateId = ((id = 0) => () => id += 1)()

class Pet {
    static #all = [];

    constructor(name){
        this.id = generateId(),
        this.name = name

        Pet.#all.push(this)
    }

    static list() {
        return Pet.#all
    }

    static find(petId) {
        return pet.#all.find(({ id }) => id === petId);
      }

    static remove(petId) {
        const petIdx = Pet.#all.findIndex(({ id }) => id === petId);
        if (petIdx < 0) return null;
    
        pet.#all.splice(petIdx, 1);
        return true;
      }

}

module.exports = Pet;