#!/usr/bin/env 


import time
import subprocess
import os
import signal
import datetime


def run():

    todayDate = str(datetime.date.today())
    subprocess.call(["git", "add", "*"])
    time.sleep(1)
    subprocess.call(["git", "commit", "-m", todayDate +" - 10 minute Looping Commit"])
    subprocess.call(["git", "push"])
    time.sleep(1)
run()

for x in range(0, 1000):
    time.sleep(60*10)

    run()
