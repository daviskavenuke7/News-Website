import React from "react"
import { shopHighlights } from "../../dummyData"
import "./category-pages.css"

const Shop = () => (
  <main className='category-page'>
    <div className='container'>
      <header className='category-page-header'>
        <h1>Shop</h1>
      </header>
      <div className='shop-gallery'>
        {shopHighlights.map((item) => (
          <article className='shop-card' key={item.id}>
            <img src={item.cover} alt='' />
            <h2>{item.title}</h2>
          </article>
        ))}
      </div>
    </div>
  </main>
)

export default Shop