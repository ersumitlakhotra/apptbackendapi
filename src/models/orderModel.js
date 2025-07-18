import pool from "../config/db.js";
const tableName = "public.\"order\"";

export const getAllOrderService = async (cid) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where cid=$1 ORDER BY order_no desc`, [cid]);
    return result.rows;
};
export const getOrderByIdService = async (cid,id) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where id=$1 and cid=$2`, [id, cid]);
    return result.rows[0];
};
export const createOrderService = async (cid, customerinfo, serviceinfo, price, status, trndate, assignedto, slot) => {
    const result = await pool.query(`INSERT INTO ${tableName} (cid, customerinfo, serviceinfo, price, status, trndate, assignedto, slot,createdat,modifiedat) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`, [cid, customerinfo, serviceinfo, price, status, trndate, assignedto, slot,new Date(), new Date()]);
    return result.rows[0];
};
export const updateOrderService = async (cid, id, customerinfo, serviceinfo, price, status, trndate, assignedto, slot) => {
    const result = await pool.query(`UPDATE ${tableName} set  customerinfo=$3, serviceinfo=$4, price=$5, status=$6, trndate=$7, assignedto=$8, slot=$9, modifiedat=$10 where id=$2 and cid=$1  RETURNING *`, [cid, id, customerinfo, serviceinfo, price, status, trndate, assignedto, slot,new Date()]);
    return result.rows[0];
};