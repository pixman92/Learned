#!/usr/bin/python
import sys
from os import system
from time import sleep 



class FunctionObj:
    def __init__(self, functionName, stringsOfComments):
        self.functionName = functionName
        self.stringsOfComments = stringsOfComments


# def makeObjs(list):


def printPretty():
    # function to make a pretty print out of the BIG list
    i=0
    while i<len(bunchesList):
        if bunchesList[i].startswith("function"):
            print bunchesList[i].rstrip()
            if i<len(bunchesList):
                i=i+1


        else:
            while i<len(bunchesList) and bunchesList[i].startswith("function")!=True:
                print bunchesList[i]
                # if i<len(bunchesList):
                i=i+1

        
        # i=i+1
# ========================================
def clearOut():

    mainFileList = []
    functionNamesIndex = []
    bunchesList = []
    



# ========================================

functionList = []
bunchesList = []
BIGList = []
def pullingComments():
    # function for grasping //comments
    # lay them out in a list
    # make sure they're clean
    i=0
    ii=1
    global mainFileList
    global functionNamesIndex
    global BIGList

    BIGList=[]

    for me in mainFileList:
        BIGList.append(me)
    
    mainFileList = []


    while(i<len(functionNamesIndex)):
        # print "i", i

        # print "51", mainFileList

        if BIGList[functionNamesIndex[i]].startswith("function")==True:

            bunchesList.append("     "+BIGList[functionNamesIndex[i]].rstrip())

            # print "true"
            # ii=i
            # print BIGList[functionNamesIndex[i]].strip()
            while(BIGList[functionNamesIndex[i]+ii].strip().startswith("//") == True):

                # print "compare? ", BIGList[functionNamesIndex[i]+ii].strip()
                bunchesList.append(BIGList[functionNamesIndex[i]+ii].strip())



                # print "ii", ii
                ii=ii+1

        else:
            print "nope"
        bunchesList.append("===============")
        ii=1
        i=i+1


# functionNamesIndex = []
def pullFunctionIndexes(stringMe):
    # pulling comments and function names
    # 
    i=0
    # global functionNamesIndex 
    global functionNamesIndex
    functionNamesIndex = []     # some kind of magic!
    
    # mainFileList = []
    # for line in stringMe:
    while(i<len(stringMe)):
        # print "Len", len(stringMe)
        # print "8888888888888888888888"
        # print "stringMe", stringMe
        if stringMe[i].strip().startswith("function"):
            # print i
            functionNamesIndex.append(i)
        i=i+1      
    # print "functionNamesIndex", functionNamesIndex
    pullingComments()



mainFileList = []
def pullFile(fileMe):
    # function that pulls the file, 
    # cuts it into lines and sends it to be made into a shifting for functions&comments
    # f = open(fileMe, 'r')

    # empty out old array
    # bunchesList = []
    # functionNamesIndex = []

    global mainFileList
    mainFileList = []
    print("=====================")
    print "----Begin----"
    try:
        f = open(fileMe, "r")
        for me in f:
            # print "something", me
            mainFileList.append(me)
        f.close()
    except:
        print "....."
        print "Failed to open. Try again"
        print "....."


    # print "Len0", len(mainFileList)

    pullFunctionIndexes(mainFileList)






def state(input, fileName):


    if input=="file":
        system('cls')
        system('clear')
        print "Filename?"
        pullFile(fileName)
        # clearOut()
        printPretty()
        

