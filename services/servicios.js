const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Servicios {
  constructor() {

  };

  async Agregar(Servicio, Descripcion, Telefono, Correo, Precio, Experto) {
    let resultado;
    try {
      resultado = await prisma.servicios.create({
        data: {
          nombreDelServicio: Servicio,
          descripcionDelServicio: Descripcion,
          telefonoDeContacto: Telefono,
          correoDeContacto: Correo,
          precioDelServicio: Precio,
          nombreDelExperto: Experto
        },
      });

      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se creo un servicio`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo crear el servicio ${Servicio} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Actualizar(serviciosId, Servicio,Descripcion,Telefono,Correo,Precio,Experto) {
    let resultado;
    try {
      resultado = await prisma.servicios.update({
        where: { serviciosId: parseInt(serviciosId) },
        data: {
          nombreDelServicio: Servicio,
          descripcionDelServicio: Descripcion,
          telefonoDeContacto: Telefono,
          correoDeContacto: Correo,
          precioDelServicio: Precio,
          nombreDelExperto: Experto,
        },
      });

      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se actualizo un servicio`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo actualizar el servicio ${Servicio} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Borrar(serviciosId) {
    let resultado;
    try {
      resultado = await prisma.servicios.delete({
        where: {
          serviciosId: parseInt(serviciosId),
        },
      });

      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se borro el servicio`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo borrar el servicio ${Servicio} debido al error: ${error}`
      );
    }
    return resultado;
  }

  Listar(serviciosId) {
    let servicios;
    if (serviciosId === undefined) {
      servicios = prisma.servicios.findMany();
    } else {
      servicios = prisma.servicios.findMany({
        where: {
          serviciosId: parseInt(serviciosId),
        },
      });
    }
    return servicios;
  }
}

module.exports = Servicios;
