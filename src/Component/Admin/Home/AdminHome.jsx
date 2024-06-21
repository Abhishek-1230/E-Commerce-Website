import React from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

export default function AdminHome() {
  return (
    <section id="company-services" className="padding-large">
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-md-3"><Sidebar /></div>
          <div className="col-md-9">
            <h5 className='bg-primary p-2  text-center'>Admin Home</h5>
            <div className="row">
              <div className="col-md-6">
                <img src="/images/noimage.jpg" height="250px" width="90%" alt="" />
              </div>
              <div className="col-md-6">
                <table className='table table-bordered table-hover'>
                  <tbody>
                    <tr>
                      <th>Name</th>
                      <td>Abhishek Thakur</td>
                    </tr>
                    <tr>
                      <th>User Name</th>
                      <td>Pooja Thakur</td>
                    </tr>
                    <tr>
                      <th>Email Address</th>
                      <td>at483354@gmail.com</td>
                    </tr>
                    <tr>
                      <th>Phone</th>
                      <td>9354559431</td>
                    </tr>
                    <tr>  
                      <td colSpan={2}> <Link to="/profile/update" className='btn btn-primary w-100'> Update Profile</Link></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
