import React from 'react'
import './card.styles.css'

//komponen card ini berisi kumpulan card-individual
export const Card = props => (
    <div className = 'card-container'>
        <img alt='monster' src={`https://robohash.org/${props.monsterIndv.id}?set=set2&size=180x180`}></img>
        {/* monsterIndv mengambil dari  --> card-list.component.jsx --> dan menambahkan objek 'name'*/}
        <h2>{props.monsterIndv.name}</h2>
        <p>{props.monsterIndv.email}</p>
    </div>
)