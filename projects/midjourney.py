import os
 
directory = '../images/midjourney/'
 
for filename in sorted(os.scandir(directory), key=lambda s: s.path.lower()):
    if filename.is_file():
        start = "<span class=\"video-img\"><img src=\""
        end = "\"></img></span>"
        print(start + filename.path + end)
