import React from "react"
import { hero } from "../../dummyData"
import "./category-pages.css"

const Articles = () => (
  <main className='category-page'>
    <div className='container'>
      <header className='category-page-header'>
        <h1>Articles</h1>
      </header>
      <div className='article-gallery'>
        {hero.map((article) => (
          <article className='article-card' key={article.id}>
            <img src={article.cover} alt='' />
            <div className='article-card-copy'>
              <span className='category-tag'>Articles</span>
              <h2>{article.title}</h2>
              <p>By {article.authorName} · {article.time}</p>
              <p>{article.desc[0].para1}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </main>
)

export default Articles