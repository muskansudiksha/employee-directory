
// Mock employee data
let employees = [
    { id: 1, firstName: "Alice", lastName: "Smith", email: "alice@example.com", department: "HR", role: "Manager" },
    { id: 2, firstName: "Bob", lastName: "Brown", email: "bob@example.com", department: "Engineering", role: "Developer" },
    { id: 3, firstName: "Charlie", lastName: "Clark", email: "charlie@example.com", department: "Sales", role: "Executive" },
  ];
  console.log(employees);
  let currentPage = 1;
  let itemsPerPage = 10;
  let filteredEmployees = [...employees];
  
  // DOM Elements
  const grid = document.querySelector(".employee-grid");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  const perPageSelect = document.getElementById("perPage");
  const paginationContainer = document.getElementById("pagination");
  const filterToggle = document.getElementById("filterToggle");
  const filterSidebar = document.getElementById("filterSidebar");
  const filterFirstName = document.getElementById("filterFirstName");
  const filterDepartment = document.getElementById("filterDepartment");
  const filterRole = document.getElementById("filterRole");
  
  // Render employee cards
  function renderEmployees() {
    grid.innerHTML = "";
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const pageData = filteredEmployees.slice(start, end);
    console.log(pageData);
  
    if (pageData.length === 0) {
      grid.innerHTML = "<p>No employees found.</p>";
      return;
    }
  
    pageData.forEach(emp => {
      const card = document.createElement("div");
      card.className = "employee-card";
      card.innerHTML = `
        <p><strong>ID:</strong> ${emp.id}</p>
        <p><strong>Name:</strong> ${emp.firstName} ${emp.lastName}</p>
        <p><strong>Email:</strong> ${emp.email}</p>
        <p><strong>Department:</strong> ${emp.department}</p>
        <p><strong>Role:</strong> ${emp.role}</p>
        <button onclick="editEmployee(${emp.id})">Edit</button>
        <button onclick="deleteEmployee(${emp.id})">Delete</button>
      `;
      grid.appendChild(card);
    });
  
    renderPagination();
  }
  
  // Pagination
  function renderPagination() {
    const totalPages = Math.ceil(filteredEmployees.length / itemsPerPage);
    paginationContainer.innerHTML = "";
  
    for (let i = 1; i <= totalPages; i++) {
      const btn = document.createElement("button");
      btn.textContent = i;
      if (i === currentPage) btn.classList.add("active");
      btn.onclick = () => {
        currentPage = i;
        renderEmployees();
      };
      paginationContainer.appendChild(btn);
    }
  }
  
  // Search
  searchInput.addEventListener("input", () => {
    const term = searchInput.value.toLowerCase();
    filteredEmployees = employees.filter(emp =>
      emp.firstName.toLowerCase().includes(term) ||
      emp.lastName.toLowerCase().includes(term) ||
      emp.email.toLowerCase().includes(term)
    );
    currentPage = 1;
    renderEmployees();
  });
  
  // Sort
  sortSelect.addEventListener("change", () => {
    const value = sortSelect.value;
    if (value) {
      filteredEmployees.sort((a, b) => {
        if (a[value] < b[value]) return -1;
        if (a[value] > b[value]) return 1;
        return 0;
      });
    }
    renderEmployees();
  });
  
  // Items per page
  perPageSelect.addEventListener("change", () => {
    itemsPerPage = parseInt(perPageSelect.value);
    currentPage = 1;
    renderEmployees();
  });
  
  // Filter toggle
  filterToggle.addEventListener("click", () => {
    filterSidebar.classList.toggle("visible");
  });
  
  // Apply Filter
  document.getElementById("applyFilter").addEventListener("click", () => {
    const firstName = filterFirstName.value.toLowerCase();
    const department = filterDepartment.value.toLowerCase();
    const role = filterRole.value.toLowerCase();
  
    filteredEmployees = employees.filter(emp =>
      (!firstName || emp.firstName.toLowerCase().includes(firstName)) &&
      (!department || emp.department.toLowerCase().includes(department)) &&
      (!role || emp.role.toLowerCase().includes(role))
    );
  
    currentPage = 1;
    renderEmployees();
  });
  
  // Clear Filter
  document.getElementById("clearFilter").addEventListener("click", () => {
    filterFirstName.value = "";
    filterDepartment.value = "";
    filterRole.value = "";
    filteredEmployees = [...employees];
    currentPage = 1;
    renderEmployees();
  });
  
  // Edit (placeholder)
  function editEmployee(id) {
    alert(`Edit Employee ID: ${id} — implement this in form.html or modal.`);
  }
  
  // Delete
  function deleteEmployee(id) {
    if (confirm("Are you sure you want to delete this employee?")) {
      employees = employees.filter(emp => emp.id !== id);
      filteredEmployees = [...employees];
      renderEmployees();
    }
  }
  
  // Initial render
  renderEmployees();
  