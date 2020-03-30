const Pool=require("pg").Pool;


const pool=Pool(
    {
        user:"postgres",
        password:"postgres123",
        host:"localhost",
        port:5432,
        database:"perntodo"


    }
);

module.exports=pool;