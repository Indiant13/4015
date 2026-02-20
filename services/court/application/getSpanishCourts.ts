import type { Court } from "../../../entities/court/types/court";

const MOCK_SPANISH_COURTS: Court[] = [
  { id: "court-001", name: "La Caja Magica", city: "Madrid", surface: "Clay", indoor: false },
  { id: "court-002", name: "Real Club de Tenis Barcelona", city: "Barcelona", surface: "Clay", indoor: false },
  { id: "court-003", name: "Valencia Tennis Center", city: "Valencia", surface: "Hard", indoor: true },
  { id: "court-004", name: "Sevilla Open Courts", city: "Sevilla", surface: "Clay", indoor: false },
  { id: "court-005", name: "Malaga Indoor Arena", city: "Malaga", surface: "Hard", indoor: true }
];

export async function getSpanishCourts(): Promise<Court[]> {
  return MOCK_SPANISH_COURTS;
}
