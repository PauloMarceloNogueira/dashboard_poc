import React, {Component} from 'react'
import { DropdownButton, MenuItem } from 'react-bootstrap';
require('bootstrap/dist/css/bootstrap.css');

 class Home extends Component{
  render() {
    return (
      <div>
        <div className="row">
          <div className="col-md-6">
            <h3>PAULO</h3>
          </div>
          <div className="col-md-6">
            <button type="button" className="btn btn-primary">Primary</button>
          </div>
        </div>
      </div>
    )
  }
}
export default Home;