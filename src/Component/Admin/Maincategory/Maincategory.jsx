import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import { Link } from 'react-router-dom'

export default function Maincategory() {
  let [data, setData] = useState([])
  async function deleteItem(id){
    if(window.confirm("Are you sure to delete the Item : ")){
    let response = await fetch("http://localhost:8000/maincategory/"+ id, {
      method: "delete",
      headers: {
        "content-type": "application/json"
      }
    })
    response = await response.json()
    getAPIData()
  }
}
  async function getAPIData() {
    let response = await fetch("http://localhost:8000/maincategory", {
      method: "get",
      headers: {
        "content-type": "application/json"
      }
    })
    response = await response.json()
    if (response.length) {
      setData(response.reverse())
    }

  }
  useEffect(() => {
    getAPIData()
  }, [])
  return (
    <section id="company-services" className="padding-large">
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-md-3"><Sidebar /></div>
          <div className="col-md-9">
            <h5 className='bg-primary p-2  text-center'>MainCategory <Link to="/admin/maincategory/create" className='btn btn-secondary '><i className='fa fa-plus  text-light'></i></Link></h5>
            <table className='table table-bordered table-striped table-hover'>
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Name</th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {
                  data.map((item, index) => {
                    return <tr key={index}>
                      <td>{item.id}</td>
                      <td>{item.name}</td>
                      <td><Link className='btn btn-primary' to = {`/admin/maincategory/update/${item.id}`}><i className='fa fa-edit'></i></Link></td>
                      <td> <button className='btn btn-danger' onClick={()=> deleteItem(item.id)}><i className='fa fa-trash'></i></button></td>
                    </tr>
                  })
                }
              </tbody>
            </table>

          </div>
        </div>

      </div>
    </section>
  )
}
