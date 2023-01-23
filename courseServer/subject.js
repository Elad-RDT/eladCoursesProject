const express = require('express');
const router = express.Router();
const db=require('./db')


//add new subject

router.post('/', async (req,res)=>{
    const {subject_id, subject , rating ,level}=req.body



    //checks id the rating is between 1-5. else return an error
    if (rating < 1 || rating > 5) {
        res.status(400).send('Invalid rating format. Rating should be a number between 1 and 5');
        return;
    }

    if (!["Easy","Medium","Hard","Expert"].includes(level)) {
        res.status(400).send('Invalid level format. Level should be a string of either "easy","medium","hard","expert"');
        return;
    }


    const add= `INSERT INTO subject (subject_id,subject,rating,level) VALUES('${subject_id}', '${subject}', '${rating}', '${level}')`
    
    
    try{
        const result = await db.query(add);
        res.send(result)
    }
    catch{
        res.status(400).send('error')
    }
})

router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { subject, rating, level } = req.body;
    const query = `UPDATE subject SET subject = '${subject}', rating = '${rating}', level = '${level}' WHERE subject_id = ${id}`;
    try {
        const result = await db.query(query);
        res.send('Subject updated successfully');
    } catch (error) {
        res.status(400).send(error);
    }
});


//get all subjects

router.get('/', async(req,res)=>{
    const query = `SELECT * FROM subject`

    try{
        const result= await db.query(query)
        res.send(result)
    }catch{
        res.status(400).send('error')
    }
   
})

//get subject by id

router.get('/:id', async(req,res)=>{
    const { id } = req.params;
    const query = `SELECT * FROM subject WHERE subject_id = ${id}`;

    try{
        const result= await db.query(query)
        res.send(result)
    }catch{
        res.status(400).send('error')
    }
   
})





module.exports=router

