const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Servicios {
  constructor() {}

  async Agregar(Servicio) {
    let resultado;
    try {
      resultado = await prisma.servicios.create({
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
          descripcionDeAccion: `Se creo un servicio para: ${nombre}`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo crear el servicio ${Servicio} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Actualizar(ServicioId, Servicio) {
    let resultado;
    try {
      resultado = await prisma.servicios.update({
        where: { ServicioId: parseInt(ServicioId) },
        data: {
          nombreDelServicio: Provincia,
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
          descripcionDeAccion: `Se actualizo el servicio: ${nombre}`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo actualizar el servicio ${Servicio} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Borrar(ServicioId) {
    let resultado;
    try {
      resultado = await prisma.servicios.delete({
        where: {
          ServicioId: parseInt(ServicioId),
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se borro el servicio: ${nombre}`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo borrar el servicio ${Servicio} debido al error: ${error}`
      );
    }
    return resultado;
  }

  Listar(ServicioId) {
    let servicios;
    if (ServicioId === undefined) {
      servicios = prisma.servicios.findMany();
    } else {
      servicios = prisma.servicios.findMany({
        where: {
          ServicioId: parseInt(ServicioId),
        },
      });
    }
    return servicios;
  }
}

module.exports = Servicios;
