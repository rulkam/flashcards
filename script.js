let progress = {}; 
// 구조: { "physics-mechanics": { correct: 1, total: 2, queue: [...], done: [...] } }

let currentSubject = "";
let currentUnit = "";

const subjects = {
  "과학": {
    "생식과 유전": [
      {
        type: "choice",
        front: "완두가 유전 실험 재료로 알맞은 까닭으로 옳지 않은 것을 고르시오.",
        options: ["한 세대가 짧다.", "지손의 수가 많다.","대립 형질이 뚜렷하다.","교배 실험이 불가능하다."],
        answer: ["교배 실험이 불가능하다."],
        explanation: "정답은 교배 실험이 불가능하다 입니다. 완두는 교배 실험이 가능하므로 옳지 않은 까닭입니다."
      },
      {
        type: "choice",
        front: "한 가지 형질에 대해 서로 다른 대립 형질을 지닌 순종이 개체끼리 교배하였을 때 자손 1대에서 나타나는 형질은?",
        options: ["우성","열성","잡종","순종"],
        answer: ["우성"],
        explanation: "정답은 우성입니다. 한 가지 형질에 대해 서로 다른 대립 형질을 지닌 순종이 교배할 때, 자손 1대에서는 우성이 나타납니다."
      },
      {
        type: "choice",
        front: "사람과 같은 다세포 생물은 성장하면서 몸집이 커진다. 이는 몸을 이루는 세포의 (  )가 증가하는 것이다.",
        options: ["수","크기"],
        answer: ["수"],
        explanation: "정답은 수입니다. 다세포 생물은 성장하면서 몸을 이루는 세포의 수가 증가합니다."
      },
      {
        type: "ordering",
        front: "세포의 ( )에 대한 ( )의 비가 커야 ( )에 유리하다.\n빈칸에 들어갈 말의 순서를 올바르게 배열하시오.",
        options: ["부피","표면적","물질 교환"],
        answer: ["부피","표면적","물질 교환"],
        explanation: "정답은 부피, 표면적, 물질 교환입니다. 세포의 부피에 대한 표면적의 비가 커야 물질 교환에 유리합니다."
      },
      {
        type: "ordering",
        front: "감수 분열에서는 세포 분열이 ( )회 연속해서 일어나 ( )개의 딸세포가 만들어진다.",
        options: ["2","4"],
        answer: ["2","4"],
        explanation: "정답은 2, 4입니다. 감수 분열에서는 세포 분열이 2회 연속해서 일어나 4개의 딸세포가 만들어집니다."
      },
      {
        type: "short",
        front: "사람의 몸을 이루는 체세포에는 ( )개의 염색체가 들어있다. 빈칸에 들어갈 수를 쓰시오.",
        answer: "46",
        explanation: "정답은 46입니다. 사람의 체세포에는 46개의 염색체가 들어있습니다."
      },
      {
        type: "short",
        front: "수정란이 초기에 세포 분열을 빠르게 반복하는 과정을 무엇이라 하는가?",
        answer: "난할",
        explanation: "정답은 난할입니다. 난할은 수정란이 초기에 세포 분열을 빠르게 반복하는 과정을 말합니다."
      },
      {
        type: "short",
        front: "수정란이 세포 분열을 하면서 여러 과정을 거쳐 개체가 되는 과정을 무엇이라 하는가?",
        answer: "발생",
        explanation: "정답은 발생입니다. 발생은 수정란이 세포 분열을 하면서 여러 과정을 거쳐 개체가 되는 과정을 말합니다."
      },
      {
        type: "choice",
        front: "난할을 거듭할수록 세포 수는 증가하고, 세포 1개의 크기는 커진다.",
        options: ["O","X"],
        answer: "X",
        explanation: "정답은 X입니다. 난할을 거듭할수록 세포 수는 증가하지만, 세포 1개의 크기는 작아집니다."
      },
      {
        type: "choice",
        front: "순종의 둥근 완두(RR)와 주름진 완두(rr)를 교배하여 얻은 자손 1대를 자가 수분하여 자손 2대에서 총 800개의 완두를 얻었다.\n이 중 우성 순종인 완두는 이론상 모두 몇 개인가?",
        options: ["0개","100개","200개","400개"],
        answer: "200개",
        explanation: "정답은 200개입니다. 자손 2대의 유전자형의 비는 RR:Rr:rr = 1:2:1로, 우성 순종이 200개가 됩니다."
      },
      {
        type: "choice",
        front: "대립유전자는 상동 염색체의 같은 위치에 존재한다.",
        options: ["O","X"],
        answer: "O",
        explanation: "정답은 O입니다. 대립유전자는 상동 염색체의 같은 위치에 존재합니다."
      },
      {
        type: "choice",
        front: "표현형이 같으면 유전자형도 같아야 한다.",
        options: ["O","X"],
        answer: "X",
        explanation: "정답은 X입니다. 표현형이 같아도 유전자형이 다를 수 있습니다.\n우성 잡종(Rr)과 우성 순종(RR)은 같은 표현형을 가지지만 다른 유전자형을 가집니다."
      },
      {
        type: "choice",
        front: "체세포 분열에서 핵이 먼저 분열하고 세포질은 나중에 분열한다.",
        options: ["O","X"],
        answer: "O",
        explanation: "정답은 O입니다. 체세포 분열에서 핵이 먼저 분열하고 세포질은 나중에 분열합니다."
      },
      {
        type: "choice",
        front: "염색체는 세포 분열 시기에 관찰되지 않는다.",
        options: ["O","X"],
        answer: "X",
        explanation: "정답은 X입니다. 염색체는 세포 분열 시기에 관찰됩니다."
      },
    ],
    "기권과 날씨": [
      {
        type: "ordering",
        front: "지구는 ( )가 있어 대기가 없는 달보다 ( ) 온도에서 ( )을 이룬다. 빈칸에 들어갈 말의 순서를 올바르게 배열하시오.",
        options: ["온실 효과","높은","복사 평형"],
        answer: ["온실 효과","높은","복사 평형"],
        explanation: "정답은 온실 효과, 높은, 복사 평형입니다. 지구는 온실 효과를 통해 높은 온도에서 복사 평형을 이룹니다."
      },
      {
        type: "choice",
        front: "너무 힘들어요 ㅠㅠ",
        options: ["인정","ㄴㄴ"],
        answer: "인정",
        explanation: "ㅠㅠ"
      },
    ],
  },
};


