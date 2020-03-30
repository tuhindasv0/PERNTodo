const Pool=require("pg").Pool;


const pool=Pool(
    {
        user:"postgres",
        password:"postgres123",
        host:"loicalhost",
        port:5432,
        database:"perntodo"


    }
);

module.exports=pool;