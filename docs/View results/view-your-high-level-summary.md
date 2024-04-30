# View your High-Level Summary

-   [The High-Level Summary](#ViewyourHigh-LevelSummary-TheHigh-Level)

    -   [Network activity overview
        cards](#ViewyourHigh-LevelSummary-Networkactivi)

        -   [Network Slices](#ViewyourHigh-LevelSummary-NetworkSlices)

        -   [Services](#ViewyourHigh-LevelSummary-Services)

        -   [Network
            Functions](#ViewyourHigh-LevelSummary-NetworkFuncti)

        -   [Subscribers](#ViewyourHigh-LevelSummary-Subscribers)

        -   [Call Flows](#ViewyourHigh-LevelSummary-CallFlows)

    -   [Network KPIs](#ViewyourHigh-LevelSummary-NetworkKPIs)

    -   [Network activity overview
        graphs](#ViewyourHigh-LevelSummary-Networkactivi)

        -   [Network Slices
            Distribution](#ViewyourHigh-LevelSummary-NetworkSlices)

        -   [Subscribers
            Distribution](#ViewyourHigh-LevelSummary-SubscribersDi)

        -   [Call Flow
            Distribution](#ViewyourHigh-LevelSummary-CallFlowDistr)

        -   [Call Flow Distribution per Network
            Slice](#ViewyourHigh-LevelSummary-CallFlowDistr)

        -   [Call Flow Distribution per
            Service](#ViewyourHigh-LevelSummary-CallFlowDistr)

        -   [Network Functions responsible for
            Failures](#ViewyourHigh-LevelSummary-NetworkFuncti)

# The High-Level Summary 

The High-Level summary page is a gateway to in-depth Call Flow analyses.

It provides key insights that help you:

-   visualize network troubleshooting workflows

-   prioritize network assurance measures and troubleshooting

-   optimize network error isolation

-   resolve failures

AGILITY's High-Level Summary page allows you to identify analyses with
the highest failure rates at the outset of the troubleshooting process
so you can focus on key areas.

![](media/image1.tmp){width="4.875in" height="9.902777777777779in"}

## Network activity overview cards

The High-Level Summary shows the **Analysis Insights** tab by default.

The overview cards on the High-Level Summary page provide links that
direct you to the detected and failure pages for Network Slices,
Subscribers, and [Call
Flows](https://nexiusocp.atlassian.net/l/cp/Hg9gApo2).

### Network Slices

A summary of network slices in the analysis.

-   Network Slices Detected

-   Network Slices with Failures

Select the See Details icon to view the details about the detected or
failed calls by network slicing.

5G network slicing is a technique that allows for the creation of
multiple virtual networks on top of a single physical 5G infrastructure.
A single physical network is divided into multiple virtual networks,
called slices. Each slice can be optimized for a specific type of
service or for a specific customer or application. Slicing creates
challenges for management and orchestration.

Read our [blog
post](https://www.b-yond.com/post/how-network-slicing-ensures-5g-quality-and-scalability)
on network slicing.

With network slicing capabilities AGILITY offers filtering of call flows
by Network Slice/Service Type (SST) to quickly identify virtualized and
independent logical networks on the same physical network.

### Services

A summary of services in the analysis.

-   Services Detected

-   Services with Failures

### Network Functions

A summary of network functions in the analysis.

-   Network Functions Detected

-   Network Functions with Failures

### Subscribers

A summary of subscribers (IMSIs or MSISDNs) in the analysis.

-   Subscribers Detected

-   Subscribers with Failure

Select the See Details icon to view the details about the detected or
failed calls by Subscriber.

### Call Flows

A summary of the call flows in the analysis.

-   Call Flows Detected

-   Call Flows with Failures

Select the See Details icon to view the details about the detected or
failed calls by [Call
Flows](https://nexiusocp.atlassian.net/l/cp/Hg9gApo2).

## Network KPIs

A KPI analysis, or Key Performance Indicator analysis, is a process of
evaluating and assessing the performance of a call flow against a
configurable reference value (an average value or a golden rule) to
better understand network performance. In AGILITY you can view KPIs at
the network and the [call flow
levels](https://nexiusocp.atlassian.net/wiki/x/HYBFtg).

Select the **Analysis KPIs** tab to search and view the network KPIs in
your analysis.

AGILITY contains the following network performance indicator:

**Note:** Depending on your service, you may not see indicators.

  -----------------------------------------------------------------------
  **KPI**         **Description**
  --------------- -------------------------------------------------------
  Control plane   The time it takes for signaling and control messages to
  latency         travel within a network (ms)

  -----------------------------------------------------------------------

If you have Administrator rights, you can edit the KPI values and
thresholds. For more, see [Configure KPI Reference and Threshold values
(Administrator
role)](https://d.docs.live.net/wiki/spaces/AKB1/pages/3060269087).

## Network activity overview graphs

### Network Slices Distribution

The Network Slices Distribution pie chart depicts the ratio of network
slices with success, warning, unknown, and failed flows.

-   Hover over the chart to view the number of network slices with
    successful, warning, unknown, and failed flows.

### Subscribers Distribution

The Subscribers Distribution pie chart depicts the ratio of IMSIs or
MSISDNs with successful, warning, unknown, and failed flows.

![](media/image2.tmp){width="4.25in" height="1.75in"}

-   Hover over the chart to view the number of Subscribers with
    successful, warning, unknown, and failed call flows.

### Call Flow Distribution

The Call Flow Distribution pie chart depicts the ratio of successful,
warning, unknown, and failed flows.

![](media/image3.tmp){width="4.215277777777778in"
height="1.7708333333333333in"}

-   Hover over the chart to view the number of successful, warning,
    unknown, and failed call flows.

### Call Flow Distribution per Network Slice

The Call Flow Distribution per Slice bar chart depicts the number of
services on the Y axis and the name of the Slice detected on the X axis.

![](media/image4.tmp){width="4.215277777777778in" height="1.8125in"}

-   Hover over the bars for more information.

### Call Flow Distribution per Service

The Call Flow Distribution per Service bar chart depicts the number of
services on the Y axis and the name of the Service(s) detected on the X
axis.

![](media/image5.png){width="4.875in" height="1.0347222222222223in"}

-   Hover over the bars for more information.

**Note:** If the Service name is truncated, hover over the X-axis to
expose the full name.

### Network Functions responsible for Failures

The Network Functions responsible for Failures bar chart depicts the
number of call flows for each network functions that are involved or are
responsible for the failures.

![](media/image6.png){width="4.875in" height="0.9236111111111112in"}

-   Hover over the bars for more information.

![(blue star)](media/image7.tmp){width="0.16666666666666666in"
height="0.16666666666666666in"}Next: View the detailed results of
AGILITY's PCAP analysis in the [Call Flow
Details](https://d.docs.live.net/wiki/spaces/AKB1/pages/3037560963/View+results+in+Call+Flow+Details)
page.