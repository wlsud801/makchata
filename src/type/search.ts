export interface IAddressProps {
  address_name: string;
  phone: string;
  place_name: string;
  x: number;
  y: number;
}

export interface IResultProps {
  index: number;
  type: string;
  totalTime: number;
  totalDistance: number;
  lastBoardingTime: string;
  subPath: ISubPath[];
}

export interface ISubPath {
  trafficType: string;
  distance: number;
  sectionTime: number;
  stationCount?: number;
  startName?: string;
  endName?: string;
  door?: string;
}

export interface IPathResultProps {
  type: string;
  lastBoardingTime: string;
  totalTime: number;
  totalDistance: number;
  payment: number;
  firstStartStation: string;
  lastEndStation: string;
  subPath: ISubPath[];
}

export interface IQueryProps {
  route: IPathResultProps[];
}

export interface IPlaceCard {
  location: string;
  address: string;
  x: number;
  y: number;
  type: string;
}

export interface IRouteCard {
  link: string;
  departure: string;
  arrival: string;
}
