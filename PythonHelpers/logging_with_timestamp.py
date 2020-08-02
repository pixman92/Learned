
#python file that logs 1 string with a Date timestamp() variable 
# python C:\Users\Lynda\Documents\GitHub\Logging_Python\logging.py file log.txt

import sys
from datetime import datetime



fileName =""
def runFirst():
    global fileName

    try:
        args = sys.argv
    except:
        print "args fail"
    # print args
    
    try:
        if(args[1]==None):
            print "\nPlease consider\npython <stringToFile> file <fileToLogTo.txt>"
        elif(args[1]=="file"):
            try:
                if(args[1]!=None and args[2]!=None):
                    fileName = args[2]
                    # print args
                    # print fileName
                    strLog()
                    makeTimestamp()
                    writeToFile(fileName, meInput)
            except:
                print "\nfailed -- no file to point to"
                print "\nPlease consider\npython <stringToFile> file <fileToLogTo.txt>"
        else:
            print "\nForgot 'file'\nPlease consider\npython <stringToFile> file <fileToLogTo.txt>"
    except:
        print "\nfailed to point to file"
        print "\nPlease consider\npython <stringToFile> file <fileToLogTo.txt>"




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
