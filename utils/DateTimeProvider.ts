import { DateTime } from "luxon";

export class DateTimeProvider {
  static formatMessageTime(lastMessageDate: DateTime): string {
    const now = DateTime.now();

    if (lastMessageDate.hasSame(now, "day")) {
      // Same day → show only time with AM/PM
      return lastMessageDate.toFormat("hh:mm a");
    }

    if (now.diff(lastMessageDate, "days").days <= 30) {
      // Within last 30 days → show relative day + time
      return lastMessageDate.toFormat("MMM dd, hh:mm a");
    }

    // Older than 30 days → show only date
    return lastMessageDate.toFormat("MMM dd, yyyy");
  }
  static formatTime(dateString: string) {
    const jsDate = new Date(dateString);
    const date = DateTime.fromJSDate(jsDate);

    return date.toFormat("hh:mm a");
  }

  static formatDate(dateString?: string,emptyTag="N/A") {
    if (!dateString) return emptyTag;

    const dt = DateTime.fromISO(dateString, { zone: "utc" }).toLocal();
    return dt.toFormat("dd-MM-yyyy hh:mma");
  }
  
  static getRelativeTime(dateString?: string,emptyTag="") {
    if (!dateString) return emptyTag;

    const dt = DateTime.fromISO(dateString, { zone: "utc" }).toLocal();
    return dt.toRelative();
  }
}
