import React, { Component } from 'react';

class AddTutor extends Component {
	render () {
		return (
			<div>
				  <section className="content-header">
				    <h1><b>Add TUTOR</b>
				    </h1>
				    <ol className="breadcrumb">
				      <li><a href="#"><i className="fa fa-dashboard" /> HOME</a></li>
				      <li><a href="#">TUTOR MANAGEMENT</a></li>
				      <li className="active">Add TUTOR</li>
				    </ol>
				  </section>
				  <section className="content">
				    <div className="row">
				      <div className="col-xs-12">
				        <div className="box">
					        <div className="box-header">
						        <h3 className="box-title"><b>INFORMATION</b></h3>
						        <p className="pull-right box-title">
							        <button type="button" className="btn btn-primary editLeftRight"><i className="fa fa-reply-all">Back</i></button>
							        <button type="button" className="btn btn-success"><i className="fa fa-save">Save</i></button>
						        </p>
					        </div>
		                  <div className="row">
			                  <div class="col-sm-4">
								  <div className="box-body">
								      <div className="form-group">
								        <label>First Name</label>
								        <input
								          type="text"
								          className="form-control"
								          placeholder="Enter First Name"
								        />
								      </div>
								      <div className="form-group">
									      <label>Last Name</label>
									      <select className="form-control select2" style={{ width: "100%" }}>
										      <option selected="selected">Gender</option>
										      <option>Male</option>
										      <option>Female</option>
									      </select>
								      </div>
								      <div className="form-group">
								        <label>User Name</label>
								        <input
								          type="text"
								          className="form-control"
								          placeholder="Enter User Name"
								        />
								      </div>
								  </div>
							  </div>
							  <div class="col-sm-4">
								  <div className="box-body">
								     <div className="form-group">
								        <label>Last Name</label>
								        <input
								          type="text"
								          className="form-control"
								          placeholder="Enter Last Name"
								        />
								      </div>
								      <div className="form-group">
										  <label>Phone Number</label>
										  <div className="input-group">
										    <div className="input-group-addon">
										      <i className="fa fa-phone" />
										    </div>
										    <input
										      type="text"
										      className="form-control"
										      data-inputmask="&quot;mask&quot;: &quot;(999) 999-9999&quot;"
										      data-mask
										    />
										  </div>
										</div>
										<div className="form-group">
										  <label htmlFor="exampleInputPassword1">Password</label>
										  <input
										    type="password"
										    className="form-control"
										    id="exampleInputPassword1"
										    placeholder="Password"
										  />
										</div>
										<div className="form-group">
								        <label>Description</label>
								        <textarea
								          className="form-control"
								          rows={3}
								          placeholder="Enter Description"
								          defaultValue={""}
								        />
								      </div>

								  </div>
							  </div>

							  <div class="col-sm-4">
								  <div className="box-body">
								    <form role="form">
								    <div className="form-group">
									  <label>Date:</label>
									  <div className="input-group date">
									    <div className="input-group-addon">
									      <i className="fa fa-calendar" />
									    </div>
									    <input
									      type="text"
									      className="form-control pull-right"
									      id="datepicker"
									    />
									  </div>
									</div>
								      <div className="form-group">
								        <label>Email</label>
								        <input
								          type="text"
								          className="form-control"
								          placeholder="Enter Email"
								        />
								      </div>
								      <div className="form-group">
								        <label>Textarea</label>
								        <input
								          type="text"
								          className="form-control"
								          placeholder="Enter Address"
								        />
								      </div>
								    </form>
								  </div>
							  </div>
						  </div>

						</div>
				        </div>
				      </div>


				  </section>
				</div>
		)
	}
}
export default AddTutor
