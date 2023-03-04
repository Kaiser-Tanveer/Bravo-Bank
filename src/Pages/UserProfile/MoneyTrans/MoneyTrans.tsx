import React from 'react'
import { useParams } from 'react-router-dom'

const MoneyTrans = () => {

    const {id} = useParams();
    console.log(id);

  return (
    <div>MoneyTrans</div>
  )
}

export default MoneyTrans