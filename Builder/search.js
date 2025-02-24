// Sample data for materials and shops
const data = [
  { name: "Cement", type: "materials" },
  { name: "Bricks", type: "materials" },
  { name: "Steel Rods", type: "materials" },
  { name: "ABC Construction Shop", type: "shops" },
  { name: "XYZ Materials Shop", type: "shops" },
];

// Function to handle search and filtering
function searchItems() {
  const searchBox = document.getElementById("search-box").value.toLowerCase();
  const filter = document.getElementById("filter").value;
  const results = document.getElementById("search-results");
  
  results.innerHTML = ""; // Clear previous results

  const filteredData = data.filter(item => {
      const matchesSearch = item.name.toLowerCase().includes(searchBox);
      const matchesFilter = filter === "all" || item.type === filter;
      return matchesSearch && matchesFilter;
  });

  if (filteredData.length === 0) {
      results.innerHTML = `<p>No results found.</p>`;
      return;
  }

  filteredData.forEach(item => {
      const div = document.createElement("div");
      div.innerHTML = `<h3>${item.name}</h3><p>Type: ${item.type}</p>`;
      div.classList.add("result-item");
      results.appendChild(div);
  });
}
