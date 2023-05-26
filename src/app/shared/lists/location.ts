import { LocationEnum } from '../models/enums';
import { SublocationEnum } from '../models/enums';

export const LocationOptions = {
    counties: [
      {
        value: LocationEnum.LosAngeles,
        display: 'Los Angeles'
      },
      {
        value: LocationEnum.OrangeCounty,
        display: 'Orange County'
      },
      {
        value: LocationEnum.Riverside,
        display: 'Riverside'
      }
    ],
    la: [
      {
        value: SublocationEnum.LaWestside,
        display: 'Westside'
      },
      {
        value: SublocationEnum.LaSouthBay,
        display: 'South Bay'
      },
      {
        value: SublocationEnum.LaLongBeach,
        display: 'Long Beach'
      }
    ],
    oc: [
      {
        value: SublocationEnum.OcIrvine,
        display: 'Irvine'
      },
      {
        value: SublocationEnum.OcHb,
        display: 'Huntington Beach'
      }
    ]
  }