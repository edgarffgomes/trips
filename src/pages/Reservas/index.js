import React from 'react';
import { useDispatch } from 'react-redux';
import './style.css';
import {useSelector } from 'react-redux'
import { MdDelete } from 'react-icons/md';

export default function Reservas () {
  const reserves = useSelector(state=>state.reserve)
  const dispatch = useDispatch();
  function handleRemove(id){
    dispatch({
      type: 'REMOVE_RESERVE',
      id,
    })

  }
  return (
    <div>
        <h1 className='title'>Você solicitou {reserves.length} reserva(s)</h1>

       {reserves.map(reserve =>(
        <div className='reservas' key={reserve.id}>
          <img src={reserve.image} alt={reserve.title}/>
          <strong>{reserve.title}</strong>
          <span>Quantidade: {reserve.amount}</span>
          <button type='button' onClick={()=>handleRemove(reserve.id)}>
            <MdDelete size={20} color='#191919'/>
          </button>
        </div>
       ))}

        
        <div>
          <footer>
            <button>SOLICITAR RESERVAS</button>
          </footer>
        </div>
    </div>
  )
}
