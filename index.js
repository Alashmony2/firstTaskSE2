import express from "express";

const app =express();

const students =[
    {
        id:1,
        name:"ahmed",
        city:"shibeen"
    },
    {
        id:2,
        name:"samy",
        city:"tanta"
    },
    {
        id:3,
        name:"jony",
        city:"london"
    },
];


const studentsFunction = (request,response)=>{
    let output ='<ul>'

    for(let i =0;i<students.length;i++){
        const student =students[i];
        output+='<li>'+student.name+'</li>';
    }

    output +='</ul>'
    response.send(output)
};

app.get('/students',studentsFunction);




app.listen(5000);