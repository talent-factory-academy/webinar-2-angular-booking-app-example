import { Site } from './model/site';

export const MOCK: Site[] = [
  {
    id: 3,
    name: 'Filiale Udine',
    coords: [46.056057,13.2091432],
    availableDates: [
      {
        date: '6/22/2021',
        availableTimes: [['13:00', '13:30'], ['13:30', '14:00'], ['14:00', '14:30'], ['16:30', '17:00']]
      },
      {
        date: '6/24/2021',
        availableTimes: [['13:30', '14:00'], ['16:30', '17:00']]
      },
      {
        date: '6/26/2021',
        availableTimes: [['16:30', '17:00']]
      },
    ]
  },
  {
    id: 1,
    name: 'Filiale Monfalcone',
    coords: [45.80383,13.5203718],
    availableDates: [
      {
        date: '6/22/2021',
        availableTimes: [['13:00', '13:30'], ['13:30', '14:00']]
      },
      {
        date: '6/23/2021',
        availableTimes: [['13:00', '13:30'], ['13:30', '14:00'], ['14:00', '14:30']]
      }
    ]
  },

  {
    id: 2,
    name: 'Filiale Trieste',
    coords: [45.6523148, 13.8486428],
    availableDates: []
  },
  {
    id: 4,
    name: 'Sede principale Roma',
    coords: [41.7059124,12.7391432],
    availableDates: [
      {
        date: '6/22/2021',
        availableTimes: [['13:00', '13:30'], ['13:30', '14:00']]
      },
      {
        date: '6/23/2021',
        availableTimes: [['13:00', '13:30'], ['13:30', '14:00'], ['14:00', '14:30']]
      }
    ]
  },
  {
    id: 5,
    name: 'Sede legale Napoli',
    coords: [40.8539123,14.1765633],
    availableDates: []
  },
  {
    id: 6,
    name: 'Filiale Palermo',
    coords: [38.1405384,13.3222693],
    availableDates: []
  }
]
