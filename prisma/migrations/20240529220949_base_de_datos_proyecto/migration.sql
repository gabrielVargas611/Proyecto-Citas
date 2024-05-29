-- DropForeignKey
ALTER TABLE `auditorias` DROP FOREIGN KEY `Auditorias_IdDelUsuario_fkey`;

-- AlterTable
ALTER TABLE `auditorias` MODIFY `IdDelUsuario` INTEGER NULL;

-- AddForeignKey
ALTER TABLE `Auditorias` ADD CONSTRAINT `Auditorias_IdDelUsuario_fkey` FOREIGN KEY (`IdDelUsuario`) REFERENCES `Usuarios`(`usuariosID`) ON DELETE SET NULL ON UPDATE CASCADE;
