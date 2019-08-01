import React from 'react'
import './Item.css'

const Item = (props) => (
    <div
        className="item"
    >
        <div className="item__block">
            <div
                className="item__img"
            >
                <img
                    className="item__pic"
                    src={props.imgSrc}
                />
            </div>
            <div className="item__desc"></div>
        </div>
    </div>
)

export  default Item