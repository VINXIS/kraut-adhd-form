const asisQuestions = [{
    question: "I regularly hit “reply all” by mistake for e-mails",
    entry: ""
  }, {
    question: "I avoid nice restaurants because meals take too long",
    entry: ""
  }, {
    question: "I have so much energy, I sometimes have trouble catching my breath",
    entry: ""
  }, {
    question: "I often burn food when cooking because I forget about it",
    entry: ""
  }, {
    question: "I’m good at keeping secrets",
    entry: ""
  }, {
    question: "I sometimes enjoy quiet time",
    entry: ""
  }, {
    question: "I would pass up a very high paying job if it required me to sit at a desk all day ",
    entry: ""
  }, {
    question: "I can typically find things in my own home",
    entry: ""
  }, {
    question: "When I have a big decision, I prefer to take time to think about it",
    entry: ""
  }, {
    question: "People seem to think I am a good listener",
    entry: ""
  }, {
    question: "Most of the time I can engage in uninterrupted pleasurable activity",
    entry: ""
  }, {
    question: "I feel I am a good judge of character",
    entry: ""
  }, {
    question: "I’m an impulsive buyer",
    entry: ""
  }, {
    question: "I regularly get distracted by the teacher in class",
    entry: ""
  }, {
    question: "People say that I am generally helpful",
    entry: ""
  }, {
    question: "I frequently send e-mails to the wrong person by mistake",
    entry: ""
  }, {
    question: "I frequently offend people",
    entry: ""
  }, {
    question: "People think I am too loud at parties",
    entry: ""
  }, {
    question: "When I have a big decision, I like to take time to think about it",
    entry: ""
  }, {
    question: "People think that I am caring",
    entry: ""
  }, {
    question: "I am the most talkative person I know",
    entry: ""
  }, {
    question: "I am sensitive to other people’s needs",
    entry: ""
  }, {
    question: "I forget to tie my shoes",
    entry: ""
  }, {
    question: "I often hit “reply all” by mistake for e-mails",
    entry: ""
  }, {
    question: "I sometimes speak slowly when trying to think of something to say",
    entry: ""
  }, {
    question: "People say that I am usually helpful",
    entry: ""
  }, {
    question: "People think I am a good listener",
    entry: ""
  }, {
    question: "I’m empathetic to the needs of others",
    entry: ""
  }, {
    question: "I would not pass up a high paying job if it required me to sit at a desk all day",
    entry: ""
  }, {
    question: "I am unable to watch my favorite TV show without taking a break",
    entry: ""
  }, {
    question: "I frequently miss a button when putting on a shirt",
    entry: ""
  }, {
    question: "I rarely forget to tie my shoes",
    entry: ""
  }, {
    question: "I am good at keeping secrets",
    entry: ""
  }];
