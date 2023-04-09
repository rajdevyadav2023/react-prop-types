import React from 'react'
import propTypes from 'prop-types'
const Student = (props) => {
    return (
        <div className='student'>
            <h4>Student Card</h4>
            
            <div className="details-row">
                <h5 className='text-end'>Name : </h5>
                <h5 className='text-start'>{props.name}</h5>
            </div>
            <div className="details-row">
                <h5 className='text-end'>Age :</h5>
                <h5 className='text-start'>{props.age}</h5>
            </div>
            <div className="details-row">
                <h5 className='text-end'>Class :</h5>
                <h5 className='text-start'>{props.class}</h5>
            </div>
        </div>
    )
}
Student.protoTypes = {
    name: propTypes.string,
    age: propTypes.number,
    class:propTypes.number
}
Student.defaultProps = {
    name: "Student Name",
    age: "Not Defined",
    class: "Not Clear"
}
export default Student
