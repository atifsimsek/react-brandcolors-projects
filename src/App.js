
import './App.css';
import Sidebar from './components/Sidebar';
import Content from './components/Content';
import Copied from './components/Copied';
import { setColor } from './Store/future/Color/ColorSlice';
import { setData } from "./Store/future/Data/DataSlice"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from 'react';
import data from "./brands.json"




function App() {

  const dataArray = []

  Object.keys(data).map(key => {
    dataArray.push(data[key])
  })

  const dispatch = useDispatch()
  const color = useSelector(state => state.colorReducer.value)
  const search = useSelector(state => state.searchReducer)



  useEffect(() => {
    if (color) {
      const timeout = setTimeout(() => {
        dispatch(setColor(""))
      }, 1000);
      return () => {
        clearTimeout(timeout)
      }
    }
  }, [color])

  useEffect(() => {
    dispatch(setData(dataArray.filter(brand => brand.title.toLowerCase().includes(search.value))))
  }, [search])

  return (
    <>
      {color && <Copied />}
      <Sidebar />
      <Content />
    </>
  );
}

export default App;
