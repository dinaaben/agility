# Run a comparative analysis

-   [Comparison uses](#Runacomparativeanalysis-Comparisonuses)

-   [Create a Reference set](#Runacomparativeanalysis-CreateaReferenc)

-   [Add call flows to your Reference
    set](#Runacomparativeanalysis-Addcallflowstoy)

-   [Manage your references](#Runacomparativeanalysis-Manageyourrefer)

-   [Run a comparison](#Runacomparativeanalysis-Runacomparison)

-   [Interpret your comparison
    results](#Runacomparativeanalysis-Interpretyourco)

The call flow **Comparison** feature enables you to compare selected
call flows with a reference set of flows and provide a similarity score
between the call flows, facilitating the identification of the closest
matches and highlighting differences.

Note: AGILITY currently supports VoLTE call flows for this feature.

## Comparison uses

-   **System upgrades:** Comparative analysis in AGILITY can assist you
    during software and network upgrades. Creating a Reference set of
    call flows before your upgrade and running a comparison after your
    upgrade can help to identify drifts between pre-upgrade and
    post-upgrade releases. This can help identify changes that may have
    been introduced by new issues and speed up corrective actions.

-   **Identifying call flows:** Creating a Reference set containing
    different call flows such as VoLTE-VoLTE, VoLTE-PSTN, VoLTE-Vo WIFI,
    Breakout, Handover, Conference, and Diversion allows you to compare
    a new call flow and identify which flow it matches.

-   **Troubleshooting:** Creating a Reference set with golden call flows
    can assist you in troubleshooting an issue by showing you
    differences and failures to more quickly pinpoint the source of the
    issue.

You must create reference sets before you run a comparative analysis.

## Create a Reference set

1.  Choose an existing analysis or run a new one. See
    Add link
    or Add link.

2.  From your High Level Summary, [choose the call
    flow](https://d.docs.live.net/wiki/spaces/AKB1/pages/3037560963/View+results+in+Call+Flow+Details)
    that you want to use as a new reference.

3.  On the Call Flow Details page, select **Set as a Reference** and
    enter a name for the new reference and select the checkmark.

> The reference is added to the **Added as Reference** list.

## Add call flows to your Reference set

To add additional call flows to your Reference set:

1.  Choose an existing analysis or run a new one. See
    Add link
    or Add link.

2.  From your High Level Summary, [choose the call
    flow](https://d.docs.live.net/wiki/spaces/AKB1/pages/3037560963/View+results+in+Call+Flow+Details)
    that you want to add to a reference set.

3.  On the Call Flow Details page, select **Set as a Reference** and
    choose the existing reference(s) you want to add the call flow to.
    It is added to the reference when a checkmark displays in the box.

4.  Click away from the Reference area to close the window.

## Manage your references

View and manage your references from the Reference page found in the
main AGILITY menu.

1.  Select **References** from the AGILITY main menu.
    The list of references opens and you can expand a reference to view
    the call flows it contains.

2.  Choose a call flow. You can view by Epoch or Timeframe, enter a
    search keyword, or search the call flow by setting the minimum and
    maximum frame number.

3.  To delete the entire reference, select the word **Delete**.\
    To delete a call flow in the Reference, select the Delete icon next
    to the call flow you want to delete.

Note: You must have at least one call flow in your Reference set.
Deleting all call flows will remove the Reference set.

## Run a comparison

1.  Choose an existing analysis or run a new one. See
    Add link
    or Add link.

2.  From your High Level Summary, [choose the call
    flow](https://d.docs.live.net/wiki/spaces/AKB1/pages/3037560963/View+results+in+Call+Flow+Details)
    that you want to compare against a reference set.

3.  On the Call Flow Details page, select the **Comparison** tab.

4.  Select the reference set you want from the **Reference Element**
    list.\
    AGILITY runs the comparison and displays the results.

## Interpret your comparison results

After your comparison runs, AGILITY displays the comparative analysis.

**Similarity score** is the percentage of similarity the selected call
flow has to call flows within the Reference set. The call flows in the
set are arranged from highest percentage match to lowest.

Below the Similarity score, AGILITY displays more information about the
call flows.

  |**Information**|**Description**|
| :- | :- |
  |  **Call Flow Info** |     Signature or identifier of the flow with key identifying details and metrics that define each individual flow within the network, such as Flow type, File name, Time stamp, Duration, Protocols, and Interfaces.
  |**Network Topology Info**    |    Details about the network environment supporting various types of flows. It includes information on network topology, the type of mobile networks, and network configuration parameters such us ports and addresses.
| **Messages Info** |Detailed log and analysis of the signaling messages that are key to the establishment, maintenance, and termination of communication flows, such as Messages list, Response errors, SIP branch type, Message causes.|
  