let queue = [];
let wrongQueue = [];
let currentCard = null;
let selectedChoice = null;
let selectedOrder = [];
let draggedIndex = null;
let answered = false;
let correctCount = 0;
let totalCount = 0;

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

function moveOrderingItem(index, direction) {
  const targetIndex = index + direction;
  if (targetIndex < 0 || targetIndex >= selectedOrder.length) return;

  const [moved] = selectedOrder.splice(index, 1);
  selectedOrder.splice(targetIndex, 0, moved);
  renderOrderingOptions();
}

function renderOrderingOptions() {
  const choices = document.getElementById("choices");
  choices.innerHTML = "";

  const controls = document.createElement("div");
  controls.className = "ordering-controls";

  const resetBtn = document.createElement("button");
  resetBtn.type = "button";
  resetBtn.className = "ordering-reset";
  resetBtn.innerText = "순서 초기화";
  resetBtn.disabled = answered;
  resetBtn.onclick = () => {
    if (answered) return;
    selectedOrder = [...currentCard.options];
    renderOrderingOptions();
  };

  controls.appendChild(resetBtn);
  choices.appendChild(controls);

  const list = document.createElement("div");
  list.className = "ordering-list";
  choices.appendChild(list);

  selectedOrder.forEach((opt, index) => {
    const row = document.createElement("div");
    row.className = "order-row";
    row.dataset.value = opt;

    if (answered) {
      row.classList.add("locked");
    }

    row.addEventListener("dragover", (e) => {
      if (answered) return;
      e.preventDefault();
      row.classList.add("drop-target");
    });

    row.addEventListener("dragleave", () => {
      if (answered) return;
      row.classList.remove("drop-target");
    });

    row.addEventListener("drop", (e) => {
      if (answered) return;
      e.preventDefault();
      row.classList.remove("drop-target");

      if (draggedIndex === null || draggedIndex === index) return;

      const [moved] = selectedOrder.splice(draggedIndex, 1);
      selectedOrder.splice(index, 0, moved);
      draggedIndex = null;
      renderOrderingOptions();
    });

    const label = document.createElement("span");
    label.className = "order-label";
    label.innerText = opt;

    const actions = document.createElement("div");
    actions.className = "order-actions";

    const upBtn = document.createElement("button");
    upBtn.type = "button";
    upBtn.className = "move-btn";
    upBtn.innerText = "↑";
    upBtn.setAttribute("aria-label", `${opt} 위로 이동`);
    upBtn.disabled = answered || index === 0;
    upBtn.onclick = () => moveOrderingItem(index, -1);

    const downBtn = document.createElement("button");
    downBtn.type = "button";
    downBtn.className = "move-btn";
    downBtn.innerText = "↓";
    downBtn.setAttribute("aria-label", `${opt} 아래로 이동`);
    downBtn.disabled = answered || index === selectedOrder.length - 1;
    downBtn.onclick = () => moveOrderingItem(index, 1);

    actions.appendChild(upBtn);
    actions.appendChild(downBtn);

    const handle = document.createElement("button");
    handle.type = "button";
    handle.className = "drag-handle";
    handle.setAttribute("aria-label", `${opt} 순서 바꾸기`);
    handle.innerText = "⋮⋮";
    handle.draggable = !answered;
    handle.disabled = answered;

    handle.addEventListener("dragstart", (e) => {
      if (answered) return;
      draggedIndex = index;
      e.dataTransfer.effectAllowed = "move";
    });

    handle.addEventListener("dragend", () => {
      if (answered) return;
      draggedIndex = null;
      document.querySelectorAll(".order-row").forEach(x => x.classList.remove("drop-target"));
    });

    row.appendChild(label);
    row.appendChild(actions);
    row.appendChild(handle);
    list.appendChild(row);
  });
}