function createAsisForm() {
    const div = document.getElementById("asisForm");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    ["Questions", "True", "False"].forEach(text => {
        const th = document.createElement("th");
        th.scope = "col";
        th.innerText = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    asisQuestions.forEach((question, i) => {
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.scope = "row";
        th.innerText = question.question;
        tr.appendChild(th);

        ["True", "False"].forEach((text, j) => {
            const td = document.createElement("td");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${i}`;
            input.value = j;
            td.appendChild(input);
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    div.appendChild(table);    
}

const asrsQuestions = [
    {
        question: "How often do you have trouble wrapping up the final details of a project, once the challenging parts have been done?",
        highlighted: [2, 3, 4],
        entry: "entry.1517725769",
    },
    {
        question: "How often do you have difficulty getting things in order when you have to do a task that requires organization?",
        highlighted: [2, 3, 4],
        entry: "entry.480536559",
    },
    {
        question: "How often do you have problems remembering appointments or obligations?",
        highlighted: [2, 3, 4],
        entry: "entry.1158843316",
    },
    {
        question: "When you have a task that requires a lot of thought, how often do you avoid or delay getting started?",
        highlighted: [3, 4],
        entry: "entry.70663263",
    },
    {
        question: "How often do you fidget or squirm with your hands or feet when you have to sit down for a long time?",
        highlighted: [3, 4],
        entry: "entry.1693133802",
    },
    {
        question: "How often do you feel overly active and compelled to do things, like you were driven by a motor?",
        highlighted: [3, 4],
        entry: "entry.1463463474",
    },
    {
        question: "How often do you make careless mistakes when you have to work on a boring or difficult project?",
        highlighted: [3, 4],
        entry: "entry.2000433354",
    },
    {
        question: "How often do you have difficulty keeping your attention when you are doing boring or repetitive work?",
        highlighted: [3, 4],
        entry: "entry.573737073",
    },
    {
        question: "How often do you have difficulty concentrating on what people say to you, even when they are speaking to you directly?",
        highlighted: [2, 3, 4],
        entry: "entry.2060061086",
    },
    {
        question: "How often do you misplace or have difficulty finding things at home or at work?",
        highlighted: [3, 4],
        entry: "entry.1477192681",
    },
    {
        question: "How often are you distracted by activity or noise around you?",
        highlighted: [3, 4],
        entry: "entry.30399825",
    },
    {
        question: "How often do you leave your seat in meetings or other situations in which you are expected to remain seated?",
        highlighted: [2, 3, 4],
        entry: "entry.1724539142",
    },
    {
        question: "How often do you feel restless or fidgety?",
        highlighted: [3, 4],
        entry: "entry.1705822808",
    },
    {
        question: "How often do you have difficulty unwinding and relaxing when you have time to yourself?",
        highlighted: [3, 4],
        entry: "entry.820223788",
    },
    {
        question: "How often do you find yourself talking too much when you are in social situations?",
        highlighted: [3, 4],
        entry: "entry.1154517036",
    },
    {
        question: "When you’re in a conversation, how often do you find yourself finishing the sentences of the people you are talking to, before they can finish them themselves?",
        highlighted: [2, 3, 4],
        entry: "entry.803752194",
    },
    {
        question: "How often do you have difficulty waiting your turn in situations when turn taking is required?",
        highlighted: [3, 4],
        entry: "entry.1814820830",
    },
    {
        question: "How often do you interrupt others when they are busy?",
        highlighted: [2, 3, 4],
        entry: "entry.1905547175",
    }
];
const asrsQuestionOptions = ["Never", "Rarely", "Sometimes", "Often", "Very Often"];
const asrsPartALength = 6;
const asrsFormTypes = [
    "normal",
    "noHighlight",
    "random",
];
const asrsFormOrderFunctions = {
    "normal": (asrsQuestions) => asrsQuestions,
    "noHighlight": (asrsQuestions) => asrsQuestions,
    "random": (asrsQuestions) => asrsQuestions.sort(() => Math.random() - 0.5),
}
const asrsFormType = asrsFormTypes[Math.floor(Math.random() * asrsFormTypes.length)];
const asrsOrderedQuestions = asrsFormOrderFunctions[asrsFormType](asrsQuestions);
function createAsrsForm() {
    const div = document.getElementById("asrsForm");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    ["Questions", ...asrsQuestionOptions].forEach(text => {
        const th = document.createElement("th");
        th.scope = "col";
        th.innerText = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    appendPartHeader(tbody, "Part A");

    asrsOrderedQuestions.forEach((question, i) => {
        if (i === asrsPartALength)
            appendPartHeader(tbody, "Part B");
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.scope = "row";
        th.innerText = question.question;
        tr.appendChild(th);

        asrsQuestionOptions.forEach((_, j) => {
            const td = document.createElement("td");
            if (asrsFormType === "normal" && question.highlighted.includes(j))
                td.classList.add("highlighted");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${i}`;
            input.value = j;
            td.appendChild(input);
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    div.appendChild(table);

    // TODO: Delete this after development
    const typeDiv = document.createElement("div");
    typeDiv.innerText = `Form type: ${asrsFormType}`;
    div.appendChild(typeDiv);
}

const baseUrl = `https://docs.google.com/forms/d/e/1FAIpQLScOIicBUGYizF1gb4vzxZVbZIBWUot4C8XQrafn0p0UP6zJIg/formResponse?usp=pp_url&submit=Submit&entry.667455850=${asrsFormType}`;

const clicks = [{ p: -1, q: -1, a: -1, c: -1, x: -1, y: -1, d: new Date() }];
const clickEntry = "entry.1947159382";

function createButton(text, clickHandler) {
    const button = document.createElement("button");
    button.innerText = text;
    button.addEventListener("click", clickHandler);
    button.disabled = text === "Previous" && page === 0;
    return button;
}

function resetNavButtons() {
    const buttons = document.getElementById("buttons");
    buttons.innerHTML = "";
    buttons.appendChild(createButton("Previous", (e) => pageHandler(-1)));
    if (page !== 3)
        buttons.appendChild(createButton("Next", (e) => pageHandler(1)));
    if (page === 3) {
        buttons.appendChild(createButton("Submit", (e) => {
            const selected = Array.from(document.querySelectorAll("input:checked"));
            if (selected.length !== asrsOrderedQuestions.length) {
                alert("Please answer all questions");
                return;
            }
    
            const entries = selected.map((input, i) => {
                const question = asrsOrderedQuestions[i];
                return `${question.entry}=${encodeURIComponent(asrsQuestionOptions[input.value])}`;
            });
    
            const clicksString = clicks.map(click => {
                return `${click.p},${click.q},${click.a},${click.c},${click.x},${click.y},${click.d.toISOString()}`;
            }).join("|");
    
            const url = `${baseUrl}&${entries.join("&")}&${clickEntry}=${encodeURIComponent(clicksString)}`;
            window.open(url, "_blank").focus();
            window.location.reload();
        }));
    }
}

let page = 0;
const pageDivIDS = ["frontSection", "demographicsForm", "asisForm", "asrsForm"];
function pageHandler(number) {
    page = Math.max(0, page + number);
    resetNavButtons();

    for (let i = 0; i < pageDivIDS.length; i++) {
        const div = document.getElementById(pageDivIDS[i]);
        div.style.display = i === page ? "block" : "none";
    }
}

document.addEventListener("DOMContentLoaded", () => {
    pageHandler(0);
    createAsisForm();
    createAsrsForm();
});

document.addEventListener("click", (e) => {
    const clickDate = new Date();
    const question = e.target.closest("tr")?.querySelector("th")?.innerText || "N/A";
    const questionIndex = page === 3 ? asrsOrderedQuestions.findIndex(q => q.question === question) : asisQuestions.findIndex(q => q.question === question);
    const answerElement = e.target.closest("td")?.querySelector("input");
    const answer = answerElement?.value || -1;
    clicks.push({
        p: page,
        q: questionIndex,
        a: answer,
        c: typeof answerElement?.checked === "boolean" ? answerElement.checked | 0 : -1,
        x: e.clientX,
        y: e.clientY,
        d: clickDate,
    });
});

function appendPartHeader(tbody, partName) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.innerText = `\n${partName}`;
    tr.appendChild(th);
    tbody.appendChild(tr);
}