import { Pagination } from "../services.type";

export enum Rank{
    JUNIOR="JUNIOR",
    MID = "MID",
    SENIOR = "SENIOR"
}

export interface AcceptApplicationDto{
    rank:Rank
}

export type DesignerRank = "JUNIOR" | "MID" | "SENIOR";
export type ApplicationStatus = "PENDING" | "APPROVED" | "REJECTED";
export type ApplicationSource = "FORM" | "USER"

export interface DesignerApplication {
  id: string;
  firstname: string;
  lastname: string;
  email: string;

  phone_number: string;
  gender: string | null;

  avatar: string | null;
  portfolio_link: string;
  resume_link: string;
  telegram_handle: string;

  rank: Rank;
  status: ApplicationStatus;
  source: ApplicationSource;

  attempt_number: number;
  rejection_reason: string | null;

  tools: string[];
  designer_specifications: string[];
  working_days: string[];

  opens_at: string;   // "09:00:00"
  closes_at: string;  // "18:00:00"

  created_at: string;
  updated_at: string;
}

export interface GetApplicationsResponse{
    applications:DesignerApplication[]
    pagination:Pagination
}