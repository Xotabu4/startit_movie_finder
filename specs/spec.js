let HomePage = require('../pageObjects/HomePage.js').HomePage

describe('Suite name', ()=> {
    let homePage;

    beforeEach(()=>{
        homePage = new HomePage().open()
    })

    it('Test case name', ()=> {
        let searchRequest = 'The Lord'

        homePage.searchForMovie(searchRequest)
        
        // let waitForRes = ()=> {
        //     browser.sleep(10000)
        // }
        // homePage.searchForMovie('#$%^&*()(*&^%$#$%^&*', waitForRes)

        // homePage.searchForMovie(searchRequest).then(undefined, ()=> {
        //     // our action when wait was failed
        // })
        
        let title = homePage.getSearchResults().first().getText()

        expect(title).toContain(searchRequest, 'First search result should contain search string')
    })

})