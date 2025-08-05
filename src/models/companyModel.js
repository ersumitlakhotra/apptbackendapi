import pool from "../config/db.js";

export const getAllCompanyService = async () => {
    const result =await pool.query(`SELECT * FROM company`);
    return result.rows;
};
export const getCompanyByIdService = async (cid) => {
    const result = await pool.query(`SELECT * FROM company where id=$1`, [cid]);
    return result.rows[0];
};
export const createCompanyService = async (name, address, city, province, country, postal, email, cell, owner, ownercell) => {
    const result =await pool.query(`INSERT INTO company (name, address, city, province, country, postal, email, cell, owner, ownercell, createdat, active, modifiedat) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,[name, address, city, province, country, postal, email, cell, owner, ownercell, new Date(), 'true', new Date()]);
    return result.rows[0];
};

export const updateCompanyAddressInfoService = async (cid, name, cell, addressinfo) => {
    const result = await pool.query(`UPDATE company set name=$2,cell=$3,addressinfo=$4, modifiedat=$5 where id=$1 RETURNING *`, [cid, name, cell, addressinfo,new Date()]);
    return result.rows[0];
};
export const updateCompanyBillingService = async (cid, billinginfo) => {
    const result = await pool.query(`UPDATE company set billinginfo=$2, modifiedat=$3 where id=$1 RETURNING *`, [cid, billinginfo, new Date()]);
    return result.rows[0];
};
export const updateCompanySocialService = async (cid, socialinfo) => {
    const result = await pool.query(`UPDATE company set socialinfo=$2, modifiedat=$3 where id=$1 RETURNING *`, [cid, socialinfo, new Date()]);
    return result.rows[0];
};
export const updateCompanyTimingService = async (cid, timinginfo) => {
    const result = await pool.query(`UPDATE company set timinginfo=$2, modifiedat=$3 where id=$1 RETURNING *`, [cid, timinginfo, new Date()]);
    return result.rows[0];
};