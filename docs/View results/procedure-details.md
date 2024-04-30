# Procedure details

In the sequence diagram, you have the option to filter directly by
specific protocol procedures, allowing you to focus on analysis. All
procedures are defined using 3GPP definitions.

![](media/image1.tmp){width="3.125in" height="2.8125in"}

Below, you\'ll find the list and details of each procedure per protocol.
These tables can be used as a reference to understand the procedures
list included with the sequence diagram.

# Diameter

Diameter is a signaling protocol used in telecommunications for
authentication, authorization, and accounting (AAA) purposes. It is
often used in communication between network elements, such as between a
user\'s device and a Policy and Charging Rules Function (PCRF) in mobile
networks.

+------------------+----------+----------+---------------------------+
| **Procedure      | **Inte   | **Str    | **Description**           |
| Name**           | rface/NE | ucture** |                           |
|                  | Name**   |          |                           |
+==================+==========+==========+===========================+
| ####             | I/S-CS   | DI       | This interface enables:\  |
|  DIAMETER_Cx_ims | CF\--HSS | AMETER + | •I-CSCF to locate the     |
|                  |          | int      | Serving CSCF for the      |
|                  |          | erface + | incoming request\         |
|                  |          | p        | •S-CSCF to obtain the     |
|                  |          | dn_class | authentication vectors    |
|                  |          |          | from the HSS\             |
|                  |          |          | •S-CSCF to obtain the     |
|                  |          |          | service profile data from |
|                  |          |          | the HSS\                  |
|                  |          |          | •S-CSCF to provide the    |
|                  |          |          | updated registration      |
|                  |          |          | information to the HSS\   |
|                  |          |          | •HSS to update the        |
|                  |          |          | service profile data to   |
|                  |          |          | the S-CSCF                |
|                  |          |          |                           |
|                  |          |          | Cx is a set of procedures |
|                  |          |          | that can be executed      |
|                  |          |          | between the CSCF          |
|                  |          |          | (interrogating and        |
|                  |          |          | serving) and the HSS.     |
|                  |          |          | Commands in this          |
|                  |          |          | interface are used for    |
|                  |          |          | the registration,         |
|                  |          |          | location, and service     |
|                  |          |          | profile access procedures |
|                  |          |          | on these interfaces.      |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | U                         |
|                  |          |          | ser-Authorization-Request |
|                  |          |          |      300\                 |
|                  |          |          | User-Authorization-Answer |
|                  |          |          |     300\                  |
|                  |          |          | Server-Assignment-Request |
|                  |          |          |     301\                  |
|                  |          |          | Server-Assignment-Answer  |
|                  |          |          |     301\                  |
|                  |          |          | Location-Info-Request     |
|                  |          |          | 302\                      |
|                  |          |          | Location-Info-Answer      |
|                  |          |          |     302\                  |
|                  |          |          | Multimedia-Auth-Request   |
|                  |          |          |     303\                  |
|                  |          |          | Multimedia-Auth-Answer    |
|                  |          |          |   303\                    |
|                  |          |          | Registrati                |
|                  |          |          | on-Termination-Request_Cx |
|                  |          |          | 304\                      |
|                  |          |          | Regist                    |
|                  |          |          | ration-Termination-Answer |
|                  |          |          |      304\                 |
|                  |          |          | Push-Profile-Request_Cx   |
|                  |          |          |      305\                 |
|                  |          |          | Push-Profile-Answer_Cx    |
|                  |          |          |      305                  |
+------------------+----------+----------+---------------------------+
| #### DIAMETER_Gx | PG       | DI       | Used by the PCRF to       |
|                  | W\--PCRF | AMETER + | deliver commands for      |
|                  |          | int      | deploying and deleting    |
|                  |          | erface + | charging policies to the  |
|                  |          | p        | PDN gateway (P-GW) and    |
|                  |          | dn_class | used by the P-GW to       |
|                  |          |          | report bearer events to   |
|                  |          |          | the PCRF. The Gx          |
|                  |          |          | interface is located      |
|                  |          |          | between the Policy and    |
|                  |          |          | Charging Enforcement      |
|                  |          |          | Function (PCEF) in PGW    |
|                  |          |          | and the Policy and        |
|                  |          |          | Charging Rules Function   |
|                  |          |          | (PCRF) The Gx interface   |
|                  |          |          | is used for provisioning  |
|                  |          |          | and removal of PCC rules  |
|                  |          |          | from the PCRF to the PCEF |
|                  |          |          | in PGW and the            |
|                  |          |          | transmission of traffic   |
|                  |          |          | plane events from the     |
|                  |          |          | PCEF to the PCRF. The Gx  |
|                  |          |          | interface can be used for |
|                  |          |          | charging control, policy  |
|                  |          |          | control or both by        |
|                  |          |          | applying AVPs relevant to |
|                  |          |          | the application.          |
|                  |          |          |                           |
|                  |          |          | The Gx interface provides |
|                  |          |          | the following functions:  |
|                  |          |          |                           |
|                  |          |          | -   Delivers PCC rules    |
|                  |          |          |     from the PCRF to the  |
|                  |          |          |     PCEF.                 |
|                  |          |          |                           |
|                  |          |          | -   Deletes PCC rules     |
|                  |          |          |     from the PCEF.        |
|                  |          |          |                           |
|                  |          |          | -   Transmits events from |
|                  |          |          |     the PCEF to the PCRF. |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Re-Auth-Request Gx        |
|                  |          |          | 258\                      |
|                  |          |          | Re-Auth-Answer Gx         |
|                  |          |          | 258\                      |
|                  |          |          | Credit-Control-Request Gx |
|                  |          |          |     272\                  |
|                  |          |          | Credit-Control-Answer Gx  |
|                  |          |          |     272                   |
+------------------+----------+----------+---------------------------+
| ####             | PG       | DI       | Used by the PCRF to       |
| DIAMETER_Gx_data | W\--PCRF | AMETER + | deliver commands for      |
|                  |          | int      | deploying and deleting    |
|                  |          | erface + | charging policies to the  |
|                  |          | p        | PDN gateway (P-GW) and    |
|                  |          | dn_class | used by the P-GW to       |
|                  |          |          | report bearer events to   |
|                  |          |          | the PCRF, specific to     |
|                  |          |          | data APN(pdn class). The  |
|                  |          |          | Gx interface is located   |
|                  |          |          | between the Policy and    |
|                  |          |          | Charging Enforcement      |
|                  |          |          | Function (PCEF) in PGW    |
|                  |          |          | and the Policy and        |
|                  |          |          | Charging Rules Function   |
|                  |          |          | (PCRF) The Gx interface   |
|                  |          |          | is used for provisioning  |
|                  |          |          | and removal of PCC rules  |
|                  |          |          | from the PCRF to the PCEF |
|                  |          |          | in PGW and the            |
|                  |          |          | transmission of traffic   |
|                  |          |          | plane events from the     |
|                  |          |          | PCEF to the PCRF. The Gx  |
|                  |          |          | interface can be used for |
|                  |          |          | charging control, policy  |
|                  |          |          | control or both by        |
|                  |          |          | applying AVPs relevant to |
|                  |          |          | the application.          |
|                  |          |          |                           |
|                  |          |          | The Gx interface provides |
|                  |          |          | the following functions:  |
|                  |          |          |                           |
|                  |          |          | -   Delivers PCC rules    |
|                  |          |          |     from the PCRF to the  |
|                  |          |          |     PCEF.                 |
|                  |          |          |                           |
|                  |          |          | -   Deletes PCC rules     |
|                  |          |          |     from the PCEF.        |
|                  |          |          |                           |
|                  |          |          | -   Transmits events from |
|                  |          |          |     the PCEF to the PCRF. |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Re-Auth-Request Gx        |
|                  |          |          | 258\                      |
|                  |          |          | Re-Auth-Answer Gx         |
|                  |          |          | 258\                      |
|                  |          |          | Credit-Control-Request Gx |
|                  |          |          |     272\                  |
|                  |          |          | Credit-Control-Answer Gx  |
|                  |          |          |     272                   |
+------------------+----------+----------+---------------------------+
| ####             | PG       | DI       | Used by the PCRF to       |
|  DIAMETER_Gx_ims | W\--PCRF | AMETER + | deliver commands for      |
|                  |          | int      | deploying and deleting    |
|                  |          | erface + | charging policies to the  |
|                  |          | p        | PDN gateway (P-GW) and    |
|                  |          | dn_class | used by the P-GW to       |
|                  |          |          | report bearer events to   |
|                  |          |          | the PCRF, specific to ims |
|                  |          |          | apn (pdn class). The Gx   |
|                  |          |          | interface is located      |
|                  |          |          | between the Policy and    |
|                  |          |          | Charging Enforcement      |
|                  |          |          | Function (PCEF) in PGW    |
|                  |          |          | and the Policy and        |
|                  |          |          | Charging Rules Function   |
|                  |          |          | (PCRF) The Gx interface   |
|                  |          |          | is used for provisioning  |
|                  |          |          | and removal of PCC rules  |
|                  |          |          | from the PCRF to the PCEF |
|                  |          |          | in PGW and the            |
|                  |          |          | transmission of traffic   |
|                  |          |          | plane events from the     |
|                  |          |          | PCEF to the PCRF. The Gx  |
|                  |          |          | interface can be used for |
|                  |          |          | charging control, policy  |
|                  |          |          | control or both by        |
|                  |          |          | applying AVPs relevant to |
|                  |          |          | the application.          |
|                  |          |          |                           |
|                  |          |          | The Gx interface provides |
|                  |          |          | the following functions:  |
|                  |          |          |                           |
|                  |          |          | -   Delivers PCC rules    |
|                  |          |          |     from the PCRF to the  |
|                  |          |          |     PCEF.                 |
|                  |          |          |                           |
|                  |          |          | -   Deletes PCC rules     |
|                  |          |          |     from the PCEF.        |
|                  |          |          |                           |
|                  |          |          | -   Transmits events from |
|                  |          |          |     the PCEF to the PCRF. |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name      Code**\       |
|                  |          |          | Re-Auth-Request Gx        |
|                  |          |          | 258\                      |
|                  |          |          | Re-Auth-Answer Gx         |
|                  |          |          | 258\                      |
|                  |          |          | Credit-Control-Request Gx |
|                  |          |          |     272\                  |
|                  |          |          | Credit-Control-Answer Gx  |
|                  |          |          |     272                   |
+------------------+----------+----------+---------------------------+
| ####             | P        | DI       | The Gy interface is used  |
| DIAMETER_Gy_data | GW\--OCS | AMETER + | for online charging       |
|                  |          | int      | between the OCS and the   |
|                  |          | erface + | PDN Gateway (PGW), this   |
|                  |          | p        | procedure is specific to  |
|                  |          | dn_class | data APN(pdn class).      |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name      Code**\       |
|                  |          |          | Credit-Control-Request    |
|                  |          |          |   272\                    |
|                  |          |          | Credit-Control-Answer     |
|                  |          |          | 272\                      |
|                  |          |          | Abort-Session-Request     |
|                  |          |          | 274\                      |
|                  |          |          | Abort-Session-Answer      |
|                  |          |          | 274                       |
+------------------+----------+----------+---------------------------+
| ####             | P        | DI       | The Gy interface is used  |
|  DIAMETER_Gy_ims | GW\--OCS | AMETER + | for online charging       |
|                  |          | int      | between the OCS and the   |
|                  |          | erface + | PDN Gateway (PGW), this   |
|                  |          | p        | procedure is specific to  |
|                  |          | dn_class | IMS APN(pdn class).       |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Credit-Control-Request    |
|                  |          |          |     272\                  |
|                  |          |          | Credit-Control-Answer     |
|                  |          |          | 272\                      |
|                  |          |          | Abort-Session-Request     |
|                  |          |          | 274\                      |
|                  |          |          | Abort-Session-Answer      |
|                  |          |          | 274                       |
+------------------+----------+----------+---------------------------+
| ####             | TA       | DI       | The Rf reference point is |
|  DIAMETER_Rf_ims | S\--OFCS | AMETER + | located between the       |
|                  |          | int      | Charging Trigger Function |
|                  |          | erface + | (CTF) and the Offline     |
|                  |          | p        | Charging Data System      |
|                  |          | dn_class | (OFCS), and is used for   |
|                  |          |          | the transport of charging |
|                  |          |          | events. The Rf interface  |
|                  |          |          | is between the OCS and    |
|                  |          |          | the IMS Call Session      |
|                  |          |          | Control Function (CSCF) , |
|                  |          |          | this procedure is         |
|                  |          |          | specific to IMSAPN(pdn    |
|                  |          |          | class).                   |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Accounting-Request Rf     |
|                  |          |          | 271\                      |
|                  |          |          | Accounting-Answer Rf      |
|                  |          |          | 271                       |
+------------------+----------+----------+---------------------------+
| ####             | T        | DI       | The  Ro interface is      |
|  DIAMETER_Ro_ims | AS\--OCS | AMETER + | between the OCS and the   |
|                  |          | int      | IMS Call Session Control  |
|                  |          | erface + | Function (CSCF) , this    |
|                  |          | p        | procedure is specific to  |
|                  |          | dn_class | IMS APN (pdn class).      |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Re-Auth-Request Ro        |
|                  |          |          | 258\                      |
|                  |          |          | Re-Auth-Answer Ro         |
|                  |          |          | 258\                      |
|                  |          |          | Credit-Control-Request Ro |
|                  |          |          |     272\                  |
|                  |          |          | Credit-Control-Answer Ro  |
|                  |          |          |     272                   |
+------------------+----------+----------+---------------------------+
| ####             | PCSC     | DI       | The Rx reference point is |
|  DIAMETER_Rx_ims | F\--PCRF | AMETER + | between the Policy and    |
|                  |          | int      | Charging Rules Function   |
|                  |          | erface + | (PCRF) and the Call       |
|                  |          | p        | Session Control Function  |
|                  |          | dn_class | (CSCF), and is used to    |
|                  |          |          | exchange application      |
|                  |          |          | level session information |
|                  |          |          | between the CSCF          |
|                  |          |          | application functions.    |
|                  |          |          | The application function  |
|                  |          |          | information is part of    |
|                  |          |          | the input used by the     |
|                  |          |          | PCRF for the Policy and   |
|                  |          |          | Charging Control (PCC)    |
|                  |          |          | decisions, this procedure |
|                  |          |          | is specific to IMS APN    |
|                  |          |          | (pdn class).              |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Re-Auth-Request Rx        |
|                  |          |          | 258\                      |
|                  |          |          | Re-Auth-Answer Rx         |
|                  |          |          | 258\                      |
|                  |          |          | AA-Request Rx       265\  |
|                  |          |          | AA-Answer Rx              |
|                  |          |          |                  265\     |
|                  |          |          | Abort-Session-Request Rx  |
|                  |          |          |      274\                 |
|                  |          |          | Abort-Session-Answer Rx   |
|                  |          |          |     274\                  |
|                  |          |          | Se                        |
|                  |          |          | ssion-Termination-Request |
|                  |          |          | Rx     275\               |
|                  |          |          | S                         |
|                  |          |          | ession-Termination-Answer |
|                  |          |          | Rx     275                |
+------------------+----------+----------+---------------------------+
| ####             | M        | DI       | The S6a reference point   |
| DIAMETER_S6a/S6d | ME\--HSS | AMETER + | is between the Home       |
|                  |          | int      | Subscriber Server (HSS)   |
|                  |          | erface + | and the Mobility          |
|                  |          | p        | Management Entity (MME),  |
|                  |          | dn_class | and is used for location  |
|                  |          |          | changes of the MME. The   |
|                  |          |          | S6d interface is between  |
|                  |          |          | the HSS and the Serving   |
|                  |          |          | GPRS Service Node (SGSN), |
|                  |          |          | for location changes of   |
|                  |          |          | the SGSN. The procedures, |
|                  |          |          | message parameters and    |
|                  |          |          | protocol are similar      |
|                  |          |          | between S6a and S6d.\     |
|                  |          |          | Reference:  3GPP TS29.272 |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Upd                       |
|                  |          |          | ate-Location-Request_S6.  |
|                  |          |          |   316\                    |
|                  |          |          | Up                        |
|                  |          |          | date-Location-Answer_S6.  |
|                  |          |          | 316\                      |
|                  |          |          | C                         |
|                  |          |          | ancel-Location-Request_S6 |
|                  |          |          |       317\                |
|                  |          |          | Cancel-Location-Answer_S6 |
|                  |          |          |       317\                |
|                  |          |          | Authenticati              |
|                  |          |          | on-Information-Request_S6 |
|                  |          |          |     318\                  |
|                  |          |          | Authenticat               |
|                  |          |          | ion-Information-Answer_S6 |
|                  |          |          |     318\                  |
|                  |          |          | Insert-S                  |
|                  |          |          | ubscriber-Data-Request_S6 |
|                  |          |          |      319\                 |
|                  |          |          | Insert-                   |
|                  |          |          | Subscriber-Data-Answer_S6 |
|                  |          |          |      319\                 |
|                  |          |          | Delete-Sub                |
|                  |          |          | scriber-Data-Request_S6.  |
|                  |          |          |   320\                    |
|                  |          |          | Delete-Sub                |
|                  |          |          | scriber-Data-Answer_S6.   |
|                  |          |          | 320\                      |
|                  |          |          | Purge-UE-Request_S6       |
|                  |          |          | 321\                      |
|                  |          |          | Purge-UE-Answer_S6.       |
|                  |          |          | 321\                      |
|                  |          |          | Reset-Request_S6          |
|                  |          |          | 322\                      |
|                  |          |          | Reset-Answer_S6      322\ |
|                  |          |          | Notify-Request_S6         |
|                  |          |          | 323\                      |
|                  |          |          | Notify-Answer_S6          |
|                  |          |          | 323                       |
+------------------+----------+----------+---------------------------+
| ####             | P        | DI       | The S6b reference point   |
| DIAMETER_S6b_ims | GW\--AAA | AMETER + | is between the PDN        |
|                  |          | int      | Gateway (PGW) and 3GPP    |
|                  |          | erface + | AAA server/proxy for      |
|                  |          | p        | mobility related          |
|                  |          | dn_class | authentication if needed. |
|                  |          |          | This reference point may  |
|                  |          |          | also be used to retrieve  |
|                  |          |          | and request storage of    |
|                  |          |          | mobility parameters, and  |
|                  |          |          | may also be used to       |
|                  |          |          | retrieve static QoS       |
|                  |          |          | profile for a UE for      |
|                  |          |          | non-3GPP access in case   |
|                  |          |          | dynamic PCC is not        |
|                  |          |          | supported, this procedure |
|                  |          |          | is specific to IMS APN    |
|                  |          |          | (pdn class).\             |
|                  |          |          | Reference:  3GPP TS29.273 |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Re-Auth-Request-S6b       |
|                  |          |          | 258\                      |
|                  |          |          | Re-Auth-Answer-S6b        |
|                  |          |          | 258\                      |
|                  |          |          | AA-Request-S6b-PMIPv6     |
|                  |          |          |   265\                    |
|                  |          |          | AA-Answer-S6b-PMIPv6      |
|                  |          |          |    265\                   |
|                  |          |          | Diamete                   |
|                  |          |          | r-EAP-Request-S6b-DSMIPv6 |
|                  |          |          |       268\                |
|                  |          |          | Diamet                    |
|                  |          |          | er-EAP-Answer-S6b-DSMIPv6 |
|                  |          |          |       268\                |
|                  |          |          | Abort-Session-Reque       |
|                  |          |          | st-S6b-3GPP-AAA-Initiated |
|                  |          |          |       274\                |
|                  |          |          | Abort-Session-Answ        |
|                  |          |          | er-S6b-3GPP-AAA-Initiated |
|                  |          |          |       274\                |
|                  |          |          | Session-Termination-      |
|                  |          |          | Request-S6b-PGW-Initiated |
|                  |          |          |      275\                 |
|                  |          |          | Session-Termination       |
|                  |          |          | -Answer-S6b-PGW-Initiated |
|                  |          |          |       275\                |
|                  |          |          | Ses                       |
|                  |          |          | sion-Termination-Request- |
|                  |          |          | S6b-3GPP-AAA-Initiated.   |
|                  |          |          |   275\                    |
|                  |          |          | Session-Termination-Answ  |
|                  |          |          | er-S6b-3GPP-AAA-Initiated |
|                  |          |          |       275                 |
+------------------+----------+----------+---------------------------+
| ####             | T        | DI       | The Sh reference point    |
|  DIAMETER_Sh_ims | AS\--HSS | AMETER + | resides between the Home  |
|                  |          | int      | Subscriber Server (HSS)   |
|                  |          | erface + | and an Application        |
|                  |          | p        | Function (AF). The Sh     |
|                  |          | dn_class | interface implements a    |
|                  |          |          | Diameter application that |
|                  |          |          | allows the download and   |
|                  |          |          | update of transparent and |
|                  |          |          | not-transparent user      |
|                  |          |          | data, and allows requests |
|                  |          |          | and notifications on      |
|                  |          |          | changes to user data,     |
|                  |          |          | this procedure is         |
|                  |          |          | specific to IMS APN (pdn  |
|                  |          |          | class).\                  |
|                  |          |          | Reference:  3GPP          |
|                  |          |          | TS29.328/TS29.329         |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | User-Data-Request         |
|                  |          |          | 306\                      |
|                  |          |          | User-Data-Answer          |
|                  |          |          | 306\                      |
|                  |          |          | Profile-Update-Request    |
|                  |          |          |     307\                  |
|                  |          |          | Profile-Update-Answer     |
|                  |          |          |   307\                    |
|                  |          |          | Subscr                    |
|                  |          |          | ibe-Notifications-Request |
|                  |          |          |      308\                 |
|                  |          |          | Subsc                     |
|                  |          |          | ribe-Notifications-Answer |
|                  |          |          |       308\                |
|                  |          |          | Push-Notification-Request |
|                  |          |          |        309\               |
|                  |          |          | Push-Notification-Answer  |
|                  |          |          |       309                 |
+------------------+----------+----------+---------------------------+
| ####             | PC       | DI       | This interface allows the |
|  DIAMETER_Sp_ims | RF\--SPR | AMETER + | PCRF to request           |
|                  |          | int      | subscription information  |
|                  |          | erface + | related to transport      |
|                  |          | p        | level policies from the   |
|                  |          | dn_class | SPR based on a subscriber |
|                  |          |          | ID, a PDN identifier and  |
|                  |          |          | possible further IP CAN   |
|                  |          |          | session attributes, as    |
|                  |          |          | specified in 3GPP TS      |
|                  |          |          | 23.203 v9.x. This         |
|                  |          |          | interface allows the SPR  |
|                  |          |          | to notify the PCRF when   |
|                  |          |          | the subscription          |
|                  |          |          | information has been      |
|                  |          |          | changed if the PCRF has   |
|                  |          |          | requested such            |
|                  |          |          | notifications. The SPR    |
|                  |          |          | shall stop sending the    |
|                  |          |          | updated subscription      |
|                  |          |          | information when a        |
|                  |          |          | cancellation notification |
|                  |          |          | request has been received |
|                  |          |          | from the PCRF.            |
|                  |          |          |                           |
|                  |          |          | PCRF queries the          |
|                  |          |          | Subscriber Profile        |
|                  |          |          | Repository(SPR) for       |
|                  |          |          | dynamic information of    |
|                  |          |          | subscriber over Sp        |
|                  |          |          | interface. SPR sends all  |
|                  |          |          | information about the     |
|                  |          |          | subscriber                |
|                  |          |          | policy/quota/rules to     |
|                  |          |          | PCRF over Sp interface,   |
|                  |          |          | this procedure is         |
|                  |          |          | specific to IMS APN (pdn  |
|                  |          |          | class).                   |
+------------------+----------+----------+---------------------------+
| ####             | H        | DI       | The SWx reference point   |
| DIAMETER_SWx_ims | SS\--AAA | AMETER + | are located between 3GPP  |
|                  |          | int      | AAA Server and HSS and is |
|                  |          | erface + | used for transport of     |
|                  |          | p        | authentication,           |
|                  |          | dn_class | subscription and PDN      |
|                  |          |          | connection related data.  |
|                  |          |          | The SWx interface is used |
|                  |          |          | for 3GPP LTE networks,    |
|                  |          |          | this procedure is         |
|                  |          |          | specific to IMS APN (pdn  |
|                  |          |          | class).\                  |
|                  |          |          | Reference:  3GPP TS29.273 |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Serv                      |
|                  |          |          | er-Assignment-Request-SWx |
|                  |          |          |       301\                |
|                  |          |          | Ser                       |
|                  |          |          | ver-Assignment-Answer-SWx |
|                  |          |          |      301\                 |
|                  |          |          | Multimedia-Auth-Request   |
|                  |          |          | SWx       303\            |
|                  |          |          | M                         |
|                  |          |          | ultimedia-Auth-Answer-SWx |
|                  |          |          |       303\                |
|                  |          |          | Registratio               |
|                  |          |          | n-Termination-Request-SWx |
|                  |          |          |      304\                 |
|                  |          |          | Registrati                |
|                  |          |          | on-Termination-Answer-SWx |
|                  |          |          |      304\                 |
|                  |          |          | Push-Profile-Request-SWx  |
|                  |          |          |      305\                 |
|                  |          |          | Push-Profile-Answer-SWx   |
|                  |          |          |      305                  |
+------------------+----------+----------+---------------------------+
| #### DIAMETER_Sy | PC       | DI       | The Sy reference point is |
|                  | RF\--OCS | AMETER + | located between the       |
|                  |          | int      | Policy and Charging Rules |
|                  |          | erface + | Function (PCRF) and the   |
|                  |          | p        | Online Charging System    |
|                  |          | dn_class | (OCS). The Sy reference   |
|                  |          |          | point enables transfer of |
|                  |          |          | policy counter status     |
|                  |          |          | information relating to   |
|                  |          |          | subscriber spending from  |
|                  |          |          | the OCS to the PCRF.\     |
|                  |          |          | Reference:  3GPP TS29.219 |
|                  |          |          |                           |
|                  |          |          | **Messages**\             |
|                  |          |          | **Name     Code**\        |
|                  |          |          | Se                        |
|                  |          |          | ssion-Termination-Request |
|                  |          |          | Sy      275\              |
|                  |          |          | S                         |
|                  |          |          | ession-Termination-Answer |
|                  |          |          | Sy      275\              |
|                  |          |          | Spending-Limit-Request    |
|                  |          |          |       8388635\            |
|                  |          |          | Spending-Limit-Answer     |
|                  |          |          |   8388635\                |
|                  |          |          | Spending-Statu            |
|                  |          |          | s-Notification-Request.   |
|                  |          |          | 8388636\                  |
|                  |          |          | Spending-Statu            |
|                  |          |          | s-Notification-Answer.    |
|                  |          |          | 8388636                   |
+------------------+----------+----------+---------------------------+

# GTPv2

GTPv2 (GPRS Tunneling Protocol version 2) is a protocol used in mobile
networks, particularly in the packet core network. It facilitates the
communication between different network elements, such as between the
Serving Gateway (SGW) and the PDN Gateway (PGW) in LTE (Long-Term
Evolution) networks.

