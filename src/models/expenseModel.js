import pool from "../config/db.js";

const tableName = "public.\"expense\"";

export const getAllExpenseService = async (cid) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where cid=$1 ORDER BY id DESC`, [cid]);
    return result.rows;
};

export const getExpenseByIdService = async (cid, id) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where id=$1 and cid=$2`, [id, cid]);
    return result.rows[0];
};
export const createExpenseService = async (cid, etype, trndate, assignedto, amount, notes) => {
    const result = await pool.query(`INSERT INTO ${tableName} (cid,etype, trndate, assignedto, amount, notes,createdat,modifiedat) VALUES ($1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`, [cid, etype, trndate, assignedto, amount, notes, new Date(), new Date()]);
    return result.rows[0];
};
export const updateExpenseService = async (cid, id, etype, trndate, assignedto, amount, notes) => {
    const result = await pool.query(`UPDATE ${tableName} set etype=$3,trndate=$4, assignedto=$5, amount=$6, notes=$7, modifiedat=$8 where id=$2 and cid=$1 RETURNING *`, [cid, id, etype, trndate, assignedto, amount, notes, new Date()]);
    return result.rows[0];
};

export const deleteExpenseService = async (cid,id) => {
    const result = await pool.query(`DELETE FROM ${tableName} where cid=$1 and id=$2   `, [cid,id]);
    return result.rows[0];
};