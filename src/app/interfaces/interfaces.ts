export interface Planeta {
  id?: string;
  imagen?: string;
  name: string;
  rotation_period: string;
  orbital_period: string;
  diameter: string;
  climate: string;
  gravity: string;
  terrain: string;
  surface_water: string;
  population: number;

  created?: string;
  edited?: string;
  url?: string;
}

export interface RespuestaPlanetasDB {
    count:    number;
    next:     string | null;
    previous: string | null;
    results:  Planeta[];
}
