import React from 'react'
import { Link } from 'react-router-dom'

export default function Cabecalho() {
  const logoUrl = 'https://img.freepik.com/vetores-gratis/modelo-de-logotipo-de-livraria-de-design-plano_23-2149325325.jpg?w=740&t=st=1695687626~exp=1695688226~hmac=ceec938e51cb762d719d5ac6b866ccbf49e770b43dcb32cb934e5f5ae613eaf0';
  return (
    <header>
    <div className='Cabecalho'>
      <img src={logoUrl} alt="Logo da Empresa" />
        <Link to="/" className="d-flex align-items-center link-body-emphasis text-decoration-none">
          <span className="h1">BookStrore Eletronics</span>
        </Link>
    </div>
      <div className="d-flex flex-column flex-md-row align-items-center pb-4 mb-4 border-bottom">

        <nav className="d-inline-flex mt-1 mt-md-2 ms-md-auto">
            <button className='add'>
              <Link className="me-1 py-2 link-body-emphasis text-decoration-none" to="/novo"> ADD + </Link>
            </button>
          
        </nav>
      </div>
      
    </header>
  )
}

