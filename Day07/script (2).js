const recordForm = document.getElementById("record-form");
const nameInput = document.getElementById("name");
const ageInput = document.getElementById("age");
const emailInput = document.getElementById("email");
const editIndexInput = document.getElementById("edit-index");
const recordList = document.getElementById("record-list");

let records = JSON.parse(localStorage.getItem("records")) || [];

// Function to check for duplicate emails
function isDuplicateName(email) {
  return records.some(
    (record) => record.email.toLowerCase() === email.toLowerCase()
  );
}

// Function to display records in the table
function displayRecords() {
  recordList.innerHTML = "";
  if (records.length === 0) {
    const row = document.createElement("tr");
    row.innerHTML = `<td colspan="4" style="text-align:center;color:red;">No Record Found</td>`;
    recordList.appendChild(row);
  } else {
    records.forEach((record, index) => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${record.name}</td>
        <td>${record.age}</td>
        <td>${record.email}</td>
        <td>
          <button onclick="editRecord(${index})">Edit</button>
          <button onclick="deleteRecord(${index})">Delete</button>
        </td>
      `;
      recordList.appendChild(row);
    });
  }
}

// Add or update records on form submit
recordForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value;
  const age = ageInput.value;
  const email = emailInput.value;
  const editIndex = parseInt(editIndexInput.value);

  if (!name || !age || !email) return;

  if (isDuplicateName(email) && editIndex === -1) {
    alert("Record with this email already exists.");
    return;
  }

  if (editIndex === -1) {
    records.push({ name, age, email });
  } else {
    records[editIndex] = { name, age, email };
    editIndexInput.value = -1;
  }

  localStorage.setItem("records", JSON.stringify(records));
  nameInput.value = "";
  ageInput.value = "";
  emailInput.value = "";
  displayRecords();
});

// Delete a record
function deleteRecord(index) {
  records.splice(index, 1);
  localStorage.setItem("records", JSON.stringify(records));
  displayRecords();
}

// Edit a record
function editRecord(index) {
  const record = records[index];
  nameInput.value = record.name;
  ageInput.value = record.age;
  emailInput.value = record.email;
  editIndexInput.value = index;
}

// Display records on initial load
displayRecords();
