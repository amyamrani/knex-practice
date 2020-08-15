require('dotenv').config()
const knex = require('knex')

const knexInstance = knex({
  client: 'pg',
  connection: process.env.DB_URL,
})

// 1. Get all items that contain text
function searchByItemName(searchTerm) {
  knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('shopping_list')
    .where('name', 'ILIKE', `%${searchTerm}%`)
    .then(result => {
      console.log(result)
    })
}
  
// searchByItemName('ham')

// 2. Get all items paginated
function paginateItems(pageNumber) {
  const itemsPerPage = 6
  const offset = itemsPerPage * (pageNumber - 1)
  knexInstance
    .select('product_id', 'name', 'price', 'category')
    .from('shopping_list')
    .limit(itemsPerPage)
    .offset(offset)
    .then(result => {
      console.log(result)
    })
}

// paginateItems(3)

// 3. Get all items added after date
function itemsAddedAfterDate(daysAgo) {
  knexInstance
    .select('name', 'date_added')
    .from('shopping_list')
    .where(
      'date_added',
      '>',
      knexInstance.raw(`now() - '?? days'::INTERVAL`, daysAgo)
    )
    .then(result => {
      console.log(result)
    })
}

// itemsAddedAfterDate(1) 

// 4. Get the total cost for each category
function totalCostByCategory() {
  knexInstance
    .select('category')
    .sum('price as total')
    .from('shopping_list')
    .groupBy('category')
    .then(result => {
      console.log(result)
    })
}

// totalCostByCategory()