import { ApiProvider } from "../services.config";
import { Stats } from "./types";

export class StatsProvider{

    private static path = "admin/statistics"

    static getStats(){
        return ApiProvider.get<Stats>(this.path)
    }
}