obj = {}
def makeDynamic(str, data):
    obj[str] = data
    print obj

def addTo(str, data):
    obj[str] += data
    print obj

def printMe(str):
    print obj[str]
    
#makes a dynamic Dictionary
#adds data
#and then prints it