+--------------------------+-------------+-------+--------------------+
| **Procedure Name**       | **I         | **S   | **Description**    |
|                          | nterface/NE | truct |                    |
|                          | Name**      | ure** |                    |
+==========================+=============+=======+====================+
| #                        | MME\        | GT    | Indicates GTPv2    |
| ### GTPv2_Setup_data_apn | --SGW\--PGW | Pv2 + | procedures for     |
|                          | (S11/S5/S8) | i     | data APN-based     |
|                          |             | nterf | connections.       |
|                          |             | ace + |                    |
|                          |             | pdn_  | The S11 reference  |
|                          |             | class | point is between   |
|                          |             |       | the MME and SGW    |
|                          |             |       | and is used to     |
|                          |             |       | support mobility   |
|                          |             |       | and bearer         |
|                          |             |       | management between |
|                          |             |       | the MME and S-GW.\ |
|                          |             |       | The S5 reference   |
|                          |             |       | point provides     |
|                          |             |       | user plane         |
|                          |             |       | tunneling and      |
|                          |             |       | tunnel management  |
|                          |             |       | between the SGW    |
|                          |             |       | and PGW.\          |
|                          |             |       | The S8 reference   |
|                          |             |       | point is the       |
|                          |             |       | inter-PLMN         |
|                          |             |       | interface          |
|                          |             |       | providing the user |
|                          |             |       | plane and control  |
|                          |             |       | plane between the  |
|                          |             |       | SGW in the Visited |
|                          |             |       | PLMN (VPLMN) and   |
|                          |             |       | the PGW in the     |
|                          |             |       | Home PLMN (HPLMN). |
|                          |             |       |                    |
|                          |             |       | GTP-U (GPRS Tunnel |
|                          |             |       | Protocol User)     |
|                          |             |       | tunnels are used   |
|                          |             |       | between two        |
|                          |             |       | entities of the    |
|                          |             |       | EPS network. Such  |
|                          |             |       | tunnels enable the |
|                          |             |       | traffic data to be |
|                          |             |       | compartmentalized. |
|                          |             |       | GTP-U traffic      |
|                          |             |       | tunnels are        |
|                          |             |       | constructed on the |
|                          |             |       | S1-U, S5 and X2    |
|                          |             |       | interfaces. The    |
|                          |             |       | tunnel is          |
|                          |             |       | identified by the  |
|                          |             |       | TEID parameter,    |
|                          |             |       | the IP addresses   |
|                          |             |       | and the UDP port   |
|                          |             |       | numbers. The       |
|                          |             |       | entity receiving   |
|                          |             |       | the traffic or     |
|                          |             |       | signaling data     |
|                          |             |       | determines the     |
|                          |             |       | value of the TEID  |
|                          |             |       | parameter which    |
|                          |             |       | the sending entity |
|                          |             |       | has to use.\       |
|                          |             |       | The values of the  |
|                          |             |       | TEID parameter of  |
|                          |             |       | the GTP-U protocol |
|                          |             |       | are exchanged via  |
|                          |             |       | the GTPv2-C (GPRS  |
|                          |             |       | Tunnel Protocol    |
|                          |             |       | Control), S1-AP    |
|                          |             |       | and X2-AP          |
|                          |             |       | protocols.         |
|                          |             |       |                    |
|                          |             |       | The TEID parameter |
|                          |             |       | used for the       |
|                          |             |       | signaling          |
|                          |             |       | exchanged over the |
|                          |             |       | S5 interface is    |
|                          |             |       | unique. The same   |
|                          |             |       | parameter is used  |
|                          |             |       | for all signaling  |
|                          |             |       | messages relating  |
|                          |             |       | to the activation  |
|                          |             |       | of the various S5  |
|                          |             |       | bearers for the    |
|                          |             |       | different mobiles. |
|                          |             |       | The TEID parameter |
|                          |             |       | used for the       |
|                          |             |       | signaling          |
|                          |             |       | exchanged over S11 |
|                          |             |       | interface is       |
|                          |             |       | unique for each    |
|                          |             |       | mobile. The same   |
|                          |             |       | parameter is used  |
|                          |             |       | for all signaling  |
|                          |             |       | messages relating  |
|                          |             |       | to the             |
|                          |             |       | establishment of   |
|                          |             |       | the various S1-U   |
|                          |             |       | bearers for the    |
|                          |             |       | same mobile.       |
|                          |             |       |                    |
|                          |             |       | **Bearer           |
|                          |             |       | Management:**      |
|                          |             |       |                    |
|                          |             |       | The signaling      |
|                          |             |       | bearer related to  |
|                          |             |       | a mobile is        |
|                          |             |       | created by the     |
|                          |             |       | CREATE SESSION     |
|                          |             |       | REQUEST message.   |
|                          |             |       | It is reinforced   |
|                          |             |       | by the use of a    |
|                          |             |       | TEID parameter.    |
|                          |             |       | The message is     |
|                          |             |       | transmitted:\      |
|                          |             |       | -- by the MME      |
|                          |             |       | entity to the      |
|                          |             |       | serving gateway    |
|                          |             |       | (SGW), over the    |
|                          |             |       | S11 interface;\    |
|                          |             |       | -- by the target   |
|                          |             |       | SGW entity for the |
|                          |             |       | PDN gateway (PGW), |
|                          |             |       | over the S5        |
|                          |             |       | interface. The     |
|                          |             |       | request is         |
|                          |             |       | transmitted when   |
|                          |             |       | any of the         |
|                          |             |       | following          |
|                          |             |       | procedures are     |
|                          |             |       | initiated:         |
|                          |             |       |                    |
|                          |             |       | -   attachment of  |
|                          |             |       |     the mobile     |
|                          |             |       |                    |
|                          |             |       | -   traffic        |
|                          |             |       |     request from   |
|                          |             |       |     the mobile     |
|                          |             |       |                    |
|                          |             |       | -   updating of    |
|                          |             |       |     the tracking   |
|                          |             |       |     area code      |
|                          |             |       |     (TAC)          |
|                          |             |       |                    |
|                          |             |       | -   handover       |
|                          |             |       |                    |
|                          |             |       | The SGW entity (or |
|                          |             |       | respectively PGW   |
|                          |             |       | entity) responds   |
|                          |             |       | to the MME entity  |
|                          |             |       | (or respectively   |
|                          |             |       | SGW entity) with   |
|                          |             |       | the CREATE SESSION |
|                          |             |       | RESPONSE message.\ |
|                          |             |       | The signaling      |
|                          |             |       | bearer is          |
|                          |             |       | deactivated by the |
|                          |             |       | exchange of the    |
|                          |             |       | DELETE SESSION     |
|                          |             |       | REQUEST/RESPONSE   |
|                          |             |       | messages.\         |
|                          |             |       | The procedure is   |
|                          |             |       | triggered when the |
|                          |             |       | mobile detaches,   |
|                          |             |       | when the traffic   |
|                          |             |       | is released, when  |
|                          |             |       | the TAC changes,   |
|                          |             |       | leading to a       |
|                          |             |       | modification of    |
|                          |             |       | the SGW entity, or |
|                          |             |       | when handover      |
|                          |             |       | occurs, with a     |
|                          |             |       | switch of the      |
|                          |             |       | SGW.\              |
|                          |             |       | The dedicated      |
|                          |             |       | bearer specific to |
|                          |             |       | a mobile is        |
|                          |             |       | created similarly, |
|                          |             |       | modified possibly  |
|                          |             |       | and deleted by the |
|                          |             |       | exchange of the    |
|                          |             |       | following          |
|                          |             |       | messages:\         |
|                          |             |       | -- CREATE / MODIFY |
|                          |             |       | / DELETE BEARER    |
|                          |             |       | REQUEST\           |
|                          |             |       | -- CREATE / MODIFY |
|                          |             |       | / DELETE BEARER    |
|                          |             |       | RESPONSE.\         |
|                          |             |       | The DOWNLINK DATA  |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message is sent by |
|                          |             |       | the SGW entity to  |
|                          |             |       | the MME entity,    |
|                          |             |       | over the S11       |
|                          |             |       | interface.\        |
|                          |             |       | The procedure      |
|                          |             |       | follows the        |
|                          |             |       | reception by the   |
|                          |             |       | SGW entity of data |
|                          |             |       | from the PGW       |
|                          |             |       | entity, with the   |
|                          |             |       | mobile in ECM-IDLE |
|                          |             |       | mode. Just after   |
|                          |             |       | receiving this     |
|                          |             |       | message, the MME   |
|                          |             |       | entity sends the   |
|                          |             |       | S1-AP PAGING       |
|                          |             |       | message to the eNB |
|                          |             |       | entities belonging |
|                          |             |       | to the TAC.        |
|                          |             |       |                    |
|                          |             |       | The MME entity may |
|                          |             |       | respond with the   |
|                          |             |       | DOWNLINK DATA      |
|                          |             |       | NOTIFICATION       |
|                          |             |       | ACKNOWLEDGE        |
|                          |             |       | message,           |
|                          |             |       | indicating whether |
|                          |             |       | or not the request |
|                          |             |       | is accepted or     |
|                          |             |       | with the DOWNLINK  |
|                          |             |       | DATA NOTIFICATION  |
|                          |             |       | FAILURE INDICATION |
|                          |             |       | message if the     |
|                          |             |       | mobile does not    |
|                          |             |       | respond to the     |
|                          |             |       | paging or if the   |
|                          |             |       | mobile service     |
|                          |             |       | request is         |
|                          |             |       | rejected.\         |
|                          |             |       | The CREATE         |
|                          |             |       | INDIRECT DATA      |
|                          |             |       | FORWARDING TUNNEL  |
|                          |             |       | REQUEST/RESPONSE   |
|                          |             |       | messages create a  |
|                          |             |       | specific traffic   |
|                          |             |       | bearer when        |
|                          |             |       | handover occurs.   |
|                          |             |       | This bearer        |
|                          |             |       | forwards the data  |
|                          |             |       | traffic received   |
|                          |             |       | by the source eNB  |
|                          |             |       | entity to the SGW  |
|                          |             |       | entity to then be  |
|                          |             |       | re-transmitted to  |
|                          |             |       | the mobile via the |
|                          |             |       | target eNB entity. |
|                          |             |       |                    |
|                          |             |       | **Mobility         |
|                          |             |       | Management**:      |
|                          |             |       |                    |
|                          |             |       | Mobility           |
|                          |             |       | management         |
|                          |             |       | messages are       |
|                          |             |       | exchanged between  |
|                          |             |       | the source and     |
|                          |             |       | target MME         |
|                          |             |       | entities, when the |
|                          |             |       | handover of the    |
|                          |             |       | mobile imposes a   |
|                          |             |       | switch of MME      |
|                          |             |       | entity.\           |
|                          |             |       | The source MME     |
|                          |             |       | entity sends the   |
|                          |             |       | target MME entity  |
|                          |             |       | the FORWARD        |
|                          |             |       | RELOCATION REQUEST |
|                          |             |       | message containing |
|                          |             |       | the context of the |
|                          |             |       | mobile.\           |
|                          |             |       | The target MME     |
|                          |             |       | entity responds    |
|                          |             |       | with the FORWARD   |
|                          |             |       | RELOCATION         |
|                          |             |       | RESPONSE message   |
|                          |             |       | when the resources |
|                          |             |       | needed for the     |
|                          |             |       | handover have been |
|                          |             |       | reserved.\         |
|                          |             |       | The response       |
|                          |             |       | contains the       |
|                          |             |       | values of the TEID |
|                          |             |       | parameter, which   |
|                          |             |       | will enable the    |
|                          |             |       | source SGW entity  |
|                          |             |       | to redirect the    |
|                          |             |       | traffic to the     |
|                          |             |       | target SGW entity  |
|                          |             |       | during handover.\  |
|                          |             |       | Upon receiving     |
|                          |             |       | this message, the  |
|                          |             |       | source MME entity  |
|                          |             |       | sends the source   |
|                          |             |       | eNB entity the     |
|                          |             |       | command to         |
|                          |             |       | initiate           |
|                          |             |       | handover.\         |
|                          |             |       | The source MME     |
|                          |             |       | entity sends the   |
|                          |             |       | target MME entity  |
|                          |             |       | the FORWARD ACCESS |
|                          |             |       | CONTEXT            |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message to provide |
|                          |             |       | it with the        |
|                          |             |       | elements of the    |
|                          |             |       | context of the     |
|                          |             |       | E-RAB bearer, such |
|                          |             |       | as the PDCP        |
|                          |             |       | sequence number.\  |
|                          |             |       | The target MME     |
|                          |             |       | entity sends the   |
|                          |             |       | source MME entity  |
|                          |             |       | the FORWARD        |
|                          |             |       | RELOCATION         |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message to         |
|                          |             |       | indicate that the  |
|                          |             |       | handover procedure |
|                          |             |       | is complete.       |
|                          |             |       |                    |
|                          |             |       | The new MME entity |
|                          |             |       | sends the CONTEXT  |
|                          |             |       | REQUEST message to |
|                          |             |       | the former one in  |
|                          |             |       | the procedure of   |
|                          |             |       | TAI updating, to   |
|                          |             |       | retrieve           |
|                          |             |       | information about  |
|                          |             |       | the context of the |
|                          |             |       | mobile.\           |
|                          |             |       | The former MME     |
|                          |             |       | entity provides    |
|                          |             |       | this information   |
|                          |             |       | in the CONTEXT     |
|                          |             |       | RESPONSE message,  |
|                          |             |       | which may contain  |
|                          |             |       | a positive or      |
|                          |             |       | negative           |
|                          |             |       | response.\         |
|                          |             |       | The new MME entity |
|                          |             |       | acknowledges this  |
|                          |             |       | previous message   |
|                          |             |       | with the message   |
|                          |             |       | CONTEXT            |
|                          |             |       | ACKNOWLEDGE.\      |
|                          |             |       | Reference:  3GPP   |
|                          |             |       | TS 29.274-e10      |
+--------------------------+-------------+-------+--------------------+
| #### GTPv2_Setup_ims_apn | MME\        | GT    | Indicates GTPv2    |
|                          | --SGW\--PGW | Pv2 + | procedures for IMS |
|                          | (S11/S5/S8) | i     | APN based          |
|                          |             | nterf | connections.       |
|                          |             | ace + |                    |
|                          |             | pdn_  | The S11 reference  |
|                          |             | class | point is between   |
|                          |             |       | the MME and SGW    |
|                          |             |       | and is used to     |
|                          |             |       | support mobility   |
|                          |             |       | and bearer         |
|                          |             |       | management between |
|                          |             |       | the MME and S-GW.\ |
|                          |             |       | The S5 reference   |
|                          |             |       | point provides     |
|                          |             |       | user plane         |
|                          |             |       | tunneling and      |
|                          |             |       | tunnel management  |
|                          |             |       | between the SGW    |
|                          |             |       | and PGW.\          |
|                          |             |       | The S8 reference   |
|                          |             |       | point is the       |
|                          |             |       | inter-PLMN         |
|                          |             |       | interface          |
|                          |             |       | providing the user |
|                          |             |       | plane and control  |
|                          |             |       | plane between the  |
|                          |             |       | SGW in the Visited |
|                          |             |       | PLMN (VPLMN) and   |
|                          |             |       | the PGW in the     |
|                          |             |       | Home PLMN (HPLMN). |
|                          |             |       |                    |
|                          |             |       | GTP-U (GPRS Tunnel |
|                          |             |       | Protocol User)     |
|                          |             |       | tunnels are used   |
|                          |             |       | between two        |
|                          |             |       | entities of the    |
|                          |             |       | EPS network. Such  |
|                          |             |       | tunnels enable the |
|                          |             |       | traffic data to be |
|                          |             |       | compartmentalized. |
|                          |             |       | GTP-U traffic      |
|                          |             |       | tunnels are        |
|                          |             |       | constructed on the |
|                          |             |       | S1-U, S5 and X2    |
|                          |             |       | interfaces. The    |
|                          |             |       | tunnel is          |
|                          |             |       | identified by the  |
|                          |             |       | TEID parameter,    |
|                          |             |       | the IP addresses   |
|                          |             |       | and the UDP port   |
|                          |             |       | numbers. The       |
|                          |             |       | entity receiving   |
|                          |             |       | the traffic or     |
|                          |             |       | signaling data     |
|                          |             |       | determines the     |
|                          |             |       | value of the TEID  |
|                          |             |       | parameter which    |
|                          |             |       | the sending entity |
|                          |             |       | has to use.\       |
|                          |             |       | The values of the  |
|                          |             |       | TEID parameter of  |
|                          |             |       | the GTP-U protocol |
|                          |             |       | are exchanged via  |
|                          |             |       | the GTPv2-C (GPRS  |
|                          |             |       | Tunnel Protocol    |
|                          |             |       | Control), S1-AP    |
|                          |             |       | and X2-AP          |
|                          |             |       | protocols.         |
|                          |             |       |                    |
|                          |             |       | The TEID parameter |
|                          |             |       | used for the       |
|                          |             |       | signaling          |
|                          |             |       | exchanged over the |
|                          |             |       | S5 interface is    |
|                          |             |       | unique. The same   |
|                          |             |       | parameter is used  |
|                          |             |       | for all signaling  |
|                          |             |       | messages relating  |
|                          |             |       | to the activation  |
|                          |             |       | of the various S5  |
|                          |             |       | bearers for the    |
|                          |             |       | different mobiles. |
|                          |             |       | The TEID parameter |
|                          |             |       | used for the       |
|                          |             |       | signaling          |
|                          |             |       | exchanged over S11 |
|                          |             |       | interface is       |
|                          |             |       | unique for each    |
|                          |             |       | mobile. The same   |
|                          |             |       | parameter is used  |
|                          |             |       | for all signaling  |
|                          |             |       | messages relating  |
|                          |             |       | to the             |
|                          |             |       | establishment of   |
|                          |             |       | the various S1-U   |
|                          |             |       | bearers for the    |
|                          |             |       | same mobile.       |
|                          |             |       |                    |
|                          |             |       | **Bearer           |
|                          |             |       | Management**:      |
|                          |             |       |                    |
|                          |             |       | The signaling      |
|                          |             |       | bearer related to  |
|                          |             |       | a mobile is        |
|                          |             |       | created by the     |
|                          |             |       | CREATE SESSION     |
|                          |             |       | REQUEST message.   |
|                          |             |       | It is reinforced   |
|                          |             |       | by the use of a    |
|                          |             |       | TEID parameter.    |
|                          |             |       | The message is     |
|                          |             |       | transmitted:\      |
|                          |             |       | -- by the MME      |
|                          |             |       | entity to the      |
|                          |             |       | serving gateway    |
|                          |             |       | (SGW), over the    |
|                          |             |       | S11 interface;\    |
|                          |             |       | -- by the target   |
|                          |             |       | SGW entity for the |
|                          |             |       | PDN gateway (PGW), |
|                          |             |       | over the S5        |
|                          |             |       | interface. The     |
|                          |             |       | request is         |
|                          |             |       | transmitted when   |
|                          |             |       | any of the         |
|                          |             |       | following          |
|                          |             |       | procedures are     |
|                          |             |       | initiated:         |
|                          |             |       |                    |
|                          |             |       | -   attachment of  |
|                          |             |       |     the mobile     |
|                          |             |       |                    |
|                          |             |       | -   traffic        |
|                          |             |       |     request from   |
|                          |             |       |     the mobile     |
|                          |             |       |                    |
|                          |             |       | -   updating of    |
|                          |             |       |     the tracking   |
|                          |             |       |     area code      |
|                          |             |       |     (TAC)          |
|                          |             |       |                    |
|                          |             |       | -   handover       |
|                          |             |       |                    |
|                          |             |       | The SGW entity (or |
|                          |             |       | respectively PGW   |
|                          |             |       | entity) responds   |
|                          |             |       | to the MME entity  |
|                          |             |       | (or respectively   |
|                          |             |       | SGW entity) with   |
|                          |             |       | the CREATE SESSION |
|                          |             |       | RESPONSE message.\ |
|                          |             |       | The signaling      |
|                          |             |       | bearer is          |
|                          |             |       | deactivated by the |
|                          |             |       | exchange of the    |
|                          |             |       | DELETE SESSION     |
|                          |             |       | REQUEST/RESPONSE   |
|                          |             |       | messages.\         |
|                          |             |       | The procedure is   |
|                          |             |       | triggered when the |
|                          |             |       | mobile detaches,   |
|                          |             |       | when the traffic   |
|                          |             |       | is released, when  |
|                          |             |       | the TAC changes,   |
|                          |             |       | leading to a       |
|                          |             |       | modification of    |
|                          |             |       | the SGW entity, or |
|                          |             |       | when handover      |
|                          |             |       | occurs, with a     |
|                          |             |       | switch of the      |
|                          |             |       | SGW.\              |
|                          |             |       | The dedicated      |
|                          |             |       | bearer specific to |
|                          |             |       | a mobile is        |
|                          |             |       | created similarly, |
|                          |             |       | modified possibly  |
|                          |             |       | and deleted by the |
|                          |             |       | exchange of the    |
|                          |             |       | following          |
|                          |             |       | messages:\         |
|                          |             |       | -- CREATE / MODIFY |
|                          |             |       | / DELETE BEARER    |
|                          |             |       | REQUEST\           |
|                          |             |       | -- CREATE / MODIFY |
|                          |             |       | / DELETE BEARER    |
|                          |             |       | RESPONSE.\         |
|                          |             |       | The DOWNLINK DATA  |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message is sent by |
|                          |             |       | the SGW entity to  |
|                          |             |       | the MME entity,    |
|                          |             |       | over the S11       |
|                          |             |       | interface.\        |
|                          |             |       | The procedure      |
|                          |             |       | follows the        |
|                          |             |       | reception by the   |
|                          |             |       | SGW entity of data |
|                          |             |       | from the PGW       |
|                          |             |       | entity, with the   |
|                          |             |       | mobile in ECM-IDLE |
|                          |             |       | mode. Just after   |
|                          |             |       | receiving this     |
|                          |             |       | message, the MME   |
|                          |             |       | entity sends the   |
|                          |             |       | S1-AP PAGING       |
|                          |             |       | message to the eNB |
|                          |             |       | entities belonging |
|                          |             |       | to the TAC.        |
|                          |             |       |                    |
|                          |             |       | The MME entity may |
|                          |             |       | respond with the   |
|                          |             |       | DOWNLINK DATA      |
|                          |             |       | NOTIFICATION       |
|                          |             |       | ACKNOWLEDGE        |
|                          |             |       | message,           |
|                          |             |       | indicating whether |
|                          |             |       | or not the request |
|                          |             |       | is accepted or     |
|                          |             |       | with the DOWNLINK  |
|                          |             |       | DATA NOTIFICATION  |
|                          |             |       | FAILURE INDICATION |
|                          |             |       | message if the     |
|                          |             |       | mobile does not    |
|                          |             |       | respond to the     |
|                          |             |       | paging or if the   |
|                          |             |       | mobile service     |
|                          |             |       | request is         |
|                          |             |       | rejected.\         |
|                          |             |       | The CREATE         |
|                          |             |       | INDIRECT DATA      |
|                          |             |       | FORWARDING TUNNEL  |
|                          |             |       | REQUEST/RESPONSE   |
|                          |             |       | messages create a  |
|                          |             |       | specific traffic   |
|                          |             |       | bearer when        |
|                          |             |       | handover occurs.   |
|                          |             |       | This bearer        |
|                          |             |       | forwards the data  |
|                          |             |       | traffic received   |
|                          |             |       | by the source eNB  |
|                          |             |       | entity to the SGW  |
|                          |             |       | entity to then be  |
|                          |             |       | re-transmitted to  |
|                          |             |       | the mobile via the |
|                          |             |       | target eNB entity. |
|                          |             |       |                    |
|                          |             |       | **Mobility         |
|                          |             |       | Management**:      |
|                          |             |       |                    |
|                          |             |       | Mobility           |
|                          |             |       | management         |
|                          |             |       | messages are       |
|                          |             |       | exchanged between  |
|                          |             |       | the source and     |
|                          |             |       | target MME         |
|                          |             |       | entities, when the |
|                          |             |       | handover of the    |
|                          |             |       | mobile imposes a   |
|                          |             |       | switch of MME      |
|                          |             |       | entity.\           |
|                          |             |       | The source MME     |
|                          |             |       | entity sends the   |
|                          |             |       | target MME entity  |
|                          |             |       | the FORWARD        |
|                          |             |       | RELOCATION REQUEST |
|                          |             |       | message containing |
|                          |             |       | the context of the |
|                          |             |       | mobile.\           |
|                          |             |       | The target MME     |
|                          |             |       | entity responds    |
|                          |             |       | with the FORWARD   |
|                          |             |       | RELOCATION         |
|                          |             |       | RESPONSE message   |
|                          |             |       | when the resources |
|                          |             |       | needed for the     |
|                          |             |       | handover have been |
|                          |             |       | reserved.\         |
|                          |             |       | The response       |
|                          |             |       | contains the       |
|                          |             |       | values of the TEID |
|                          |             |       | parameter, which   |
|                          |             |       | will enable the    |
|                          |             |       | source SGW entity  |
|                          |             |       | to redirect the    |
|                          |             |       | traffic to the     |
|                          |             |       | target SGW entity  |
|                          |             |       | during handover.\  |
|                          |             |       | Upon receiving     |
|                          |             |       | this message, the  |
|                          |             |       | source MME entity  |
|                          |             |       | sends the source   |
|                          |             |       | eNB entity the     |
|                          |             |       | command to         |
|                          |             |       | initiate           |
|                          |             |       | handover.\         |
|                          |             |       | The source MME     |
|                          |             |       | entity sends the   |
|                          |             |       | target MME entity  |
|                          |             |       | the FORWARD ACCESS |
|                          |             |       | CONTEXT            |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message to provide |
|                          |             |       | it with the        |
|                          |             |       | elements of the    |
|                          |             |       | context of the     |
|                          |             |       | E-RAB bearer, such |
|                          |             |       | as the PDCP        |
|                          |             |       | sequence number.\  |
|                          |             |       | The target MME     |
|                          |             |       | entity sends the   |
|                          |             |       | source MME entity  |
|                          |             |       | the FORWARD        |
|                          |             |       | RELOCATION         |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message to         |
|                          |             |       | indicate that the  |
|                          |             |       | handover procedure |
|                          |             |       | is complete.       |
|                          |             |       |                    |
|                          |             |       | The new MME entity |
|                          |             |       | sends the CONTEXT  |
|                          |             |       | REQUEST message to |
|                          |             |       | the former one in  |
|                          |             |       | the procedure of   |
|                          |             |       | TAI updating, to   |
|                          |             |       | retrieve           |
|                          |             |       | information about  |
|                          |             |       | the context of the |
|                          |             |       | mobile.\           |
|                          |             |       | The former MME     |
|                          |             |       | entity provides    |
|                          |             |       | this information   |
|                          |             |       | in the CONTEXT     |
|                          |             |       | RESPONSE message,  |
|                          |             |       | which may contain  |
|                          |             |       | a positive or      |
|                          |             |       | negative           |
|                          |             |       | response.\         |
|                          |             |       | The new MME entity |
|                          |             |       | acknowledges this  |
|                          |             |       | previous message   |
|                          |             |       | with the message   |
|                          |             |       | CONTEXT            |
|                          |             |       | ACKNOWLEDGE.\      |
|                          |             |       | Reference:  3GPP   |
|                          |             |       | TS 29.274-e10      |
+--------------------------+-------------+-------+--------------------+
| #### GTPv2_Setup_sos_apn | MME\        | GT    | Indicates GTPv2    |
|                          | --SGW\--PGW | Pv2 + | procedures for SOS |
|                          | (S11/S5/S8) | i     | APN based          |
|                          |             | nterf | connections which  |
|                          |             | ace + | are related with   |
|                          |             | pdn_  | emergency calls.   |
|                          |             | class |                    |
|                          |             |       | The S11 reference  |
|                          |             |       | point is between   |
|                          |             |       | the MME and SGW    |
|                          |             |       | and is used to     |
|                          |             |       | support mobility   |
|                          |             |       | and bearer         |
|                          |             |       | management between |
|                          |             |       | the MME and S-GW.\ |
|                          |             |       | The S5 reference   |
|                          |             |       | point provides     |
|                          |             |       | user plane         |
|                          |             |       | tunneling and      |
|                          |             |       | tunnel management  |
|                          |             |       | between the SGW    |
|                          |             |       | and PGW.\          |
|                          |             |       | The S8 reference   |
|                          |             |       | point is the       |
|                          |             |       | inter-PLMN         |
|                          |             |       | interface          |
|                          |             |       | providing the user |
|                          |             |       | plane and control  |
|                          |             |       | plane between the  |
|                          |             |       | SGW in the Visited |
|                          |             |       | PLMN (VPLMN) and   |
|                          |             |       | the PGW in the     |
|                          |             |       | Home PLMN (HPLMN). |
|                          |             |       |                    |
|                          |             |       | GTP-U (GPRS Tunnel |
|                          |             |       | Protocol User)     |
|                          |             |       | tunnels are used   |
|                          |             |       | between two        |
|                          |             |       | entities of the    |
|                          |             |       | EPS network. Such  |
|                          |             |       | tunnels enable the |
|                          |             |       | traffic data to be |
|                          |             |       | compartmentalized. |
|                          |             |       | GTP-U traffic      |
|                          |             |       | tunnels are        |
|                          |             |       | constructed on the |
|                          |             |       | S1-U, S5 and X2    |
|                          |             |       | interfaces. The    |
|                          |             |       | tunnel is          |
|                          |             |       | identified by the  |
|                          |             |       | TEID parameter,    |
|                          |             |       | the IP addresses   |
|                          |             |       | and the UDP port   |
|                          |             |       | numbers. The       |
|                          |             |       | entity receiving   |
|                          |             |       | the traffic or     |
|                          |             |       | signaling data     |
|                          |             |       | determines the     |
|                          |             |       | value of the TEID  |
|                          |             |       | parameter which    |
|                          |             |       | the sending entity |
|                          |             |       | has to use.\       |
|                          |             |       | The values of the  |
|                          |             |       | TEID parameter of  |
|                          |             |       | the GTP-U protocol |
|                          |             |       | are exchanged via  |
|                          |             |       | the GTPv2-C (GPRS  |
|                          |             |       | Tunnel Protocol    |
|                          |             |       | Control), S1-AP    |
|                          |             |       | and X2-AP          |
|                          |             |       | protocols.         |
|                          |             |       |                    |
|                          |             |       | The TEID parameter |
|                          |             |       | used for the       |
|                          |             |       | signaling          |
|                          |             |       | exchanged over the |
|                          |             |       | S5 interface is    |
|                          |             |       | unique. The same   |
|                          |             |       | parameter is used  |
|                          |             |       | for all signaling  |
|                          |             |       | messages relating  |
|                          |             |       | to the activation  |
|                          |             |       | of the various S5  |
|                          |             |       | bearers for the    |
|                          |             |       | different mobiles. |
|                          |             |       | The TEID parameter |
|                          |             |       | used for the       |
|                          |             |       | signaling          |
|                          |             |       | exchanged over S11 |
|                          |             |       | interface is       |
|                          |             |       | unique for each    |
|                          |             |       | mobile. The same   |
|                          |             |       | parameter is used  |
|                          |             |       | for all signaling  |
|                          |             |       | messages relating  |
|                          |             |       | to the             |
|                          |             |       | establishment of   |
|                          |             |       | the various S1-U   |
|                          |             |       | bearers for the    |
|                          |             |       | same mobile.       |
|                          |             |       |                    |
|                          |             |       | **Bearer           |
|                          |             |       | Management**:      |
|                          |             |       |                    |
|                          |             |       | The signaling      |
|                          |             |       | bearer related to  |
|                          |             |       | a mobile is        |
|                          |             |       | created by the     |
|                          |             |       | CREATE SESSION     |
|                          |             |       | REQUEST message.   |
|                          |             |       | It is reinforced   |
|                          |             |       | by the use of a    |
|                          |             |       | TEID parameter.    |
|                          |             |       | The message is     |
|                          |             |       | transmitted:\      |
|                          |             |       | -- by the MME      |
|                          |             |       | entity to the      |
|                          |             |       | serving gateway    |
|                          |             |       | (SGW), over the    |
|                          |             |       | S11 interface;\    |
|                          |             |       | -- by the target   |
|                          |             |       | SGW entity for the |
|                          |             |       | PDN gateway (PGW), |
|                          |             |       | over the S5        |
|                          |             |       | interface. The     |
|                          |             |       | request is         |
|                          |             |       | transmitted when   |
|                          |             |       | any of the         |
|                          |             |       | following          |
|                          |             |       | procedures are     |
|                          |             |       | initiated:         |
|                          |             |       |                    |
|                          |             |       | -   attachment of  |
|                          |             |       |     the mobile     |
|                          |             |       |                    |
|                          |             |       | -   traffic        |
|                          |             |       |     request from   |
|                          |             |       |     the mobile     |
|                          |             |       |                    |
|                          |             |       | -   updating of    |
|                          |             |       |     the tracking   |
|                          |             |       |     area code      |
|                          |             |       |     (TAC)          |
|                          |             |       |                    |
|                          |             |       | -   handover       |
|                          |             |       |                    |
|                          |             |       | The SGW entity (or |
|                          |             |       | respectively PGW   |
|                          |             |       | entity) responds   |
|                          |             |       | to the MME entity  |
|                          |             |       | (or respectively   |
|                          |             |       | SGW entity) with   |
|                          |             |       | the CREATE SESSION |
|                          |             |       | RESPONSE message.\ |
|                          |             |       | The signaling      |
|                          |             |       | bearer is          |
|                          |             |       | deactivated by the |
|                          |             |       | exchange of the    |
|                          |             |       | DELETE SESSION     |
|                          |             |       | REQUEST/RESPONSE   |
|                          |             |       | messages.\         |
|                          |             |       | The procedure is   |
|                          |             |       | triggered when the |
|                          |             |       | mobile detaches,   |
|                          |             |       | when the traffic   |
|                          |             |       | is released, when  |
|                          |             |       | the TAC changes,   |
|                          |             |       | leading to a       |
|                          |             |       | modification of    |
|                          |             |       | the SGW entity, or |
|                          |             |       | when handover      |
|                          |             |       | occurs, with a     |
|                          |             |       | switch of the      |
|                          |             |       | SGW.\              |
|                          |             |       | The dedicated      |
|                          |             |       | bearer specific to |
|                          |             |       | a mobile is        |
|                          |             |       | created similarly, |
|                          |             |       | modified possibly  |
|                          |             |       | and deleted by the |
|                          |             |       | exchange of the    |
|                          |             |       | following          |
|                          |             |       | messages:\         |
|                          |             |       | -- CREATE / MODIFY |
|                          |             |       | / DELETE BEARER    |
|                          |             |       | REQUEST\           |
|                          |             |       | -- CREATE / MODIFY |
|                          |             |       | / DELETE BEARER    |
|                          |             |       | RESPONSE.\         |
|                          |             |       | The DOWNLINK DATA  |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message is sent by |
|                          |             |       | the SGW entity to  |
|                          |             |       | the MME entity,    |
|                          |             |       | over the S11       |
|                          |             |       | interface.\        |
|                          |             |       | The procedure      |
|                          |             |       | follows the        |
|                          |             |       | reception by the   |
|                          |             |       | SGW entity of data |
|                          |             |       | from the PGW       |
|                          |             |       | entity, with the   |
|                          |             |       | mobile in ECM-IDLE |
|                          |             |       | mode. Just after   |
|                          |             |       | receiving this     |
|                          |             |       | message, the MME   |
|                          |             |       | entity sends the   |
|                          |             |       | S1-AP PAGING       |
|                          |             |       | message to the eNB |
|                          |             |       | entities belonging |
|                          |             |       | to the TAC.        |
|                          |             |       |                    |
|                          |             |       | The MME entity may |
|                          |             |       | respond with the   |
|                          |             |       | DOWNLINK DATA      |
|                          |             |       | NOTIFICATION       |
|                          |             |       | ACKNOWLEDGE        |
|                          |             |       | message,           |
|                          |             |       | indicating whether |
|                          |             |       | or not the request |
|                          |             |       | is accepted or     |
|                          |             |       | with the DOWNLINK  |
|                          |             |       | DATA NOTIFICATION  |
|                          |             |       | FAILURE INDICATION |
|                          |             |       | message if the     |
|                          |             |       | mobile does not    |
|                          |             |       | respond to the     |
|                          |             |       | paging or if the   |
|                          |             |       | mobile service     |
|                          |             |       | request is         |
|                          |             |       | rejected.\         |
|                          |             |       | The CREATE         |
|                          |             |       | INDIRECT DATA      |
|                          |             |       | FORWARDING TUNNEL  |
|                          |             |       | REQUEST/RESPONSE   |
|                          |             |       | messages create a  |
|                          |             |       | specific traffic   |
|                          |             |       | bearer when        |
|                          |             |       | handover occurs.   |
|                          |             |       | This bearer        |
|                          |             |       | forwards the data  |
|                          |             |       | traffic received   |
|                          |             |       | by the source eNB  |
|                          |             |       | entity to the SGW  |
|                          |             |       | entity to then be  |
|                          |             |       | re-transmitted to  |
|                          |             |       | the mobile via the |
|                          |             |       | target eNB entity. |
|                          |             |       |                    |
|                          |             |       | **Mobility         |
|                          |             |       | Management**:      |
|                          |             |       |                    |
|                          |             |       | Mobility           |
|                          |             |       | management         |
|                          |             |       | messages are       |
|                          |             |       | exchanged between  |
|                          |             |       | the source and     |
|                          |             |       | target MME         |
|                          |             |       | entities, when the |
|                          |             |       | handover of the    |
|                          |             |       | mobile imposes a   |
|                          |             |       | switch of MME      |
|                          |             |       | entity.\           |
|                          |             |       | The source MME     |
|                          |             |       | entity sends the   |
|                          |             |       | target MME entity  |
|                          |             |       | the FORWARD        |
|                          |             |       | RELOCATION REQUEST |
|                          |             |       | message containing |
|                          |             |       | the context of the |
|                          |             |       | mobile.\           |
|                          |             |       | The target MME     |
|                          |             |       | entity responds    |
|                          |             |       | with the FORWARD   |
|                          |             |       | RELOCATION         |
|                          |             |       | RESPONSE message   |
|                          |             |       | when the resources |
|                          |             |       | needed for the     |
|                          |             |       | handover have been |
|                          |             |       | reserved.\         |
|                          |             |       | The response       |
|                          |             |       | contains the       |
|                          |             |       | values of the TEID |
|                          |             |       | parameter, which   |
|                          |             |       | will enable the    |
|                          |             |       | source SGW entity  |
|                          |             |       | to redirect the    |
|                          |             |       | traffic to the     |
|                          |             |       | target SGW entity  |
|                          |             |       | during handover.\  |
|                          |             |       | Upon receiving     |
|                          |             |       | this message, the  |
|                          |             |       | source MME entity  |
|                          |             |       | sends the source   |
|                          |             |       | eNB entity the     |
|                          |             |       | command to         |
|                          |             |       | initiate           |
|                          |             |       | handover.\         |
|                          |             |       | The source MME     |
|                          |             |       | entity sends the   |
|                          |             |       | target MME entity  |
|                          |             |       | the FORWARD ACCESS |
|                          |             |       | CONTEXT            |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message to provide |
|                          |             |       | it with the        |
|                          |             |       | elements of the    |
|                          |             |       | context of the     |
|                          |             |       | E-RAB bearer, such |
|                          |             |       | as the PDCP        |
|                          |             |       | sequence number.\  |
|                          |             |       | The target MME     |
|                          |             |       | entity sends the   |
|                          |             |       | source MME entity  |
|                          |             |       | the FORWARD        |
|                          |             |       | RELOCATION         |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message to         |
|                          |             |       | indicate that the  |
|                          |             |       | handover procedure |
|                          |             |       | is complete.       |
|                          |             |       |                    |
|                          |             |       | The new MME entity |
|                          |             |       | sends the CONTEXT  |
|                          |             |       | REQUEST message to |
|                          |             |       | the former one in  |
|                          |             |       | the procedure of   |
|                          |             |       | TAI updating, to   |
|                          |             |       | retrieve           |
|                          |             |       | information about  |
|                          |             |       | the context of the |
|                          |             |       | mobile.\           |
|                          |             |       | The former MME     |
|                          |             |       | entity provides    |
|                          |             |       | this information   |
|                          |             |       | in the CONTEXT     |
|                          |             |       | RESPONSE message,  |
|                          |             |       | which may contain  |
|                          |             |       | a positive or      |
|                          |             |       | negative           |
|                          |             |       | response.\         |
|                          |             |       | The new MME entity |
|                          |             |       | acknowledges this  |
|                          |             |       | previous message   |
|                          |             |       | with the message   |
|                          |             |       | CONTEXT            |
|                          |             |       | ACKNOWLEDGE.\      |
|                          |             |       | Reference:  3GPP   |
|                          |             |       | TS 29.274-e10      |
+--------------------------+-------------+-------+--------------------+
| ####                     | MME\        | GT    | Indicates GTPv2    |
|  GTPv2_Setup_UNKNOWN_apn | --SGW\--PGW | Pv2 + | procedures where   |
|                          | (S11/S5/S8) | i     | there is no        |
|                          |             | nterf | specific APN such  |
|                          |             | ace + | as data/IMS/SOS    |
|                          |             | pdn_  | found(unknown).    |
|                          |             | class |                    |
|                          |             |       | The S11 reference  |
|                          |             |       | point is between   |
|                          |             |       | the MME and SGW    |
|                          |             |       | and is used to     |
|                          |             |       | support mobility   |
|                          |             |       | and bearer         |
|                          |             |       | management between |
|                          |             |       | the MME and S-GW.\ |
|                          |             |       | The S5 reference   |
|                          |             |       | point provides     |
|                          |             |       | user plane         |
|                          |             |       | tunneling and      |
|                          |             |       | tunnel management  |
|                          |             |       | between the SGW    |
|                          |             |       | and PGW.\          |
|                          |             |       | The S8 reference   |
|                          |             |       | point is the       |
|                          |             |       | inter-PLMN         |
|                          |             |       | interface          |
|                          |             |       | providing the user |
|                          |             |       | plane and control  |
|                          |             |       | plane between the  |
|                          |             |       | SGW in the Visited |
|                          |             |       | PLMN (VPLMN) and   |
|                          |             |       | the PGW in the     |
|                          |             |       | Home PLMN (HPLMN). |
|                          |             |       |                    |
|                          |             |       | GTP-U (GPRS Tunnel |
|                          |             |       | Protocol User)     |
|                          |             |       | tunnels are used   |
|                          |             |       | between two        |
|                          |             |       | entities of the    |
|                          |             |       | EPS network. Such  |
|                          |             |       | tunnels enable the |
|                          |             |       | traffic data to be |
|                          |             |       | compartmentalized. |
|                          |             |       | GTP-U traffic      |
|                          |             |       | tunnels are        |
|                          |             |       | constructed on the |
|                          |             |       | S1-U, S5 and X2    |
|                          |             |       | interfaces. The    |
|                          |             |       | tunnel is          |
|                          |             |       | identified by the  |
|                          |             |       | TEID parameter,    |
|                          |             |       | the IP addresses   |
|                          |             |       | and the UDP port   |
|                          |             |       | numbers. The       |
|                          |             |       | entity receiving   |
|                          |             |       | the traffic or     |
|                          |             |       | signaling data     |
|                          |             |       | determines the     |
|                          |             |       | value of the TEID  |
|                          |             |       | parameter which    |
|                          |             |       | the sending entity |
|                          |             |       | has to use.\       |
|                          |             |       | The values of the  |
|                          |             |       | TEID parameter of  |
|                          |             |       | the GTP-U protocol |
|                          |             |       | are exchanged via  |
|                          |             |       | the GTPv2-C (GPRS  |
|                          |             |       | Tunnel Protocol    |
|                          |             |       | Control), S1-AP    |
|                          |             |       | and X2-AP          |
|                          |             |       | protocols.         |
|                          |             |       |                    |
|                          |             |       | The TEID parameter |
|                          |             |       | used for the       |
|                          |             |       | signaling          |
|                          |             |       | exchanged over the |
|                          |             |       | S5 interface is    |
|                          |             |       | unique. The same   |
|                          |             |       | parameter is used  |
|                          |             |       | for all signaling  |
|                          |             |       | messages relating  |
|                          |             |       | to the activation  |
|                          |             |       | of the various S5  |
|                          |             |       | bearers for the    |
|                          |             |       | different mobiles. |
|                          |             |       | The TEID parameter |
|                          |             |       | used for the       |
|                          |             |       | signaling          |
|                          |             |       | exchanged over S11 |
|                          |             |       | interface is       |
|                          |             |       | unique for each    |
|                          |             |       | mobile. The same   |
|                          |             |       | parameter is used  |
|                          |             |       | for all signaling  |
|                          |             |       | messages relating  |
|                          |             |       | to the             |
|                          |             |       | establishment of   |
|                          |             |       | the various S1-U   |
|                          |             |       | bearers for the    |
|                          |             |       | same mobile.       |
|                          |             |       |                    |
|                          |             |       | **Bearer           |
|                          |             |       | Management**:      |
|                          |             |       |                    |
|                          |             |       | The signaling      |
|                          |             |       | bearer related to  |
|                          |             |       | a mobile is        |
|                          |             |       | created by the     |
|                          |             |       | CREATE SESSION     |
|                          |             |       | REQUEST message.   |
|                          |             |       | It is reinforced   |
|                          |             |       | by the use of a    |
|                          |             |       | TEID parameter.    |
|                          |             |       | The message is     |
|                          |             |       | transmitted:\      |
|                          |             |       | -- by the MME      |
|                          |             |       | entity to the      |
|                          |             |       | serving gateway    |
|                          |             |       | (SGW), over the    |
|                          |             |       | S11 interface;\    |
|                          |             |       | -- by the target   |
|                          |             |       | SGW entity for the |
|                          |             |       | PDN gateway (PGW), |
|                          |             |       | over the S5        |
|                          |             |       | interface. The     |
|                          |             |       | request is         |
|                          |             |       | transmitted when   |
|                          |             |       | any of the         |
|                          |             |       | following          |
|                          |             |       | procedures are     |
|                          |             |       | initiated:         |
|                          |             |       |                    |
|                          |             |       | -   attachment of  |
|                          |             |       |     the mobile     |
|                          |             |       |                    |
|                          |             |       | -   traffic        |
|                          |             |       |     request from   |
|                          |             |       |     the mobile     |
|                          |             |       |                    |
|                          |             |       | -   updating of    |
|                          |             |       |     the tracking   |
|                          |             |       |     area code      |
|                          |             |       |     (TAC)          |
|                          |             |       |                    |
|                          |             |       | -   handover       |
|                          |             |       |                    |
|                          |             |       | The SGW entity (or |
|                          |             |       | respectively PGW   |
|                          |             |       | entity) responds   |
|                          |             |       | to the MME entity  |
|                          |             |       | (or respectively   |
|                          |             |       | SGW entity) with   |
|                          |             |       | the CREATE SESSION |
|                          |             |       | RESPONSE message.\ |
|                          |             |       | The signaling      |
|                          |             |       | bearer is          |
|                          |             |       | deactivated by the |
|                          |             |       | exchange of the    |
|                          |             |       | DELETE SESSION     |
|                          |             |       | REQUEST/RESPONSE   |
|                          |             |       | messages.\         |
|                          |             |       | The procedure is   |
|                          |             |       | triggered when the |
|                          |             |       | mobile detaches,   |
|                          |             |       | when the traffic   |
|                          |             |       | is released, when  |
|                          |             |       | the TAC changes,   |
|                          |             |       | leading to a       |
|                          |             |       | modification of    |
|                          |             |       | the SGW entity, or |
|                          |             |       | when handover      |
|                          |             |       | occurs, with a     |
|                          |             |       | switch of the      |
|                          |             |       | SGW.\              |
|                          |             |       | The dedicated      |
|                          |             |       | bearer specific to |
|                          |             |       | a mobile is        |
|                          |             |       | created similarly, |
|                          |             |       | modified possibly  |
|                          |             |       | and deleted by the |
|                          |             |       | exchange of the    |
|                          |             |       | following          |
|                          |             |       | messages:\         |
|                          |             |       | -- CREATE / MODIFY |
|                          |             |       | / DELETE BEARER    |
|                          |             |       | REQUEST\           |
|                          |             |       | -- CREATE / MODIFY |
|                          |             |       | / DELETE BEARER    |
|                          |             |       | RESPONSE\          |
|                          |             |       | The DOWNLINK DATA  |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message is sent by |
|                          |             |       | the SGW entity to  |
|                          |             |       | the MME entity,    |
|                          |             |       | over the S11       |
|                          |             |       | interface.\        |
|                          |             |       | The procedure      |
|                          |             |       | follows the        |
|                          |             |       | reception by the   |
|                          |             |       | SGW entity of data |
|                          |             |       | from the PGW       |
|                          |             |       | entity, with the   |
|                          |             |       | mobile in ECM-IDLE |
|                          |             |       | mode. Just after   |
|                          |             |       | receiving this     |
|                          |             |       | message, the MME   |
|                          |             |       | entity sends the   |
|                          |             |       | S1-AP PAGING       |
|                          |             |       | message to the eNB |
|                          |             |       | entities belonging |
|                          |             |       | to the TAC.        |
|                          |             |       |                    |
|                          |             |       | The MME entity may |
|                          |             |       | respond with the   |
|                          |             |       | DOWNLINK DATA      |
|                          |             |       | NOTIFICATION       |
|                          |             |       | ACKNOWLEDGE        |
|                          |             |       | message,           |
|                          |             |       | indicating whether |
|                          |             |       | or not the request |
|                          |             |       | is accepted or     |
|                          |             |       | with the DOWNLINK  |
|                          |             |       | DATA NOTIFICATION  |
|                          |             |       | FAILURE INDICATION |
|                          |             |       | message if the     |
|                          |             |       | mobile does not    |
|                          |             |       | respond to the     |
|                          |             |       | paging or if the   |
|                          |             |       | mobile service     |
|                          |             |       | request is         |
|                          |             |       | rejected.\         |
|                          |             |       | The CREATE         |
|                          |             |       | INDIRECT DATA      |
|                          |             |       | FORWARDING TUNNEL  |
|                          |             |       | REQUEST/RESPONSE   |
|                          |             |       | messages create a  |
|                          |             |       | specific traffic   |
|                          |             |       | bearer when        |
|                          |             |       | handover occurs.   |
|                          |             |       | This bearer        |
|                          |             |       | forwards the data  |
|                          |             |       | traffic received   |
|                          |             |       | by the source eNB  |
|                          |             |       | entity to the SGW  |
|                          |             |       | entity to then be  |
|                          |             |       | re-transmitted to  |
|                          |             |       | the mobile via the |
|                          |             |       | target eNB entity. |
|                          |             |       |                    |
|                          |             |       | **Mobility         |
|                          |             |       | Management**:      |
|                          |             |       |                    |
|                          |             |       | Mobility           |
|                          |             |       | management         |
|                          |             |       | messages are       |
|                          |             |       | exchanged between  |
|                          |             |       | the source and     |
|                          |             |       | target MME         |
|                          |             |       | entities, when the |
|                          |             |       | handover of the    |
|                          |             |       | mobile imposes a   |
|                          |             |       | switch of MME      |
|                          |             |       | entity.\           |
|                          |             |       | The source MME     |
|                          |             |       | entity sends the   |
|                          |             |       | target MME entity  |
|                          |             |       | the FORWARD        |
|                          |             |       | RELOCATION REQUEST |
|                          |             |       | message containing |
|                          |             |       | the context of the |
|                          |             |       | mobile.\           |
|                          |             |       | The target MME     |
|                          |             |       | entity responds    |
|                          |             |       | with the FORWARD   |
|                          |             |       | RELOCATION         |
|                          |             |       | RESPONSE message   |
|                          |             |       | when the resources |
|                          |             |       | needed for the     |
|                          |             |       | handover have been |
|                          |             |       | reserved.\         |
|                          |             |       | The response       |
|                          |             |       | contains the       |
|                          |             |       | values of the TEID |
|                          |             |       | parameter, which   |
|                          |             |       | will enable the    |
|                          |             |       | source SGW entity  |
|                          |             |       | to redirect the    |
|                          |             |       | traffic to the     |
|                          |             |       | target SGW entity  |
|                          |             |       | during handover.\  |
|                          |             |       | Upon receiving     |
|                          |             |       | this message, the  |
|                          |             |       | source MME entity  |
|                          |             |       | sends the source   |
|                          |             |       | eNB entity the     |
|                          |             |       | command to         |
|                          |             |       | initiate           |
|                          |             |       | handover.\         |
|                          |             |       | The source MME     |
|                          |             |       | entity sends the   |
|                          |             |       | target MME entity  |
|                          |             |       | the FORWARD ACCESS |
|                          |             |       | CONTEXT            |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message to provide |
|                          |             |       | it with the        |
|                          |             |       | elements of the    |
|                          |             |       | context of the     |
|                          |             |       | E-RAB bearer, such |
|                          |             |       | as the PDCP        |
|                          |             |       | sequence number.\  |
|                          |             |       | The target MME     |
|                          |             |       | entity sends the   |
|                          |             |       | source MME entity  |
|                          |             |       | the FORWARD        |
|                          |             |       | RELOCATION         |
|                          |             |       | NOTIFICATION       |
|                          |             |       | message to         |
|                          |             |       | indicate that the  |
|                          |             |       | handover procedure |
|                          |             |       | is complete.       |
|                          |             |       |                    |
|                          |             |       | The new MME entity |
|                          |             |       | sends the CONTEXT  |
|                          |             |       | REQUEST message to |
|                          |             |       | the former one in  |
|                          |             |       | the procedure of   |
|                          |             |       | TAI updating, to   |
|                          |             |       | retrieve           |
|                          |             |       | information about  |
|                          |             |       | the context of the |
|                          |             |       | mobile.\           |
|                          |             |       | The former MME     |
|                          |             |       | entity provides    |
|                          |             |       | this information   |
|                          |             |       | in the CONTEXT     |
|                          |             |       | RESPONSE message,  |
|                          |             |       | which may contain  |
|                          |             |       | a positive or      |
|                          |             |       | negative           |
|                          |             |       | response.\         |
|                          |             |       | The new MME entity |
|                          |             |       | acknowledges this  |
|                          |             |       | previous message   |
|                          |             |       | with the message   |
|                          |             |       | CONTEXT            |
|                          |             |       | ACKNOWLEDGE.\      |
|                          |             |       | Reference:  3GPP   |
|                          |             |       | TS 29.274-e10      |
+--------------------------+-------------+-------+--------------------+

