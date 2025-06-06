function FindProxyForURL(url, host) {
    alert("IPs del cliente: " + myIpAddressEx());
    var resolved_ip = dnsResolve(host);
    if (url.substring(0,4) == "ftp:")
    { return "DIRECT"; } 

    if (!( 
      isInNet(myIpAddressEx().split(",")[0], "10.10.3.10", "255.255.255.255") ||
      isInNet(myIpAddressEx().split(",")[1], "10.10.3.10", "255.255.255.255")) && ( 
      isInNet(dnsResolve("dns.google.com"), "8.8.8.8", "255.255.255.255") ) ) 
    {  return "DIRECT";  }
 
    if ( 
      shExpMatch(host, "*.local") || shExpMatch(host, "local") || 
      shExpMatch(host, "192.168..") || 
      shExpMatch(host, "172.16..") || 
      shExpMatch(host, "10...*") || 
      shExpMatch(host, "100.64..") || 
      shExpMatch(host, "127...*") ) 
    {  return "DIRECT";  }

    if ( 
      shExpMatch(host, "*.gpcloudservice.com") || shExpMatch(host, "gpcloudservice.com") || 
      shExpMatch(host, "*.prismaaccess.com") || shExpMatch(host, "prismaaccess.com") || 
      shExpMatch(host, "*.rbi.io") || shExpMatch(host, "rbi.io") || 
      shExpMatch(host, "*.paloaltonetworks.com") || shExpMatch(host, "paloaltonetworks.com") ) 
    {  return "DIRECT";  }


return "PROXY ps-latam-lab.proxy.prismaaccess.com:8080";}
