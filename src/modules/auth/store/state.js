// El state es reactivo y cuando hay un cambio vamos a notificar a todos los componentes

export default () => ({
    
    status: 'authenticating' , //'authenticated', 'not-authenticated', 'authenticating'
    user:null,
    idToken:null,
    refreshToken:null
})