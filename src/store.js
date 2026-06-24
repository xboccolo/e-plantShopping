import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
 const store = configureStore({
    reducer: {
        cart: cartReducer,
    },
});
export default store

//la parola cartReducer l'ho inventata qui nel moemnto dell'import
//dentro CartSlice esporto CartSlice.reducer
// L'oggetto reducer definisce la struttura di tutta la tua applicazione.
// Scrivendo cart: cartReducer, stai creando un reparto ufficiale chiamato 
// cart all'interno dello stato globale, e stai dicendo che la gestione 
// di quel reparto è affidata esclusivamente alle regole scritte in cartReducer.
