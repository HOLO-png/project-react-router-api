import React, { Component } from 'react';
import {Link} from 'react-router-dom';


class ProductItem extends Component {
  onDelete = (id) => {
    if(confirm('!Are you sure you want to delete this product?')){ //eslint-disable-line
      this.props.onDelete(id);
    }
  }
  render() {
      var {product, index} = this.props;
      var statusClass = product.status ? 'success' :'default';
      var statusName = product.status ? 'Stocking' : 'Out of stock'; 
    return (
        <tr>
            <td>{index + 1}</td>
            <td>{product.id}</td>
            <td>{product.name}</td>
            <td>{product.price}</td>
            <td>
                 <span className={`label label-${statusClass}`}>{statusName}</span>
            </td>
            <td>
                <Link to={`/products/${product.id}/edit`} className="btn btn-warning mr-10" type="button">Repair</Link>
                <button className="btn btn-danger" type="button" onClick={() => this.onDelete(product.id)}>Delete</button>
            </td>
        </tr>
    );
  } 
}
export default ProductItem;
