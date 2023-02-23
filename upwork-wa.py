#!/usr/bin/env python3
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from selenium.webdriver.common.by import By
import time

opt = Options()
opt.add_experimental_option("debuggerAddress", "localhost:8989")
service = ChromeService(executable_path="/home/mint/Documents/ngoding/proyek/pribadi/extension/nyoba-menggunakan-mysql/chromedriver.exe")
driver = webdriver.Chrome(options=opt)

driver.get("https://web.whatsapp.com/")

driver.execute_script("window.open('https://www.upwork.com/nx/find-work/most-recent','new window')")
driver.switch_to.window(driver.window_handles[1])
klikAkun = driver.find_element(By.CSS_SELECTOR,"#login_google_submit")
klikAkun.click()


