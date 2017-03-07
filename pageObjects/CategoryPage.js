let AbstractPage = require('./AbstractPage.js').AbstractPage

class CategoryPage extends AbstractPage {
    constructor(categoryTitle, url) {
        this.URL = url
        this.categoryTitle = categoryTitle
    }

    getMov

}

let categoriesMap = {
    'adventure': {title: 'Adventure', 
                  url: 'genres/12/Adventure'}

}

function openCategoryPageByTitle(category) {
    return getCategoryPageByTitle(category).open()
}

function getCategoryPageByTitle(category) {
    let catObj = categoriesMap[category.toLowerCase()]
    return new CategoryPage(catObj.title, catObj.url)
}

let adventurePage = openCategoryPageByTitle('adventure')