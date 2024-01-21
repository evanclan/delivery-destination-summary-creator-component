import React from 'react'
import InputAddDestination from './InputandDisplayComponents/InputAddDestination'
import DestinationList from './InputandDisplayComponents/DestinationList'

const InputandDisplayContainer = () => {
  return (
    <div className='input-display-container'>
        <InputAddDestination/>  
        <DestinationList>
            <Destination /> 
        </DestinationList>
    </div>
  )
}

export default InputandDisplayContainer;