### BootCamp-Assignment4: React Basics , Hooks + Errors

http://assignment4_react-basics.surge.sh/

### Errors

#### System limit for number of file watchers reached == Number of files monitored by the Ubuntu system has reached the limit!!

Solution:

Modify the number of system monitoring files

sudo gedit /etc/sysctl.conf

Add a line at the bottom

fs.inotify.max_user_watches=524288

Then save and exit!

sudo sysctl -p

https://stackoverflow.com/questions/55763428/react-native-error-enospc-system-limit-for-number-of-file-watchers-reached


