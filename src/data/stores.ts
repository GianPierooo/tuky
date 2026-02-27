export interface Store {
  id: string
  name: string
  address: string
  district: string
  hours: string
  mapsUrl: string
}

export const stores: Store[] = [
  {
    id: 'store1',
    name: 'TUKY Lima',
    address: 'Av. Simón Bolívar 1427, Lima 15084',
    district: 'Lima',
    hours: 'Lun-Dom: 7:00 - 23:00',
    mapsUrl: 'https://www.google.com/maps?q=Av.+Simón+Bolívar+1427,+Lima+15084',
  },
]

