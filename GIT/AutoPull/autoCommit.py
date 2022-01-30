#!/usr/bin/env 


import time
import subprocess
import os
import signal


def run():
    subprocess.call(["git", "commit", "-m", "10 minute Looping Commit"])


for x in range(0, 1000):
    time.sleep(3)

    run()
