import React from 'react';
import Cdc from '../charity/cdc.png';
import DirectRelief from '../charity/directRelief.png';
import GlobalGiving from '../charity/globalGiving.png';
import H2h from '../charity/h2h.png';
import {FormattedMessage} from 'react-intl';


export const donateImgData = [
  {
    imgPath: DirectRelief,
    link: "https://www.directrelief.org/emergency/coronavirus-outbreak/",
    label: <FormattedMessage id="app.donate.directRelief"
                  defaultMessage="Direct Relief"
                  description="direct relief description"/>,
    description: <FormattedMessage id="app.donate.directReliefDescription"
              defaultMessage="Works with public health authorities, nonprofits, and businesses to provide protective items, such as masks and gloves"
              description="direct relief description"/>,
  },
  {
    imgPath: Cdc,
    link: "https://give.cdcfoundation.org/give/269833/#!/donation/checkout?c_src=BCFU0",
    label: <FormattedMessage id="app.donate.cdc"
                  defaultMessage="CDC Foundation"
                  description="cdc title"/>,
    description: <FormattedMessage id="app.donate.cdcDescription"
                  defaultMessage="Provides state and local health departments, support for the global response, logistics, communications, data management, personal protective equipment, critical response supplies and more"
                  description="cdc description"/>,
  },
  {
    imgPath: GlobalGiving,
    label: <FormattedMessage id="app.donate.globalGiving"
                  defaultMessage="Global Giving"
                  description="global giving title"/>,
    link:"https://www.globalgiving.org/projects/coronavirus-relief-fund/",
    description: <FormattedMessage id="app.donate.globalGivingDescription"
                  defaultMessage="Help meet healthcare, food, and water needs to those in impacted areas"
                  description="global giving description"/>,
  },
  {
    imgPath: H2h,
    link: "https://app.mobilecause.com/form/fFHW4g?vid=5j744",
    label: <FormattedMessage id="app.donate.h2h"
                  defaultMessage="Heart to Heart International"
                  description="h2h title"/>,
    description: <FormattedMessage id="app.donate.h2hDescription"
                  defaultMessage="Supports COVID-19 planning, preparedness and training to manage the outbreak"
                  description="h2h description"/>,
  },
]

export default {
  donateImgData,
}
