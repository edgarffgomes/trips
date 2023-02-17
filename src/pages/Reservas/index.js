import React from 'react';
import './style.css';
import { MdDelete } from 'react-icons/md';

export default function Reservas () {
  return (
    <div>
        <h1 className='title'>Você solicitou 1 reserva</h1>

        <div className='reservas'>
          <img src='https://sujeitoprogramador.com/wp-content/uploads/2019/12/maceio.jpg' alt='Maceió'/>
          <strong>Viagem Maceió 7 dias</strong>
          <span>Quantidade: 1</span>
          <button type='button' onClick={()=>{}}>
            <MdDelete size={20} color='#191919'/>
          </button>
        </div>
        <div>
          <footer>
            <button>SOLICITAR RESERVAS</button>
          </footer>
        </div>
    </div>
  )
}
