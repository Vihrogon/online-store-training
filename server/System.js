const { Schema, model, Mongoose, default: mongoose } = require('mongoose');

const Category = model(
  'Category',
  new Schema({
    id: String,
    categories: [{
      name: String,
      image: String,
      page_description: String
    }],
    name: String,
    page_description: String
  })
);

const Product = model(
  'Product',
  new Schema({
    id: String,
    primary_category_id: String,
    name: String,
    short_description: String,
    currency: String,
    price: Number,
    long_description: String,
    c_isNewtest: Boolean,
    image_groups: [Object],
    variation_attributes: [Object]
  })
);

/**
 * TODO
 * @param {String} filePath
 * @param {Object} pdict
 * @param {Function} callback
 * @returns
 */
function viewEngine(filePath, pdict, callback) {
  const { renderStylesToString } = require('@emotion/server')
  const pageDecorator = require('./views/pageDecorator')

  const module = require(filePath)

  const decoratedPage = pageDecorator(module, pdict)

  const styledPage = renderStylesToString(decoratedPage)

  return callback(null, '<!DOCTYPE html>' + styledPage)
}

/**
 * TODO
 */
const html = require('htm').bind(require('vhtml'))

/**
 * TODO
 */
const { css } = require('@emotion/css')

/**
 * TODO
 * @param {String} id 
 * @returns {mongoose.Model<Product>}
 */
async function getProduct(id) {
  let result = null

  try {
    if (typeof id === 'string' && id.length) {
      result = await Product.findOne({ id })
    }
  } catch (error) {
    console.error(`ProductMgr.getProduct(${id}) =>\n Error:`, error)
  }

  return result
}

/**
 * TODO
 * @param {mongoose.QueryOptions<Product>} options 
 * @returns {[mongoose.Model<Product>]}
 */
async function getAllProducts(options = {}) {
  let result = null

  try {
    if (typeof options === 'object' && !!options) {
      result = await Product.find(options)
    }
  } catch (error) {
    console.error(`ProductMgr.getAllProducts(${options}) =>\n Error:`, error)
  }

  return result
}
/**
 * TODO
 * @param {String} id 
 * @returns 
 */
async function getCategory(id) {
  let result = null

  try {
    if (typeof id === 'string' && id.length) {
      result = await Category.findOne({ id })
    }
  } catch (error) {
    console.error(`CatalogMgr.getCategory(${id}) => Error:\n`, error)
  }

  return result
}

/**
 * TODO
 * @returns {[mongoose.Model<Category>]}
 */
async function getAllCategories() {
  let result = null

  try {
    result = await Category.find()
  } catch (error) {
    console.error(`CatalogMgr.getAlCategories() =>\n Error:`, error)
  }

  return result
}

module.exports = {
  viewEngine,
  html,
  css,
  CatalogMgr: {
    getCategory,
    getAllCategories
  },
  ProductMgr: {
    getProduct,
    getAllProducts
  }
}
