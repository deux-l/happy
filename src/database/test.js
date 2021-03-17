const Database = require('./db')
const saveOrphanage = require('./saveOrphanage')

Database.then(async(db) => {
    //inserindo dados na tabela
    await saveOrphanage(db, {
        lat: "-22.7159645",
        lng: "-43.5585992",
        name: "Lar das meninas",
        about: "Ajudando crianças entre 5 a 15 anos que estão em situação de vulnerabilidade social",
        whatsapp: "9999999",
        images: [
            "https://images.unsplash.com/photo-1613618555970-3824d21573ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1ODE0Mjc3&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit",
            "https://images.unsplash.com/photo-1607456646762-01ef0ed469e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218fHx8fHx8fHwxNjE1ODE0MzA5&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit"
        ].toString(),
        instructions: "Venha se sentir a vontade e trazer muito amor e carinho para nosso lar",
        opening_hours: "Horários para visitas: 8hrs até 17hrs",
        open_on_weekends: "0"
    })

    //consultando dados na tabela
   const selectedOrphanages =  await db.all("SELECT * FROM orphanages")
   console.log(selectedOrphanages)

   //consultar orphanato por id
   const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "1"')
   console.log(orphanage)

   //deletar dado expecifico da tabela
   //await db.run("DELETE FROM orphanages WHERE id = '4'")
})