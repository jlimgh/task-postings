import { SublocationEnum } from "./enums";

export const LocationMapStringUrlToStringLabel = new Map<string, string>([
    ['los-angeles', 'Los Angeles'],
    ['orange-county', 'Orange County'],
    ['riverside', 'Riverside']
]);

export const LocationMapIntToStringLabel = new Map<number, string>([
    [1, 'Los Angeles'],
    [2, 'Orange County'],
    [3, 'Riverside']
]);

export const LocationMapIntToStringUrl = new Map<number, string>([
    [1, 'los-angeles'],
    [2, 'orange-county'],
    [3, 'riverside']
]);

export const LocationMapUrlStringToInt = new Map<string, number>([
    ['los-angeles', 1],
    ['orange-county', 2],
    ['riverside', 3]
]);

export const SubLocationMapStringUrlToStringLabel = new Map<string, string>([
    [SublocationEnum.LaLongBeach, 'Long Beach'],
    [SublocationEnum.LaSouthBay, 'South Bay'],
    [SublocationEnum.LaWestside, 'Westside'],
    [SublocationEnum.OcHb, 'Huntington Beach'],
    [SublocationEnum.OcIrvine, 'Irvine']
]);