function shuffleArray(array) {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

function renderCard() {
  if (!currentCard) return;

  const c = currentCard;

  answered = false;

  const inputEl = document.getElementById("answerInput");
  const choices = document.getElementById("choices");

  // 입력 초기화
  inputEl.disabled = false;
  inputEl.value = "";
  inputEl.classList.remove("input-correct", "input-wrong");

  document.getElementById("card").innerText = c.front;
  document.getElementById("result").innerText = "";
  document.getElementById("explanation").innerText = "";

  selectedChoice = null;
  selectedOrder = [];
  draggedIndex = null;
  answered = false;

  inputEl.style.display = "none";
  choices.innerHTML = "";
  inputEl.focus();

  if (c.type === "short") {
    inputEl.style.display = "block";

    inputEl.onkeydown = (e) => {
      if (e.key === "Enter") {
        e.preventDefault();
        submitAnswer();
      }
    };

  } else if (c.type === "ordering") {
    selectedOrder = shuffleArray(c.options);
    renderOrderingOptions();

  } else {
    const shuffledChoices = shuffleArray(c.options);
    shuffledChoices.forEach(opt => {
      let b = document.createElement("button");
      b.innerText = opt;
      b.className = "choice-btn";

      b.onclick = () => {
        if (answered) return;

        document.querySelectorAll(".choice-btn")
          .forEach(x => x.classList.remove("selected"));

        b.classList.add("selected");
        selectedChoice = opt;
      };

      choices.appendChild(b);
    });
  }

  updateProgress();
}

function submitAnswer() {
  if (!currentCard) return;

  if (answered) return;  // 이미 있으면 유지

  let user;

  if (currentCard.type === "short") {
    user = document.getElementById("answerInput").value;

    if (!user.trim()) {
      alert("정답을 입력해주세요 (ㆆ_ㆆ)");
      answered = false;
      return;
    }

  } else if (currentCard.type === "ordering") {
    user = selectedOrder;

  } else {
    if (!selectedChoice) {
      alert("정답을 선택해주세요 (ㆆ_ㆆ)");
      answered = false;
      return;
    }
    user = selectedChoice;
  }

  checkAnswer(user);
}

function checkAnswer(user) {
  if (!currentCard) return;
  if (answered) return;

  const res = document.getElementById("result");
  const exp = document.getElementById("explanation");
  const inputEl = document.getElementById("answerInput");

  inputEl.disabled = true;

  let isCorrect = false;

  if (currentCard.type === "ordering") {
    const answerValue = currentCard.answer.map(v => String(v).trim());
    const userValue = user.map(v => String(v).trim());
    isCorrect = JSON.stringify(userValue) === JSON.stringify(answerValue);
  } else {
    const answerValue = String(currentCard.answer).trim();
    const userValue = String(user).trim();
    isCorrect = answerValue === userValue;
  }

  if (isCorrect) {
    res.innerText = "정답입니다 (ദ്ദി˙ᗜ˙)";
    correctCount++;

    if (currentCard.type === "short") {
      inputEl.classList.add("input-correct");
    }

  } else {
    res.innerText = "오답입니다 (ᵕ—ᴗ—)";
    wrongQueue.push(currentCard);

    if (currentCard.type === "short") {
      inputEl.classList.add("input-wrong");
    }
  }

  // 객관식 / 순서 배열 색 표시
  if (currentCard.type === "choice") {
    document.querySelectorAll(".choice-btn").forEach(btn => {
      if (btn.innerText === String(currentCard.answer).trim()) {
        btn.classList.add("correct");
      } else if (btn.innerText === selectedChoice) {
        btn.classList.add("wrong");
      }
    });
  } else if (currentCard.type === "ordering") {
    const answerValue = currentCard.answer.map(v => String(v).trim());
    document.querySelectorAll(".order-row").forEach((row, index) => {
      if (row.dataset.value === answerValue[index]) {
        row.classList.add("correct");
      } else if (row.dataset.value === selectedOrder[index]) {
        row.classList.add("wrong");
      }
    });
  }

  exp.innerText = currentCard.explanation;

  answered = true;

  document.querySelectorAll(".order-row").forEach(row => {
    row.classList.add("locked");
  });

  document.querySelectorAll(".drag-handle").forEach(btn => {
    btn.disabled = true;
    btn.draggable = false;
  });

  const resetButton = document.querySelector(".ordering-reset");
  if (resetButton) {
    resetButton.disabled = true;
  }

  updateProgress();

  const key = currentSubject + "-" + currentUnit;
  progress[key].correct = correctCount;
  progress[key].queue = [...queue];
}

function nextCard(first = false) {
  if (!first && !answered) {
    alert("정답을 확인해주세요 (ㆆ_ㆆ)");
    return;
  }

  // 남은 문제 먼저
  if (queue.length > 0) {
    const index = Math.floor(Math.random() * queue.length);
    currentCard = queue[index];
    queue.splice(index, 1);

  } else if (wrongQueue.length > 0) {
    // 남은 문제 다 풀면 오답 시작
    queue = [...wrongQueue];
    wrongQueue = [];

    const index = Math.floor(Math.random() * queue.length);
    currentCard = queue[index];
    queue.splice(index, 1);

  } else {
    const restart = confirm("학습을 완료하였습니다. 다시 학습할까요?");
    if (restart) {
      restartUnit();
    } else {
      goBack();
    }
    return;
  }

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