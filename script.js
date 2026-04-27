let progress = {}; 
// 구조: { "physics-mechanics": { correct: 1, total: 2, queue: [...], done: [...] } }

let currentSubject = "";
let currentUnit = "";

const subjects = {
  "운동과 에너지": {
    "등속 운동과 자유 낙하 운동": [
      {
        type: "choice",
        front: "힘은 물체의 (  )을 변화시키는 원인이다.\n빈칸에 들어갈 수 없는 말은?",
        options: ["빠르기","운동 방향","질량","모양"],
        answer: "질량",
        hint: "힘을 받은 물체는 무엇이 변하는지 생각해 봅시다.",
        explanation: "힘은 물체의 모양, 운동 방향, 빠르기를 변화시키는 원인입니다."
      },
      {
        type: "short",
        front: "컨베이어 벨트 위에서 운동하는 물체에 작용하는 알짜힘은 ( )이다.",
        answer: "0",
        hint: "컨베이어 벨트 위에서 물체는 등속직선운동을 합니다.",
        explanation: "컨베이어 벨트 위에서 운동하는 물체는 빠르기, 운동 방향, 모양이 일정하기 때문에 물체에 작용하는 알짜힘은 0입니다."
      },
      {
        type: "choice",
        front: "1시간에 72km를 움직이는 자동차의 속력은 몇 m/s인가?",
        options: ["10","20","36","60","72"],
        answer: "20",
        hint: "72km/h를 m/s 단위로 변환합니다.",
        explanation: "72km/h는 72,000m/3600s로 변환되며 이는 20m/s입니다."
      },
      {
        type: "choice",
        front: "등속 운동을 하는 물체의 예시가 아닌 것은?",
        options: ["모노레일","무빙워크","에스컬레이터","케이블카","떨어뜨린 공"],
        answer: "떨어뜨린 공",
        hint: "등속 운동은 빠르기와 방향이 일정한 운동입니다.",
        explanation: "떨어뜨린 공은 중력의 영향을 받아 속력이 증가하는 운동을 하므로 등속 운동이 아닙니다."
      }
    ],
    "일과 에너지": [
      {
        type: "choice",
        front: "일의 단위는?",
        options: ["N", "J", "W","kg","m/s"],
        answer: "J",
        hint: "일은 에너지와 같은 단위를 사용합니다.",
        explanation: "일의 단위는 줄(J)입니다."
      },
      {
        type: "choice",
        front: "과학에서의 일을 한 예시가 아닌 것은?",
        options: ["바닥에 놓인 화분을 선반 위에 올려놓았다.","책을 읽었다.","교실 바닥에 놓인 책상을 교실 뒤까지 밀고 갔다.","가방을 메고 계단을 걸어 올라갔다."],
        answer: "책을 읽었다.",
        hint: "과학에서의 일은 물체에 힘이 작용하여 물체가 힘의 방향으로 이동하는 경우입니다.",
        explanation: "책을 읽는 것은 물체에 힘이 작용하여 이동하는 경우가 아니므로 과학에서의 일이 아닙니다."
      },
      {
        type: "choice",
        front: "물체에 일을 하면 물체의 에너지가 증가한다.",
        options: ["O","X"],
        answer: "O",
        hint: "일과 에너지는 서로 전환될 수 있는지 생각해 봅시다.",
        explanation: "물체에 일을 하면 물체의 에너지가 증가합니다."
      },
      {
        type: "short",
        front: "중력에 의한 위치 에너지 = (  ) × 질량 × 높이이다. 빈칸에 들어갈 수를 쓰시오.",
        answer: "9.8",
        hint: "중력 가속도의 값은 9.8입니다.",
        explanation: "중력에 의한 위치 에너지의 크기는 중력에 대해 한 일에 양과 같습니다. 따라서 중력에 의한 위치 에너지는 (물체에 작용한 중력의 크기 = 질량 × 9.8) × (높이)로 계산됩니다."
      },
      {
        type: "short",
        front: "일을 할 수 있는 능력을 (   )라고 한다.",
        answer: "에너지",
        hint: "둘은 서로 전환될 수 있습니다.",
        explanation: "일을 할 수 있는 능력은 에너지입니다."
      },
      {
        type: "choice",
        front: "어떤 상자를 5 N의 힘으로 밀고 가는 동안 한 일의 양이 60 J이었다. 상자가 이동한 거리는 몇 m인가?",
        options: ["6","12","15","20","24"],
        answer: "12",
        hint: "일 = 힘 × 이동 거리",
        explanation: "일 = 힘 × 이동 거리이므로, 60 J = 5 N × 이동 거리입니다. 따라서 이동 거리는 12 m입니다."
      }
    ]
  },

  "화학 반응의 규칙과 에너지 변화": {
    "물질 변화와 화학 반응식": [
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
      },
      {
        type: "short",
        front: "마그네슘 리본을 구부리면 모양은 변하지만 색깔, 광택, 묽은 염산과의 반응 등 마그네슘 고유의 (  )은 변하지 않는다.",
        answer: "성질",
        hint: "마그네슘 리본을 구부리는 것은 물질 고유의 (  )이 변하지 않으므로 물리 변화입니다.",
        explanation: "마그네슘 리본을 구부리면 모양은 변하지만 물질 고유의 성질은 변하지 않습니다."
      },
      {
        type: "short",
        front: "김치가 익는 것은 화학 변화와 물리 변화 중 (  ) 변화이다.",
        answer: "화학",
        hint: "김치가 익으면 맛, 냄새 등의 물질 고유의 성질이 다른 새로운 물질로 변합니다.",
        explanation: "어떤 물질이 성질이 다른 새로운 물질로 변하는 현상은 화학 변화입니다."
      },
      {
        type: "choice",
        front: "물질이 연소하거나 과일이 익는 현상은 (  ) 변화이다.",
        options : ["화학","물리"],
        answer: "화학",
        hint: "물질이 연소하거나 과일이 익을 때 물질의 성질이 변합니다.",
        explanation: "물질이 연소하거나 과일이 익을 때 물질 고유의 성질이 다른 새로운 물질로 변하기 때문에 화학 변화입니다."
      },
      {
        type: "choice",
        front: "화학 변화에 대한 설명으로 옳은 것을 고르시오.",
        options : ["물질의 모양이나 상태가 변하는 현상이다.","물질의 고유한 성질이 변하지 않는다.","성질이 다른 새로운 물질로 바뀌는 변화이다","물질을 구성하는 분자의 배열이 변한다.","물질을 구성하는 원자의 개수가 변한다."],
        answer: "성질이 다른 새로운 물질로 바뀌는 변화이다",
        hint: "화학 변화의 정의를 생각해 봅시다.",
        explanation: "화학 변화란 어떤 물질이 성질이 다른 새로운 물질로 변하는 현상입니다."
      },
      {
        type: "choice",
        front: "다음 중 물리 변화로 올바른 것은?",
        options: ["장작이 타면서 열을 낸다.","물이 끓어 수증기가 된다.","마그네슘을 태우면 하얀 물질이 생긴다.","질소와 수소를 이용하여 암모니아를 합성한다.","숯을 태워 고기를 구웠다."],
        answer: "물이 끓어 수증기가 된다.",
        hint: "물리 변화의 정의를 생각해 봅시다.",
        explanation: "물이 끓어 수증기가 되는 현상은 물질의 상태가 변하는 현상으로 물리 변화입니다."
      },
      {
        type: "short",
        front: "화학 반응식은 (   )을 이용하여 화학 반응을 나타낸 것이다.",
        answer: "화학식",
        hint: "화학 반응식을 적을 때 반응물과 생성물을 어떤 문자로 나타내는지 생각해봅시다.",
        explanation: "화학 반응식은 화학식을 이용하여 화학 반응을 나타낸 것입니다."
      },
      {
        type: "choice",
        front: "화학 반응식에서 반응 전후에 원자의 종류와 수가 같게 계수를 맞추어야 하는 이유는?",
        options: ["화학 반응이 일어날 때 분자의 수가 변하지 않아서","화학 반응이 일어날 때 새로운 원자가 생성돼서","화학 반응이 일어날 때 원자가 새로 생기거나 없어지지 않아서"],
        answer: "화학 반응이 일어날 때 원자가 새로 생기거나 없어지지 않아서",
        hint: "화학 반응이 일어날 때 질량은 보존됩니다.",
        explanation: "화학 반응이 일어날 때 원자가 새로 생기거나 없어지지 않기 때문에 반응 전후에 원자의 종류와 수가 같게 계수를 맞추어야 합니다."
      },
      {
        type: "choice",
        front: "물리 변화가 일어날 때 변하는 것을 고르시오.",
        options: ["원자의 배열","원자의 종류와 개수","물질의 성질","분자의 종류와 개수","분자의 배열"],
        answer: "분자의 배열",
        hint: "물리 변화는 물질의 고유한 성질은 변하지 않으면서 모양이나 상태가 변하는 현상입니다.",
        explanation: "물리 변화가 일어날 때 분자의 배열이 변하기 때문에 물질의 모양이나 상태가 변합니다."
      },
      {
        type: "choice",
        front: "다음 빈칸에 공통으로 들어갈 숫자로 알맞은 것은?\n( )H₂ + ( )O₂ → ( )H₂O",
        options: ["1","2","3","4","5"],
        answer: "2",
        hint: "화학 반응식에서 계수를 맞출 때는 원자의 종류와 수가 같도록 해야 합니다.",
        explanation: "화학 반응식에서 계수를 맞추면 2H₂ + O₂ → 2H₂O가 됩니다. 따라서 빈칸에 공통으로 들어갈 숫자는 2입니다."
      },
      {
        type: "choice",
        front: "다음 빈칸에 들어갈 숫자로 알맞은 것은?\nCH₄ + ( )O₂ → CO₂ + 2H₂O",
        options: ["1","2","3","4","5"],
        answer: "2",
        hint: "화학 반응식에서 계수를 맞출 때는 원자의 종류와 수가 같도록 해야 합니다.",
        explanation: "화학 반응식에서 계수를 맞추면 CH₄ + 2O₂ → CO₂ + 2H₂O가 됩니다. 따라서 빈칸에 들어갈 숫자는 2입니다."
      },
      {
        type: "choice",
        front: "화학 반응식으로 알 수 있는 것으로 옳은 것은?",
        options: ["반응물과 생성물의 질량비","반응물과 생성물의 원자의 부피비","반응물과 생성물의 온도 변화","반응물과 생성물의 상태","반응물과 생성물의 총질량"],
        answer: "반응물과 생성물의 질량비",
        hint: "화학 반응식이 무엇을 나타내는지 생각해 봅시다.",
        explanation: "화학 반응식에서 반응하거나 생성되는 물질의 입자 수의 비는 질량비입니다."
      },
      {
        type: "short",
        front: "다음은 질소와 수소가 반응하여 암모니아가 생성되는 화학 반응식이다.\nN₂ + 3H₂ → 2NH₃\n수소 분자 6개가 완전히 반응할 때 생성되는 암모니아 분자의 수를 쓰시오.",
        answer: "4",
        hint: "화학 반응식을 보면, 3개의 수소 분자가 2개의 암모니아 분자를 생성합니다.",
        explanation: "6개의 수소 분자는 4개의 암모니아 분자를 생성합니다."
      }
    ],
    "화학 반응의 규칙": [
      {
        type: "choice",
        front: "H₂O를 이루는 수소와 산소 사이의 질량비로 올바른 것은?\n(단, 각 원자의 질량비는 수소:산소 = 1:16이다.)",
        options: ["1:16","1:8","1:4","8:1","16:1"],
        answer: "1:16",
        hint: "수소 원자의 질량은 1, 산소 원자의 질량은 16입니다.",
        explanation: "H₂O 분자에서는 2개의 수소 원자와 1개의 산소 원자가 결합하므로, 질량비는 (2×1):(1×16) = 2:16 = 1:8입니다."
      },
      {
        type: "choice",
        front: "나무가 연소하고 남은 재는 나무보다 질량이 작다.",
        options: ["O","X"],
        answer: "O",
        hint: "나무가 연소하면 기체가 생성됩니다.",
        explanation: "나무가 연소할 때 생성되는 이산화 탄소와 수증기가 공기 중으로 날아가기 때문에 나무가 연소하고 남은 재는 나무보다 질량이 작습니다."
      },
      {
        type: "choice",
        front: "다음 중 빈칸에 들어갈 말이 아닌 것은?\n일정 (  ) 법칙: (  )을 구성하는 성분 ( ) 사이에는 일정한 (  )비가 성립한다.",
        options: ["성분비","화합물","원소","부피","질량"],
        answer: "부피",
        hint: "일정 성분비 법칙의 정의를 생각해 봅시다.",
        explanation: "화합물을 구성하는 성분 원소 사이에는 일정한 질량비가 성립합니다. 해당 법칙을 일정 성분비 법칙이라고 합니다."
      },
      {
        type: "choice",
        front: "다음 중 화합물이 아닌 것은?",
        options: ["염화 나트륨","암모니아","이산화 탄소","수소","물"],
        answer: "수소",
        hint: "화합물은 서로 다른 원소들이 결합하여 만들어진 물질입니다.",
        explanation: "수소는 단일 원소로 존재하는 물질이므로 화합물이 아닙니다."
      },
      {
        type: "choice",
        front: "기체가 발생하는 반응은 질량 보존 법칙이 성립하지 않는다.",
        options: ["O","X"],
        answer: "X",
        hint: "질량 보존 법칙은 화학 반응이 일어날 때 반응물과 생성물의 총질량이 같다는 법칙입니다.",
        explanation: "기체가 발생해도 반응 전후의 총질량은 같습니다."
      },
      {
        type: "short",
        front: "일정한 온도와 압력에서 기체가 반응하여 새로운 기체를 생성할 때 각 기체의 (  ) 사이에는 간단한 정수비가 성립한다.",
        answer: "부피",
        hint: "기체 반응 법칙의 정의를 생각해 봅시다.",
        explanation: "일정한 온도와 압력에서 기체가 반응할 때 각 기체의 부피 사이에는 간단한 정수비가 성립합니다. 이를 아보가드로의 법칙이라고 합니다."
      },
    ],
    "화학 반응에서의 에너지 출입": [
      {
        type: "short",
        front: "화학 반응이 일어날 때에는 (   )를 방출하거나 흡수한다.",
        answer: "에너지",
        hint: "화학 반응이 일어날 때 에너지가 방출되거나 흡수되는 현상을 생각해 봅시다.",
        explanation: "화학 반응이 일어날 때에는 에너지를 방출하거나 흡수합니다."
      },
      {
        type: "choice",
        front: "식물이 광합성할 때 주변의 온도는 어떻게 변하는가?",
        options: ["높아진다","낮아진다","변하지 않는다"],
        answer: "낮아진다",
        hint: "식물의 광합성은 에너지를 흡수하는 반응입니다.",
        explanation: "식물이 광합성을 할 때는 에너지를 흡수하여 주변 온도가 낮아집니다."
      },
      {
        type: "choice",
        front: "다음 중 에너지를 방출하는 화학 반응이 아닌 것은?",
        options: ["수산화 바륨과 염화 암모늄이 반응한다.","나무가 연소한다.","산화 칼슘과 물이 반응한다.","염산과 수산화 나트륨 수용액이 반응한다."],
        answer: "수산화 바륨과 염화 암모늄이 반응한다.",
        hint: "에너지를 방출하는 화학 반응은 무엇이 있는지 생각해 봅시다.",
        explanation: "수산화 바륨과 염화 암모늄이 반응하는 것은 에너지를 흡수하는 반응입니다."
      },
      {
        type: "choice",
        front: "화학 반응에서 출입하는 에너지를 활용한 냉각 장치를 만들 때 이용할 수 있는 반응으로 옳은 것은?",
        options: ["숯의 연소","철과 산소의 반응","질산 암모늄과 물의 반응","산화 칼슘과 물의 반응"],
        answer: "질산 암모늄과 물의 반응",
        hint: "화학 반응이 일어날 때 에너지를 흡수하면 주변의 온도가 낮아집니다.",
        explanation: "질산 암모늄과 물이 반응할 때 주변의 에너지를 흡수해 주변 온도를 낮춥니다."
      },
      {
        type: "short",
        front: "다음은 물질이 타기 위해 필요한 세 가지 요소이다.\n-탈 물질\n-(  )\n-발화점 이상의 온도\n빈칸에 들어갈 요소는?",
        answer: "산소",
        hint: "물질이 연소할 때 어떤 요소가 필요한지 생각해 봅시다.",
        explanation: "물질이 타기 위해서는 탈 물질, 산소, 그리고 발화점 이상의 온도가 필요합니다."
      },
    ]
  }
};


