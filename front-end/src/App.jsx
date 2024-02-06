import { useEffect, useState } from 'react'
import './App.css'
import axios from './services/API'
import EditData from './components/EditData'
import Header from './components/Header'


function App() {
  const [addSection, setAddSection] = useState(false)
  const [editSection, setEditSection] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    location: ""
  })

  const [formDataEdit, setFormDataEdit] = useState({
    name: "",
    age: "",
    mobile: "",
    email: "",
    location: "",
    _id: ""
  })
  const [dataList, setDataList] = useState([])

  const handleOnChange = (e) => {
    const { value, name } = e.target
    setFormData((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!age || !mobile || !email || !location) {
      alert('Please fill form completly')
    } else {
      const data = await axios.post("/create", formData)
      if (data.data.success) {
        setAddSection(false)
        alert(data.data.message)
        setFormData({
          name: "",
          age: "",
          mobile: "",
          email: "",
          location: ""
        })
        fetchData()
      }
    }

  }

  const fetchData = async () => {
    const data = await axios.get("/")
    console.log(data);
    if (data.data.success) {
      setDataList(data.data.data)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    const data = await axios.delete("/delete/" + id)
    if (data.data.success) {
      fetchData()
      alert(data.data.message)
    }
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    const data = await axios.put("/update", formDataEdit)
    console.log(data);
    if (data.data.success) {
      fetchData()
      alert(data.data.message)
      setEditSection(false)
    }
  }

  const handleEditOnChange = async (e) => {
    const { value, name } = e.target
    setFormDataEdit((preve) => {
      return {
        ...preve,
        [name]: value
      }
    })
  }

  const handleEdit = async (val) => {
    setFormDataEdit(val)
    setEditSection(true)
  }

  return (
    <div className='position-relative vh-100'>
      <Header />
      <button style={{ width: '10rem' }} className='position-absolute top-0 start-50 translate-middle-x btn btn-outline-dark mt-2 fw-bold' onClick={() => setAddSection(true)}>Add Details</button>

      {
        addSection && (
          <EditData
            handleSubmit={handleSubmit}
            handleOnChange={handleOnChange}
            handleClose={() => setAddSection(false)}
            rest={formData}
          />
        )
      }

      {
        editSection && (
          <EditData
            handleSubmit={handleUpdate}
            handleOnChange={handleEditOnChange}
            handleClose={() => setEditSection(false)}
            rest={formDataEdit}
          />
        )
      }


      <div className='container ps-5 pe-5 pb-5 mt-5' style={{ height: '500px', overflowY: 'scroll', overflowX: 'hidden', border: '1px solid grey', width: '50rem' }}>
        <h4 className='text-center text-muted mt-2'>Users List</h4>
        <div className="mt-3">
          {
            dataList[0] ? (
              dataList.map((val, index) => {
                return (
                  
                  <div  className="border w-100 container d-flex align-items-center text-primary p-2 mt-1">
                    <h5 className='text-secondary ms-5'>{index + 1}</h5>
                    <h5 className='text-dark ms-5'>{val.name}</h5>
                    <div className="icons ms-auto me-5">
                      <i onClick={() => handleDelete(val._id)} className="fa-solid fa-trash me-3 text-danger"></i>
                      <i onClick={() => handleEdit(val)} class="fa-solid fa-pen-to-square me-3 text-success"></i>
                      
                       <i className="fa-solid fa-file-pdf"></i>
                        
                    </div>
                    
                  </div>
                )
              }))
              : (
                <p>No User Found</p>
              )
          }


        </div>
      </div>

    </div>
  )
}

export default App
