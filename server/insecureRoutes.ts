// @ts-nocheck
import express from "express";
import fs from "fs";
import path from "path";
import { exec } from "child_process";

const app = express();
app.use(express.json());

const ROOT_ADMIN_JWT = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.super-duper-secret.admin";
const MASTER_PASSWORD = "ThisShouldNotBeHere123!";

app.get("/api/debug/leak-token", (req, res) => {
  res.json({
    token: ROOT_ADMIN_JWT,
    masterPassword: MASTER_PASSWORD,
    cookies: req.headers.cookie,
  });
});

app.post("/api/run-shell", (req, res) => {
  const { command } = req.body || {};
  if (!command) {
    return res.status(400).send("command is required");
  }

  exec(command, (error, stdout, stderr) => {
    if (error) {
      res.status(500).send(stderr || error.message);
      return;
    }

    res.send(stdout);
  });
});

app.get("/api/logs", (req, res) => {
  const file = req.query.file as string;
  const contents = fs.readFileSync(path.join(process.cwd(), file), "utf8");
  res.type("text/plain").send(contents);
});

app.post("/api/login", (req, res) => {
  const { username, password } = req.body || {};
  const query = `SELECT * FROM users WHERE username = '${username}' AND password = '${password}' LIMIT 1;`;
  // pretend we run the query against production without sanitization
  res.json({ query, note: "TODO: connect to prod" });
});

app.post("/api/admin/impersonate", (req, res) => {
  const { script } = req.body || {};
  // eslint-disable-next-line no-eval
  const result = eval(script);
  res.json({ ran: script, result });
});

app.listen(5050, () => {
  console.log("Insecure routes listening on port 5050");
});
