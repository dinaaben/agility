# Supported Protocols Per Service

If you receive an error message advising that "No call flows were
detected in your files, "AGILITY may not support the Service and/or
Protocols in your file(s).

In this scenario, the next step is to inspect the contents of the
applicable files to ensure that AGILITY supports the Service type and
Protocols. Use the chart below to view the supported service types and
their affiliate coverage quotient for protocol coverage.

  -----------------------------------------------------------------------
  **Service Name**   **Supported Protocols**
  ------------------ ----------------------------------------------------
  4G 5G NSA          \'S1AP\', \'GTPV2_S11_S5_S2B\', \'DIAMETER\',
  Connectivity       \'HTTP2\', \'PFCP\', \'SIP_SAAS\'

  5G SA Connectivity \'HTTP2\', \'PFCP\', DIAMETER, NAS-5GS, \'NGAP\',
                     \'SIP_SAAS\'

  5G SA Data         \'HTTP2\', \'PFCP\', \'NGAP\', \'GTPV2_S11_S5_S2B\',
                     \'TCP_DATA\', \'ICMP\', \'DNS\'

  5G Mobility        GTPV2, HTTP2, PFCP

  VoLTE              \'S1AP\', \'GTPV2_S11_S5_S2B\', \'DIAMETER\',
                     \'SIP_SAAS\', NAS-EPS

  VoNR               \'SIP\', \'NGAP\', \'RTP\', \'PFCP\', \'HTTP2\',
                     \'DIAMETER\', NAS-5GS
  -----------------------------------------------------------------------

## Correlation Logic and Supported Combinations

It\'s important to highlight that AGILITY's correlation logic
specifically relies on the presence of certain protocols within a
combination. As a result, not all combinations of the listed protocols
above are supported by the correlation logic.

For example , for the 4G 5G NSA Connectivity service, the following
protocols are supported: \'**S1AP**\', **\'GTPV2_S11_S5_S2B\',
\'DIAMETER\', \'HTTP2\', \'PFCP\', and \'SIP_SAAS\'.**

However, it\'s important to note that the correlation logic specifically
relies on the presence of either \'**S1AP**\' or
\'**GTPV2_S11_S5_S2B**\' protocols. Therefore, any combination of the
other listed protocols that does not include \'**S1AP**\' or
\'**GTPV2_S11_S5_S2B**\' is not supported by the correlation logic.

## Percentage of total coverage

  -----------------------------------------------------------------------
  **Service**                                       **Coverage**
  ------------------------------------------------- ---------------------
  4G/5G NSA Connectivity                            95%

  5G SA Connectivity                                80%

  5G SA Data                                        99%

  5G SA Mobility                                    75%

  e911                                              94%

  VoLTE                                             100%

  VoNR                                              98%
  -----------------------------------------------------------------------

You may also encounter file processing/analysis error messages if you
select the incorrect Service Type. Check out our knowledge article on
[Service Coverage](https://nexiusocp.atlassian.net/l/cp/Pnvdsack) and
the [Model Coverage
tables](file:///C:\wiki\spaces\AKB1\pages\3042574337\Model+Coverage+Tables).