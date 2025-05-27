import pool from "../config/db.js";
const tableName = "public.\"order\"";

export const getAllOrderService = async () => {
    const result =await pool.query(`SELECT * FROM ${tableName}`);
    return result.rows;
};
export const getOrderByIdService = async (id) => {
    const result =await pool.query(`SELECT * FROM ${tableName} where id=$1`,[id]);
    return result.rows[0];
};
export const createOrderService = async (cid, order_id, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto) => {
    const result =await pool.query(`INSERT INTO ${tableName} (cid, order_id, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,createdat,modifiedat) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,[cid, order_id, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,new Date(), new Date()]);
    return result.rows[0];
};
export const updateOrderService = async (id, customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,modifiedat) => {
    const result =await pool.query(`UPDATE ${tableName} set  customer_name=$2, customer_email=$3, customer_phone=$4, status=$5, services=$6, price=$7, trndate=$8, clients=$9, assignedto=$10, modifiedat=$11 where id=$1 RETURNING *`,[id,customer_name, customer_email, customer_phone, status, services, price, trndate, clients,assignedto,new Date()]);
    return result.rows[0];
};