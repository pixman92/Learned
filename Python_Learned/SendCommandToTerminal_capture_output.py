# sends a command to terminal
# captures the output
# output is stored in a split lines array
    processLog = subprocess.check_output(['git log --oneline'], shell=True)
    print (processLog)
    processLogOut = processLog.splitlines()
