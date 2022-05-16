from selenium import webdriver
from selenium.webdriver.chrome.options import Options
import os
from tkinter import *
import tkinter as tk
import tkinter.filedialog as filedialog
from tkinter import messagebox


# Instanciar un objeto con las opciones de Chrome, para definir el tamaño y la preferencias "sin cabecera"
chrome_options = Options()
# chrome_options.add_argument("--headless")
chrome_options.add_argument("--window-size=800x600")

# get the path of ChromeDriverServer
dir = os.path.dirname(__file__)
chrome_driver_path = dir + "\chromedriver.exe"

# create a new Chrome session
driver = webdriver.Chrome(chrome_driver_path)
driver.implicitly_wait(30)
# driver.maximize_window()

# Preguntamos al Usuario por el archivo
root = tk.Tk()
root.withdraw()
file_path = filedialog.askopenfilename()

with open(file_path, "r") as archivo:
    lista = [linea.rstrip() for linea in archivo]

# Ciclo de iteracion, donde le decimos la llave y su valor para formar el link de descarga de cada archivo.
for value in lista:
    # Abrimos la Pagina  e iteramos con los identificadores para descargar los Json.
    # driver.get_screenshot_as_file("capture.png")
    driver.get("https://enciclovida.mx:443/especies/{indentificador}/consulta-registros.json?coleccion=snib&amp;formato=json".format(indentificador = value))


input("Presiona enter para terminar!")


#-----------------------------------------------------------------------------------------------------------------------------------------
