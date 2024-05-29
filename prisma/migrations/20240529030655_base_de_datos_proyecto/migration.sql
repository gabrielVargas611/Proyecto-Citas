-- CreateTable
CREATE TABLE `Servicios` (
    `serviciosId` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreDelServicio` VARCHAR(191) NOT NULL,
    `descripcionDelServicio` VARCHAR(191) NOT NULL,
    `telefonoDeContacto` VARCHAR(191) NOT NULL,
    `correoDeContacto` VARCHAR(191) NOT NULL,
    `precioDelServicio` INTEGER NOT NULL,
    `nombreDelExperto` VARCHAR(191) NOT NULL,
    `FechaDeCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`serviciosId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solicitantes` (
    `solicitantesId` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreDelSolicitante` VARCHAR(191) NOT NULL,
    `telefonoDelSolicitante` VARCHAR(191) NOT NULL,
    `correoDelSolicitante` VARCHAR(191) NOT NULL,
    `claveDelSolicitante` VARCHAR(191) NOT NULL,
    `FechaDeCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`solicitantesId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Solicitudes` (
    `solicitudesId` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcionDeSolicitid` VARCHAR(191) NOT NULL,
    `fechaSolicitud` DATETIME(3) NOT NULL,
    `confirmacion` VARCHAR(191) NOT NULL DEFAULT 'Por Confirmar',
    `IdDelservicio` INTEGER NOT NULL,
    `IdDelsolicitante` INTEGER NOT NULL,
    `FechaDeCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`solicitudesId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Programaciones` (
    `programacionesId` INTEGER NOT NULL AUTO_INCREMENT,
    `fechaInicioDisponible` DATETIME(3) NOT NULL,
    `fechaFinalDisponible` DATETIME(3) NOT NULL,
    `IdDelServicio` INTEGER NOT NULL,
    `FechaDeCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`programacionesId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Usuarios` (
    `usuariosID` INTEGER NOT NULL AUTO_INCREMENT,
    `nombreDelUsuario` VARCHAR(191) NOT NULL,
    `claveDelUsuario` VARCHAR(191) NOT NULL,
    `FechaDeCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`usuariosID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Auditorias` (
    `auditoriaID` INTEGER NOT NULL AUTO_INCREMENT,
    `descripcionDeAccion` VARCHAR(191) NOT NULL,
    `IdDelSolicitante` INTEGER NULL,
    `IdDelUsuario` INTEGER NOT NULL,
    `FechaDeCreacion` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `ActualizadoEn` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`auditoriaID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Solicitudes` ADD CONSTRAINT `Solicitudes_IdDelservicio_fkey` FOREIGN KEY (`IdDelservicio`) REFERENCES `Servicios`(`serviciosId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Solicitudes` ADD CONSTRAINT `Solicitudes_IdDelsolicitante_fkey` FOREIGN KEY (`IdDelsolicitante`) REFERENCES `Solicitantes`(`solicitantesId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Programaciones` ADD CONSTRAINT `Programaciones_IdDelServicio_fkey` FOREIGN KEY (`IdDelServicio`) REFERENCES `Servicios`(`serviciosId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auditorias` ADD CONSTRAINT `Auditorias_IdDelSolicitante_fkey` FOREIGN KEY (`IdDelSolicitante`) REFERENCES `Solicitantes`(`solicitantesId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Auditorias` ADD CONSTRAINT `Auditorias_IdDelUsuario_fkey` FOREIGN KEY (`IdDelUsuario`) REFERENCES `Usuarios`(`usuariosID`) ON DELETE RESTRICT ON UPDATE CASCADE;
