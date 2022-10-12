import React from 'react'
import { useSelector } from 'react-redux'
import getContrastYIQ from "../helpers"
const Copied = () => {

    const color = useSelector(state => state.colorReducer.value.color)
   

    return (
        <div style={{ "--copiedColor": `#${color}`, "--copiedTextColor": `${getContrastYIQ(color)}` }} className='copied'>

           Copied #{color} to Clipboard 

        </div>
    )
}

export default Copied