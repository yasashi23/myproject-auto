#!/usr/bin/env python3
import subprocess
import time

closenode = "pkill node"
closegnome= "pkill -f gnome-terminal"

time.sleep(2)
subprocess.Popen(["gnome-terminal","-e",closenode])
time.sleep(2)
subprocess.Popen(["gnome-terminal","-e",closegnome])

