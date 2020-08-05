import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/7379528?s=460&v=4" alt="Marcelo Bueno"/>
        <div>
          <strong>Marcelo Bueno</strong>
          <span>Matemática</span>
        </div>
      </header>

      <p>
        Entusiasta das melhores tecnologias de matemática avançada.
        <br /><br />
        Apaixonado por ensinar matemática há mais de 15 anos. Já lecionou para mais de 2.000 alunos ao longo da carreira.
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 80,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem;
