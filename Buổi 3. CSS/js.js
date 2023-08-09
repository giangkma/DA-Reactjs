const enterName = document.querySelector("#enterName");
const enterAge = document.querySelector("#enterAge");
const enterEmail = document.querySelector("#enterEmail");
const openForm = document.querySelector("#enterInfo");
const addStudent = document.querySelector("#submit-modal");
const enterCode = document.querySelector("#enterCode");
const addCode = document.querySelector("#addCode");
const startRandom = document.querySelector("#startRandom");

const renderStudents = document.querySelector("#render-students");
const renderCodes = document.querySelector("#render-codes");

const listResult = document.querySelector("#list-result");

const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");

const listStudent = JSON.parse(sessionStorage.getItem("data")) || [];

const listCode = [];
let result = [];

const onOpenForm = () => {
  modal.style.display = "block";
};

const onAddStudent = () => {
  // const { value } = enterStudent;
  // if (!value) {
  //   return alert("Vui lòng nhập tên học sinh");
  // }
  // listStudent.push(value);
  // enterStudent.value = "";
  // onRenderStudents();
  const name = enterName.value;
  const age = enterAge.value;
  const email = enterEmail.value;
  listStudent.push({
    name: name,
    age: age,
    email: email,
  });
  saveDataToLocal();
  enterAge.value = "";
  enterEmail.value = "";
  enterName.value = "";
  onRenderStudents();
  modal.style.display = "none";
};

const saveDataToLocal = () => {
  sessionStorage.setItem("data", JSON.stringify(listStudent));
};

const onAddCode = () => {
  const { value } = enterCode;
  if (!value) {
    return alert("Vui lòng nhập mã đề thi");
  }
  listCode.push(value);
  enterCode.value = "";
  onRenderCodes();
};

const removeStudent = (index) => {
  listStudent.splice(index, 1);
  saveDataToLocal();
  onRenderStudents();
};

const removeCode = (index) => {
  listCode.splice(index, 1);
  onRenderCodes();
};

const onRenderStudents = () => {
  renderStudents.innerHTML = listStudent
    .map(
      (student, index) => `
    <div class="flex-item">
      <p>${student.name}</p>
      <button onClick="removeStudent('${index}')">X</button>
    </div>
    `
    )
    .join("");
};

const onRenderCodes = () => {
  renderCodes.innerHTML = listCode
    .map(
      (code, index) => `
  <div class="flex-item">
    <p>${code}</p>
    <button onClick="removeCode('${index}')">X</button>
  </div>`
    )
    .join("");
};

const onRenderResult = () => {
  listResult.innerHTML = result
    .map(
      (item) =>
        `<p>${item.name}</p> <p>${item.age}</p> <p>${item.email}</p> <p>${item.code}</p>`
    )
    .join("");
};

const onStartRandom = () => {
  const lengthStudent = listStudent.length;
  const lengthCode = listCode.length;
  if (!lengthStudent || !lengthCode) {
    return alert("Vui lòng nhập đủ thông tin");
  }

  result = listStudent.map(({ name, age, email }, index) => {
    return {
      name,
      age,
      email,
      code: listCode[Math.floor(Math.random() * lengthCode)],
    };
  });
  onRenderResult();
};

openForm.addEventListener("click", onOpenForm);
addStudent.addEventListener("click", onAddStudent);
addCode.addEventListener("click", onAddCode);
startRandom.addEventListener("click", onStartRandom);
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});

onRenderStudents();
