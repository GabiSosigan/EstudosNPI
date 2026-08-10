name = "robin" # string
age = 19 # integer
height = 1.72 # float
boolean = True # boolean

exemplo  = """string
de múltiplas linhas""" # string de múltiplas linhas 

quote = 'Ela disse, "Olá!"' # string caso seja preciso de aspas dentro da string

set_ = {7, "hello", 5.5} # set: coleção não ordenada
dictionary = {"robin": "legal", "idade": 19} # dicionário
naosei = (7, "oi", 0.5) # tuple, coleção ordenada imutável
naoseidenovo = range(5) # sequência de números, range
lista = [20, "hello world", 3.14, True] # lista ordenada que suporta diferentes tipos de data: list

nada = None # literalmente nada

# podem ser usadas aspas duplas ou únicas
print("Meu nome é", name ,"e eu tenho", age, "anos.") 

# diferente de usar o + para separar, as vírgulas adicionam espaços automáticos
print("azul", "verde", "amarelo") 

# saber o tipo da variável
print(type(height)) 

# isinstance() verifica se a variável é do tipo especificado
account_balance = 12
print(isinstance(account_balance, int)) 

# verifica se é int OU float
print(isinstance(account_balance, (int, float)))

# verifica se a substring está contida na string
print("robyn" in name) 

# tamanho da string
print(len(name)) 

# acessar caracteres da string
print(name[0])

# acessar caracteres da string de trás para frente (começando no -1)
print(name[-1])

risada = "ha"
risada_2 = risada * 3 # repete a string 3 vezes
print(risada_2)

name2 = "thiago"
age = 20
nomeidade = name2 + str(age) # concatenar string com int precisa converter o int para string
print(nomeidade)

name2 = "bia"
age = 20

infoBia = "bia" + ' ' + str(age) # concatenar string com int precisa converter o int para string
print(infoBia)

infoBia2 = f"{name2} {age}" # f-string, forma mais simples de concatenar string com int
print(infoBia2)

minha_string = "Olá, meu nome é Robin e eu tenho 19 anos."
print(minha_string[16:21]) # fatiamento da string, pega do índice 16 até o 20 (21-1)

print(minha_string.replace("Robin", "Bia")) # substitui a substring "Robin" por "Bia"

print(minha_string.upper()) # deixa a string toda em maiúsculo
print(minha_string.lower()) # deixa a string toda em minúsculo

