import React, { useState, useEffect } from 'react'
import './Game.css'
import Tile from '../Tile/Tile'
import Timer from '../Timer/Timer';

function Game() {
  const [pairs, setPairs] = useState([
      {
        a: 'Acnestis',
        b: 'the part of the back between the shoulder blads and the loins which an animal cannot reach to scratch',
        id: 0
      },
      {
        a: 'Grommet',
        b: 'an eyelet of firm material to strengthen or protect an opening or to insulate or protect something passed through it',
        id: 1
      },
      {
        a: 'Meldrop',
        b: 'a drop of mucus at the nose, whether produced by cold or otherwise',
        id: 2
      },
      {
        a: 'Octothorpe',
        b: 'the symbol #',
        id: 3
      },
      {
        a: 'Nauseant',
        b: 'an agent that inuces nausea',
        id: 4
      },
      {
        a: 'Augend & Addend',
        b: 'the first and second quntity in an addition of two things',
        id: 5
      },
      {
        a: 'Wrest Pin',
        b: 'a pin in a stringed musical instrument around which the ends of the strings are coiled and by which the instrument is tuned',
        id: 6
      },
      {
        a: 'Agelast',
        b: 'a person who never laughs',
        id: 7
      },
      {
        a: 'Amatorculist',
        b: 'a little insignificant lover; a pretender to affection',
        id: 8
      },
      {
        a: 'Pot-valor',
        b: 'boldness or courage resulting from alcholic drink',
        id: 9
      },
      {
        a: 'Overmorrow',
        b: 'The day after or following tomorrow. Finally someone found the word we’ve all been looking for.',
        id: 10
      },
      {
        a: 'Ereyesterday',
        b: 'The day before yesterday. Finally someone found the other word we’ve all been looking for.',
        id: 11
      },{
        a: 'Defenestration',
        b: 'The action of throwing someone out of a window; the action of dismissing someone from a position of power or authority.',
        id: 12
      },
      {
        a: 'Yerk',
        b: 'To beat vigorously (think: thrash); to attack or excite vigorously (think: goad).',
        id: 13
      },
      {
        a: 'Meretricious',
        b: 'Tawdrily and falsely attractive; superficially significant. Don’t confuse this one with delicious.',
        id: 14
      },
      {
        a: 'Proline',
        b: 'An alcohol-soluble amino acid occurring in high concentrations in collagen.',
        id: 15
      },
      {
        a: 'Acosmism',
        b: 'A theory that denies the universe possesses any absolute reality or that it has any existence apart from God.',
        id: 16
      },
      {
        a: 'Aubade',
        b: 'A song or poem greeting the dawn; a morning love song; a song of poem of lovers parting at dawn; morning music. It’s a French word (shocker) that means “dawn serenade.”',
        id: 17
      },
      {
        a: 'Dysthymia',
        b: 'A mood disorder characterized by chronic mildly depressed or irritable mood often accompanied by other symptoms; dysthymic disorder. With this new Latin word in your pocket, WebMD ain’t got nothin’ on you.',
        id: 18
      },
      {
        a: 'Gowpen',
        b: 'The hollow of two hands held together as if forming a bowl.',
        id: 19
      },
      {
        a: 'Alexithymia',
        b: 'Inability to identify and express or describe one’s feelings.',
        id: 20
      }
    ]);
  const [gameList, setGameList] = useState([])
  const [checkList, setCheckList] = useState([])

  useEffect(() => {
    if (checkList.length === 2) {
      if (checkForMatch(checkList[0],checkList[1])) {
        checkList[0].classList.add("tile--match")
        checkList[1].classList.add("tile--match")
        checkList[0].classList.remove("tile--active")
        checkList[1].classList.remove("tile--active")
        setCheckList([])
      } else {
        checkList[0].classList.add("tile--wrong")
        checkList[1].classList.add("tile--wrong")
        setCheckList([])
        setTimeout(() => {
          toggle(checkList[0])
          toggle(checkList[1])
          checkList[0].classList.remove("tile--wrong")
          checkList[1].classList.remove("tile--wrong")
        }, 600)
      }
    }
  }, [checkList])
  
  const flatten = (array) => {
    let listA = array.map((item)=> {
      return {text: item.a, id: item.id}
    })

    let listB = array.map((item)=> {
      return {text: item.b, id: item.id}
    })

    let listC = [...listA, ...listB]
    return listC
  }

  const shuffle = (array) => {
    let currentIndex = array.length;
    let randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }
    return array;
  }
  
  const getLast = (array) => {
    if (array.length <= 6) {
      return array
    } else {
      return array.slice(Math.max(array.length - 6, 0));
    }
  }

  const startGame = () => {
    if (gameList.length > 0) {
      let tiles = document.getElementsByClassName("tile")
      for (let i = 0; i < tiles.length; i++) {
        tiles[i].classList.remove("tile--active")
        tiles[i].classList.remove("tile--match")
        tiles[i].setAttribute("check", "false")
        setCheckList([])
      }
    }
    setGameList(shuffle(flatten(getLast(shuffle(pairs)))))
  }

  const toggle = (target) => {
    if (target.getAttribute("check") === "true") {
      target.setAttribute("check", "false")
      target.classList.remove("tile--active")
    } else {
      target.setAttribute("check", "true")
      target.classList.add("tile--active")
    }
  }

  const checkForMatch = (tile1, tile2) => {
    if (tile1.getAttribute("tileid") === tile2.getAttribute("tileid")) {
      tile1.setAttribute("check", "match")
      tile2.setAttribute("check", "match")
      return true
    }
    return false
  };

  const handleClick = (event) => {
    let tile = event.target
    if (tile.getAttribute("check") === "match") {
      return;
    }

    if (tile !== checkList[0]) {
      toggle(tile)
      setCheckList([...checkList, tile])
    } else {
      toggle(tile)
      setCheckList([])
    }
  };

  const getStartButtonText = () => {
    return gameList.length < 1 ? "Start Game" : "Reset Game"
  }

  // const handleShuffleClick = () => {
  //   setInterval(() => {
  //     setTileShuffle(true)
  //     setTimeout(() => {
  //       setTileShuffle(false)
  //       startGame()
  //     }, 400)
  //   }, 10000)
  // }

  return (
    <div className="game">
      <div className="game__top">
        <h2>Match the vocabulary words with the correct definition.</h2>
      </div>
      <div className="tileContainer">
        {gameList.map((item, index) => {
          return (
            <Tile
              text={item.text}
              tileid={item.id}
              check="false"
              key={index}
              // shuffle={tileShuffle}
              onClick={handleClick}/>
          )
        })}
      </div>
      <div className="game__bar">
        {/* <Timer start={gameList.length > 0 ? true : false} /> */}
        <button onClick={startGame}>{getStartButtonText()}</button>
        {/* <button onClick={handleShuffleClick}>shuffle</button> */}
      </div>
    </div>
  )
}

export default Game
