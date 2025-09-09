import pool from "../config/db.js";

const tableName = "public.\"logs\"";

export const getAllLogsService = async (cid) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where cid=$1 ORDER BY id ASC `, [cid]);
    return result.rows;
};

export const getLogsByIdService = async (cid, id) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where id=$1 and cid=$2`, [id, cid]);
    return result.rows[0];
};
export const createLogsService = async (cid, ltype, lid, lname, userid, status) => {
    const result = await pool.query(`INSERT INTO ${tableName} (cid,ltype, lid, lname, userid, createdat, status) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`, [cid, ltype, lid, lname, userid, new Date(), status]);
    return result.rows[0];
};
export const updateLogsService = async (cid, id, ltype, lid, lname, userid, status) => {
    const result = await pool.query(`UPDATE ${tableName} set ltype=$3, lid=$4, lname=$5, userid=$6,status=$7,createdat=$8 where id=$2 and cid=$1 RETURNING *`, [cid, id, ltype, lid, lname, userid, status, new Date()]);
    return result.rows[0];
};



