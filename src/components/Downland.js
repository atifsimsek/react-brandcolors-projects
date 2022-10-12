/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable array-callback-return */
/* eslint-disable no-useless-escape */

import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { FiLink, FiDownload } from "react-icons/fi"
import { GrClose } from "react-icons/gr"
import { clearSelected } from "../Store/future/Data/SelectedBrands"
import { useEffect } from 'react'

const Downland = () => {

  const dispatch = useDispatch()
  const brands = useSelector(state => state.dataReducer.data)
  const selectedBrands = useSelector(state => state.selectedBrandsReducer.data)
  const [downloadUrl, setDownloadUrl] = useState()
  const [cssMethod, setCssMethod] = useState("css");


  useEffect(() => {

    if (selectedBrands.length > 0) {

      let output = ""

      switch (cssMethod) {
        case "css":

          output += ":root{\n"
          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color, key) => {
              output += `--${slug}-${key}: #${color};\n`
            })
          })
          output += "}\n"
          break;

        case "scss":

          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color, key) => {
              output += `\$${slug}-${key}: #${color};\n`
            })
          })


          break;

        case "less":

          selectedBrands.map(slug => {
            let brand = brands.find(brand => brand.slug === slug)
            brand.colors.map((color, key) => {
              output += `@${slug}-${key}: #${color};\n`
            })
          })


          break;

        default:
          break;
      }


      const blop = new Blob([output])
      const url = setDownloadUrl(URL.createObjectURL(blop))
      return () => {
        URL.revokeObjectURL(url)
        setDownloadUrl("")
      }
    }

  }, [selectedBrands,cssMethod])

  const getLink = () => {

    prompt("Here \'s the URL to share", `https://localhost:3000/collection/${selectedBrands.join(",")}`)
  }

  
  return (
    <div className='download'>
      <div className="actions">
        <select onChange={(e) => { setCssMethod(e.target.value) }} className='dropdown' name="" id="">
          <option value="css">CSS</option>
          <option value="scss">SCSS</option>
          <option value="less">LESS</option>
        </select>
        <a download={`brands.${cssMethod}`} href={downloadUrl}><FiDownload /></a>
        <button onClick={getLink}>
          <FiLink />
        </button>

      </div>
      <div className="selected" onClick={() => { dispatch(clearSelected([])) }}>
        <GrClose />
        {selectedBrands.length} brands collected

      </div>
    </div>

  )
}

export default Downland