# HTTP2

HTTP2 is the second major version of the Hypertext Transfer Protocol,
used for communication on the World Wide Web. It is designed to improve
efficiency and performance by introducing features such as multiplexing
and header compression.

+---------------+----------+-------+----------------------------------+
| **Procedure   | **Inte   | **S   | **Description**                  |
| Name**        | rface/NE | truct |                                  |
|               | Name**   | ure** |                                  |
+===============+==========+=======+==================================+
| ##            | AMF      | HT    | AMF Services and AMF Service     |
| ## HTTP2_namf |          | TP2 + | Operations. Access and mobility  |
|               |          | i     | management function (AMF)        |
|               |          | nterf | supports registration,           |
|               |          | ace + | connection, reachability, and    |
|               |          | dnn   | mobility management. Provides a  |
|               |          |       | channel for exchanging session   |
|               |          |       | management messages between a UE |
|               |          |       | and the SMF, and serves as the   |
|               |          |       | access point on the control      |
|               |          |       | plane of the core network for    |
|               |          |       | UEs and (R)AN.                   |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | **Namf_Communication**           |
|               |          |       |                                  |
|               |          |       | -   UEContextTransfer            |
|               |          |       |                                  |
|               |          |       | -   RegistrationStatusUpdate     |
|               |          |       |                                  |
|               |          |       | -   CreateUEContext              |
|               |          |       |                                  |
|               |          |       | -   ReleaseUEContext             |
|               |          |       |                                  |
|               |          |       | -   N1MessageNotify              |
|               |          |       |                                  |
|               |          |       | -   N2InfoNotify                 |
|               |          |       |                                  |
|               |          |       | -   NonUeN2MessageTransfer       |
|               |          |       |                                  |
|               |          |       | **Namf_Communication**           |
|               |          |       |                                  |
|               |          |       | -   N1N2MessageSubscribe         |
|               |          |       |                                  |
|               |          |       | -   N1N2MessageUnSubscribe       |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeUnSubscribe   |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeNotify        |
|               |          |       |                                  |
|               |          |       | **Namf_Communication**           |
|               |          |       |                                  |
|               |          |       | -   N1N2MessageTransfer          |
|               |          |       |                                  |
|               |          |       | -                                |
|               |          |       |  N1N2TransferFailureNotification |
|               |          |       |                                  |
|               |          |       | -   EBIAssignment                |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeSubscribe     |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeUnSubscribe   |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeNotify        |
|               |          |       |                                  |
|               |          |       | **Namf_EventExposure**\          |
|               |          |       | **Namf_Location**                |
|               |          |       |                                  |
|               |          |       | -   ProvideLocationInfo          |
+---------------+----------+-------+----------------------------------+
| #### HT       | AMF      | HT    | AMF Services and AMF Service     |
| TP2_namf_data |          | TP2 + | Operations  with data DNN.       |
|               |          | i     | Access and mobility management   |
|               |          | nterf | function (AMF) supports          |
|               |          | ace + | registration, connection,        |
|               |          | dnn   | reachability, and mobility       |
|               |          |       | management. Provides a channel   |
|               |          |       | for exchanging session           |
|               |          |       | management messages between a UE |
|               |          |       | and the SMF, and serves as the   |
|               |          |       | access point on the control      |
|               |          |       | plane of the core network for    |
|               |          |       | UEs and (R)AN.                   |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | **Namf_Communication**           |
|               |          |       |                                  |
|               |          |       | -   UEContextTransfer            |
|               |          |       |                                  |
|               |          |       | -   RegistrationStatusUpdate     |
|               |          |       |                                  |
|               |          |       | -   CreateUEContext              |
|               |          |       |                                  |
|               |          |       | -   ReleaseUEContext             |
|               |          |       |                                  |
|               |          |       | -   N1MessageNotify              |
|               |          |       |                                  |
|               |          |       | -   N2InfoNotify                 |
|               |          |       |                                  |
|               |          |       | -   NonUeN2MessageTransfer       |
|               |          |       |                                  |
|               |          |       | **Namf_Communication**           |
|               |          |       |                                  |
|               |          |       | -   N1N2MessageSubscribe         |
|               |          |       |                                  |
|               |          |       | -   N1N2MessageUnSubscribe       |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeUnSubscribe   |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeNotify        |
|               |          |       |                                  |
|               |          |       | **Namf_Communication**           |
|               |          |       |                                  |
|               |          |       | -   N1N2MessageTransfer          |
|               |          |       |                                  |
|               |          |       | -                                |
|               |          |       |  N1N2TransferFailureNotification |
|               |          |       |                                  |
|               |          |       | -   EBIAssignment                |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeSubscribe     |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeUnSubscribe   |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeNotify        |
|               |          |       |                                  |
|               |          |       | **Namf_EventExposure**\          |
|               |          |       | **Namf_Location**                |
|               |          |       |                                  |
|               |          |       | -   ProvideLocationInfo          |
+---------------+----------+-------+----------------------------------+
| #### H        | AMF      | HT    | AMF Services and AMF Service     |
| TTP2_namf_ims |          | TP2 + | Operations with IMS DNN. Access  |
|               |          | i     | and mobility management function |
|               |          | nterf | (AMF) supports registration,     |
|               |          | ace + | connection, reachability, and    |
|               |          | dnn   | mobility management. Provides a  |
|               |          |       | channel for exchanging session   |
|               |          |       | management messages between a UE |
|               |          |       | and the SMF, and serves as the   |
|               |          |       | access point on the control      |
|               |          |       | plane of the core network for    |
|               |          |       | UEs and (R)AN.                   |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | **Namf_Communication**           |
|               |          |       |                                  |
|               |          |       | -   UEContextTransfer            |
|               |          |       |                                  |
|               |          |       | -   RegistrationStatusUpdate     |
|               |          |       |                                  |
|               |          |       | -   CreateUEContext              |
|               |          |       |                                  |
|               |          |       | -   ReleaseUEContext             |
|               |          |       |                                  |
|               |          |       | -   N1MessageNotify              |
|               |          |       |                                  |
|               |          |       | -   N2InfoNotify                 |
|               |          |       |                                  |
|               |          |       | -   NonUeN2MessageTransfer       |
|               |          |       |                                  |
|               |          |       | **Namf_Communication**           |
|               |          |       |                                  |
|               |          |       | -   N1N2MessageSubscribe         |
|               |          |       |                                  |
|               |          |       | -   N1N2MessageUnSubscribe       |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeUnSubscribe   |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeNotify        |
|               |          |       |                                  |
|               |          |       | **Namf_Communication**           |
|               |          |       |                                  |
|               |          |       | -   N1N2MessageTransfer          |
|               |          |       |                                  |
|               |          |       | -                                |
|               |          |       |  N1N2TransferFailureNotification |
|               |          |       |                                  |
|               |          |       | -   EBIAssignment                |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeSubscribe     |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeUnSubscribe   |
|               |          |       |                                  |
|               |          |       | -   AMFStatusChangeNotify        |
|               |          |       |                                  |
|               |          |       | **Namf_EventExposure**\          |
|               |          |       | **Namf_Location**                |
|               |          |       |                                  |
|               |          |       | -   ProvideLocationInfo          |
+---------------+----------+-------+----------------------------------+
| ###           | AUSF     | HT    | AUSF Services. Reference : 3GPP  |
| # HTTP2_nausf |          | TP2 + | TS 23.502\                       |
|               |          | i     | AUSF (Authentication server      |
|               |          | nterf | function) provides UE            |
|               |          | ace + | authentication service to the    |
|               |          | dnn   | requester NF. For AKA based      |
|               |          |       | authentication, this operation   |
|               |          |       | can be also used to recover from |
|               |          |       | synchronization failure          |
|               |          |       | situations.                      |
|               |          |       |                                  |
|               |          |       | Nausf_UEAuthentication           |
+---------------+----------+-------+----------------------------------+
| ##            | BSF      | HT    | BSF Services and Service         |
| ## HTTP2_nbsf |          | TP2 + | Operations. Reference : 3GPP TS  |
|               |          | i     | 23.502                           |
|               |          | nterf |                                  |
|               |          | ace + | Binding Support Function (BSF)   |
|               |          | dnn   | offers services to PCFs to       |
|               |          |       | register and deregister          |
|               |          |       | information about data sessions, |
|               |          |       | and services to other            |
|               |          |       | applications to query the BSF    |
|               |          |       | which PCF that serves a specific |
|               |          |       | data session. For voice services |
|               |          |       | the Application Function (AF) is |
|               |          |       | the IMS P-CSCF. The concept is   |
|               |          |       | not very complicated but is a    |
|               |          |       | very important function in order |
|               |          |       | to connect the IMS and the 5GC   |
|               |          |       | domains when multiple Network    |
|               |          |       | Functions are deployed.          |
|               |          |       |                                  |
|               |          |       | The Nbsf provides the            |
|               |          |       | Nbsf_Management_Register, the    |
|               |          |       | Nbsf_Management_Deregister and   |
|               |          |       | the Nbsf_Management_Discovery    |
|               |          |       | services, the                    |
|               |          |       | Nbsf_Management_Update, the      |
|               |          |       | Nbsf_Management_Subscribe, the   |
|               |          |       | Nbsf_Management_Unsubscribe and  |
|               |          |       | the Nbsf_Management_Notify       |
|               |          |       | operations.                      |
+---------------+----------+-------+----------------------------------+
| #### HT       | BSF      | HT    | BSF Services and Service         |
| TP2_nbsf_data |          | TP2 + | Operations related with data     |
|               |          | i     | DNN. Reference : 3GPP TS 23.502  |
|               |          | nterf |                                  |
|               |          | ace + | Binding Support Function (BSF)   |
|               |          | dnn   | offers services to PCFs to       |
|               |          |       | register and deregister          |
|               |          |       | information about data sessions, |
|               |          |       | and services to other            |
|               |          |       | applications to query the BSF    |
|               |          |       | which PCF that serves a specific |
|               |          |       | data session. For voice services |
|               |          |       | the Application Function (AF) is |
|               |          |       | the IMS P-CSCF. The concept is   |
|               |          |       | not very complicated but is a    |
|               |          |       | very important function in order |
|               |          |       | to connect the IMS and the 5GC   |
|               |          |       | domains when multiple Network    |
|               |          |       | Functions are deployed.          |
|               |          |       |                                  |
|               |          |       | The Nbsf provides the            |
|               |          |       | Nbsf_Management_Register, the    |
|               |          |       | Nbsf_Management_Deregister and   |
|               |          |       | the Nbsf_Management_Discovery    |
|               |          |       | services, the                    |
|               |          |       | Nbsf_Management_Update, the      |
|               |          |       | Nbsf_Management_Subscribe, the   |
|               |          |       | Nbsf_Management_Unsubscribe and  |
|               |          |       | the Nbsf_Management_Notify       |
|               |          |       | operations.                      |
+---------------+----------+-------+----------------------------------+
| #### H        | BSF      | HT    | BSF Services and Service         |
| TTP2_nbsf_ims |          | TP2 + | Operations related with IMS DNN. |
|               |          | i     | Reference : 3GPP TS 23.502       |
|               |          | nterf |                                  |
|               |          | ace + | Binding Support Function (BSF)   |
|               |          | dnn   | offers services to PCFs to       |
|               |          |       | register and deregister          |
|               |          |       | information about data sessions, |
|               |          |       | and services to other            |
|               |          |       | applications to query the BSF    |
|               |          |       | which PCF that serves a specific |
|               |          |       | data session. For voice services |
|               |          |       | the Application Function (AF) is |
|               |          |       | the IMS P-CSCF. The concept is   |
|               |          |       | not very complicated but is a    |
|               |          |       | very important function in order |
|               |          |       | to connect the IMS and the 5GC   |
|               |          |       | domains when multiple Network    |
|               |          |       | Functions are deployed.          |
|               |          |       |                                  |
|               |          |       | The Nbsf provides the            |
|               |          |       | Nbsf_Management_Register, the    |
|               |          |       | Nbsf_Management_Deregister and   |
|               |          |       | the Nbsf_Management_Discovery    |
|               |          |       | services, the                    |
|               |          |       | Nbsf_Management_Update, the      |
|               |          |       | Nbsf_Management_Subscribe, the   |
|               |          |       | Nbsf_Management_Unsubscribe and  |
|               |          |       | the Nbsf_Management_Notify       |
|               |          |       | operations.                      |
+---------------+----------+-------+----------------------------------+
| ##            | CHF      | HT    | CHF Services. Reference : 3GPP   |
| ## HTTP2_nchf |          | TP2 + | TS 23.502                        |
|               |          | i     |                                  |
|               |          | nterf | Charging support in the 5GC      |
|               |          | ace + | architecture is provided through |
|               |          | dnn   | the Charging Function (CHF),     |
|               |          |       | which interacts with PCF and SMF |
|               |          |       | to provide support for charging  |
|               |          |       | services. The CHF may authorize  |
|               |          |       | access to individual ser- vices  |
|               |          |       | or to a group of services by     |
|               |          |       | granting credits for authorized  |
|               |          |       | traffic. If a user is not        |
|               |          |       | authorized to access a certain   |
|               |          |       | service, then the CHF may deny   |
|               |          |       | credit requests and addi-        |
|               |          |       | tionally instruct the SMF to     |
|               |          |       | redirect the service request to  |
|               |          |       | a specified destination.         |
|               |          |       |                                  |
|               |          |       | The Nchf_SpendingLimitControl    |
|               |          |       | service exposed by CHF and       |
|               |          |       | consumed by the PCF is specified |
|               |          |       | in 3GPP TS 23.502.               |
|               |          |       |                                  |
|               |          |       | Nch                              |
|               |          |       | f_SpendingLimitControl_Subscribe |
|               |          |       | : Subscribe to notification of   |
|               |          |       | changes in the status of the     |
|               |          |       | policy counters available at the |
|               |          |       | CHF and retrieval\               |
|               |          |       | of the status of the policy      |
|               |          |       | counters for which subscription  |
|               |          |       | is accepted by CHF.              |
|               |          |       |                                  |
|               |          |       | Nchf_                            |
|               |          |       | SpendingLimitControl_Unsubscribe |
|               |          |       | : Cancel the subscription to     |
|               |          |       | status changes for all the       |
|               |          |       | policy counters available at the |
|               |          |       | CHF.                             |
|               |          |       |                                  |
|               |          |       | Nchf_SpendingLimitControl_Notify |
|               |          |       | : Notify the change of the       |
|               |          |       | status of the subscribed policy  |
|               |          |       | counters available at the CHF.   |
|               |          |       | Alternatively, it can be used by |
|               |          |       | the CHF to provide one or more   |
|               |          |       | pending statuses for a           |
|               |          |       | subscribed policy counter        |
|               |          |       | together with the time they have |
|               |          |       | to be applied. Alternatively, it |
|               |          |       | is also used by the CHF to       |
|               |          |       | notify the removal of a          |
|               |          |       | subscriber from the CHF system,  |
|               |          |       | so that the NF consumer can      |
|               |          |       | terminate the subscriptions of   |
|               |          |       | all the policy counters of the   |
|               |          |       | subscriber.                      |
+---------------+----------+-------+----------------------------------+
| #### HT       | CHF      | HT    | CHF Services with data DNN       |
| TP2_nchf_data |          | TP2 + | class. Reference : 3GPP TS       |
|               |          | i     | 23.502                           |
|               |          | nterf |                                  |
|               |          | ace + | Charging support in the 5GC      |
|               |          | dnn   | architecture is provided through |
|               |          |       | the Charging Function (CHF),     |
|               |          |       | which interacts with PCF and SMF |
|               |          |       | to provide support for charging  |
|               |          |       | services. The CHF may authorize  |
|               |          |       | access to individual ser- vices  |
|               |          |       | or to a group of services by     |
|               |          |       | granting credits for authorized  |
|               |          |       | traffic. If a user is not        |
|               |          |       | authorized to access a certain   |
|               |          |       | service, then the CHF may deny   |
|               |          |       | credit requests and additionally |
|               |          |       | instruct the SMF to redirect the |
|               |          |       | service request to a specified   |
|               |          |       | destination.                     |
|               |          |       |                                  |
|               |          |       | The Nchf_SpendingLimitControl    |
|               |          |       | service exposed by CHF and       |
|               |          |       | consumed by the PCF is specified |
|               |          |       | in 3GPP TS 23.502.               |
|               |          |       |                                  |
|               |          |       | Nch                              |
|               |          |       | f_SpendingLimitControl_Subscribe |
|               |          |       | : Subscribe to notification of   |
|               |          |       | changes in the status of the     |
|               |          |       | policy counters available at the |
|               |          |       | CHF and retrieval\               |
|               |          |       | of the status of the policy      |
|               |          |       | counters for which subscription  |
|               |          |       | is accepted by CHF.              |
|               |          |       |                                  |
|               |          |       | Nchf_                            |
|               |          |       | SpendingLimitControl_Unsubscribe |
|               |          |       | : Cancel the subscription to     |
|               |          |       | status changes for all the       |
|               |          |       | policy counters available at the |
|               |          |       | CHF.                             |
|               |          |       |                                  |
|               |          |       | Nchf_SpendingLimitControl_Notify |
|               |          |       | : Notify the change of the       |
|               |          |       | status of the subscribed policy  |
|               |          |       | counters available at the CHF.   |
|               |          |       | Alternatively, it can be used by |
|               |          |       | the CHF to provide one or more   |
|               |          |       | pending statuses for a           |
|               |          |       | subscribed policy counter        |
|               |          |       | together with the time they have |
|               |          |       | to be applied. Alternatively, it |
|               |          |       | is also used by the CHF to       |
|               |          |       | notify the removal of a          |
|               |          |       | subscriber from the CHF system,  |
|               |          |       | so that the NF consumer can      |
|               |          |       | terminate the subscriptions of   |
|               |          |       | all the policy counters of the   |
|               |          |       | subscriber.                      |
+---------------+----------+-------+----------------------------------+
| #### H        | CHF      | HT    | CHF Services with IMS DNN class. |
| TTP2_nchf_ims |          | TP2 + | Reference : 3GPP TS 23.502       |
|               |          | i     |                                  |
|               |          | nterf | Charging support in the 5GC      |
|               |          | ace + | architecture is provided through |
|               |          | dnn   | the Charging Function (CHF),     |
|               |          |       | which interacts with PCF and SMF |
|               |          |       | to provide support for charging  |
|               |          |       | services. The CHF may authorize  |
|               |          |       | access to individual ser- vices  |
|               |          |       | or to a group of services by     |
|               |          |       | granting credits for authorized  |
|               |          |       | traffic. If a user is not        |
|               |          |       | authorized to access a certain   |
|               |          |       | service, then the CHF may deny   |
|               |          |       | credit requests and additionally |
|               |          |       | instruct the SMF to redirect the |
|               |          |       | service request to a specified   |
|               |          |       | destination.                     |
|               |          |       |                                  |
|               |          |       | The Nchf_SpendingLimitControl    |
|               |          |       | service exposed by CHF and       |
|               |          |       | consumed by the PCF is specified |
|               |          |       | in 3GPP TS 23.502.               |
|               |          |       |                                  |
|               |          |       | Nch                              |
|               |          |       | f_SpendingLimitControl_Subscribe |
|               |          |       | : Subscribe to notification of   |
|               |          |       | changes in the status of the     |
|               |          |       | policy counters available at the |
|               |          |       | CHF and retrieval\               |
|               |          |       | of the status of the policy      |
|               |          |       | counters for which subscription  |
|               |          |       | is accepted by CHF.              |
|               |          |       |                                  |
|               |          |       | Nchf_                            |
|               |          |       | SpendingLimitControl_Unsubscribe |
|               |          |       | : Cancel the subscription to     |
|               |          |       | status changes for all the       |
|               |          |       | policy counters available at the |
|               |          |       | CHF.                             |
|               |          |       |                                  |
|               |          |       | Nchf_SpendingLimitControl_Notify |
|               |          |       | : Notify the change of the       |
|               |          |       | status of the subscribed policy  |
|               |          |       | counters available at the CHF.   |
|               |          |       | Alternatively, it can be used by |
|               |          |       | the CHF to provide one or more   |
|               |          |       | pending statuses for a           |
|               |          |       | subscribed policy counter        |
|               |          |       | together with the time they have |
|               |          |       | to be applied. Alternatively, it |
|               |          |       | is also used by the CHF to       |
|               |          |       | notify the removal of a          |
|               |          |       | subscriber from the CHF system,  |
|               |          |       | so that the NF consumer can      |
|               |          |       | terminate the subscriptions of   |
|               |          |       | all the policy counters of the   |
|               |          |       | subscriber.                      |
+---------------+----------+-------+----------------------------------+
| ##            | NRF      | HT    | NRF Services and Service         |
| ## HTTP2_nnrf |          | TP2 + | Operations. Reference : 3GPP TS  |
|               |          | i     | 23.502                           |
|               |          | nterf |                                  |
|               |          | ace + | Network repository function      |
|               |          | dnn   | (NRF) Provides a new function    |
|               |          |       | for registration and discovery.  |
|               |          |       | It enables NFs to discover and   |
|               |          |       | communicate with each other      |
|               |          |       | through APIs.\                   |
|               |          |       | When two Network Functions       |
|               |          |       | communicate over the 3GPP SBA    |
|               |          |       | architecture, they take on two   |
|               |          |       | different roles. The Network     |
|               |          |       | Function that sends the request  |
|               |          |       | has the role of a Service        |
|               |          |       | Consumer, while the Network      |
|               |          |       | Function that offers a service   |
|               |          |       | and triggers some action based   |
|               |          |       | on the request has the role of a |
|               |          |       | Service Producer. Upon           |
|               |          |       | completion of the requested      |
|               |          |       | action, the Service Producer     |
|               |          |       | responds back to the Service     |
|               |          |       | Consumer. So far so good, but a  |
|               |          |       | critical part of this concept is |
|               |          |       | the mechanism for how the        |
|               |          |       | Service Consumer can locate and  |
|               |          |       | contact a Service Producer that  |
|               |          |       | can provide the requested        |
|               |          |       | service. The solution is based   |
|               |          |       | on the concept of Service        |
|               |          |       | Discovery.\                      |
|               |          |       | Service Discovery relies on that |
|               |          |       | a well-known function in the     |
|               |          |       | network keeps track of all       |
|               |          |       | available Service Producers and  |
|               |          |       | what services they offer. This   |
|               |          |       | is achieved through that each    |
|               |          |       | Service Producer, for example a  |
|               |          |       | 3GPP Network Function like the   |
|               |          |       | PCF, registers that its services |
|               |          |       | are available.\                  |
|               |          |       | In the 5GC architecture, this    |
|               |          |       | registration is done to a        |
|               |          |       | dedicated Network Function that  |
|               |          |       | is called the Network Repository |
|               |          |       | Function (NRF). This concept     |
|               |          |       | allows the NRF to keep track of  |
|               |          |       | all available services of all    |
|               |          |       | Network Functions in the         |
|               |          |       | network. It also means that each |
|               |          |       | individual Network Function      |
|               |          |       | needs to be provisioned or       |
|               |          |       | configured with the address of   |
|               |          |       | one or more NRFs, but it does    |
|               |          |       | not need, and shall not have,    |
|               |          |       | addresses to all other Network   |
|               |          |       | Functions configured.            |
|               |          |       |                                  |
|               |          |       | Nnrf_NFManagement service: This  |
|               |          |       | service enables one NF to manage |
|               |          |       | its NF profile in NRF (i.e.      |
|               |          |       | register, update, deregister).   |
|               |          |       | This service also allows a       |
|               |          |       | consumer NF or SCP to subscribe  |
|               |          |       | in NRF to receive notifications  |
|               |          |       | regarding changes in the NF      |
|               |          |       | profile of other NFs.            |
|               |          |       |                                  |
|               |          |       | Nnrf_NFDiscovery service: This   |
|               |          |       | service enables one NF or SCP to |
|               |          |       | discover a set of NF instances   |
|               |          |       | with specific NF service or a    |
|               |          |       | target NF type or one or more    |
|               |          |       | SCPs. The service also enables   |
|               |          |       | one NF service or SCP to         |
|               |          |       | discover a specific NF service.  |
|               |          |       | The service operations defined   |
|               |          |       | below allow the NF/NF services   |
|               |          |       | or SCP to communicate with NRF.\ |
|               |          |       | This service also enables an SCP |
|               |          |       | to discover SCPs.                |
|               |          |       |                                  |
|               |          |       | Nnrf_AccessToken_service: This   |
|               |          |       | service provides OAuth2 2.0      |
|               |          |       | Access Tokens for NF to NF       |
|               |          |       | authorization as defined in TS   |
|               |          |       | 33.501 \[15\].                   |
|               |          |       |                                  |
|               |          |       | Nnrf_Bootstrapping service: The  |
|               |          |       | Nnrf_Bootstrapping service lets  |
|               |          |       | NF Service Consumers of the NRF  |
|               |          |       | know about the services          |
|               |          |       | endpoints it supports, the NRF   |
|               |          |       | Instance ID and NRF Set ID if    |
|               |          |       | the NRF is part of an NRF set,   |
|               |          |       | by using a version- independent  |
|               |          |       | URI endpoint that does not need  |
|               |          |       | to be discovered by using a      |
|               |          |       | Discovery service                |
+---------------+----------+-------+----------------------------------+
| #### HT       | NRF      | HT    | NRF Services and Service         |
| TP2_nnrf_data |          | TP2 + | Operations with data DNN class.  |
|               |          | i     | Reference : 3GPP TS 23.502\      |
|               |          | nterf | Network repository function      |
|               |          | ace + | (NRF) Provides a new function    |
|               |          | dnn   | for registration and discovery.  |
|               |          |       | It enables NFs to discover and   |
|               |          |       | communicate with each other      |
|               |          |       | through APIs.\                   |
|               |          |       | When two Network Functions       |
|               |          |       | communicate over the 3GPP SBA    |
|               |          |       | architecture, they take on two   |
|               |          |       | different roles. The Network     |
|               |          |       | Function that sends the request  |
|               |          |       | has the role of a Service        |
|               |          |       | Consumer, while the Network      |
|               |          |       | Function that offers a service   |
|               |          |       | and triggers some action based   |
|               |          |       | on the request has the role of a |
|               |          |       | Service Producer. Upon           |
|               |          |       | completion of the requested      |
|               |          |       | action, the Service Producer     |
|               |          |       | responds back to the Service     |
|               |          |       | Consumer. So far so good, but a  |
|               |          |       | critical part of this concept is |
|               |          |       | the mechanism for how the        |
|               |          |       | Service Consumer can locate and  |
|               |          |       | contact a Service Producer that  |
|               |          |       | can provide the requested        |
|               |          |       | service. The solution is based   |
|               |          |       | on the concept of Service        |
|               |          |       | Discovery.\                      |
|               |          |       | Service Discovery relies on that |
|               |          |       | a well-known function in the     |
|               |          |       | network keeps track of all       |
|               |          |       | available Service Producers and  |
|               |          |       | what services they offer. This   |
|               |          |       | is achieved through that each    |
|               |          |       | Service Producer, for example a  |
|               |          |       | 3GPP Network Function like the   |
|               |          |       | PCF, registers that its services |
|               |          |       | are available.\                  |
|               |          |       | In the 5GC architecture, this    |
|               |          |       | registration is done to a        |
|               |          |       | dedicated Network Function that  |
|               |          |       | is called the Network Repository |
|               |          |       | Function (NRF). This concept     |
|               |          |       | allows the NRF to keep track of  |
|               |          |       | all available services of all    |
|               |          |       | Network Functions in the         |
|               |          |       | network. It also means that each |
|               |          |       | individual Network Function      |
|               |          |       | needs to be provi- sioned or     |
|               |          |       | configured with the address of   |
|               |          |       | one or more NRFs, but it does    |
|               |          |       | not need, and shall not have,    |
|               |          |       | addresses to all other Network   |
|               |          |       | Functions configured.            |
|               |          |       |                                  |
|               |          |       | Nnrf_NFManagement service: This  |
|               |          |       | service enables one NF to manage |
|               |          |       | its NF profile in NRF (i.e.      |
|               |          |       | register, update, deregister).   |
|               |          |       | This service also allows a       |
|               |          |       | consumer NF or SCP to subscribe  |
|               |          |       | in NRF to receive notifications  |
|               |          |       | regarding changes in the NF      |
|               |          |       | profile of other NFs.            |
|               |          |       |                                  |
|               |          |       | Nnrf_NFDiscovery service: This   |
|               |          |       | service enables one NF or SCP to |
|               |          |       | discover a set of NF instances   |
|               |          |       | with specific NF service or a    |
|               |          |       | target NF type or one or more    |
|               |          |       | SCPs. The service also enables   |
|               |          |       | one NF service or SCP to         |
|               |          |       | discover a specific NF service.  |
|               |          |       | The service operations defined   |
|               |          |       | below allow the NF/NF services   |
|               |          |       | or SCP to communicate with NRF.\ |
|               |          |       | This service also enables an SCP |
|               |          |       | to discover SCPs.                |
|               |          |       |                                  |
|               |          |       | Nnrf_AccessToken_service: This   |
|               |          |       | service provides OAuth2 2.0      |
|               |          |       | Access Tokens for NF to NF       |
|               |          |       | authorization as defined in TS   |
|               |          |       | 33.501 \[15\].                   |
|               |          |       |                                  |
|               |          |       | Nnrf_Bootstrapping service: The  |
|               |          |       | Nnrf_Bootstrapping service lets  |
|               |          |       | NF Service Consumers of the NRF  |
|               |          |       | know about the services          |
|               |          |       | endpoints it supports, the NRF   |
|               |          |       | Instance ID and NRF Set ID if    |
|               |          |       | the NRF is part of an NRF set,   |
|               |          |       | by using a version- independent  |
|               |          |       | URI endpoint that does not need  |
|               |          |       | to be discovered by using a      |
|               |          |       | Discovery service                |
+---------------+----------+-------+----------------------------------+
| #### H        | NRF      | HT    | NRF Services and Service         |
| TTP2_nnrf_ims |          | TP2 + | Operations with ims dnn class.   |
|               |          | i     | Reference : 3GPP TS 23.502\      |
|               |          | nterf | Network repository function      |
|               |          | ace + | (NRF) Provides a new function    |
|               |          | dnn   | for registration and discovery.  |
|               |          |       | It enables NFs to discover and   |
|               |          |       | communicate with each other      |
|               |          |       | through APIs.\                   |
|               |          |       | When two Network Functions       |
|               |          |       | communicate over the 3GPP SBA    |
|               |          |       | architecture, they take on two   |
|               |          |       | different roles. The Network     |
|               |          |       | Function that sends the request  |
|               |          |       | has the role of a Service        |
|               |          |       | Consumer, while the Network      |
|               |          |       | Function that offers a service   |
|               |          |       | and triggers some action based   |
|               |          |       | on the request has the role of a |
|               |          |       | Service Producer. Upon           |
|               |          |       | completion of the requested      |
|               |          |       | action, the Service Producer     |
|               |          |       | responds back to the Service     |
|               |          |       | Consumer. So far so good, but a  |
|               |          |       | critical part of this concept is |
|               |          |       | the mechanism for how the        |
|               |          |       | Service Consumer can locate and  |
|               |          |       | contact a Service Producer that  |
|               |          |       | can provide the requested        |
|               |          |       | service. The solution is based   |
|               |          |       | on the concept of Service        |
|               |          |       | Discovery.\                      |
|               |          |       | Service Discovery relies on that |
|               |          |       | a well-known function in the     |
|               |          |       | network keeps track of all       |
|               |          |       | available Service Producers and  |
|               |          |       | what services they offer. This   |
|               |          |       | is achieved through that each    |
|               |          |       | Service Producer, for example a  |
|               |          |       | 3GPP Network Function like the   |
|               |          |       | PCF, registers that its services |
|               |          |       | are available.\                  |
|               |          |       | In the 5GC architecture, this    |
|               |          |       | registration is done to a        |
|               |          |       | dedicated Network Function that  |
|               |          |       | is called the Network Repository |
|               |          |       | Function (NRF). This concept     |
|               |          |       | allows the NRF to keep track of  |
|               |          |       | all available services of all    |
|               |          |       | Network Functions in the         |
|               |          |       | network. It also means that each |
|               |          |       | individual Network Function      |
|               |          |       | needs to be provi- sioned or     |
|               |          |       | configured with the address of   |
|               |          |       | one or more NRFs, but it does    |
|               |          |       | not need, and shall not have,    |
|               |          |       | addresses to all other Network   |
|               |          |       | Functions configured.            |
|               |          |       |                                  |
|               |          |       | Nnrf_NFManagement service: This  |
|               |          |       | service enables one NF to manage |
|               |          |       | its NF profile in NRF (i.e.      |
|               |          |       | register, update, deregister).   |
|               |          |       | This service also allows a       |
|               |          |       | consumer NF or SCP to subscribe  |
|               |          |       | in NRF to receive notifications  |
|               |          |       | regarding changes in the NF      |
|               |          |       | profile of other NFs.            |
|               |          |       |                                  |
|               |          |       | Nnrf_NFDiscovery service: This   |
|               |          |       | service enables one NF or SCP to |
|               |          |       | discover a set of NF instances   |
|               |          |       | with specific NF service or a    |
|               |          |       | target NF type or one or more    |
|               |          |       | SCPs. The service also enables   |
|               |          |       | one NF service or SCP to         |
|               |          |       | discover a specific NF service.  |
|               |          |       | The service operations defined   |
|               |          |       | below allow the NF/NF services   |
|               |          |       | or SCP to communicate with NRF.\ |
|               |          |       | This service also enables an SCP |
|               |          |       | to discover SCPs.                |
|               |          |       |                                  |
|               |          |       | Nnrf_AccessToken_service: This   |
|               |          |       | service provides OAuth2 2.0      |
|               |          |       | Access Tokens for NF to NF       |
|               |          |       | authorization as defined in TS   |
|               |          |       | 33.501 \[15\].                   |
|               |          |       |                                  |
|               |          |       | Nnrf_Bootstrapping service: The  |
|               |          |       | Nnrf_Bootstrapping service lets  |
|               |          |       | NF Service Consumers of the NRF  |
|               |          |       | know about the services          |
|               |          |       | endpoints it supports, the NRF   |
|               |          |       | Instance ID and NRF Set ID if    |
|               |          |       | the NRF is part of an NRF set,   |
|               |          |       | by using a version- independent  |
|               |          |       | URI endpoint that does not need  |
|               |          |       | to be discovered by using a      |
|               |          |       | Discovery service                |
+---------------+----------+-------+----------------------------------+
| ##            | PCF      | HT    | PCF Services. Policy control     |
| ## HTTP2_npcf |          | TP2 + | function (PCF) Provides a        |
|               |          | i     | unified policy framework and     |
|               |          | nterf | policy rules for control plane   |
|               |          | ace + | functions.                       |
|               |          | dnn   |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | Npcf_AMPolicyControl service: NF |
|               |          |       | Service Consumer, e.g. AMF, can  |
|               |          |       | create and manage an AM Policy   |
|               |          |       | Association in the PCF through   |
|               |          |       | which the NF Service Consumer    |
|               |          |       | receives access and mobility     |
|               |          |       | related policy information for a |
|               |          |       | UE identified by a SUPI.         |
|               |          |       |                                  |
|               |          |       | Npcf_SMPolicyControl service: NF |
|               |          |       | Service Consumer, e.g. SMF, can  |
|               |          |       | create and manage a SM Policy    |
|               |          |       | Association in the PCF through   |
|               |          |       | which the NF Service Consumer    |
|               |          |       | receives policy information for  |
|               |          |       | a PDU Session.\                  |
|               |          |       | As part of this service, the PCF |
|               |          |       | may provide the NF Service       |
|               |          |       | Consumer, e.g. SMF, with policy  |
|               |          |       | information for the PDU Session  |
|               |          |       | that may contain:                |
|               |          |       |                                  |
|               |          |       | -   PDU Session related policy   |
|               |          |       |     information as defined in    |
|               |          |       |     clause 6.4 of TS 23.503      |
|               |          |       |     \[20\]                       |
|               |          |       |                                  |
|               |          |       | -   PCC rule information as      |
|               |          |       |     defined in clause 6.3 of TS  |
|               |          |       |     23.503 \[20\]                |
|               |          |       |                                  |
|               |          |       | -   Policy Control Request       |
|               |          |       |     Trigger information i.e. a   |
|               |          |       |     set of Policy Control        |
|               |          |       |     Request Trigger(s) as        |
|               |          |       |     defined in clause 6.1.3.5 of |
|               |          |       |     TS 23.503 \[20\]             |
|               |          |       |                                  |
|               |          |       | Npcf_PolicyAuthorization         |
|               |          |       | Service: This service is to      |
|               |          |       | authorise an AF request and to   |
|               |          |       | create policies as requested by  |
|               |          |       | the authorized AF for the PDU    |
|               |          |       | Session to which the AF session  |
|               |          |       | is bound. Additionally, this     |
|               |          |       | service allows an AF or TSCTSF   |
|               |          |       | to exchange port management      |
|               |          |       | information with DS-TT and       |
|               |          |       | NW-TT. This service allows the   |
|               |          |       | NF consumer to                   |
|               |          |       | subscribe/unsubscribe the        |
|               |          |       | notification of events, which    |
|               |          |       | are defined in clause 6.1.3.18   |
|               |          |       | of TS 23.503 \[20\].             |
|               |          |       |                                  |
|               |          |       | Npcf_BDTPolicyControl Service:   |
|               |          |       | This service provides background |
|               |          |       | data transfer policy, which      |
|               |          |       | includes the following           |
|               |          |       | functionalities:                 |
|               |          |       |                                  |
|               |          |       | -   Get background data transfer |
|               |          |       |     policies based on the        |
|               |          |       |     request via NEF from AF; and |
|               |          |       |                                  |
|               |          |       | -   Update background data       |
|               |          |       |     transfer based on the        |
|               |          |       |     selection provided by AF.    |
|               |          |       |                                  |
|               |          |       | Npcf_UEPolicyControl Service: NF |
|               |          |       | Service Consumer, e.g. AMF, may  |
|               |          |       | create and manage a UE Policy    |
|               |          |       | Association in the PCF through   |
|               |          |       | which the NF Service Consumer    |
|               |          |       | receives Policy Control Request  |
|               |          |       | Trigger of UE Policy             |
|               |          |       | Association.                     |
|               |          |       |                                  |
|               |          |       | Npcf_EventExposure service: This |
|               |          |       | service enables an NF to         |
|               |          |       | subscribe and get notified about |
|               |          |       | PCF events for a group of UE(s)  |
|               |          |       | or any UE accessing a            |
|               |          |       | combination of (DNN, S-NSSAI).\  |
|               |          |       | The events can be subscribed by  |
|               |          |       | a NF consumer are described in   |
|               |          |       | clause 6.1.3.18 of TS 23.503     |
|               |          |       | \[20\].                          |
|               |          |       |                                  |
|               |          |       | Npcf_AMPolicyAuthorization       |
|               |          |       | Service: This service is to      |
|               |          |       | authorise an AF request and      |
|               |          |       | potentially create or change     |
|               |          |       | access and mobility management   |
|               |          |       | policies of a UE based on the    |
|               |          |       | request of the authorized AF or  |
|               |          |       | TSCTSF. This service allows the  |
|               |          |       | NF consumer to                   |
|               |          |       | subscribe/unsubscribe the        |
|               |          |       | notification of events for       |
|               |          |       | related to a user (i.e. a SUPI)  |
|               |          |       | that has an AM or UE Policy      |
|               |          |       | Association established, or      |
|               |          |       | both, the list of events are     |
|               |          |       | defined in clause 6.1.3.18 of TS |
|               |          |       | 23.503 \[20\].                   |
+---------------+----------+-------+----------------------------------+
| #### HT       | PCF      | HT    | PCF Services with data DNN.      |
| TP2_npcf_data |          | TP2 + | Policy control function (PCF)    |
|               |          | i     | Provides a unified policy        |
|               |          | nterf | framework and policy rules for   |
|               |          | ace + | control plane functions.         |
|               |          | dnn   |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | Npcf_AMPolicyControl service: NF |
|               |          |       | Service Consumer, e.g. AMF, can  |
|               |          |       | create and manage an AM Policy   |
|               |          |       | Association in the PCF through   |
|               |          |       | which the NF Service Consumer    |
|               |          |       | receives access and mobility     |
|               |          |       | related policy information for a |
|               |          |       | UE identified by a SUPI.         |
|               |          |       |                                  |
|               |          |       | Npcf_SMPolicyControl service: NF |
|               |          |       | Service Consumer, e.g. SMF, can  |
|               |          |       | create and manage a SM Policy    |
|               |          |       | Association in the PCF through   |
|               |          |       | which the NF Service Consumer    |
|               |          |       | receives policy information for  |
|               |          |       | a PDU Session.\                  |
|               |          |       | As part of this service, the PCF |
|               |          |       | may provide the NF Service       |
|               |          |       | Consumer, e.g. SMF, with policy  |
|               |          |       | information for the PDU Session  |
|               |          |       | that may contain:                |
|               |          |       |                                  |
|               |          |       | -   PDU Session related policy   |
|               |          |       |     information as defined in    |
|               |          |       |     clause 6.4 of TS 23.503      |
|               |          |       |     \[20\].                      |
|               |          |       |                                  |
|               |          |       | -   PCC rule information as      |
|               |          |       |     defined in clause 6.3 of TS  |
|               |          |       |     23.503 \[20\].               |
|               |          |       |                                  |
|               |          |       | -   Policy Control Request       |
|               |          |       |     Trigger information i.e. a   |
|               |          |       |     set of Policy Control        |
|               |          |       |     Request Trigger(s) as        |
|               |          |       |     defined in clause 6.1.3.5 of |
|               |          |       |     TS 23.503 \[20\].            |
|               |          |       |                                  |
|               |          |       | Npcf_PolicyAuthorization         |
|               |          |       | Service: This service is to      |
|               |          |       | authorize an AF request and to   |
|               |          |       | create policies as requested by  |
|               |          |       | the authorized AF for the PDU    |
|               |          |       | Session to which the AF session  |
|               |          |       | is bound. Additionally, this     |
|               |          |       | service allows an AF or TSCTSF   |
|               |          |       | to exchange port management      |
|               |          |       | information with DS-TT and       |
|               |          |       | NW-TT. This service allows the   |
|               |          |       | NF consumer to                   |
|               |          |       | subscribe/unsubscribe the        |
|               |          |       | notification of events, which    |
|               |          |       | are defined in clause 6.1.3.18   |
|               |          |       | of TS 23.503 \[20\].             |
|               |          |       |                                  |
|               |          |       | Npcf_BDTPolicyControl Service:   |
|               |          |       | This service provides background |
|               |          |       | data transfer policy, which      |
|               |          |       | includes the following           |
|               |          |       | functionalities:                 |
|               |          |       |                                  |
|               |          |       | -   Get background data transfer |
|               |          |       |     policies based on the        |
|               |          |       |     request via NEF from AF; and |
|               |          |       |                                  |
|               |          |       | -   Update background data       |
|               |          |       |     transfer based on the        |
|               |          |       |     selection provided by AF.    |
|               |          |       |                                  |
|               |          |       | Npcf_UEPolicyControl Service: NF |
|               |          |       | Service Consumer, e.g. AMF, may  |
|               |          |       | create and manage a UE Policy    |
|               |          |       | Association in the PCF through   |
|               |          |       | which the NF Service Consumer    |
|               |          |       | receives Policy Control Request  |
|               |          |       | Trigger of UE Policy             |
|               |          |       | Association.                     |
|               |          |       |                                  |
|               |          |       | Npcf_EventExposure service: This |
|               |          |       | service enables an NF to         |
|               |          |       | subscribe and get notified about |
|               |          |       | PCF events for a group of UE(s)  |
|               |          |       | or any UE accessing a            |
|               |          |       | combination of (DNN, S-NSSAI).\  |
|               |          |       | The events can be subscribed by  |
|               |          |       | a NF consumer are described in   |
|               |          |       | clause 6.1.3.18 of TS 23.503     |
|               |          |       | \[20\].                          |
|               |          |       |                                  |
|               |          |       | Npcf_AMPolicyAuthorization       |
|               |          |       | Service: This service is to      |
|               |          |       | authorize an AF request and      |
|               |          |       | potentially create or change     |
|               |          |       | access and mobility management   |
|               |          |       | policies of a UE based on the    |
|               |          |       | request of the authorized AF or  |
|               |          |       | TSCTSF. This service allows the  |
|               |          |       | NF consumer to                   |
|               |          |       | subscribe/unsubscribe the        |
|               |          |       | notification of events for       |
|               |          |       | related to a user (i.e. a SUPI)  |
|               |          |       | that has an AM or UE Policy      |
|               |          |       | Association established, or      |
|               |          |       | both, the list of events are     |
|               |          |       | defined in clause 6.1.3.18 of TS |
|               |          |       | 23.503 \[20\].                   |
+---------------+----------+-------+----------------------------------+
| #### H        | PCF      | HT    | PCF Services with IMS DNN.       |
| TTP2_npcf_ims |          | TP2 + | Policy control function (PCF)    |
|               |          | i     | Provides a unified policy        |
|               |          | nterf | framework and policy rules for   |
|               |          | ace + | control plane functions.         |
|               |          | dnn   |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | Npcf_AMPolicyControl service: NF |
|               |          |       | Service Consumer, e.g. AMF, can  |
|               |          |       | create and manage an AM Policy   |
|               |          |       | Association in the PCF through   |
|               |          |       | which the NF Service Consumer    |
|               |          |       | receives access and mobility     |
|               |          |       | related policy information for a |
|               |          |       | UE identified by a SUPI.         |
|               |          |       |                                  |
|               |          |       | Npcf_SMPolicyControl service: NF |
|               |          |       | Service Consumer, e.g. SMF, can  |
|               |          |       | create and manage a SM Policy    |
|               |          |       | Association in the PCF through   |
|               |          |       | which the NF Service Consumer    |
|               |          |       | receives policy information for  |
|               |          |       | a PDU Session.\                  |
|               |          |       | As part of this service, the PCF |
|               |          |       | may provide the NF Service       |
|               |          |       | Consumer, e.g. SMF, with policy  |
|               |          |       | information for the PDU Session  |
|               |          |       | that may contain:                |
|               |          |       |                                  |
|               |          |       | -   PDU Session related policy   |
|               |          |       |     information as defined in    |
|               |          |       |     clause 6.4 of TS 23.503      |
|               |          |       |     \[20\].                      |
|               |          |       |                                  |
|               |          |       | -   PCC rule information as      |
|               |          |       |     defined in clause 6.3 of TS  |
|               |          |       |     23.503 \[20\].               |
|               |          |       |                                  |
|               |          |       | -   Policy Control Request       |
|               |          |       |     Trigger information i.e. a   |
|               |          |       |     set of Policy Control        |
|               |          |       |     Request Trigger(s) as        |
|               |          |       |     defined in clause 6.1.3.5 of |
|               |          |       |     TS 23.503 \[20\].            |
|               |          |       |                                  |
|               |          |       | Npcf_PolicyAuthorization         |
|               |          |       | service: This service is to      |
|               |          |       | authorize an AF request and to   |
|               |          |       | create policies as requested by  |
|               |          |       | the authorized AF for the PDU    |
|               |          |       | Session to which the AF session  |
|               |          |       | is bound. Additionally, this     |
|               |          |       | service allows an AF or TSCTSF   |
|               |          |       | to exchange port management      |
|               |          |       | information with DS-TT and       |
|               |          |       | NW-TT. This service allows the   |
|               |          |       | NF consumer to                   |
|               |          |       | subscribe/unsubscribe the        |
|               |          |       | notification of events, which    |
|               |          |       | are defined in clause 6.1.3.18   |
|               |          |       | of TS 23.503 \[20\].             |
|               |          |       |                                  |
|               |          |       | Npcf_BDTPolicyControl service:   |
|               |          |       | This service provides background |
|               |          |       | data transfer policy, which      |
|               |          |       | includes the following           |
|               |          |       | functionalities:                 |
|               |          |       |                                  |
|               |          |       | -   Get background data transfer |
|               |          |       |     policies based on the        |
|               |          |       |     request via NEF from AF; and |
|               |          |       |                                  |
|               |          |       | -   Update background data       |
|               |          |       |     transfer based on the        |
|               |          |       |     selection provided by AF.    |
|               |          |       |                                  |
|               |          |       | Npcf_UEPolicyControl service: NF |
|               |          |       | Service Consumer, e.g. AMF, may  |
|               |          |       | create and manage a UE Policy    |
|               |          |       | Association in the PCF through   |
|               |          |       | which the NF Service Consumer    |
|               |          |       | receives Policy Control Request  |
|               |          |       | Trigger of UE Policy             |
|               |          |       | Association.                     |
|               |          |       |                                  |
|               |          |       | Npcf_EventExposure service: This |
|               |          |       | service enables an NF to         |
|               |          |       | subscribe and get notified about |
|               |          |       | PCF events for a group of UE(s)  |
|               |          |       | or any UE accessing a            |
|               |          |       | combination of (DNN, S-NSSAI).\  |
|               |          |       | The events can be subscribed by  |
|               |          |       | a NF consumer are described in   |
|               |          |       | clause 6.1.3.18 of TS 23.503     |
|               |          |       | \[20\].                          |
|               |          |       |                                  |
|               |          |       | Npcf_AMPolicyAuthorization       |
|               |          |       | service: This service is to      |
|               |          |       | authorize an AF request and      |
|               |          |       | potentially create or change     |
|               |          |       | access and mobility management   |
|               |          |       | policies of a UE based on the    |
|               |          |       | request of the authorized AF or  |
|               |          |       | TSCTSF. This service allows the  |
|               |          |       | NF consumer to                   |
|               |          |       | subscribe/unsubscribe the        |
|               |          |       | notification of events for       |
|               |          |       | related to a user (i.e. a SUPI)  |
|               |          |       | that has an AM or UE Policy      |
|               |          |       | Association established, or      |
|               |          |       | both, the list of events are     |
|               |          |       | defined in clause 6.1.3.18 of TS |
|               |          |       | 23.503 \[20\].                   |
+---------------+----------+-------+----------------------------------+
| #### HT       | SMF      | HT    | SMF Services and SMF Service     |
| TP2_nsmf_data |          | TP2 + | Operations with data DNN.        |
|               |          | i     | Session management function      |
|               |          | nterf | (SMF) provides the session       |
|               |          | ace + | management, tunnel maintenance,  |
|               |          | dnn   | IP address allocation and        |
|               |          |       | management, UP function          |
|               |          |       | selection, policy enforcement,   |
|               |          |       | QoS control, charging data       |
|               |          |       | collection, roaming, and other   |
|               |          |       | functions.                       |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession service: This    |
|               |          |       | service operates on the PDU      |
|               |          |       | Sessions. The following are the  |
|               |          |       | key functionalities of this NF   |
|               |          |       | service:                         |
|               |          |       |                                  |
|               |          |       | -   (between AMF and SMF)        |
|               |          |       |     Creation / Deletion /        |
|               |          |       |     Modification of AMF-SMF      |
|               |          |       |     interactions for PDU         |
|               |          |       |     Sessions                     |
|               |          |       |                                  |
|               |          |       | -   The resource handled between |
|               |          |       |     AMF and SMF via Create /     |
|               |          |       |     Update / Release SM context  |
|               |          |       |     operations corresponds to    |
|               |          |       |     the AMF-SMF association for  |
|               |          |       |     a PDU Session                |
|               |          |       |                                  |
|               |          |       | -   When the AMF has got no      |
|               |          |       |     association with an SMF to   |
|               |          |       |     support a PDU Session, the   |
|               |          |       |     AMF creates such association |
|               |          |       |     via the                      |
|               |          |       |                                  |
|               |          |       |  Nsmf_PDUSession_CreateSMContext |
|               |          |       |     operation. The context       |
|               |          |       |     created is identified via    |
|               |          |       |     the SM Context ID. Otherwise |
|               |          |       |     (e.g. at hand-over between   |
|               |          |       |     3GPP and Non 3GPP access)    |
|               |          |       |     the AMF uses the             |
|               |          |       |                                  |
|               |          |       |  Nsmf_PDUSession_UpdateSMContext |
|               |          |       |     operation                    |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_Create service   |
|               |          |       | operation: Create a new PDU      |
|               |          |       | Session in the H-SMF or SMF or   |
|               |          |       | create an association with an    |
|               |          |       | existing PDN\                    |
|               |          |       | connection in the home           |
|               |          |       | SMF+PGW-C.                       |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_Update service   |
|               |          |       | operation: Update the            |
|               |          |       | established PDU Session.\        |
|               |          |       | This service operation is        |
|               |          |       | invoked by the V-SMF towards the |
|               |          |       | H-SMF in the case of UE or       |
|               |          |       | serving network requested PDU    |
|               |          |       | Session Modification in order    |
|               |          |       | for the V-SMF to transfer the    |
|               |          |       | PDU Session Modification         |
|               |          |       | request. It can also be invoked  |
|               |          |       | by the V-SMF to indicate to the  |
|               |          |       | H-SMF that the access type of    |
|               |          |       | the PDU session can be changed.  |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_Release service  |
|               |          |       | operation: It causes the         |
|               |          |       | immediate and unconditional      |
|               |          |       | deletion of the resources        |
|               |          |       | associated with the PDU Session. |
|               |          |       | This service operation is used   |
|               |          |       | by V-SMF to request the H-SMF or |
|               |          |       | used by I-SMF to request the SMF |
|               |          |       | to release the resources related |
|               |          |       | to a PDU Session for the serving |
|               |          |       | network initiated PDU release    |
|               |          |       | case (e.g. implicit              |
|               |          |       | De-registration of UE in the     |
|               |          |       | serving network).                |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_CreateSMContext  |
|               |          |       | service operation: It creates an |
|               |          |       | AMF-SMF association to support a |
|               |          |       | PDU Session.                     |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_UpdateSMContext  |
|               |          |       | service operation: It allows to  |
|               |          |       | update the AMF-SMF association   |
|               |          |       | to support a PDU Session and/or  |
|               |          |       | to provide SMF with N1/N2 SM     |
|               |          |       | information received from the UE |
|               |          |       | or from the AN, or allows to     |
|               |          |       | establish forwarding tunnel      |
|               |          |       | between UPFs controlled by       |
|               |          |       | different SMFs (e.g. by UPF      |
|               |          |       | controlled by old I-SMF and UPF  |
|               |          |       | controlled by new I-SMF).        |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_ReleaseSMContext |
|               |          |       | service operation: It allows to  |
|               |          |       | release the AMF-SMF association  |
|               |          |       | for a certain PDU Session        |
|               |          |       | because the PDU Session has been |
|               |          |       | released.                        |
|               |          |       |                                  |
|               |          |       | Nsmf_                            |
|               |          |       | PDUSession_SMContextStatusNotify |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by the SMF to  |
|               |          |       | notify its consumers about the   |
|               |          |       | status of an SM context related  |
|               |          |       | to a PDU Session (e.g. PDU       |
|               |          |       | Session Release due to local     |
|               |          |       | reasons within the SMF, PDU      |
|               |          |       | Session handover to a different  |
|               |          |       | system or access type, SMF       |
|               |          |       | context transfer, triggering     |
|               |          |       | I-SMF selection for the PDU      |
|               |          |       | Session). The SMF may use this   |
|               |          |       | service operation to update the  |
|               |          |       | SMF derived CN assisted RAN      |
|               |          |       | parameters tuning in the AMF.    |
|               |          |       | The SMF may report the DDN       |
|               |          |       | Failure with NEF Correlation ID  |
|               |          |       | to the AMF.                      |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_StatusNotify     |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by the SMF to  |
|               |          |       | notify its consumers about the   |
|               |          |       | status of a PDU Session (e.g.    |
|               |          |       | PDU Session is released due to   |
|               |          |       | local reasons within the H-SMF,  |
|               |          |       | PDU Session handover to a        |
|               |          |       | different system or access type, |
|               |          |       | triggering I-SMF reselection for |
|               |          |       | the PDU Session).                |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_ContextPush      |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by the SMF as  |
|               |          |       | Service Consumer to push one SM  |
|               |          |       | Context to a another SMF as NF   |
|               |          |       | Service Producer. It may be      |
|               |          |       | triggered by OAM.                |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_SendMOData       |
|               |          |       | service operation: When the AMF  |
|               |          |       | has received MO Small Data from  |
|               |          |       | the UE in NAS procedure, this    |
|               |          |       | service operation allows the AMF |
|               |          |       | to send the MO Small Data to the |
|               |          |       | SMF.                             |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_TransferMOData   |
|               |          |       | service operation: When the      |
|               |          |       | V-SMF/I-SMF has received MO      |
|               |          |       | Small Data from AMF, this        |
|               |          |       | service operation allows the     |
|               |          |       | V-SMF/I-SMF to forward the MO    |
|               |          |       | Small Data to the (H-)SMF.       |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_TransferMTData   |
|               |          |       | service operation: When the      |
|               |          |       | (H-)SMF has received MT Small    |
|               |          |       | Data from the NEF, this service  |
|               |          |       | operation allows the (H- )SMF to |
|               |          |       | send the MT Small Data to the    |
|               |          |       | V-SMF/I-SMF.                     |
|               |          |       |                                  |
|               |          |       | Nsmf_EventExposure Service: This |
|               |          |       | service provides events related  |
|               |          |       | to PDU Sessions towards consumer |
|               |          |       | NF. The service operations       |
|               |          |       | exposed by this service allow    |
|               |          |       | other NFs to subscribe and get   |
|               |          |       | notified of events happening on  |
|               |          |       | PDU Sessions. The following are  |
|               |          |       | the key functionalities of this  |
|               |          |       | NF service.                      |
|               |          |       |                                  |
|               |          |       | -   Allow consumer NFs to        |
|               |          |       |     Subscribe and unsubscribe    |
|               |          |       |     for an Event ID on PDU       |
|               |          |       |     Session(s)                   |
|               |          |       |                                  |
|               |          |       | -   Allow the NWDAF to collect   |
|               |          |       |     data for network data        |
|               |          |       |     analytics as specified in TS |
|               |          |       |     23.288 \[50\]                |
|               |          |       |                                  |
|               |          |       | -   Notifying events on the PDU  |
|               |          |       |     Session to the subscribed    |
|               |          |       |     NFs                          |
|               |          |       |                                  |
|               |          |       | -   Allow consumer NFs to        |
|               |          |       |     acknowledge or respond to an |
|               |          |       |     event notification           |
|               |          |       |                                  |
|               |          |       | Nsmf_EventExposure_Notify        |
|               |          |       | service operation: Report UE PDU |
|               |          |       | Session related event(s) to the  |
|               |          |       | NF which has subscribed to the   |
|               |          |       | event report service.            |
|               |          |       |                                  |
|               |          |       | Nsmf                             |
|               |          |       | _EventExposure_AppRelocationInfo |
|               |          |       | service operation: Acknowledge   |
|               |          |       | the notification from the SMF    |
|               |          |       | regarding UE PDU Session related |
|               |          |       | event(s).                        |
|               |          |       |                                  |
|               |          |       | Nsmf_EventExposure_Subscribe     |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by an NF to    |
|               |          |       | subscribe or modify a            |
|               |          |       | subscription for event           |
|               |          |       | notifications on a specified PDU |
|               |          |       | Session or for all PDU Sessions  |
|               |          |       | of one UE, group of UE(s) or any |
|               |          |       | UE.                              |
|               |          |       |                                  |
|               |          |       | Nsmf_EventExposure_UnSubscribe   |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by an NF to    |
|               |          |       | unsubscribe event notifications. |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_ContextRequest   |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by the NF      |
|               |          |       | Consumer to request for SM       |
|               |          |       | Context (e.g. during EPS IWK,    |
|               |          |       | HO, SM Context transfer          |
|               |          |       | indication), or during mobility  |
|               |          |       | procedure with I-SMF (or V-SMF)  |
|               |          |       | changes or may be triggered by   |
|               |          |       | OAM.                             |
+---------------+----------+-------+----------------------------------+
| #### H        | SMF      | HT    | SMF Services and SMF Service     |
| TTP2_nsmf_ims |          | TP2 + | Operations with IMS DNN. Session |
|               |          | i     | management function (SMF)        |
|               |          | nterf | provides the session management, |
|               |          | ace + | tunnel maintenance, IP address   |
|               |          | dnn   | allocation and management, UP    |
|               |          |       | function selection, policy       |
|               |          |       | enforcement, QoS control,        |
|               |          |       | charging data collection,        |
|               |          |       | roaming, and other functions.    |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession service: This    |
|               |          |       | service operates on the PDU      |
|               |          |       | Sessions. The following are the  |
|               |          |       | key functionalities of this NF   |
|               |          |       | service:                         |
|               |          |       |                                  |
|               |          |       | -   (between AMF and SMF)        |
|               |          |       |     Creation / Deletion /        |
|               |          |       |     Modification of AMF-SMF      |
|               |          |       |     interactions for PDU         |
|               |          |       |     Sessions                     |
|               |          |       |                                  |
|               |          |       | -   The resource handled between |
|               |          |       |     AMF and SMF via Create /     |
|               |          |       |     Update / Release SM context  |
|               |          |       |     operations corresponds to    |
|               |          |       |     the AMF-SMF association for  |
|               |          |       |     a PDU Session                |
|               |          |       |                                  |
|               |          |       | -   When the AMF has got no      |
|               |          |       |     association with an SMF to   |
|               |          |       |     support a PDU Session, the   |
|               |          |       |     AMF creates such association |
|               |          |       |     via the                      |
|               |          |       |                                  |
|               |          |       |  Nsmf_PDUSession_CreateSMContext |
|               |          |       |     operation. The context       |
|               |          |       |     created is identified via    |
|               |          |       |     the SM Context ID. Otherwise |
|               |          |       |     (e.g. at hand-over between   |
|               |          |       |     3GPP and Non 3GPP access)    |
|               |          |       |     the AMF uses the             |
|               |          |       |                                  |
|               |          |       |  Nsmf_PDUSession_UpdateSMContext |
|               |          |       |     operation                    |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_Create service   |
|               |          |       | operation: Create a new PDU      |
|               |          |       | Session in the H-SMF or SMF or   |
|               |          |       | create an association with an    |
|               |          |       | existing PDN\                    |
|               |          |       | connection in the home           |
|               |          |       | SMF+PGW-C.                       |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_Update service   |
|               |          |       | operation: Update the            |
|               |          |       | established PDU Session.\        |
|               |          |       | This service operation is        |
|               |          |       | invoked by the V-SMF towards the |
|               |          |       | H-SMF in the case of UE or       |
|               |          |       | serving network requested PDU    |
|               |          |       | Session Modification in order    |
|               |          |       | for the V-SMF to transfer the    |
|               |          |       | PDU Session Modification         |
|               |          |       | request. It can also be invoked  |
|               |          |       | by the V-SMF to indicate to the  |
|               |          |       | H-SMF that the access type of    |
|               |          |       | the PDU session can be changed.  |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_Release service  |
|               |          |       | operation: It causes the         |
|               |          |       | immediate and unconditional      |
|               |          |       | deletion of the resources        |
|               |          |       | associated with the PDU Session. |
|               |          |       | This service operation is used   |
|               |          |       | by V-SMF to request the H-SMF or |
|               |          |       | used by I-SMF to request the SMF |
|               |          |       | to release the resources related |
|               |          |       | to a PDU Session for the serving |
|               |          |       | network initiated PDU release    |
|               |          |       | case (e.g. implicit              |
|               |          |       | De-registration of UE in the     |
|               |          |       | serving network).                |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_CreateSMContext  |
|               |          |       | service operation: It creates an |
|               |          |       | AMF-SMF association to support a |
|               |          |       | PDU Session.                     |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_UpdateSMContext  |
|               |          |       | service operation: It allows to  |
|               |          |       | update the AMF-SMF association   |
|               |          |       | to support a PDU Session and/or  |
|               |          |       | to provide SMF with N1/N2 SM     |
|               |          |       | information received from the UE |
|               |          |       | or from the AN, or allows to     |
|               |          |       | establish forwarding tunnel      |
|               |          |       | between UPFs controlled by       |
|               |          |       | different SMFs (e.g. by UPF      |
|               |          |       | controlled by old I-SMF and UPF  |
|               |          |       | controlled by new I-SMF).        |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_ReleaseSMContext |
|               |          |       | service operation: It allows to  |
|               |          |       | release the AMF-SMF association  |
|               |          |       | for a certain PDU Session        |
|               |          |       | because the PDU Session has been |
|               |          |       | released.                        |
|               |          |       |                                  |
|               |          |       | Nsmf_                            |
|               |          |       | PDUSession_SMContextStatusNotify |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by the SMF to  |
|               |          |       | notify its consumers about the   |
|               |          |       | status of an SM context related  |
|               |          |       | to a PDU Session (e.g. PDU       |
|               |          |       | Session Release due to local     |
|               |          |       | reasons within the SMF, PDU      |
|               |          |       | Session handover to a different  |
|               |          |       | system or access type, SMF       |
|               |          |       | context transfer, triggering     |
|               |          |       | I-SMF selection for the PDU      |
|               |          |       | Session). The SMF may use this   |
|               |          |       | service operation to update the  |
|               |          |       | SMF derived CN assisted RAN      |
|               |          |       | parameters tuning in the AMF.    |
|               |          |       | The SMF may report the DDN       |
|               |          |       | Failure with NEF Correlation ID  |
|               |          |       | to the AMF.                      |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_StatusNotify     |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by the SMF to  |
|               |          |       | notify its consumers about the   |
|               |          |       | status of a PDU Session (e.g.    |
|               |          |       | PDU Session is released due to   |
|               |          |       | local reasons within the H-SMF,  |
|               |          |       | PDU Session handover to a        |
|               |          |       | different system or access type, |
|               |          |       | triggering I-SMF reselection for |
|               |          |       | the PDU Session).                |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_ContextPush      |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by the SMF as  |
|               |          |       | Service Consumer to push one SM  |
|               |          |       | Context to a another SMF as NF   |
|               |          |       | Service Producer. It may be      |
|               |          |       | triggered by OAM.                |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_SendMOData       |
|               |          |       | service operation: When the AMF  |
|               |          |       | has received MO Small Data from  |
|               |          |       | the UE in NAS procedure, this    |
|               |          |       | service operation allows the AMF |
|               |          |       | to send the MO Small Data to the |
|               |          |       | SMF.                             |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_TransferMOData   |
|               |          |       | service operation: When the      |
|               |          |       | V-SMF/I-SMF has received MO      |
|               |          |       | Small Data from AMF, this        |
|               |          |       | service operation allows the     |
|               |          |       | V-SMF/I-SMF to forward the MO    |
|               |          |       | Small Data to the (H-)SMF.       |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_TransferMTData   |
|               |          |       | service operation: When the      |
|               |          |       | (H-)SMF has received MT Small    |
|               |          |       | Data from the NEF, this service  |
|               |          |       | operation allows the (H- )SMF to |
|               |          |       | send the MT Small Data to the    |
|               |          |       | V-SMF/I-SMF.                     |
|               |          |       |                                  |
|               |          |       | Nsmf_EventExposure service: This |
|               |          |       | service provides events related  |
|               |          |       | to PDU Sessions towards consumer |
|               |          |       | NF. The service operations       |
|               |          |       | exposed by this service allow    |
|               |          |       | other NFs to subscribe and get   |
|               |          |       | notified of events happening on  |
|               |          |       | PDU Sessions. The following are  |
|               |          |       | the key functionalities of this  |
|               |          |       | NF service.                      |
|               |          |       |                                  |
|               |          |       | -   Allow consumer NFs to        |
|               |          |       |     Subscribe and unsubscribe    |
|               |          |       |     for an Event ID on PDU       |
|               |          |       |     Session(s)                   |
|               |          |       |                                  |
|               |          |       | -   Allow the NWDAF to collect   |
|               |          |       |     data for network data        |
|               |          |       |     analytics as specified in TS |
|               |          |       |     23.288 \[50\]                |
|               |          |       |                                  |
|               |          |       | -   Notifying events on the PDU  |
|               |          |       |     Session to the subscribed    |
|               |          |       |     NFs                          |
|               |          |       |                                  |
|               |          |       | -   Allow consumer NFs to        |
|               |          |       |     acknowledge or respond to an |
|               |          |       |     event notification           |
|               |          |       |                                  |
|               |          |       | Nsmf_EventExposure_Notify        |
|               |          |       | service operation: Report UE PDU |
|               |          |       | Session related event(s) to the  |
|               |          |       | NF which has subscribed to the   |
|               |          |       | event report service.            |
|               |          |       |                                  |
|               |          |       | Nsmf                             |
|               |          |       | _EventExposure_AppRelocationInfo |
|               |          |       | service operation: Acknowledge   |
|               |          |       | the notification from the SMF    |
|               |          |       | regarding UE PDU Session related |
|               |          |       | event(s).                        |
|               |          |       |                                  |
|               |          |       | Nsmf_EventExposure_Subscribe     |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by an NF to    |
|               |          |       | subscribe or modify a            |
|               |          |       | subscription for event           |
|               |          |       | notifications on a specified PDU |
|               |          |       | Session or for all PDU Sessions  |
|               |          |       | of one UE, group of UE(s) or any |
|               |          |       | UE.                              |
|               |          |       |                                  |
|               |          |       | Nsmf_EventExposure_UnSubscribe   |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by an NF to    |
|               |          |       | unsubscribe event notifications. |
|               |          |       |                                  |
|               |          |       | Nsmf_PDUSession_ContextRequest   |
|               |          |       | service operation: This service  |
|               |          |       | operation is used by the NF      |
|               |          |       | Consumer to request for SM       |
|               |          |       | Context (e.g. during EPS IWK,    |
|               |          |       | HO, SM Context transfer          |
|               |          |       | indication), or during mobility  |
|               |          |       | procedure with I-SMF (or V-SMF)  |
|               |          |       | changes or may be triggered by   |
|               |          |       | OAM.                             |
+---------------+----------+-------+----------------------------------+
| ###           | SMF      | HT    | SMSF Services. The SMSF(Short    |
| # HTTP2_nsmsf |          | TP2 + | Message Service Function) is an  |
|               |          | i     | optional Network Function that   |
|               |          | nterf | is only deployed for enabling    |
|               |          | ace + | SMS over NAS services. Just as   |
|               |          | dnn   | other Control Plane network      |
|               |          |       | functions in the 5G              |
|               |          |       | architecture, the SMSF exposes a |
|               |          |       | service-based interface relying  |
|               |          |       | on HTTP communication, called    |
|               |          |       | Nsmsf. It connects with the AMF  |
|               |          |       | and the UDM Network Functions    |
|               |          |       | within the 5G Core architecture. |
|               |          |       | The SMSF checks subscription     |
|               |          |       | data through interacting with    |
|               |          |       | the UDM, generates charging      |
|               |          |       | records and forwards SMS         |
|               |          |       | messages between the AMF and the |
|               |          |       | SMS networks external to the 5G  |
|               |          |       | Core architecture.               |
|               |          |       |                                  |
|               |          |       |  Reference : 3GPP TS 23.502      |
|               |          |       |                                  |
|               |          |       | This service allows AMF to       |
|               |          |       | authorize SMS and activate SMS   |
|               |          |       | for the served user on SMSF.     |
|               |          |       | This service allows downlink SMS |
|               |          |       | message transmit from consumer   |
|               |          |       | NF to SMSF.                      |
+---------------+----------+-------+----------------------------------+
| ##            | UDM      | HT    | UDM Services and Service         |
| ## HTTP2_nudm |          | TP2 + | Operations. Unified data         |
|               |          | i     | management (UDM) Provides        |
|               |          | nterf | unified data management, 3GPP    |
|               |          | ace + | AKA authentication, user         |
|               |          | dnn   | identification, access           |
|               |          |       | authorization, registration,     |
|               |          |       | mobility, subscription, and SMS  |
|               |          |       | management.                      |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | Nudm_SubscriberDataManagement    |
|               |          |       | (SDM) service: Subscription data |
|               |          |       | types used in the                |
|               |          |       | Nudm_SubscriberDataManagement    |
|               |          |       | service are:                     |
|               |          |       |                                  |
|               |          |       | -   Access and Mobility          |
|               |          |       |     Subscription data (data      |
|               |          |       |     needed for UE Registration   |
|               |          |       |     and Mobility Management)     |
|               |          |       |                                  |
|               |          |       | -   Slice Selection Subscription |
|               |          |       |     data (data needed for Slice  |
|               |          |       |     Selection                    |
|               |          |       |                                  |
|               |          |       | -   SMF Selection Subscription   |
|               |          |       |     data (data needed for SMF    |
|               |          |       |     Selection)                   |
|               |          |       |                                  |
|               |          |       | -   UE context in SMF data       |
|               |          |       |                                  |
|               |          |       | -   SMS Management Subscription  |
|               |          |       |     data (data needed by SMSF    |
|               |          |       |     for SMSF Registration)       |
|               |          |       |                                  |
|               |          |       | -   SMS Subscription data (data  |
|               |          |       |     needed in AMF)               |
|               |          |       |                                  |
|               |          |       | -   Session Management           |
|               |          |       |     Subscription data (data      |
|               |          |       |     needed for PDU Session       |
|               |          |       |     Establishment)               |
|               |          |       |                                  |
|               |          |       | -   Identifier translation       |
|               |          |       |     (Corresponding SUPI / MSISDN |
|               |          |       |     for input GPSI.)             |
|               |          |       |                                  |
|               |          |       | -   Intersystem continuity       |
|               |          |       |     Context                      |
|               |          |       |                                  |
|               |          |       | -   LCS privacy (data needed by  |
|               |          |       |     GMLC)                        |
|               |          |       |                                  |
|               |          |       | -   LCS mobile origination (data |
|               |          |       |     needed by AMF)               |
|               |          |       |                                  |
|               |          |       | -   User consent for UE data     |
|               |          |       |     collection                   |
|               |          |       |                                  |
|               |          |       | -   UE reachability              |
|               |          |       |                                  |
|               |          |       | -   V2X Subscription data        |
|               |          |       |                                  |
|               |          |       | -   ProSe Subscription data      |
|               |          |       |                                  |
|               |          |       | -   MBS Subscription data        |
|               |          |       |                                  |
|               |          |       | Nudm_UEAuthentication Service  : |
|               |          |       | This service is used by the      |
|               |          |       | requester NF to get              |
|               |          |       | authentication data and provide  |
|               |          |       | UDM with the result of the       |
|               |          |       | authentication procedure         |
|               |          |       | success. In the case of SNPN,    |
|               |          |       | this service may be used to      |
|               |          |       | instruct the AUSF to execute     |
|               |          |       | authentication towards AAA-S.    |
|               |          |       |                                  |
|               |          |       | Nudm_EventExposure service : The |
|               |          |       | NF consumer subscribes to        |
|               |          |       | receive an event, deletes the    |
|               |          |       | subscription of an event if      |
|               |          |       | already defined in UDM, UDM      |
|               |          |       | reports the event to the         |
|               |          |       | consumer that has previously     |
|               |          |       | subscribed or The NF consumer    |
|               |          |       | requests to modify an existing   |
|               |          |       | subscription to event            |
|               |          |       | notifications.                   |
|               |          |       |                                  |
|               |          |       | Nudm_ParameterProvision service  |
|               |          |       | : This service is for allowing   |
|               |          |       | NEF to provision of information  |
|               |          |       | which can be used for the UE in  |
|               |          |       | 5GS.                             |
|               |          |       |                                  |
|               |          |       | Nudm_NIDDAuthorisation service   |
|               |          |       | :  The consumer requests         |
|               |          |       | authorisation for NIDD           |
|               |          |       | Configuration or is used for the |
|               |          |       | UDM to notify the NIDD           |
|               |          |       | Authorization Update to NF       |
|               |          |       | consumer.                        |
|               |          |       |                                  |
|               |          |       | N                                |
|               |          |       | udm_ServiceSpecificAuthorisation |
|               |          |       | service : This service is for    |
|               |          |       | authorisation of a specific      |
|               |          |       | service configuration.           |
|               |          |       |                                  |
|               |          |       | Nudm_ReportSMDeliveryStatus      |
|               |          |       | service : This service is to     |
|               |          |       | report the SM-Delivery Status to |
|               |          |       | UDM.                             |
+---------------+----------+-------+----------------------------------+
| #### HT       | UDM      | HT    | UDM Services and Service         |
| TP2_nudm_data |          | TP2 + | Operations with data DNN class.  |
|               |          | i     | Unified data management (UDM)    |
|               |          | nterf | Provides unified data            |
|               |          | ace + | management, 3GPP AKA             |
|               |          | dnn   | authentication, user             |
|               |          |       | identification, access           |
|               |          |       | authorization, registration,     |
|               |          |       | mobility, subscription, and SMS  |
|               |          |       | management.                      |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | Nudm_SubscriberDataManagement    |
|               |          |       | (SDM) Service : Subscription     |
|               |          |       | data types used in the           |
|               |          |       | Nudm_SubscriberDataManagement    |
|               |          |       | Service are :                    |
|               |          |       |                                  |
|               |          |       | -   Access and Mobility          |
|               |          |       |     Subscription data (data      |
|               |          |       |     needed for UE Registration   |
|               |          |       |     and Mobility Management)     |
|               |          |       |                                  |
|               |          |       | -   Slice Selection Subscription |
|               |          |       |     data (data needed for Slice  |
|               |          |       |     Selection                    |
|               |          |       |                                  |
|               |          |       | -   SMF Selection Subscription   |
|               |          |       |     data (data needed for SMF    |
|               |          |       |     Selection)                   |
|               |          |       |                                  |
|               |          |       | -   UE context in SMF data       |
|               |          |       |                                  |
|               |          |       | -   SMS Management Subscription  |
|               |          |       |     data (data needed by SMSF    |
|               |          |       |     for SMSF Registration)       |
|               |          |       |                                  |
|               |          |       | -   SMS Subscription data (data  |
|               |          |       |     needed in AMF)               |
|               |          |       |                                  |
|               |          |       | -   Session Management           |
|               |          |       |     Subscription data (data      |
|               |          |       |     needed for PDU Session       |
|               |          |       |     Establishment)               |
|               |          |       |                                  |
|               |          |       | -   Identifier translation       |
|               |          |       |     (Corresponding SUPI / MSISDN |
|               |          |       |     for input GPSI.)             |
|               |          |       |                                  |
|               |          |       | -   Intersystem continuity       |
|               |          |       |     Context                      |
|               |          |       |                                  |
|               |          |       | -   LCS privacy (data needed by  |
|               |          |       |     GMLC)                        |
|               |          |       |                                  |
|               |          |       | -   LCS mobile origination (data |
|               |          |       |     needed by AMF)               |
|               |          |       |                                  |
|               |          |       | -   User consent for UE data     |
|               |          |       |     collection                   |
|               |          |       |                                  |
|               |          |       | -   UE reachability              |
|               |          |       |                                  |
|               |          |       | -   V2X Subscription data        |
|               |          |       |                                  |
|               |          |       | -   ProSe Subscription data      |
|               |          |       |                                  |
|               |          |       | -   MBS Subscription data        |
|               |          |       |                                  |
|               |          |       | Nudm_UEAuthentication Service  : |
|               |          |       | This service is used by the      |
|               |          |       | requester NF to get              |
|               |          |       | authentication data and provide  |
|               |          |       | UDM with the result of the       |
|               |          |       | authentication procedure         |
|               |          |       | success. In the case of SNPN,    |
|               |          |       | this service may be used to      |
|               |          |       | instruct the AUSF to execute     |
|               |          |       | authentication towards AAA-S.    |
|               |          |       |                                  |
|               |          |       | Nudm_EventExposure service : The |
|               |          |       | NF consumer subscribes to        |
|               |          |       | receive an event, deletes the    |
|               |          |       | subscription of an event if      |
|               |          |       | already defined in UDM, UDM      |
|               |          |       | reports the event to the         |
|               |          |       | consumer that has previously     |
|               |          |       | subscribed or The NF consumer    |
|               |          |       | requests to modify an existing   |
|               |          |       | subscription to event            |
|               |          |       | notifications.                   |
|               |          |       |                                  |
|               |          |       | Nudm_ParameterProvision service  |
|               |          |       | : This service is for allowing   |
|               |          |       | NEF to provision of information  |
|               |          |       | which can be used for the UE in  |
|               |          |       | 5GS.                             |
|               |          |       |                                  |
|               |          |       | Nudm_NIDDAuthorisation service   |
|               |          |       | :  The consumer requests         |
|               |          |       | authorisation for NIDD           |
|               |          |       | Configuration or is used for the |
|               |          |       | UDM to notify the NIDD           |
|               |          |       | Authorization Update to NF       |
|               |          |       | consumer.                        |
|               |          |       |                                  |
|               |          |       | N                                |
|               |          |       | udm_ServiceSpecificAuthorisation |
|               |          |       | service : This service is for    |
|               |          |       | authorisation of a specific      |
|               |          |       | service configuration.           |
|               |          |       |                                  |
|               |          |       | Nudm_ReportSMDeliveryStatus      |
|               |          |       | service : This service is to     |
|               |          |       | report the SM-Delivery Status to |
|               |          |       | UDM.                             |
+---------------+----------+-------+----------------------------------+
| #### H        | UDM      | HT    | UDM Services and Service         |
| TTP2_nudm_ims |          | TP2 + | Operations with IMS DNN class.   |
|               |          | i     | Unified data management (UDM)    |
|               |          | nterf | Provides unified data            |
|               |          | ace + | management, 3GPP AKA             |
|               |          | dnn   | authentication, user             |
|               |          |       | identification, access           |
|               |          |       | authorization, registration,     |
|               |          |       | mobility, subscription, and SMS  |
|               |          |       | management.                      |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
|               |          |       |                                  |
|               |          |       | Nudm_SubscriberDataManagement    |
|               |          |       | (SDM) Service : Subscription     |
|               |          |       | data types used in the           |
|               |          |       | Nudm_SubscriberDataManagement    |
|               |          |       | Service are:                     |
|               |          |       |                                  |
|               |          |       | -   Access and Mobility          |
|               |          |       |     Subscription data (data      |
|               |          |       |     needed for UE Registration   |
|               |          |       |     and Mobility Management)     |
|               |          |       |                                  |
|               |          |       | -   Slice Selection Subscription |
|               |          |       |     data (data needed for Slice  |
|               |          |       |     Selection                    |
|               |          |       |                                  |
|               |          |       | -   SMF Selection Subscription   |
|               |          |       |     data (data needed for SMF    |
|               |          |       |     Selection)                   |
|               |          |       |                                  |
|               |          |       | -   UE context in SMF data       |
|               |          |       |                                  |
|               |          |       | -   SMS Management Subscription  |
|               |          |       |     data (data needed by SMSF    |
|               |          |       |     for SMSF Registration)       |
|               |          |       |                                  |
|               |          |       | -   SMS Subscription data (data  |
|               |          |       |     needed in AMF)               |
|               |          |       |                                  |
|               |          |       | -   Session Management           |
|               |          |       |     Subscription data (data      |
|               |          |       |     needed for PDU Session       |
|               |          |       |     Establishment)               |
|               |          |       |                                  |
|               |          |       | -   Identifier translation       |
|               |          |       |     (Corresponding SUPI / MSISDN |
|               |          |       |     for input GPSI.)             |
|               |          |       |                                  |
|               |          |       | -   Intersystem continuity       |
|               |          |       |     Context                      |
|               |          |       |                                  |
|               |          |       | -   LCS privacy (data needed by  |
|               |          |       |     GMLC)                        |
|               |          |       |                                  |
|               |          |       | -   LCS mobile origination (data |
|               |          |       |     needed by AMF)               |
|               |          |       |                                  |
|               |          |       | -   User consent for UE data     |
|               |          |       |     collection                   |
|               |          |       |                                  |
|               |          |       | -   UE reachability              |
|               |          |       |                                  |
|               |          |       | -   V2X Subscription data        |
|               |          |       |                                  |
|               |          |       | -   ProSe Subscription data      |
|               |          |       |                                  |
|               |          |       | -   MBS Subscription data        |
|               |          |       |                                  |
|               |          |       | Nudm_UEAuthentication service:   |
|               |          |       | This service is used by the      |
|               |          |       | requester NF to get              |
|               |          |       | authentication data and provide  |
|               |          |       | UDM with the result of the       |
|               |          |       | authentication procedure         |
|               |          |       | success. In the case of SNPN,    |
|               |          |       | this service may be used to      |
|               |          |       | instruct the AUSF to execute     |
|               |          |       | authentication towards AAA-S.    |
|               |          |       |                                  |
|               |          |       | Nudm_EventExposure service: The  |
|               |          |       | NF consumer subscribes to        |
|               |          |       | receive an event, deletes the    |
|               |          |       | subscription of an event if      |
|               |          |       | already defined in UDM, UDM      |
|               |          |       | reports the event to the         |
|               |          |       | consumer that has previously     |
|               |          |       | subscribed or The NF consumer    |
|               |          |       | requests to modify an existing   |
|               |          |       | subscription to event            |
|               |          |       | notifications.                   |
|               |          |       |                                  |
|               |          |       | Nudm_ParameterProvision service  |
|               |          |       | : This service is for allowing   |
|               |          |       | NEF to provision of information  |
|               |          |       | which can be used for the UE in  |
|               |          |       | 5GS.                             |
|               |          |       |                                  |
|               |          |       | Nudm_NIDDAuthorisation service:  |
|               |          |       | The consumer requests            |
|               |          |       | authorisation for NIDD           |
|               |          |       | Configuration or is used for the |
|               |          |       | UDM to notify the NIDD           |
|               |          |       | Authorization Update to NF       |
|               |          |       | consumer.                        |
|               |          |       |                                  |
|               |          |       | N                                |
|               |          |       | udm_ServiceSpecificAuthorisation |
|               |          |       | service : This service is for    |
|               |          |       | authorisation of a specific      |
|               |          |       | service configuration.           |
|               |          |       |                                  |
|               |          |       | Nudm_ReportSMDeliveryStatus      |
|               |          |       | service: This service is to      |
|               |          |       | report the SM-Delivery Status to |
|               |          |       | UDM.                             |
+---------------+----------+-------+----------------------------------+
| ##            | UDR      | HT    | The Unified Data Repository      |
| ## HTTP2_nudr |          | TP2 + | (UDR) is the database where      |
|               |          | i     | various types of data are        |
|               |          | nterf | stored. Important data is the    |
|               |          | ace + | subscription data and data       |
|               |          | dnn   | defining various types of        |
|               |          |       | network or user policies. Usage  |
|               |          |       | of UDR to store and access data  |
|               |          |       | is offered as services to other  |
|               |          |       | network functions, specifically  |
|               |          |       | UDM, PCF and NEF.                |
|               |          |       |                                  |
|               |          |       | The operations defined for Nudr  |
|               |          |       | services are used when NF        |
|               |          |       | service consumers request a set  |
|               |          |       | of data from UDR, intends to     |
|               |          |       | insert a new data record into    |
|               |          |       | the UDR, e.g. a NF service       |
|               |          |       | consumer intends to insert a new |
|               |          |       | application data record into the |
|               |          |       | UDR, intends to delete user data |
|               |          |       | stored in the UDR, e.g. a NF     |
|               |          |       | service consumer intends to      |
|               |          |       | delete an application data       |
|               |          |       | record, intends to update stored |
|               |          |       | data in the UDR , NF service     |
|               |          |       | consumer performs the            |
|               |          |       | subscription to notification to  |
|               |          |       | data modified in the UDR or NF   |
|               |          |       | service consumer performs the    |
|               |          |       | un-subscription to notification  |
|               |          |       | to data modified in the UDR.     |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
+---------------+----------+-------+----------------------------------+
| #### HT       | UDR      | HT    | The Unified Data Repository      |
| TP2_nudr_data |          | TP2 + | (UDR) is the database where      |
|               |          | i     | various types of data is stored. |
|               |          | nterf | Important data is of course the  |
|               |          | ace + | subscription data and data       |
|               |          | dnn   | defining various types of        |
|               |          |       | network or user policies. Usage  |
|               |          |       | of UDR to store and access data  |
|               |          |       | is offered as services to other  |
|               |          |       | network functions, specifically  |
|               |          |       | UDM, PCF and NEF.                |
|               |          |       |                                  |
|               |          |       | The operations defined for Nudr  |
|               |          |       | services are used when NF        |
|               |          |       | service consumers request a set  |
|               |          |       | of data from UDR, intends to     |
|               |          |       | insert a new data record into    |
|               |          |       | the UDR, e.g. a NF service       |
|               |          |       | consumer intends to insert a new |
|               |          |       | application data record into the |
|               |          |       | UDR, intends to delete user data |
|               |          |       | stored in the UDR, e.g. a NF     |
|               |          |       | service consumer intends to      |
|               |          |       | delete an application data       |
|               |          |       | record, intends to update stored |
|               |          |       | data in the UDR , NF service     |
|               |          |       | consumer performs the            |
|               |          |       | subscription to notification to  |
|               |          |       | data modified in the UDR or NF   |
|               |          |       | service consumer performs the    |
|               |          |       | un-subscription to notification  |
|               |          |       | to data modified in the UDR.     |
|               |          |       | These procedures are specific to |
|               |          |       | data DNN class                   |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
+---------------+----------+-------+----------------------------------+
| #### H        | UDR      | HT    | The Unified Data Repository      |
| TTP2_nudr_ims |          | TP2 + | (UDR) is the database where      |
|               |          | i     | various types of data is stored. |
|               |          | nterf | Important data is of course the  |
|               |          | ace + | subscription data and data       |
|               |          | dnn   | defining various types of        |
|               |          |       | network or user policies. Usage  |
|               |          |       | of UDR to store and access data  |
|               |          |       | is offered as services to other  |
|               |          |       | network functions, specifically  |
|               |          |       | UDM, PCF and NEF.                |
|               |          |       |                                  |
|               |          |       | The operations defined for Nudr  |
|               |          |       | services are used when NF        |
|               |          |       | service consumers request a set  |
|               |          |       | of data from UDR, intends to     |
|               |          |       | insert a new data record into    |
|               |          |       | the UDR, e.g. a NF service       |
|               |          |       | consumer intends to insert a new |
|               |          |       | application data record into the |
|               |          |       | UDR, intends to delete user data |
|               |          |       | stored in the UDR, e.g. a NF     |
|               |          |       | service consumer intends to      |
|               |          |       | delete an application data       |
|               |          |       | record, intends to update stored |
|               |          |       | data in the UDR , NF service     |
|               |          |       | consumer performs the            |
|               |          |       | subscription to notification to  |
|               |          |       | data modified in the UDR or NF   |
|               |          |       | service consumer performs the    |
|               |          |       | un-subscription to notification  |
|               |          |       | to data modified in the UDR.     |
|               |          |       | These procedures are specific to |
|               |          |       | IMS DNN class                    |
|               |          |       |                                  |
|               |          |       | Reference : 3GPP TS 23.502       |
+---------------+----------+-------+----------------------------------+

# NAS

NAS (Non-Access Stratum) is a layer in the LTE protocol stack that
handles signaling between the User Equipment (UE) and the Evolved NodeB
(eNB) in mobile networks. It includes functions related to mobility,
security, and session management.

+-----------+----------+--------+------------------------------------+
| **        | **Inte   | *      | **Description**                    |
| Procedure | rface/NE | *Struc |                                    |
| Name**    | Name**   | ture** |                                    |
+===========+==========+========+====================================+
| #### N    | UE\-     | NAS    | A single N1 NAS signaling          |
| AS-5GS_N1 | -AMF(N1) | -5GS + | connection is used for each access |
|           |          | inter  | to which the UE is connected. The  |
|           |          | face + | single N1 termination point is     |
|           |          | dnn    | located in AMF. The single N1 NAS  |
|           |          |        | signaling connection is used for   |
|           |          |        | both Registration Management and   |
|           |          |        | Connection Management (RM/CM) and  |
|           |          |        | for SM-related messages and        |
|           |          |        | procedures for a UE.\              |
|           |          |        | The NAS protocol on N1 comprises a |
|           |          |        | NAS-MM and a NAS-SM components.\   |
|           |          |        | There are multiple cases of        |
|           |          |        | protocols between the UE and a     |
|           |          |        | core network function (excluding   |
|           |          |        | the AMF) that need to be           |
|           |          |        | transported over N1 via NAS-MM     |
|           |          |        | protocol.\                         |
|           |          |        | The 5G MM procedures can only be   |
|           |          |        | performed if a NAS signaling       |
|           |          |        | connection has been established    |
|           |          |        | between the UE and the AMF. If     |
|           |          |        | there is no active signaling       |
|           |          |        | connection, the 5G MM layer has to |
|           |          |        | initiate the establishment of a    |
|           |          |        | NAS signaling connection.  When no |
|           |          |        | active connection, the 5GMM layer  |
|           |          |        | has to establish NAS signaling by  |
|           |          |        | Registration or Service Request    |
|           |          |        | procedure                          |
|           |          |        |                                    |
|           |          |        | Initial Registration and Setup:    |
|           |          |        |                                    |
|           |          |        | -   Attach Request (UE to AMF): UE |
|           |          |        |     initiates the registration     |
|           |          |        |     process. Includes UE identity, |
|           |          |        |     capabilities, and initial      |
|           |          |        |     registration information.      |
|           |          |        |                                    |
|           |          |        | -   Registration Accept (AMF to    |
|           |          |        |     UE): AMF accepts the UE        |
|           |          |        |     registration. Provides         |
|           |          |        |     necessary information and      |
|           |          |        |     parameters.                    |
|           |          |        |                                    |
|           |          |        | -   Security Activation (UE to     |
|           |          |        |     AMF): Activation of security   |
|           |          |        |     mechanisms to protect          |
|           |          |        |     communication.                 |
|           |          |        |                                    |
|           |          |        | -   PDU Session Establishment (UE  |
|           |          |        |     to AMF): Request for           |
|           |          |        |     establishing a PDU (Packet     |
|           |          |        |     Data Unit) session. Includes   |
|           |          |        |     information like QoS           |
|           |          |        |     parameters.                    |
|           |          |        |                                    |
|           |          |        | UE Context Release:                |
|           |          |        |                                    |
|           |          |        | -   Detach Request (UE to AMF): UE |
|           |          |        |     initiates detachment from the  |
|           |          |        |     network. May include reasons   |
|           |          |        |     for detachment.                |
|           |          |        |                                    |
|           |          |        | -   UE Context Release Command     |
|           |          |        |     (AMF to UE): AMF commands the  |
|           |          |        |     UE to release its context.     |
|           |          |        |                                    |
|           |          |        | Reference : 3GPP TS 23.501 , TS    |
|           |          |        | 38.413, TS 38.401 and TS 38.410    |
+-----------+----------+--------+------------------------------------+
| ##        | UE\-     | NAS    | A single N1 NAS signaling          |
| ## NAS-5G | -AMF(N1) | -5GS + | connection is used for each access |
| S_N1_data |          | inter  | to which the UE is connected. The  |
|           |          | face + | single N1 termination point is     |
|           |          | dnn    | located in AMF. The single N1 NAS  |
|           |          |        | signaling connection is used for   |
|           |          |        | both Registration Management and   |
|           |          |        | Connection Management (RM/CM) and  |
|           |          |        | for SM-related messages and        |
|           |          |        | procedures for a UE.\              |
|           |          |        | The NAS protocol on N1 comprises a |
|           |          |        | NAS-MM and a NAS-SM components.\   |
|           |          |        | There are multiple cases of        |
|           |          |        | protocols between the UE and a     |
|           |          |        | core network function (excluding   |
|           |          |        | the AMF) that need to be           |
|           |          |        | transported over N1 via NAS-MM     |
|           |          |        | protocol.\                         |
|           |          |        | The 5G MM procedures can only be   |
|           |          |        | performed if a NAS signaling       |
|           |          |        | connection has been established    |
|           |          |        | between the UE and the AMF. If     |
|           |          |        | there is no active signaling       |
|           |          |        | connection, the 5G MM layer has to |
|           |          |        | initiate the establishment of a    |
|           |          |        | NAS signaling connection.  When no |
|           |          |        | active connection, the 5GMM layer  |
|           |          |        | has to establish NAS signaling by  |
|           |          |        | Registration or Service Request    |
|           |          |        | procedure                          |
|           |          |        |                                    |
|           |          |        | Initial Registration and Setup:    |
|           |          |        |                                    |
|           |          |        | -   Attach Request (UE to AMF): UE |
|           |          |        |     initiates the registration     |
|           |          |        |     process. Includes UE identity, |
|           |          |        |     capabilities, and initial      |
|           |          |        |     registration information.      |
|           |          |        |                                    |
|           |          |        | -   Registration Accept (AMF to    |
|           |          |        |     UE): AMF accepts the UE        |
|           |          |        |     registration. Provides         |
|           |          |        |     necessary information and      |
|           |          |        |     parameters.                    |
|           |          |        |                                    |
|           |          |        | -   Security Activation (UE to     |
|           |          |        |     AMF): Activation of security   |
|           |          |        |     mechanisms to protect          |
|           |          |        |     communication.                 |
|           |          |        |                                    |
|           |          |        | -   PDU Session Establishment (UE  |
|           |          |        |     to AMF): Request for           |
|           |          |        |     establishing a PDU (Packet     |
|           |          |        |     Data Unit) session. Includes   |
|           |          |        |     information like QoS           |
|           |          |        |     parameters.                    |
|           |          |        |                                    |
|           |          |        | UE Context Release:                |
|           |          |        |                                    |
|           |          |        | -   Detach Request (UE to AMF): UE |
|           |          |        |     initiates detachment from the  |
|           |          |        |     network. May include reasons   |
|           |          |        |     for detachment.                |
|           |          |        |                                    |
|           |          |        | -   UE Context Release Command     |
|           |          |        |     (AMF to UE): AMF commands the  |
|           |          |        |     UE to release its context.     |
|           |          |        |                                    |
|           |          |        | Reference : 3GPP TS 23.501 , TS    |
|           |          |        | 38.413, TS 38.401 and TS 38.410    |
+-----------+----------+--------+------------------------------------+
| #         | UE\-     | NAS    | A single N1 NAS signaling          |
| ### NAS-5 | -AMF(N1) | -5GS + | connection is used for each access |
| GS_N1_ims |          | inter  | to which the UE is connected. The  |
|           |          | face + | single N1 termination point is     |
|           |          | dnn    | located in AMF. The single N1 NAS  |
|           |          |        | signaling connection is used for   |
|           |          |        | both Registration Management and   |
|           |          |        | Connection Management (RM/CM) and  |
|           |          |        | for SM-related messages and        |
|           |          |        | procedures for a UE.\              |
|           |          |        | The NAS protocol on N1 comprises a |
|           |          |        | NAS-MM and a NAS-SM components.\   |
|           |          |        | There are multiple cases of        |
|           |          |        | protocols between the UE and a     |
|           |          |        | core network function (excluding   |
|           |          |        | the AMF) that need to be           |
|           |          |        | transported over N1 via NAS-MM     |
|           |          |        | protocol.\                         |
|           |          |        | The 5G MM procedures can only be   |
|           |          |        | performed if a NAS signaling       |
|           |          |        | connection has been established    |
|           |          |        | between the UE and the AMF. If     |
|           |          |        | there is no active signaling       |
|           |          |        | connection, the 5G MM layer has to |
|           |          |        | initiate the establishment of a    |
|           |          |        | NAS signaling connection.  When no |
|           |          |        | active connection, the 5GMM layer  |
|           |          |        | has to establish NAS signaling by  |
|           |          |        | Registration or Service Request    |
|           |          |        | procedure                          |
|           |          |        |                                    |
|           |          |        | Initial Registration and Setup:    |
|           |          |        |                                    |
|           |          |        | -   Attach Request (UE to AMF): UE |
|           |          |        |     initiates the registration     |
|           |          |        |     process. Includes UE identity, |
|           |          |        |     capabilities, and initial      |
|           |          |        |     registration information.      |
|           |          |        |                                    |
|           |          |        | -   Registration Accept (AMF to    |
|           |          |        |     UE): AMF accepts the UE        |
|           |          |        |     registration. Provides         |
|           |          |        |     necessary information and      |
|           |          |        |     parameters.                    |
|           |          |        |                                    |
|           |          |        | -   Security Activation (UE to     |
|           |          |        |     AMF): Activation of security   |
|           |          |        |     mechanisms to protect          |
|           |          |        |     communication.                 |
|           |          |        |                                    |
|           |          |        | -   PDU Session Establishment (UE  |
|           |          |        |     to AMF): Request for           |
|           |          |        |     establishing a PDU (Packet     |
|           |          |        |     Data Unit) session. Includes   |
|           |          |        |     information like QoS           |
|           |          |        |     parameters.                    |
|           |          |        |                                    |
|           |          |        | UE Context Release:                |
|           |          |        |                                    |
|           |          |        | -   Detach Request (UE to AMF): UE |
|           |          |        |     initiates detachment from the  |
|           |          |        |     network. May include reasons   |
|           |          |        |     for detachment.                |
|           |          |        |                                    |
|           |          |        | -   UE Context Release Command     |
|           |          |        |     (AMF to UE): AMF commands the  |
|           |          |        |     UE to release its context.     |
|           |          |        |                                    |
|           |          |        | Reference : 3GPP TS 23.501 , TS    |
|           |          |        | 38.413, TS 38.401 and TS 38.410    |
+-----------+----------+--------+------------------------------------+
| #         | UE\-     | NAS    | A single N1 NAS signaling          |
| ### NAS-5 | -AMF(N1) | -5GS + | connection is used for each access |
| GS_N1_sos |          | inter  | to which the UE is connected. The  |
|           |          | face + | single N1 termination point is     |
|           |          | dnn    | located in AMF. The single N1 NAS  |
|           |          |        | signaling connection is used for   |
|           |          |        | both Registration Management and   |
|           |          |        | Connection Management (RM/CM) and  |
|           |          |        | for SM-related messages and        |
|           |          |        | procedures for a UE.\              |
|           |          |        | The NAS protocol on N1 comprises a |
|           |          |        | NAS-MM and a NAS-SM components.\   |
|           |          |        | There are multiple cases of        |
|           |          |        | protocols between the UE and a     |
|           |          |        | core network function (excluding   |
|           |          |        | the AMF) that need to be           |
|           |          |        | transported over N1 via NAS-MM     |
|           |          |        | protocol.\                         |
|           |          |        | The 5G MM procedures can only be   |
|           |          |        | performed if a NAS signaling       |
|           |          |        | connection has been established    |
|           |          |        | between the UE and the AMF. If     |
|           |          |        | there is no active signaling       |
|           |          |        | connection, the 5G MM layer has to |
|           |          |        | initiate the establishment of a    |
|           |          |        | NAS signaling connection.  When no |
|           |          |        | active connection, the 5GMM layer  |
|           |          |        | has to establish NAS signaling by  |
|           |          |        | Registration or Service Request    |
|           |          |        | procedure                          |
|           |          |        |                                    |
|           |          |        | Initial Registration and Setup:    |
|           |          |        |                                    |
|           |          |        | -   Attach Request (UE to AMF): UE |
|           |          |        |     initiates the registration     |
|           |          |        |     process. Includes UE identity, |
|           |          |        |     capabilities, and initial      |
|           |          |        |     registration information.      |
|           |          |        |                                    |
|           |          |        | -   Registration Accept (AMF to    |
|           |          |        |     UE): AMF accepts the UE        |
|           |          |        |     registration. Provides         |
|           |          |        |     necessary information and      |
|           |          |        |     parameters.                    |
|           |          |        |                                    |
|           |          |        | -   Security Activation (UE to     |
|           |          |        |     AMF): Activation of security   |
|           |          |        |     mechanisms to protect          |
|           |          |        |     communication.                 |
|           |          |        |                                    |
|           |          |        | -   PDU Session Establishment (UE  |
|           |          |        |     to AMF): Request for           |
|           |          |        |     establishing a PDU (Packet     |
|           |          |        |     Data Unit) session. Includes   |
|           |          |        |     information like QoS           |
|           |          |        |     parameters.                    |
|           |          |        |                                    |
|           |          |        | UE Context Release:                |
|           |          |        |                                    |
|           |          |        | -   Detach Request (UE to AMF): UE |
|           |          |        |     initiates detachment from the  |
|           |          |        |     network. May include reasons   |
|           |          |        |     for detachment.                |
|           |          |        |                                    |
|           |          |        | -   UE Context Release Command     |
|           |          |        |     (AMF to UE): AMF commands the  |
|           |          |        |     UE to release its context.     |
|           |          |        |                                    |
|           |          |        | Reference : 3GPP TS 23.501 , TS    |
|           |          |        | 38.413, TS 38.401 and TS 38.410    |
+-----------+----------+--------+------------------------------------+

# NGAP

NGAP (Next Generation Application Part) is a protocol used in 5G
networks for communication between various control plane elements. It
plays a role similar to S1AP (used in LTE) and facilitates signaling
between different nodes in the 5G architecture.

+-------------+----------+--------+-----------------------------------+
| **Procedure | **Inte   | *      | **Description**                   |
| Name**      | rface/NE | *Struc |                                   |
|             | Name**   | ture** |                                   |
+=============+==========+========+===================================+
| #           | RAN\-    | NGAP + | The following procedures are      |
| ### NGAP_N2 | -AMF(N2) | inter  | defined over N2:                  |
|             |          | face + |                                   |
|             |          | dnn    | -   Procedures related with N2    |
|             |          |        |     Interface Management and that |
|             |          |        |     are not related to an         |
|             |          |        |     individual UE, such as for    |
|             |          |        |     Configuration or Reset of the |
|             |          |        |     N2 interface. These           |
|             |          |        |     procedures are intended to be |
|             |          |        |     applicable to any access but  |
|             |          |        |     may correspond to messages    |
|             |          |        |     that carry some information   |
|             |          |        |     only on some access (such as  |
|             |          |        |     information on the default    |
|             |          |        |     Paging DRX used only for 3GPP |
|             |          |        |     access).                      |
|             |          |        |                                   |
|             |          |        | -   Procedures related with an    |
|             |          |        |     individual UE:                |
|             |          |        |                                   |
|             |          |        | -   Procedures related with NAS   |
|             |          |        |     Transport. These procedures   |
|             |          |        |     are intended to be applicable |
|             |          |        |     to any access but may         |
|             |          |        |     correspond to messages that   |
|             |          |        |     for UL NAS transport carry    |
|             |          |        |     some access dependent         |
|             |          |        |     information such as User      |
|             |          |        |     Location Information (e.g.    |
|             |          |        |     Cell-Id over 3GPP access or   |
|             |          |        |     other kind of User Location   |
|             |          |        |     Information for Non-3GPP      |
|             |          |        |     access).                      |
|             |          |        |                                   |
|             |          |        | -   Procedures related with UE    |
|             |          |        |     context management. These     |
|             |          |        |     procedures are intended to be |
|             |          |        |     applicable to any access. The |
|             |          |        |     corresponding messages may    |
|             |          |        |     carry:                        |
|             |          |        |                                   |
|             |          |        |                 \> some           |
|             |          |        | information only on some access   |
|             |          |        | (such as Mobility Restriction     |
|             |          |        | List used only for 3GPP access).\ |
|             |          |        |                 \> some           |
|             |          |        | information (related e.g. with N3 |
|             |          |        | addressing and with QoS           |
|             |          |        | requirements) that is to be       |
|             |          |        | transparently forwarded by AMF    |
|             |          |        | between the 5G-AN and the SMF.    |
|             |          |        |                                   |
|             |          |        | -   Procedures related with       |
|             |          |        |     resources for PDU Sessions.   |
|             |          |        |     These procedures are intended |
|             |          |        |     to be applicable to any       |
|             |          |        |     access. They may correspond   |
|             |          |        |     to messages that carry        |
|             |          |        |     information (related e.g.     |
|             |          |        |     with N3 addressing and with   |
|             |          |        |     QoS requirements) that is to  |
|             |          |        |     be transparently forwarded by |
|             |          |        |     AMF between the 5G-AN and the |
|             |          |        |     SMF.                          |
|             |          |        |                                   |
|             |          |        | -   Procedures related with       |
|             |          |        |     Hand-Over management. These   |
|             |          |        |     procedures are intended for   |
|             |          |        |     3GPP access only.             |
|             |          |        |                                   |
|             |          |        | N2 Interface (N2AP):              |
|             |          |        |                                   |
|             |          |        | Path Switching and Data           |
|             |          |        | Forwarding:                       |
|             |          |        |                                   |
|             |          |        | -   Handover Request (Source gNB  |
|             |          |        |     to Target gNB): Initiated     |
|             |          |        |     during handover. Requests the |
|             |          |        |     target gNB to prepare for the |
|             |          |        |     handover.                     |
|             |          |        |                                   |
|             |          |        | -   Handover Command (Target gNB  |
|             |          |        |     to Source gNB):Instructs the  |
|             |          |        |     source gNB to release         |
|             |          |        |     resources and forward data to |
|             |          |        |     the target gNB.               |
|             |          |        |                                   |
|             |          |        | -   Handover Preparation Failure  |
|             |          |        |     (Target gNB to Source gNB):   |
|             |          |        |     Indicates failure in handover |
|             |          |        |     preparation. May result in    |
|             |          |        |     fallback or reattempt.        |
|             |          |        |                                   |
|             |          |        | User Plane Function Setup and     |
|             |          |        | Release:                          |
|             |          |        |                                   |
|             |          |        | -   PDU Session Establishment     |
|             |          |        |     Request (AMF to SMF):         |
|             |          |        |     Initiates the establishment   |
|             |          |        |     of a PDU session.             |
|             |          |        |                                   |
|             |          |        | -   PDU Session Establishment     |
|             |          |        |     Accept (SMF to AMF): Confirms |
|             |          |        |     the establishment of the PDU  |
|             |          |        |     session.                      |
|             |          |        |                                   |
|             |          |        | -   PDU Session Modification      |
|             |          |        |     Request (AMF to SMF):         |
|             |          |        |     Requests modification of an   |
|             |          |        |     existing PDU session.         |
|             |          |        |                                   |
|             |          |        | -   PDU Session Release Request   |
|             |          |        |     (AMF to SMF): Initiates the   |
|             |          |        |     release of a PDU session.     |
|             |          |        |                                   |
|             |          |        | -   PDU Session Release Accept    |
|             |          |        |     (SMF to AMF): Acknowledges    |
|             |          |        |     the release of the PDU        |
|             |          |        |     session.                      |
|             |          |        |                                   |
|             |          |        | UE Radio Capability Information   |
|             |          |        | Transfer:                         |
|             |          |        |                                   |
|             |          |        | -   UE Capability Info Transfer   |
|             |          |        |     (Source gNB to Target gNB):   |
|             |          |        |     Transfers UE radio            |
|             |          |        |     capabilities during handover  |
|             |          |        |     preparation.                  |
|             |          |        |                                   |
|             |          |        | -   UE Capability Info Transfer   |
|             |          |        |     (N2IWF to N2IWF): Transfers   |
|             |          |        |     UE radio capabilities between |
|             |          |        |     N2 interfaces.                |
|             |          |        |                                   |
|             |          |        | Reference : 3GPP TS 23.501 , TS   |
|             |          |        | 38.413, TS 38.401 and TS 38.410   |
+-------------+----------+--------+-----------------------------------+
| #### N      | RAN\-    | NGAP + | The following procedures are      |
| GAP_N2_data | -AMF(N2) | inter  | defined over N2:                  |
|             |          | face + |                                   |
|             |          | dnn    | -   Procedures related with N2    |
|             |          |        |     Interface Management and that |
|             |          |        |     are not related to an         |
|             |          |        |     individual UE, such as for    |
|             |          |        |     Configuration or Reset of the |
|             |          |        |     N2 interface. These           |
|             |          |        |     procedures are intended to be |
|             |          |        |     applicable to any access but  |
|             |          |        |     may correspond to messages    |
|             |          |        |     that carry some information   |
|             |          |        |     only on some access (such as  |
|             |          |        |     information on the default    |
|             |          |        |     Paging DRX used only for 3GPP |
|             |          |        |     access).                      |
|             |          |        |                                   |
|             |          |        | -   Procedures related with an    |
|             |          |        |     individual UE:                |
|             |          |        |                                   |
|             |          |        | -   Procedures related with NAS   |
|             |          |        |     Transport. These procedures   |
|             |          |        |     are intended to be applicable |
|             |          |        |     to any access but may         |
|             |          |        |     correspond to messages that   |
|             |          |        |     for UL NAS transport carry    |
|             |          |        |     some access dependent         |
|             |          |        |     information such as User      |
|             |          |        |     Location Information (e.g.    |
|             |          |        |     Cell-Id over 3GPP access or   |
|             |          |        |     other kind of User Location   |
|             |          |        |     Information for Non-3GPP      |
|             |          |        |     access).                      |
|             |          |        |                                   |
|             |          |        | -   Procedures related with UE    |
|             |          |        |     context management. These     |
|             |          |        |     procedures are intended to be |
|             |          |        |     applicable to any access. The |
|             |          |        |     corresponding messages may    |
|             |          |        |     carry:                        |
|             |          |        |                                   |
|             |          |        |                 \> some           |
|             |          |        | information only on some access   |
|             |          |        | (such as Mobility Restriction     |
|             |          |        | List used only for 3GPP access).\ |
|             |          |        |                 \> some           |
|             |          |        | information (related e.g. with N3 |
|             |          |        | addressing and with QoS           |
|             |          |        | requirements) that is to be       |
|             |          |        | transparently forwarded by AMF    |
|             |          |        | between the 5G-AN and the SMF.    |
|             |          |        |                                   |
|             |          |        | -   Procedures related with       |
|             |          |        |     resources for PDU Sessions.   |
|             |          |        |     These procedures are intended |
|             |          |        |     to be applicable to any       |
|             |          |        |     access. They may correspond   |
|             |          |        |     to messages that carry        |
|             |          |        |     information (related e.g.     |
|             |          |        |     with N3 addressing and with   |
|             |          |        |     QoS requirements) that is to  |
|             |          |        |     be transparently forwarded by |
|             |          |        |     AMF between the 5G-AN and the |
|             |          |        |     SMF.                          |
|             |          |        |                                   |
|             |          |        | -   Procedures related with       |
|             |          |        |     Hand-Over management. These   |
|             |          |        |     procedures are intended for   |
|             |          |        |     3GPP access only.             |
|             |          |        |                                   |
|             |          |        | N2 Interface (N2AP):              |
|             |          |        |                                   |
|             |          |        | Path Switching and Data           |
|             |          |        | Forwarding:                       |
|             |          |        |                                   |
|             |          |        | -   Handover Request (Source gNB  |
|             |          |        |     to Target gNB): Initiated     |
|             |          |        |     during handover. Requests the |
|             |          |        |     target gNB to prepare for the |
|             |          |        |     handover.                     |
|             |          |        |                                   |
|             |          |        | -   Handover Command (Target gNB  |
|             |          |        |     to Source gNB):Instructs the  |
|             |          |        |     source gNB to release         |
|             |          |        |     resources and forward data to |
|             |          |        |     the target gNB.               |
|             |          |        |                                   |
|             |          |        | -   Handover Preparation Failure  |
|             |          |        |     (Target gNB to Source gNB):   |
|             |          |        |     Indicates failure in handover |
|             |          |        |     preparation. May result in    |
|             |          |        |     fallback or reattempt.        |
|             |          |        |                                   |
|             |          |        | User Plane Function Setup and     |
|             |          |        | Release:                          |
|             |          |        |                                   |
|             |          |        | -   PDU Session Establishment     |
|             |          |        |     Request (AMF to SMF):         |
|             |          |        |     Initiates the establishment   |
|             |          |        |     of a PDU session.             |
|             |          |        |                                   |
|             |          |        | -   PDU Session Establishment     |
|             |          |        |     Accept (SMF to AMF): Confirms |
|             |          |        |     the establishment of the PDU  |
|             |          |        |     session.                      |
|             |          |        |                                   |
|             |          |        | -   PDU Session Modification      |
|             |          |        |     Request (AMF to SMF):         |
|             |          |        |     Requests modification of an   |
|             |          |        |     existing PDU session.         |
|             |          |        |                                   |
|             |          |        | -   PDU Session Release Request   |
|             |          |        |     (AMF to SMF): Initiates the   |
|             |          |        |     release of a PDU session.     |
|             |          |        |                                   |
|             |          |        | -   PDU Session Release Accept    |
|             |          |        |     (SMF to AMF): Acknowledges    |
|             |          |        |     the release of the PDU        |
|             |          |        |     session.                      |
|             |          |        |                                   |
|             |          |        | UE Radio Capability Information   |
|             |          |        | Transfer:                         |
|             |          |        |                                   |
|             |          |        | -   UE Capability Info Transfer   |
|             |          |        |     (Source gNB to Target gNB):   |
|             |          |        |     Transfers UE radio            |
|             |          |        |     capabilities during handover  |
|             |          |        |     preparation.                  |
|             |          |        |                                   |
|             |          |        | -   UE Capability Info Transfer   |
|             |          |        |     (N2IWF to N2IWF): Transfers   |
|             |          |        |     UE radio capabilities between |
|             |          |        |     N2 interfaces.                |
+-------------+----------+--------+-----------------------------------+
| ####        | RAN\-    | NGAP + | The following procedures are      |
| NGAP_N2_ims | -AMF(N2) | inter  | defined over N2:                  |
|             |          | face + |                                   |
|             |          | dnn    | -   Procedures related with N2    |
|             |          |        |     Interface Management and that |
|             |          |        |     are not related to an         |
|             |          |        |     individual UE, such as for    |
|             |          |        |     Configuration or Reset of the |
|             |          |        |     N2 interface. These           |
|             |          |        |     procedures are intended to be |
|             |          |        |     applicable to any access but  |
|             |          |        |     may correspond to messages    |
|             |          |        |     that carry some information   |
|             |          |        |     only on some access (such as  |
|             |          |        |     information on the default    |
|             |          |        |     Paging DRX used only for 3GPP |
|             |          |        |     access).                      |
|             |          |        |                                   |
|             |          |        | -   Procedures related with an    |
|             |          |        |     individual UE:                |
|             |          |        |                                   |
|             |          |        | -   Procedures related with NAS   |
|             |          |        |     Transport. These procedures   |
|             |          |        |     are intended to be applicable |
|             |          |        |     to any access but may         |
|             |          |        |     correspond to messages that   |
|             |          |        |     for UL NAS transport carry    |
|             |          |        |     some access dependent         |
|             |          |        |     information such as User      |
|             |          |        |     Location Information (e.g.    |
|             |          |        |     Cell-Id over 3GPP access or   |
|             |          |        |     other kind of User Location   |
|             |          |        |     Information for Non-3GPP      |
|             |          |        |     access).                      |
|             |          |        |                                   |
|             |          |        | -   Procedures related with UE    |
|             |          |        |     context management. These     |
|             |          |        |     procedures are intended to be |
|             |          |        |     applicable to any access. The |
|             |          |        |     corresponding messages may    |
|             |          |        |     carry:                        |
|             |          |        |                                   |
|             |          |        |                 \> some           |
|             |          |        | information only on some access   |
|             |          |        | (such as Mobility Restriction     |
|             |          |        | List used only for 3GPP access).\ |
|             |          |        |                 \> some           |
|             |          |        | information (related e.g. with N3 |
|             |          |        | addressing and with QoS           |
|             |          |        | requirements) that is to be       |
|             |          |        | transparently forwarded by AMF    |
|             |          |        | between the 5G-AN and the SMF.    |
|             |          |        |                                   |
|             |          |        | -   Procedures related with       |
|             |          |        |     resources for PDU Sessions.   |
|             |          |        |     These procedures are intended |
|             |          |        |     to be applicable to any       |
|             |          |        |     access. They may correspond   |
|             |          |        |     to messages that carry        |
|             |          |        |     information (related e.g.     |
|             |          |        |     with N3 addressing and with   |
|             |          |        |     QoS requirements) that is to  |
|             |          |        |     be transparently forwarded by |
|             |          |        |     AMF between the 5G-AN and the |
|             |          |        |     SMF.                          |
|             |          |        |                                   |
|             |          |        | -   Procedures related with       |
|             |          |        |     Hand-Over management. These   |
|             |          |        |     procedures are intended for   |
|             |          |        |     3GPP access only.             |
|             |          |        |                                   |
|             |          |        | N2 Interface (N2AP):              |
|             |          |        |                                   |
|             |          |        | Path Switching and Data           |
|             |          |        | Forwarding:                       |
|             |          |        |                                   |
|             |          |        | -   Handover Request (Source gNB  |
|             |          |        |     to Target gNB): Initiated     |
|             |          |        |     during handover. Requests the |
|             |          |        |     target gNB to prepare for the |
|             |          |        |     handover.                     |
|             |          |        |                                   |
|             |          |        | -   Handover Command (Target gNB  |
|             |          |        |     to Source gNB):Instructs the  |
|             |          |        |     source gNB to release         |
|             |          |        |     resources and forward data to |
|             |          |        |     the target gNB.               |
|             |          |        |                                   |
|             |          |        | -   Handover Preparation Failure  |
|             |          |        |     (Target gNB to Source gNB):   |
|             |          |        |     Indicates failure in handover |
|             |          |        |     preparation. May result in    |
|             |          |        |     fallback or reattempt.        |
|             |          |        |                                   |
|             |          |        | User Plane Function Setup and     |
|             |          |        | Release:                          |
|             |          |        |                                   |
|             |          |        | -   PDU Session Establishment     |
|             |          |        |     Request (AMF to SMF):         |
|             |          |        |     Initiates the establishment   |
|             |          |        |     of a PDU session.             |
|             |          |        |                                   |
|             |          |        | -   PDU Session Establishment     |
|             |          |        |     Accept (SMF to AMF): Confirms |
|             |          |        |     the establishment of the PDU  |
|             |          |        |     session.                      |
|             |          |        |                                   |
|             |          |        | -   PDU Session Modification      |
|             |          |        |     Request (AMF to SMF):         |
|             |          |        |     Requests modification of an   |
|             |          |        |     existing PDU session.         |
|             |          |        |                                   |
|             |          |        | -   PDU Session Release Request   |
|             |          |        |     (AMF to SMF): Initiates the   |
|             |          |        |     release of a PDU session.     |
|             |          |        |                                   |
|             |          |        | -   PDU Session Release Accept    |
|             |          |        |     (SMF to AMF): Acknowledges    |
|             |          |        |     the release of the PDU        |
|             |          |        |     session.                      |
|             |          |        |                                   |
|             |          |        | UE Radio Capability Information   |
|             |          |        | Transfer:                         |
|             |          |        |                                   |
|             |          |        | -   UE Capability Info Transfer   |
|             |          |        |     (Source gNB to Target gNB):   |
|             |          |        |     Transfers UE radio            |
|             |          |        |     capabilities during handover  |
|             |          |        |     preparation.                  |
|             |          |        |                                   |
|             |          |        | -   UE Capability Info Transfer   |
|             |          |        |     (N2IWF to N2IWF): Transfers   |
|             |          |        |     UE radio capabilities between |
|             |          |        |     N2 interfaces.                |
+-------------+----------+--------+-----------------------------------+
| ####        | RAN\-    | NGAP + | The following procedures are      |
| NGAP_N2_sos | -AMF(N2) | inter  | defined over N2:                  |
|             |          | face + |                                   |
|             |          | dnn    | -   Procedures related with N2    |
|             |          |        |     Interface Management and that |
|             |          |        |     are not related to an         |
|             |          |        |     individual UE, such as for    |
|             |          |        |     Configuration or Reset of the |
|             |          |        |     N2 interface. These           |
|             |          |        |     procedures are intended to be |
|             |          |        |     applicable to any access but  |
|             |          |        |     may correspond to messages    |
|             |          |        |     that carry some information   |
|             |          |        |     only on some access (such as  |
|             |          |        |     information on the default    |
|             |          |        |     Paging DRX used only for 3GPP |
|             |          |        |     access).                      |
|             |          |        |                                   |
|             |          |        | -   Procedures related with an    |
|             |          |        |     individual UE:                |
|             |          |        |                                   |
|             |          |        | -   Procedures related with NAS   |
|             |          |        |     Transport. These procedures   |
|             |          |        |     are intended to be applicable |
|             |          |        |     to any access but may         |
|             |          |        |     correspond to messages that   |
|             |          |        |     for UL NAS transport carry    |
|             |          |        |     some access dependent         |
|             |          |        |     information such as User      |
|             |          |        |     Location Information (e.g.    |
|             |          |        |     Cell-Id over 3GPP access or   |
|             |          |        |     other kind of User Location   |
|             |          |        |     Information for Non-3GPP      |
|             |          |        |     access).                      |
|             |          |        |                                   |
|             |          |        | -   Procedures related with UE    |
|             |          |        |     context management. These     |
|             |          |        |     procedures are intended to be |
|             |          |        |     applicable to any access. The |
|             |          |        |     corresponding messages may    |
|             |          |        |     carry:                        |
|             |          |        |                                   |
|             |          |        |                 \> some           |
|             |          |        | information only on some access   |
|             |          |        | (such as Mobility Restriction     |
|             |          |        | List used only for 3GPP access).\ |
|             |          |        |                 \> some           |
|             |          |        | information (related e.g. with N3 |
|             |          |        | addressing and with QoS           |
|             |          |        | requirements) that is to be       |
|             |          |        | transparently forwarded by AMF    |
|             |          |        | between the 5G-AN and the SMF.    |
|             |          |        |                                   |
|             |          |        | -   Procedures related with       |
|             |          |        |     resources for PDU Sessions.   |
|             |          |        |     These procedures are intended |
|             |          |        |     to be applicable to any       |
|             |          |        |     access. They may correspond   |
|             |          |        |     to messages that carry        |
|             |          |        |     information (related e.g.     |
|             |          |        |     with N3 addressing and with   |
|             |          |        |     QoS requirements) that is to  |
|             |          |        |     be transparently forwarded by |
|             |          |        |     AMF between the 5G-AN and the |
|             |          |        |     SMF.                          |
|             |          |        |                                   |
|             |          |        | -   Procedures related with       |
|             |          |        |     Hand-Over management. These   |
|             |          |        |     procedures are intended for   |
|             |          |        |     3GPP access only.             |
|             |          |        |                                   |
|             |          |        | N2 Interface (N2AP):              |
|             |          |        |                                   |
|             |          |        | Path Switching and Data           |
|             |          |        | Forwarding:                       |
|             |          |        |                                   |
|             |          |        | -   Handover Request (Source gNB  |
|             |          |        |     to Target gNB): Initiated     |
|             |          |        |     during handover. Requests the |
|             |          |        |     target gNB to prepare for the |
|             |          |        |     handover.                     |
|             |          |        |                                   |
|             |          |        | -   Handover Command (Target gNB  |
|             |          |        |     to Source gNB):Instructs the  |
|             |          |        |     source gNB to release         |
|             |          |        |     resources and forward data to |
|             |          |        |     the target gNB.               |
|             |          |        |                                   |
|             |          |        | -   Handover Preparation Failure  |
|             |          |        |     (Target gNB to Source gNB):   |
|             |          |        |     Indicates failure in handover |
|             |          |        |     preparation. May result in    |
|             |          |        |     fallback or reattempt.        |
|             |          |        |                                   |
|             |          |        | User Plane Function Setup and     |
|             |          |        | Release:                          |
|             |          |        |                                   |
|             |          |        | -   PDU Session Establishment     |
|             |          |        |     Request (AMF to SMF):         |
|             |          |        |     Initiates the establishment   |
|             |          |        |     of a PDU session.             |
|             |          |        |                                   |
|             |          |        | -   PDU Session Establishment     |
|             |          |        |     Accept (SMF to AMF): Confirms |
|             |          |        |     the establishment of the PDU  |
|             |          |        |     session.                      |
|             |          |        |                                   |
|             |          |        | -   PDU Session Modification      |
|             |          |        |     Request (AMF to SMF):         |
|             |          |        |     Requests modification of an   |
|             |          |        |     existing PDU session.         |
|             |          |        |                                   |
|             |          |        | -   PDU Session Release Request   |
|             |          |        |     (AMF to SMF): Initiates the   |
|             |          |        |     release of a PDU session.     |
|             |          |        |                                   |
|             |          |        | -   PDU Session Release Accept    |
|             |          |        |     (SMF to AMF): Acknowledges    |
|             |          |        |     the release of the PDU        |
|             |          |        |     session.                      |
|             |          |        |                                   |
|             |          |        | UE Radio Capability Information   |
|             |          |        | Transfer:                         |
|             |          |        |                                   |
|             |          |        | -   UE Capability Info Transfer   |
|             |          |        |     (Source gNB to Target gNB):   |
|             |          |        |     Transfers UE radio            |
|             |          |        |     capabilities during handover  |
|             |          |        |     preparation.                  |
|             |          |        |                                   |
|             |          |        | -   UE Capability Info Transfer   |
|             |          |        |     (N2IWF to N2IWF): Transfers   |
|             |          |        |     UE radio capabilities between |
|             |          |        |     N2 interfaces.                |
+-------------+----------+--------+-----------------------------------+

# PFCP

PFCP (Packet Forwarding Control Protocol) is a protocol used in the
control plane of the User Plane Function (UPF) in 5G networks. It is
responsible for the control of user plane traffic and policies in the 5G
architecture.

+------------+----------+--------+-----------------------------------+
| *          | **Inte   | *      | **Description**                   |
| *Procedure | rface/NE | *Struc |                                   |
| Name**     | Name**   | ture** |                                   |
+============+==========+========+===================================+
| ##         | SMF\-    | PFCP + | In 5G, CUPS was applied from the  |
| ## PFCP_N4 | -UPF(N4) | inter  | outset, that is, in Release 15.   |
|            |          | face + | The equivalent control plane and  |
|            |          | dnn    | user plane nodes are Session      |
|            |          |        | Management Function (SMF) and     |
|            |          |        | User Plane Function (UPF). These  |
|            |          |        | are connected via the N4          |
|            |          |        | interface. PFCP is used on this   |
|            |          |        | interface.                        |
|            |          |        |                                   |
|            |          |        | PFCP Node Related Procedures      |
|            |          |        |                                   |
|            |          |        | -   Heartbeat Procedure           |
|            |          |        |                                   |
|            |          |        | -   Load Control Procedure        |
|            |          |        |                                   |
|            |          |        | -   Overload Control Procedure    |
|            |          |        |                                   |
|            |          |        | -   PFCP PFD Management Procedure |
|            |          |        |                                   |
|            |          |        | -   PFCP Association Setup        |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Association Update       |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Association Release      |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Node Report Procedure    |
|            |          |        |                                   |
|            |          |        | PFCP Session Related Procedures   |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Establishment    |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Modification     |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Deletion         |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Report Procedure |
|            |          |        |                                   |
|            |          |        | Reference : 3GPP TS 29.244        |
+------------+----------+--------+-----------------------------------+
| #### PF    | SMF\-    | PFCP + | In 5G, CUPS was applied from the  |
| CP_N4_data | -UPF(N4) | inter  | outset, that is, in Release 15.   |
|            |          | face + | The equivalent control plane and  |
|            |          | dnn    | user plane nodes are Session      |
|            |          |        | Management Function (SMF) and     |
|            |          |        | User Plane Function (UPF). These  |
|            |          |        | are connected via the N4          |
|            |          |        | interface. PFCP is used on this   |
|            |          |        | interface.                        |
|            |          |        |                                   |
|            |          |        | PFCP Node Related Procedures      |
|            |          |        |                                   |
|            |          |        | -   Heartbeat Procedure           |
|            |          |        |                                   |
|            |          |        | -   Load Control Procedure        |
|            |          |        |                                   |
|            |          |        | -   Overload Control Procedure    |
|            |          |        |                                   |
|            |          |        | -   PFCP PFD Management Procedure |
|            |          |        |                                   |
|            |          |        | -   PFCP Association Setup        |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Association Update       |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Association Release      |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Node Report Procedure    |
|            |          |        |                                   |
|            |          |        | PFCP Session Related Procedures   |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Establishment    |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Modification     |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Deletion         |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Report Procedure |
|            |          |        |                                   |
|            |          |        | Reference : 3GPP TS 29.244        |
+------------+----------+--------+-----------------------------------+
| #### P     | SMF\-    | PFCP + | In 5G, CUPS was applied from the  |
| FCP_N4_ims | -UPF(N4) | inter  | outset, that is, in Release 15.   |
|            |          | face + | The equivalent control plane and  |
|            |          | dnn    | user plane nodes are Session      |
|            |          |        | Management Function (SMF) and     |
|            |          |        | User Plane Function (UPF). These  |
|            |          |        | are connected via the N4          |
|            |          |        | interface. PFCP is used on this   |
|            |          |        | interface.                        |
|            |          |        |                                   |
|            |          |        | PFCP Node Related Procedures      |
|            |          |        |                                   |
|            |          |        | -   Heartbeat Procedure           |
|            |          |        |                                   |
|            |          |        | -   Load Control Procedure        |
|            |          |        |                                   |
|            |          |        | -   Overload Control Procedure    |
|            |          |        |                                   |
|            |          |        | -   PFCP PFD Management Procedure |
|            |          |        |                                   |
|            |          |        | -   PFCP Association Setup        |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Association Update       |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Association Release      |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Node Report Procedure    |
|            |          |        |                                   |
|            |          |        | PFCP Session Related Procedures   |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Establishment    |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Modification     |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Deletion         |
|            |          |        |     Procedure                     |
|            |          |        |                                   |
|            |          |        | -   PFCP Session Report Procedure |
|            |          |        |                                   |
|            |          |        | Reference : 3GPP TS 29.244        |
+------------+----------+--------+-----------------------------------+

# S1AP

S1AP (S1 Application Part) is a protocol used in LTE networks for
communication between the eNB (Evolved NodeB) and the Mobility
Management Entity (MME) during the establishment, maintenance, and
release of connections.

+-------------+----------+--------------+----------------------------+
| **Procedure | **Inte   | *            | **Description**            |
| Name**      | rface/NE | *Structure** |                            |
|             | Name**   |              |                            |
+=============+==========+==============+============================+
| ##          | S1-M     | S1AP +       | According to 3GPP TS       |
| ## S1AP_EMM | ME/S1-AP | nas_ep       | 24.301 (NAS) There are two |
|             |          | s_category + | types of procedure which   |
|             |          | pdn_class    | can be seen on the NAS     |
|             |          |              | layer.                     |
|             |          |              |                            |
|             |          |              | EMM (EPS Mobility          |
|             |          |              | Management)                |
|             |          |              | Procedure.    \            |
|             |          |              | Three types of ESM         |
|             |          |              | procedures can be          |
|             |          |              | distinguished.             |
|             |          |              |                            |
|             |          |              | EMM common procedures: An  |
|             |          |              | EMM common procedure can   |
|             |          |              | always be initiated whilst |
|             |          |              | a NAS signaling connection |
|             |          |              | exists. The procedures     |
|             |          |              | belonging to this type     |
|             |          |              | are:\                      |
|             |          |              | Initiated by the NW:\      |
|             |          |              | -GUTI reallocation;\       |
|             |          |              | -Authentication;\          |
|             |          |              | -Security mode control;\   |
|             |          |              | -Identification;\          |
|             |          |              | -EMM information.\         |
|             |          |              | EMM specific procedures:   |
|             |          |              | At any time only one UE    |
|             |          |              | initiated EMM specific     |
|             |          |              | procedure can be running.  |
|             |          |              | The procedures belonging   |
|             |          |              | to this type are:\         |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Attach                 |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | -   Tracking Area Update   |
|             |          |              |                            |
|             |          |              | -   Normal and periodic    |
|             |          |              |     tracking area updating |
|             |          |              |     procedure              |
|             |          |              |                            |
|             |          |              | -   Combined tracking area |
|             |          |              |     updating procedure     |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | EMM connection management  |
|             |          |              | procedures (S1 mode        |
|             |          |              | only):\                    |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Service request        |
|             |          |              |                            |
|             |          |              | Initiated by the UE/NW:    |
|             |          |              |                            |
|             |          |              | -   Transport of NAS       |
|             |          |              |     Messages               |
|             |          |              |                            |
|             |          |              | -   Generic transport of   |
|             |          |              |     NAS messages procedure |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Paging                 |
|             |          |              |     Procedure              |
|             |          |              |                            |
|             |          |              | ESM (EPS Session           |
|             |          |              | Management) procedure :    |
|             |          |              | Two types of ESM           |
|             |          |              | procedures can be          |
|             |          |              | distinguished.\            |
|             |          |              | Procedures related to EPS  |
|             |          |              | bearer contexts\           |
|             |          |              |          Initiated by the  |
|             |          |              | NW: -                      |
|             |          |              |                            |
|             |          |              | -   Default EPS bearer     |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   Dedicated EPS bearer   |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     modification;          |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     deactivation.          |
|             |          |              |                            |
|             |          |              | Transaction related        |
|             |          |              | procedures\                |
|             |          |              |         Initiated by the   |
|             |          |              | UE:                        |
|             |          |              |                            |
|             |          |              | -   PDN connectivity       |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   PDN disconnect         |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     allocation procedure;  |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     modification           |
|             |          |              |     procedure.             |
|             |          |              |                            |
|             |          |              |         Initiated by the   |
|             |          |              | NW:                        |
|             |          |              |                            |
|             |          |              | -   ESM information        |
|             |          |              |     request procedure.     |
|             |          |              |                            |
|             |          |              | -   ESM status procedure;  |
|             |          |              |                            |
|             |          |              | -   Notification procedure |
+-------------+----------+--------------+----------------------------+
| ##          | S1-M     | S1AP +       | According to 3GPP TS       |
| ## S1AP_ESM | ME/S1-AP | nas_ep       | 24.301 (NAS) There are two |
|             |          | s_category + | types of procedure which   |
|             |          | pdn_class    | can be seen on NAS layer.  |
|             |          |              |                            |
|             |          |              | EMM (EPS Mobility          |
|             |          |              | Management)                |
|             |          |              | Procedure.    \            |
|             |          |              | Three types of ESM         |
|             |          |              | procedures can be          |
|             |          |              | distinguished.             |
|             |          |              |                            |
|             |          |              | EMM common procedures: An  |
|             |          |              | EMM common procedure can   |
|             |          |              | always be initiated whilst |
|             |          |              | a NAS signalling           |
|             |          |              | connection exists.The      |
|             |          |              | procedures belonging to    |
|             |          |              | this type are:\            |
|             |          |              | Initiated by the NW:\      |
|             |          |              | -GUTI reallocation;\       |
|             |          |              | -Authentication;\          |
|             |          |              | -Security mode control;\   |
|             |          |              | -Identification;\          |
|             |          |              | -EMM information.\         |
|             |          |              | EMM specific procedures:   |
|             |          |              | At any time only one UE    |
|             |          |              | initiated EMM specific     |
|             |          |              | procedure can be           |
|             |          |              | running.The procedures     |
|             |          |              | belonging to this type     |
|             |          |              | are:\                      |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Attach                 |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | -   Tracking Area Update   |
|             |          |              |                            |
|             |          |              | -   Normal and periodic    |
|             |          |              |     tracking area updating |
|             |          |              |     procedure              |
|             |          |              |                            |
|             |          |              | -   Combined tracking area |
|             |          |              |     updating procedure     |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | EMM connection management  |
|             |          |              | procedures (S1 mode        |
|             |          |              | only):\                    |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Service request        |
|             |          |              |                            |
|             |          |              | Initiated by the UE/NW:    |
|             |          |              |                            |
|             |          |              | -   Transport of NAS       |
|             |          |              |     Messages               |
|             |          |              |                            |
|             |          |              | -   Generic transport of   |
|             |          |              |     NAS messages procedure |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Paging                 |
|             |          |              |     Procedure              |
|             |          |              |                            |
|             |          |              | ESM (EPS Session           |
|             |          |              | Management) procedure :    |
|             |          |              | Two types of ESM           |
|             |          |              | procedures can be          |
|             |          |              | distinguished.\            |
|             |          |              | Procedures related to EPS  |
|             |          |              | bearer contexts\           |
|             |          |              |          Initiated by the  |
|             |          |              | NW: -                      |
|             |          |              |                            |
|             |          |              | -   Default EPS bearer     |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   Dedicated EPS bearer   |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     modification;          |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     deactivation.          |
|             |          |              |                            |
|             |          |              | Transaction related        |
|             |          |              | procedures\                |
|             |          |              |         Initiated by the   |
|             |          |              | UE:                        |
|             |          |              |                            |
|             |          |              | -   PDN connectivity       |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   PDN disconnect         |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     allocation procedure;  |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     modification           |
|             |          |              |     procedure.             |
|             |          |              |                            |
|             |          |              |         Initiated by the   |
|             |          |              | NW:                        |
|             |          |              |                            |
|             |          |              | -   ESM information        |
|             |          |              |     request procedure.     |
|             |          |              |                            |
|             |          |              | -   ESM status procedure;  |
|             |          |              |                            |
|             |          |              | -   Notification procedure |
+-------------+----------+--------------+----------------------------+
| #### S1     | S1-M     | S1AP +       | According to 3GPP TS       |
| AP_ESM_data | ME/S1-AP | nas_ep       | 24.301 (NAS) There are two |
|             |          | s_category + | types of procedure which   |
|             |          | pdn_class    | can be seen on NAS layer.  |
|             |          |              |                            |
|             |          |              | EMM (EPS Mobility          |
|             |          |              | Management)                |
|             |          |              | Procedure.    \            |
|             |          |              | Three types of ESM         |
|             |          |              | procedures can be          |
|             |          |              | distinguished.             |
|             |          |              |                            |
|             |          |              | EMM common procedures: An  |
|             |          |              | EMM common procedure can   |
|             |          |              | always be initiated whilst |
|             |          |              | a NAS signalling           |
|             |          |              | connection exists.The      |
|             |          |              | procedures belonging to    |
|             |          |              | this type are:\            |
|             |          |              | Initiated by the NW:\      |
|             |          |              | -GUTI reallocation;\       |
|             |          |              | -Authentication;\          |
|             |          |              | -Security mode control;\   |
|             |          |              | -Identification;\          |
|             |          |              | -EMM information.\         |
|             |          |              | EMM specific procedures:   |
|             |          |              | At any time only one UE    |
|             |          |              | initiated EMM specific     |
|             |          |              | procedure can be           |
|             |          |              | running.The procedures     |
|             |          |              | belonging to this type     |
|             |          |              | are:\                      |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Attach                 |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | -   Tracking Area Update   |
|             |          |              |                            |
|             |          |              | -   Normal and periodic    |
|             |          |              |     tracking area updating |
|             |          |              |     procedure              |
|             |          |              |                            |
|             |          |              | -   Combined tracking area |
|             |          |              |     updating procedure     |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | EMM connection management  |
|             |          |              | procedures (S1 mode        |
|             |          |              | only):\                    |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Service request        |
|             |          |              |                            |
|             |          |              | Initiated by the UE/NW:    |
|             |          |              |                            |
|             |          |              | -   Transport of NAS       |
|             |          |              |     Messages               |
|             |          |              |                            |
|             |          |              | -   Generic transport of   |
|             |          |              |     NAS messages procedure |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Paging                 |
|             |          |              |     Procedure              |
|             |          |              |                            |
|             |          |              | ESM (EPS Session           |
|             |          |              | Management) procedure :    |
|             |          |              | Two types of ESM           |
|             |          |              | procedures can be          |
|             |          |              | distinguished.\            |
|             |          |              | Procedures related to EPS  |
|             |          |              | bearer contexts\           |
|             |          |              |          Initiated by the  |
|             |          |              | NW: -                      |
|             |          |              |                            |
|             |          |              | -   Default EPS bearer     |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   Dedicated EPS bearer   |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     modification;          |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     deactivation.          |
|             |          |              |                            |
|             |          |              | Transaction related        |
|             |          |              | procedures\                |
|             |          |              |         Initiated by the   |
|             |          |              | UE:                        |
|             |          |              |                            |
|             |          |              | -   PDN connectivity       |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   PDN disconnect         |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     allocation procedure;  |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     modification           |
|             |          |              |     procedure.             |
|             |          |              |                            |
|             |          |              |         Initiated by the   |
|             |          |              | NW:                        |
|             |          |              |                            |
|             |          |              | -   ESM information        |
|             |          |              |     request procedure.     |
|             |          |              |                            |
|             |          |              | -   ESM status procedure;  |
|             |          |              |                            |
|             |          |              | -   Notification procedure |
+-------------+----------+--------------+----------------------------+
| #### S      | S1-M     | S1AP +       | According to 3GPP TS       |
| 1AP_ESM_ims | ME/S1-AP | nas_ep       | 24.301 (NAS) There are two |
|             |          | s_category + | types of procedure which   |
|             |          | pdn_class    | can be seen on NAS layer.  |
|             |          |              |                            |
|             |          |              | EMM (EPS Mobility          |
|             |          |              | Management)                |
|             |          |              | Procedure.    \            |
|             |          |              | Three types of ESM         |
|             |          |              | procedures can be          |
|             |          |              | distinguished.             |
|             |          |              |                            |
|             |          |              | EMM common procedures: An  |
|             |          |              | EMM common procedure can   |
|             |          |              | always be initiated whilst |
|             |          |              | a NAS signalling           |
|             |          |              | connection exists.The      |
|             |          |              | procedures belonging to    |
|             |          |              | this type are:\            |
|             |          |              | Initiated by the NW:\      |
|             |          |              | -GUTI reallocation;\       |
|             |          |              | -Authentication;\          |
|             |          |              | -Security mode control;\   |
|             |          |              | -Identification;\          |
|             |          |              | -EMM information.\         |
|             |          |              | EMM specific procedures:   |
|             |          |              | At any time only one UE    |
|             |          |              | initiated EMM specific     |
|             |          |              | procedure can be           |
|             |          |              | running.The procedures     |
|             |          |              | belonging to this type     |
|             |          |              | are:\                      |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Attach                 |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | -   Tracking Area Update   |
|             |          |              |                            |
|             |          |              | -   Normal and periodic    |
|             |          |              |     tracking area updating |
|             |          |              |     procedure              |
|             |          |              |                            |
|             |          |              | -   Combined tracking area |
|             |          |              |     updating procedure     |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | EMM connection management  |
|             |          |              | procedures (S1 mode        |
|             |          |              | only):\                    |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Service request        |
|             |          |              |                            |
|             |          |              | Initiated by the UE/NW:    |
|             |          |              |                            |
|             |          |              | -   Transport of NAS       |
|             |          |              |     Messages               |
|             |          |              |                            |
|             |          |              | -   Generic transport of   |
|             |          |              |     NAS messages procedure |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Paging                 |
|             |          |              |     Procedure              |
|             |          |              |                            |
|             |          |              | ESM (EPS Session           |
|             |          |              | Management) procedure :    |
|             |          |              | Two types of ESM           |
|             |          |              | procedures can be          |
|             |          |              | distinguished.\            |
|             |          |              | Procedures related to EPS  |
|             |          |              | bearer contexts\           |
|             |          |              |          Initiated by the  |
|             |          |              | NW: -                      |
|             |          |              |                            |
|             |          |              | -   Default EPS bearer     |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   Dedicated EPS bearer   |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     modification;          |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     deactivation.          |
|             |          |              |                            |
|             |          |              | Transaction related        |
|             |          |              | procedures\                |
|             |          |              |         Initiated by the   |
|             |          |              | UE:                        |
|             |          |              |                            |
|             |          |              | -   PDN connectivity       |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   PDN disconnect         |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     allocation procedure;  |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     modification           |
|             |          |              |     procedure.             |
|             |          |              |                            |
|             |          |              |         Initiated by the   |
|             |          |              | NW:                        |
|             |          |              |                            |
|             |          |              | -   ESM information        |
|             |          |              |     request procedure.     |
|             |          |              |                            |
|             |          |              | -   ESM status procedure;  |
|             |          |              |                            |
|             |          |              | -   Notification procedure |
+-------------+----------+--------------+----------------------------+
| #### S      | S1-M     | S1AP +       | According to 3GPP TS       |
| 1AP_ESM_sos | ME/S1-AP | nas_ep       | 24.301 (NAS) There are two |
|             |          | s_category + | types of procedure which   |
|             |          | pdn_class    | can be seen on NAS layer.  |
|             |          |              |                            |
|             |          |              | EMM (EPS Mobility          |
|             |          |              | Management)                |
|             |          |              | Procedure.    \            |
|             |          |              | Three types of ESM         |
|             |          |              | procedures can be          |
|             |          |              | distinguished.             |
|             |          |              |                            |
|             |          |              | EMM common procedures: An  |
|             |          |              | EMM common procedure can   |
|             |          |              | always be initiated whilst |
|             |          |              | a NAS signaling connection |
|             |          |              | exists. The procedures     |
|             |          |              | belonging to this type     |
|             |          |              | are:\                      |
|             |          |              | Initiated by the NW:\      |
|             |          |              | -GUTI reallocation;\       |
|             |          |              | -Authentication;\          |
|             |          |              | -Security mode control;\   |
|             |          |              | -Identification;\          |
|             |          |              | -EMM information.\         |
|             |          |              | EMM specific procedures:   |
|             |          |              | At any time only one UE    |
|             |          |              | initiated EMM specific     |
|             |          |              | procedure can be running.  |
|             |          |              | The procedures belonging   |
|             |          |              | to this type are:\         |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Attach                 |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | -   Tracking Area Update   |
|             |          |              |                            |
|             |          |              | -   Normal and periodic    |
|             |          |              |     tracking area updating |
|             |          |              |     procedure              |
|             |          |              |                            |
|             |          |              | -   Combined tracking area |
|             |          |              |     updating procedure     |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Detach                 |
|             |          |              |                            |
|             |          |              | EMM connection management  |
|             |          |              | procedures (S1 mode        |
|             |          |              | only):\                    |
|             |          |              | Initiated by the UE:       |
|             |          |              |                            |
|             |          |              | -   Service request        |
|             |          |              |                            |
|             |          |              | Initiated by the UE/NW:    |
|             |          |              |                            |
|             |          |              | -   Transport of NAS       |
|             |          |              |     Messages               |
|             |          |              |                            |
|             |          |              | -   Generic transport of   |
|             |          |              |     NAS messages procedure |
|             |          |              |                            |
|             |          |              | Initiated by the NW:       |
|             |          |              |                            |
|             |          |              | -   Paging                 |
|             |          |              |     Procedure              |
|             |          |              |                            |
|             |          |              | ESM (EPS Session           |
|             |          |              | Management) procedure :    |
|             |          |              | Two types of ESM           |
|             |          |              | procedures can be          |
|             |          |              | distinguished.\            |
|             |          |              | Procedures related to EPS  |
|             |          |              | bearer contexts\           |
|             |          |              |          Initiated by the  |
|             |          |              | NW: -                      |
|             |          |              |                            |
|             |          |              | -   Default EPS bearer     |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   Dedicated EPS bearer   |
|             |          |              |     context activation;    |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     modification;          |
|             |          |              |                            |
|             |          |              | -   EPS bearer context     |
|             |          |              |     deactivation.          |
|             |          |              |                            |
|             |          |              | Transaction related        |
|             |          |              | procedures\                |
|             |          |              |         Initiated by the   |
|             |          |              | UE:                        |
|             |          |              |                            |
|             |          |              | -   PDN connectivity       |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   PDN disconnect         |
|             |          |              |     procedure;             |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     allocation procedure;  |
|             |          |              |                            |
|             |          |              | -   Bearer resource        |
|             |          |              |     modification           |
|             |          |              |     procedure.             |
|             |          |              |                            |
|             |          |              |         Initiated by the   |
|             |          |              | NW:                        |
|             |          |              |                            |
|             |          |              | -   ESM information        |
|             |          |              |     request procedure.     |
|             |          |              |                            |
|             |          |              | -   ESM status procedure;  |
|             |          |              |                            |
|             |          |              | -   Notification procedure |
+-------------+----------+--------------+----------------------------+

# SIP

SIP (Session Initiation Protocol) is a signaling protocol used for
initiating, modifying, and terminating communication sessions, including
voice and video calls over IP networks. It is commonly used in VoIP
(Voice over Internet Protocol) and multimedia communication
applications.

+-------------+-----------+-------------+-----------------------------+
| **Procedure | **Int     | **          | **Description**             |
| Name**      | erface/NE | Structure** |                             |
|             | Name**    |             |                             |
+=============+===========+=============+=============================+
| ##          | UE\       | SIP +       | The establishment of the    |
| ## SIP_Call | --P/I/S-C | sip_s       | VoLTE session (call)        |
|             | SCF\--TAS | ubflow_type | includes the following      |
|             | (Gm-Mw-I  |             | operations:\                |
|             | SC-Mx-Mr) |             | -- the negotiation of the   |
|             |           |             | characteristics of          |
|             |           |             | real-time transport         |
|             |           |             | protocol\                   |
|             |           |             | (RTP) streams via session   |
|             |           |             | description protocol        |
|             |           |             | (SDP);\                     |
|             |           |             | -- the establishment of     |
|             |           |             | dedicated bearer to the RTP |
|             |           |             | stream.                     |
|             |           |             |                             |
|             |           |             | The initial stages of       |
|             |           |             | setting up a VoLTE call are |
|             |           |             | the processes of the        |
|             |           |             | initial attach, P-CSCF      |
|             |           |             | discovery and creating the  |
|             |           |             | default bearer for SIP      |
|             |           |             | signaling (by registering   |
|             |           |             | with the IMS network and    |
|             |           |             | subscribing to a            |
|             |           |             | registration event          |
|             |           |             | package).                   |
|             |           |             |                             |
|             |           |             | The first step in a VoLTE   |
|             |           |             | call setup is a SIP INVITE  |
|             |           |             | request initiated by the    |
|             |           |             | calling UE. Following this  |
|             |           |             | step, agreement is made on  |
|             |           |             | the media-specific          |
|             |           |             | parameters such as codecs   |
|             |           |             | (e.g. AMR or WB-AMR). After |
|             |           |             | some RINGING, TRYING and OK |
|             |           |             | messaging, the calling UE   |
|             |           |             | may respond with a          |
|             |           |             | Provisional ACK (PRACK)     |
|             |           |             | method as defined in RFC    |
|             |           |             | 3551. The PRACK method is   |
|             |           |             | used because ACK cannot     |
|             |           |             | safely traverse proxy       |
|             |           |             | servers that comply with    |
|             |           |             | RFC 3261. The PRACK is also |
|             |           |             | forwarded to the called UE. |
|             |           |             | When the called subscriber  |
|             |           |             | answers the call, the       |
|             |           |             | called UE will respond with |
|             |           |             | a 200 OK before the RTP     |
|             |           |             | (media) messaging begins.   |
|             |           |             |                             |
|             |           |             | Reference : 3GPP TS 24.229  |
+-------------+-----------+-------------+-----------------------------+
| ##          | UE\       | SIP +       | The deregistration phase    |
| ## SIP_De-R | --P/I/S-C | sip_s       | starts when the UA entity   |
| egistration | SCF\--HSS | ubflow_type | transmits a REGISTER        |
|             | (         |             | message which parameter     |
|             | Gm-Mw-Cx) |             | expires of the header       |
|             |           |             | Contact has a zero value.   |
|             |           |             |                             |
|             |           |             | -   The I-CSCF entity       |
|             |           |             |     transmits to the HSS    |
|             |           |             |     entity the DIAMETER LIR |
|             |           |             |     message to retrieve the |
|             |           |             |     IP address of S-CSCF.   |
|             |           |             |                             |
|             |           |             | -   The HSS entity provides |
|             |           |             |     the IP address of the   |
|             |           |             |     S-CSCF entity in the    |
|             |           |             |     DIAMETER LIA message.   |
|             |           |             |                             |
|             |           |             | -   The I-CSCF entity sends |
|             |           |             |     to the S-CSCF entity    |
|             |           |             |     the REGISTER request.   |
|             |           |             |                             |
|             |           |             | -   The S-CSCF entity       |
|             |           |             |     transmits to the HSS    |
|             |           |             |     entity the DIAMETER SAR |
|             |           |             |     message informing about |
|             |           |             |     deregistration of the   |
|             |           |             |     mobile. The HSS entity  |
|             |           |             |     still retains the       |
|             |           |             |     identity of the S-CSCF  |
|             |           |             |     entity to allow the use |
|             |           |             |     of services when the    |
|             |           |             |     mobile is not           |
|             |           |             |     registered, such as     |
|             |           |             |     call forwarding to      |
|             |           |             |     voicemail.              |
|             |           |             |                             |
|             |           |             | -   The HSS entity          |
|             |           |             |     transmits the DIAMETER  |
|             |           |             |     SAA message to          |
|             |           |             |     acknowledge the         |
|             |           |             |     previous request.       |
|             |           |             |                             |
|             |           |             | -   The S-CSCF entity       |
|             |           |             |     informs UA entity of    |
|             |           |             |     its deregistration in a |
|             |           |             |     NOTIFY message.         |
|             |           |             |                             |
|             |           |             | -   The 200 OK message is a |
|             |           |             |     response to the NOTIFY  |
|             |           |             |     request.                |
|             |           |             |                             |
|             |           |             | -   The S-CSCF entity       |
|             |           |             |     informs the TAS entity  |
|             |           |             |     about the               |
|             |           |             |     deregistration of UA    |
|             |           |             |     entity in a NOTIFY      |
|             |           |             |     message.                |
|             |           |             |                             |
|             |           |             | -   The 200 OK message is a |
|             |           |             |     response to the NOTIFY  |
|             |           |             |     request.                |
|             |           |             |                             |
|             |           |             | -   The S-CSCF entity       |
|             |           |             |     informs the P-CSCF      |
|             |           |             |     entity about the        |
|             |           |             |     deregistration of UA    |
|             |           |             |     entity in a NOTIFY      |
|             |           |             |     message.                |
|             |           |             |                             |
|             |           |             | -   The 200 OK message is a |
|             |           |             |     response to the NOTIFY  |
|             |           |             |     request.                |
|             |           |             |                             |
|             |           |             | -   The 200 OK message is a |
|             |           |             |     response to the         |
|             |           |             |     REGISTER request.       |
|             |           |             |                             |
|             |           |             | Reference : 3GPP TS 24.229  |
+-------------+-----------+-------------+-----------------------------+
| #### SIP_R  | UE\       | SIP +       | After Authentication,       |
| egistration | --P/I/S-C | sip_s       | Security and UE Capability  |
|             | SCF\--HSS | ubflow_type | requests, the network       |
|             | (         |             | accepts the Attach request  |
|             | Gm-Mw-Cx) |             | and activates the EPS       |
|             |           |             | bearer context. Once that   |
|             |           |             | has happened and the UE has |
|             |           |             | also established a PDP      |
|             |           |             | context, a typical IMS SIP  |
|             |           |             | client registration (Figure |
|             |           |             | 4) begins:                  |
|             |           |             |                             |
|             |           |             | -   The IMS client attempts |
|             |           |             |     to register by sending  |
|             |           |             |     a REGISTER request to   |
|             |           |             |     the P-CSCF.             |
|             |           |             |                             |
|             |           |             | -   The P-CSCF forwards the |
|             |           |             |     REGISTER request to the |
|             |           |             |     I-CSCF.                 |
|             |           |             |                             |
|             |           |             | -   The I-CSCF polls the    |
|             |           |             |     HSS for data used to    |
|             |           |             |     decide which S-CSCF     |
|             |           |             |     should manage the       |
|             |           |             |     REGISTER request. The   |
|             |           |             |     I-CSCF then makes that  |
|             |           |             |     decision.               |
|             |           |             |                             |
|             |           |             | -   The I-CSCF forwards the |
|             |           |             |     REGISTER request to the |
|             |           |             |     appropriate S-CSCF.     |
|             |           |             |                             |
|             |           |             | -   The S-CSCF typically    |
|             |           |             |     sends the P-CSCF a 401  |
|             |           |             |     (UNAUTHORIZED) response |
|             |           |             |     as well as a challenge  |
|             |           |             |     string in the form of a |
|             |           |             |     "number used once" or   |
|             |           |             |     "nonce".                |
|             |           |             |                             |
|             |           |             | -   The P-CSCF forwards the |
|             |           |             |     401 -- UNAUTHORIZED     |
|             |           |             |     response to the UE.     |
|             |           |             |                             |
|             |           |             | -   Both the UE and the     |
|             |           |             |     network have stored     |
|             |           |             |     some Shared Secret Data |
|             |           |             |     (SSD), the UE in its    |
|             |           |             |     ISIM or USIM and the    |
|             |           |             |     network on the HSS. The |
|             |           |             |     UE uses an algorithm    |
|             |           |             |     per RFC 33101 (e.g.     |
|             |           |             |     AKAv2-MD5) to hash the  |
|             |           |             |     SSD and the \"nonce\".  |
|             |           |             |                             |
|             |           |             | -   The UE sends a REGISTER |
|             |           |             |     request to the P-CSCF.  |
|             |           |             |     This time the request   |
|             |           |             |     includes the result of  |
|             |           |             |     the hashed nonce and    |
|             |           |             |     SSD.                    |
|             |           |             |                             |
|             |           |             | -   The P-CSCF forwards the |
|             |           |             |     new REGISTER request to |
|             |           |             |     the I-CSCF.             |
|             |           |             |                             |
|             |           |             | -   The I-CSCF forwards the |
|             |           |             |     new REGISTER request to |
|             |           |             |     the S-CSCF.             |
|             |           |             |                             |
|             |           |             | -   The S-CSCF polls the    |
|             |           |             |     HSS (via the I-CSCF)    |
|             |           |             |     for the SSD, hashes it  |
|             |           |             |     against the nonce and   |
|             |           |             |     determines whether the  |
|             |           |             |     UE should be allowed to |
|             |           |             |     register. Assuming the  |
|             |           |             |     hashed values match,    |
|             |           |             |     the S-CSCF sends 200 -- |
|             |           |             |     OK response to the      |
|             |           |             |     P-CSCF. At this point   |
|             |           |             |     an IPSec security       |
|             |           |             |     association is          |
|             |           |             |     established by the      |
|             |           |             |     P-CSCF.                 |
|             |           |             |                             |
|             |           |             | -   The P-CSCF forwards the |
|             |           |             |     200 -- OK response to   |
|             |           |             |     the UE.                 |
|             |           |             |                             |
|             |           |             | Reference : 3GPP TS 24.229  |
+-------------+-----------+-------------+-----------------------------+
