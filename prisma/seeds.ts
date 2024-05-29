import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
  //Servicios
  await prisma.servicios.createMany({
    data: [
      {
        nombreDelServicio: "Conta express",
        descripcionDelServicio:
          "Servicio de COntabilidad para tu empresa o persona",
        telefonoDeContacto: "888-999-555",
        correoDeContacto: "contaExpress@gmail.com",
        precioDelServicio: 300,
        nombreDelExperto: "Fabricio Jimenez",
      },
      {
        nombreDelServicio: "Limpeza Honesta",
        descripcionDelServicio: "Servicio de Limpieza a domicilio",
        telefonoDeContacto: "563-874-357",
        correoDeContacto: "limpiezaH@outlook.com",
        precioDelServicio: 230,
        nombreDelExperto: "Alberto Rodriguez",
      },
      {
        nombreDelServicio: "Progama Feliz",
        descripcionDelServicio:
          "Servicio de Desarollo del software para tu empresa o persona",
        telefonoDeContacto: "756-984-125",
        correoDeContacto: "softwareFeliz@gmail.com",
        precioDelServicio: 300,
        nombreDelExperto: "Gilberto Garcia",
      },
      {
        nombreDelServicio: "Valet Extreme",
        descripcionDelServicio:
          "Brindamos servicio de valet para tus eventos especiales",
        telefonoDeContacto: "999-666-333",
        correoDeContacto: "parkingExpert@yahoo.com",
        precioDelServicio: 6000,
        nombreDelExperto: "Florin Granado",
      },
      {
        nombreDelServicio: "Proteccion Tota;",
        descripcionDelServicio: "Brindamos seguridad privada",
        telefonoDeContacto: "777-555-111",
        correoDeContacto: "protSec35@yahoo.com",
        precioDelServicio: 9800,
        nombreDelExperto: "Luis Miguel",
      },
      {
        nombreDelServicio: "Crimen COntrolado",
        descripcionDelServicio:
          "Ofrecemos la disponibilidad de desaparecer a esa persona que odias",
        telefonoDeContacto: "555-222-333",
        correoDeContacto: "hitmanHire@gmail.com",
        precioDelServicio: 300,
        nombreDelExperto: "Rafaela Parejo",
      },
      {
        nombreDelServicio: "Arreglos Expertos",
        descripcionDelServicio:
          "Reparamos todo lo que en su casa ya no funciona",
        telefonoDeContacto: "999-333-111",
        correoDeContacto: "reparaTodo@hotmail.com",
        precioDelServicio: 100,
        nombreDelExperto: "Maria Cristina",
      },
      {
        nombreDelServicio: "Mantenimeinto Maestro",
        descripcionDelServicio:
          "Le damos manteniemnto preventivo a cualquiera de sus electrodomesticos",
        telefonoDeContacto: "888-222-333",
        correoDeContacto: "mantenM@gmail.com",
        precioDelServicio: 600,
        nombreDelExperto: "Eneko Veiga",
      },
      {
        nombreDelServicio: "El ladron de coches",
        descripcionDelServicio:
          "Le ofrecemos robarle cualquier tipo de coche para usted",
        telefonoDeContacto: "744-555-111",
        correoDeContacto: "cocheRobador@yahoo.com",
        precioDelServicio: 800,
        nombreDelExperto: "Ferran Cubero",
      },
      {
        nombreDelServicio: "Leyes Seguras",
        descripcionDelServicio:
          "Abogado ofrece sus servicios para cualquier situacion legal en la que se encuentra",
        telefonoDeContacto: "555-777-333",
        correoDeContacto: "leyesS@hotmail.com",
        precioDelServicio: 800,
        nombreDelExperto: "Hipolito Vilches",
      },
    ],
  });
  //Solicitantes
  await prisma.solicitantes.createMany({
    data: [
      {
        nombreDelSolicitante: "Manuela Arias",
        telefonoDelSolicitante: "999-666-555",
        correoDelSolicitante: "manuela456@yahoo.com",
        claveDelSolicitante: "abc123",
      },
      {
        nombreDelSolicitante: "Rosa Maria",
        telefonoDelSolicitante: "874-632-951",
        correoDelSolicitante: "Rmaria90@yahoo.com",
        claveDelSolicitante: "RicardoHora56",
      },
      {
        nombreDelSolicitante: "Rufino Palomino",
        telefonoDelSolicitante: "777-663-224",
        correoDelSolicitante: "rulfinonba@gmail.com",
        claveDelSolicitante: "fabrinoestrella789",
      },
      {
        nombreDelSolicitante: "Jose Jesus",
        telefonoDelSolicitante: "998-741-520",
        correoDelSolicitante: "jjexplorador@hotmail.com",
        claveDelSolicitante: "fifaporsiempre5",
      },
      {
        nombreDelSolicitante: "Emiliana Casado",
        telefonoDelSolicitante: "785-632-951",
        correoDelSolicitante: "emiliC132@yahoo.com",
        claveDelSolicitante: "EmiEstrella89",
      },
      {
        nombreDelSolicitante: "Regina Climent",
        telefonoDelSolicitante: "965-377-555",
        correoDelSolicitante: "regHero@yahoo.com",
        claveDelSolicitante: "hereandnowPeli",
      },
      {
        nombreDelSolicitante: "Palmira Peñalver",
        telefonoDelSolicitante: "753-999-111",
        correoDelSolicitante: "palm2024@hotmail.com",
        claveDelSolicitante: "soyPalira23",
      },
      {
        nombreDelSolicitante: "Pablo Falcon",
        telefonoDelSolicitante: "333-777-555",
        correoDelSolicitante: "falconP@gmail.com",
        claveDelSolicitante: "comicFalcon23",
      },
      {
        nombreDelSolicitante: "Cesar Afonso",
        telefonoDelSolicitante: "964-372-861",
        correoDelSolicitante: "cesarAfs@yahoo.com",
        claveDelSolicitante: "ceasarLegion54",
      },
      {
        nombreDelSolicitante: "Anton Arroyo",
        telefonoDelSolicitante: "94-786-353",
        correoDelSolicitante: "aaInter@hotmail.com",
        claveDelSolicitante: "inteMilan1995",
      },
    ],
  });
  //Soliciudes
  await prisma.solicitudes.createMany({
    data: [
        {
            descripcionDeSolicitid:'Ocupo seguridad para mi negocio el dia de descuentos del mes',
            fechaSolicitud: '2024-05-05',
            IdDelservicio: 5,
            IdDelsolicitante: 4
        },
        {
            descripcionDeSolicitid:'ocupo de los servicos de contabilidad para mi negocio de venta de llantas',
            fechaSolicitud:'2024-05-01',
            IdDelservicio: 1,
            IdDelsolicitante: 1
        },
        {
            descripcionDeSolicitid:'Ocupo que mi esposa desapareca para cobrar su seguro de vida',
            fechaSolicitud:'2024-01-01',
            IdDelservicio: 6,
            IdDelsolicitante: 1
        },
        {
            descripcionDeSolicitid:'Necesito que le den mantenimiento a mi lavadora',
            fechaSolicitud:'2024-05-31',
            IdDelservicio: 8,
            IdDelsolicitante: 7
        },
        {
            descripcionDeSolicitid:'Ocupo conseguir un Yaris 2022',
            fechaSolicitud:'2024-05-15',
            IdDelservicio: 9,
            IdDelsolicitante: 9 
        },
        {
            descripcionDeSolicitid:'Ocupo que me ayuden a limpiar la oficina luego de la fiesta empresarial',
            fechaSolicitud:'2024-05-20',
            IdDelservicio: 2,
            IdDelsolicitante: 6
        },
        {
            descripcionDeSolicitid:'Me gustaria que me creen un programa para poder rastrear en que invierto mi tiempo',
            fechaSolicitud:'2024-05-28',
            IdDelservicio: 3,
            IdDelsolicitante: 2
        },
        {
            descripcionDeSolicitid:'Me gustaria que nos ayuden a limpiar la casa',
            fechaSolicitud:'2024-05-8',
            IdDelservicio: 2,
            IdDelsolicitante: 10
        },
        {
            descripcionDeSolicitid:'Me gustaria proteccion para el translado de mercaderia de una bodega a otra',
            fechaSolicitud:'2024-05-15',
            IdDelservicio: 5,
            IdDelsolicitante: 3
        },
        {
            descripcionDeSolicitid:'Me gustaria ver si me pueden reparar el calentador de agua de la casa',
            fechaSolicitud:'2024-05-29',
            IdDelservicio: 7,
            IdDelsolicitante: 6
        }
    ]
  })
  //
}
