import React, { Component } from 'react';
// import ProductItem from './../ProductItem/ProductItem';

class ProductList extends Component {
  render() {
    
    return (
        <div className="panel-body">
            <table className="table table-bordered table-hover">
            <thead>
                <tr>
                <th>STT</th>
                <th>CodePd</th>
                <th>Name</th>
                <th>Price</th>
                <th>Status</th>
                <th>Act</th>
                </tr>
            </thead>
            <tbody>
                {this.props.children}
            </tbody>
            </table>
        </div>
    );
  } 
}
export default ProductList;
