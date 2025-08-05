const quizzes = {
  KillerBean: [
    {
      question: "What is Killer Bean’s signature weapon?",
      options: ["Coffee Mug", "Katana", "Sniper Rifle", "Pistol"],
      answer: 0
    },
    {
      question: "What type of enemy does KB fight most?",
      options: ["Jet Beans", "Shadow Beans", "Golden Beans", "Bot Beans"],
      answer: 1
    },
    {
      question: "Which beverage gives KB power?",
      options: ["Espresso", "Latte", "Mocha", "Tea"],
      answer: 0
    },
    {
      question: "Where does KB usually fight?",
      options: ["Warehouse", "Arena", "Skyscraper", "Café"],
      answer: 0
    },
    {
      question: "Who taught KB the Coffee Strike?",
      options: ["Master Bean", "Coach Bean", "Shadow Twin", "Cafe Owner"],
      answer: 0
    },
    {
      question: "What color is KB’s suit?",
      options: ["Black", "Navy", "Gray", "White"],
      answer: 0
    }
  ],
  Michael: [
    {
      question: "Michael is known for which game?",
      options: ["Fortnite", "COD", "Killer Bean", "Apex Legends"],
      answer: 0
    },
    {
      question: "Michael’s favorite building material?",
      options: ["Wood", "Brick", "Metal", "Glass"],
      answer: 0
    },
    {
      question: "Michael’s ultimate weapon?",
      options: ["Pump Shotgun", "Rocket Launcher", "Sniper Rifle", "Pistol"],
      answer: 2
    },
    {
      question: "He often plays as a …",
      options: ["Builder", "Sniper", "Brawler", "Healer"],
      answer: 0
    },
    {
      question: "Michael's primary game map zone?",
      options: ["Tilted Towers", "Retail Row", "Pleasant Park", "Salty Springs"],
      answer: 0
    },
    {
      question: "What color is his skin tone in-game?",
      options: ["Green", "Bronze", "Fair", "Ghostly"],
      answer: 1
    }
  ]
  // Add other characters similarly...
};

const quizSystem = {
  currentQuiz: [],
  currentCharacter: "",
  currentQuestionIndex: 0,
  score: 0,

  init() {
    // Attach click listeners to all quiz-card elements
    document.querySelectorAll(".quiz-card").forEach(card => {
      card.addEventListener("click", () => {
        this.startQuiz(card.dataset.character);
      });
    });

    document.querySelector(".close-modal").addEventListener("click", () => {
      this.closeQuiz();
    });
  },

  startQuiz(character) {
    if (!quizzes[character]) {
      alert("Quiz not found for " + character);
      return;
    }

    this.currentCharacter = character;
    this.currentQuiz = quizzes[character];
    this.currentQuestionIndex = 0;
    this.score = 0;

    this.renderQuestion();
    document.querySelector(".quiz-modal").style.display = "flex";
  },

  renderQuestion() {
    const qObj = this.currentQuiz[this.currentQuestionIndex];
    document.querySelector(".question-text").textContent = qObj.question;

    const optsDiv = document.querySelector(".options-container");
    optsDiv.innerHTML = "";

    qObj.options.forEach((opt, i) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = opt;
      btn.dataset.index = i;
      btn.addEventListener("click", (e) => this.checkAnswer(e));
      optsDiv.appendChild(btn);
    });

    // Update progress bar
    const percent = ((this.currentQuestionIndex) / this.currentQuiz.length) * 100;
    document.querySelector(".progress-bar").style.width = `${percent}%`;
  },

  checkAnswer(e) {
    const selected = +e.target.dataset.index;
    const correct = this.currentQuiz[this.currentQuestionIndex].answer;

    if (selected === correct) {
      this.score++;
      e.target.style.background = "var(--gold)";
    } else {
      e.target.style.background = "var(--red)";
    }

    // Disable all options once one is clicked
    e.target.parentElement.querySelectorAll("button").forEach(b => b.disabled = true);

    setTimeout(() => {
      this.currentQuestionIndex++;
      if (this.currentQuestionIndex < this.currentQuiz.length) {
        this.renderQuestion();
      } else {
        this.showResults();
      }
    }, 800);
  },

  showResults() {
    document.querySelector(".quiz-progress").style.display = "none";
    document.querySelector(".options-container").style.display = "none";
    document.querySelector(".question-text").style.display = "none";

    const res = document.querySelector(".results-container");
    res.style.display = "block";
    document.querySelector(".result-score").textContent = `${this.score}/${this.currentQuiz.length}`;

    const msgDiv = document.querySelector(".result-message");
    msgDiv.innerHTML = "";

    if (this.score >= 5) {
      msgDiv.innerHTML = `
        <p>🎉 Congrats! You scored high on the ${this.currentCharacter} quiz!</p>
        <a href="https://youtube.com/@zalegamers" class="btn">Subscribe for More</a>
      `;
    } else {
      msgDiv.innerHTML = `<p>Try again and aim for higher!</p>`;
    }

    this.saveScore();
  },

  saveScore() {
    let scores = JSON.parse(localStorage.getItem("quizScores")) || {};
    if (!scores[this.currentCharacter]) {
      scores[this.currentCharacter] = [];
    }
    scores[this.currentCharacter].push({
      date: new Date().toISOString(),
      score: this.score
    });
    localStorage.setItem("quizScores", JSON.stringify(scores));
  },

  closeQuiz() {
    document.querySelector(".quiz-modal").style.display = "none";
    document.querySelector(".quiz-progress").style.display = "block";
    document.querySelector(".options-container").style.display = "grid";
    document.querySelector(".question-text").style.display = "block";
    document.querySelector(".results-container").style.display = "none";
  }
};

document.addEventListener("DOMContentLoaded", () => quizSystem.init());
