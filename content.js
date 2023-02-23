
const title = document.querySelectorAll('.job-tile-title')
const link = document.querySelectorAll('.job-tile-title a')
const href = link[0].href
const deskripsi = document.querySelectorAll('[data-test="job-description-text"]')
const proposal = document.querySelectorAll('small strong[data-test="proposals"]')
const payment = document.querySelectorAll('[data-test="payment-verification-status"] .text-muted')
const spend = document.querySelectorAll('[data-test="client-spendings"] strong')
const country = document.querySelectorAll('[data-test="client-country"] strong')
const jobType = document.querySelectorAll("strong[data-test='job-type']")
const skills = document.querySelectorAll('.up-skill-wrapper')
const skillSpread = skills[0].querySelectorAll("a")
const posted = document.querySelector('span[data-test="posted-on"] span')
const ket = document.querySelectorAll('small.text-muted.display-inline-block')
const KetMendalam = ket[0].querySelectorAll('small > span')
const est = KetMendalam[1].querySelector('span:last-child')


// alert(`judul: ${title[0].textContent}\nproposal: ${proposal[0].textContent}\npayment: ${payment[0].textContent}\nCountry: ${country[0].textContent}\nSpend: ${spend[0].textContent}`)
// alert(`Deskripsi:\n${deskripsi[0].textContent}`)
// alert(`Deskripsi:\n${href}`)
const arrSkill = []
for(let i = 0; i < skillSpread.length;i++){
    arrSkill.push(skillSpread[i].textContent)
}

const upEst = est.textContent
const newEst = upEst.replace('\n',"")


fetch('http://localhost:3001/data-ku', {
    method:'POST',
    headers:{
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        judul: title[0].textContent,
        propo: proposal[0].textContent,
        paymentnya: payment[0].textContent,
        negara: country[0].textContent,
        spendnya: spend[0].textContent,
        linknya: href,
        desk: deskripsi[0].textContent,
        Type: jobType[0].textContent,
        Skill: arrSkill,
        Post: posted.textContent,
        Estimasi: newEst
    
    })
})
.then(res => res.json())
.then(response => console.log(response.success))
.catch(err => console.log(err))



// fetch('http://localhost:3001')
// .then((res)=> {
//     alert(res)
// })
// .catch(()=> {
//     alert('gagal')
// })