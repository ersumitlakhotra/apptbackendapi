import pool from "../config/db.js";

export const getAllCompanyService = async () => {
    const result =await pool.query(`SELECT * FROM company`);
    return result.rows;
};
export const getCompanyByIdService = async (id) => {
    const result =await pool.query(`SELECT * FROM company where id=$1`,[id]);
    return result.rows[0];
};
export const createCompanyService = async (name, address, city, province, country, postal, email, cell, owner, ownercell) => {
    const result =await pool.query(`INSERT INTO company (name, address, city, province, country, postal, email, cell, owner, ownercell, createdat, active, modifiedat) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,[name, address, city, province, country, postal, email, cell, owner, ownercell, new Date(), 'true', new Date()]);
    return result.rows[0];
};
export const updateCompanyService = async (id,name, address, city, province, country, postal, email, cell, owner, ownercell,active) => {
    const result =await pool.query(`UPDATE company set name=$2, address=$3, city=$4, province=$5, country=$6, postal=$7, email=$8, cell=$9, owner=$10, ownercell=$11, active=$12, modifiedat=$13 where id=$1 RETURNING *`,[id,name, address, city, province, country, postal, email, cell, owner, ownercell,active,new Date()]);
    return result.rows[0];
};