CREATE TABLE IF NOT EXISTS registrarse(
    id BIGINT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombres VARCHAR(255) NOT NULL,
    primerAprellido  VARCHAR(255),
    segundoApellido  VARCHAR(255),
    fechaNacimiento VARCHAR(255),
    correo VARCHAR(255),
    clave VARCHAR(255),
    ubicacion VARCHAR(255),
    descripcion VARCHAR(255)
);