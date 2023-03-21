CREATE TABLE `users` (
    `id` INT NOT NULL AUTO_INCREMENT , 
    `name` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , 
    `email` VARCHAR(100) CHARACTER SET utf8 COLLATE utf8_general_ci NOT NULL , 
    `password` VARCHAR(100) NOT NULL , 
    `verified` BOOLEAN NOT NULL DEFAULT FALSE , 
    `created_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    `updated_at` DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP , 
    PRIMARY KEY (`id`), 
    UNIQUE (`email`)
) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;