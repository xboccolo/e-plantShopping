import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => { // state rappresenta il carrello un istante prima del click.
      // può essere un array vuoto o avere già degli oggetti al suo interno
      // mentre action è il pacchetto postale che contiene l'ordine.
      // il contenuto dell'action è action.payload, un oggetto pianta con tutti i suoi attributi.
      const { name, image, cost } = action.payload; // destrutturo gli elementi partendo dalla payload.
      // verifico se l'item esiste già nel carrello. se sì aumento la quantità, altrimenti lo aggiungo e basta alla lista.
      const existingItem = state.items.find( item => item.name === name );
      if (existingItem) {
        existingItem.quantity++;
      } else {
        state.items.push( {name, image, cost, quantity: 1} );
      }
    },
    removeItem: (state, action) => {
      // basta questa riga perché filter è un metodo che crea un nuovo array di oggetti
      // che superano la condizione data. Quindi non viene cancellato qualcosa
      // dall'array originale.
      state.items = state.items.filter(item => item.name !== name);
    },
    updateQuantity: (state, action) => {
      const { name, quantity } = action.payload;
      // state.items contiene la lista di tutte le piante scelte fino a questo momento.
      // cerco attraverso il find nella lista una pianta con lo stesso nome di quella appena aggiunta
      // se lo trova salva quell'oggetto dentro la const itemToUpdate.
      // in caso la trova fa un update della quantità già controllata attraverso 
      // il reducer add.
      const itemToUpdate = state.items.find( item => item.name === name);
      if (itemToUpdate) {
        itemToUpdate.quantity = quantity; // se trovi questo item, aggiorna la sua quantità.
      } 
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;

