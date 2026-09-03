---
title: "IN-ADDR.ARPA NS Change"
---

This is a courtesy notification of an upcoming change to the

nameserver set for the IN-ADDR.ARPA zone.

There is no expected impact on the functional operation of the DNS

due to this change.

There are no actions required by DNS server operators or end users.

For more information about this work, please see

<<http://in-addr-transition.icann.org/>>.

DETAIL

The IN-ADDR.ARPA zone is used to provide reverse mapping (number

to name) for IPv4. The servers which currently provide authoritative

DNS service for the IN-ADDR.ARPA zone are as follows:

[A.ROOT-SERVERS.NET](http://A.ROOT-SERVERS.NET/)

[B.ROOT-SERVERS.NET](http://B.ROOT-SERVERS.NET/)

[C.ROOT-SERVERS.NET](http://C.ROOT-SERVERS.NET/)

[D.ROOT-SERVERS.NET](http://D.ROOT-SERVERS.NET/)

[E.ROOT-SERVERS.NET](http://E.ROOT-SERVERS.NET/)

[F.ROOT-SERVERS.NET](http://F.ROOT-SERVERS.NET/)

[G.ROOT-SERVERS.NET](http://G.ROOT-SERVERS.NET/)

[H.ROOT-SERVERS.NET](http://H.ROOT-SERVERS.NET/)

[I.ROOT-SERVERS.NET](http://I.ROOT-SERVERS.NET/)

[K.ROOT-SERVERS.NET](http://K.ROOT-SERVERS.NET/)

[L.ROOT-SERVERS.NET](http://L.ROOT-SERVERS.NET/)

[M.ROOT-SERVERS.NET](http://M.ROOT-SERVERS.NET/)

On Wednesday 2010-02-16 processing will begin to change the nameserver

set to the following, as described in RFC 5855:

A.IN-ADDR-SERVERS.ARPA (operated by ARIN)

B.IN-ADDR-SERVERS.ARPA (operated by ICANN)

C.IN-ADDR-SERVERS.ARPA (operated by AfriNIC)

D.IN-ADDR-SERVERS.ARPA (operated by LACNIC)

E.IN-ADDR-SERVERS.ARPA (operated by APNIC)

F.IN-ADDR-SERVERS.ARPA (operated by RIPE NCC)

The usual IANA process for a change in the ARPA zone involves a

series of technical checks and the gathering of various authorisations,

and may take several days to complete.

Following this, the IN-ADDR.ARPA zone will be dropped from root

servers in two groups:

1. Week of 2011-02-21 — 2011-02-25

B, C, E, G, I, M

2. Week of 2011-02-28 — 2011-03-11

A, D, F, H, K, L

Individual root server operators will choose a time for the maintenance

within their respective window and follow their usual procedures

to carry out the change.

Courtesy notification will be sent to this list once this change

has been fully implemented.

Regards,