let queue = [];
let currentCard = null;
let selectedChoice = null;
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

  } else {
    c.options.forEach(opt => {
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
      alert("정답을 입력해주세요");
      answered = false;
      return;
    }

  } else {
    if (!selectedChoice) {
      alert("정답을 선택해주세요");
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

  const answerValue = String(currentCard.answer).trim();
  const userValue = String(user).trim();

  if (userValue === answerValue) {
    res.innerText = "정답";
    correctCount++;

    if (currentCard.type === "short") {
      inputEl.classList.add("input-correct");
    }

  } else {
    res.innerText = "오답";
    queue.push(currentCard);

    if (currentCard.type === "short") {
      inputEl.classList.add("input-wrong");
    }
  }

  // 객관식 색 표시
  if (currentCard.type === "choice") {
    document.querySelectorAll(".choice-btn").forEach(btn => {
      if (btn.innerText === answerValue) {
        btn.classList.add("correct");
      } else if (btn.innerText === selectedChoice) {
        btn.classList.add("wrong");
      }
    });
  }

  exp.innerText = currentCard.explanation;

  answered = true;
  updateProgress();

  const key = currentSubject + "-" + currentUnit;
  progress[key].correct = correctCount;
  progress[key].queue = [...queue];
}

function showHint() {
  if (!currentCard) return;
  if (answered) return;
  document.getElementById("result").innerText = "힌트: " + currentCard.hint;
}

function nextCard(first = false) {
  if (!first && !answered) {
    alert("정답을 확인해주세요.");
    return;
  }

  if (queue.length === 0) {
    const restart = confirm("학습을 완료하였습니다. 다시 학습할까요?");
    if (restart) {
      restartUnit();
    } else {
      goBack();
    }
    return;
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