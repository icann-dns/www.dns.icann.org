---
title: "Root Zone Scaling Report"
---

### Introduction: Root Zone Scaling Report

This stable and regularly (weekly) updated report is provided in response to the commitment by ICANN to ensure that sufficient information is placed in the hands of the ICANN community regarding the impact of additional delegations (gTLDs) being added to the Root Zone.

Additional guidance as to the motivations for this report can be found in the documents “[Root Zone Scaling Measurements at L-Root](http://www.icann.org/en/news/announcements/announcement-3-07dec12-en.htm)” and “*[Report: Impact on Root Server Operations and Provisioning Due to New gTLDs](http://www.icann.org/en/news/announcements/announcement-27jun12-en.htm)“*.

The trend of query statistics from July 2012, as observed at [L-Root](/lroot/), can be reviewed using the interactive tool [DNS-STATS](http://stats.dns.icann.org "ICANN DNS-STATS"). This tool allows in depth review of many DNS protocol components, and DNS query trends based on both geographical region as well as individual instances of [L-Root](/lroot/) or collections of L-Root instances.

Data used for this report, Root Zone Scaling Report – Root Zone, dates back to June 1999.

### Report Focus

This report focuses on the Root Zone content measurements, as follows.

- [The size of the overall root zone](#size-overall-root-zone)
- [The number of delegations (TLDs)](#number-of-delegations)
- [The root zone size per delegation](#root-zone-size-per-delegation)
- [The number of resource records in the root zone](#number-of-rr-in-root-zone)

All of the graphs presented herein are derived from actual, historical, Root Zone data. It should be noted that whilst not every version of the root zone is available for analysis, ICANN commits to save and archive all version of the root zone from 2013 onwards for future analysis.

The current ICANN archive of Root Zone data can be downloaded from [here](http://stats.research.icann.org/root-zone/data/root-zone-archive.tar.gz).

### The size of the overall root zone

Figure 1. Shows a graph against time of the compiled root zone as transferred from the Root Zone Maintainer.

[![Figure 1: Compiled Root Zone Size](http://stats.research.icann.org/root-zone/graphs/zone-size.png "Compiled Root Zone Size")](http://stats.research.icann.org/root-zone/graphs/zone-size.png)  
Figure 1: Compiled Root Zone Size

The size of the un-signed Root Zone has been plotted separately from the signed Root Zone to distinguish the impact of DNSSEC signing on the Root Zone.

### The number of delegations

This is a count of the number of Top Level Domains (TLDs) in the root zone and is the very basic measure, over time, of root zone growth.

[![Figure 2: Number of Delegations in the Root Zone](http://stats.research.icann.org/root-zone/graphs/zone-delegationCount.png "Number of Delegations in the Root Zone")](http://stats.research.icann.org/root-zone/graphs/zone-delegationCount.png)  
Figure 2: Number of Delegations in the Root Zone

### The root zone size per delegation

Dividing the compiled size of the root zone by the number of delegations produces the per delegation size.

[![Figure 3: Root Zone size per Delegation](http://stats.research.icann.org/root-zone/graphs/zone-size_and_delegation.png "Root Zone Size per Delegation")](http://stats.research.icann.org/root-zone/graphs/zone-size_and_delegation.png)  
Figure 3: Root Zone size per Delegation

The trend for this measure of growth identifies the impacts of resource record types on the predictive size of delegations,  with the understanding that IPv6 records and DNSSEC records have tangible impact. Note that the size is expressed in Bytes.

### The number of resource records in the root zone

The number of DNS Resource Records provides a balanced scale analysis of Root Zone growth.

Figure 4 shows the Resource Record count along with the number of delegations (TLDs) in the root zone, while Figure 5 expands the count to all Resource Record types seen in the Root Zone.

[![Figure 4: Delegation and Resource Records](http://stats.research.icann.org/root-zone/graphs/zone-TLDRRCount.png "Delegation and Resource Records")](http://stats.research.icann.org/root-zone/graphs/zone-TLDRRCount.png)  
Figure 4: Delegation and Resource Records

[![Figure 5:Resource Records in the Root Zone](http://stats.research.icann.org/root-zone/graphs/zone-RRCount.png "Resource Records in the Root Zone")](http://stats.research.icann.org/root-zone/graphs/zone-RRCount.png)  
Figure 5:Resource Records in the Root Zone
