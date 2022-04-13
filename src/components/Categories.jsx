import React, { useState } from 'react'

const Categories = React.memo(function Categories ({items, onClickItem}) {
  const [currentCategory, setCurrentCategory] = useState(null)

  const setCategory = (index) => {
    setCurrentCategory(index)
    onClickItem(index)
  }

  return (
    <div className="categories">
              <ul>
                <li onClick={() => setCategory(null)} className={currentCategory === null ? 'active' : ''}>Все</li>
                {items && items.map((item, index) => <li className={currentCategory === index ? 'active' : ''} 
                  onClick={() => setCategory(index)} key={`${item}_${index}`}>{item}</li>)}
              </ul>
    </div>
  )
})

export default Categories