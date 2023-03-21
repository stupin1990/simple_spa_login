<?php

namespace Src\Models;

use Src\Core\DB;
use Src\Core\Config;

class User
{
    protected static string $table_name = 'users';


    /**
     * Save new record to table
     * @param array $fields - fields to select
     * @param array $values - values array
     * 
     * @return bool
     */
    public static function save(array $fields, array $values) : bool
    {
        $query = "INSERT INTO `" . static::$table_name . "` (`" . implode('`,`', $fields) ."`) VALUES (" . implode(",", array_keys($values)) . ")";
        return DB::insertRow($query, $values);
    }

    /**
     * Update existed record in table
     * @param int $id
     * @param array $fields
     * @param array $values
     * 
     * @return bool
     */
    public static function update(int $id, array $values) : bool
    {
        $update_ar = $values_ar = [];
        foreach ($values as $key => $val) {
            $update_ar[] = "`$key` = :$key";
            $values_ar[":$key"] = $val;
            
        }

        if (count($update_ar)) {
            $query = "UPDATE `" . static::$table_name . "` SET " . implode(', ', $update_ar) . " WHERE id = $id";
            return DB::updateRow($query, $values_ar);
        }

        return true;
    }

    /**
     * Get user by Id
     * @param int $id
     * 
     * @return [type]
     */
    public static function getUserById(int $id) : array
    {
        $user = DB::getRow("SELECT `id`, `name`, `email` FROM `" . static::$table_name . "` WHERE id = ?", [$id]);
        if (empty($user)) {
            return [];
        }

        return $user;
    }

    /**
     * Get user by email
     * @param string $email
     * 
     * @return [type]
     */
    public static function getUserByEmail(string $email) : array
    {
        $user = DB::getRow("SELECT `id`, `name`, `email`, `password` FROM `" . static::$table_name . "` WHERE email = ?", [$email]);
        if (empty($user)) {
            return [];
        }

        return $user;
    }

    /**
     * Get unverified users
     * @param string $email
     * 
     * @return [type]
     */
    public static function getHashedUser(string $code) : array
    {
        $user = DB::getRow("SELECT `id`, `password`, `verified` FROM `" . static::$table_name . "` WHERE sha1(CONCAT(`email`, `password`)) = ?", [$code]);
        if (empty($user)) {
            return [];
        }

        return $user;
    }

    /**
     * Get password hash
     * @param string $password
     * 
     * @return string
     */
    public static function getHashedPassword(string $password) : string
    {
        return password_hash($password, PASSWORD_BCRYPT);
    }

}
