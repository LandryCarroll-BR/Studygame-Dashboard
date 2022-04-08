import { createSlice } from '@reduxjs/toolkit';

export const gameSlice = createSlice({
  name: 'game',
  initialState: {
    gameId: "",
    gameTitle: "",
    gameWords: [
      {
        word: "word",
        def: "definition"
      }
    ]
  },
  reducers: {
    setGame: (state, action) => {
      state.gameId = action.payload.gameId;
      state.gameTitle = action.payload.gameTitle;
      state.gameWords = action.payload.gameWords;
    },
    setGameId: (state, action) => {
      state.gameId = action.payload;
    },
    setGameTitle: (state, action) => {
      state.gameTitle = action.payload;
    },
    setGameWords: (state, action) => {
      if (action.payload) {
        const uniqueWords = state.gameWords.filter((item) => item.word !== action.payload.word && item.def !== action.payload.def);
        state.gameWords = uniqueWords;
        state.gameWords = [...state.gameWords, {
          word: action.payload.word,
          def: action.payload.def,
          index: action.payload.index
        }]
      }
    },
    increment: (state) => {
      state.gameWords = [...state.gameWords, {
        word: "word",
        def: "definition"
      }]
    },
    clearGameWords: (state) => {
      state.gameWords = [];
    },
    clearGame: (state) => {
      state.gameTitle = ""
      state.gameId = ""
      state.gameWords = [
        {
          word: "word",
          def: "definition"
        }
      ]
    }
  },
});

export const { setGame, setGameId, setGameTitle, setGameWords, increment, clearGameWords, clearGame } = gameSlice.actions;

export const selectGame = state => state.game;
export const selectGameId = state => state.game.gameId;
export const selectGameTitle = state => state.game.gameTitle;
export const selectGameWords = state => state.game.gameWords;

export default gameSlice.reducer;