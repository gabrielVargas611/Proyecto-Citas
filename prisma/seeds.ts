import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({ log: ["query"] });

async function main() {
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
    ],
  });
}
