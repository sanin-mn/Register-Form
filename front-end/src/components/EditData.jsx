import React from 'react'

function EditData({ handleOnChange, handleSubmit, handleClose, rest }) {
    return (
        <div style={{ backgroundColor: '#EFF7F8' }} className='vh-100'>
            <button className='btn btn-outline-danger m-3' onClick={handleClose}>Back</button>

            <div className='w-50 p-3 position-absolute top-50 start-50 translate-middle'>

                <form onSubmit={handleSubmit} className='border p-5 bg-white'>
                    <label htmlFor="name">Name</label>
                    <input id='name' type="text" className='form-control mt-1 mb-3' placeholder='Enter name' name='name' onChange={handleOnChange} value={rest.name} />

                    <label htmlFor="age">Age</label>
                    <input id="age" type="number" className='form-control mt-1 mb-3' placeholder='Enter age' name='age' onChange={handleOnChange} value={rest.age} />

                    <label htmlFor="mobile">Phone number</label>
                    <input id="mobile" type="number" className='form-control mt-1 mb-3' placeholder='Enter mobile number' name='mobile' onChange={handleOnChange} value={rest.mobile} />

                    <label htmlFor="email">E mail</label>
                    <input id="email" type="email" className='form-control mt-1 mb-3' placeholder='Enter email' name='email' onChange={handleOnChange} value={rest.email} />

                    <label htmlFor="location">Location</label>
                    <input id='location' type="text" className='form-control mt-1 mb-3' placeholder='Enter location' name='location' onChange={handleOnChange} value={rest.location} />

                    <button onClick={handleSubmit} variant="primary" type="submit" className='mt-3 btn btn-primary'>
                        Submit
                    </button>

                </form>

            </div>
        </div>
    )
}

export default EditData