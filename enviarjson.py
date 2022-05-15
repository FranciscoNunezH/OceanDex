__author__ = "Francisco Nuñez Hernandez, Erick Infante, José Antonio Gómez, Carlos Iván Aguilar"
__copyright__ = "Copyright 2022, OceanDex"
__credits__ = ["Francisco Nuñez Hernandez", "Erick Infante", "José Antonio Gómez",
                    "Carlos Iván Aguilar"]
__license__ = "GPL"
__version__ = "1.0.1"
__maintainer__ = "?"
__email__ = "?"
__status__ = "?"

# Importing the libraries that are going to be used in the code.
from encodings import utf_8
import requests
import json

# Defining the url and headers for the request.
url = "https://ocean-dex-api.herokuapp.com/api/guardar"
url2 = "https://ocean-dex-api.herokuapp.com/api/guardar/ejemplar"
headers = {'Content-type': 'application/json', 'Accept': 'text/plain'}

# Opening JSON file
# Opening the file `EncicloVida` in read mode.
f= open("2022-05-13_21-24-31-622_taxa_EncicloVida.json", "r", encoding="utf_8")

# Opening the file Ultimate_bioData.json in read mode.
# f2=open("Ultimate_bioData.json", "r", encoding="utf_8")

# Loading the json file into a variable.
datos = json.load(f)
# datos2 = json.load(f2)
  

# Iterating through the json file and posting it to the url.
for i in datos:
    r = requests.post(url, data=json.dumps(i), headers=headers)
    if r.status_code!=200:
        print(r.status_code)

## Codigo para coninuar con la insercion de datos desde el registro \/
## buscar idejemplar: 'cfd5d28e8672df5398117e3862095b2f'
# ban=0
# c=0
# for i in datos2:
#     if ban==0:
#         for j in i:
#             c+=1
#             if j['idejemplar']=="cfd5d28e8672df5398117e3862095b2f":
#                 # Se encontro
#                 ban=1
#             elif ban==1:
#                 r = requests.post(url2, data=json.dumps(j), headers=headers)
#     else:
#         # pass
#         r = requests.post(url2, data=json.dumps(i), headers=headers)
#         if r.status_code!=200:
#             print(r.status_code)
            
#             # Separar los json
#             # print(type(i))#list
            
#             for j in i:
#                 r = requests.post(url2, data=json.dumps(j), headers=headers)
#                 if r.status_code!=200:
#                     print(str(r.status_code) +" de 413")
        
        
        # y=input()
    
    
# Closing file
# Closing the file `EncicloVida`
f.close()
# Closing the file `Ultimate_bioData.json`
# f2.close()