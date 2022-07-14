import React from 'react'
import { useState } from 'react'

const Categories = ({ items, onClick }) => {
  const [activeItem, setActiveItem] = useState(null)

  const onSelectItem = (index) => {
    setActiveItem(index)
  }
  return (
    <div className="categories">
      <ul>
        <li
          className={activeItem === null ? 'active' : ''}
          onClick={() => onSelectItem(null)}
        >
          Все
        </li>
        {items.map((name) => (
          <li
            key={name}
            className={activeItem === name ? 'active' : ''}
            onClick={() => setActiveItem(name)}
          >
            {name}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default React.memo(Categories)
