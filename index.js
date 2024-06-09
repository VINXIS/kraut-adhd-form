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

document.addEventListener("DOMContentLoaded", () => {
    const div = document.getElementById("asrsForm");

    // Create a 6 column grid/table. First column has the question, the rest 5 have options of Never, Rarely, Sometimes, Often, Very Often. Have the first 6 questions in part A, and the rest in part B.
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const theadTr = document.createElement("tr");
    theadTr.append(
        ...["Questions", ...questionOptions].map(text => {
            const th = document.createElement("th");
            th.setAttribute("scope", "col");
            th.innerText = text;
            return th;
        })
    )
    thead.appendChild(theadTr);
    table.appendChild(thead);

    const tbody = document.createElement("tbody");
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.innerText = "Part A";
    tr.appendChild(th);
    tbody.appendChild(tr);
    for (let i = 0; i < orderedQuestions.length; i++) {
        if (i === partALength) {
            const tr = document.createElement("tr");
            const th = document.createElement("th");
            th.innerText = "Part B";
            tr.appendChild(th);
            tbody.appendChild(tr);
        }

        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.setAttribute("scope", "row");
        th.innerText = orderedQuestions[i].question;
        tr.appendChild(th);
        for (let j = 0; j < questionOptions.length; j++) {
            const td = document.createElement("td");
            const input = document.createElement("input");
            if (orderedQuestions[i].highlighted && orderedQuestions[i].highlighted.includes(j) && formType === "normal")
                td.classList.add("highlighted");
            input.setAttribute("type", "radio");
            input.setAttribute("name", `question${i}`);
            input.setAttribute("value", j);
            td.appendChild(input);
            tr.appendChild(td);
        }
        tbody.appendChild(tr);
    }
    table.appendChild(tbody);
    div.appendChild(table);

    const submitButton = document.createElement("button");
    submitButton.innerText = "Submit";
    submitButton.addEventListener("click", () => {
        // Ensure every row has an option selected, and then add each entry alongside the selected value to the URL, and then redirect to that URL.
        const inputs = document.querySelectorAll("input");
        const selected = Array.from(inputs).filter(input => input.checked);
        console.log(inputs);
        if (selected.length !== orderedQuestions.length) {
            alert("Please answer all questions");
            return;
        }

        const entries = selected.map((input, i) => {
            const question = orderedQuestions[i];
            return `${question.entry}=${questionOptions[input.value]}`;
        });
        
        const url = `${baseUrl}&${entries.join("&")}`;
        window
            .open(url, "_blank")
            .focus();

        window.location.reload();
    });
    div.appendChild(submitButton);

    const typeDiv = document.createElement("div");
    typeDiv.innerText = `Form type: ${formType}`;
    div.appendChild(typeDiv);
});