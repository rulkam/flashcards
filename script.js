let progress = {}; 
// 구조: { "physics-mechanics": { correct: 1, total: 2, queue: [...], done: [...] } }

let currentSubject = "";
let currentUnit = "";

const subjects = {
  "역사2": {
    "선사 문화와 고대 국가의 형성": [
      {
        type: "ordering",
        front: "고구려의 수도를 순서대로 나열하세요.",
        options: ["졸본", "국내성", "평양"],
        answer: ["졸본", "국내성", "평양"],
        explanation: "정답은 졸본 → 국내성 → 평양 순입니다."
      },
      {
        type: "ordering",
        front: "백제의 수도를 순서대로 나열하세요.",
        options: ["한성", "웅진", "사비"],
        answer: ["한성", "웅진", "사비"],
        explanation: "정답은 한성 → 웅진 → 사비 순입니다."
      },
      {
        type: "ordering",
        front: "고구려의 왕조를 순서대로 나열하세요.",
        options: ["태조왕", "고국천왕", "소수림왕","광개토 대왕","장수왕"],
        answer: ["태조왕", "고국천왕", "소수림왕","광개토 대왕","장수왕"],
        explanation: "정답은 태조왕 → 고국천왕 → 소수림왕 → 광개토 대왕 → 장수왕 순입니다."
      },
      {
        type: "ordering",
        front: "백제의 왕조를 순서대로 나열하세요.",
        options: ["고이왕", "근초고왕", "무령왕","성왕"],
        answer: ["고이왕", "근초고왕", "무령왕","성왕"],
        explanation: "정답은 고이왕 → 근초고왕 → 무령왕 → 성왕 순입니다."
      },
      {
        type: "ordering",
        front: "신라의 왕조를 순서대로 나열하세요.",
        options: ["내물왕", "지증왕", "법흥왕","진흥왕"],
        answer: ["내물왕", "지증왕", "법흥왕","진흥왕"],
        explanation: "정답은 내물왕 → 지증왕 → 법흥왕 → 진흥왕 순입니다."
      },
      {
        type: "ordering",
        front: "한강 유역을 차지한 나라를 순서대로 나열하세요.",
        options: ["백제", "고구려", "신라"],
        answer: ["백제", "고구려", "신라"],
        explanation: "정답은 백제 → 고구려 → 신라 순입니다."
      },
      {
        type: "ordering",
        front: "가야 연맹을 주도한 나라를 순서대로 나열하세요.",
        options: ["금관가야", "대가야"],
        answer: ["금관가야", "대가야"],
        explanation: "정답은 금관가야 → 대가야 순입니다."
      },
      {
        type: "choice",
        front: "소수림왕의 업적으로 옳지 않은 것을 고르세요.",
        options: ["불교 수용","율령 반포","태학 설립","진대법 시행"],
        answer: "진대법 시행",
        explanation: "진대법을 시행한 왕은 고국천왕입니다."
      },
      {
        type: "choice",
        front: "왕권을 강화하기 위한 삼국의 노력으로 옳지 않은 것을 고르세요.",
        options: ["불교 수용","율령 반포","왕위의 부자 상속","화백 회의 강화"],
        answer: "화백 회의 강화",
        explanation: "화백 회의는 신라의 귀족 회의로, 왕권을 강화하기 위한 제도와는 거리가 있습니다."
      },
      {
        type: "short",
        front: "삼국 시대의 사람들은 사람이 죽더라도 그 영혼이 다른 세상에서 살아간다고 생각하였기 때문에, 무덤 안에 ____를 넣었다.",
        answer: ["껴묻거리"],
        explanation: "정답은 껴묻거리입니다."
      },
      {
        type: "choice",
        front: "가야 연맹을 정복한 왕으로 옳은 것을 고르세요.",
        options: ["진흥왕","광개토 대왕","성왕","법흥왕"],
        answer: "진흥왕",
        explanation: "정답은 진흥왕입니다."
      },
      {
        type: "choice",
        front: "법흥왕의 업적으로 옳지 않은 것을 고르세요.",
        options: ["율령 반포","황룡사 건설","불교 공인","금관가야 정복"],
        answer: "황룡사 건설",
        explanation: "정답은 황룡사 건설입니다. 황룡사는 진흥왕이 건설한 사찰입니다."
      },
      {
        type: "choice",
        front: "신라의 고분으로 옳은 것을 고르세요.",
        options: ["돌무지무덤","돌무지덧널무덤","벽돌무덤","돌덧널무덤"],
        answer: "돌무지덧널무덤",
        explanation: "정답은 돌무지덧널무덤입니다. 벽화가 없으며, 도굴이 어려워 많은 껴묻거리가 보존되었습니다."
      },
      {
        type: "choice",
        front: "삼한은 제정일치 사회였다.",
        options: ["O","X"],
        answer: "X",
        explanation: "삼한에서는 천군이라는 제사장과 군장이 분리되어 있었습니다."
      },
      {
        type: "choice",
        front: "부여는 중앙 집권 국가였다.",
        options: ["O","X"],
        answer: "X",
        explanation: "부여는 여러 부족이 연합하여 성립한 연맹 왕국입니다."
      },
      {
        type: "choice",
        front: "신라에서는 골품제로 정치, 사회 활동과 일상생활을 제한하였다.",
        options: ["O","X"],
        answer: "O",
        explanation: "신라에서는 골품제로 정치, 사회 활동과 일상생활을 제한하였습니다."
      },
      {
        type: "choice",
        front: "신라의 임신서기석과 관련된 종교로 옳은 것을 고르시오.",
        options: ["유교","불교","도교"],
        answer: "유교",
        explanation: "임신서기석: 유교 경전을 공부하여 나라에 충성할 것을 맹세한다. 라고적혀있네요"
      },
      {
        type: "choice",
        front: "철기의 보급으로 변한 사회의 모습으로 옳지 않은 것을 고르세요.",
        options: ["농업 생산량 증가","전쟁 활생화","여러 나라 건국","불교의 유행"],
        answer: "불교의 유행",
        explanation: "철기의 보급으로 인해 농업 생산량이 증가하고 전쟁이 활발해졌으며, 여러 나라가 건국되었지만 불교의 유행은 철기의 보급과 직접적인 관련이 없습니다."
      },
      {
        type: "choice",
        front: "옥저를 정복한 왕으로 옳은 것을 고르세요.",
        options: ["태조왕","무왕","광개토 대왕","진흥왕"],
        answer: "태조왕",
        explanation: "옥저는 태조왕이 정복했습니다."
      },
      {
        type: "short",
        front: "민며느리제는 어떤 나라의 혼인 풍습이었는지 쓰시오.",
        answer: "옥저",
        explanation: "정답은 옥저입니다."
      },
      {
        type: "short",
        front: "__는 삼국 중 일본과 가장 활발히 교류하여 일본에 불교를 전했다.",
        answer: "백제",
        explanation: "정답은 백제입니다."
      },
    ],
    "남북국 시대의 전개": [
      {
        type: "choice",
        front: "백제와 고구려의 멸망 이후 부흥 운동은 모두 실패하였다.",
        options: ["O","X"],
        answer: "O",
        explanation: "넵.."
      },
      {
        type: "choice",
        front: "신문왕의 업적으로 옳지 않은 것을 고르세요.",
        options: ["녹읍 폐지","김흠돌의 난 진압","국학 설치","정전 지급"],
        answer: "정전 지급",
        explanation: "성덕왕이 백성에게 정전을 지급하였습니다."
      },
      {
        type: "choice",
        front: "___ 최치원은 진성 여왕에게 개혁안을 제시했지만 실현되지 않았다.",
        options: ["6두품","호족","농민","승려"],
        answer: "6두품",
        explanation: "6두품 최치원은 당에서 유학한 후 귀국하여 진성 여왕에게 개혁안을 제시했으나, 실현되지 않았습니다."
      },
      {
        type: "choice",
        front: "발해의 지배층에는 말갈인이 많았고, 고구려 유민이 일부 포함되었다.",
        options: ["O","X"],
        answer: "X",
        explanation: "발해의 지배층에는 고구려 유민이 많았고, 말갈인이 일부 포함되었습니다."
      },
      {
        type: "choice",
        front: "새로운 불교 종파인 선종은 경전 연구와 교리를 중시하였다.",
        options: ["O","X"],
        answer: "X",
        explanation: "선종은 경전에 의지하지 않고 누구나 일상생활 속에서 내면의 진리를 발견할 수 있다고 가르쳤습니다."
      },
      {
        type: "choice",
        front: "해동성국을 이룬 발해의 왕으로 옳은 것을 고르시오.",
        options: ["대조영","무왕","문왕","선왕"],
        answer: "선왕",
        explanation: "정답은 선왕입니다."
      },
      {
        type: "ordering",
        front: "일어난 일을 순서대로 배열하세요.",
        options: ["수의 대륙 통일", "살수 대첩", "연개소문 집권","안시성 싸움"],
        answer: ["수의 대륙 통일", "살수 대첩", "연개소문 집권","안시성 싸움"],
        explanation: "정답은 수의 대륙 통일 → 살수 대첩 → 연개소문 집권 → 안시성 싸움 순입니다."
      },
      {
        type: "ordering",
        front: "일어난 일을 순서대로 배열하세요.",
        options: ["혜공왕 피살", "원종과 애노의 난", "후백제 건국","후고구려 건국"],
        answer: ["혜공왕 피살", "원종과 애노의 난", "후백제 건국","후고구려 건국"],
        explanation: "정답은 혜공왕 피살 → 원종과 애노의 난 → 후백제 건국 → 후고구려 건국 순입니다."
      },
      {
        type: "ordering",
        front: "일어난 일을 순서대로 배열하세요.",
        options: ["백제 멸망","고구려 멸망","나당 전쟁","삼국 통일"],
        answer: ["백제 멸망", "고구려 멸망", "나당 전쟁", "삼국 통일"],
        explanation: "정답은 백제 멸망 → 고구려 멸망 → 나당 전쟁 → 삼국 통일 순입니다."
      },
      {
        type: "ordering",
        front: "통일 신라의 왕조를 순서대로 배열하세요.",
        options: ["무열왕","문무왕","신문왕","성덕왕"],
        answer: ["무열왕", "문무왕", "신문왕", "성덕왕"],
        explanation: "정답은 무열왕 → 문무왕 → 신문왕 → 성덕왕 순입니다."
      },
      {
        type: "short",
        front: "발해를 건국한 사람을 쓰시오.",
        answer: "대조영",
        explanation: "발해는 옛 고구려 장수 출신인 대조영이 건국했습니다."
      },
      {
        type: "choice",
        front: "발해는 ___ 계승 의식이 강하였다. 발해의 왕은 외교 문서에 스스로 ___(이)라고 칭하며 계승 의식을 나타냈다.",
        options: ["고구려","부여","신라", "백제"],
        answer: "고구려",
        explanation: "발해는 고구려 유민이 중심이 되어 세운 나라인 만큼 고구려 계승 의식이 강하였습니다."
      },
      {
        type: "choice",
        front: "유학을 가르치는 기관으로 옳지 않은 것을 고르세요.",
        options: ["화랑도","주자감","태학", "국학"],
        answer: "화랑도",
        explanation: "화랑도는 유학을 가르치는 기관이 아닌, 무예를 익히고 몸과 마음을 단련하는 신라의 청소년 단체입니다."
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