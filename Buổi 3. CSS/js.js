const enterStudent = document.querySelector("#enterStudent");
const addStudent = document.querySelector("#addStudent");
const enterCode = document.querySelector("#enterCode");
const addCode = document.querySelector("#addCode");
const startRandom = document.querySelector("#startRandom");

const renderStudents = document.querySelector("#render-students");
const renderCodes = document.querySelector("#render-codes");

const listResult = document.querySelector("#list-result");

const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close-modal");

const listStudent = [];
const listCode = [];
let result = [];

const onAddStudent = () => {
  // const { value } = enterStudent;
  // if (!value) {
  //   return alert("Vui lòng nhập tên học sinh");
  // }
  // listStudent.push(value);
  // enterStudent.value = "";
  // onRenderStudents();
  modal.style.display = "block";
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

const onRenderStudents = () => {
  renderStudents.innerHTML = listStudent
    .map((student) => `<p>${student}</p>`)
    .join("");
};

const onRenderCodes = () => {
  renderCodes.innerHTML = listCode.map((code) => `<p>${code}</p>`).join("");
};

const onRenderResult = () => {
  listResult.innerHTML = result
    .map((item) => `<p>${item.student}</p> <p>${item.code}</p>`)
    .join("");
};

const onStartRandom = () => {
  const lengthStudent = listStudent.length;
  const lengthCode = listCode.length;
  if (!lengthStudent || !lengthCode) {
    return alert("Vui lòng nhập đủ thông tin");
  }

  const newListCode = shuffleArray([...listCode]);
  result = listStudent.map((student, index) => {
    return {
      student,
      code: newListCode[Math.floor(Math.random() * lengthCode)],
    };
  });
  onRenderResult();
};

/* Randomize array in-place using Durstenfeld shuffle algorithm */
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

addStudent.addEventListener("click", onAddStudent);
addCode.addEventListener("click", onAddCode);
startRandom.addEventListener("click", onStartRandom);
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
