A responsive, interactive Employee Directory built with HTML, CSS, JavaScript. This project demonstrates modern front-end development practices without relying on backend APIs or databases.

📂 Project Structure
employee-directory/
├── templates/
│   ├── dashboard.html           # Dashboard listing employees
│   └── form.html                # Add/Edit employee form
├── static/
│   ├── css/
│   │   ├── style.css           # Global styling
│   │   
│   └── javascript/
│       ├── app.js              # Dashboard logic (filter/sort/search/paginate)
│                   
├── README.md

🚀 Setup & Run Instructions
1. Clone Repository 
git clone https://github.com/your-username/employee-directory.git
cd employee-directory
3. Open templates/dashboard.htm and form.html in browser or preview tools. 

🔍 Features
Dashboard Page (dashboard.html)
* Displays a list/grid of employees with:
    * ID, First Name, Last Name, Email, Department, Role 
* Each employee card has:
    * "Edit" and "Delete" buttons 
* Integrated search by name/email 
* Filter sidebar by:
    * First Name, Department, Role 
* Sortable by:
    * First Name and Department 
* Pagination support:
    * Choose items per page (10, 25, 50, 100) 
* Responsive layout:
    * Adapts to desktop, tablet, mobile 
Add/Edit Form Page (form.ftl)
* Form fields:
    * First Name, Last Name, Email, Department, Role 
* Client-side validation using JavaScript:
    * Required fields 
    * Valid email format 

Functional Highlights
* Form validation prevents incorrect entries 
* All interactions managed in memory with graceful error handling 


