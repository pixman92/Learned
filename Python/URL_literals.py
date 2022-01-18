
# code for pushing the Path to tmp
# then replace \ slashes and \t
tmpPath = pathMeNew
pathMeNew = tmpPath.replace('\\', '/')
tmpPath = pathMeNew
pathMeNew = tmpPath.replace('\t', '/t')
