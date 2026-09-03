---
title: "RSSAC024 Response"
---

#### This document

The [Root Server System Advisory Committee](https://www.icann.org/groups/rssac) has developed [RSSAC024](https://www.icann.org/en/system/files/files/rssac-024-04nov16-en.pdf) to document the Key Technical Elements of Potential [Root Server Operators](http://www.root-servers.org).

This page describes how [ICANN](/) meets the service and technical key element expectations for the [L-Root service](/lroot/) it operates. This is a living web page and it is reviewed and updated as and when ICANN reviews and improves the processes and tools it uses to provide the L-Root service and at least twice a year.

#### How ICANN stands within RSSAC024 requirements

#### 3.1 RSSAC001 and RFC7720

*The candidate operator must be evaluated with respect to existing operational expectations and requirements, namely RSSAC001 and RFC7720. Some of these might not be applicable to candidate operators. Others may be evaluated against a candidate’s already existing services. Summaries of these expectations and requirements are given in Appendices A and B.*

|  |  |
| --- | --- |
| **3.1** | ICANN adheres to both RFC7720 as well as RSSAC001. |

#### 3.2.1 Overall Service Design

*The candidate operator’s overall design must be evaluated with respect to its utility in serving the root zone. The candidate operator should provide as many design details as possible. Design choices might include hardware platforms, networking technology, use of virtualization, locations of servers (e.g., data centers, exchange points, shared cabinets), overall capacity, and out-of-band access.*

|  |  |
| --- | --- |
| **3.2.1** | ICANN uses an anycast routing model to allow for greatest service delivery while minimizing outage and downtime. ICANN uses multiple hardware and software vendors in order to mitigate bugs and exploits. ICANN clustered sites in (CA, DC, CZ) have an even split between Linux and FreeBSD. Any of the clustered sites can handle the entirety of ICANN’s normal root server traffic load. ICANN also operates 160+ ‘singles’ distributed around the globe, hosted with various entities to allow for maximum coverage, higher resiliencey and stability, and shorter network paths for all consumers.ICANN’s root server infrastructure announces both a specific and covering prefix, so that even if maintenance is done and the more specific route announcement is withdrawn, we still have visibility to the node.Secure OOB(out of band) communication is used for changes to all systems. Change control via a central repository is in place, all changes are reviewed by staff as well as tested in a non-production environment.  After testing and vetting changes are pushed out during well know maintenance windows.  In case of issues, rollback procedures are followed as soon as it is deemed appropriate. |

#### 3.2.2 Service Availability

*The candidate operator’s proposal must be evaluated with respect to its approach to maximizing service availability. Per [RSSAC001 E.3.3-B](/rssac/rssac001-response), the candidate operator’s design is expected to eliminate or minimize single points of failure. This might include diversity elements described in section 3.4.*

|  |  |
| --- | --- |
| **3.2.2** | ICANN root servers use anycast routing to maximize availability and minimize outages, as well as to be able to accommodate flash traffic spikes due to increased usage and/or attacks(DoS/DDoS). Anycast also provides lower latency for our customers. |

#### 3.2.3 Service Capacity

*The candidate operator’s service capacity must be evaluated for its ability to withstand Denial of Service (DoS) and other forms of attacks. See [RSSAC001 E.3.4-A](/rssac/rssac001-response).*

|  |  |
| --- | --- |
| **3.2.3** | ICANN’s root server infrastructure can withstand traffic spikes and or sustained traffic, several orders of magnitude above the current normal average DNS query rate. ICANN’s root server’s currently operate at 0.69% of total capacity, the highest recorded spike was 7.13% of total capacity. |

#### 3.2.4 Performance

*The candidate’s design should be evaluated with respect to its performance characteristics, such as latency, serviced regions, RSSAC002 metrics and RFC7720 requirements.*

|  |  |
| --- | --- |
| **3.2.3** | L-Root infrastructure is RFC7720 compliant with regards to protocol availability and delivery. Per RSSAC002 ICANN publishes all pertinent data pertaining to root zone performance and propagation. <http://stats.dns.icann.org/rssac/> |

#### 3.3.1 DNS Operational Experience

*Previous or current experience operating large-scale DNS services by the candidate operator should be considered. Such operation is expected to include both IPv4 and IPv6, and both UDP and TCP. Existing services of the candidate operator should be evaluated for similarities to the candidates expected root server operation (e.g., query rate, use of anycast, zone size, zone update frequency).*

|  |  |
| --- | --- |
| **3.3.1** | ICANN has been operating global DNS services and specifically supporting Root Server Operations  for the past 20 years.  The team has an ethos that enforces community collaboration and constant training. we are currently involved and feed into DNS-OARC and RSSAC.  Team members have a strong community involvement and years of DNS experience across public and private entities. |

#### 3.3.2 Security Audit

*A security audit of the candidate operator should be performed and will be evaluated with respect to best current practices. It is expected that any security audit will be conducted by an organizations unaffiliated with the candidate operator. Audit results must be kept private unless otherwise agreed to by candidate operator.*

|  |  |
| --- | --- |
| **3.3.2** | ICANN undertakes annual  independent 3rd party security audits and pen testing against its root server infrastructure. ICANN DNS Engineering has internal tooling and testing which insures all change management is tracked and any anomalies are flagged. |

#### 3.3.3 Addressing Resources

*The candidate operator must obtain its own AS number(s) and IPv4 and IPv6 address allocations for operating a root server. It is assumed that IP anycast will be used. If IP anycast will not be used, a technology providing similar or better service levels should be specified. Provider address space or addresses that cannot be used with anycast are undesirable. The expected production IPv4 and IPv6 address blocks must be severable from the candidate’s organization to facilitate emergency or planned transfers.*

|  |  |
| --- | --- |
| **3.3.3** | ICANN has clearly defined anycast prefixes and covering prefixes for all IP space. ICANN also has a unique ASN for it’s root server operations. |

#### 3.3.4 DNS PTR Records

*The candidate operator should demonstrate the ability to set DNS PTR records for its IPv4 and IPv6 address space.*

|  |  |
| --- | --- |
| **3.3.4** | ICANN follows best practices for DNS PTR records and has reverse zones for it’s IP address blocks, populated with PTR entries for all actively used addresses. |

#### 3.3.5 Address Reputation

*The reputation of the candidate operator’s IP address blocks should be evaluated. Addresses with a bad reputation that are listed in one or more black lists (e.g., Spamhaus Don’t Route Or Peer List) might affect a client’s ability to reach the candidate’s servers.*

|  |  |
| --- | --- |
| **3.3.5** | L-Root address space can be checked in a number of ways, we use the following services  - <https://bgpmon.net/> - <https://www.radb.net/members/global/> - <https://radar.qrator.net/as20144> |

#### 3.3.6 Peering Data

*The candidate operator should have accurate and up-to-date information in known routing databases. If peering is to be used, accurate and up-to-date entries in a known peering database (e.g., PeeringDB) with complete information (e.g., contacts, policies, peers) are desirable.*

|  |  |
| --- | --- |
| **3.3.6** | ICANN maintains up to date peering records in:  - <https://www.peeringdb.com/asn/20144> - </lroot/peering/> |

#### 3.3.7 Address Registries

*The candidate operator’s address space should be accurately registered in one of the Regional Internet Registry (RIR) public databases. Additionally, the candidate should have appropriate entries in relevant public routing registries for their IPv4 and IPv6 address space.*

|  |  |
| --- | --- |
| **3.3.7** | ICANN’s address space is properly registered with ARIN and route objects are in RIPE’s RADB.  - <https://whois.arin.net/rest/net/NET6-2001-500-9E-1> - <https://whois.arin.net/rest/net/NET-199-7-82-0-1> - <https://apps.db.ripe.net/search/lookup.html?source=ripe&key=199.7.82.0/23AS20144&type=route> |

#### 3.3.8 Zone Distribution Architecture

*For efficiency, the candidate operator must maintain an internal zone distribution system. Since it is anticipated that the candidate operator will utilize IP anycast, load balancing, and/or multiple backend servers, the operator is expected to not unduly burden the root zone maintainer with an excessive number of zone transfer clients. The candidate operator should describe, in detail, their existing or proposed internal zone distribution architecture.*

|  |  |
| --- | --- |
| **3.3.8** | ICANN has an internal zone distribution system comprised of  two independent distribution servers in each of two geographically separate sites to update the L-Root instances. Both KNOT and NSD are used in each site for diversity. |

#### 3.4.1 Geographic Diversity

*The candidate operator is expected to provide root zone service from multiple geographic locations utilizing IP anycast, or a technology affording the same functionality as IP anycast. Serving more locations regionally will be considered better than serving less. The ability to operate in multiple continents and countries is preferred. Ideally, the candidate operator will provide service in regions not already well-served by other root operators.*

|  |  |
| --- | --- |
| **3.4.1** | ICANN uses IP anycast and has nodes on all populated continents. </lroot/locations/> |

#### 3.4.2 Network Provider Diversity

*Utilizing multiple upstream network providers can be of benefit to candidate operators that use third-party network providers. Candidate operators should demonstrate or document that they are not susceptible to the problems and sustained outages of a single network provider.*

|  |  |
| --- | --- |
| **3.4.2** | ICANN uses multiple network providers for its clustered sites and also has the diversity of 160 ‘singles’ through a number of host companies with diverse providers around the globe |

#### 3.4.3 Network Hardware Diversity

*Platform and vendor diversity can improve resilience by not relying on a single vendor or model for routers, switches, load balancers, and other networking equipment. For example, if a “0-day” vulnerability exists in a certain vendor’s platform, the candidate operator should be able to continue using other, unaffected equipment.*

|  |  |
| --- | --- |
| **3.4.3** | ICANN practices diversity in the hardware deployed in its clustered sites as well as  the ‘singles’ that are used by host companies.  ICANN uses the following routing engines (Quagga, OpenBGPD) split between instances. |

#### 3.4.4 Server Diversity

*This can refer to different hardware vendors or different models of general purpose computers from the same vendor. Server diversity can be of benefit, whether it is inter- or intra-site.*

|  |  |
| --- | --- |
| **3.4.4** | ICANN Currently uses multiple models of Dell X86 servers. |

#### 3.4.5 Operating System Diversity

*Operating system diversity allows an operator to continue operation in the event of an operating system defect causing an outage. Per [RSSAC001 E.3.6-A](/rssac/rssac001-response), systemic operating system diversity is desirable.*

|  |  |
| --- | --- |
| **3.4.5** | ICANN uses Linux and FreeBSD, two well vetted Operating Systems for diversity of OS. |

#### 3.4.6 Application Diversity

*Application diversity provides resilience at the application layer, which includes name server software (e.g., BIND, Knot, NSD), routing software (e.g., Quagga, OpenBGPD, BIRD), and other possibly required applications. Per RSSAC001 E.3.6-A, systemic application diversity is desirable.*

|  |  |
| --- | --- |
| **3.4.6** | ICANN follows best practices and uses multiple flavors of routing daemons, as well as name server daemons. |

#### 3.4.7 Human Diversity

*The candidate operator should demonstrate or document that it does not rely on any single individual for technical operations. It is very beneficial when skills and knowledge are distributed so that operation continues even if key personnel depart or otherwise become unavailable.*

|  |  |
| --- | --- |
| **3.4.7** | L-Root operator staff are all capable of managing each aspect of the Root server infrastructure. Skills are distributed across the team and the team is geographically and time zone separated to avoid regional natural disasters or outages. |

#### 3.4.8 Access Segregation

*The candidate operator should segment which staff (e.g., engineering personnel, NOC staff, remote hands) have access to which equipment (e.g., servers, routers, load balancers). Documentation of which staff members have access to which equipment must be considered private to the candidate operator.*

|  |  |
| --- | --- |
| **3.4.8** | Access to L-Root instances is restricted to the DNS Engineering team. Local operators have physical access to hosted root servers, but no shell access. |

#### 3.5.1 Maintenance Procedures

*The candidate operator should have documented maintenance procedures and make them available for evaluation. Per RSSAC001 E.3.3-A, the candidate operator should have the ability to take a subset of their service offline for maintenance without affecting the overall operation.*

|  |  |
| --- | --- |
| **3.5.1** | Access to ICANN roo  DNS Engineering is responsible for the RSO function at ICANN. ICANN DNS Engineering has two posted recurring maintenance windows for routine work. [https://dns.icann.org/scheduled-maintenance/](/scheduled-maintenance/)A repository of maintenance procedures is held by L-Root operators to cover most maintenance procedures. |

#### 3.5.2 Emergency and Attack Recovery

*In the event of unplanned outages, documented procedures should describe how to recover. For example, when anycast is utilized, routes are expected to be withdrawn from sites unable to provide service, either manually or automatically. The candidate operator should have documentation describing remote access, and how support staff can interact with a hosting provider’s onsite support.*

|  |  |
| --- | --- |
| **3.5.2** | ICANN has procedures on remote access in the event of an outage or attack. Documented procedures exist in ICANN’s DNS Engineering repository for withdrawing the anycast /24(v4) /48(v6) specific prefixes in order to protect a site or do maintenance work. Contact information is held in ICANN’s internal repository with information and contacts for each server instance. |

#### 3.5.3 Disaster Recovery and Business Continuity

*The candidate operator should have disaster recovery and business continuity plans. This includes recovering from natural disasters and other catastrophic events. This documentation should include information on backup sites, data recovery, and backup Network Operation Centers (NOCs).*

|  |  |
| --- | --- |
| **3.5.3** | NOC operations are outsourced to a contracted third party.  ICANN practices DR and has locations for its backend tooling in two regions in order to have business continuity in case of natural or unnatural disasters.  Data is replicated between sites. |

#### 3.5.4 Network Operation Center

*The candidate operator should document their Network Operation Center (NOC). Documentation should include NOC availability, number of staff, time to respond, and staff on-call policies.*

|  |  |
| --- | --- |
| **3.5.4** | ICANN NOC information is available in [https://dns.icann.org/aboutus](/aboutus). NOC is 24/7 and can be reached via email at noc @ dns . icann.org and via phone number +1 (424) 217-1313 |

#### 3.5.5 Computer Emergency Response Team Interaction

*The candidate operator should have relationships and documented procedures in place for interacting with the larger security community and security advisories. This includes both responding to security advisories that might affect candidate operator’s service, and advising the Internet security community of issues or attacks discovered or experienced by the candidate operator. Established relationships with local Computer Emergency Response Teams (CERTs) or Computer Security Incident Response Teams (CSIRTs) are advantageous.*

|  |  |
| --- | --- |
| **3.5.5** | ICANN RSO staff participate in all major Internet groups and security forums as well as collaborate with other RSO’s to combat and mitigate new and known issues. Regular face to face meetings occur with other RSO’s. |

#### 3.6.1 Data & Measurement

*The candidate operator should provide sample data collection output, including but not limited to RSSAC002 metrics. The candidate should commit to participate in Domain Name System-Operations Analysis and Research Center (DNS-OARC)1 and its regular Day in the Life of the Internet (DITL)2 data collections. If necessary, the candidate operator could be provided sample input data to test their data collection output. See RSSAC001 E.3.7-B.*

|  |  |
| --- | --- |
| **3.6.1** | ICANN keeps and publishes up to date metrics on all its managed root servers as long as it doesn’t impact the core operation of responding to DNS queries  - </lroot/stats/> (Using [DNS-STATS](http://dns-stats.org/)) - [stats.dns.icann.org](http://stats.dns.icann.org/) - [RSSAC-002 data](http://stats.dns.icann.org/rssac/) |

#### 3.6.2 Sample “x.root-servers.org” Web Page

*The candidate operator should demonstrate their ability to maintain a .root-servers.org web page by providing a mock-up in HTML.*

|  |  |
| --- | --- |
| **3.6.2** | ICANN maintains the content of [l.root-servers.org](http://l.root-servers.org), which redirects to the ICANN DNS Engineering website and its L-Root location [https://dns.icann.org/lroot/](https://dns.icann.org/lroot/). |
