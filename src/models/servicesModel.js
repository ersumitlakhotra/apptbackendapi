import pool from "../config/db.js";

const tableName = "public.\"services\"";

export const getAllServicesService = async (cid) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where cid=$1`, [cid]);
    return result.rows;
};

export const getServicesByIdService = async (cid, id) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where id=$1 and cid=$2`, [id, cid]);
    return result.rows[0];
};
export const createServicesService = async (cid, title, price, timing, status) => {
    const result = await pool.query(`INSERT INTO ${tableName} (cid,title,createdat,modifiedat,price,timing,status) VALUES ($1,$2,$3,$4,$5,$6,$7) RETURNING *`, [cid, title, new Date(), new Date(), price, timing, status]);
    return result.rows[0];
};
export const updateServicesService = async (cid, id, title, price, timing,status) => {
    const result = await pool.query(`UPDATE ${tableName} set title=$3,modifiedat=$4,price=$5,timing=$6,status=$7 where id=$2 and cid=$1 RETURNING *`, [cid, id, title, new Date(), price, timing, status]);
    return result.rows[0];
};



