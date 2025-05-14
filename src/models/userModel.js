import pool from "../config/db.js";

const tableName = "public.\"user\"";

export const getAllUsersService = async () => {
    const result =await pool.query(`SELECT * FROM ${tableName}`);
    return result.rows;
};

export const getUserByIdService = async (id) => {
    const result =await pool.query(`SELECT * FROM ${tableName} where id=$1`,[id]);
    return result.rows[0];
};
export const createUserService = async (cid,username,password,type,permission) => {
    const result =await pool.query(`INSERT INTO ${tableName} (cid,username,password,type,permission) VALUES ($1,$2,$3,$4,$5) RETURNING *`,[cid,username,password,type,permission]);
    return result.rows[0];
};
export const updateUserService = async (id,password) => {
    const result =await pool.query(`UPDATE ${tableName} set password=$1 where id=$2 RETURNING *`,[password,id]);
    return result.rows[0];
};
export const deleteUserService = async (id) => {
    const result =await pool.query(`DELETE FROM ${tableName} where id=$1 RETURNING *`,[id]);
    return result.rows[0];
};
