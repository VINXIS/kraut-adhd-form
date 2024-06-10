const questions = [
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
const questionOptions = ["Never", "Rarely", "Sometimes", "Often", "Very Often"];
const partALength = 6;

const formTypes = [
    "normal",
    "noHighlight",
    "random",
];
const formOrderFunctions = {
    "normal": (questions) => questions,
    "noHighlight": (questions) => questions,
    "random": (questions) => questions.sort(() => Math.random() - 0.5),
}
const formType = formTypes[Math.floor(Math.random() * formTypes.length)];
const orderedQuestions = formOrderFunctions[formType](questions);
const baseUrl = `https://docs.google.com/forms/d/e/1FAIpQLScOIicBUGYizF1gb4vzxZVbZIBWUot4C8XQrafn0p0UP6zJIg/formResponse?usp=pp_url&submit=Submit&entry.667455850=${formType}`;

const clicks = [{ q: -1, a: -1, c: -1, x: -1, y: -1, d: new Date() }];
const clickEntry = "entry.1947159382";

document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("asrsForm");
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    ["Questions", ...questionOptions].forEach(text => {
        const th = document.createElement("th");
        th.setAttribute("scope", "col");
        th.innerText = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    appendPartHeader(tbody, "Part A");

    orderedQuestions.forEach((question, i) => {
        if (i === partALength)
            appendPartHeader(tbody, "Part B");
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.innerText = question.question;
        tr.appendChild(th);

        questionOptions.forEach((_, j) => {
            const td = document.createElement("td");
            if (formType === "normal" && question.highlighted.includes(j))
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

    const button = document.createElement("button");
    button.innerText = "Submit";
    button.addEventListener("click", (e) => {
        const selected = Array.from(document.querySelectorAll("input:checked"));
        if (selected.length !== orderedQuestions.length) {
            alert("Please answer all questions");
            return;
        }

        const entries = selected.map((input, i) => {
            const question = orderedQuestions[i];
            return `${question.entry}=${encodeURIComponent(questionOptions[input.value])}`;
        });

        const clicksString = clicks.map(click => {
            return `${click.q},${click.a},${click.c},${click.x},${click.y},${click.d.toISOString()}`;
        }).join("|");

        const url = `${baseUrl}&${entries.join("&")}&${clickEntry}=${encodeURIComponent(clicksString)}`;
        window.open(url, "_blank").focus();
        window.location.reload();
    });
    div.appendChild(button);

    // TODO: Delete this after development
    const typeDiv = document.createElement("div");
    typeDiv.innerText = `Form type: ${formType}`;
    div.appendChild(typeDiv);
});

document.addEventListener("click", (e) => {
    const clickDate = new Date();
    const question = e.target.closest("tr")?.querySelector("th")?.innerText || "N/A";
    const questionIndex = questions.findIndex(q => q.question === question);
    const answerElement = e.target.closest("td")?.querySelector("input");
    const answer = answerElement?.value || -1;
    clicks.push({
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
    th.innerText = partName;
    tr.appendChild(th);
    tbody.appendChild(tr);
}