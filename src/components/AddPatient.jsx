import React, { useState } from 'react'
import NavPatient from './NavPatient'
import axios from 'axios'

const AddPatient = () => {
    const [input,setInput]=new useState(
        {
            "name":"",
            "phn":"",
            "address":"",
            "symptom":"",
            "status":""
        }
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        axios.post("http://localhost:3000/api/patient/add",input).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Sucessfully added")
                    setInput(
                        {
                            "name":"",
                            "phn":"",
                            "address":"",
                            "symptom":"",
                            "status":""
                        }
                    )
                } else {
                    alert("Something went wrong")
                }
            }
        )
    }
  return (
    <div>
        <NavPatient/>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Patient name</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Phone number</label>
                            <input type="text" className="form-control" name='phn' value={input.phn} onChange={inputHandler} />
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Address</label>
                            <input type="text" className="form-control" name='address' value={input.address} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Symptom</label>
                            <input type="text" className="form-control" name='symptom' value={input.symptom} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                            <label htmlFor="" className="form-label">Status</label>
                            <input type="text" className="form-control" name='status' value={input.status} onChange={inputHandler}/>
                        </div>
                        <div className="col-col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <button className="btn btn-success" onClick={readValues}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
  )
}

export default AddPatient