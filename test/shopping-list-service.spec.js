const ShoppingListService = require('../src/shopping-list-service')
const knex = require('knex')

describe(`Shopping List service object`, function() {
  let db
  let testItems = [
    {
      product_id: 1,
      name: 'First item post!',
      price: '1.99',
      date_added: new Date('2029-01-22T16:28:32.615Z'),
      category: 'Main'
    },
    {
      product_id: 2,
      name: 'Second item post!',
      price: '2.99',
      date_added: new Date('2100-05-22T16:28:32.615Z'),
      category: 'Snack'
    },
    {
      product_id: 3,
      name: 'Third item post!',
      price: '3.99',
      date_added: new Date('1919-12-22T16:28:32.615Z'),
      category: 'Lunch'
    },
  ]

  before(() => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    })
  })

  before(() => db('shopping_list').truncate())

  afterEach(() => db('shopping_list').truncate())

  after(() => db.destroy())

  // describe(`getAllItems()`, () => {
  context(`Given 'shopping_list' has data`, () => {
    beforeEach(() => {
      return db
        .into('shopping_list')
        .insert(testItems)
    })

    // it(`resolves all items from 'shopping_list' table`, () => {
    it(`getAllItems() resolves all items from 'shopping_list' table`, () => {
      // test that ShoppingListService.getAllItems gets data from table
      const expectedItems = testItems.map(item => ({
        ...item,
        checked: false,
      }));
      return ShoppingListService.getAllItems(db)
       .then(actual => {
         expect(actual).to.eql(expectedItems)
       })
    })

    it(`getById() resolves an item by id from 'shopping_list' table`, () => {
      const thirdId = 3
      const thirdTestItem = testItems[thirdId - 1]
      return ShoppingListService.getById(db, thirdId)
        .then(actual => {
          expect(actual).to.eql({
            product_id: thirdId,
            name: thirdTestItem.name,
            price: thirdTestItem.price,
            date_added: thirdTestItem.date_added,
            category: thirdTestItem.category,
            checked: false,
          })
        })
    })

    it(`getById() resolves an item by id from 'shopping_list' table`, () => {
      const thirdId = 3
      const thirdTestItem = testItems[thirdId - 1]
      return ShoppingListService.getById(db, thirdId)
        .then(actual => {
          expect(actual).to.eql({
            product_id: thirdId,
            name: thirdTestItem.name,
            price: thirdTestItem.price,
            date_added: thirdTestItem.date_added,
            category: thirdTestItem.category,
            checked: false,
          })
        })
    })

    it(`updateItem() updates an item from the 'shopping_list' table`, () => {
      const idOfItemToUpdate = 3
      const newItemData = {
        name: 'updated name',
        price: '9.99',
        date_added: new Date(),
        checked: true,
      }
      const originalItem = testItems[idOfItemToUpdate - 1];
      return ShoppingListService.updateItem(db, idOfItemToUpdate, newItemData)
        .then(() => ShoppingListService.getById(db, idOfItemToUpdate))
        .then(item => {
          expect(item).to.eql({
            product_id: idOfItemToUpdate,
            ...originalItem,
            ...newItemData,
          })
        })
    })
  })

  context(`Given 'shopping_list' has no data`, () => {
    it(`getAllItems() resolves an empty array`, () => {
      return ShoppingListService.getAllItems(db)
        .then(actual => {
          expect(actual).to.eql([])
        })
    })

    it(`insertItem() inserts a new item and resolves the new item with an 'id'`, () => {
      const newItem = {
        name: 'Test new name',
        price: '5.99',
        date_added: new Date('2020-01-01T00:00:00.000Z'),
        checked: true,
        category: 'Snack',
      }
      return ShoppingListService.insertItem(db, newItem)
        .then(actual => {
          expect(actual).to.eql({
            product_id: 1,
            name: newItem.name,
            price: newItem.price,
            date_added: newItem.date_added,
            checked: newItem.checked,
            category: newItem.category,
          })
        })      
    })
  })
})
