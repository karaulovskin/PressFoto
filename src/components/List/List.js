import React from 'react'
import './List.css'

//components
import Item from './Item/Item'

const List = ({ items }) => (
    <div
        className="list"
    >
        {items.map(item => (
            <Item
                key={item.item_id}
                imgSrc={item.sample_url}
            />
        ))}
    </div>
)

export default List