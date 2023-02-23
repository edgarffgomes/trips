import React from 'react'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import logo from "../../assets/logo.svg"
import './style.css'
export default function Header() {
  const reserveSize = useSelector(state => state.reserve.length)
  return (
    <header className='container'>
        <Link to='/'>
            <img className='logo' src={logo} alt='logo do projeto'/>
        </Link>

        <Link className='reserva' to='/reservas'>
          <div>
            <strong>Minhas Reservas</strong>
            <span>{reserveSize} reservas</span>
          </div>
        </Link>
    </header>
  )
}
