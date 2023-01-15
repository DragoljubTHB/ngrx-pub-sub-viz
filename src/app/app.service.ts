import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {map} from 'rxjs/operators';

export interface Chord {
  source: string;
  target: string;
  value: number;
}

export interface EffectD {
  effectName?: string;
  listenTo: string[];
  mappedTo: string[];
}

export interface EffectsD {
  fileName: string;
  mappings: EffectD[];
}

export interface ChordData {
  chords: Chord[] | null;
  names: string[] | null;
  index: Map<string, number> | null;
  matrix: number[][] | null;
}

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private effectsD: EffectsD[] = [
    {
      fileName: 'effect-0',
      mappings: [
        {
          effectName: 'vertex-01',
          listenTo: [
            'edge-21'
          ],
          mappedTo: [
            'edge-01',
            'edge-11'
          ]
        }
      ]
    },
    {
      fileName: 'effect-1',
      mappings: [
        {
          effectName: 'vertex-11',
          listenTo: [
            'edge-51'
          ],
          mappedTo: [
            'edge-31',
            'edge-41'
          ]
        }
      ]
    },
    {
      fileName: 'effect-2',
      mappings: [
        {
          effectName: 'vertex-21',
          listenTo: [
            'edge-81'
          ],
          mappedTo: [
            'edge-61',
            'edge-71'
          ]
        },
        {
          effectName: 'vertex-31',
          listenTo: [
            'edge-101'
          ],
          mappedTo: [
            'edge-91',
            'edge-71'
          ]
        },
        {
          effectName: 'vertex-41',
          listenTo: [
            'edge-151'
          ],
          mappedTo: [
            'edge-111',
            'edge-121',
            'edge-131',
            'edge-141'
          ]
        },
        {
          effectName: 'vertex-51',
          listenTo: [
            'edge-181'
          ],
          mappedTo: [
            'edge-161',
            'edge-131',
            'edge-171'
          ]
        },
        {
          effectName: 'vertex-61',
          listenTo: [
            'edge-211'
          ],
          mappedTo: [
            'edge-191',
            'edge-201'
          ]
        },
        {
          effectName: 'vertex-71',
          listenTo: [
            'edge-221'
          ],
          mappedTo: [
            'edge-111',
            'edge-121',
            'edge-141'
          ]
        },
        {
          effectName: 'vertex-81',
          listenTo: [
            'edge-251'
          ],
          mappedTo: [
            'edge-231',
            'edge-131',
            'edge-241'
          ]
        },
        {
          effectName: 'vertex-91',
          listenTo: [
            'edge-281'
          ],
          mappedTo: [
            'edge-261',
            'edge-271'
          ]
        },
        {
          effectName: 'vertex-101',
          listenTo: [
            'edge-301'
          ],
          mappedTo: [
            'edge-291',
            'edge-261',
            'edge-131',
            'edge-271'
          ]
        },
        {
          effectName: 'vertex-111',
          listenTo: [
            'edge-331'
          ],
          mappedTo: [
            'edge-111',
            'edge-311',
            'edge-321'
          ]
        },
        {
          effectName: 'vertex-121',
          listenTo: [
            'edge-371'
          ],
          mappedTo: [
            'edge-341',
            'edge-351',
            'edge-361'
          ]
        },
        {
          effectName: 'vertex-131',
          listenTo: [
            'edge-381'
          ],
          mappedTo: [
            'edge-341',
            'edge-351',
            'edge-361'
          ]
        },
        {
          effectName: 'vertex-141',
          listenTo: [
            'edge-411'
          ],
          mappedTo: [
            'edge-61',
            'edge-121',
            'edge-351',
            'edge-161',
            'edge-261',
            'edge-391',
            'edge-191',
            'edge-401'
          ]
        },
        {
          effectName: 'vertex-151',
          listenTo: [
            'edge-451'
          ],
          mappedTo: [
            'edge-421',
            'edge-391',
            'edge-431',
            'edge-441'
          ]
        },
        {
          effectName: 'vertex-161',
          listenTo: [
            'edge-461'
          ],
          mappedTo: [
            'edge-151'
          ]
        },
        {
          effectName: 'vertex-171',
          listenTo: [
            'edge-471'
          ],
          mappedTo: [
            'edge-181'
          ]
        },
        {
          effectName: 'vertex-181',
          listenTo: [
            'edge-481'
          ],
          mappedTo: [
            'edge-281',
            'edge-151'
          ]
        },
        {
          effectName: 'vertex-191',
          listenTo: [
            'edge-491'
          ],
          mappedTo: [
            'edge-181'
          ]
        },
        {
          effectName: 'vertex-201',
          listenTo: [
            'edge-511'
          ],
          mappedTo: [
            'edge-501'
          ]
        },
        {
          effectName: 'vertex-211',
          listenTo: [
            'edge-521'
          ],
          mappedTo: [
            'edge-151',
            'edge-181'
          ]
        }
      ]
    },
    {
      fileName: 'effect-3',
      mappings: [
        {
          effectName: 'vertex-221',
          listenTo: [
            'edge-531'
          ],
          mappedTo: [
            'edge-131'
          ]
        },
        {
          effectName: 'vertex-231',
          listenTo: [
            'edge-131'
          ],
          mappedTo: [
            'edge-541',
            'edge-551'
          ]
        },
        {
          effectName: 'vertex-241',
          listenTo: [
            'edge-561'
          ],
          mappedTo: [
            'edge-131'
          ]
        },
        {
          effectName: 'vertex-251',
          listenTo: [
            'edge-581'
          ],
          mappedTo: [
            'edge-131',
            'edge-571'
          ]
        },
        {
          effectName: 'vertex-261',
          listenTo: [
            'edge-571'
          ],
          mappedTo: [
            'edge-591',
            'edge-601'
          ]
        },
        {
          effectName: 'vertex-271',
          listenTo: [
            'edge-611'
          ],
          mappedTo: [
            'edge-131'
          ]
        },
        {
          effectName: 'vertex-281',
          listenTo: [
            'edge-621'
          ],
          mappedTo: [
            'edge-181',
            'edge-151'
          ]
        },
        {
          effectName: 'vertex-291',
          listenTo: [
            'edge-631'
          ],
          mappedTo: [
            'edge-131'
          ]
        }
      ]
    },
    {
      fileName: 'effect-4',
      mappings: [
        {
          effectName: 'vertex-301',
          listenTo: [
            'edge-651'
          ],
          mappedTo: [
            'edge-641'
          ]
        },
        {
          effectName: 'vertex-311',
          listenTo: [
            'edge-641'
          ],
          mappedTo: [
            'edge-661',
            'edge-671'
          ]
        },
        {
          effectName: 'vertex-321',
          listenTo: [
            'edge-661'
          ],
          mappedTo: [
            'edge-261'
          ]
        },
        {
          effectName: 'vertex-331',
          listenTo: [
            'edge-701'
          ],
          mappedTo: [
            'edge-681',
            'edge-691'
          ]
        },
        {
          effectName: 'vertex-341',
          listenTo: [
            'edge-681'
          ],
          mappedTo: [
            'edge-261'
          ]
        }
      ]
    },
    {
      fileName: 'effect-5',
      mappings: [
        {
          effectName: 'vertex-351',
          listenTo: [
            'edge-741'
          ],
          mappedTo: [
            'edge-711',
            'edge-721',
            'edge-731'
          ]
        },
        {
          effectName: 'vertex-361',
          listenTo: [
            'edge-771'
          ],
          mappedTo: [
            'edge-751',
            'edge-761'
          ]
        }
      ]
    },
    {
      fileName: 'effect-6',
      mappings: [
        {
          effectName: 'vertex-371',
          listenTo: [
            'edge-801'
          ],
          mappedTo: [
            'edge-781',
            'edge-791'
          ]
        }
      ]
    },
    {
      fileName: 'effect-7',
      mappings: [
        {
          effectName: 'vertex-381',
          listenTo: [
            'edge-841'
          ],
          mappedTo: [
            'edge-811',
            'edge-821',
            'edge-831'
          ]
        }
      ]
    },
    {
      fileName: 'effect-8',
      mappings: [
        {
          effectName: 'vertex-391',
          listenTo: [
            'edge-861'
          ],
          mappedTo: [
            'edge-851'
          ]
        },
        {
          effectName: 'vertex-401',
          listenTo: [
            'edge-871'
          ],
          mappedTo: [
            'edge-851'
          ]
        },
        {
          effectName: 'vertex-411',
          listenTo: [
            'edge-881'
          ],
          mappedTo: [
            'edge-451'
          ]
        }
      ]
    },
    {
      fileName: 'effect-9',
      mappings: [
        {
          effectName: 'vertex-421',
          listenTo: [
            'edge-901'
          ],
          mappedTo: [
            'edge-891'
          ]
        },
        {
          effectName: 'vertex-431',
          listenTo: [
            'edge-891'
          ],
          mappedTo: [
            'edge-911',
            'edge-751',
            'edge-921'
          ]
        },
        {
          effectName: 'vertex-441',
          listenTo: [
            'edge-911'
          ],
          mappedTo: [
            'edge-931'
          ]
        }
      ]
    },
    {
      fileName: 'effect-10',
      mappings: [
        {
          effectName: 'vertex-451',
          listenTo: [
            'edge-971'
          ],
          mappedTo: [
            'edge-881',
            'edge-941',
            'edge-951',
            'edge-961'
          ]
        },
        {
          effectName: 'vertex-461',
          listenTo: [
            'edge-991'
          ],
          mappedTo: [
            'edge-981'
          ]
        },
        {
          effectName: 'vertex-471',
          listenTo: [
            'edge-1011'
          ],
          mappedTo: [
            'edge-1001'
          ]
        },
        {
          effectName: 'vertex-481',
          listenTo: [
            'edge-1031'
          ],
          mappedTo: [
            'edge-941',
            'edge-1021'
          ]
        },
        {
          effectName: 'vertex-491',
          listenTo: [
            'edge-1051'
          ],
          mappedTo: [
            'edge-941',
            'edge-1041'
          ]
        },
        {
          effectName: 'vertex-501',
          listenTo: [
            'edge-1071'
          ],
          mappedTo: [
            'edge-941',
            'edge-1061'
          ]
        },
        {
          effectName: 'vertex-511',
          listenTo: [
            'edge-1091'
          ],
          mappedTo: [
            'edge-941',
            'edge-1081'
          ]
        },
        {
          effectName: 'vertex-521',
          listenTo: [
            'edge-1151'
          ],
          mappedTo: [
            'edge-1101',
            'edge-1111',
            'edge-1121',
            'edge-941',
            'edge-1131',
            'edge-1141'
          ]
        }
      ]
    },
    {
      fileName: 'effect-11',
      mappings: [
        {
          effectName: 'vertex-531',
          listenTo: [
            'edge-1191'
          ],
          mappedTo: [
            'edge-1161',
            'edge-1171',
            'edge-1181'
          ]
        },
        {
          effectName: 'vertex-541',
          listenTo: [
            'edge-1171'
          ],
          mappedTo: [
            'edge-1201'
          ]
        },
        {
          effectName: 'vertex-551',
          listenTo: [
            'edge-1161'
          ],
          mappedTo: [
            'edge-1201'
          ]
        },
        {
          effectName: 'vertex-561',
          listenTo: [
            'edge-1201'
          ],
          mappedTo: [
            'edge-1211',
            'edge-1221',
            'edge-1231',
            'edge-1241',
            'edge-1251',
            'edge-1261',
            'edge-1271',
            'edge-1281',
            'edge-1181'
          ]
        },
        {
          effectName: 'vertex-571',
          listenTo: [
            'edge-1221'
          ],
          mappedTo: [
            'edge-1291',
            'edge-1301'
          ]
        },
        {
          effectName: 'vertex-581',
          listenTo: [
            'edge-1331'
          ],
          mappedTo: [
            'edge-1311',
            'edge-1321'
          ]
        },
        {
          effectName: 'vertex-591',
          listenTo: [
            'edge-1251'
          ],
          mappedTo: [
            'edge-1341',
            'edge-1351'
          ]
        },
        {
          effectName: 'vertex-601',
          listenTo: [
            'edge-1291'
          ],
          mappedTo: [
            'edge-1281'
          ]
        }
      ]
    },
    {
      fileName: 'effect-12',
      mappings: [
        {
          effectName: 'vertex-611',
          listenTo: [
            'edge-1381'
          ],
          mappedTo: [
            'edge-1361',
            'edge-1371'
          ]
        },
        {
          effectName: 'vertex-621',
          listenTo: [
            'edge-1411'
          ],
          mappedTo: [
            'edge-1391',
            'edge-1401'
          ]
        },
        {
          effectName: 'vertex-631',
          listenTo: [
            'edge-1361'
          ],
          mappedTo: [
            'edge-1421',
            'edge-1391'
          ]
        },
        {
          effectName: 'vertex-641',
          listenTo: [
            'edge-1361'
          ],
          mappedTo: [
            'edge-1431',
            'edge-1391',
            'edge-1421'
          ]
        },
        {
          effectName: 'vertex-651',
          listenTo: [
            'edge-1421'
          ],
          mappedTo: [
            'edge-1441',
            'edge-1451'
          ]
        },
        {
          effectName: 'vertex-661',
          listenTo: [
            'edge-1491'
          ],
          mappedTo: [
            'edge-1461',
            'edge-1471',
            'edge-1481'
          ]
        },
        {
          effectName: 'vertex-671',
          listenTo: [
            'edge-1431'
          ],
          mappedTo: [
            'edge-1501',
            'edge-1511',
            'edge-1371'
          ]
        },
        {
          effectName: 'vertex-681',
          listenTo: [
            'edge-1541'
          ],
          mappedTo: [
            'edge-1521',
            'edge-1531'
          ]
        },
        {
          effectName: 'vertex-691',
          listenTo: [
            'edge-1571'
          ],
          mappedTo: [
            'edge-1551',
            'edge-1561'
          ]
        },
        {
          effectName: 'vertex-701',
          listenTo: [
            'edge-1601'
          ],
          mappedTo: [
            'edge-1581',
            'edge-1591'
          ]
        },
        {
          effectName: 'vertex-711',
          listenTo: [
            'edge-1631'
          ],
          mappedTo: [
            'edge-1611',
            'edge-1621'
          ]
        },
        {
          effectName: 'vertex-721',
          listenTo: [
            'edge-1661'
          ],
          mappedTo: [
            'edge-1641',
            'edge-1651'
          ]
        },
        {
          effectName: 'vertex-731',
          listenTo: [
            'edge-1691'
          ],
          mappedTo: [
            'edge-1671',
            'edge-1681'
          ]
        },
        {
          effectName: 'vertex-741',
          listenTo: [
            'edge-1721'
          ],
          mappedTo: [
            'edge-1701',
            'edge-1711'
          ]
        },
        {
          effectName: 'vertex-751',
          listenTo: [
            'edge-1671'
          ],
          mappedTo: [
            'edge-1731'
          ]
        },
        {
          effectName: 'vertex-761',
          listenTo: [
            'edge-1741'
          ],
          mappedTo: [
            'edge-151'
          ]
        },
        {
          effectName: 'vertex-771',
          listenTo: [
            'edge-1741'
          ],
          mappedTo: [
            'edge-181'
          ]
        },
        {
          effectName: 'vertex-781',
          listenTo: [
            'edge-1751'
          ],
          mappedTo: [
            'edge-151'
          ]
        },
        {
          effectName: 'vertex-791',
          listenTo: [
            'edge-1751'
          ],
          mappedTo: [
            'edge-181'
          ]
        },
        {
          effectName: 'vertex-801',
          listenTo: [
            'edge-1781'
          ],
          mappedTo: [
            'edge-1761',
            'edge-1771'
          ]
        },
        {
          effectName: 'vertex-811',
          listenTo: [
            'edge-1761'
          ],
          mappedTo: [
            'edge-1791',
            'edge-1801'
          ]
        },
        {
          effectName: 'vertex-821',
          listenTo: [
            'edge-1761'
          ],
          mappedTo: [
            'edge-81'
          ]
        },
        {
          effectName: 'vertex-831',
          listenTo: [
            'edge-1811'
          ],
          mappedTo: [
            'edge-1661'
          ]
        },
        {
          effectName: 'vertex-841',
          listenTo: [
            'edge-1821'
          ],
          mappedTo: [
            'edge-1691'
          ]
        },
        {
          effectName: 'vertex-851',
          listenTo: [
            'edge-1831'
          ],
          mappedTo: [
            'edge-1631'
          ]
        },
        {
          effectName: 'vertex-861',
          listenTo: [
            'edge-1851'
          ],
          mappedTo: [
            'edge-1841'
          ]
        },
        {
          effectName: 'vertex-871',
          listenTo: [
            'edge-1881'
          ],
          mappedTo: [
            'edge-1861',
            'edge-1871'
          ]
        },
        {
          effectName: 'vertex-881',
          listenTo: [
            'edge-1911'
          ],
          mappedTo: [
            'edge-1891',
            'edge-1901'
          ]
        },
        {
          effectName: 'vertex-891',
          listenTo: [
            'edge-1931'
          ],
          mappedTo: [
            'edge-1391',
            'edge-1921'
          ]
        }
      ]
    },
    {
      fileName: 'effect-13',
      mappings: [
        {
          effectName: 'vertex-901',
          listenTo: [
            'edge-1951'
          ],
          mappedTo: [
            'edge-1941'
          ]
        },
        {
          effectName: 'vertex-911',
          listenTo: [
            'edge-1961'
          ],
          mappedTo: [
            'edge-1941'
          ]
        },
        {
          effectName: 'vertex-921',
          listenTo: [
            'edge-1971'
          ],
          mappedTo: [
            'edge-1941'
          ]
        },
        {
          effectName: 'vertex-931',
          listenTo: [
            'edge-2001'
          ],
          mappedTo: [
            'edge-1981',
            'edge-1991'
          ]
        },
        {
          effectName: 'vertex-941',
          listenTo: [
            'edge-2011'
          ],
          mappedTo: [
            'edge-1941'
          ]
        },
        {
          effectName: 'vertex-951',
          listenTo: [
            'edge-2021'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-961',
          listenTo: [
            'edge-2041'
          ],
          mappedTo: [
            'edge-2031'
          ]
        },
        {
          effectName: 'vertex-971',
          listenTo: [
            'edge-2051'
          ],
          mappedTo: [
            'edge-2031'
          ]
        },
        {
          effectName: 'vertex-981',
          listenTo: [
            'edge-2031'
          ],
          mappedTo: [
            'edge-2061',
            'edge-2071',
            'edge-2081'
          ]
        },
        {
          effectName: 'vertex-991',
          listenTo: [
            'edge-2111'
          ],
          mappedTo: [
            'edge-2091',
            'edge-411',
            'edge-2101'
          ]
        },
        {
          effectName: 'vertex-1001',
          listenTo: [
            'edge-2111'
          ],
          mappedTo: [
            'edge-2091',
            'edge-2101'
          ]
        },
        {
          effectName: 'vertex-1011',
          listenTo: [
            'edge-2121'
          ],
          mappedTo: [
            'edge-2091',
            'edge-411',
            'edge-2101'
          ]
        },
        {
          effectName: 'vertex-1021',
          listenTo: [
            'edge-2151'
          ],
          mappedTo: [
            'edge-2131',
            'edge-411',
            'edge-2141'
          ]
        },
        {
          effectName: 'vertex-1031',
          listenTo: [
            'edge-2181'
          ],
          mappedTo: [
            'edge-2161',
            'edge-411',
            'edge-2171'
          ]
        },
        {
          effectName: 'vertex-1041',
          listenTo: [
            'edge-2211'
          ],
          mappedTo: [
            'edge-2191',
            'edge-2201'
          ]
        },
        {
          effectName: 'vertex-1051',
          listenTo: [
            'edge-2221'
          ],
          mappedTo: [
            'edge-2191'
          ]
        },
        {
          effectName: 'vertex-1061',
          listenTo: [
            'edge-2221'
          ],
          mappedTo: [
            'edge-2191'
          ]
        },
        {
          effectName: 'vertex-1071',
          listenTo: [
            'edge-2221'
          ],
          mappedTo: [
            'edge-2191'
          ]
        },
        {
          effectName: 'vertex-1081',
          listenTo: [
            'edge-2231'
          ],
          mappedTo: [
            'edge-131'
          ]
        }
      ]
    },
    {
      fileName: 'effect-14',
      mappings: [
        {
          effectName: 'vertex-1091',
          listenTo: [
            'edge-941'
          ],
          mappedTo: [
            'edge-2241',
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-1101',
          listenTo: [
            'edge-2271'
          ],
          mappedTo: [
            'edge-2261',
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-1111',
          listenTo: [
            'edge-2241'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1121',
          listenTo: [
            'edge-2281'
          ],
          mappedTo: [
            'edge-941',
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-1131',
          listenTo: [
            'edge-2311'
          ],
          mappedTo: [
            'edge-2291',
            'edge-2301',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-1141',
          listenTo: [
            'edge-2331'
          ],
          mappedTo: [
            'edge-2321',
            'edge-2271'
          ]
        },
        {
          effectName: 'vertex-1151',
          listenTo: [
            'edge-2321'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1161',
          listenTo: [
            'edge-2341'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1171',
          listenTo: [
            'edge-2351'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1181',
          listenTo: [
            'edge-2361'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1191',
          listenTo: [
            'edge-2371'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1201',
          listenTo: [
            'edge-2381'
          ],
          mappedTo: [
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-1211',
          listenTo: [
            'edge-2301'
          ],
          mappedTo: [
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-1221',
          listenTo: [
            'edge-1101'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1231',
          listenTo: [
            'edge-2391'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1241',
          listenTo: [
            'edge-2401'
          ],
          mappedTo: [
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-1251',
          listenTo: [
            'edge-2411'
          ],
          mappedTo: [
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-1261',
          listenTo: [
            'edge-2421'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1271',
          listenTo: [
            'edge-2431'
          ],
          mappedTo: [
            'edge-2351',
            'edge-2371',
            'edge-2321'
          ]
        },
        {
          effectName: 'vertex-1281',
          listenTo: [
            'edge-2441'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1291',
          listenTo: [
            'edge-2451'
          ],
          mappedTo: [
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-1301',
          listenTo: [
            'edge-2461'
          ],
          mappedTo: [
            'edge-941'
          ]
        }
      ]
    },
    {
      fileName: 'effect-15',
      mappings: [
        {
          effectName: 'vertex-571',
          listenTo: [
            'edge-2491'
          ],
          mappedTo: [
            'edge-2471',
            'edge-2481'
          ]
        },
        {
          effectName: 'vertex-31',
          listenTo: [
            'edge-2471'
          ],
          mappedTo: [
            'edge-101'
          ]
        },
        {
          effectName: 'vertex-1311',
          listenTo: [
            'edge-2521'
          ],
          mappedTo: [
            'edge-2501',
            'edge-2511'
          ]
        },
        {
          effectName: 'vertex-1321',
          listenTo: [
            'edge-2501'
          ],
          mappedTo: [
            'edge-2491'
          ]
        }
      ]
    },
    {
      fileName: 'effect-16',
      mappings: [
        {
          effectName: 'vertex-1331',
          listenTo: [
            'edge-2541'
          ],
          mappedTo: [
            'edge-2531'
          ]
        },
        {
          effectName: 'vertex-1341',
          listenTo: [
            'edge-2381'
          ],
          mappedTo: [
            'edge-2551'
          ]
        },
        {
          effectName: 'vertex-1351',
          listenTo: [
            'edge-2571'
          ],
          mappedTo: [
            'edge-2561'
          ]
        },
        {
          effectName: 'vertex-1361',
          listenTo: [
            'edge-2581'
          ],
          mappedTo: [
            'edge-2551'
          ]
        },
        {
          effectName: 'vertex-1371',
          listenTo: [
            'edge-2591'
          ],
          mappedTo: [
            'edge-2551'
          ]
        },
        {
          effectName: 'vertex-1381',
          listenTo: [
            'edge-2601'
          ],
          mappedTo: [
            'edge-2551'
          ]
        },
        {
          effectName: 'vertex-1391',
          listenTo: [
            'edge-2611'
          ],
          mappedTo: [
            'edge-2551'
          ]
        },
        {
          effectName: 'vertex-1401',
          listenTo: [
            'edge-2271'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1411',
          listenTo: [
            'edge-2341'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1421',
          listenTo: [
            'edge-951'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1431',
          listenTo: [
            'edge-2621'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1441',
          listenTo: [
            'edge-2631'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1451',
          listenTo: [
            'edge-981'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1461',
          listenTo: [
            'edge-1001'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1471',
          listenTo: [
            'edge-1021'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1481',
          listenTo: [
            'edge-1041'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1491',
          listenTo: [
            'edge-1061'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1501',
          listenTo: [
            'edge-2641'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1511',
          listenTo: [
            'edge-2651'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1521',
          listenTo: [
            'edge-2661'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1531',
          listenTo: [
            'edge-2671'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1541',
          listenTo: [
            'edge-2681'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1551',
          listenTo: [
            'edge-1141'
          ],
          mappedTo: [
            'edge-2581'
          ]
        },
        {
          effectName: 'vertex-1561',
          listenTo: [
            'edge-2691'
          ],
          mappedTo: [
            'edge-2601'
          ]
        }
      ]
    },
    {
      fileName: 'effect-17',
      mappings: [
        {
          effectName: 'vertex-1571',
          listenTo: [
            'edge-2721'
          ],
          mappedTo: [
            'edge-2701',
            'edge-2711'
          ]
        },
        {
          effectName: 'vertex-1581',
          listenTo: [
            'edge-2741'
          ],
          mappedTo: [
            'edge-451',
            'edge-2731'
          ]
        },
        {
          effectName: 'vertex-1591',
          listenTo: [
            'edge-2751'
          ],
          mappedTo: [
            'edge-451',
            'edge-2731'
          ]
        },
        {
          effectName: 'vertex-1601',
          listenTo: [
            'edge-2771'
          ],
          mappedTo: [
            'edge-231',
            'edge-2761',
            'edge-151'
          ]
        },
        {
          effectName: 'vertex-1611',
          listenTo: [
            'edge-2781'
          ],
          mappedTo: [
            'edge-451'
          ]
        },
        {
          effectName: 'vertex-1621',
          listenTo: [
            'edge-2791'
          ],
          mappedTo: [
            'edge-151',
            'edge-181',
            'edge-451'
          ]
        }
      ]
    },
    {
      fileName: 'effect-18',
      mappings: [
        {
          effectName: 'vertex-1631',
          listenTo: [
            'edge-2821'
          ],
          mappedTo: [
            'edge-2801',
            'edge-2811'
          ]
        },
        {
          effectName: 'vertex-1641',
          listenTo: [
            'edge-2851'
          ],
          mappedTo: [
            'edge-2831',
            'edge-2841'
          ]
        },
        {
          effectName: 'vertex-1651',
          listenTo: [
            'edge-2881'
          ],
          mappedTo: [
            'edge-2861',
            'edge-2871'
          ]
        },
        {
          effectName: 'vertex-1661',
          listenTo: [
            'edge-2901'
          ],
          mappedTo: [
            'edge-2891'
          ]
        },
        {
          effectName: 'vertex-1671',
          listenTo: [
            'edge-2891'
          ],
          mappedTo: [
            'edge-2911',
            'edge-2921'
          ]
        },
        {
          effectName: 'vertex-1681',
          listenTo: [
            'edge-2891'
          ],
          mappedTo: [
            'edge-2911'
          ]
        },
        {
          effectName: 'vertex-1691',
          listenTo: [
            'edge-541'
          ],
          mappedTo: [
            'edge-2931'
          ]
        },
        {
          effectName: 'vertex-1701',
          listenTo: [
            'edge-2961'
          ],
          mappedTo: [
            'edge-2941',
            'edge-2951'
          ]
        },
        {
          effectName: 'vertex-1711',
          listenTo: [
            'edge-2971'
          ],
          mappedTo: [
            'edge-451'
          ]
        }
      ]
    },
    {
      fileName: 'effect-19',
      mappings: [
        {
          effectName: 'vertex-1721',
          listenTo: [
            'edge-3001'
          ],
          mappedTo: [
            'edge-2981',
            'edge-2991'
          ]
        },
        {
          effectName: 'vertex-421',
          listenTo: [
            'edge-3011'
          ],
          mappedTo: [
            'edge-901'
          ]
        },
        {
          effectName: 'vertex-1731',
          listenTo: [
            'edge-3031'
          ],
          mappedTo: [
            'edge-771',
            'edge-3021'
          ]
        },
        {
          effectName: 'vertex-1741',
          listenTo: [
            'edge-3051'
          ],
          mappedTo: [
            'edge-741',
            'edge-3041'
          ]
        },
        {
          effectName: 'vertex-1751',
          listenTo: [
            'edge-3071'
          ],
          mappedTo: [
            'edge-51',
            'edge-3061'
          ]
        },
        {
          effectName: 'vertex-1761',
          listenTo: [
            'edge-3081'
          ],
          mappedTo: [
            'edge-51',
            'edge-3061'
          ]
        },
        {
          effectName: 'vertex-1771',
          listenTo: [
            'edge-3101'
          ],
          mappedTo: [
            'edge-801',
            'edge-3091'
          ]
        },
        {
          effectName: 'vertex-1781',
          listenTo: [
            'edge-3131'
          ],
          mappedTo: [
            'edge-3111',
            'edge-2411',
            'edge-3121'
          ]
        },
        {
          effectName: 'vertex-1791',
          listenTo: [
            'edge-3171'
          ],
          mappedTo: [
            'edge-3141',
            'edge-3151',
            'edge-2291',
            'edge-2301',
            'edge-3161'
          ]
        },
        {
          effectName: 'vertex-1801',
          listenTo: [
            'edge-3191'
          ],
          mappedTo: [
            'edge-3181'
          ]
        },
        {
          effectName: 'vertex-1811',
          listenTo: [
            'edge-3201'
          ],
          mappedTo: [
            'edge-1801'
          ]
        },
        {
          effectName: 'vertex-1821',
          listenTo: [
            'edge-3141'
          ],
          mappedTo: [
            'edge-2401',
            'edge-3211'
          ]
        },
        {
          effectName: 'vertex-1831',
          listenTo: [
            'edge-3241'
          ],
          mappedTo: [
            'edge-3221',
            'edge-3231'
          ]
        },
        {
          effectName: 'vertex-1841',
          listenTo: [
            'edge-3261'
          ],
          mappedTo: [
            'edge-3251',
            'edge-401',
            'edge-441'
          ]
        },
        {
          effectName: 'vertex-1851',
          listenTo: [
            'edge-3321'
          ],
          mappedTo: [
            'edge-1941',
            'edge-3271',
            'edge-3281',
            'edge-3291',
            'edge-3301',
            'edge-3311',
            'edge-2281'
          ]
        },
        {
          effectName: 'vertex-1861',
          listenTo: [
            'edge-3291'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-1871',
          listenTo: [
            'edge-3341'
          ],
          mappedTo: [
            'edge-3331'
          ]
        }
      ]
    },
    {
      fileName: 'effect-20',
      mappings: [
        {
          effectName: 'vertex-1881',
          listenTo: [
            'edge-3361'
          ],
          mappedTo: [
            'edge-3351'
          ]
        },
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3381'
          ],
          mappedTo: [
            'edge-3371',
            'edge-3191'
          ]
        },
        {
          effectName: 'vertex-1901',
          listenTo: [
            'edge-3391'
          ],
          mappedTo: [
            'edge-2621',
            'edge-941'
          ]
        }
      ]
    },
    {
      fileName: 'effect-21',
      mappings: [
        {
          effectName: 'vertex-1881',
          listenTo: [
            'edge-3401'
          ],
          mappedTo: [
            'edge-3351'
          ]
        },
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3381'
          ],
          mappedTo: [
            'edge-3371',
            'edge-3191',
            'edge-3411',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-1901',
          listenTo: [
            'edge-3411'
          ],
          mappedTo: [
            'edge-3421',
            'edge-941'
          ]
        }
      ]
    },
    {
      fileName: 'effect-22',
      mappings: [
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3431'
          ],
          mappedTo: [
            'edge-1541',
            'edge-2631',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-1911',
          listenTo: [
            'edge-3441'
          ],
          mappedTo: [
            'edge-1821'
          ]
        },
        {
          effectName: 'vertex-1921',
          listenTo: [
            'edge-3451'
          ],
          mappedTo: [
            'edge-1821'
          ]
        },
        {
          effectName: 'vertex-1931',
          listenTo: [
            'edge-3461'
          ],
          mappedTo: [
            'edge-1811'
          ]
        },
        {
          effectName: 'vertex-1941',
          listenTo: [
            'edge-3471'
          ],
          mappedTo: [
            'edge-3191',
            'edge-1831'
          ]
        }
      ]
    },
    {
      fileName: 'effect-23',
      mappings: [
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3491'
          ],
          mappedTo: [
            'edge-3481'
          ]
        },
        {
          effectName: 'vertex-1901',
          listenTo: [
            'edge-3501'
          ],
          mappedTo: [
            'edge-2551',
            'edge-941'
          ]
        }
      ]
    },
    {
      fileName: 'effect-24',
      mappings: [
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3521'
          ],
          mappedTo: [
            'edge-3511'
          ]
        },
        {
          effectName: 'vertex-1901',
          listenTo: [
            'edge-3161'
          ],
          mappedTo: [
            'edge-2651'
          ]
        }
      ]
    },
    {
      fileName: 'effect-25',
      mappings: [
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3541'
          ],
          mappedTo: [
            'edge-1541',
            'edge-2631',
            'edge-3531'
          ]
        },
        {
          effectName: 'vertex-1951',
          listenTo: [
            'edge-1521'
          ],
          mappedTo: [
            'edge-3551'
          ]
        },
        {
          effectName: 'vertex-1961',
          listenTo: [
            'edge-3581'
          ],
          mappedTo: [
            'edge-3561',
            'edge-3571'
          ]
        },
        {
          effectName: 'vertex-1971',
          listenTo: [
            'edge-3571'
          ],
          mappedTo: [
            'edge-3591',
            'edge-3601'
          ]
        },
        {
          effectName: 'vertex-1981',
          listenTo: [
            'edge-3591'
          ],
          mappedTo: [
            'edge-2361',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-1991',
          listenTo: [
            'edge-3601'
          ],
          mappedTo: [
            'edge-2381'
          ]
        },
        {
          effectName: 'vertex-2001',
          listenTo: [
            'edge-3611'
          ],
          mappedTo: [
            'edge-2381'
          ]
        },
        {
          effectName: 'vertex-1941',
          listenTo: [
            'edge-3621'
          ],
          mappedTo: [
            'edge-3191',
            'edge-1831'
          ]
        }
      ]
    },
    {
      fileName: 'effect-26',
      mappings: [
        {
          effectName: 'vertex-2011',
          listenTo: [
            'edge-3631'
          ],
          mappedTo: [
            'edge-3241'
          ]
        },
        {
          effectName: 'vertex-2021',
          listenTo: [
            'edge-3641'
          ],
          mappedTo: [
            'edge-371',
            'edge-2331'
          ]
        },
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3661'
          ],
          mappedTo: [
            'edge-3651'
          ]
        },
        {
          effectName: 'vertex-1901',
          listenTo: [
            'edge-3671'
          ],
          mappedTo: [
            'edge-2551',
            'edge-941'
          ]
        }
      ]
    },
    {
      fileName: 'effect-27',
      mappings: [
        {
          effectName: 'vertex-2021',
          listenTo: [
            'edge-3681'
          ],
          mappedTo: [
            'edge-2271'
          ]
        },
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3691'
          ],
          mappedTo: [
            'edge-451',
            'edge-941'
          ]
        }
      ]
    },
    {
      fileName: 'effect-28',
      mappings: [
        {
          effectName: 'vertex-2021',
          listenTo: [
            'edge-3701'
          ],
          mappedTo: [
            'edge-2271'
          ]
        }
      ]
    },
    {
      fileName: 'effect-29',
      mappings: [
        {
          effectName: 'vertex-2031',
          listenTo: [
            'edge-3721'
          ],
          mappedTo: [
            'edge-3711',
            'edge-2661'
          ]
        },
        {
          effectName: 'vertex-2041',
          listenTo: [
            'edge-3741'
          ],
          mappedTo: [
            'edge-3731',
            'edge-2661'
          ]
        },
        {
          effectName: 'vertex-2051',
          listenTo: [
            'edge-3761'
          ],
          mappedTo: [
            'edge-3731',
            'edge-3751',
            'edge-2661'
          ]
        },
        {
          effectName: 'vertex-2061',
          listenTo: [
            'edge-3711'
          ],
          mappedTo: [
            'edge-3771',
            'edge-2461'
          ]
        },
        {
          effectName: 'vertex-2071',
          listenTo: [
            'edge-3731'
          ],
          mappedTo: [
            'edge-3771',
            'edge-2461'
          ]
        }
      ]
    },
    {
      fileName: 'effect-30',
      mappings: [
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3781'
          ],
          mappedTo: [
            'edge-2261'
          ]
        }
      ]
    },
    {
      fileName: 'effect-31',
      mappings: [
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3791'
          ],
          mappedTo: [
            'edge-3351'
          ]
        },
        {
          effectName: 'vertex-2081',
          listenTo: [
            'edge-3381'
          ],
          mappedTo: [
            'edge-3371',
            'edge-3801',
            'edge-3191'
          ]
        },
        {
          effectName: 'vertex-2091',
          listenTo: [
            'edge-3801'
          ],
          mappedTo: [
            'edge-941'
          ]
        }
      ]
    },
    {
      fileName: 'effect-32',
      mappings: [
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3811'
          ],
          mappedTo: [
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-2101',
          listenTo: [
            'edge-3831'
          ],
          mappedTo: [
            'edge-3821',
            'edge-2261'
          ]
        },
        {
          effectName: 'vertex-2071',
          listenTo: [
            'edge-3821'
          ],
          mappedTo: [
            'edge-3771',
            'edge-3841'
          ]
        },
        {
          effectName: 'vertex-2111',
          listenTo: [
            'edge-821'
          ],
          mappedTo: [
            'edge-941',
            'edge-2261'
          ]
        },
        {
          effectName: 'vertex-2121',
          listenTo: [
            'edge-831'
          ],
          mappedTo: [
            'edge-2261'
          ]
        }
      ]
    },
    {
      fileName: 'effect-33',
      mappings: [
        {
          effectName: 'vertex-1891',
          listenTo: [
            'edge-3851'
          ],
          mappedTo: [
            'edge-2641',
            'edge-3531'
          ]
        },
        {
          effectName: 'vertex-2131',
          listenTo: [
            'edge-3861'
          ],
          mappedTo: [
            'edge-3551'
          ]
        },
        {
          effectName: 'vertex-1961',
          listenTo: [
            'edge-3581'
          ],
          mappedTo: [
            'edge-3561',
            'edge-3571'
          ]
        },
        {
          effectName: 'vertex-1971',
          listenTo: [
            'edge-3571'
          ],
          mappedTo: [
            'edge-3591',
            'edge-3601'
          ]
        },
        {
          effectName: 'vertex-1981',
          listenTo: [
            'edge-3591'
          ],
          mappedTo: [
            'edge-2361',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-1991',
          listenTo: [
            'edge-3601'
          ],
          mappedTo: [
            'edge-2381'
          ]
        },
        {
          effectName: 'vertex-2001',
          listenTo: [
            'edge-3611'
          ],
          mappedTo: [
            'edge-2381'
          ]
        },
        {
          effectName: 'vertex-2141',
          listenTo: [
            'edge-3881'
          ],
          mappedTo: [
            'edge-3871',
            'edge-2261'
          ]
        }
      ]
    },
    {
      fileName: 'effect-34',
      mappings: [
        {
          effectName: 'vertex-2151',
          listenTo: [
            'edge-3891'
          ],
          mappedTo: [
            'edge-151'
          ]
        },
        {
          effectName: 'vertex-2161',
          listenTo: [
            'edge-3901'
          ],
          mappedTo: [
            'edge-181'
          ]
        }
      ]
    },
    {
      fileName: 'effect-35',
      mappings: [
        {
          effectName: 'vertex-2171',
          listenTo: [
            'edge-3941'
          ],
          mappedTo: [
            'edge-3911',
            'edge-3921',
            'edge-3931'
          ]
        },
        {
          effectName: 'vertex-2181',
          listenTo: [
            'edge-3921'
          ],
          mappedTo: [
            'edge-3951'
          ]
        }
      ]
    },
    {
      fileName: 'effect-36',
      mappings: [
        {
          effectName: 'vertex-2191',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3841'
          ]
        },
        {
          effectName: 'vertex-2201',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3311',
            'edge-3301'
          ]
        },
        {
          effectName: 'vertex-2211',
          listenTo: [
            'edge-4061'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2111',
            'edge-411',
            'edge-3961',
            'edge-1811',
            'edge-3971',
            'edge-3981',
            'edge-1821',
            'edge-3991',
            'edge-4001',
            'edge-4011',
            'edge-4021',
            'edge-1381',
            'edge-1361',
            'edge-531',
            'edge-541',
            'edge-4031',
            'edge-4041',
            'edge-4051',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-2221',
          listenTo: [
            'edge-2091'
          ],
          mappedTo: [
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2231',
          listenTo: [
            'edge-4011'
          ],
          mappedTo: [
            'edge-4081'
          ]
        },
        {
          effectName: 'vertex-2241',
          listenTo: [
            'edge-3961'
          ],
          mappedTo: [
            'edge-4091'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        },
        {
          effectName: 'vertex-2271',
          listenTo: [
            'edge-4131'
          ],
          mappedTo: [
            'edge-4121'
          ]
        },
        {
          effectName: 'vertex-2281',
          listenTo: [
            'edge-4131'
          ],
          mappedTo: [
            'edge-4141',
            'edge-4151',
            'edge-4161',
            'edge-1751'
          ]
        },
        {
          effectName: 'vertex-2291',
          listenTo: [
            'edge-3351'
          ],
          mappedTo: [
            'edge-4121',
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2301',
          listenTo: [
            'edge-4171'
          ],
          mappedTo: [
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2311',
          listenTo: [
            'edge-1441'
          ],
          mappedTo: [
            'edge-2821'
          ]
        },
        {
          effectName: 'vertex-2321',
          listenTo: [
            'edge-2801'
          ],
          mappedTo: [
            'edge-4181'
          ]
        },
        {
          effectName: 'vertex-2331',
          listenTo: [
            'edge-541'
          ],
          mappedTo: [
            'edge-4191'
          ]
        },
        {
          effectName: 'vertex-2341',
          listenTo: [
            'edge-121'
          ],
          mappedTo: [
            'edge-161',
            'edge-581'
          ]
        },
        {
          effectName: 'vertex-2351',
          listenTo: [
            'edge-391'
          ],
          mappedTo: [
            'edge-581'
          ]
        },
        {
          effectName: 'vertex-2361',
          listenTo: [
            'edge-541'
          ],
          mappedTo: [
            'edge-861'
          ]
        }
      ]
    },
    {
      fileName: 'effect-37',
      mappings: [
        {
          effectName: 'vertex-2371',
          listenTo: [
            'edge-4241'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2151',
            'edge-411',
            'edge-4201',
            'edge-4211',
            'edge-3961',
            'edge-1811',
            'edge-3971',
            'edge-3981',
            'edge-1821',
            'edge-3991',
            'edge-4001',
            'edge-4221',
            'edge-4231',
            'edge-4011',
            'edge-4021',
            'edge-4031',
            'edge-4041',
            'edge-4051',
            'edge-941',
            'edge-1731',
            'edge-3771',
            'edge-3841'
          ]
        },
        {
          effectName: 'vertex-2381',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3771',
            'edge-3841'
          ]
        },
        {
          effectName: 'vertex-2391',
          listenTo: [
            'edge-4201'
          ],
          mappedTo: [
            'edge-4251',
            'edge-4211'
          ]
        },
        {
          effectName: 'vertex-2401',
          listenTo: [
            'edge-4211'
          ],
          mappedTo: [
            'edge-4261',
            'edge-2381'
          ]
        },
        {
          effectName: 'vertex-2411',
          listenTo: [
            'edge-4221'
          ],
          mappedTo: [
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2421',
          listenTo: [
            'edge-4281'
          ],
          mappedTo: [
            'edge-4271'
          ]
        },
        {
          effectName: 'vertex-2221',
          listenTo: [
            'edge-2091'
          ],
          mappedTo: [
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2231',
          listenTo: [
            'edge-4011'
          ],
          mappedTo: [
            'edge-4081'
          ]
        },
        {
          effectName: 'vertex-2241',
          listenTo: [
            'edge-3961'
          ],
          mappedTo: [
            'edge-4091'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        }
      ]
    },
    {
      fileName: 'effect-38',
      mappings: [
        {
          effectName: 'vertex-2191',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3841'
          ]
        },
        {
          effectName: 'vertex-2431',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3311',
            'edge-3301'
          ]
        },
        {
          effectName: 'vertex-2441',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2451',
          listenTo: [
            'edge-411'
          ],
          mappedTo: [
            'edge-351',
            'edge-3191'
          ]
        },
        {
          effectName: 'vertex-2461',
          listenTo: [
            'edge-4321'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2111',
            'edge-2091',
            'edge-371',
            'edge-351',
            'edge-3971',
            'edge-3981',
            'edge-1821',
            'edge-3991',
            'edge-4001',
            'edge-4291',
            'edge-4301',
            'edge-4221',
            'edge-4311'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2411',
          listenTo: [
            'edge-4221'
          ],
          mappedTo: [
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2471',
          listenTo: [
            'edge-4291'
          ],
          mappedTo: [
            'edge-4331'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        },
        {
          effectName: 'vertex-2301',
          listenTo: [
            'edge-4171'
          ],
          mappedTo: [
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2481',
          listenTo: [
            'edge-3751'
          ],
          mappedTo: [
            'edge-4121'
          ]
        },
        {
          effectName: 'vertex-2271',
          listenTo: [
            'edge-4131'
          ],
          mappedTo: [
            'edge-4121'
          ]
        },
        {
          effectName: 'vertex-2291',
          listenTo: [
            'edge-3351'
          ],
          mappedTo: [
            'edge-4121',
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2321',
          listenTo: [
            'edge-351'
          ],
          mappedTo: [
            'edge-4181'
          ]
        },
        {
          effectName: 'vertex-2491',
          listenTo: [
            'edge-351'
          ],
          mappedTo: [
            'edge-4341',
            'edge-4351'
          ]
        }
      ]
    },
    {
      fileName: 'effect-39',
      mappings: [
        {
          effectName: 'vertex-2191',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3841'
          ]
        },
        {
          effectName: 'vertex-2201',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3311',
            'edge-3301'
          ]
        },
        {
          effectName: 'vertex-2441',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2501',
          listenTo: [
            'edge-4361'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2111',
            'edge-411',
            'edge-1381',
            'edge-1361',
            'edge-3991',
            'edge-4001',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-2511',
          listenTo: [
            'edge-4281'
          ],
          mappedTo: [
            'edge-4371',
            'edge-4331'
          ]
        },
        {
          effectName: 'vertex-2311',
          listenTo: [
            'edge-1441'
          ],
          mappedTo: [
            'edge-2821'
          ]
        },
        {
          effectName: 'vertex-2321',
          listenTo: [
            'edge-2801'
          ],
          mappedTo: [
            'edge-4181'
          ]
        },
        {
          effectName: 'vertex-2521',
          listenTo: [
            'edge-4401'
          ],
          mappedTo: [
            'edge-4381',
            'edge-4391'
          ]
        },
        {
          effectName: 'vertex-2531',
          listenTo: [
            'edge-4381'
          ],
          mappedTo: [
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-2291',
          listenTo: [
            'edge-3351'
          ],
          mappedTo: [
            'edge-4121',
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2301',
          listenTo: [
            'edge-4171'
          ],
          mappedTo: [
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2271',
          listenTo: [
            'edge-4131'
          ],
          mappedTo: [
            'edge-4121'
          ]
        },
        {
          effectName: 'vertex-2281',
          listenTo: [
            'edge-4131'
          ],
          mappedTo: [
            'edge-4141',
            'edge-4161'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        }
      ]
    },
    {
      fileName: 'effect-40',
      mappings: [
        {
          effectName: 'vertex-2191',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3841'
          ]
        },
        {
          effectName: 'vertex-2541',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2551',
          listenTo: [
            'edge-1811'
          ],
          mappedTo: [
            'edge-3301',
            'edge-4411',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2561',
          listenTo: [
            'edge-401'
          ],
          mappedTo: [
            'edge-4421',
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2571',
          listenTo: [
            'edge-4211'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2581',
          listenTo: [
            'edge-4431'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2151',
            'edge-411',
            'edge-3271',
            'edge-3281',
            'edge-3961',
            'edge-1811',
            'edge-3971',
            'edge-3981',
            'edge-1821',
            'edge-3991',
            'edge-4001',
            'edge-4011',
            'edge-4021',
            'edge-4031',
            'edge-4041',
            'edge-4051',
            'edge-4201',
            'edge-4211'
          ]
        },
        {
          effectName: 'vertex-2231',
          listenTo: [
            'edge-4011'
          ],
          mappedTo: [
            'edge-4081'
          ]
        },
        {
          effectName: 'vertex-2291',
          listenTo: [
            'edge-3351'
          ],
          mappedTo: [
            'edge-4121'
          ]
        },
        {
          effectName: 'vertex-2301',
          listenTo: [
            'edge-4171'
          ],
          mappedTo: [
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2591',
          listenTo: [
            'edge-1831'
          ],
          mappedTo: [
            'edge-4441',
            'edge-3191'
          ]
        },
        {
          effectName: 'vertex-2601',
          listenTo: [
            'edge-2131'
          ],
          mappedTo: [
            'edge-1381',
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2611',
          listenTo: [
            'edge-3271'
          ],
          mappedTo: [
            'edge-4451'
          ]
        },
        {
          effectName: 'vertex-2621',
          listenTo: [
            'edge-3281'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2631',
          listenTo: [
            'edge-3281'
          ],
          mappedTo: [
            'edge-2311'
          ]
        },
        {
          effectName: 'vertex-2641',
          listenTo: [
            'edge-4461'
          ],
          mappedTo: [
            'edge-2381'
          ]
        },
        {
          effectName: 'vertex-2651',
          listenTo: [
            'edge-411'
          ],
          mappedTo: [
            'edge-4471'
          ]
        },
        {
          effectName: 'vertex-2661',
          listenTo: [
            'edge-411'
          ],
          mappedTo: [
            'edge-401',
            'edge-1841'
          ]
        },
        {
          effectName: 'vertex-2241',
          listenTo: [
            'edge-3961'
          ],
          mappedTo: [
            'edge-4091'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        },
        {
          effectName: 'vertex-2311',
          listenTo: [
            'edge-1441'
          ],
          mappedTo: [
            'edge-2821'
          ]
        },
        {
          effectName: 'vertex-2321',
          listenTo: [
            'edge-2801'
          ],
          mappedTo: [
            'edge-4181'
          ]
        },
        {
          effectName: 'vertex-2361',
          listenTo: [
            'edge-541'
          ],
          mappedTo: [
            'edge-861'
          ]
        },
        {
          effectName: 'vertex-2671',
          listenTo: [
            'edge-121'
          ],
          mappedTo: [
            'edge-161',
            'edge-581'
          ]
        },
        {
          effectName: 'vertex-2681',
          listenTo: [
            'edge-4491'
          ],
          mappedTo: [
            'edge-1941',
            'edge-4481',
            'edge-3301',
            'edge-3311',
            'edge-2281'
          ]
        },
        {
          effectName: 'vertex-2691',
          listenTo: [
            'edge-4481'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2391',
          listenTo: [
            'edge-4201'
          ],
          mappedTo: [
            'edge-4251',
            'edge-4211'
          ]
        }
      ]
    },
    {
      fileName: 'effect-41',
      mappings: [
        {
          effectName: 'vertex-471',
          listenTo: [
            'edge-1011'
          ],
          mappedTo: [
            'edge-4501'
          ]
        },
        {
          effectName: 'vertex-2701',
          listenTo: [
            'edge-4551'
          ],
          mappedTo: [
            'edge-1941',
            'edge-4511',
            'edge-4521',
            'edge-3941',
            'edge-4531',
            'edge-4541'
          ]
        },
        {
          effectName: 'vertex-2711',
          listenTo: [
            'edge-4501'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2051',
            'edge-2071',
            'edge-4561',
            'edge-3171',
            'edge-3161',
            'edge-2181',
            'edge-411',
            'edge-3081',
            'edge-31',
            'edge-3061',
            'edge-3961',
            'edge-1811',
            'edge-3971',
            'edge-3981',
            'edge-1821',
            'edge-3991',
            'edge-4001',
            'edge-4011',
            'edge-4021',
            'edge-1411',
            'edge-1391',
            'edge-1401',
            'edge-4221',
            'edge-4231',
            'edge-4031',
            'edge-4041',
            'edge-4051',
            'edge-4571'
          ]
        },
        {
          effectName: 'vertex-2721',
          listenTo: [
            'edge-4541'
          ],
          mappedTo: [
            'edge-941',
            'edge-4501'
          ]
        },
        {
          effectName: 'vertex-2241',
          listenTo: [
            'edge-3961'
          ],
          mappedTo: [
            'edge-4091'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        },
        {
          effectName: 'vertex-2231',
          listenTo: [
            'edge-4011'
          ],
          mappedTo: [
            'edge-4081'
          ]
        },
        {
          effectName: 'vertex-2411',
          listenTo: [
            'edge-4221'
          ],
          mappedTo: [
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2731',
          listenTo: [
            'edge-3921'
          ],
          mappedTo: [
            'edge-2381',
            'edge-4531'
          ]
        },
        {
          effectName: 'vertex-2741',
          listenTo: [
            'edge-4571'
          ],
          mappedTo: [
            'edge-3841',
            'edge-941'
          ]
        }
      ]
    },
    {
      fileName: 'effect-42',
      mappings: [
        {
          effectName: 'vertex-2751',
          listenTo: [
            'edge-4581'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2151',
            'edge-411',
            'edge-3271',
            'edge-3281',
            'edge-3961',
            'edge-1811',
            'edge-3971',
            'edge-3981',
            'edge-1821',
            'edge-3991',
            'edge-4001',
            'edge-4011',
            'edge-4021',
            'edge-4031',
            'edge-4041',
            'edge-4051',
            'edge-2311'
          ]
        },
        {
          effectName: 'vertex-2231',
          listenTo: [
            'edge-4011'
          ],
          mappedTo: [
            'edge-4081'
          ]
        },
        {
          effectName: 'vertex-2761',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3311',
            'edge-3301'
          ]
        },
        {
          effectName: 'vertex-2771',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2541',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2781',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2791',
          listenTo: [
            'edge-401'
          ],
          mappedTo: [
            'edge-1731'
          ]
        },
        {
          effectName: 'vertex-2291',
          listenTo: [
            'edge-3351'
          ],
          mappedTo: [
            'edge-4121'
          ]
        },
        {
          effectName: 'vertex-2301',
          listenTo: [
            'edge-4171'
          ],
          mappedTo: [
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2591',
          listenTo: [
            'edge-1831'
          ],
          mappedTo: [
            'edge-4441',
            'edge-3191'
          ]
        },
        {
          effectName: 'vertex-2801',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-4411',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2601',
          listenTo: [
            'edge-2131'
          ],
          mappedTo: [
            'edge-1381',
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2611',
          listenTo: [
            'edge-3271'
          ],
          mappedTo: [
            'edge-4451'
          ]
        },
        {
          effectName: 'vertex-2621',
          listenTo: [
            'edge-3281'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2811',
          listenTo: [
            'edge-3261'
          ],
          mappedTo: [
            'edge-3251',
            'edge-1801'
          ]
        },
        {
          effectName: 'vertex-2641',
          listenTo: [
            'edge-4461'
          ],
          mappedTo: [
            'edge-2381'
          ]
        },
        {
          effectName: 'vertex-2651',
          listenTo: [
            'edge-411'
          ],
          mappedTo: [
            'edge-4471'
          ]
        },
        {
          effectName: 'vertex-2241',
          listenTo: [
            'edge-3961'
          ],
          mappedTo: [
            'edge-4091'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        },
        {
          effectName: 'vertex-2311',
          listenTo: [
            'edge-1441'
          ],
          mappedTo: [
            'edge-2821'
          ]
        },
        {
          effectName: 'vertex-2321',
          listenTo: [
            'edge-2801'
          ],
          mappedTo: [
            'edge-4181'
          ]
        },
        {
          effectName: 'vertex-2821',
          listenTo: [
            'edge-2911'
          ],
          mappedTo: [
            'edge-401'
          ]
        },
        {
          effectName: 'vertex-2671',
          listenTo: [
            'edge-121'
          ],
          mappedTo: [
            'edge-161',
            'edge-581'
          ]
        }
      ]
    },
    {
      fileName: 'effect-43',
      mappings: [
        {
          effectName: 'vertex-2831',
          listenTo: [
            'edge-4591'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2121',
            'edge-411',
            'edge-3961',
            'edge-1811',
            'edge-3971',
            'edge-3981',
            'edge-1821',
            'edge-3991',
            'edge-4001',
            'edge-4011',
            'edge-4021',
            'edge-4031',
            'edge-4041',
            'edge-4051',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-2221',
          listenTo: [
            'edge-2091'
          ],
          mappedTo: [
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2231',
          listenTo: [
            'edge-4011'
          ],
          mappedTo: [
            'edge-4081'
          ]
        },
        {
          effectName: 'vertex-2241',
          listenTo: [
            'edge-3961'
          ],
          mappedTo: [
            'edge-4091'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        }
      ]
    },
    {
      fileName: 'effect-44',
      mappings: [
        {
          effectName: 'vertex-2841',
          listenTo: [
            'edge-4611'
          ],
          mappedTo: [
            'edge-1941',
            'edge-3011',
            'edge-931',
            'edge-4011',
            'edge-4021',
            'edge-4601'
          ]
        },
        {
          effectName: 'vertex-2851',
          listenTo: [
            'edge-3511'
          ],
          mappedTo: [
            'edge-1941',
            'edge-4621',
            'edge-4631',
            'edge-3071',
            'edge-31',
            'edge-3061',
            'edge-2041',
            'edge-2071',
            'edge-3171',
            'edge-3161',
            'edge-511',
            'edge-501',
            'edge-4031',
            'edge-4041',
            'edge-4051',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-2861',
          listenTo: [
            'edge-4601'
          ],
          mappedTo: [
            'edge-941',
            'edge-4641',
            'edge-3311',
            'edge-3511'
          ]
        },
        {
          effectName: 'vertex-2871',
          listenTo: [
            'edge-3481'
          ],
          mappedTo: [
            'edge-2981',
            'edge-4651',
            'edge-2991'
          ]
        },
        {
          effectName: 'vertex-2881',
          listenTo: [
            'edge-4681'
          ],
          mappedTo: [
            'edge-4661',
            'edge-4671'
          ]
        },
        {
          effectName: 'vertex-2891',
          listenTo: [
            'edge-4661'
          ],
          mappedTo: [
            'edge-2381'
          ]
        },
        {
          effectName: 'vertex-2901',
          listenTo: [
            'edge-4681'
          ],
          mappedTo: [
            'edge-2151',
            'edge-4141',
            'edge-4691',
            'edge-4701',
            'edge-4711',
            'edge-4161'
          ]
        },
        {
          effectName: 'vertex-2601',
          listenTo: [
            'edge-411'
          ],
          mappedTo: [
            'edge-3971',
            'edge-3991',
            'edge-3961',
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2911',
          listenTo: [
            'edge-2131'
          ],
          mappedTo: [
            'edge-1361',
            'edge-4721'
          ]
        },
        {
          effectName: 'vertex-2921',
          listenTo: [
            'edge-3481'
          ],
          mappedTo: [
            'edge-4731',
            'edge-4741'
          ]
        },
        {
          effectName: 'vertex-2931',
          listenTo: [
            'edge-4731'
          ],
          mappedTo: [
            'edge-4751',
            'edge-1921'
          ]
        },
        {
          effectName: 'vertex-2941',
          listenTo: [
            'edge-4231'
          ],
          mappedTo: [
            'edge-21'
          ]
        },
        {
          effectName: 'vertex-2791',
          listenTo: [
            'edge-401'
          ],
          mappedTo: [
            'edge-1731'
          ]
        },
        {
          effectName: 'vertex-2951',
          listenTo: [
            'edge-351'
          ],
          mappedTo: [
            'edge-411',
            'edge-3301',
            'edge-3311',
            'edge-4761'
          ]
        },
        {
          effectName: 'vertex-2961',
          listenTo: [
            'edge-2991'
          ],
          mappedTo: [
            'edge-411',
            'edge-4761',
            'edge-351',
            'edge-3301',
            'edge-3311',
            'edge-4771'
          ]
        },
        {
          effectName: 'vertex-2971',
          listenTo: [
            'edge-4791'
          ],
          mappedTo: [
            'edge-4781'
          ]
        },
        {
          effectName: 'vertex-2431',
          listenTo: [
            'edge-4671'
          ],
          mappedTo: [
            'edge-3311',
            'edge-3301'
          ]
        },
        {
          effectName: 'vertex-2981',
          listenTo: [
            'edge-411'
          ],
          mappedTo: [
            'edge-4801',
            'edge-3751'
          ]
        },
        {
          effectName: 'vertex-2271',
          listenTo: [
            'edge-4131'
          ],
          mappedTo: [
            'edge-4121'
          ]
        },
        {
          effectName: 'vertex-2281',
          listenTo: [
            'edge-4131'
          ],
          mappedTo: [
            'edge-4141',
            'edge-4151',
            'edge-4161',
            'edge-1751'
          ]
        },
        {
          effectName: 'vertex-2291',
          listenTo: [
            'edge-3351'
          ],
          mappedTo: [
            'edge-4121',
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2301',
          listenTo: [
            'edge-4171'
          ],
          mappedTo: [
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2781',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2451',
          listenTo: [
            'edge-411'
          ],
          mappedTo: [
            'edge-3191'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        },
        {
          effectName: 'vertex-2241',
          listenTo: [
            'edge-3961'
          ],
          mappedTo: [
            'edge-4091'
          ]
        },
        {
          effectName: 'vertex-2991',
          listenTo: [
            'edge-4641'
          ],
          mappedTo: [
            'edge-4811'
          ]
        },
        {
          effectName: 'vertex-3001',
          listenTo: [
            'edge-4621'
          ],
          mappedTo: [
            'edge-4821',
            'edge-2611',
            'edge-4631'
          ]
        },
        {
          effectName: 'vertex-3011',
          listenTo: [
            'edge-4821'
          ],
          mappedTo: [
            'edge-2441'
          ]
        }
      ]
    },
    {
      fileName: 'effect-45',
      mappings: [
        {
          effectName: 'vertex-3021',
          listenTo: [
            'edge-4831'
          ],
          mappedTo: [
            'edge-3301'
          ]
        },
        {
          effectName: 'vertex-2671',
          listenTo: [
            'edge-121'
          ],
          mappedTo: [
            'edge-161',
            'edge-581'
          ]
        },
        {
          effectName: 'vertex-2361',
          listenTo: [
            'edge-541'
          ],
          mappedTo: [
            'edge-861'
          ]
        },
        {
          effectName: 'vertex-3031',
          listenTo: [
            'edge-4831'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2151',
            'edge-411',
            'edge-3961',
            'edge-1811',
            'edge-3971',
            'edge-3981',
            'edge-1821',
            'edge-3991',
            'edge-4001',
            'edge-4011',
            'edge-4021',
            'edge-1411',
            'edge-1391',
            'edge-1401',
            'edge-4221',
            'edge-4231',
            'edge-4031',
            'edge-4041',
            'edge-4051',
            'edge-1731',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2231',
          listenTo: [
            'edge-4011'
          ],
          mappedTo: [
            'edge-4081'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        },
        {
          effectName: 'vertex-2791',
          listenTo: [
            'edge-401'
          ],
          mappedTo: [
            'edge-1731'
          ]
        },
        {
          effectName: 'vertex-2801',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-4411',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2611',
          listenTo: [
            'edge-3271'
          ],
          mappedTo: [
            'edge-4451'
          ]
        },
        {
          effectName: 'vertex-3041',
          listenTo: [
            'edge-121'
          ],
          mappedTo: [
            'edge-4841'
          ]
        },
        {
          effectName: 'vertex-3051',
          listenTo: [
            'edge-4851'
          ],
          mappedTo: [
            'edge-181',
            'edge-441'
          ]
        },
        {
          effectName: 'vertex-2331',
          listenTo: [
            'edge-541'
          ],
          mappedTo: [
            'edge-4191'
          ]
        },
        {
          effectName: 'vertex-2651',
          listenTo: [
            'edge-411'
          ],
          mappedTo: [
            'edge-4471'
          ]
        },
        {
          effectName: 'vertex-2821',
          listenTo: [
            'edge-2911'
          ],
          mappedTo: [
            'edge-401'
          ]
        },
        {
          effectName: 'vertex-2411',
          listenTo: [
            'edge-4221'
          ],
          mappedTo: [
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2421',
          listenTo: [
            'edge-4281'
          ],
          mappedTo: [
            'edge-4271'
          ]
        },
        {
          effectName: 'vertex-3061',
          listenTo: [
            'edge-4861'
          ],
          mappedTo: [
            'edge-1941',
            'edge-3291',
            'edge-3301',
            'edge-3311',
            'edge-2281',
            'edge-1541',
            'edge-1521'
          ]
        }
      ]
    },
    {
      fileName: 'effect-46',
      mappings: [
        {
          effectName: 'vertex-2701',
          listenTo: [
            'edge-4931'
          ],
          mappedTo: [
            'edge-1941',
            'edge-2521',
            'edge-2471',
            'edge-4871',
            'edge-4881',
            'edge-31',
            'edge-3061',
            'edge-4891',
            'edge-4301',
            'edge-4901',
            'edge-4911',
            'edge-4011',
            'edge-4021',
            'edge-4031',
            'edge-4051',
            'edge-4921',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-3071',
          listenTo: [
            'edge-4921'
          ],
          mappedTo: [
            'edge-3771',
            'edge-3841'
          ]
        },
        {
          effectName: 'vertex-741',
          listenTo: [
            'edge-91'
          ],
          mappedTo: [
            'edge-1721'
          ]
        },
        {
          effectName: 'vertex-881',
          listenTo: [
            'edge-91'
          ],
          mappedTo: [
            'edge-1911'
          ]
        },
        {
          effectName: 'vertex-3081',
          listenTo: [
            'edge-91'
          ],
          mappedTo: [
            'edge-4871'
          ]
        },
        {
          effectName: 'vertex-3091',
          listenTo: [
            'edge-3711'
          ],
          mappedTo: [
            'edge-1331'
          ]
        },
        {
          effectName: 'vertex-2231',
          listenTo: [
            'edge-4011'
          ],
          mappedTo: [
            'edge-4081'
          ]
        },
        {
          effectName: 'vertex-3101',
          listenTo: [
            'edge-4961'
          ],
          mappedTo: [
            'edge-4941',
            'edge-4311',
            'edge-4301',
            'edge-4811',
            'edge-4951'
          ]
        },
        {
          effectName: 'vertex-3111',
          listenTo: [
            'edge-4881'
          ],
          mappedTo: [
            'edge-51',
            'edge-3061'
          ]
        },
        {
          effectName: 'vertex-1721',
          listenTo: [
            'edge-4901'
          ],
          mappedTo: [
            'edge-2981'
          ]
        },
        {
          effectName: 'vertex-3121',
          listenTo: [
            'edge-4681'
          ],
          mappedTo: [
            'edge-3311',
            'edge-4911'
          ]
        },
        {
          effectName: 'vertex-2271',
          listenTo: [
            'edge-4131'
          ],
          mappedTo: [
            'edge-4121'
          ]
        },
        {
          effectName: 'vertex-2281',
          listenTo: [
            'edge-4131'
          ],
          mappedTo: [
            'edge-4141',
            'edge-4151',
            'edge-4161',
            'edge-1751'
          ]
        },
        {
          effectName: 'vertex-2291',
          listenTo: [
            'edge-3351'
          ],
          mappedTo: [
            'edge-4121',
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2301',
          listenTo: [
            'edge-4171'
          ],
          mappedTo: [
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2791',
          listenTo: [
            'edge-401'
          ],
          mappedTo: [
            'edge-1731'
          ]
        },
        {
          effectName: 'vertex-2781',
          listenTo: [
            'edge-351'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        }
      ]
    },
    {
      fileName: 'effect-47',
      mappings: [
        {
          effectName: 'vertex-3131',
          listenTo: [
            'edge-4981'
          ],
          mappedTo: [
            'edge-1941',
            'edge-4971',
            'edge-4811',
            'edge-1931',
            'edge-1391',
            'edge-2151',
            'edge-411',
            'edge-3961',
            'edge-1811',
            'edge-3971',
            'edge-3981',
            'edge-1821',
            'edge-3991',
            'edge-4001',
            'edge-4011',
            'edge-4021',
            'edge-4031',
            'edge-4041',
            'edge-4051',
            'edge-941'
          ]
        },
        {
          effectName: 'vertex-2231',
          listenTo: [
            'edge-4011'
          ],
          mappedTo: [
            'edge-4081'
          ]
        },
        {
          effectName: 'vertex-2541',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2781',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2291',
          listenTo: [
            'edge-3351'
          ],
          mappedTo: [
            'edge-4121'
          ]
        },
        {
          effectName: 'vertex-2301',
          listenTo: [
            'edge-4171'
          ],
          mappedTo: [
            'edge-3381'
          ]
        },
        {
          effectName: 'vertex-2791',
          listenTo: [
            'edge-401'
          ],
          mappedTo: [
            'edge-1731'
          ]
        },
        {
          effectName: 'vertex-2591',
          listenTo: [
            'edge-1831'
          ],
          mappedTo: [
            'edge-4441',
            'edge-3191'
          ]
        },
        {
          effectName: 'vertex-2801',
          listenTo: [
            'edge-1731'
          ],
          mappedTo: [
            'edge-3301',
            'edge-4411',
            'edge-3311'
          ]
        },
        {
          effectName: 'vertex-2601',
          listenTo: [
            'edge-2131'
          ],
          mappedTo: [
            'edge-1381',
            'edge-4071'
          ]
        },
        {
          effectName: 'vertex-2241',
          listenTo: [
            'edge-3961'
          ],
          mappedTo: [
            'edge-4091'
          ]
        },
        {
          effectName: 'vertex-2251',
          listenTo: [
            'edge-3971'
          ],
          mappedTo: [
            'edge-4101'
          ]
        },
        {
          effectName: 'vertex-2261',
          listenTo: [
            'edge-3991'
          ],
          mappedTo: [
            'edge-4111'
          ]
        },
        {
          effectName: 'vertex-3141',
          listenTo: [
            'edge-3201'
          ],
          mappedTo: [
            'edge-1801'
          ]
        },
        {
          effectName: 'vertex-3151',
          listenTo: [
            'edge-4971'
          ],
          mappedTo: [
            'edge-4641'
          ]
        },
        {
          effectName: 'vertex-3161',
          listenTo: [
            'edge-4641'
          ],
          mappedTo: [
            'edge-4811'
          ]
        }
      ]
    },
    {
      fileName: 'effect-48',
      mappings: [
        {
          effectName: 'vertex-3171',
          listenTo: [
            'edge-4031'
          ],
          mappedTo: [
            'edge-4041',
            'edge-4051'
          ]
        },
        {
          effectName: 'vertex-3181',
          listenTo: [
            'edge-4041'
          ],
          mappedTo: [
            'edge-4991',
            'edge-5001',
            'edge-1881'
          ]
        }
      ]
    },
    {
      fileName: 'effect-49',
      mappings: [
        {
          effectName: 'vertex-3191',
          listenTo: [
            'edge-5021'
          ],
          mappedTo: [
            'edge-5011'
          ]
        },
        {
          effectName: 'vertex-3201',
          listenTo: [
            'edge-5011'
          ],
          mappedTo: [
            'edge-5031',
            'edge-5041',
            'edge-5051'
          ]
        },
        {
          effectName: 'vertex-3211',
          listenTo: [
            'edge-5081'
          ],
          mappedTo: [
            'edge-5061',
            'edge-5071'
          ]
        },
        {
          effectName: 'vertex-3221',
          listenTo: [
            'edge-5061'
          ],
          mappedTo: [
            'edge-5091',
            'edge-5101'
          ]
        }
      ]
    },
    {
      fileName: 'effect-50',
      mappings: [
        {
          effectName: 'vertex-3231',
          listenTo: [
            'edge-5151'
          ],
          mappedTo: [
            'edge-5111',
            'edge-5121',
            'edge-5131',
            'edge-5141',
            'edge-5011',
            'edge-1231',
            'edge-2541'
          ]
        },
        {
          effectName: 'vertex-3241',
          listenTo: [
            'edge-5171'
          ],
          mappedTo: [
            'edge-5161'
          ]
        },
        {
          effectName: 'vertex-3251',
          listenTo: [
            'edge-5161'
          ],
          mappedTo: [
            'edge-5181'
          ]
        }
      ]
    },
    {
      fileName: 'effect-51',
      mappings: [
        {
          effectName: 'vertex-3261',
          listenTo: [
            'edge-5211'
          ],
          mappedTo: [
            'edge-5191',
            'edge-5201'
          ]
        },
        {
          effectName: 'vertex-3271',
          listenTo: [
            'edge-5221'
          ],
          mappedTo: [
            'edge-5191'
          ]
        }
      ]
    },
    {
      fileName: 'effect-52',
      mappings: [
        {
          effectName: 'vertex-11',
          listenTo: [
            'edge-51'
          ],
          mappedTo: [
            'edge-31',
            'edge-41'
          ]
        }
      ]
    },
    {
      fileName: 'effect-53',
      mappings: [
        {
          effectName: 'vertex-3281',
          listenTo: [
            'edge-5161'
          ],
          mappedTo: [
            'edge-5231',
            'edge-5241',
            'edge-5251'
          ]
        },
        {
          effectName: 'vertex-3291',
          listenTo: [
            'edge-5281'
          ],
          mappedTo: [
            'edge-5261',
            'edge-5271'
          ]
        },
        {
          effectName: 'vertex-3301',
          listenTo: [
            'edge-5261'
          ],
          mappedTo: [
            'edge-5291',
            'edge-5301'
          ]
        }
      ]
    },
    {
      fileName: 'effect-54',
      mappings: [
        {
          effectName: 'vertex-3311',
          listenTo: [
            'edge-5341'
          ],
          mappedTo: [
            'edge-711',
            'edge-5311',
            'edge-5321',
            'edge-5331'
          ]
        },
        {
          effectName: 'vertex-3321',
          listenTo: [
            'edge-5371'
          ],
          mappedTo: [
            'edge-5351',
            'edge-5361'
          ]
        },
        {
          effectName: 'vertex-3331',
          listenTo: [
            'edge-5321'
          ],
          mappedTo: [
            'edge-5381',
            'edge-5171'
          ]
        }
      ]
    },
    {
      fileName: 'effect-55',
      mappings: [
        {
          effectName: 'vertex-3341',
          listenTo: [
            'edge-5411'
          ],
          mappedTo: [
            'edge-5391',
            'edge-5401'
          ]
        },
        {
          effectName: 'vertex-571',
          listenTo: [
            'edge-5441'
          ],
          mappedTo: [
            'edge-5421',
            'edge-5431'
          ]
        },
        {
          effectName: 'vertex-3351',
          listenTo: [
            'edge-5451'
          ],
          mappedTo: [
            'edge-5421',
            'edge-5431'
          ]
        },
        {
          effectName: 'vertex-3361',
          listenTo: [
            'edge-5421'
          ],
          mappedTo: [
            'edge-5461',
            'edge-5471'
          ]
        }
      ]
    },
    {
      fileName: 'effect-56',
      mappings: [
        {
          effectName: 'vertex-3371',
          listenTo: [
            'edge-5491'
          ],
          mappedTo: [
            'edge-5481'
          ]
        }
      ]
    },
    {
      fileName: 'effect-57',
      mappings: [
        {
          effectName: 'vertex-3381',
          listenTo: [
            'edge-5141'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-931',
          listenTo: [
            'edge-2001'
          ],
          mappedTo: [
            'edge-1981',
            'edge-1991'
          ]
        },
        {
          effectName: 'vertex-3391',
          listenTo: [
            'edge-5531'
          ],
          mappedTo: [
            'edge-5501',
            'edge-5511',
            'edge-5521'
          ]
        },
        {
          effectName: 'vertex-3401',
          listenTo: [
            'edge-5511'
          ],
          mappedTo: [
            'edge-5541',
            'edge-5551'
          ]
        },
        {
          effectName: 'vertex-3411',
          listenTo: [
            'edge-5561'
          ],
          mappedTo: [
            'edge-5241'
          ]
        },
        {
          effectName: 'vertex-3421',
          listenTo: [
            'edge-5571'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-3431',
          listenTo: [
            'edge-5581'
          ],
          mappedTo: [
            'edge-2061',
            'edge-5541',
            'edge-5551'
          ]
        },
        {
          effectName: 'vertex-3441',
          listenTo: [
            'edge-5591'
          ],
          mappedTo: [
            'edge-5581'
          ]
        },
        {
          effectName: 'vertex-3451',
          listenTo: [
            'edge-5611'
          ],
          mappedTo: [
            'edge-5591',
            'edge-5601'
          ]
        },
        {
          effectName: 'vertex-3461',
          listenTo: [
            'edge-5641'
          ],
          mappedTo: [
            'edge-5621',
            'edge-5631'
          ]
        },
        {
          effectName: 'vertex-3471',
          listenTo: [
            'edge-5661'
          ],
          mappedTo: [
            'edge-5651'
          ]
        }
      ]
    },
    {
      fileName: 'effect-58',
      mappings: [
        {
          effectName: 'vertex-3481',
          listenTo: [
            'edge-5681'
          ],
          mappedTo: [
            'edge-5671'
          ]
        },
        {
          effectName: 'vertex-3491',
          listenTo: [
            'edge-31'
          ],
          mappedTo: [
            'edge-5691'
          ]
        }
      ]
    },
    {
      fileName: 'effect-59',
      mappings: [
        {
          effectName: 'vertex-3501',
          listenTo: [
            'edge-5681'
          ],
          mappedTo: [
            'edge-5701',
            'edge-5711',
            'edge-5231',
            'edge-5721'
          ]
        },
        {
          effectName: 'vertex-3511',
          listenTo: [
            'edge-5761'
          ],
          mappedTo: [
            'edge-5731',
            'edge-5741',
            'edge-5241',
            'edge-5231',
            'edge-5751',
            'edge-5271',
            'edge-5261'
          ]
        },
        {
          effectName: 'vertex-3521',
          listenTo: [
            'edge-5731'
          ],
          mappedTo: [
            'edge-2441'
          ]
        },
        {
          effectName: 'vertex-3531',
          listenTo: [
            'edge-5771'
          ],
          mappedTo: [
            'edge-5271',
            'edge-5731'
          ]
        },
        {
          effectName: 'vertex-3541',
          listenTo: [
            'edge-5781'
          ],
          mappedTo: [
            'edge-5731'
          ]
        },
        {
          effectName: 'vertex-3551',
          listenTo: [
            'edge-5791'
          ],
          mappedTo: [
            'edge-5271',
            'edge-5731'
          ]
        },
        {
          effectName: 'vertex-1281',
          listenTo: [
            'edge-2441'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-3561',
          listenTo: [
            'edge-5231'
          ],
          mappedTo: [
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-3571',
          listenTo: [
            'edge-5801'
          ],
          mappedTo: [
            'edge-2251'
          ]
        },
        {
          effectName: 'vertex-3581',
          listenTo: [
            'edge-5751'
          ],
          mappedTo: [
            'edge-5271'
          ]
        },
        {
          effectName: 'vertex-3591',
          listenTo: [
            'edge-5811'
          ],
          mappedTo: [
            'edge-5801'
          ]
        },
        {
          effectName: 'vertex-3601',
          listenTo: [
            'edge-5481'
          ],
          mappedTo: [
            'edge-5231'
          ]
        },
        {
          effectName: 'vertex-3611',
          listenTo: [
            'edge-5821'
          ],
          mappedTo: [
            'edge-5801'
          ]
        },
        {
          effectName: 'vertex-3621',
          listenTo: [
            'edge-5841'
          ],
          mappedTo: [
            'edge-5831'
          ]
        },
        {
          effectName: 'vertex-3631',
          listenTo: [
            'edge-5831'
          ],
          mappedTo: [
            'edge-5801'
          ]
        },
        {
          effectName: 'vertex-3641',
          listenTo: [
            'edge-5851'
          ],
          mappedTo: [
            'edge-5801'
          ]
        },
        {
          effectName: 'vertex-3651',
          listenTo: [
            'edge-5861'
          ],
          mappedTo: [
            'edge-5801'
          ]
        },
        {
          effectName: 'vertex-3661',
          listenTo: [
            'edge-5271'
          ],
          mappedTo: [
            'edge-5801'
          ]
        },
        {
          effectName: 'vertex-3671',
          listenTo: [
            'edge-5871'
          ],
          mappedTo: [
            'edge-5231'
          ]
        },
        {
          effectName: 'vertex-3681',
          listenTo: [
            'edge-5881'
          ],
          mappedTo: [
            'edge-5691',
            'edge-5801'
          ]
        },
        {
          effectName: 'vertex-3691',
          listenTo: [
            'edge-5891'
          ],
          mappedTo: [
            'edge-2441'
          ]
        },
        {
          effectName: 'vertex-3701',
          listenTo: [
            'edge-5901'
          ],
          mappedTo: [
            'edge-5801',
            'edge-2441'
          ]
        },
        {
          effectName: 'vertex-3711',
          listenTo: [
            'edge-5911'
          ],
          mappedTo: [
            'edge-5801'
          ]
        },
        {
          effectName: 'vertex-3721',
          listenTo: [
            'edge-5921'
          ],
          mappedTo: [
            'edge-2441'
          ]
        },
        {
          effectName: 'vertex-3731',
          listenTo: [
            'edge-5961'
          ],
          mappedTo: [
            'edge-5921',
            'edge-5931',
            'edge-5941',
            'edge-5951',
            'edge-5611',
            'edge-5681'
          ]
        },
        {
          effectName: 'vertex-3741',
          listenTo: [
            'edge-5931'
          ],
          mappedTo: [
            'edge-5971',
            'edge-5241',
            'edge-5741',
            'edge-5981',
            'edge-5991',
            'edge-5821'
          ]
        },
        {
          effectName: 'vertex-3751',
          listenTo: [
            'edge-5941'
          ],
          mappedTo: [
            'edge-5971',
            'edge-5241',
            'edge-5741',
            'edge-6001',
            'edge-5991',
            'edge-5851'
          ]
        },
        {
          effectName: 'vertex-1301',
          listenTo: [
            'edge-2461'
          ],
          mappedTo: [
            'edge-5681'
          ]
        },
        {
          effectName: 'vertex-3761',
          listenTo: [
            'edge-6011'
          ],
          mappedTo: [
            'edge-2441'
          ]
        },
        {
          effectName: 'vertex-3771',
          listenTo: [
            'edge-6021'
          ],
          mappedTo: [
            'edge-3771',
            'edge-3841'
          ]
        }
      ]
    },
    {
      fileName: 'effect-60',
      mappings: [
        {
          effectName: 'vertex-3781',
          listenTo: [
            'edge-6061'
          ],
          mappedTo: [
            'edge-6031',
            'edge-6041',
            'edge-6051'
          ]
        }
      ]
    },
    {
      fileName: 'effect-61',
      mappings: [
        {
          effectName: 'vertex-3791',
          listenTo: [
            'edge-6091'
          ],
          mappedTo: [
            'edge-6071',
            'edge-6081'
          ]
        },
        {
          effectName: 'vertex-3801',
          listenTo: [
            'edge-6071'
          ],
          mappedTo: [
            'edge-6081',
            'edge-6101'
          ]
        },
        {
          effectName: 'vertex-3811',
          listenTo: [
            'edge-6081'
          ],
          mappedTo: [
            'edge-6111',
            'edge-6121',
            'edge-6131'
          ]
        },
        {
          effectName: 'vertex-661',
          listenTo: [
            'edge-6111'
          ],
          mappedTo: [
            'edge-6141',
            'edge-6151'
          ]
        },
        {
          effectName: 'vertex-3821',
          listenTo: [
            'edge-6121'
          ],
          mappedTo: [
            'edge-6161',
            'edge-6171'
          ]
        },
        {
          effectName: 'vertex-3831',
          listenTo: [
            'edge-6131'
          ],
          mappedTo: [
            'edge-6181',
            'edge-6191'
          ]
        }
      ]
    },
    {
      fileName: 'effect-62',
      mappings: [
        {
          effectName: 'vertex-3841',
          listenTo: [
            'edge-6221'
          ],
          mappedTo: [
            'edge-6201',
            'edge-6211'
          ]
        },
        {
          effectName: 'vertex-3851',
          listenTo: [
            'edge-6251'
          ],
          mappedTo: [
            'edge-6231',
            'edge-6241'
          ]
        },
        {
          effectName: 'vertex-3861',
          listenTo: [
            'edge-6281'
          ],
          mappedTo: [
            'edge-6261',
            'edge-6271'
          ]
        },
        {
          effectName: 'vertex-3871',
          listenTo: [
            'edge-6301'
          ],
          mappedTo: [
            'edge-6291',
            'edge-6251'
          ]
        },
        {
          effectName: 'vertex-3881',
          listenTo: [
            'edge-6311'
          ],
          mappedTo: [
            'edge-6251'
          ]
        },
        {
          effectName: 'vertex-3891',
          listenTo: [
            'edge-6331'
          ],
          mappedTo: [
            'edge-6321'
          ]
        }
      ]
    },
    {
      fileName: 'effect-63',
      mappings: [
        {
          effectName: 'vertex-3901',
          listenTo: [
            'edge-6361'
          ],
          mappedTo: [
            'edge-6341',
            'edge-6351'
          ]
        },
        {
          effectName: 'vertex-3911',
          listenTo: [
            'edge-6391'
          ],
          mappedTo: [
            'edge-6371',
            'edge-6381'
          ]
        },
        {
          effectName: 'vertex-3921',
          listenTo: [
            'edge-6431'
          ],
          mappedTo: [
            'edge-6401',
            'edge-6411',
            'edge-6421'
          ]
        }
      ]
    },
    {
      fileName: 'effect-64',
      mappings: [
        {
          effectName: 'vertex-1971',
          listenTo: [
            'edge-3571'
          ],
          mappedTo: [
            'edge-3591',
            'edge-3601'
          ]
        }
      ]
    },
    {
      fileName: 'effect-65',
      mappings: [
        {
          effectName: 'vertex-3931',
          listenTo: [
            'edge-6451'
          ],
          mappedTo: [
            'edge-5221',
            'edge-6441'
          ]
        },
        {
          effectName: 'vertex-3941',
          listenTo: [
            'edge-6471'
          ],
          mappedTo: [
            'edge-5901',
            'edge-5851',
            'edge-6461',
            'edge-5821'
          ]
        },
        {
          effectName: 'vertex-3951',
          listenTo: [
            'edge-6491'
          ],
          mappedTo: [
            'edge-6481'
          ]
        },
        {
          effectName: 'vertex-3961',
          listenTo: [
            'edge-6031'
          ],
          mappedTo: [
            'edge-6501',
            'edge-6511',
            'edge-5661',
            'edge-5911'
          ]
        },
        {
          effectName: 'vertex-3971',
          listenTo: [
            'edge-6511'
          ],
          mappedTo: [
            'edge-6521',
            'edge-6531',
            'edge-6541'
          ]
        },
        {
          effectName: 'vertex-3981',
          listenTo: [
            'edge-6461'
          ],
          mappedTo: [
            'edge-6551'
          ]
        },
        {
          effectName: 'vertex-3991',
          listenTo: [
            'edge-6571'
          ],
          mappedTo: [
            'edge-6561'
          ]
        },
        {
          effectName: 'vertex-4001',
          listenTo: [
            'edge-6591'
          ],
          mappedTo: [
            'edge-5271',
            'edge-6461',
            'edge-6581'
          ]
        },
        {
          effectName: 'vertex-4011',
          listenTo: [
            'edge-6581'
          ],
          mappedTo: [
            'edge-6481'
          ]
        },
        {
          effectName: 'vertex-4021',
          listenTo: [
            'edge-5981'
          ],
          mappedTo: [
            'edge-6461'
          ]
        },
        {
          effectName: 'vertex-4031',
          listenTo: [
            'edge-6001'
          ],
          mappedTo: [
            'edge-6601'
          ]
        }
      ]
    },
    {
      fileName: 'effect-66',
      mappings: [
        {
          effectName: 'vertex-1331',
          listenTo: [
            'edge-2541'
          ],
          mappedTo: [
            'edge-2531'
          ]
        },
        {
          effectName: 'vertex-4041',
          listenTo: [
            'edge-2541'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-4051',
          listenTo: [
            'edge-6611'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-4061',
          listenTo: [
            'edge-5721'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-1391',
          listenTo: [
            'edge-2611'
          ],
          mappedTo: [
            'edge-2551'
          ]
        },
        {
          effectName: 'vertex-4071',
          listenTo: [
            'edge-6621'
          ],
          mappedTo: [
            'edge-2611'
          ]
        }
      ]
    },
    {
      fileName: 'effect-67',
      mappings: [
        {
          effectName: 'vertex-4081',
          listenTo: [
            'edge-6561'
          ],
          mappedTo: [
            'edge-6591',
            'edge-6631'
          ]
        },
        {
          effectName: 'vertex-4091',
          listenTo: [
            'edge-6661'
          ],
          mappedTo: [
            'edge-6641',
            'edge-6651'
          ]
        }
      ]
    },
    {
      fileName: 'effect-68',
      mappings: [
        {
          effectName: 'vertex-4101',
          listenTo: [
            'edge-6691'
          ],
          mappedTo: [
            'edge-6671',
            'edge-6681'
          ]
        },
        {
          effectName: 'vertex-4111',
          listenTo: [
            'edge-6711'
          ],
          mappedTo: [
            'edge-6701'
          ]
        },
        {
          effectName: 'vertex-4121',
          listenTo: [
            'edge-6701'
          ],
          mappedTo: [
            'edge-6721',
            'edge-6731'
          ]
        }
      ]
    },
    {
      fileName: 'effect-69',
      mappings: [
        {
          effectName: 'vertex-4131',
          listenTo: [
            'edge-6761'
          ],
          mappedTo: [
            'edge-6741',
            'edge-6751'
          ]
        },
        {
          effectName: 'vertex-4141',
          listenTo: [
            'edge-6551'
          ],
          mappedTo: [
            'edge-6771',
            'edge-6781'
          ]
        },
        {
          effectName: 'vertex-4151',
          listenTo: [
            'edge-6771'
          ],
          mappedTo: [
            'edge-6561',
            'edge-6791'
          ]
        }
      ]
    },
    {
      fileName: 'effect-70',
      mappings: [
        {
          effectName: 'vertex-4161',
          listenTo: [
            'edge-5201'
          ],
          mappedTo: [
            'edge-5441'
          ]
        },
        {
          effectName: 'vertex-4171',
          listenTo: [
            'edge-5201'
          ],
          mappedTo: [
            'edge-6451'
          ]
        },
        {
          effectName: 'vertex-4181',
          listenTo: [
            'edge-5201'
          ],
          mappedTo: [
            'edge-6451'
          ]
        },
        {
          effectName: 'vertex-4191',
          listenTo: [
            'edge-5221'
          ],
          mappedTo: [
            'edge-6801',
            'edge-6811'
          ]
        },
        {
          effectName: 'vertex-4201',
          listenTo: [
            'edge-6801'
          ],
          mappedTo: [
            'edge-5811'
          ]
        },
        {
          effectName: 'vertex-4211',
          listenTo: [
            'edge-6811'
          ],
          mappedTo: [
            'edge-6061',
            'edge-6501'
          ]
        },
        {
          effectName: 'vertex-4221',
          listenTo: [
            'edge-5141'
          ],
          mappedTo: [
            'edge-6511',
            'edge-6501'
          ]
        },
        {
          effectName: 'vertex-4231',
          listenTo: [
            'edge-6531'
          ],
          mappedTo: [
            'edge-6571',
            'edge-6821',
            'edge-6831',
            'edge-6761',
            'edge-6601'
          ]
        },
        {
          effectName: 'vertex-4241',
          listenTo: [
            'edge-6821'
          ],
          mappedTo: [
            'edge-6461',
            'edge-5241',
            'edge-6601',
            'edge-5851',
            'edge-5881'
          ]
        }
      ]
    },
    {
      fileName: 'effect-71',
      mappings: [
        {
          effectName: 'vertex-4251',
          listenTo: [
            'edge-6851'
          ],
          mappedTo: [
            'edge-6841',
            'edge-5441'
          ]
        },
        {
          effectName: 'vertex-4261',
          listenTo: [
            'edge-6851'
          ],
          mappedTo: [
            'edge-6861'
          ]
        },
        {
          effectName: 'vertex-4271',
          listenTo: [
            'edge-5551'
          ],
          mappedTo: [
            'edge-6221'
          ]
        },
        {
          effectName: 'vertex-4281',
          listenTo: [
            'edge-6201'
          ],
          mappedTo: [
            'edge-6871'
          ]
        },
        {
          effectName: 'vertex-4291',
          listenTo: [
            'edge-6201'
          ],
          mappedTo: [
            'edge-6291',
            'edge-6301'
          ]
        },
        {
          effectName: 'vertex-4301',
          listenTo: [
            'edge-6911'
          ],
          mappedTo: [
            'edge-6881',
            'edge-6891',
            'edge-5611',
            'edge-6711',
            'edge-6901'
          ]
        },
        {
          effectName: 'vertex-4311',
          listenTo: [
            'edge-6891'
          ],
          mappedTo: [
            'edge-5241',
            'edge-5741',
            'edge-6601',
            'edge-6921',
            'edge-5851'
          ]
        },
        {
          effectName: 'vertex-4321',
          listenTo: [
            'edge-6881'
          ],
          mappedTo: [
            'edge-5241',
            'edge-5741',
            'edge-6921',
            'edge-6461',
            'edge-5821'
          ]
        },
        {
          effectName: 'vertex-4331',
          listenTo: [
            'edge-6901'
          ],
          mappedTo: [
            'edge-6801'
          ]
        },
        {
          effectName: 'vertex-4341',
          listenTo: [
            'edge-6951'
          ],
          mappedTo: [
            'edge-6931',
            'edge-6941'
          ]
        },
        {
          effectName: 'vertex-4351',
          listenTo: [
            'edge-6951'
          ],
          mappedTo: [
            'edge-5311',
            'edge-5371'
          ]
        },
        {
          effectName: 'vertex-4361',
          listenTo: [
            'edge-5681'
          ],
          mappedTo: [
            'edge-6331'
          ]
        },
        {
          effectName: 'vertex-4371',
          listenTo: [
            'edge-6931'
          ],
          mappedTo: [
            'edge-6961'
          ]
        },
        {
          effectName: 'vertex-4381',
          listenTo: [
            'edge-6971'
          ],
          mappedTo: [
            'edge-5411'
          ]
        },
        {
          effectName: 'vertex-4391',
          listenTo: [
            'edge-5391'
          ],
          mappedTo: [
            'edge-5891'
          ]
        },
        {
          effectName: 'vertex-4401',
          listenTo: [
            'edge-6981'
          ],
          mappedTo: [
            'edge-6011'
          ]
        },
        {
          effectName: 'vertex-4411',
          listenTo: [
            'edge-5141'
          ],
          mappedTo: [
            'edge-6281'
          ]
        },
        {
          effectName: 'vertex-4421',
          listenTo: [
            'edge-5141'
          ],
          mappedTo: [
            'edge-6991'
          ]
        },
        {
          effectName: 'vertex-4431',
          listenTo: [
            'edge-7001'
          ],
          mappedTo: [
            'edge-6691'
          ]
        }
      ]
    },
    {
      fileName: 'effect-72',
      mappings: [
        {
          effectName: 'vertex-4441',
          listenTo: [
            'edge-7041'
          ],
          mappedTo: [
            'edge-7011',
            'edge-7021',
            'edge-7031',
            'edge-6801'
          ]
        },
        {
          effectName: 'vertex-571',
          listenTo: [
            'edge-7041'
          ],
          mappedTo: [
            'edge-5451',
            'edge-5441'
          ]
        },
        {
          effectName: 'vertex-4451',
          listenTo: [
            'edge-6801'
          ],
          mappedTo: [
            'edge-7051',
            'edge-7061',
            'edge-7071'
          ]
        },
        {
          effectName: 'vertex-4461',
          listenTo: [
            'edge-5461'
          ],
          mappedTo: [
            'edge-6061',
            'edge-7081'
          ]
        },
        {
          effectName: 'vertex-4471',
          listenTo: [
            'edge-6041'
          ],
          mappedTo: [
            'edge-7091'
          ]
        },
        {
          effectName: 'vertex-4481',
          listenTo: [
            'edge-6031'
          ],
          mappedTo: [
            'edge-7091',
            'edge-7081'
          ]
        },
        {
          effectName: 'vertex-4491',
          listenTo: [
            'edge-7081'
          ],
          mappedTo: [
            'edge-7051',
            'edge-7061',
            'edge-7071',
            'edge-7101'
          ]
        },
        {
          effectName: 'vertex-4501',
          listenTo: [
            'edge-7051'
          ],
          mappedTo: [
            'edge-7111',
            'edge-7121'
          ]
        },
        {
          effectName: 'vertex-4511',
          listenTo: [
            'edge-7061'
          ],
          mappedTo: [
            'edge-3771',
            'edge-7131'
          ]
        },
        {
          effectName: 'vertex-4521',
          listenTo: [
            'edge-7071'
          ],
          mappedTo: [
            'edge-2461'
          ]
        },
        {
          effectName: 'vertex-4531',
          listenTo: [
            'edge-7111'
          ],
          mappedTo: [
            'edge-2461'
          ]
        },
        {
          effectName: 'vertex-4541',
          listenTo: [
            'edge-7091'
          ],
          mappedTo: [
            'edge-3771',
            'edge-7131'
          ]
        },
        {
          effectName: 'vertex-4551',
          listenTo: [
            'edge-7131'
          ],
          mappedTo: [
            'edge-2461'
          ]
        },
        {
          effectName: 'vertex-4561',
          listenTo: [
            'edge-7141'
          ],
          mappedTo: []
        },
        {
          effectName: 'vertex-4571',
          listenTo: [
            'edge-7151'
          ],
          mappedTo: [
            'edge-2461',
            'edge-5681'
          ]
        },
        {
          effectName: 'vertex-4581',
          listenTo: [
            'edge-5461'
          ],
          mappedTo: [
            'edge-7121'
          ]
        },
        {
          effectName: 'vertex-4591',
          listenTo: [
            'edge-7121'
          ],
          mappedTo: [
            'edge-7161'
          ]
        },
        {
          effectName: 'vertex-4601',
          listenTo: [
            'edge-7181'
          ],
          mappedTo: [
            'edge-7171'
          ]
        },
        {
          effectName: 'vertex-3921',
          listenTo: [
            'edge-7121'
          ],
          mappedTo: [
            'edge-7171'
          ]
        }
      ]
    },
    {
      fileName: 'effect-73',
      mappings: [
        {
          effectName: 'vertex-4611',
          listenTo: [
            'edge-7211'
          ],
          mappedTo: [
            'edge-7191',
            'edge-7201'
          ]
        }
      ]
    },
    {
      fileName: 'effect-74',
      mappings: [
        {
          effectName: 'vertex-4621',
          listenTo: [
            'edge-5531'
          ],
          mappedTo: [
            'edge-7221',
            'edge-7231',
            'edge-51'
          ]
        },
        {
          effectName: 'vertex-4631',
          listenTo: [
            'edge-5511'
          ],
          mappedTo: [
            'edge-7241'
          ]
        },
        {
          effectName: 'vertex-4641',
          listenTo: [
            'edge-7241'
          ],
          mappedTo: [
            'edge-6871',
            'edge-5641'
          ]
        },
        {
          effectName: 'vertex-4341',
          listenTo: [
            'edge-6951'
          ],
          mappedTo: [
            'edge-6931',
            'edge-6941'
          ]
        },
        {
          effectName: 'vertex-4351',
          listenTo: [
            'edge-6951'
          ],
          mappedTo: [
            'edge-5311',
            'edge-5371',
            'edge-5601'
          ]
        },
        {
          effectName: 'vertex-4651',
          listenTo: [
            'edge-7231'
          ],
          mappedTo: [
            'edge-2461'
          ]
        },
        {
          effectName: 'vertex-4661',
          listenTo: [
            'edge-7251'
          ],
          mappedTo: [
            'edge-31',
            'edge-3771',
            'edge-5681',
            'edge-3841'
          ]
        },
        {
          effectName: 'vertex-4671',
          listenTo: [
            'edge-5641'
          ],
          mappedTo: [
            'edge-7261'
          ]
        },
        {
          effectName: 'vertex-4681',
          listenTo: [
            'edge-5621'
          ],
          mappedTo: [
            'edge-7251'
          ]
        },
        {
          effectName: 'vertex-4691',
          listenTo: [
            'edge-5631'
          ],
          mappedTo: [
            'edge-7271'
          ]
        },
        {
          effectName: 'vertex-4701',
          listenTo: [
            'edge-5141'
          ],
          mappedTo: [
            'edge-6991'
          ]
        },
        {
          effectName: 'vertex-4711',
          listenTo: [
            'edge-7251'
          ],
          mappedTo: [
            'edge-31',
            'edge-6661'
          ]
        }
      ]
    },
    {
      fileName: 'effect-75',
      mappings: [
        {
          effectName: 'vertex-3201',
          listenTo: [
            'edge-5011'
          ],
          mappedTo: [
            'edge-5031',
            'edge-5061',
            'edge-5051'
          ]
        },
        {
          effectName: 'vertex-3221',
          listenTo: [
            'edge-5061'
          ],
          mappedTo: [
            'edge-5091',
            'edge-5341',
            'edge-5101'
          ]
        }
      ]
    },
    {
      fileName: 'effect-76',
      mappings: [
        {
          effectName: 'vertex-4721',
          listenTo: [
            'edge-5951'
          ],
          mappedTo: [
            'edge-7281',
            'edge-6981',
            'edge-7291'
          ]
        }
      ]
    }
  ];
  private chords: Chord[];
  private readonly s$: BehaviorSubject<Chord[]>;
  so$: Observable<Chord[]>;

  constructor(private http: HttpClient) {
    this.chords = this.generateChords();
    this.s$ = new BehaviorSubject<Chord[]>(this.chords);
    this.so$ = this.s$.asObservable();
  }

  private generateChords(): Chord[] {
    return this.effectsD.flatMap(ee => ee
      .mappings.flatMap(e => e.listenTo.flatMap(l => e.mappedTo.map(m => ({source: l, target: m, value: 1}))))
    );
  }

  getChords(): Observable<Chord[]> {
    return this.so$;
  }

  getSearchOptions(): Observable<string[]> {
    return this.getChords().pipe(map(d =>
      Array.from(new Set(d.map(dd => [dd.source, dd.target]).reduce((p, c) => p.concat(c), [])).values())
    ));
  }

  getSearchOptionsUseCase(): Observable<string[]> {
    return of(Array.from(new Set(this.effectsD.flatMap(xx => xx.fileName.includes('effect') ? xx.fileName: null).filter(Boolean))));
  }
}
