import React, { useContext } from 'react';
import WordleContext from './context/WordleContext';
import './css/Game.css';

function App() {
  const {
    wordData,
    onInputChange,
    word,
    onButtonClick,
    click,
    className,
    //  arrWord,
    finish,
  } = useContext(WordleContext);

  const arrWord = word.toUpperCase().split('');

  return (
    <div>
      <h1>Wordle</h1>
      <div className="section">
        {' '}
        <div className="game">
          {
            click ? arrWord.map((letter, index) => (
              <div key={ index } className={ className[index] }>{ letter }</div>
            )) : ''
          }
        </div>
        <input
          type="text"
          placeholder="Digite a palavra aqui"
          onChange={ onInputChange }
          className="input"
        />
        {' '}
        <button
          onClick={ onButtonClick }
          className="input"
        >
          Enviar
        </button>
        {
          finish ? <h1>Fim de jogo</h1> : ''
        }
      </div>
    </div>
  );
}

export default App;
