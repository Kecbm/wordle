import React, { useState, useEffect } from 'react';
import WordleContext from './WordleContext';
import wordlist from '../data/wordlist';

function WordleProvider({ children }) {
  const [wordData, setWordData] = useState('');
  const [word, setWord] = useState('');
  const [click, setClick] = useState(false);
  const [className, setClassName] = useState([]);

  //  Palavra aleatória:
  console.log('Palavra aleatória: ', wordData);
  
  //  arrWord: array de palavras digitadas pelo usuário (array de arrays)
  const [arrWord, setArrWord] = useState([]);
  const [finish, setFinish] = useState(false);


  const onInputChange = (event) => {
    const word = event.target.value;
    setWord(word);
  };
  
  //  console.log('arrWord=>', arrWord);

  const getWord = () => {
    const arr = wordlist;
    const randomWord = arr[Math.floor(Math.random() * (956))];
    setWordData(randomWord);
  };

  useEffect(() => {
    getWord();
  }, []);

  const onButtonClick = () => {

    if (arrWord.length === 6) {
      setFinish(true);
      setArrWord([]);
    }
    
    setClassName([]);
    setClick(true);
    
    const gameWord = wordData.toUpperCase().split('');
    const userWord = word.toUpperCase().split('');
    setArrWord((prevState) => [...prevState, userWord]);

    for (let i = 0; i < gameWord.length; i += 1) {
      if (gameWord[i] === userWord[i]) {
        setClassName((prevState) => [...prevState, 'green']);
      } else if (gameWord.includes(userWord[i])) {
        setClassName((prevState) => [...prevState, 'yellow']);
      } else {
        setClassName((prevState) => [...prevState, 'black']);
      }
    }

  };

  return(
    <WordleContext.Provider
      value={ {
        wordData,
        onInputChange,
        word,
        onButtonClick,
        click,
        className,
        finish,
      } }
    >
      { children }
    </WordleContext.Provider>
  )
}

export default WordleProvider;
