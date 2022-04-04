import React, { useState } from 'react'
import { DropdownButton,Dropdown } from 'react-bootstrap'

export default function Drop({props} ) {
    const [s, setStuff] = useState(props.title )
    const handleSelect=(e)=>{
      console.log(e);
      setStuff(e)
    }
  return (
    <DropdownButton
    
    title={s }

    onSelect={handleSelect}
      >

   
      {props.stuff.map((k) => (
        <Dropdown.Item   eventKey={`${k}`} >{k}</Dropdown.Item>
      ))}
    
  </DropdownButton>
  )
}
