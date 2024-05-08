# View your High-Level Summary

## <a name="viewyourhigh-levelsummary-thehigh-levelsummary"></a>**The High-Level Summary** 
The High-Level summary page is a gateway to in-depth Call Flow analyses.

It provides key insights that help you:

- visualize network troubleshooting workflows
- prioritize network assurance measures and troubleshooting
- optimize network error isolation
- resolve failures

AGILITY’s High-Level Summary page allows you to identify analyses with the highest failure rates at the outset of the troubleshooting process so you can focus on key areas.

![high-level-summary.png](Aspose.Words.5317fb15-06f9-405c-88b5-fcce3085b818.001.png) 
## <a name="viewyourhigh-levelsummary-networkactivityoverviewcards"></a>**Network activity overview cards**
The High-Level Summary shows the **Analysis Insights** tab by default.

The overview cards on the High-Level Summary page provide links that direct you to the detected and failure pages for Network Slices, Subscribers, and [Call Flows](https://nexiusocp.atlassian.net/l/cp/Hg9gApo2).
### <a name="viewyourhigh-levelsummary-networkslices"></a>**Network Slices**
A summary of network slices in the analysis.

- Network Slices Detected
- Network Slices with Failures

Select the See Details icon to view the details about the detected or failed calls by network slicing.

5G network slicing is a technique that allows for the creation of multiple virtual networks on top of a single physical 5G infrastructure. A single physical network is divided into multiple virtual networks, called slices. Each slice can be optimized for a specific type of service or for a specific customer or application. Slicing creates challenges for management and orchestration.

Read our [blog post](https://www.b-yond.com/post/how-network-slicing-ensures-5g-quality-and-scalability) on network slicing.

With network slicing capabilities AGILITY offers filtering of call flows by Network Slice/Service Type (SST) to quickly identify virtualized and independent logical networks on the same physical network.
### <a name="viewyourhigh-levelsummary-services"></a>**Services**
A summary of services in the analysis.

- Services Detected
- Services with Failures
### <a name="viewyourhigh-levelsummary-networkfunctions"></a>**Network Functions**
A summary of network functions in the analysis.

- Network Functions Detected
- Network Functions with Failures
### <a name="viewyourhigh-levelsummary-subscribers"></a>**Subscribers**
A summary of subscribers (IMSIs or MSISDNs) in the analysis.

- Subscribers Detected
- Subscribers with Failure

Select the See Details icon to view the details about the detected or failed calls by Subscriber.
### <a name="viewyourhigh-levelsummary-callflows"></a>**Call Flows**
A summary of the call flows in the analysis.

- Call Flows Detected
- Call Flows with Failures

Select the See Details icon to view the details about the detected or failed calls by [Call Flows](https://nexiusocp.atlassian.net/l/cp/Hg9gApo2).
## <a name="viewyourhigh-levelsummary-networkkpis"></a>**Network KPIs**
A KPI analysis, or Key Performance Indicator analysis, is a process of evaluating and assessing the performance of a call flow against a configurable reference value (an average value or a golden rule) to better understand network performance. In AGILITY you can view KPIs at the network and the [call flow levels](https://nexiusocp.atlassian.net/wiki/x/HYBFtg).

Select the **Analysis KPIs** tab to search and view the network KPIs in your analysis.

AGILITY contains the following network performance indicator:

**Note:** Depending on your service, you may not see indicators.

|**KPI**|**Description**|
| :- | :- |
|Control plane latency|The time it takes for signaling and control messages to travel within a network (ms)|

If you have Administrator rights, you can edit the KPI values and thresholds. For more, see [Configure KPI Reference and Threshold values (Administrator role)](file:///C:/wiki/spaces/AKB1/pages/3060269087).
## <a name="viewyourhigh-levelsummary-networkactivityoverviewgraphs"></a>**Network activity overview graphs**
### <a name="viewyourhigh-levelsummary-networkslicesdistribution"></a>**Network Slices Distribution**
The Network Slices Distribution pie chart depicts the ratio of network slices with success, warning, unknown, and failed flows.

- Hover over the chart to view the number of network slices with successful, warning, unknown, and failed flows.
### <a name="viewyourhigh-levelsummary-subscribersdistribution"></a>**Subscribers Distribution**
The Subscribers Distribution pie chart depicts the ratio of IMSIs or MSISDNs with successful, warning, unknown, and failed flows.

![](Aspose.Words.5317fb15-06f9-405c-88b5-fcce3085b818.002.png) 

- Hover over the chart to view the number of Subscribers with successful, warning, unknown, and failed call flows.
### <a name="viewyourhigh-levelsummary-callflowdistribution"></a>**Call Flow Distribution**
The Call Flow Distribution pie chart depicts the ratio of successful, warning, unknown, and failed flows.

![](Aspose.Words.5317fb15-06f9-405c-88b5-fcce3085b818.003.png) 

- Hover over the chart to view the number of successful, warning, unknown, and failed call flows.
### <a name="viewyourhigh-levelsummary-callflowdistributionpernetworkslice"></a>**Call Flow Distribution per Network Slice**
The Call Flow Distribution per Slice bar chart depicts the number of services on the Y axis and the name of the Slice detected on the X axis.

![](Aspose.Words.5317fb15-06f9-405c-88b5-fcce3085b818.004.png) 

- Hover over the bars for more information.
### <a name="viewyourhigh-levelsummary-callflowdistributionperservice"></a>**Call Flow Distribution per Service**
The Call Flow Distribution per Service bar chart depicts the number of services on the Y axis and the name of the Service(s) detected on the X axis.

![](Aspose.Words.5317fb15-06f9-405c-88b5-fcce3085b818.005.png) 

- Hover over the bars for more information.

**Note:** If the Service name is truncated, hover over the X-axis to expose the full name.
### <a name="viewyourhigh-levelsummary-networkfunctionsresponsibleforfailures"></a>**Network Functions responsible for Failures**
The Network Functions responsible for Failures bar chart depicts the number of call flows for each network functions that are involved or are responsible for the failures.

![](Aspose.Words.5317fb15-06f9-405c-88b5-fcce3085b818.006.png) 

- Hover over the bars for more information.
-----
Next: View the detailed results of AGILITY’s PCAP analysis in the[Call Flow Details ](file:///C:/wiki/spaces/AKB1/pages/3037560963/View+results+in+Call+Flow+Details)page.
