import React from 'react'
import {Card} from '../card/card.component'
import './card-list.styles.css'

//cardlist ini berisi cardIndividual yang mengambil data dari App
export const CardList = (props) => ( //props karena membutuhkan state monsters(app.js) untuk di map
    // console.log(props)
    
        <div className='card-list'>
        {
          props.monsters.map(monsterIndv=>(  //melakukan mappping array state monsters (di app.js), dari monsters dipecah menjadi monsterIndv
          <Card key={monsterIndv.id} monsterIndv={monsterIndv} />) //di mapping ke <Card> dengan atribute id. kok cuma id? name nya mana? name ada diberikan di <Card>
          )
        }
    </div>
    
 
    )