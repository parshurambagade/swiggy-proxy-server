export const SWIGGY_API_URL =
  "https://www.swiggy.com/dapi/restaurants/list/v5?is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING";
export const SWIGGY_MOBILE_API_URL =
  "https://www.swiggy.com/mapi/restaurants/list/v5?is-seo-homepage-enabled=true";

export const SWIGGY_RESTAURANT_URL =
  "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&restaurantId=";

export const MOBILE_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Linux; Android 10; SM-G975F) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.5005.61 Mobile Safari/537.36",
  Accept: "application/json",
  Referer: "https://www.swiggy.com/",
  Origin: "https://www.swiggy.com",
};

export const DESKTOP_HEADERS = {
  "User-Agent":
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
  Accept: "application/json",
  Referer: "https://www.swiggy.com/",
  Origin: "https://www.swiggy.com",
};
