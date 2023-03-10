import React from 'react';
import { useDispatch } from 'react-redux';
import { removeReserve, updateAmountRequest} from '../../store/modules/reserve/actions';
import './style.css';
import {useSelector } from 'react-redux'
import { MdDelete, MdAddCircle, MdRemoveCircle } from 'react-icons/md';

export default function Reservas () {
  const reserves = useSelector(state=>state.reserve)
  const dispatch = useDispatch();
  function handleRemove(id){
    dispatch(removeReserve(id))
  }
  function decrementAmount(trip){
    dispatch(updateAmountRequest(trip.id,trip.amount-1))
  }
  function incrementAmount(trip){
    dispatch(updateAmountRequest(trip.id,trip.amount+1))
  }
  return (
    <div>
        <h1 className='title'>Você solicitou {reserves.length} reserva(s)</h1>

       {reserves.map(reserve =>(
        <div className='reservas' key={reserve.id}>
          <img src={reserve.image} alt={reserve.title}/>
          <strong>{reserve.title}</strong>
          <div id="amount">
            <button type='button' onClick={()=>decrementAmount(reserve)}>
            <MdRemoveCircle size={25} color='#191919'/>
            </button>
          <span>{reserve.amount}</span>
          <button type='button' onClick={()=>incrementAmount(reserve)}>
            <MdAddCircle size={25} color='#191919'/>
            </button>
          </div>
          <button type='button' onClick={()=>handleRemove(reserve)}>
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
