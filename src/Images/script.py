from os import listdir
teste = listdir('c:/Users/bruno/Desktop/Poker/react-poker/src/Images/Cartas')

#print(teste)
id = 0

file = open('cartasArray.js', 'w+')
file.write('[')

for i in teste:
  id += 1
  strId = str(id)
  file.write("{ " + " id: " + strId + "," + " name: " + i + "," + " image: " + i + " },")

file.write(']')