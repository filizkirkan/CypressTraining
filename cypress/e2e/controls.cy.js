require('cypress-xpath');
import methods from "../pages/methods"
import productDetail from "../fixtures/pageDetail";
import dashboardLocators from "../fixtures/dashboardlocators";
import controlPages from "../fixtures/controlPages";
import pageDetail from "../fixtures/pageDetail";
describe('Includes search results test scenarios', () => {
  
    it('Search product white color type and 6X8 size', () => {
        methods.visit('https://demo.vercel.store/')
        //methods.fillInput(dashboardLocators.searchProductInputText,'Acme Drawstring Bag{enter}')
        methods.clickButton(controlPages.pageDetail)
        methods.clickButton(pageDetail.homePageControl)
        methods.wait(1000)
        /*methods.clickButton(productDetail.colorWhiteType,1000)
        methods.clickButton(productDetail.productSizeType,1000)
        methods.clickButton(productDetail.addToCartButton)
        methods.shouldHaveText(productDetail.addedProductText,'Acme Drawstring Bag')
        methods.shouldHaveText(productDetail.addedProductTypes,'White / 6 x 8 inch')*/
      })
      /*it('Search product black color type and 7X9 size', () => {
        methods.visit('https://demo.vercel.store/')
        methods.fillInput(dashboardLocators.searchProductInputText,'Acme Drawstring Bag{enter}')
        methods.clickButton(searchResult.searchResultProduct)
        methods.wait(1000)
        methods.clickButton(productDetail.colorBlackType,1000)
        methods.clickButton(productDetail.productSecondSizeType,1000)
        methods.clickButton(productDetail.addToCartButton)
        methods.shouldHaveText(productDetail.addedProductText,'Acme Drawstring Bag')
        methods.shouldHaveText(productDetail.addedSecondProductTypes,'Black / 7 x 9 inch')
      })*/
})