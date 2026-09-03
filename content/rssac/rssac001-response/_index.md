---
title: "RSSAC001 Response"
---

#### This document

The [Root Server System Advisory Committee](https://www.icann.org/groups/rssac) has developed [RSSAC001](https://www.icann.org/en/system/files/files/rssac-001-root-service-expectations-04dec15-en.pdf) to document the service expectations for [Root Server Operators](http://www.root-servers.org). This page describes how [ICANN](/) meets the service expectations for the [ICANN Managed Root Server service](/imrs/) it operates. This is a living web page and it is reviewed and updated as and when ICANN reviews and improves the processes and tools it uses to provide the ICANN Managed Root Server service and at least twice a year.

#### How we meet the RSSAC001 requirements

#### 3.1 Infrastructure

|  |  |
| --- | --- |
| **E.3.1-A** | Individual Root Server Operators are to publish or continue to publish operationally relevant details of their infrastructure, including service-delivery locations, addressing information and routing (e.g., origin autonomous system) information. |
| **E.3.1-B** | Individual Root Servers will deliver the service in conformance to IETF standards and requirements as described in [RFC 7220](https://tools.ietf.org/html/rfc7720) and any other IETF standards-defined Internet Protocol as deemed appropriate. |

ICANN Managed Root Server publishes its service-delivery locations, addressing and AS Number details on the [Root Server Technical Operation Association website](http://root-servers.org/), on a dedicated [ICANN Managed Root Server Internet Number Resources page](/aboutus/nr/), and in the DNS, as described in [RFC 7108](https://www.rfc-editor.org/rfc/rfc7108.txt). ICANN Managed Root Server service delivers TCP and UDP DNS service over IPv4 and IPv6. A statistical report of the service provided is published on ICANN’s [DNS statistics](http://stats.dns.icann.org/) server.

#### 3.2 Service Accuracy

|  |  |
| --- | --- |
| **E.3.2-A** | Individual Root Servers will adopt or continue to implement the current DNS protocol and associated best practices through appropriate software and infrastructure choices. |
| **E.3.2-B** | Individual Root Servers will serve accurate and current revisions of the root zone. |
| **E.3.2-C** | Individual Root Servers will continue to provide “loosely coherent” service across their infrastructure. |
| **E.3.2-D** | All Root Servers will continue to serve precise, accurate zones as distributed from the Root Zone Maintainer. |

ICANN implements the current DNS protocol for ICANN Managed Root Server and uses current operating systems and industry proven DNS software distributed using [Anycast](https://www.rfc-editor.org/rfc/rfc4786.txt) routing to provide a loosely coherent service. ICANN will continue to serve the unmodified version of root zone as obtained from the Root Zone Maintainer. ICANN collects measurements and analyzes them for how long it takes new versions of the root DNS zone to propagate to all ICANN Managed Root Server instances. These measurements are currently available as [raw data in YAML format](http://stats.dns.icann.org/rssac/) and will be integrated into the Hedgehog reporting service when it is upgraded to the next major version.

#### 3.3 Service Availability

|  |  |
| --- | --- |
| **E.3.3-A** | Individual Root Servers are to be deployed such that planned maintenance on individual infrastructure elements is possible without any measurable loss of service availability. |
| **E.3.3-B** | Infrastructure used to deploy individual Root Servers is to be significantly redundant, such that unplanned failures in individual components must not cause the corresponding service to become generally unavailable to the Internet. |
| **E.3.3-C** | Each Root Server Operator shall publish documentation that describes the operator’s commitment to service availability through maintenance scheduling and its commitment to the notification of relevant operational events to the Internet community. |

When this document was last updated, ICANN Managed Root Server had instances [in over 150 geographical locations](/imrs/locations) making use of diverse set of upstream carriers. ICANN is confident that sufficient capacity exists in its deployed infrastructure to allow for substantial flash crowds or Denial of Service attacks. The service is significantly redundant, such that unplanned failures in individual components do not make ICANN Managed Root Server service generally unavailable to the Internet. ICANN publishes details of maintenance windows on its [DNS website](/). ICANN plans and executes [scheduled maintenance](/scheduled-maintenance/ "Maintenance Schedule") in a way that avoids disruptions to the ICANN Managed Root Server service.

#### 3.4 Service Capability

|  |  |
| --- | --- |
| **E.3.4-A** | Individual Root Server Operators will make all reasonable efforts to ensure that sufficient capacity exists in their deployed infrastructure to allow for substantial flash crowds or denial of service (DoS) attacks. |
| **E.3.4-B** | Each Root Server Operator shall publish documentation on the capacity of their infrastructure, including details of current steady-state load and the maximum estimated capacity available. |

ICANN Managed Root Server has instances deployed in all populated continental areas, distributed [as described in this map](/imrs/locations/). Some locations have multiple ICANN Managed Root Server instances situated in different networks and each ICANN Managed Root Server instance is designed and tested to be able to meet at least 10 times its normal peak load.

#### 3.5 Operational Security

|  |  |
| --- | --- |
| **E.3.5-A** | Individual Root Server Operators will adopt or continue to follow best practices with regard to operational security in the operation of their infrastructure. |
| **E.3.5-B** | Root Server Operators shall publish high-level business continuity plans with respect to their Root Server infrastructure. |

ICANN implements industry best practice processes for the operational security of the ICANN Managed Root Server system and has plans to support continuity of operation for the ICANN Managed Root Server service in the event of a disaster. Plans support the continuity of key business and technical operations during an event requiring them and reconstitution plans for the period after that event.

#### 3.6 Diversity of Implementation

|  |  |
| --- | --- |
| **E.3.6-A** | Each Root Server Operator shall publish documentation that describes key implementation choices (such as the type of DNS software used) to allow interested members of the Internet community to assess the diversity of implementation choices across the system as a whole. |

ICANN uses two well-vetted operating systems ([FreeBSD](http://www.freebsd.org) and [Linux](http://www.kernel.org)) and two industry proven DNS server implementations ([Knot](https://www.knot-dns.cz/) and [NSD](https://www.nlnetlabs.nl/projects/nsd/)). Before deploying changes to the ICANN Managed Root Server services, ICANN executes a structured change management process that includes appropriate testing and compliance checks to assure management that changes will not impair ICANN Managed Root Server operations. Additionally, ICANN has support contracts with the entities from whom we obtain software to make sure that we have the highest level of support in the event that it is required.

#### 3.7 Monitoring and Measurement

|  |  |
| --- | --- |
| **E.3.7-A** | Each Root Server Operator will adopt or continue to follow best current practices with respect to operational monitoring of elements within their infrastructure. |
| **E.3.7-B** | Each Root Server Operator will adopt or continue to perform measurements of query traffic received and shall publish statistics based on those measurements. |

ICANN has led the development of best current practices for DNS infrastructure monitoring and has deployed systems to monitor elements within its infrastructure. ICANN systematically reviews load, performance, and other metrics to identify scope for future service improvements. These are all published on ICANN’s [DNS Statistics](http://stats.dns.icann.org/) server.

#### 3.8 Communication

|  |  |
| --- | --- |
| **E.3.8.1-A** | Individual Root Server Operators will continue to maintain functional communication channels between each other in order to facilitate coordination and maintain functional working relationships between technical staff. |
| **E.3.8.1-B** | All communications channels are to be tested regularly. |

ICANN participates in regular face-to-face meetings with other Root Server Operators (RSOs). These meetings are supplemented with industry standard discussion forums. ICANN cooperates with the other RSOs to regularly test common communication channels.

|  |  |
| --- | --- |
| **E.3.8.2-A** | Individual Root Server Operators shall publish administrative and operational contact information to allow users and other interested parties to escalate technical service concerns. |

ICANN publishes e-mail and telephone contact information for ICANN Managed Root Server operations on [its web page.](/imrs) The contact e-mail address is published on the [Root Server Technical Operation Association](http://root-servers.org/) as well as in the SOA RNAME element for *l.root-servers.org*. The contact information for ICANN’s hub and engagement offices is also available [on its main website](https://forms.icann.org/en/contact). ICANN’s global presence means that it has offices in most populated time zones.
