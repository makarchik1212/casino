import { Express, Request, Response } from "express";

// Здесь можно подключить вашу логику по игре Crash/Mines
export function registerRoutes(app: Express) {
  app.get("/api/ping", (_req: Request, res: Response) => {
    res.json({ message: "pong" });
  });

  // Пример эндпоинта Crash game
  app.post("/api/crash/bet", (req, res) => {
    const { userId, betAmount } = req.body;
    // …ваша бизнес-логика…
    res.status(201).json({ userId, betAmount, status: "accepted" });
  });

  // И т. д.
}
