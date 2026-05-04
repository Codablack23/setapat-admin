import { QueryProvider } from "@/utils";
import { ApiProvider } from "../services.config";
import {
  AcceptApplicationDto,
  DesignerApplication,
  GetApplicationsResponse,
} from "./types";

export class ApplicationsProvider {
  private static path = "admin/applications";

  static getApplications(query?: Record<string, any>) {
    const url = QueryProvider.buildUrlWithQuery(query, this.path);
    return ApiProvider.get<GetApplicationsResponse>(url);
  }
  static getApplicationDetails(id: string) {
    return ApiProvider.get<{ application: DesignerApplication }>(
      `${this.path}/${id}`,
    );
  }
  static acceptApplication(id: string) {
    return ApiProvider.post(`${this.path}/${id}/accept`);
  }
  static rejectApplication(id: string) {
    return ApiProvider.post(`${this.path}/${id}/reject`);
  }
  static sendInvite(id: string) {
    return ApiProvider.post(`${this.path}/${id}/send-invite`);
  }
}
