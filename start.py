#!/usr/bin/env python3
import subprocess
import time


linknya = "google-chrome --remote-debugging-port=8989 --user-data-dir=':~/.config/google-chrome/profile1' --tab --disable-background-timer-throttling"
link2 = "npm start"
link3 = "python3 upwork-wa.py"
shutdo = "pkill node && pkill -f gnome-terminal"
subprocess.Popen(["gnome-terminal","-e",link2])
time.sleep(2)
subprocess.Popen(["gnome-terminal","-e",linknya])
time.sleep(5)
subprocess.Popen(["gnome-terminal","-e",link3])
