#!/usr/bin/env python

__author__ = "Francisco Nuñez Hernandez, Erick Infante, José Antonio Gómez, Carlos Iván Aguilar"
__copyright__ = "Copyright 2022, OceanDex"
__credits__ = ["Francisco Nuñez Hernandez", "Erick Infante", "José Antonio Gómez",
                    "Carlos Iván Aguilar"]
__license__ = "GPL"
__version__ = "1.0.1"
__maintainer__ = "?"
__email__ = "?"
__status__ = "?"


from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os
from tkinter import *
import tkinter as tk
import tkinter.filedialog as filedialog
from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
from selenium.webdriver.common.by import By
from selenium.common.exceptions import NoSuchElementException

# Instanciar un objeto con las opciones de Chrome, para definir el tamaño y la preferencias "sin cabecera"
chrome_options = Options()
# chrome_options.add_argument("--headless")
chrome_options.add_argument("--window-size=800x600")

# Descarga el driver de Chrome en: https://sites.google.com/a/chromium.org/chromedriver/downloads 
# Y ponlo en el directorio actual
# get the path of ChromeDriverServer
dir = os.path.dirname(__file__)
chrome_driver_path = dir + "\chromedriver.exe"

# create a new Chrome session
driver = webdriver.Chrome(chrome_driver_path)
driver.maximize_window()

# Preguntamos al Usuario por el archivo
root = tk.Tk()
root.withdraw()
file_path = filedialog.askopenfilename()

with open(file_path, "r") as archivo:
    lista = [linea.rstrip() for linea in archivo]

# Ciclo de iteracion
for value in lista:
    # Abrir una venta del navegador Chrome, ir a la pagina de en concreto e interactuar con ella.
    value = value.replace('ï»¿','')
    driver.get("https://enciclovida.mx/especies/{especie}".format( especie = value ))
    driver.implicitly_wait(10)
    try:
        imgsrc = driver.find_element_by_xpath("/html/body/section/div/div[1]/div/div[3]/div/div/a[1]/img")
        source = imgsrc.get_attribute("src")
        print(value,source)
        with open('data.txt', "a") as capturas:
            capturas.write(value + ',' + source + '\n')
            capturas.close()
    except NoSuchElementException:
        pass


input("Presiona Enter para terminar")


'''
https://enciclovida.mx/especies/35770-thalasseus-maximus 

/html/body/section/div/div[1]/div/div[3]/div/div/a[1]/img
/html/body/section/div/div[1]/div/div[3]/div/div/a[1]/img
/html/body/section/div/div[1]/div/div[3]/div/div/a[1]/img
/html/body/section/div/div[1]/div/div[3]/div/div/a[1]/img
/html/body/section/div/div[1]/div/div[3]/div/div/a[1]/img
'''