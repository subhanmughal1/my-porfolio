import { USER } from "@/features/profile/data/user";

export const SITE_INFO = {
  name: USER.displayName,
  url: process.env.APP_URL || "https://subhandev.com",
  ogImage: USER.ogImage,
  description: USER.bio,
};

export const META_THEME_COLORS = {
  light: "#ffffff",
  dark: "#09090b",
};

export const GITHUB_USERNAME = "subhanmughal1";
export const SOURCE_CODE_GITHUB_URL = "https://github.com/subhanmughal1";