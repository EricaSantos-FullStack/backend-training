const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Pokemon',
  columns: {
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
    category: {
      type: String,
    },
    ability: {
      type: String,
    },
    typeId: {
      type: 'int',
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
  relations: {
    type: {
      target: 'Type',
      type: 'many-to-one',
      joinTable: true,
      joinColumn: true,
    },
  },
});

// TODO: relations
// Fazer primeiro o type apenas 1

// ver se troca o type para int -
// Quero que mostre o tipo na tabela, não apenas o número. Assim permaneço com a string.


