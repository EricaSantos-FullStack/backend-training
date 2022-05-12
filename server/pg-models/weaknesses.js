const { EntitySchema } = require('typeorm');

module.exports = new EntitySchema({
  name: 'Weaknesses',
  columns: {
    id: {
      primary: true,
      type: 'int',
      generated: 'increment',
    },
    name: {
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
