from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
import json

# copy from json data pesan wa
with open('data.json', 'r') as file:
    cont = file.read()
    dat = json.loads(cont)

# data riset
with open('riset/riset-jam.json','r') as rst:
    riset = rst.read()
    loadRst = json.loads(riset)

# baca hari
with open('riset/riset-hari.json','r') as har:
    hariRead = har.read()
    loadHari = json.loads(hariRead)

# hari
hari = ["*Minggu* = ","*Senin*    = ","*Selasa*  = ","*Rabu*    = ","*Kamis*  = ","*Jum'at*  = ","*Sabtu*  = ",""]
jumlahHari = [loadHari[0]['jumlah'],loadHari[1]['jumlah'],loadHari[2]['jumlah'],loadHari[3]['jumlah'],loadHari[4]['jumlah'],loadHari[5]['jumlah'],loadHari[6]['jumlah'],""]
# WAKTU / JAM
jadwalTitle = ["*Pagi (06-12)*   = ","*Siang (13-15)* = ","*Sore (16-23)*   = ","*Malam (00-05)* = ",""]
jadwal = [loadRst[0]['jumlah'],loadRst[1]['jumlah'],loadRst[2]['jumlah'],loadRst[3]['jumlah'],0]


# yang dilakukan perubahan
desk = dat["desk"]
Est = dat["Estimasi"]
deskMod = desk.replace("\n", "")
estMod = Est.replace("\n", "")
skill= dat["Skill"]
link = dat['linknya']

title = ["*Judul* : ","*Proposal* : ","*Paymentnya* : ","*Spend* : ","*Post* : ","*Negara* : ","*Job-Type* : ","*Est* : ","*Deskripsi* : ",""]
titleIsi = [dat['judul'],dat['propo'],dat['paymentnya'],dat['spendnya'],dat['Post'],dat['negara'],dat['Type'],estMod,deskMod,""]

# driver get
opt = Options()
opt.add_experimental_option("debuggerAddress","localhost:8989")
driv_ser = Service(executable_path="/home/mint/Documents/ngoding/proyek/pribadi/extension/nyoba-menggunakan-mysql/chromedriver.exe")
driver = webdriver.Chrome(options=opt)

# driver.get("https://web.whatsapp.com/")

# cari contact
cont = driver.find_element(By.CSS_SELECTOR,'span[title="Yashi"]')
cont.click()

# ketik kolom chat
chat = driver.find_element(By.CSS_SELECTOR,'._3Uu1_')
chat.click()

# function chat 
def sendKeys(g):
    for i in range(g):
        chat.send_keys(Keys.SHIFT + Keys.ENTER)

# function HARI
def sebutText(title,isi,n,jumlahEnter):
    hariDone = f""
    for i in range(n):
        chat.send_keys(hariDone)
        sendKeys(jumlahEnter)
        hariDone = f""
        hariDone += f"{title[i]}" + f"{isi[i]}"

# kirim pesan
chat.send_keys("========= PEMBUKA =========")
sendKeys(2)

sebutText(title,titleIsi,10,2)

# looping skills
chat.send_keys("*Skills* : ")
sendKeys(1)
for sk in skill:
    chat.send_keys(sk)
    sendKeys(1)

sendKeys(2)
chat.send_keys(f"*Link* : {link}")

sendKeys(2)
sebutText(jadwalTitle,jadwal,5,1)
chat.send_keys(Keys.BACKSPACE)

sendKeys(1)
chat.send_keys("--------------------")

sendKeys(1)
chat.send_keys(f"*total* =   {sum(jadwal)}")

sendKeys(1)
sebutText(hari,jumlahHari,8,1)

sendKeys(2)
chat.send_keys("========= PENUTUP =========")

chat.send_keys(Keys.ENTER)
print("berhasil")


