import React from 'react'
import './search-box.styles.css'

export const SearchBox = ({placeholder, handleChange}) => (

<input 
    className = 'search'
    type='search'
    // placeholder dan handleChange adalah props dari searchBox yg ada di app.js. script diatur disana
    placeholder= {placeholder}
    onChange= {handleChange}>
</input>
)

