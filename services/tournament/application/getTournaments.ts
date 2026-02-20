import type { Tournament } from "../../../entities/tournament/types/tournament";

const MOCK_TOURNAMENTS: Tournament[] = [
  {
    id: "tournament-001",
    title: "Barcelona Spring Open",
    city: "Barcelona",
    country: "Spain",
    surface: "Clay",
    startDate: "2026-04-12",
    endDate: "2026-04-20",
    isFinished: false,
  },
  {
    id: "tournament-002",
    title: "Madrid Masters Series",
    city: "Madrid",
    country: "Spain",
    surface: "Clay",
    startDate: "2026-05-01",
    endDate: "2026-05-10",
    isFinished: false,
  },
  {
    id: "tournament-003",
    title: "Melbourne Summer Classic",
    city: "Melbourne",
    country: "Australia",
    surface: "Hard",
    startDate: "2025-01-10",
    endDate: "2025-01-18",
    isFinished: true,
  },
  {
    id: "tournament-004",
    title: "Rome Red Court Trophy",
    city: "Rome",
    country: "Italy",
    surface: "Clay",
    startDate: "2026-05-18",
    endDate: "2026-05-25",
    isFinished: false,
  }
];

export async function getTournaments(): Promise<Tournament[]> {
  return MOCK_TOURNAMENTS;
}
