import React, { useState } from 'react'
import NavPatient from './NavPatient'
import axios from 'axios'

const SearchPatient = () => {
    const [data, setData] = new useState([])
    const [input, searchInput] = new useState({ phn: '' })

    const getData = () => {
        axios.get("http://localhost:3000/api/patient/viewall").then(
            (response) => {
                setData(response.data)
            }
        )
    }

    const inputHandler = (event) => {
        searchInput({ ...input, [event.target.name]: event.target.value })
    }

    const searchValue = () => {
        axios.post("http://localhost:3000/api/patient/search", input).then(
            (response) => {
                setData(response.data)
            }
        )
    }

    return (
        <div>
            <NavPatient />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <label htmlFor="" className="form-label">Enter phone no</label>
                                <input type="text" className="form-control" name='phn' value={input.phn} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <button className="btn btn-success" onClick={searchValue}>Search</button>
                            </div>
                        </div>

                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <table class="table table bordered">
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
                                                (value, index) => {
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
            </div>

        </div>
    )
}

export default SearchPatient