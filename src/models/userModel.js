import pool from "../config/db.js";

const tableName = "public.\"user\"";

export const getAllUsersService = async (cid) => {
    const result =await pool.query(`SELECT * FROM ${tableName} where cid=$1`,[cid]);
    return result.rows;
};

export const getUserAuthService = async (username,password) => {
    const result =await pool.query(`SELECT * FROM ${tableName} where username=$1 and password=$2`,[username,password]);
    return result.rows[0];
};

export const getUserByIdService = async (cid,id) => {
    const result =await pool.query(`SELECT * FROM ${tableName} where id=$1 and cid=$2`,[id,cid]);
    return result.rows[0];
};
export const createUserService = async (cid,username,password,role,permission,email,cell,rating,status,profilepic,fullname,accounttype) => {
    const result =await pool.query(`INSERT INTO ${tableName} (cid,username,password,role,permission,status,createdat,modifiedat,email,cell,rating,profilepic,fullname,accounttype) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14) RETURNING *`,[cid,username,password,role,permission,status,new Date(),new Date(),email,cell,rating,profilepic,fullname,accounttype]);
    return result.rows[0];
};
export const updateUserService = async (cid, id, password, role, permission, email, cell, rating, status, profilepic, fullname, accounttype) => {
    const result = await pool.query(`UPDATE ${tableName} set password=$3,role=$4,permission=$5,email=$6, cell=$7, rating=$8, status=$9, profilepic=$10, fullname=$11, accounttype=$12 where id=$2 and cid=$1 RETURNING *`, [cid, id, password, role, permission, email, cell, rating, status, profilepic, fullname, accounttype]);
    return result.rows[0];
};
export const deleteUserService = async (cid,id) => {
    const result =await pool.query(`DELETE FROM ${tableName} where id=$1 and cid=$2 RETURNING *`,[id,cid]);
    return result.rows[0];
};
