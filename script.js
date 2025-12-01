// ==========================
// DOM ELEMENTS
// ==========================
const form = document.querySelector(".shorten-form");
const input = document.querySelector(".shorten-input");
const errorMsg = document.querySelector(".error-message");
const linksContainer = document.querySelector(".links-list");

// ==========================
// LOCAL STORAGE HELPERS
// ==========================
const STORAGE_KEY = "short-links";

const loadLinks = () => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : [];
};

const saveLinks = (links) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(links));
};

// ==========================
// BITLY API REQUEST
// ==========================
const BITLY_TOKEN = "YOUR_BITLY_TOKEN_HERE"; // Replace with your own token

const shortenUrl = async (longUrl) => {
  const response = await fetch("https://api-ssl.bitly.com/v4/shorten", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${BITLY_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      long_url: longUrl,
      domain: "bit.ly"
    })
  });

  if (!response.ok) {
    throw new Error("Bitly API error");
  }

  return response.json();
};

// ==========================
// RENDER SHORTENED LINKS
// ==========================
const renderLinks = () => {
  const links = loadLinks();
  linksContainer.innerHTML = "";

  links.forEach((item) => {
    const card = document.createElement("div");
    card.classList.add("link-card");

    card.innerHTML = `
      <p class="original-url">${item.original}</p>
      <div class="short-row">
        <a href="${item.short}" class="short-url" target="_blank">${item.short}</a>
        <button class="copy-btn" data-url="${item.short}">Copy</button>
      </div>
    `;

    linksContainer.appendChild(card);
  });
};

// ==========================
// COPY TO CLIPBOARD
// ==========================
linksContainer.addEventListener("click", async (event) => {
  const button = event.target.closest(".copy-btn");
  if (!button) return;

  const urlToCopy = button.dataset.url;

  try {
    await navigator.clipboard.writeText(urlToCopy);
    button.textContent = "Copied!";
    button.classList.add("copied");

    setTimeout(() => {
      button.textContent = "Copy";
      button.classList.remove("copied");
    }, 2000);
  } catch (err) {
    console.error("Failed to copy:", err);
  }
});

// ==========================
// FORM SUBMIT HANDLER
// ==========================
form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const url = input.value.trim();

  if (!url) {
    errorMsg.textContent = "Please add a link";
    input.classList.add("input-error");
    return;
  }

  errorMsg.textContent = "";
  input.classList.remove("input-error");

  try {
    const data = await shortenUrl(url);

    const newLink = {
      original: url,
      short: data.link
    };

    const links = loadLinks();
    links.unshift(newLink);
    saveLinks(links);

    renderLinks();
    input.value = "";
  } catch (error) {
    errorMsg.textContent = "Something went wrong. Try again.";
    console.error(error);
  }
});

// ==========================
// LOAD SAVED LINKS ON START
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  renderLinks();
});

