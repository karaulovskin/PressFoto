import React from 'react'
import './App.css'

// data
import items from '../../items.json'

//components
import List from '../List/List'
import Menu from '../Menu/Menu'

function App() {
    return (
        <div className="app">
            <div className="page">
                <div className="container">
                    <List items={items.data.items}/>
                </div>
            </div>
            <Menu />
        </div>
    )
}

export default App