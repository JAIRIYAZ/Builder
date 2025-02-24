function performSearch() {
  const query = document.getElementById('search-input').value;
  const resultList = document.getElementById('result-list');

  // Mocked search results
  const results = [
    { name: "ABC Tiles", description: "Quality tiles at low prices" },
    { name: "XYZ Cement", description: "Durable cement for any construction" },
    { name: "SteelMax", description: "Premium steel for strong foundations" },
    { name: "Gold Paint", description: "Long-lasting paint with high coverage" }
  ];

  // Handle empty query
  if (!query.trim()) {
    resultList.innerHTML = results.map(r => `
      <div class="search-result-item">
        <h3>${r.name}</h3>
        <p>${r.description}</p>
      </div>
    `).join("");
    return;
  }

  // Filter results based on the query
  const filtered = results.filter(r =>
    r.name.toLowerCase().includes(query.toLowerCase()) ||
    r.description.toLowerCase().includes(query.toLowerCase())
  );

  // Display results or no results message
  resultList.innerHTML = filtered.length
    ? filtered.map(r => `
        <div class="search-result-item">
          <h3>${highlightText(r.name, query)}</h3>
          <p>${highlightText(r.description, query)}</p>
        </div>
      `).join("")
    : "<p>No results found.</p>";
}

// Highlight search terms
function highlightText(text, query) {
  const regex = new RegExp(`(${query})`, 'gi');
  return text.replace(regex, `<span class="highlight">$1</span>`);
}
