// El state es reactivo y cuando hay un cambio vamos a notificar a todos los componentes

export default () => ({
    
    isLoading:true,
    entries:[
        {
            id: new Date().getTime(),
            date: new Date().toDateString(),
            text: 'Deserunt dolor fugiat velit cupidatat culpa do. Enim magna qui occaecat pariatur cillum deserunt excepteur incididunt laboris. Eiusmod nulla consequat irure incididunt aute. Nisi elit dolore exercitation id enim anim.',
            picture:null,
        },
        {
            id: new Date().getTime() + 1000 ,
            date: new Date().toDateString(),
            text: 'Occaecat non culpa sit nulla non ullamco ad anim sunt ad. Ullamco minim deserunt minim deserunt cupidatat tempor ea reprehenderit. Nulla ea nulla officia excepteur in id tempor. Veniam nisi tempor anim excepteur labore et id incididunt eu commodo adipisicing aliquip laborum. Deserunt cillum nisi ea nisi officia nostrud incididunt aliquip. Commodo ullamco fugiat sit consectetur consequat officia quis ea. Et deserunt officia ea eu enim.',
            picture:null,
        },
        {
            id: new Date().getTime() + 2000 ,
            date: new Date().toDateString(),
            text: 'Anim incididunt do velit voluptate. Occaecat exercitation ad amet aliquip ullamco anim laboris. Esse mollit aliqua ea sit consequat esse nostrud ex id. Dolor amet do qui eu velit.',
            picture:null,
        }
    ]
    
})