const fs = require('fs')
const {spawn} = require('child_process')



// hari jam
var date = new Date()
var hours = date.getHours()
var minutes = date.getMinutes()
var second = date.getSeconds()
var day = date.getDay()


const harinya = JSON.parse(fs.readFileSync('riset/riset-hari.json', 'utf-8'))
const riset = JSON.parse(fs.readFileSync('riset/riset-jam.json', 'utf-8'))

const restjam = [riset[0].jamnya,riset[1].jamnya,riset[2].jamnya,riset[3].jamnya]
const harike = [harinya[0].hari,harinya[1].hari,harinya[2].hari,harinya[3].hari,harinya[4].hari,harinya[5].hari,harinya[6].hari]



function sebutHari2(hari2,hari=harike,h=day){
    if(hari[h] === "Minggu"){
        if(hari2[0].jumlah === 0){
            hari2[0].jumlah = 1
            fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hari2))
        }else{
            hari2[0].jumlah += 1
        }
    }
    if(hari[h] === "Senin"){
        if(hari2[1].jumlah === 0){
            hari2[1].jumlah = 1
            fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hari2))
        }else{
            hari2[1].jumlah += 1
        }
    }
    if(hari[h] === "Selasa"){
        if(hari2[2].jumlah === 0){
            hari2[2].jumlah = 1
                        fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hari2))
        }else{
            hari2[2].jumlah += 1
        }
    }
    if(hari[h] === "Rabu"){
        if(hari2[3].jumlah === 0){
            hari2[3].jumlah = 1
                        fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hari2))
        }else{
            hari2[3].jumlah += 1
        }
    }
    if(hari[h] === "Kamis"){
        if(hari2[4].jumlah === 0){
            hari2[4].jumlah = 1
                        fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hari2))
        }else{
            hari2[4].jumlah += 1
        }
    }
    if(hari[h] === "Jum'at"){
        if(hari2[5].jumlah === 0){
            hari2[5].jumlah = 1
                        fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hari2))
        }else{
            hari2[5].jumlah += 1
        }
    }
    if(hari[h] === "Sabtu"){
        if(hari2[6].jumlah === 0){
            hari2[6].jumlah = 1
            fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hari2))
        }else{
            hari2[6].jumlah += 1
        }
    }
}
function risetData(rst,ti=hours){
    if(restjam[0].includes(ti)){
        if(rst[0].jumlah === 0){
            rst[0].jumlah = 1
            fs.writeFileSync('riset/riset-jam.json', JSON.stringify(rst))
        }else{
            rst[0].jumlah += 1
        }
    }
    if(restjam[1].includes(ti)){
        if(rst[1].jumlah === 0){
            rst[1].jumlah = 1
            fs.writeFileSync('riset/riset-jam.json', JSON.stringify(rst))
        }else{
            rst[1].jumlah += 1
        }
    }
    if(restjam[2].includes(ti)){
        if(rst[2].jumlah === 0){
            rst[2].jumlah = 1
            fs.writeFileSync('riset/riset-jam.json', JSON.stringify(rst))
        }else{
            rst[2].jumlah += 1
        }
    }
    if(restjam[3].includes(ti)){
        if(rst[3].jumlah === 0){
            rst[3].jumlah = 1
            fs.writeFileSync('riset/riset-jam.json', JSON.stringify(rst))
        }else{
            rst[3].jumlah += 1
        }
    }
}

function hariChange(j){
    console.log(`${harike[day]} - jam = ${hours} : ${minutes} : ${second}`)
}

async function program(rst,hrn,dtk){
    const pythonExec = await spawn("python3",["ular-linux.py"])
    pythonExec.on('exit',(code,signal)=>{
        console.log('python1  sudah berjalan')
        fs.writeFileSync('riset/riset-jam.json', JSON.stringify(rst))
        fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hrn))
        fs.writeFileSync('siapKirim.json', JSON.stringify(dtk))
    })
}



module.exports = {sebutHari2,hariChange,risetData,program}