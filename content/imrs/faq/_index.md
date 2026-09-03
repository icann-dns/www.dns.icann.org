---
title: "FAQ hosting IMRS"
aliases:
    - /lroot/faq/
---

1. **Who might be interested in Hosting an *ICANN Managed Root Server* (IMRS)?**
     
   An IMRS would be of benefit to those who run large networks such as *Internet Service Providers* (ISPs), *Data Service providers* (DSPs), *Domain Name Registries* and *Registrars*, or even independent organizations who are working on securing a stable and resilient DNS infrastructure for their countries and/or regions.  
   Currently, all sorts of stakeholder groups maintain Root Singles such as Governments, Business Entities, Academia, the Technical Community, National Research and Educational Networks (NRENs), NGOs, Network Operator Groups (NOGs), among others. The only exception are IXPs outside of the ones listed [here](http://www.peeringdb.com/view.php?asn=20144 "ASN 20144 L-Root").
2. **Does ICANN maintain other Root-Servers?**
     
   ICANN **only** maintains 1 of the 13 root servers. More information can be found in [http://root-servers.org](http://root-servers.org/)
3. **Before initiating a formal process with ICANN, I have a couple of questions in this regard. Who should I contact?**
     
   Your starting point of contact must be the ICANN Global Stakeholder Engagement representative covering your region (also known as [GSE representative](http://www.icann.org/en/about/staff/gse "Global Stakeholder Engagement representative")).  
   If the regional team cannot answer your questions, they will facilitate communications with someone who can answer them.
4. **What is an IMRS?**
     
   An [*ICANN Managed Root Server*](/imrs) (IMRS) is the name for the Root Server instance operated by ICANN.  
   In addition of ICANN hosting IMRS instances, ICANN partners with willing [third parties](/imrs/peering/) to host additional instances to help and improve a secure, stable and resilient DNS infrastructure for their countries and/or regions.
5. **What is an IMRS instance?**
     
   An IMRS Instance is a single server, or a set of servers and associated hardware, providing the IMRS service that is singularly managed, controlled, and supervised as a unique identity. An Instance presents a clearly defined routing policy to the Internet, and as such it remains independent of all other instances in the IMRS constellation. The Internet in this definition is any other ASN’s routing domain than the IMRS [ASN of 20144](/aboutus/nr/)
6. **What is an IMRS Cluster?**
     
   A “Cluster” is an IMRS instance comprised of a set of servers and associated hardware providing the IMRS service at a single location which is designed to serve a larger DNS query load, community, or specific region.  
   An IMRS Cluster is completely managed, controlled and supervised by ICANN.
7. **What is an IMRS Single?**
     
   An IMRS Single is an IMRS instance deployment using just one server in an “appliance” model. IMRS Single deployments are hosted by a third party, but managed, controlled and supervised by ICANN.
8. **Can I receive a copy of the IMRS Contract as a first or prior step?**  
   The IMRS Contract is provided upon successful completion of ICANN due-diligence and the signature of the NDA.
9. **Can I receive a copy of the detailed Technical Requirements Sheet along with the NDA and IMRS Contract?**
     
   A dedicated detailed Technical Requirements Sheet shall be provided once the NDA is signed by the interested hosting entity. The IMRS contract does provide technical specifications of the required hardware installation
10. **Is the NDA and/or IMRS Contract Negotiable?**
      
    The NDA and IMRS Contract are **non-negotiable**. Also note that the contract is only fully executable in its original English version.
11. **What Hardware Appliance should I buy?**
      
    The current hardware appliances that you should use to install IMRS is provided by a third-party-vendor. Those appliances are known with 2 code names: **Calypso** and **Pandora**.
      
    **Calypso** is a small 1U appliance. It’s recommended for most networks and is capable to handle 1Gbps of DNS traffic.  
    **Pandora** is a bigger 1U appliance intended for Internet Provider Networks (such as Tier-1 providers) that can handle 10Gbps of DNS traffic.
12. **Where do I buy the Hardware Appliance?**
      
    The ICANN GSE team will provide that information once the NDA is signed.
      
    ICANN has engaged a third party vendor that supplies the appliance hardware and also provides international purchasing and shipping to the IMRS host.
13. **What are the minimal networking technical requirements to host an IMRS?**  
    Although most of the technical requirements are defined extensively in the Contract, here’s a summary of the network portion:
    - Host must have Dual-Stack connectivity (i.e. IPv4 and IPv6)
    - Host must have enabled and actively using [BCP38](https://tools.ietf.org/html/bcp38) in their networks
    - Host must be able to establish a BGP session and accept the advertisement of the following routes from origin **AS 20144**: **199.7.82.0/23**, **199.7.83.0/24**, **2001:500:3::/48**, **2001:500:9e::/47**, **2001:500:9f::/48**
14. **Are there any fees incurred by ICANN to host an IMRS?**
      
    In the spirit of developing the Internet infrastructure around the world, ICANN **does not** charge any fees for such installation. The hosting party, nevertheless, will have to cover the running costs of hosting the IMRS such as Internet Bandwidth, Electricity, Hardware Maintenance, etc.
15. **Once the IMRS is up-and-running, can I access it?**
      
    No. The IMRS is critical infrastructure and must be managed solely by ICANN DNS Engineering team. If access is to be granted to any hosting party, it is a security risk to the entire DNS system regardless of how good the intentions are. Hosting parties are requested to treat the system as they would if they were hosting a customer’s server.
16. **Can the IMRS appliance be installed behind a host firewall?**
      
    No, it is a requirement for the IMRS systems to be installed outside of host networks firewalls and addresses assigned to the system are routable (not private address space)
17. **I have an Internet Exchange Point (IXP), and I’d like to deploy an IMRS to it. Can this be done?**
      
    IXPs **are not a part of the IMRS deployment plan**. There are a couple exceptions listed [here](http://www.peeringdb.com/view.php?asn=20144 "Peering with ASN 20144").
      
    Nevertheless, there are other Root Servers Organizations that do support IXP installations such as the [ISC managed Root-Server](http://f.root-servers.org "ISC F-Root"), [NetNod managed Root-Server](http://i.root-servers.org "Netnod's I-Root") or the [Verisign managed Root-Server](http://j.root-servers.org/), among [others](http://root-servers.org).
18. **As I am restricted to access the IMRS, I am concerned that my network will be attacked. Are my concerns valid?**
      
    The instance is a root name server, and it just answers DNS. If at any point the instance is under the stress of an attack and if the hosting party feels concerned, then the host can choose to disconnect the server from their network and contact [ICANN DNS Engineering](/aboutus/ "DNS Engineering team"), promptly and accordingly.
19. **I am concerned that the IMRS is a spying device. Are my concerns valid?**
      
    ICANN is about supporting the stability of the Internet, and IMRS is just one of the many [Root Name Servers](http://root-servers.org/ "Root Name Servers website") currently operating.
      
    ICANN just collects data and telemetry from the server about how many and which queries it gets. No other data is available to or collected by ICANN. The type of data ICANN collects makes graphs and some other metric statistics for operational purposes like the ones shown at [http://stats.dns.icann.org](http://stats.dns.icann.org "L-Root stats").
20. **What is the benefit of hosting an IMRS?**
      
    In order to maintain a secure, stable, and resilient DNS infrastructure, all ICANN stakeholder groups are encouraged to join hands and work on initiatives to ensure such effort. One of those initiatives is the installation and deployment of [Root-Servers](http://root-servers.org "Root Name Servers website").  
    Another benefit of hosting an IMRS is that it can reduce DNS query response times for your networks and reduce the amount of Bandwidth usage for DNS queries on the root-zone going outside your network.
21. **I would like to terminate my IMRS Contract with ICANN. What steps should I undertake?**
      
    Please inform ICANN of your intention to terminate your IMRS contract with reasonable notice in which case the IMRS will be decommissioned and the server hardware is returned to you and remains your property to use as you see fit.
