let progress = {}; 
// 구조: { "physics-mechanics": { correct: 1, total: 2, queue: [...], done: [...] } }

let currentSubject = "";
let currentUnit = "";

const subjects = {
  "운동과 에너지": {
    "등속 운동과 자유 낙하 운동": [
      {
        type: "choice",
        front: "일의 단위는?",
        options: ["N", "J", "W"],
        answer: "J",
        hint: "에너지와 같은 단위를 사용합니다.",
        explanation: "일의 단위는 줄(J)입니다."
      }
    ],
    "일과 에너지": [
      {
        type: "choice",
        front: "문제1",
        options: ["선지1","선지2"],
        answer: "선지1",
        hint: "힌트",
        explanation: "설명"
      },
      {
        type: "short",
        front: "문제2",
        answer: "선지1",
        hint: "힌트",
        explanation: "설명"
      }
    ]
  },

  "화학 반응의 규칙과 에너지 변화": {
    "물질 변화": [
      {
        type: "choice",
        front: "화학 반응식을 나타내는 방법으로 옳은 것은?",
        options: ["화살표의 오른쪽에 반응물을 쓴다.","화살표의 왼쪽에 생성물을 쓴다","반응물이 두 가지 이상이면 각 물질을 '+'로 연결한다.","화살표 좌우의 분자의 종류와 개수가 같도록 화학식 앞에 계수를 붙인다.","계수는 간단한 정수비로 나타내고, 0은 생략할 수 있다."],
        answer: "반응물이 두 가지 이상이면 각 물질을 '+'로 연결한다.",
        hint: "문제를 잘 읽어봅시다.",
        explanation: "화학 반응식에서 반응물이 두 가지 이상일 때 각 물질을 '+'로 연결하여야 합니다."
      },
      {
        type: "choice",
        front: "다음 중 화학 변화의 예시로 올바른 것은?",
        options: ["컵이 깨진다.","아이스크림이 녹는다.","향수 냄새가 퍼진다.","철이 녹슨다.","유리창에 김이 서린다."],
        answer: "철이 녹슨다.",
        hint: "화학 변화는 어떤 물질이 성질이 다른 물질로 변하는 현상입니다.",
        explanation: "철이 녹슬 때 철과 산소가 만나 반응하여 물질의 성질이 변하기 때문에 철이 녹스는 것은 화학 변화입니다."
      }
    ],
    "화학 반응의 규칙": [
      {
        type: "choice",
        front: "질량 보존 법칙에 대한 설명으로 옳지 않은 것은?",
        options: ["선지1","선지2"],
        answer: "선지1",
        hint: "힌트",
        explanation: "설명"
      },
      {
        type: "choice",
        front: "문제2",
        options: ["선지1","선지2"],
        answer: "선지1",
        hint: "힌트",
        explanation: "설명"
      }
    ],
    "화학 반응에서의 에너지 출입": [
      {
        type: "choice",
        front: "문제1",
        options: ["선지1","선지2"],
        answer: "선지1",
        hint: "힌트",
        explanation: "설명"
      },
      {
        type: "choice",
        front: "문제2",
        options: ["선지1","선지2"],
        answer: "선지1",
        hint: "힌트",
        explanation: "설명"
      }
    ]
  }
};


let queue = [];
let currentCard = null;
let selectedChoice = null;
let answered = false;
let correctCount = 0;
let totalCount = 0;

function normalize(str) {
  return str.replace(/\s/g, "").toLowerCase();
}

function showSubjects() {
  currentPage = "subject";

  const menu = document.getElementById("menu");
  menu.innerHTML = "<h2>과목을 선택해주세요.</h2>";

  for (let sub in subjects) {
    let btn = document.createElement("button");
    btn.innerText = sub;
    btn.onclick = () => showUnits(sub);
    menu.appendChild(btn);
  }
}

function showUnits(subject) {
  currentPage = "unit";
  currentSubject = subject;

  renderHeader("단원을 선택해주세요.");

  for (let unit in subjects[subject]) {
    let btn = document.createElement("button");
    btn.innerText = unit;
    btn.onclick = () => startStudy(subject, unit);
    document.getElementById("menu").appendChild(btn);
  }
}

