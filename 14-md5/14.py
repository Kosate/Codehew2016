import codecs, os, hashlib

txt = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZกขฃคฅฆงจฉชซฌญฎฏฐฑฒณดตถทธนบปผฝพฟภมยรลวศษสหฬอฮ"

size = 0
maxsize = 2*1024*1024*1024

file = codecs.open('file.txt','w+','utf8')

size = 1
j = 0

hash = hashlib.md5()

line = ""

current = 0

while(size <= maxsize) :
    #file.write(txt[j])

    hash.update(txt[j].encode('utf-8'))

    j = j + 1
    if(j >= len(txt)) :
        j = 0
    if(j >= 62) :
        size = size + 3
    else :
        size = size + 1


print(hash.hexdigest())

file.close()
#print(os.path.getsize('file.txt'))
