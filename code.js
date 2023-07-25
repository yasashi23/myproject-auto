const express =require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')
const {sebutHari2,hariChange,risetData,program} =require('./functions/function')
const axios = require('axios')
const a20 = 'k-dfcac4ac5add'
const a71 = 'k-15528d2b9b65'

const analyticsData = JSON.parse(fs.readFileSync('./analyticsSkills.json','utf-8'))
const wordDataJson = JSON.parse(fs.readFileSync('./wordData.json','utf-8'))
const jamTics = JSON.parse(fs.readFileSync('./jamAnalytics.json','utf-8'))
const dataku = JSON.parse(fs.readFileSync('data.json', 'utf-8'))
const dataKirim = JSON.parse(fs.readFileSync('siapKirim.json', 'utf-8'))
const riset = JSON.parse(fs.readFileSync('riset/riset-jam.json', 'utf-8'))
const harinya = JSON.parse(fs.readFileSync('riset/riset-hari.json', 'utf-8'))

const mySkill = JSON.parse(fs.readFileSync('mySkill.json','utf-8'))


app.set('view engine', 'ejs')
app.set('views','./views')
app.use(cors())
app.use(bodyParser.json());




app.post('/data-ku',(req,res)=>{
    const datanya = JSON.stringify(req.body)
    res.send({success: 'kamu berhasil hore'})
    const aftDat = JSON.parse(datanya)
    const skl = aftDat.Skill
    const iWant = ["HTML5","HTML","CSS","CSS 3","JavaScript","jQuery","Bootstrap","React"]
    const mySkl = skl.some(el=>iWant.includes(el))
    const nonSkl = ["Divi","Elementor","WooCommerce","WordPress Development", "WordPress Plugin","Hugo","Bubble.io","Amazon Web Services","Prototyping","Swift", "Webflow", "Laravel", "Shopify"]
    const resultSkill = skl.some(el => nonSkl.includes(el)) 
    const type = aftDat.Type
    const typeFix = type.includes("Fixed")
    const estI = aftDat.Estimasi
    const estIw = estI.replace("$","")
    const estP = parseInt(estIw)

    // my skill
    const skillCome = aftDat.Skill
    const il = mySkill.skillku
    const judul = aftDat.judul
              
                 

    if(aftDat.paymentnya === 'Payment verified'){
        if(aftDat.negara !== 'Israel'){
            if(aftDat.spendnya !== "$0"){
                // if(!resultSkill && mySkl){

                if(typeFix && estP >= 20 || !typeFix){

                    notif(skillCome,il,judul,req.body)                    

                }


                // }
            }
        }
    }else{console.log('tidak verified')}

                
            })



app.post('/notif',(req,res)=>{
    const skillDat = dataku.Skill
    const mSkill = mySkill.skillku
    
    console.log('/notif')
notif(skillDat,mSkill)


res.send('berhasil di notification')   
})
            



// const sendNew = async (s,key,key2,a) => {
//     try{
//         const url = 'http://xdroid.net/api/message?k='+key
//         const url2 = 'http://xdroid.net/api/message?k='+key2
//         const data = {t:"Job Baru",c:s}
//            const config = {
//       headers: {
//         'Content-Type': 'application/json',
//       },
//     };
//         const res = await axios.post(url,data,config)
//         const res2 = await axios.post(url2,data,config)
//         const tulis = await fs.writeFileSync('data.json', JSON.stringify(a))
//         console.log('Respons', res.data)
//     }catch(err){
//         console.error(err.message)
//     }
// }

// function notif(skillCome,il,judul,reqBody){
//     let newS = []
//     for(let i = 0; i < skillCome.length; i++){
//         const iniloh = il.findIndex(el => el === skillCome[i])
//         if(iniloh < 0) {
//             const ygbeda = skillCome[i]
//             newS.push(ygbeda)
            
//         }
//     }

//     const sklJ = skillCome.join()

//         if(newS.length === 0 ){
//             sendNew(`${judul}\n${sklJ}`,a20,a71,reqBody)
//         return console.log("ini boleh cocok")
//     }else{
//         return console.log("ini ada yg beda",newS)
//     }
// }

async function notif(skillCome,il,judul,reqBody){
    let newS = []
    for(let i = 0; i < skillCome.length; i++){
        const iniloh = il.findIndex(el => el === skillCome[i])
        if(iniloh < 0) {
            const ygbeda = skillCome[i]
            newS.push(ygbeda)
            
        }
    }
    try{
        const sklJ = skillCome.join()
        const url = 'http://xdroid.net/api/message?k='+a20
        const url2 = 'http://xdroid.net/api/message?k='+a71
        const data = {t:"Job Baru",c:`${judul}\n${sklJ}`}
        const config = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

    
        if(newS.length === 0 ){
            const res = await axios.post(url,data,config)
            const res2 = await axios.post(url2,data,config)
            console.log('Respons', res.data, res2.data)
        console.log("ini boleh cocok")
    }else{
        console.log("ini ada yg beda",newS)
    }
    const tulis = await fs.writeFileSync('data.json', JSON.stringify(reqBody))

    }catch(err){
        console.error(err.message)
    }


}



app.get('/',(req,res)=>{
    res.render('layout',{data:analyticsData})
})
app.get('/apiJam',(req,res)=>{
    res.json(jamTics)
})
app.get('/apiJudul',(req,res)=>{
    res.json(wordDataJson)
})
app.get('/api',(req,res)=>{
    res.json(analyticsData)
})



function tstx(){
    const dt = new Date()
    console.log(dt.getSeconds())
}

app.listen(3001, ()=>{
    hariChange()
})
if(dataku.judul === dataKirim.judul){
    console.log('sama')
}else{
    console.log('beda')
    risetData(riset)
    sebutHari2(harinya)
    program(riset,harinya,dataku)
     tstx()
    return false
}