const fs = require("fs");
const path = require("path");

const indexPath = path.join(__dirname, "../index.html");

// Read the index.html file
let content = fs.readFileSync(indexPath, "utf8");

// Replace the placeholder with the environment variable
const hfToken = process.env.HF_AUTH_TOKEN;
if (!hfToken) {
  console.error("HF_AUTH_TOKEN environment variable is really not set.");
  process.exit(1);
}

content = content.replace("{{HF_AUTH_TOKEN}}", hfToken);

// Write the updated content back to the file
fs.writeFileSync(indexPath, content, "utf8");
console.log("HF_AUTH_TOKEN successfully injected into index.html!");
