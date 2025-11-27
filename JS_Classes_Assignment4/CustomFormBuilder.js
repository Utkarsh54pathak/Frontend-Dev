class FormBuilder {
  constructor(fields) {
    this.fields = fields;
    this.form = null;
  }

  generateForm(containerId) {
    const container = document.getElementById(containerId);

    let html = `<form id="dynamicForm">`;

    this.fields.forEach(field => {
      html += `
        <label>${field.label}</label><br>
        <input type="${field.type}" name="${field.label.toLowerCase()}" /><br><br>
      `;
    });

    html += `<button type="button" id="submitBtn">Submit</button></form>`;

    container.innerHTML = html;
    this.form = document.getElementById("dynamicForm");

    document.getElementById("submitBtn").addEventListener("click", () => {
      console.log(this.getFormData());
    });
  }

  getFormData() {
    const data = {};
    const inputs = this.form.querySelectorAll("input");

    inputs.forEach(input => {
      const key = input.name;
      const value = input.value;
      data[key] = value;
    });

    return data;
  }
}

const fields = [
  { type: "text", label: "Username" },
  { type: "email", label: "Email" },
  { type: "password", label: "Password" }
];
const formBuilder = new FormBuilder(fields);