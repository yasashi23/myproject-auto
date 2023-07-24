const fs = require('fs')
const {spawn} = require('child_process')



// hari jam
var date = new Date()
var hours = date.getHours()
var minutes = date.getMinutes()
var second = date.getSeconds()
var day = date.getDay()
const analyticsData = JSON.parse(fs.readFileSync('./analyticsSkills.json','utf-8'))

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

const dateN = new Date()

async function program(rst,hrn,dtk){
    const pythonExec = await spawn("python3",["ular-linux.py"])
    pythonExec.on('exit',(code,signal)=>{
        console.log('python1  sudah berjalan')
        fs.writeFileSync('riset/riset-jam.json', JSON.stringify(rst))
        fs.writeFileSync('riset/riset-hari.json', JSON.stringify(hrn))
        fs.writeFileSync('siapKirim.json', JSON.stringify(dtk))
        tics()
        judulTics()
        jamAnalytics(dateN.getHours())
    })


    const wordDataJson = JSON.parse(fs.readFileSync('./wordData.json','utf-8'))

function judulTics (){
    const dataDotJson = JSON.parse(fs.readFileSync('data.json','utf-8'))
    const dataMentahjudul = dataDotJson.judul
  const judulArray = dataMentahjudul.split(" ").map(x => x.toUpperCase())

  for(let i = 0; i < judulArray.length; i++) {
    let up = wordDataJson.findIndex(el => el.kata === judulArray[i])
    if(up < 0) {
      const newJudul = {kata:judulArray[i], jml:1}
      wordDataJson.push(newJudul)
    }else{
      wordDataJson[up].jml += 1
    }
  }

  fs.writeFileSync('wordData.json',JSON.stringify(wordDataJson))
  // const judulArrayUpperCase = 
}

const jamTics = JSON.parse(fs.readFileSync('./jamAnalytics.json','utf-8'))

function jamAnalytics(a) {
  if(a>0 && a<12){
    const pagi = jamTics[0].totalJam
    const skorPagi = pagi.findIndex(el => el.jam === a)
    pagi[skorPagi].jml +=1
    console.log('pagi')
  }
  if(a>11 && a<16){
    const siang = jamTics[1].totalJam
    const skorSiang = siang.findIndex(el => el.jam === a)
    siang[skorSiang].jml +=1
    console.log('siang')
  }
  if(a>15 && a<18){
    const sore = jamTics[2].totalJam
    const skorSore = sore.findIndex(el => el.jam === a)
    sore[skorSore].jml +=1
    console.log('sore')
  }
  if(a>17 && a<24 || a===0){
    const malam = jamTics[3].totalJam
    const skorMalam = malam.findIndex(el => el.jam === a)
    malam[skorMalam].jml +=1
    console.log('malam')
  }
  fs.writeFileSync('jamAnalytics.json',JSON.stringify(jamTics))
}


    function tics(){
    const dataDotJson = JSON.parse(fs.readFileSync('data.json','utf-8'))
    const skl = dataDotJson.Skill

    const sklUpperCase = skl.map(el => el.toUpperCase())
    for(let i = 0; i < sklUpperCase.length; i++){
        let up = analyticsData.findIndex(el => el.code === sklUpperCase[i])
        if (up < 0){
            const tambahan = {code: sklUpperCase[i], jml:1}
            analyticsData.push(tambahan)
            console.log('if')
        }else {
            analyticsData[up].jml += 1
            console.log('else')
        }
    }
    fs.writeFileSync('analyticsSkills.json',JSON.stringify(analyticsData))
}
}



module.exports = {sebutHari2,hariChange,risetData,program}