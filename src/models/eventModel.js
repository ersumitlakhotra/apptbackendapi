import pool from "../config/db.js";

const tableName = "public.\"event\"";

export const getAllEventService = async (cid) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where cid=$1`, [cid]);
    return result.rows;
};

export const getEventByIdService = async (cid, id) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where id=$1 and cid=$2`, [id, cid]);
    return result.rows[0];
};
export const createEventService = async (cid, title, description, startdate, enddate, services, discounttype, discount, status) => {
    const result = await pool.query(`INSERT INTO ${tableName} (cid,title, description, startdate, enddate,services,discounttype,discount, status,createdat,modifiedat) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11) RETURNING *`, [cid, title, description, startdate, enddate, services, discounttype, discount, status, new Date(), new Date()]);
    return result.rows[0];
};
export const updateEventService = async (cid, id, title, description, startdate, enddate, services, discounttype, discount, status) => {
    const result = await pool.query(`UPDATE ${tableName} set title=$3,description=$4, startdate=$5, enddate=$6, services=$7, discounttype=$8, discount=$9, status=$10,modifiedat=$11 where id=$2 and cid=$1 RETURNING *`, [cid, id, title, description, startdate, enddate, services, discounttype, discount, status, new Date()]);
    return result.rows[0];
};