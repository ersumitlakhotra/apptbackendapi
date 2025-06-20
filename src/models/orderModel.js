import pool from "../config/db.js";
const tableName = "public.\"order\"";

export const getAllOrderService = async (cid) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where cid=$1`, [cid]);
    return result.rows;
};
export const getOrderByIdService = async (cid,id) => {
    const result = await pool.query(`SELECT * FROM ${tableName} where id=$1 and cid=$2`, [id, cid]);
    return result.rows[0];
};
export const createOrderService = async (cid, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto) => {
    const result =await pool.query(`INSERT INTO ${tableName} (cid, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,createdat,modifiedat) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12) RETURNING *`,[cid, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,new Date(), new Date()]);
    return result.rows[0];
};
export const updateOrderService = async (cid,id, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,modifiedat) => {
    const result = await pool.query(`UPDATE ${tableName} set  customer_name=$3, customer_email=$4, customer_phone=$5, status=$6, services=$7, price=$8, trndate=$9, clients=$10, assignedto=$11, modifiedat=$12 where id=$2 and cid=$1  RETURNING *`, [cid, id, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,new Date()]);
    return result.rows[0];
};