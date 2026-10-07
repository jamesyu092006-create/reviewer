function shuffleArray(array) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

let exam = [];

function startExam() {
    exam = shuffleArray(QUESTIONS);
    renderExam();
    window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderExam() {
    const examForm = document.getElementById("examForm");
    const scoreArea = document.getElementById("scoreArea");

    scoreArea.innerHTML = "";
    examForm.innerHTML = "";

    exam.forEach((item, i) => {
        const section = document.createElement("section");
        section.className = "question-card";

        const top = document.createElement("div");
        top.className = "question-top";
        top.innerHTML = `
            <span class="number">${i + 1}</span>
            <span class="lesson">${escapeHtml(item.lesson)}</span>
        `;

        const question = document.createElement("h3");
        question.textContent = item.q;

        const choices = document.createElement("div");
        choices.className = "choices";

        item.o.forEach((choice, j) => {
            const label = document.createElement("label");
            label.className = "choice";
            label.dataset.question = i;
            label.dataset.choice = j;

            const letter = String.fromCharCode(65 + j);

            label.innerHTML = `
                <input type="radio" name="q${i}" value="${j}">
                <span><strong>${letter}.</strong> ${escapeHtml(choice)}</span>
            `;

            choices.appendChild(label);
        });

        section.appendChild(top);
        section.appendChild(question);
        section.appendChild(choices);
        examForm.appendChild(section);
    });

    const submitButton = document.createElement("button");
    submitButton.className = "submit-btn";
    submitButton.type = "submit";
    submitButton.textContent = "Submit 60 Answers";
    examForm.appendChild(submitButton);
}

function submitExam(event) {
    event.preventDefault();

    let score = 0;

    exam.forEach((item, i) => {
        const selectedInput = document.querySelector(`input[name="q${i}"]:checked`);
        const selected = selectedInput ? Number(selectedInput.value) : -1;
        const correct = Number(item.a);

        if (selected === correct) {
            score++;
        }

        const choices = document.querySelectorAll(`[data-question="${i}"]`);

        choices.forEach((label) => {
            const choiceIndex = Number(label.dataset.choice);
            const input = label.querySelector("input");

            input.disabled = true;

            if (choiceIndex === correct) {
                label.classList.add("correct");
            } else if (choiceIndex === selected) {
                label.classList.add("wrong");
            }
        });

        const card = choices[0].closest(".question-card");
        const feedback = document.createElement("div");

        if (selected === correct) {
            feedback.className = "feedback ok";
            feedback.textContent = "Correct";
        } else if (selected === -1) {
            feedback.className = "feedback bad";
            feedback.textContent =
                `No answer. Correct answer: ${String.fromCharCode(65 + correct)}. ${item.o[correct]}`;
        } else {
            feedback.className = "feedback bad";
            feedback.textContent =
                `Incorrect. Correct answer: ${String.fromCharCode(65 + correct)}. ${item.o[correct]}`;
        }

        card.appendChild(feedback);
    });

    const percent = ((score / exam.length) * 100).toFixed(1);

    document.getElementById("scoreArea").innerHTML = `
        <div class="score-card">
            <h2>Your Score: ${score} / ${exam.length}</h2>
            <p>${percent}%</p>
            <button class="btn" type="button" id="restartButton">Take New Random Exam</button>
        </div>
    `;

    const submitButton = document.querySelector(".submit-btn");
    if (submitButton) submitButton.remove();

    document.getElementById("restartButton").addEventListener("click", startExam);

    window.scrollTo({ top: 0, behavior: "smooth" });
}

function escapeHtml(text) {
    return String(text)
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("examForm").addEventListener("submit", submitExam);
    startExam();
});
