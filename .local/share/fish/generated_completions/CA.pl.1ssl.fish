# CA.pl.1ssl
# Autogenerated from man page /usr/share/man/man1/CA.pl.1ssl.gz
complete -c 'CA.pl.1ssl' -s '?' -s h -o help -d 'X Item "-?, -h, -help" Prints a usage message'
complete -c 'CA.pl.1ssl' -o newcert -d 'X Item "-newcert" Creates a new self signed certificate'
complete -c 'CA.pl.1ssl' -o newreq -d 'X Item "-newreq" Creates a new certificate request'
complete -c 'CA.pl.1ssl' -o newreq-nodes -d 'X Item "-newreq-nodes" Is like -newreq except that the private key will not b…'
complete -c 'CA.pl.1ssl' -o newca -d 'X Item "-newca" Creates a new CA hierarchy for use with the ca program (or th…'
complete -c 'CA.pl.1ssl' -o pkcs12 -d 'X Item "-pkcs12" Create a PKCS#12 file containing the user certificate, priva…'
complete -c 'CA.pl.1ssl' -o sign -o signcert -o xsign -d 'X Item "-sign, -signcert, -xsign" Calls the openssl-ca\\|(1) command to sign a…'
complete -c 'CA.pl.1ssl' -o signCA -d 'X Item "-signCA" This option is the same as the -sign option except it uses t…'
complete -c 'CA.pl.1ssl' -o crl -d 'X Item "-crl" Generate a CRL.  Executes openssl-ca\\|(1)'
complete -c 'CA.pl.1ssl' -o revoke -d 'X Item "-revoke certfile [reason]" Revoke the certificate contained in the sp…'
complete -c 'CA.pl.1ssl' -o verify -d 'X Item "-verify" Verifies certificates against the CA certificate for demoCA'
complete -c 'CA.pl.1ssl' -o extra-cmd
complete -c 'CA.pl.1ssl' -o extra-req -d 'For multi-word parameters, either repeat the option or quote the parameters s…'
