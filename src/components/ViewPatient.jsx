import React, { useEffect, useState } from 'react'
import NavPatient from './NavPatient'
import axios from 'axios'

const ViewPatient = () => {
    const [data,setData]=new useState([])
    const getData=()=>{
        axios.get("http://localhost:3000/api/patient/viewall").then(
            (response)=>{
                setData(response.data)

            }
        )
    }
useEffect(()=>{getData()},[])
  return (
    <div>
        <NavPatient/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col">Patient Name</th>
      <th scope="col">Phone number</th>
      <th scope="col">Address</th>
      <th scope="col">Symptom</th>
      <th scope="col">Status</th>

      
    </tr>
  </thead>
  <tbody>
    {
        data.map(
            (value,index)=>{
                return <tr>
      
                <td>{value.name}</td>
                <td>{value.phn}</td>
                <td>{value.address}</td>
                <td>{value.symptom}</td>
                <td>{value.status}</td>
          
          
              </tr>
            }
        )
    }
   
  </tbody>
</table>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ViewPatient