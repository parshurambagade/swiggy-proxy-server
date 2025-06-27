import {
  SWIGGY_API_URL,
  SWIGGY_MOBILE_API_URL,
  MOBILE_HEADERS,
  DESKTOP_HEADERS,
  SWIGGY_RESTAURANT_URL,
} from "./constants.js";
import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/api/restaurants/nearby", async (req, res) => {
  const { device, lat, lng } = req.query;

  if (!device || !lat || !lng) {
    return res.status(400).json({ error: "Missing required parameters" });
  }

  const swiggyUrl =
    device === "mobile" ? SWIGGY_MOBILE_API_URL : SWIGGY_API_URL;

  const options =
    device === "mobile"
      ? {
          headers: MOBILE_HEADERS,
        }
      : {
          headers: DESKTOP_HEADERS,
        };

  try {
    const response = await fetch(`${swiggyUrl}&lat=${lat}&lng=${lng}`, options);

    const contentType = response.headers.get("content-type");
    if (!response.ok || !contentType?.includes("application/json")) {
      return res
        .status(response.status)
        .json({ error: "Unexpected response", contentType });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy failed", detail: err.message });
  }
});

app.get("/api/restaurant", async (req, res) => {
  const { resId, lat, lng } = req.query;

  if (!resId) {
    return res.status(400).json({ error: "Missing restaurant ID" });
  }

  const URL = SWIGGY_RESTAURANT_URL + resId;

  try {
    const response = await fetch(`${URL}&lat=${lat}&lng=${lng}`, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Safari/537.36",
        Accept: "application/json",
        Referer: "https://www.swiggy.com/",
        Origin: "https://www.swiggy.com",
      },
    });

    const data = await response.json();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json({ error: "Proxy failed", detail: err.message });
  }
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Proxy server running on the port: ${PORT}`);
});
