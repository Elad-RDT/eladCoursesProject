// const express = require('express');
// const router = express.Router();
// const db=require('./db')



// let num = 1
// router.post('/', async (req, res) => {
//     let { course_id, users_id, course_name } = req.body;
//     switch (course_name) {
//         case "javascript":
//             subject_id = 1;
//             break;
//         case "python":
//             subject_id = 2;
//             break;
//         case "docker":
//             subject_id = 3;
//             break;
//         case "java":
//             subject_id = 4;
//             break;
//         case "mongo":
//             subject_id = 5;
//             break;
//         case "SQL":
//             subject_id = 6;
//             break;
//         case "react":
//             subject_id = 7;
//             break;
//         default:
//             break;
//     }
//     let x = course_name+num
//     course_name=x
//     console.log('course name : '+ course_name)
//     let students_count = `SELECT COUNT(users_id) FROM courses WHERE course_name = ${course_name} AND subject_id =${subject_id} `;

//     let existingCourse = await db.query('SELECT * FROM courses WHERE users_id = $1 AND subject_id = $2', [users_id, subject_id]);
//     if (existingCourse.rows.length > 0) {
//         return res.status(400).send("A course with the same subject_id has already been posted by this user");
//     }
    
//     let courseCount = await db.query('SELECT COUNT(users_id) FROM courses WHERE subject_id = $1 AND course_name = $2', [subject_id, course_name]);
//     students_count = (courseCount.rows[0].count);
//     students_count = parseInt(students_count)+1

 

//     let add= `INSERT INTO courses (course_id,users_id,subject_id,course_name) VALUES( '${course_id}', '${users_id}','${subject_id}', '${course_name}')`
// console.log(students_count)
//     if(students_count<=2){
//         try{
//             const result = await db.query(add);
//             res.send(result)
//         }
//         catch{
//             res.status(400).send('error')
//         }
//     }else{
        
//         num=num+1;
//         x= req.body.course_name+num
//         course_name = x
//         let add= `INSERT INTO courses (course_id,users_id,subject_id,course_name) VALUES( '${course_id}', '${users_id}','${subject_id}', '${course_name}' )`
//         try{
//             const result = await db.query(add);
//             res.send(result)
            
//             console.log(num)
            
//         }
//         catch{
//             res.status(400).send('error')
//         }
       
//     }

// })



// router.delete('/:id', async (req,res)=>{
//     const { id } = req.params;
//     const query = `DELETE FROM courses WHERE course_id = ${id}`;

//     try {
//         const result = await db.query(query);
//         res.send('Item deleted');
//     } catch (error) {
//         res.status(400).send(error);
//     }
// });

// module.exports=router


const express = require('express');
const router = express.Router();
const db=require('./db')



// let num = 2;
router.post('/', async (req, res) => {
    let {users_id, course_name } = req.body;
    console.log(course_name)
    switch (course_name) {
        case "javascript":
            subject_id = 1;
            break;
        case "python":
            subject_id = 2;
            break;
        case "docker":
            subject_id = 3;
            break;
        case "java":
            subject_id = 4;
            break;
        case "mongo":
            subject_id = 5;
            break;
        case "SQL":
            subject_id = 6;
            break;
        case "react":
            subject_id = 7;
            break;
        default:
            break;
    }
    
    console.log('course name : '+ course_name)
    // let students_count = `SELECT COUNT(users_id) FROM courses WHERE course_name = ${course_name} AND subject_id =${subject_id} `;

    let existingCourse = await db.query('SELECT * FROM courses WHERE users_id = $1 AND subject_id = $2', [users_id, subject_id]);
    if (existingCourse.rows.length > 0) {
        return res.status(400).send("A course with the same subject_id has already been posted by this user");
    }
    
    // let courseCount = await db.query('SELECT COUNT(users_id) FROM courses WHERE subject_id = $1 AND course_name = $2', [subject_id, course_name]);
    // students_count = (courseCount.rows[0].count);
    // students_count = parseInt(students_count)+1

    
let lowestCount = Infinity;
let lowestCountCourseName = course_name;

const courseCounts = await db.query("SELECT course_name, COUNT(users_id) as user_count FROM courses WHERE subject_id = $1 GROUP BY course_name", [subject_id]);


//  console.log(courseCounts.rows[0].user_count)
if(courseCounts.rows.length>0){
 
for (let i = 0; i < courseCounts.rows.length; i++) {
    console.log('count: '+courseCounts.rows[i].user_count)
    if (courseCounts.rows[i].user_count < 2) {
        console.log('i: '+i)
        lowestCount = courseCounts.rows[i].user_count;
        lowestCountCourseName = courseCounts.rows[i].course_name;
        console.log('low: '+lowestCountCourseName)
        let add= `INSERT INTO courses (users_id,subject_id,course_name) VALUES( '${users_id}','${subject_id}', '${lowestCountCourseName}')`
        try{
            const result = await db.query(add);
           
            return res.send(result)
        }
        catch{
            res.status(400).send('error')
        }
    }
    if(courseCounts.rows[i].user_count >= 2 && i==courseCounts.rows.length-1){
        console.log(courseCounts.rows)
        let checknum = 0;
         courseCounts.rows.map((val)=>{
            if(checknum<parseInt(val.course_name.slice(-1)))
            checknum= val.course_name.slice(-1)
         })
        console.log("checknum: "+checknum)
        let num = parseInt(checknum.slice(-1))
        console.log("num "+num)
        console.log('hello')
        console.log('num at first: '+num)
        num = num+1;
        console.log("num after change: "+num)
        course_name = course_name+num
        console.log("corse name right now!: "+course_name)
        
        let add= `INSERT INTO courses (users_id,subject_id,course_name) VALUES('${users_id}','${subject_id}', '${course_name}')`
        try{
            const result = await db.query(add);
            return res.send(result)
            
        }
        catch{
            res.status(400).send('error')
        }
    }
}
}
else{
    course_name = course_name+1
        let add= `INSERT INTO courses (users_id,subject_id,course_name) VALUES('${users_id}','${subject_id}', '${course_name}')`
        try{
            const result = await db.query(add);
            return res.send(result)
            
        }
        catch{
            res.status(400).send('error')
        }
    
    
}
})

  

router.get('/:id', async(req,res)=>{
let {id} = req.params;


let query = `SELECT courses.course_name, subject.rating, subject.level 
FROM courses 
LEFT JOIN subject ON SUBSTR(courses.course_name,1,LENGTH(courses.course_name)-1)=subject.subject
WHERE courses.users_id = ${id}`;

try{
    const result= await db.query(query)
    res.send(result)
}catch{
    res.status(400).send('error')
}
})


router.delete('/', async (req, res) => {
    try {
      const { course_name, users_id } = req.body;
      const query = `DELETE FROM courses WHERE course_name = '${course_name}' AND users_id = ${users_id}`;
      const result = await db.query(query);
      if (result.rowCount === 1) {
        res.status(200).send(`Successfully deleted course ${course_name} for user ${users_id}`);
      } else {
        res.status(404).send(`No course found with name ${course_name} for user ${users_id}`);
      }
    } catch (err) {
      res.status(500).send(`Error deleting course: ${err}`);
    }
  })
  

module.exports=router

    
    

