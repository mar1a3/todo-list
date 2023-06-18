# webdriver
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service as ChromeService
from webdriver_manager.chrome import ChromeDriverManager

import time
import glob

# элементы вэбрайвера
driver = webdriver.Chrome(ChromeDriverManager().install())
opts = Options()
opts.add_experimental_option("detach", True)

def get_video():
