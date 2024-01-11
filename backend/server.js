import express from 'express'
import pg from 'pg'
import cors from 'cors'
import 'dotenv/config'
import dotenv  from "dotenv"
dotenv.config()

const app = express();
app.use(express.json());
app.use(cors());
const port = 4000;
const db = new pg.Client({
    user: process.env.ID,
    host: process.env.HOST,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: 5432
});

db.connect();


app.post("/register",(req,res)=>{
    console.log(req.body)
    const roll = req.body.rollnumber;
    const password = req.body.password;
    const name = req.body.name;
    
    const SQL = `INSERT INTO users(name,rollnumber,password) VALUES($1,$2,$3)`;
    db.query(SQL,[name,roll,password],(err,data)=>{
        if(err){
            console.log(err);
            return res.sendStatus(304);
            
        }
        else{
            console.log(data)
            return res.sendStatus(200)
        }
    })

})


app.post("/login",(req,res)=>{
    console.log(req.body);
    const roll = req.body.rollnumber;
    // console.log(roll)
    const password = req.body.password;
    const SQL = `SELECT * FROM users WHERE rollnumber = $1 AND password = $2`;
    db.query(SQL,[roll,password],(err,data)=>{
        if(err){
            console.log(err);
            return res.json(err);
        }
        else{
            console.log(data.rows.length)
            if(data.rows.length==0){
            const SQL2 = `SELECT * FROM users WHERE rollnumber = $1`;
            db.query(SQL2,[roll],(err,data)=>{
                if(err){
                    console.log(err);
                    return res.json(err);
                }
                else{
                    console.log(data.rows.length)
                    if(data.rows.length==0){
                        return res.sendStatus(404);
                    }
                    else{
                        return res.sendStatus(304);
                    }
                }
            })
            
            }
            else{
                db.query(`SELECT name FROM users WHERE rollnumber = $1`,[roll],(err,data)=>{
                    if(err){
                        console.log(err);
                        return res.json(err);
                    }
                    else{
                        console.log(data.rows[0].name);
                        return res.json(data.rows[0].name).sendStatus(200);
                    }
                })
            }
        }
    })


});

app.post("/placeorder",(req,res)=>{
    console.log(req.body);
    const item = req.body.item
    const quantity = req.body.quantity
    const method = req.body.method

    const SQL = `INSERT INTO orders(item,quantity,mode) VALUES($1,$2,$3)`
    db.query(SQL,[item,quantity,method],(err,data)=>{
        if(err){
            console.log(err);
            return res.json(err);
        }
        else{
            return res.sendStatus(200);
        }
    })
})


app.listen(port,()=>{
    console.log(`Server is running on port ${port}`)
})
