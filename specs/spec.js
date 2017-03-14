let HomePage = require('../pageObjects/HomePage.js').HomePage

describe('Suite name', ()=> {
    let homePage;

    beforeEach(()=>{
        homePage = new HomePage().open()
    })

    it('Test case name', ()=> {
        let searchRequest = 'The Lord'
        homePage.searchForMovie(searchRequest)
        let title = homePage.getSearchResults().first().getText()
        expect(title).toContain(searchRequest, 'First search result should contain search string')
    })

})