import type { PlayerPublicProfile } from "../../../entities/player/types/player";

const MOCK_PUBLIC_PLAYERS: PlayerPublicProfile[] = [
  { id: "player-001", name: "Sofia Alvarez", avatarUrl: "https://randomuser.me/api/portraits/women/11.jpg", country: "Spain", city: "Barcelona" },
  { id: "player-002", name: "Carlos Herrera", avatarUrl: "https://randomuser.me/api/portraits/men/12.jpg", country: "Spain", city: "Madrid" },
  { id: "player-003", name: "Lucia Romero", avatarUrl: "https://randomuser.me/api/portraits/women/13.jpg", country: "Spain", city: "Valencia" },
  { id: "player-004", name: "Diego Navarro", avatarUrl: "https://randomuser.me/api/portraits/men/14.jpg", country: "Spain", city: "Sevilla" },
  { id: "player-005", name: "Marta Castillo", avatarUrl: "https://randomuser.me/api/portraits/women/15.jpg", country: "Spain", city: "Malaga" },
  { id: "player-006", name: "Ines Vega", avatarUrl: "https://randomuser.me/api/portraits/women/16.jpg", country: "Spain", city: "Bilbao" },
  { id: "player-007", name: "Pablo Serrano", avatarUrl: "https://randomuser.me/api/portraits/men/17.jpg", country: "Spain", city: "Zaragoza" },
  { id: "player-008", name: "Elena Costa", avatarUrl: "https://randomuser.me/api/portraits/women/18.jpg", country: "Spain", city: "Barcelona" },
  { id: "player-009", name: "Raul Prieto", avatarUrl: "https://randomuser.me/api/portraits/men/19.jpg", country: "Spain", city: "Madrid" },
  { id: "player-010", name: "Nuria Blanco", avatarUrl: "https://randomuser.me/api/portraits/women/20.jpg", country: "Spain", city: "Valencia" },
  { id: "player-011", name: "Adrian Fuentes", avatarUrl: "https://randomuser.me/api/portraits/men/21.jpg", country: "Spain", city: "Sevilla" },
  { id: "player-012", name: "Paula Mendez", avatarUrl: "https://randomuser.me/api/portraits/women/22.jpg", country: "Spain", city: "Malaga" },
  { id: "player-013", name: "Javier Morales", avatarUrl: "https://randomuser.me/api/portraits/men/23.jpg", country: "Spain", city: "Bilbao" },
  { id: "player-014", name: "Clara Gil", avatarUrl: "https://randomuser.me/api/portraits/women/24.jpg", country: "Spain", city: "Zaragoza" },
  { id: "player-015", name: "Hugo Leon", avatarUrl: "https://randomuser.me/api/portraits/men/25.jpg", country: "Spain", city: "Barcelona" },
  { id: "player-016", name: "Aitana Campos", avatarUrl: "https://randomuser.me/api/portraits/women/26.jpg", country: "Spain", city: "Madrid" },
  { id: "player-017", name: "Marco Ortega", avatarUrl: "https://randomuser.me/api/portraits/men/27.jpg", country: "Spain", city: "Valencia" },
  { id: "player-018", name: "Sara Molina", avatarUrl: "https://randomuser.me/api/portraits/women/28.jpg", country: "Spain", city: "Sevilla" },

  { id: "player-019", name: "Camille Dubois", avatarUrl: "https://randomuser.me/api/portraits/women/31.jpg", country: "France", city: "Paris" },
  { id: "player-020", name: "Luca Bianchi", avatarUrl: "https://randomuser.me/api/portraits/men/32.jpg", country: "Italy", city: "Rome" },
  { id: "player-021", name: "Hannah Keller", avatarUrl: "https://randomuser.me/api/portraits/women/33.jpg", country: "Germany", city: "Berlin" },
  { id: "player-022", name: "Noah Brooks", avatarUrl: "https://randomuser.me/api/portraits/men/34.jpg", country: "United States", city: "San Diego" },
  { id: "player-023", name: "Beatriz Lima", avatarUrl: "https://randomuser.me/api/portraits/women/35.jpg", country: "Brazil", city: "Sao Paulo" },
  { id: "player-024", name: "Jisoo Kim", avatarUrl: "https://randomuser.me/api/portraits/women/36.jpg", country: "South Korea", city: "Seoul" },
  { id: "player-025", name: "Oliver Hart", avatarUrl: "https://randomuser.me/api/portraits/men/37.jpg", country: "Australia", city: "Melbourne" },
  { id: "player-026", name: "Ines Pereira", avatarUrl: "https://randomuser.me/api/portraits/women/38.jpg", country: "Portugal", city: "Lisbon" },
  { id: "player-027", name: "Theo Martin", avatarUrl: "https://randomuser.me/api/portraits/men/39.jpg", country: "France", city: "Lyon" },
  { id: "player-028", name: "Giulia Romano", avatarUrl: "https://randomuser.me/api/portraits/women/40.jpg", country: "Italy", city: "Milan" },
  { id: "player-029", name: "Mason Reed", avatarUrl: "https://randomuser.me/api/portraits/men/41.jpg", country: "United States", city: "Miami" },
  { id: "player-030", name: "Emilia Schneider", avatarUrl: "https://randomuser.me/api/portraits/women/42.jpg", country: "Germany", city: "Munich" }
];

export async function getPublicPlayers(): Promise<PlayerPublicProfile[]> {
  return MOCK_PUBLIC_PLAYERS;
}
