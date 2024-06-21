import React, { useEffect, useState } from 'react'
import Sidebar from '../Sidebar'
import Formvalidation from '../../Validation/Formvalidation'
import { useNavigate, useParams } from 'react-router-dom'


export default function UpdateMaincategory() {
  let { id } = useParams()
  let [data, setData] = useState({
    name: ""
  })

  let [errorMessage, setErrorMessage] = useState({
    name: ""
  })
  let [show, setShow] = useState(false)
  let [maincategoryData, setMaincategoryData] = useState([])
  let navigate = useNavigate()

  function getInputData(e) {
    var { name, value } = e.target
    setErrorMessage((old) => {
      return {
        ...old,
        [name]: Formvalidation(e)
      }
    }
    )
    setData((old) => {
      return {
        ...old,
        [name]: value
      }
    })
  }
  async function postData(e) {
    e.preventDefault()
    if (Object.values(errorMessage).find((x) => x && x.length !== 0)) {
      setShow(true)
    }
    else {
      let item = maincategoryData.find((x) => x.name === data.name)
      if (item) {
        setShow(true)
        setErrorMessage((old) => {
          return {
            ...old,
            'name': "Already Exist"
          }
        })

      }
      else {
         let  response = await fetch("http://localhost:8000/maincategory"+ id, {
          method: "put",
          headers: {
            "content-type": "application/json"
          },
          body: JSON.stringify({ name: data.name })

        })
        response = await response.json()
        navigate("/admin/maincategory")
      }
    }
  }
  async function getAPIData(){
    let response = await fetch("http://localhost:8000/maincategory", {
        method: "get",
        headers: {
          "content-type": "application/json"
        }
      })
      response = await response.json()
      setMaincategoryData(response)
      if(response.length){
        let item =response.find((x)=> x.id===id)
        if (item)
        setData((old)=>{
      return{
        ...old,
        ...item
      }
        })
      }

  }
  useEffect(()=>{
    getAPIData()
  },[])
  return (
    <section id="company-services" className="padding-large">
      <div className='container-fluid my-5'>
        <div className="row">
          <div className="col-md-3"><Sidebar /></div>
          <div className="col-md-9">
            <h5 className='bg-primary p-2  text-center'> Create Main Category <button onClick={() => window.history.back()} className='text-dark '>Back</button></h5>
            <div className="mb-3">
              <form onSubmit={postData}>
                <div className="mb-3">
                  <label >Name <span className='text-danger'>*</span> </label>
                  <input type="text" name="name" onChange={getInputData} value={data.name} placeholder='Maincategory Name' className='form-control' />
                  {show ? <p className='text-danger text-capitalize py-1'>{errorMessage.name}</p> : ""}
                </div>
                <div className="mb-3">
                  <button type="submit" className='btn btn-primary w-100'>Create  </button>
                </div>
              </form>
            </div>

          </div>
        </div>

      </div>
    </section>
  )
}
