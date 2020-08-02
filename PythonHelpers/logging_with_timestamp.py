
#python file that logs 1 string with a Date timestamp() variable 
# python C:\Users\Lynda\Documents\GitHub\Logging_Python\logging.py file log.txt


import sys
from datetime import datetime



fileName =""
def runFirst():

    global searchFuncName 
    global fileName

    try:
        args = sys.argv
    except:
        print "args fail"
    # print args
    
    if(args[1]=="file"):
        fileName = args[2]
        # print fileName
        strLog()
        makeTimestamp()
        writeToFile(fileName, meInput)




def writeToFile(writeTo, dataToWrite):

    try:
        f = open(writeTo,"a+")    
        f.write("\n\n"+ todayTime + " --- " + dataToWrite)
        f.close()
    except:
        print "failed to create file"


meInput = ""

def strLog():
    print "What to Log? into, " + fileName
    global meInput
    meInput = ''
    meInput = raw_input('\nEnter:')



todayTime = ""
def makeTimestamp():
    format = "%Y, %m, %d - %H:%M:%S"
    global todayTime
    todayTime = datetime.now().strftime(format)
    print todayTime 


#========================================================
runFirst()
