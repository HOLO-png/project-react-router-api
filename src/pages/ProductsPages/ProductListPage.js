import React, { Component } from 'react';
import ProductList from './../../components/ProductList/ProductList';
import ProductItem from './../../components/ProductItem/ProductItem';
import {connect } from 'react-redux';
import { Link } from 'react-router-dom';
import * as actions from './../../actions/index';

class ProductListPage extends Component {
   componentDidMount() {
      // callApi('products', 'GET', null).then(res => {
         // this.setState({
         //    products : res.data
         // });

         this.props.fetchAllProducts();
      // });
   }
   onDelete = (id) => {
      // var {products} = this.state;
      // callApi(`products/${id}`, 'DELETE', null).then(res => {
      //    if(res.status === 200) { // OK
      //       var index = this.findIndex(products, id);
      //       if(index !== -1) {
      //          products.splice(index, 1);
      //          this.setState({
      //             products: products
      //          });
      //       } 
      //    }
      // })
      this.props.deleteTheProduct(id);
   }

   render() {
      // var {products} = this.props;
      var {products} = this.props;
      // axios({
      //   method: 'GET',
      //   url: 'http://localhost:3000/products',
      //   data: null,
      // }).then(res => {
      //   console.log(res)
      //   products = res.data;
      // }).catch(err => {
      //   console.log(err)
      // });ko lay du lieu products dc vi load cham hon giao dien
      
      return (
         <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                  <Link to="/product/add" className="btn btn-primary mb-10">ADD PRODUCT</Link>
                  <div className="panel panel-primary">
                     <div className="panel-heading">
                     <h3 className="panel-title">List Of Products</h3>
                     </div>
                     <ProductList>
                     {this.showProduct(products)}
                     </ProductList>
                  </div>
         </div> 
      );
   } 
   showProduct = (products) => {
      var result = null;
      if (products.length > 0 ){
         result = products.map((product, index)=>{
         return (
            <ProductItem key={index} onDelete={this.onDelete} product={product} index={index}/>
         );
         })
      }
      return result;
   }
   }
   const mapStateToProps = state => {
   return {
      products: state.products
   }
   }
   const mapDispatchToProps = (dispatch, props) => {
      return{
         fetchAllProducts: () => {
            dispatch(actions.actFetchProductsRequest());
         },
         deleteTheProduct: (id) => {
            dispatch(actions.actDeleteProductRequest(id));
         }
      }
   }

   export default connect(mapStateToProps, mapDispatchToProps)(ProductListPage);
