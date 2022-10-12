import React from 'react'
import Search from './Search'
import Brand from './Brand'
import { useSelector } from "react-redux"
import { List, AutoSizer } from 'react-virtualized'
import Downland from './Downland'
import Loader from './Loader'

const Content = () => {


  const brands = useSelector(state => state.dataReducer.data)
  const selectedBrands = useSelector(state => state.selectedBrandsReducer.data)


  const rowRenderer = ({ key, index, style, isScrolling }) => {

    const content = isScrolling ? <Loader /> : <Brand brand={brands[index]} />

    return (
      <div style={style} key={key}>
        {content}
      </div>

    )

  }


  return (
    <main className='content'>
      <header className="header">
        <Search />
        {selectedBrands.length > 0 && <Downland />}
      </header>
      <section className='brands'>
        {/* {
          brands.map((brand, index) => (
            <Brand key={index} brand={brand} />
          ))
        } */}

        <AutoSizer>
          {({ height, width }) => (
            <List
              width={width}
              height={height}
              rowCount={brands.length}
              rowHeight={95}
              rowRenderer={rowRenderer}
            />
          )}


        </AutoSizer>

      </section>

    </main>
  )
}

export default Content