import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {HashRouter , Link} from 'react-router-dom';

class Childrens extends Component {
	render () {
		return (
			<div>
				  <section className="content-header">
				    <h1><b>CHILDRENS MANAGEMENT</b>
				    </h1>
				    <ol className="breadcrumb">
				      <li><a href="#"><i className="fa fa-dashboard" /> Home</a></li>
				      <li><a href="#">Tables</a></li>
				      <li className="active">Data tables</li>
				    </ol>
				  </section>
				  <section className="content">
				    <div className="row">
				      <div className="col-xs-12">
				        <div className="box">
				          <div className="box-header">
		                    <p className="pull-right box-title">
		                      <button type="button" className="btn btn-primary editLeftRight"><i className="fa fa-reply-all">Back</i></button>
		                      <Link to='/AddChildren'><button type="button" className="btn btn-success"><i className="fa fa-plus"></i>Add</button></Link>
		                    </p>
		                  </div>
		                  
				          <div className="box-body">
				            <table id="example1" className="table table-bordered table-striped">
				              <thead>
				                <tr>
					                <th>Description</th>
					                <th>First Name</th>
					                <th>Last Name</th>
					                <th>Email</th>
					                <th>Birthday</th>
					                <th>Phone Number</th>
					                <th>Gender</th>
					                <th>Address</th>
					                <th class="sorting_desc_disabled sorting_asc_disabled sorting disabled">Action</th>
				                </tr>
				              </thead>
				              <tbody>
				                <tr>
					                <td>Trident</td>
					                <td>InternetExplorer 4.0</td>
					                <td>Win 95+</td>
					                <td> 4</td>
					                <td>Trident</td>
					                <td>InternetExplorer 4.0</td>
					                <td>Win 95+</td>
					                <td> 4</td>
					                <th>
						                <button type="button" className="btn btn-warning editLeftRight"><i className="	fa fa-edit"></i></button>
						                <button type="button" className="btn btn-danger"><i className="fa fa-trash-o"></i></button>
					                </th>
				                </tr>
				                <tr>
					                <td>Trident</td>
					                <td>InternetExplorer 4.0</td>
					                <td>Win 95+</td>
					                <td> 4</td>
					                <td>Trident</td>
					                <td>InternetExplorer 4.0</td>
					                <td>Win 95+</td>
					                <td> 4</td>
					                <th>
						                <button type="button" className="btn btn-warning editLeftRight"><i className="	fa fa-edit"></i></button>
						                <button type="button" className="btn btn-danger"><i className="fa fa-trash-o"></i></button>
					                </th>
				                </tr>
				                <tr>
					                <td>Trident</td>
					                <td>InternetExplorer 4.0</td>
					                <td>Win 95+</td>
					                <td> 4</td>
					                <td>Trident</td>
					                <td>InternetExplorer 4.0</td>
					                <td>Win 95+</td>
					                <td> 4</td>
					                <th>
						                <button type="button" className="btn btn-warning editLeftRight"><i className="	fa fa-edit"></i></button>
						                <button type="button" className="btn btn-danger"><i className="fa fa-trash-o"></i></button>
					                </th>
				                </tr>
				                <tr>
					                <td>Trident</td>
					                <td>InternetExplorer 4.0</td>
					                <td>Win 95+</td>
					                <td> 4</td>
					                <td>Trident</td>
					                <td>InternetExplorer 4.0</td>
					                <td>Win 95+</td>
					                <td> 4</td>
					                <th>
						                <button type="button" className="btn btn-warning editLeftRight"><i className="	fa fa-edit"></i></button>
						                <button type="button" className="btn btn-danger"><i className="fa fa-trash-o"></i></button>
					                </th>
				                </tr>
				              </tbody>
				              <tfoot>
				                <tr>
					                <th>Description</th>
					                <th>First Name</th>
					                <th>Last Name</th>
					                <th>Email</th>
					                <th>Birthday</th>
					                <th>Phone Number</th>
					                <th>Gender</th>
					                <th>Address</th>
					                <th class="sorting_desc_disabled sorting_asc_disabled sorting disabled">Action</th>
				                
				                </tr>
				              </tfoot>
				            </table>
				          </div>
				        </div>
				      </div>
				    </div>
				  </section>
				</div>
		)
	}
}
export default Childrens