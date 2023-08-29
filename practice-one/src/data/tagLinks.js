import Dashboard from "../assets/images/dashboard.svg";
import DashboardActive from "../assets/images/dashboard-active.svg";
import Analytics from "../assets/images/analytics.svg";
import AnalyticsActive from "../assets/images/analytics-active.svg";
import Invoice from "../assets/images/invoice.svg";
import Schedule from "../assets/images/schedule.svg";
import Calendar from "../assets/images/calendar.svg";
import Messages from "../assets/images/messages.svg";
import Notification from "../assets/images/notification.svg";
import Setting from "../assets/images/setting.svg";

export const tag_links = [
  {
    name: "Dashboard",
    icon: Dashboard,
    activeIcon: DashboardActive,
    path: "/"
  },
  {
    name: "Analytics",
    icon: Analytics,
    activeIcon: AnalyticsActive,
    path: "/analytics"
  },
  {
    name: "Invoice",
    icon: Invoice,
    path: "/invoice"
  },
  {
    name: "Schedule",
    icon: Schedule,
    path: "/schedule"
  },
  {
    name: "Calendar",
    icon: Calendar,
    path: "/calendar"
  },
  {
    name: "Messages",
    icon: Messages,
    path: "/messages"
  },
  {
    name: "Notification",
    icon: Notification,
    path: "/notification"
  },
  {
    name: "Settings",
    icon: Setting,
    path: "/settings"
  },
];
