/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import getContrastYIQ from '../helpers';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { useDispatch, useSelector } from 'react-redux';
import { setColor } from '../Store/future/Color/ColorSlice';
import { setSelectedBrands } from '../Store/future/Data/SelectedBrands';

const Brand = ({ brand }) => {
  const dispatch = useDispatch();

  const selectedBrands = useSelector(
    (state) => state.selectedBrandsReducer.data
  );

  const toggleSelected = () => {
    dispatch(setSelectedBrands(brand));
  };

  const [copy, setCopy] = useState(false);
  const copyColor = (color) => {
    setCopy(true);
    dispatch(setColor({ color }));
  };

  return (
    <div
      className={`brand ${
        selectedBrands.includes(brand.slug) ? 'selected ' : ''
      }`}
    >
      <h5 onClick={toggleSelected}>{brand.title}</h5>
      <div className="brand-colors">
        {brand.colors.map((color, index) => (
          <CopyToClipboard key={index} text={color}>
            <span
              onClick={() => {
                copyColor(color);
              }}
              style={{
                '--bgColor': `#${color}`,
                '--textColor': `${getContrastYIQ(color)}`,
              }}
            >
              {color}
            </span>
          </CopyToClipboard>
        ))}
      </div>
    </div>
  );
};

export default Brand;

// const [selectedBrands, setSelectedBrands] = useState([]);

// const toggleSelected = () => {

//     if (selectedBrands.includes(brand.slug)) {
//         setSelectedBrands(selectedBrands.filter(slug => slug !== brand.slug))
//     }
//     else {
//         setSelectedBrands([...selectedBrands, brand.slug])
//     }

// }
