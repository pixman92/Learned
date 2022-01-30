#!/usr/bin/env python3


import time
import subprocess
import os
import signal

   
def run():
    subprocess.call(["python", "/mnt/chromeos/MyFiles/Code/AutoPy/autoPull.py"])
    
run()

for x in range(0, 1000):
    time.sleep(30)

    run()