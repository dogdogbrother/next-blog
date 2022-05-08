const User = require('./User')
const Catalog = require('./Catalog')
const Tag = require('./Tag')
const Blog = require('./Blog')
const TagRelation = require('./TagRelation')

Blog.belongsTo(Catalog, {
  foreignKey: 'catalogId'
})
Blog.belongsTo(User, {
  foreignKey: 'userId'
})

Tag.belongsTo(User, {
  foreignKey: 'userId'
})


Catalog.belongsTo(User, {
  foreignKey: 'userId'
})




TagRelation.belongsTo(Catalog, {
  foreignKey: 'catalogId'
})
TagRelation.belongsTo(Blog, {
  foreignKey: 'blogId'
})
TagRelation.belongsTo(Tag, {
  foreignKey: 'tagId'
})

module.exports = {
  User,
  Catalog,
  Tag,
  Blog,
  TagRelation
}