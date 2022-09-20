// Traer informacion del state y poder procesarla

// export const myGetter = ( state ) => {
    // return state;
// }


export const getEntryById = ( state ) => (id ='' ) => {
 
  const entry = state.entries.find( entry => entry.id === id)
  if( !entry ) return
  return { ...entry }
}


export const getEntriesByTerm = ( state ) => ( term = '') =>  {

    if( term.length=== 0) return state.entries

  return state.entries.filter( entry => entry.text.toLowerCase().includes(term.toLocaleLowerCase() ) )
}