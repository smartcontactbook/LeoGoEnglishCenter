import React, { Component } from 'react';

class Lecturer extends Component {
	render () {
		return (
			<div>
				  <section className="content-header">
				    <h1>
				      Data Tables
				      <small>advanced tables</small>
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
				            <h3 className="box-title">Data Table With Full Features</h3>
				          </div>
				          <div className="box-body">
				            <table id="example1" className="table table-bordered table-striped">
				              <thead>
				                <tr>
				                  <th>Rendering engine</th>
				                  <th>Browser</th>
				                  <th>Platform(s)</th>
				                  <th>Engine version</th>
				                  <th>CSS grade</th>
				                </tr>
				              </thead>
				              <tbody>
				                <tr>
				                  <td>Trident</td>
				                  <td>Internet
				                    Explorer 4.0
				                  </td>
				                  <td>Win 95+</td>
				                  <td> 4</td>
				                  <td>X</td>
				                </tr>
				                <tr>
				                  <td>Trident</td>
				                  <td>Internet
				                    Explorer 5.0
				                  </td>
				                  <td>Win 95+</td>
				                  <td>5</td>
				                  <td>C</td>
				                </tr>
				                <tr>
				                  <td>Trident</td>
				                  <td>Internet
				                    Explorer 5.5
				                  </td>
				                  <td>Win 95+</td>
				                  <td>5.5</td>
				                  <td>A</td>
				                </tr>
				                <tr>
				                  <td>Trident</td>
				                  <td>Internet
				                    Explorer 6
				                  </td>
				                  <td>Win 98+</td>
				                  <td>6</td>
				                  <td>A</td>
				                </tr>
				                <tr>
				                  <td>Trident</td>
				                  <td>Internet Explorer 7</td>
				                  <td>Win XP SP2+</td>
				                  <td>7</td>
				                  <td>A</td>
				                </tr>
				                <tr>
				                  <td>Trident</td>
				                  <td>AOL browser (AOL desktop)</td>
				                  <td>Win XP</td>
				                  <td>6</td>
				                  <td>A</td>
				                </tr>
				              </tbody>
				              <tfoot>
				                <tr>
				                  <th>Rendering engine</th>
				                  <th>Browser</th>
				                  <th>Platform(s)</th>
				                  <th>Engine version</th>
				                  <th>CSS grade</th>
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
export default Lecturer