function startStudy(subject, unit) {
  currentPage = "study";
  currentSubject = subject;
  currentUnit = unit;

  document.getElementById("menu").style.display = "none";
  document.getElementById("study").style.display = "block";

  const key = subject + "-" + unit;

  if (progress[key]) {
    queue = [...progress[key].queue];
    correctCount = progress[key].correct;
    totalCount = progress[key].total;
  } else {
    queue = [...subjects[subject][unit]];
    totalCount = queue.length;
    correctCount = 0;

    progress[key] = {
      correct: 0,
      total: totalCount,
      queue: [...queue]
    };
  }

  currentCard = null;
  nextCard(true);
  updateProgress();
}

function renderCard() {
  const c = currentCard;

  document.getElementById("card").innerText = c.front;
  document.getElementById("result").innerText = "";
  document.getElementById("explanation").innerText = "";

  selectedChoice = null;
  answered = false;

  let input = document.getElementById("answerInput");
  let choices = document.getElementById("choices");

  input.style.display = "none";
  choices.innerHTML = "";

  if (c.type === "short") {
    input.style.display = "block";
    input.value = "";

    input.onkeydown = (e) => {
      if (e.key === "Enter") submitAnswer();
    };

  } else {
    c.options.forEach(opt => {
      let b = document.createElement("button");
      b.innerText = opt;
      b.className = "choice-btn";

      b.onclick = () => {
        if (answered) return;

        document.querySelectorAll(".choice-btn").forEach(x => x.classList.remove("selected"));
        b.classList.add("selected");
        selectedChoice = opt;
      };

      choices.appendChild(b);
    });
  }

  updateProgress();
}

function submitAnswer() {
  if (answered) return;

  let user;

  if (currentCard.type === "short") {
    user = document.getElementById("answerInput").value;
  } else {
    if (!selectedChoice) return;
    user = selectedChoice;
  }

  checkAnswer(user);
}

function checkAnswer(user) {
  if (answered) return;

  const correct = normalize(user) === normalize(currentCard.answer);
  const res = document.getElementById("result");
  const exp = document.getElementById("explanation");

  if (correct) {
    res.innerText = "정답입니다.";
    correctCount++;
  } else {
    res.innerText = "오답입니다.";
    queue.push(currentCard);
  }

  exp.innerText = currentCard.explanation;

  // 객관식 색 변화
  if (currentCard.type === "choice") {
    document.querySelectorAll(".choice-btn").forEach(btn => {
      if (btn.innerText === currentCard.answer) {
        btn.classList.add("correct");
      } else if (btn.innerText === selectedChoice) {
        btn.classList.add("wrong");
      }
    });
  }

  answered = true;
  updateProgress();
  const key = currentSubject + "-" + currentUnit;
progress[key].correct = correctCount;
progress[key].queue = [...queue];
}

function showHint() {
  if (answered) return;
  document.getElementById("result").innerText = "힌트: " + currentCard.hint;
}

function nextCard(first = false) {
  if (!first && !answered) {
    alert("정답을 확인해주세요");
    return;
  }

  if (queue.length === 0) {
    // 여기 수정
    const restart = confirm("학습을 완료하였습니다. 다시 학습할까요?");
    if (restart) {
      restartUnit();
      return;
    } else {
      goBack();
      return;
    }
  }

  const index = Math.floor(Math.random() * queue.length);
  currentCard = queue[index];
  queue.splice(index, 1);

  answered = false;
  renderCard();
}

function renderHeader(title) {
  const menu = document.getElementById("menu");

  menu.innerHTML = `
    <div style="display:flex; align-items:center; gap:10px;">
      <button id="backBtn" onclick="goBack()">←</button>
      <h2>${title}</h2>
    </div>
  `;
}

function restartUnit() {
  const key = currentSubject + "-" + currentUnit;

  queue = [...subjects[currentSubject][currentUnit]];
  correctCount = 0;
  totalCount = queue.length;

  progress[key] = {
    correct: 0,
    total: totalCount,
    queue: [...queue]
  };

  currentCard = null;
  nextCard(true);
  updateProgress();
}

function updateProgress() {
  let percent = Math.floor((correctCount / totalCount) * 100);
  document.getElementById("progressBar").style.width = percent + "%";
}

function goBack() {
  if (currentPage === "study") {
    document.getElementById("study").style.display = "none";
    document.getElementById("menu").style.display = "block";
    showUnits(currentSubject);
  }
  else if (currentPage === "unit") {
    showSubjects();
  }
}

function endStudy() {
  document.getElementById("study").style.display = "none";
  document.getElementById("menu").style.display = "block";
  showSubjects();
}

showSubjects();