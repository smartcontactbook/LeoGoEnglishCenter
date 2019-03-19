import React, { Component } from 'react';

class Course extends Component {
	render () {
		return (
			<div>
				  <section className="content-header">
				    <h1><b>COURSE MANAGEMENT</b>
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
		                      <button type="button" className="btn btn-success" data-toggle="modal" data-target="#modal-default"><i className="fa fa-plus">Add</i></button>
		                    </p>

		                  </div>
 							{/* START Modal */}
		                  <div className="modal fade" id="modal-default">
							  <div className="modal-dialog">
							    <div className="modal-content">
							      <div className="modal-header Editheader">
							        <button
							          type="button"
							          className="close"
							          data-dismiss="modal"
							          aria-label="Close"
							        >
							          <span aria-hidden="true">×</span>
							        </button>
							        <h4 className="modal-title">ADD COURSE</h4>
							      </div>
							      <div className="modal-body">
							      	<h4>Course name </h4>
							        <div className="input-group">
									  <span className="input-group-addon">
									    <i className="fa fa-book" />
									  </span>
									  <input type="email" className="form-control" placeholder="Enter name" />
									</div>
									<h4>Description </h4>
									<div className="form-group">
									  <textarea className="form-control" rows={2} placeholder="Enter description" defaultValue={""}/>
									</div>
									<div className="row">
										<div className="col-lg-6">
											<div className="form-group">
												<h4>Term </h4>
												<select className="form-control select2" style={{ width: "100%" }}>
													<option selected="selected">Term</option>
													<option>3 month</option>
													<option>5 month</option>
													<option>6 month</option>
												</select>
											</div>
										</div>

										<div className="col-lg-6">
											
											<div className="form-group">
												<h4>Level </h4>
												<select className="form-control select2" style={{ width: "100%" }}>
													<option selected="selected">Level</option>
													<option>1</option>
													<option>2</option>
													<option>3</option>
												</select>
											</div>
										</div>
									</div>
							    </div>
							    <div className="modal-footer">
							        <button type="button" className="btn btn-default pull-left"data-dismiss="modal">Close</button>
							        <button type="button" className="btn btn-primary">Save changes</button>
							    </div>
							</div>
						</div>
					</div>

							    {/* end Modal */}


				          <div className="box-body">
				            <table id="example1" className="table table-bordered table-striped">
				              <thead>
				                <tr>
					                <th>Course Name</th>
					                <th>Description</th>
					                <th>Term</th>
					                <th>Level</th>
					                <th class="sorting_desc_disabled sorting_asc_disabled sorting disabled">Action</th>
				                </tr>
				              </thead>
				              <tbody>
				                <tr>
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
					                <th>
						                <button type="button" className="btn btn-warning editLeftRight"><i className="	fa fa-edit"></i></button>
						                <button type="button" className="btn btn-danger"><i className="fa fa-trash-o"></i></button>
					                </th>
				                </tr>
				              </tbody>
				              <tfoot>
				                <tr>
				                  <th>Course Name</th>
				                  <th>Description</th>
				                  <th>Term</th>
				                  <th>Level</th>
				                  <th>Action</th>
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
export default Course