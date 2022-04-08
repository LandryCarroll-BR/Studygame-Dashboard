import React, {useEffect} from 'react'
import './Tile.css'

function Tile( { text, onClick, tileid, check, shuffle } ) {
  // useEffect(() => {
  //   if (shuffle) {
  //     let tiles = document.getElementsByClassName("tile")
  //     for (let i = 0; i < tiles.length; i++) {
  //       tiles[i].classList.add("tile--shuffle")
  //     }
  //   } else {
  //     let tiles = document.getElementsByClassName("tile")
  //     for (let i = 0; i < tiles.length; i++) {
  //       tiles[i].classList.remove("tile--shuffle")
  //     }
  //   }
  // }, [shuffle])

  return (
    <div
      className="tile"
      tileid={tileid}
      check={check}
      onClick={onClick}>
      {text}
    </div>
  )
}

export default Tile
