import pool from "../config/db.js";

const tableName = "public.\"user\"";

export const getAllUsersService = async () => {
    const result =await pool.query(`SELECT * FROM ${tableName}`);
    return result.rows;
};

export const getUserAuthService = async (username,password) => {
    const result =await pool.query(`SELECT * FROM ${tableName} where username=$1 and password=$2`,[username,password]);
    return result.rows[0];
};

export const getUserByIdService = async (id) => {
    const result =await pool.query(`SELECT * FROM ${tableName} where id=$1`,[id]);
    return result.rows[0];
};
export const createUserService = async (cid,username,password,type,permission) => {
    const result =await pool.query(`INSERT INTO ${tableName} (cid,username,password,type,permission,active,createdat,modifiedat) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`,[cid,username,password,type,permission,true,new Date(),new Date()]);
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
