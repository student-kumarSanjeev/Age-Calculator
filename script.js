const btnEl = document.getElementById("btn");

const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");
function calculateAge() {
  const birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("Please Enter you Birthday");
    speak("Please Enter you Birthday");
  } else {
    const age = getAge(birthdayValue);
    resultEl.innerText = `You Are ${age} ${age > 1 ? "years" : "year"} old.`;
  }
}
function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text); // Create a speech instance
  window.speechSynthesis.speak(utterance); // Make the browser speak
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();

  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    age--;
  }
  return age;
}
btnEl.addEventListener("click", calculateAge);
