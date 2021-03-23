#!/bin/bash


# read the file name for Zip!
echo "What to call this file?"
read name

# src file
src="/mnt/chromeos/MyFiles/SavedCode/ZippedCode/${name}.zip"

# dest - * for all files
dest="/mnt/chromeos/MyFiles/SavedCode/XML_js/*"

# actual zip command
zip -D -j $src $dest


# zip today.zip 000_TODO.txt
# zip -r myfiles.zip mydir


