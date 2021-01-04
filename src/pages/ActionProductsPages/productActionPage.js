import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import * as actions from './../../actions/index';
import { connect } from 'react-redux';

class productActionPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id : '',
      name :'',
      price : '', 
      status : ''
    }
  }
  componentDidMount() {
    var {match} = this.props;
    if(match){
      var id = match.params.id;
      // callApi(`products/${id}`, 'GET', null).then(res => {
      //   var data = res.data;
      //   this.setState({
      //     id: data.id,
      //     name: data.name,
      //     price: data.price, 
      //     status: data.status
      //   })

      // });
      this.props.onEditProduct(id);
    }
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps && nextProps.editProduct){
      var {editProduct} = nextProps;
      this.setState({
        id : editProduct.id,
        name: editProduct.name,
        price: editProduct.price, 
        status: editProduct.status
      });
    }
  }

  onChange = (event) =>{
    var target = event.target;
    var name = target.name;
    var value = target.type === 'checkbox' ? target.checked : target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    event.preventDefault()
    var {id ,name, price, status} = this.state;
    var {history} = this.props;
    var product = {
            id : id,
            name : name,
            price : price,
            status: status
    } 
    if(id){
      // callApi(`products/${id}`, 'PUT', {
      //   name: name,
      //   price: price,
      //   status: status
      // }).then(res => {
      //   history.push('/products')
      // });

      this.props.onUpdateProduct(product);
      history.goBack();
    }
    else{
      // callApi('products', 'POST', {
      // name: name,
      // price: price,
      // status: status
      // }).then(res =>{
      //   history.goBack()
      // }) 
      this.props.addTheProduct(product);
      history.goBack();
    }
    
  }
  render() { 
    return (
       <div className="container">
         <div className="row">
          <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
            <form onSubmit={this.handleSubmit}>
              <legend className="bg-primary">ADD PRODUCT</legend>
              <div className="form-group dp-fl">
                <label for="">Product Name:</label>
                <input type="text" value={this.state.name} onChange={this.onChange} className="form-control" name="name" id="" placeholder="Enter the product name"/>
              </div>
              <div className="form-group dp-fl">
                <label for="">Product Price:</label>
                <input type="number" value={this.state.price} onChange={this.onChange} className="form-control" name="price" id="" placeholder="Enter the product price"/>
              </div>
              <div className="form-group dp-fl">
                <label for="">Product Status:</label>
              </div>
              <div className="checkbox dp-fl">
                <label>
                  <input checked={this.state.status} type="checkbox" value={this.state.status} onChange={this.onChange} name="status" />
                  Stocking
                </label>
              </div>
              <button type="submit" className="btn btn-primary mr-10">Submit</button>&nbsp;
              <Link to="/products" className="btn btn-danger">Come back</Link>
            </form>
          </div>
        </div>
       </div>
    );
  } 
}
const mapStateToProps = state =>{
  return {
    editProduct: state.editProduct
  }
}
const mapDispatchToProps = (dispatch, props) =>{
  return{
    addTheProduct: (product) => { 
      dispatch(actions.actAddProductRequest(product))
    },
    onEditProduct: (id) => {
      dispatch(actions.actGetProductRequest(id))
    },
    onUpdateProduct: (product) => {
      dispatch(actions.actUpdateProductRequest(product))
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(productActionPage);
