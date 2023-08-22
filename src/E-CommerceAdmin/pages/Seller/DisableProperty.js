import React from 'react'

const BasicInfo = ({ formData, setFormData }) => {
const handleFormData = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData(previousData => {
            return { ...previousData, [name]: value }
        });
    }
    return(
                <select id='propertyType' name='propertyType' onChange={(e) => handleFormData(e)} className='selection-input'>     
                    <option value='Residential'>Enable</option>
                    <option value='Commercial'>Disable</option>
                </select>
            
    )

    
}

export default BasicInfo