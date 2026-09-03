---
title: "ICANN Managed Root Server IPv6 Renumbering MAR-2016"
---

ICANN Managed Root Server has requested the IPv6 renumbering from the current address **2001:500:3::42** to **2001:500:9f::42**.

Currently both IPv6 addresses, new and old, are configured on our production environment, and we have done extensive testing to ensure it is working properly.

Current IP addresses for the l.root-servers.net service:  
199.7.83.42  
2001:500:3::42

New IP addresses for the l.root-servers.net service:  
**199.7.83.42**  
 **2001:500:9f::42**

The change will be implemented on the root zone on March 23, 2016 2100UTC.

We encourage to every DNS operator to update their DNS root “hints” file **ASAP**.

New hints files will be available once the change has been formally executed on the usual places:

<http://www.internic.net/domain/named.root><http://www.internic.net/domain/named.cache>
