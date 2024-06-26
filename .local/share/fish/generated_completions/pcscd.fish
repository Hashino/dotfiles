# pcscd
# Autogenerated from man page /usr/share/man/man8/pcscd.8.gz
complete -c pcscd -s a -l apdu -d 'log APDUs and SW using the debug method (see  --debug )'
complete -c pcscd -s c -l config -d 'Specifies the directory dir as an alternate location for R /etc/reader. conf'
complete -c pcscd -s f -l foreground -d 'Runs pcscd in the foreground and sends log messages to stderr instead of sysl…'
complete -c pcscd -s T -l color -d 'force use of colored logs'
complete -c pcscd -s d -l debug -d 'use the lowest log level'
complete -c pcscd -l info -d 'use info log level.  This is the default log level'
complete -c pcscd -s e -l error -d 'use error log level'
complete -c pcscd -s C -l critical -d 'use critical log level'
complete -c pcscd -l force-reader-polling -d 'ignore the IFD_GENERATE_HOTPLUG reader capability'
complete -c pcscd -s t -l max-thread -d 'maximum number of threads (default 200)'
complete -c pcscd -s s -l max-card-handle-per-thread -d 'maximum number of card handle per thread (default: 200)'
complete -c pcscd -s r -l max-card-handle-per-reader -d 'maximum number of card handle per reader (default: 200)  This is the maximum …'
complete -c pcscd -s h -l help -d 'Displays information about the pcscd command line'
complete -c pcscd -s v -l version -d 'Displays the program version number'
complete -c pcscd -s H -l hotplug -d 'Ask pcscd to re-read the  /etc/reader. conf. d/my_reader'
complete -c pcscd -s x -l auto-exit -d 'pcscd will quit after 60 seconds of inactivity after the release of the last …'
complete -c pcscd -s S -l reader-name-no-serial -d 'Do not include the USB serial number in the reader name'
complete -c pcscd -s I -l reader-name-no-interface -d 'Do not include the USB interface name in the reader name'
complete -c pcscd -l disable-polkit -d 'Ignore polkit rules.  All accesses are allowed'

