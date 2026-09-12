const siteConfig = {
  name: "Idora",
};

document.title = document.title + " - " + siteConfig.name;

document.getElementById("site-header").innerHTML = `
  <header class="banner">
    <h1>${siteConfig.name}</h1>
  </header>
`;

document.getElementById("site-nav").innerHTML = `
  <nav class="sidebar">
    <div class="nav-title">Navigation</div>
    <a href="/">Home</a>
    <a href="/archive-photos.html">Archive Photos</a>
    <a href="/new-visits.html">New Visits</a>
    <a href="/lost-media.html">Lost Media</a>
    <a href="/video-archive.html">Video Archive</a>
    <a href="/coaster-games.html">Coaster Games</a>
    <a href="/news-vault.html">News Vault</a>
    <a href="/site-history.html">Site History</a>
    <a href="/about.html">About</a>
  </nav>
`;

const currentYear = new Date().getFullYear();
document.getElementById("site-footer").innerHTML = `
  <footer>
    &copy; ${currentYear} ${siteConfig.name}. A personal archive project.
  </footer>
`;
