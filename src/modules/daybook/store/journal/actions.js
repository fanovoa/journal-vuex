// Son tareas asincronas que puede llamar una mutacion

import journalApi from "@/api/journalApi"

// export const myAction = async({ commit }) => {
    
// }


export const loadEntries = async ( { commit } ) => {

    const { data } = await journalApi.get('/entries.json')

    if( !data ){
        commit('setEntries', [ ] )
        return 
    }

    const entries = []
    for(let id of Object.keys( data)  ){
        entries.push({
            id,
            ...data[id]
        })
    }

    commit('setEntries', entries )

}

export const updateEntry = async ( { commit }, entry) => {

// console.log( commit, entry)
const {id, date, picture ,text } = entry
const dataToSave={ date, picture, text }

const respuesta = await journalApi.put(`/entries/${id}.json`, dataToSave)

commit('updateEntry', {...entry} ) 
}

export const createEntry = async ( { commit }, entry ) => {

    const { date, text, picture} = entry
    const dataToSave = {date,text}
    
    const { data } = await journalApi.post('/entries.json',dataToSave )

    entry.id=data.name

    commit('addEntry', { ...entry } )

    return data.name

}


export const deleteEntry = async({ commit }, id ) => {
    
 await journalApi.delete(`/entries/${id}.json`)
commit('deleteEntry', id)

}

