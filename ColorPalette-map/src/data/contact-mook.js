 const mook_data = {
    contacts:[     
      {
        id: 1,
        neme:'Luis',
        last_time_connected:'13:39',
        img:"https://img2.rtve.es/i/?w=1600&i=1460978487133.jpg",
        last_message:{
          id: 1,
          text:'Que tal Tanto tiempo'
          },
        messages:[
          {
            id: 1,
            emisor: 'YO',
            hora: '23:10',
            texto: 'Hola que tal?',
            status: 'visto'
          }
        ]
      },
      {
        id: 2,
        neme:'Horacio',
        last_time_connected:'13:39',
        img:"https://img2.rtve.es/i/?w=1600&i=1460978487133.jpg",
        last_message:{
          id: 1,
          text:'Todo Bien'
        },
        messages:[
          {
            id: 2,
            emisor: 'USUARIO',
            hora: '23:11',
            texto: 'Si, hoy aprendi estados',
            status: 'visto'
          }          
        ]
      },
      {
        id: 3,
        neme:'Horacio',
        last_time_connected:'13:39',
        img:"https://img2.rtve.es/i/?w=1600&i=1460978487133.jpg",
        last_message:{
          id: 1,
          text:'Todo Bien'
          },
        messages:[
          {
            id: 3,
            emisor: 'YO',
            hora: '23:12',
            texto: 'Eso que significa 🤓?',
            status: 'no-visto'
          },
          {
            id: 4,
            emisor: 'USUARIO',
            hora: '23:42',
            texto: 'Que estoy aprendiendo',
            status: 'no-visto'
          },
          {
            id: 5,
            emisor: 'YO',
            hora: '23:12',
            texto: 'Eso que significa 🤓?',
            status: 'no-visto'
          }
        ]  
    }

    ]
  }

export default mook_data