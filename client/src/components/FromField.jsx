import React from 'react';

const FromField = ({labelName, type, name, placeholder, value, 
                    handelChange, isSurpriseMe, handelSurpriseMe}) => {
  return (
    <div>
      <div className='flex items-centre gap-2 mb-2'>
          <label htmlFor = {name}
             className ="block text-sm font-medium text-white">
                {isSurpriseMe && (
                  <button
                      type = "button"
                      onClick={handelSurpriseMe}
                      className = "font-semibold text-xs bg-[#B1B2FF] px-5 m-2 h-7 rounded-[5px] text-black">
                          Surprice Me!
                  </button>
                )}  
                {labelName}
          </label>
      </div>  
          <input 
            type = {type}
            id = {name}
            name = {name}
            placeholder = {placeholder}
            value = {value}
            onChange = {handelChange}
            required
            className= "bg-gray-50 border border-gray-30 text-gray-900 text-sm rounded-lg focus:ring-[#4649ff] focus:border-[#4649ff] outline-none block w-full p-3"
            />
    </div>
  )
}

export default FromField;