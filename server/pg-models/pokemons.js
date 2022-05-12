const { EntitySchema } = require('typeorm');

module.exports = EntitySchema({
  name: 'Pokemons',
  column: {
    id: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    name: {
      type: String,
      unique: true,
    },
    description: {
      type: String,
      unique: true,
    },
    height: {
      type: String,
      unique: true,
    },
    weight: {
      type: String,
      unique: true,
    },
    category: {
      type: String,
      unique: true,
    },
    ability: {
      type: String,
      unique: true,
    },
    type: {
      type: String,
    },
    weakness: {
      type: String,
    },
    createdAt: {
      type: Date,
      createDate: true,
    },
    updatedAt: {
      type: Date,
      updateDate: true,
    },
  },
});
