import React from 'react';
import ReactDOM from 'react-dom';
import styled from 'styled-components';
import Carousel from "./Carousel.jsx";
import axios from 'axios';

const AppWrapper = styled.div`
  width: 100%;
  height: 375.53px;
  background-color: #282c34;
`;
const AppStyled = styled.div`
  height: 305.53px;
  color: #a1a7b2;
`;

const DEFAULT_PRODUCT_ID = 21;

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = null;
  }

  fetchProductIds(productId) {
    //TBP - update URL below after publishing
    return axios.get(`http://localhost:3007/OtherPopularGames/${productId}`)
      .then((response) => {
        let data = response.data;
        console.log('Success getting productids: ', data);
        return data;
      })
      .catch((err) => {
        console.log('Error updating views: ', err);
        return [];
      });
  }

  fetchImage(productIds) {
    //confirm shape of productIds data, can the var productIds just be plugged into api url in line below
    //const requestURL = `http://ec2-52-14-126-227.us-east-2.compute.amazonaws.com:3001/api/${requestArray}?type=card`;
    return ["url1", "url2", "url3", "url4"];
  }

  fetchProductTitle(productIds) {
    //const requestURL = http://ec2-54-224-38-115.compute-1.amazonaws.com:5150/title?id=1&id=7...
    return ["title1", "title2", "title3", "title4"];
  }

  fetchProductPlatform(productIds) {
   //TBP
    return [
      { os: ["urlLinux", "urlWindows"] },
      { os: ["urlMac", "urlLinux"] },
      { os: ["urlLinux"] },
      { os: ["urlWindows"] }
    ];
  }

  fetchProductPriceAndPromo(productIds) {
    //const requestURL = `ec2-3-128-28-100.us-east-2.compute.amazonaws.com:3006/PriceAndPromotion/${productId}
    //NOTE PriceAndPromo needs to be able to process multiple productIds too
    return [
      { price: "price1", discount: "discount1" },
      { price: "price2", discount: "discount2" },
      { price: "price3", discount: "discount3" },
      { price: "price4", discount: "discount4" }
    ]
  }

  fetchProducts(productIds) {
    console.log('fetchproducts received: ', productIds);
    // let gameName = fetchProductDescription(productId);
    let products = []

    productIds.forEach(productId => products.push({
      gameName: `game${productId}`,
      image: `image${productId}`,
      platform: `plat${productId}`,
      discount: `disc${productId}`,
      price: `price${productId}`
    }));

    return products;
  }

  getProductId(path) {
    console.log('this.getProductId call success path=', path);
    if (path !== null) {
      let pathArray = path.split('/');

      if (pathArray.count > 0) {
        let productId = Number(pathArray[pathArray.length - 1]);
        if (productId !== NaN) {
          console.log('success pulling and parsing id: ', productId);
          return (productId);
        }
      }
    }
    return DEFAULT_PRODUCT_ID;
  }

  getProductIdFromUrl() {
    console.log('get id from URL called successfully. ', window.location.pathname);
    return this.getProductId(window.location.pathname);
  }

  componentDidMount() {

    let productId = this.getProductIdFromUrl();

    this.fetchProductIds(productId).then((productIds) => {
      this.setState({ data: this.fetchProducts(productIds) });
    });
  }

  render() {
    if (!this.state)
      return (null);

    return (
      <AppWrapper>
        <AppStyled>
          <Carousel values={this.state.data} />
        </AppStyled>
      </AppWrapper>
    );
  }
}

export default App;
