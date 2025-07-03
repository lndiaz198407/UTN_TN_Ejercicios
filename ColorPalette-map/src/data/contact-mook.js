 const mook_data = {
    contacts:[     
      {
        id: 1,
        name:'Luis',
        last_time_connected:'13:39',
        img:"https://www.ionlitio.com/images/2009/04/saint_seiya_personajes_seiya.jpg",
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
        name:'Horacio',
        last_time_connected:'13:39',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdk_wbXRN0L3zeDcS5YPMsI1bbBebjh7XcC_Lii6ggVr3m__Km3BcThZthBDdTfkLv3to&usqp=CAU",
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
        name:'Horacio',
        last_time_connected:'13:39',
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBEgpzxL42GTzffcywYUzzcj1utrewm5TK6TgLZ5by-ws3bD6scXOK5l-GdSXdhs2LgdA&usqp=CAU",
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