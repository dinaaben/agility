# View results in Call Flow Details

-   [What is an AGILITY Call
    Flow?](#ViewresultsinCallFlowDetails-WhatisanAG)

-   [About The Call Flow Details
    page](#ViewresultsinCallFlowDetails-AboutTheCa)

-   [View call flow result
    statuses](#ViewresultsinCallFlowDetails-Viewcallfl)

-   [View Basic Call Flow Details
    information](#ViewresultsinCallFlowDetails-ViewBasicC)

-   [View the error
    classification](#ViewresultsinCallFlowDetails-Viewtheerr)

# What is an AGILITY Call Flow?

Call flows help provide a comprehensive understanding of the
communication process and are essential for troubleshooting, analysis,
and optimization in telecommunication networks.

Call flows depict the various stages and processes involved in
establishing, managing, and terminating a call, including signaling,
routing, and protocol interactions. AGILITY includes not only end-to-end
calls (UEa - UEb) but also connectivity between UEa and the network
(4G5G NSA, 5G SA) to include, voice, video, and data streaming.

# About The Call Flow Details page

The Call Flow Details Page provides all of the key insights derived from
network captures, including:

-   The file name and classification of the call flow

-   The Service type affiliated with the packet captures analyzed

-   Call Flow Diagrams, including the Sequence diagram and the Topology
    diagram.

-   Protocol Level Analysis

-   Flow Extractions for message attributes

-   Diagnostics

-   KPI Analysis

**Note:** You need to run or select an analysis in order to view call
flow details.

To view the Call Flow Details page:

1.  [Select an Analysis
    file](https://d.docs.live.net/wiki/spaces/AKB1/pages/3037659168/Access+your+analyses).

2.  Select the See Details icon to view all Call Flows, call flows by
    Subscriber (IMSI or MSISDN), or call flows by Network Slices,
    Detected or with Failures, on the High-Level Summary cards.

> You'll be redirected to the Call Flow Details for the selected
> analysis/analyses.

Optional Pro Tip: Click the arrow to collapse the Analysis List and
expand the Call Flow Details area.

# View call flow result statuses

You can view the status of your call flow results in the Analysis List
next to the Call Flow Details.

Call flow result statuses:

  |**Status** | **Description**|
  |:-|:-|
  |**Success**|   If your call flow analysis has the Result Status **Success**, the call flow was completed without any warnings or errors.|
  |**Unknown** |  If your call flow analysis has the Result Status **Unknown**, there isn\'t enough information available to determine the outcome of the call definitively.|
  |**Failure**  |  If your call flow analysis has the Result Status **Failed**, AGILITY detected (a) network failure(s) that require your attention. |
  |**Warning** |  If your call flow analysis has the Result Status **Warning**, the call succeeded overall, but there are certain elements, conditions, or errors that should be noted or monitored.|
  ----------------------------------------------------------------------------

# View Basic Call Flow Details information

To view additional information, including the IMSI, MSISDN, device type,
start date and time, and file path. without leaving the Call Flow
Details window, select the drop-down arrow next the the Call Flow
Details heading.

You can set the call flow times to show as your time zone or UTC. See
[Change your call flow time
setting](https://d.docs.live.net/wiki/spaces/AKB1/pages/3237314626/Change+your+call+flow+time+setting)
for more information.

# View the error classification

If you have an identifiable error in your call flow, it displays at the
top of the Call Flow Details page.

Select the arrow next to Classification to expand the section:

To see more details about the error, select the
[**[Diagnostics]**
tab](https://d.docs.live.net/wiki/spaces/AKB1/pages/3037560989/Diagnostics+tab).