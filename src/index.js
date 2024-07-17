const demographicsQuestions = [
    {
        question: "Year of birth:",
        inputName: "yob",
        inputType: "number",
        entry: "entry.820934355",
    },
    {
        question: "Gender Identity",
        inputName: "gender",
        inputType: "radio",
        entry: "entry.892949306",
    },
    {
        question: "Level of Education",
        inputName: "education",
        inputType: "radio",
        entry: "entry.128715196",
    },
    {
        question: "Ethnicity",
        inputName: "ethnicity",
        inputType: "radio",
        entry: "entry.104950939",
    },
    {
        question: "Have you been diagnosed with ADHD?",
        inputName: "diagnosedADHD",
        inputType: "radio",
        entry: "entry.1763651793",
    },
    {
        question: "Who diagnosed you with ADHD?",
        inputName: "diagnosedBy",
        inputType: "radio",
        entry: "entry.648625715",
        diagnosedADHDAnswer: "Yes",
    },
    {
        question: "In which year were you diagnosed with ADHD?",
        inputName: "yod",
        inputType: "number",
        entry: "entry.1526675713",
        diagnosedADHDAnswer: "Yes",
    },
    {
        question: "What methods were used to diagnose for ADHD? (Check all that apply)",
        inputName: "diagnosedMethod",
        inputType: "checkbox",
        entry: "entry.63037250",
        diagnosedADHDAnswer: "Yes",
    },
    {
        question: "Are you currently taking your ADHD medication regularly (more than 3 days/week in the past 2 weeks)?",
        inputName: "takingMedication",
        inputType: "radio",
        entry: "entry.844708561",
        diagnosedADHDAnswer: "Yes",
    },
    {
        question: "Do you suspect you may have ADHD?",
        inputName: "suspectADHD",
        inputType: "radio",
        entry: "entry.1550574022",
        diagnosedADHDAnswer: "No",
    },
    {
        question: "Why do you suspect you may have ADHD?",
        inputName: "whySuspectADHD",
        inputType: "textarea",
        entry: "entry.698666662",
        diagnosedADHDAnswer: "No",
    }
];

const moaQuestions = [
    {
        ...demographicsQuestions[0],
        inputName: `moa${demographicsQuestions[0].inputName}`,
    },
    {
        ...demographicsQuestions[1],
        inputName: `moa${demographicsQuestions[1].inputName}`,
    },
    {
        question: "Were they panelled?",
        inputName: "panelled",
        inputType: "radio",
        entry: "entry.2051774930",
    },
];

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
    "randomNoHighlight",
];
const asrsFormOrderFunctions = {
    "normal": (asrsQuestions) => asrsQuestions,
    "noHighlight": (asrsQuestions) => asrsQuestions,
    "random": (asrsQuestions) => [...asrsQuestions].sort(() => Math.random() - 0.5),
    "randomNoHighlight": (asrsQuestions) => [...asrsQuestions].sort(() => Math.random() - 0.5),
}
const asrsFormType = asrsFormTypes[Math.floor(Math.random() * asrsFormTypes.length)];
const asrsOrderedQuestions = asrsFormOrderFunctions[asrsFormType]([...asrsQuestions]);
function createAsrsForm() {
    const div = document.getElementById("asrsForm");
    const form = document.createElement("form");
    form.setAttribute("id", "asrsQuestions");
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

    asrsOrderedQuestions.forEach((question, i) => {
        if (i === asrsPartALength)
            appendPartHeader(tbody, "Part A");
        const tr = document.createElement("tr");
        const th = document.createElement("th");
        th.scope = "row";
        th.innerText = question.question;
        tr.appendChild(th);

        asrsQuestionOptions.forEach((_, j) => {
            const td = document.createElement("td");
            if ((asrsFormType === "normal" || asrsFormType === "random") && question.highlighted.includes(j))
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
    appendPartHeader(tbody, "Part B");
    table.appendChild(tbody);
    form.appendChild(table);
    div.appendChild(form);

    // TODO: Delete this after development
    // const typeDiv = document.createElement("div");
    // typeDiv.innerText = `Form type: ${asrsFormType}`;
    // div.appendChild(typeDiv);
}

const declinedUrl = `https://docs.google.com/forms/d/e/1FAIpQLScOIicBUGYizF1gb4vzxZVbZIBWUot4C8XQrafn0p0UP6zJIg/formResponse?usp=pp_url&submit=Submit&entry.1330571429=No`;
const baseUrl = `https://docs.google.com/forms/d/e/1FAIpQLScOIicBUGYizF1gb4vzxZVbZIBWUot4C8XQrafn0p0UP6zJIg/formResponse?usp=pp_url&submit=Submit&entry.1330571429=Yes&entry.667455850=${asrsFormType}`;

const clicks = [{ p: -1, q: -1, a: -1, c: -1, x: -1, y: -1, d: new Date() }];
const clickEntry = "entry.1947159382";

function createButton(text, clickHandler) {
    const button = document.createElement("button");
    button.innerText = text;
    button.addEventListener("click", clickHandler);
    button.disabled = text === "Previous" && page === 0;
    return button;
}

let demographicsError = false;
const submitButton = createButton("Submit", (e) => {
    demographicsError = false;
    const demographicsForm = document.getElementById("demographics");
    const demographicsEntries = demographicsQuestions.map(question => {
        if (question.inputType === "checkbox") {
            const inputs = Array.from(demographicsForm[question.inputName]);
            return inputs.map(input => {
                return input.checked ? `${question.entry}=${encodeURIComponent(input.value)}` : "";
            });
        }
        const input = demographicsForm[question.inputName];
        if (input.value !== "__other_option__") 
            return input.value ? `${question.entry}=${encodeURIComponent(input.value)}` : "";
        const otherInput = demographicsForm[`${question.inputName}OtherInput`];
        if (otherInput.value === "") {
            alert(`Please fill in the "Other" field for the demographics question "${question.question}"`);
            demographicsError = true;
            return "";
        }
        return `${question.entry}=${encodeURIComponent(input.value)}&${question.entry}.other_option_response=${encodeURIComponent(otherInput.value)}`;
    }).flat().filter(entry => entry !== "");
    if (demographicsError)
        return;

    const asrsQuestionsForm = document.getElementById("asrsQuestions");
    const asrsSelected = Array.from(asrsQuestionsForm.querySelectorAll("input:checked"));

    const entries = [
        ...demographicsEntries,
        ...asrsSelected.map((input, i) => {
            const question = asrsOrderedQuestions[i];
            return `${question.entry}=${encodeURIComponent(asrsQuestionOptions[input.value])}`;
        }),
    ];

    const clicksString = clicks.map(click => {
        return `${click.p},${click.q},${click.a},${click.c},${click.x},${click.y},${click.d.getTime()}`;
    }).join("|");

    const url = `${baseUrl}&${entries.join("&")}&${clickEntry}=${encodeURIComponent(clicksString)}`;
    window.open(url, "_blank").focus();
    window.location.reload();
});

function resetNavButtons() {
    const buttons = document.getElementById("buttons");
    buttons.innerHTML = "";
    buttons.appendChild(createButton("Previous", (e) => pageHandler(-1)));
    if (page !== 2)
        buttons.appendChild(createButton("Next", (e) => pageHandler(1)));
    if (page === 2)
        buttons.appendChild(submitButton);
}

let page = 0;
const pageDivIDS = ["frontSection", "demographicsForm", "asrsForm"];
function pageHandler(number) {
    page = Math.max(0, page + number);
    resetNavButtons();

    for (let i = 0; i < pageDivIDS.length; i++) {
        const div = document.getElementById(pageDivIDS[i]);
        div.style.display = i === page ? "block" : "none";
    }
    window.scrollTo(0, 0);
}

function toggleOtherInput(inputName, toggle) {
    const otherInput = document.getElementById(`${inputName}Input`);
    otherInput.style.display = toggle ? "block" : "none";
}

function adhdDiagnosis(status) {
    document.getElementById("diagnosedADHD").style.display = status === "diagnosed" ? "block" : "none";
    document.getElementById("undiagnosedADHD").style.display = status === "undiagnosed" ? "block" : "none";
}

function addInputRatioListeners() {
    for (const question of demographicsQuestions) {
        if (question.inputType !== "radio")
            continue;
        const options = document.getElementsByName(question.inputName);
        options.forEach(option => {
            option.addEventListener("change", (e) => {
                toggleOtherInput(question.inputName, e.target.value === "__other_option__");
                if (question.inputName === "diagnosedADHD")
                    adhdDiagnosis(e.target.value === "Yes" ? "diagnosed" : "undiagnosed");
            });
        });
    }
    for (const question of moaQuestions) {
        if (question.inputType !== "radio")
            continue;
        const options = document.getElementsByName(question.inputName);
        options.forEach(option => {
            option.addEventListener("change", (e) => {
                toggleOtherInput(question.inputName, e.target.value === "__other_option__");
            });
        });
    }
}

function ignoreForm() {
    if (!confirm("THIS IS ONLY FOR MEDICAL STAFF/ASSISTANTS.\n\nAre you sure you want to confirm form decline?"))
        return;

    const moaForm = document.getElementById("moaForm");
    const moaEntries = moaQuestions.map(question => {
        const input = moaForm[question.inputName];
        if (input.value !== "__other_option__") 
            return input.value ? `${question.entry}=${encodeURIComponent(input.value)}` : "";
        const otherInput = moaForm[`${question.inputName}OtherInput`];
        if (otherInput.value === "") {
            alert(`Please fill in the "Other" field for the demographics question "${question.question}"`);
            demographicsError = true;
            return "";
        }
        return `${question.entry}=${encodeURIComponent(input.value)}&${question.entry}.other_option_response=${encodeURIComponent(otherInput.value)}`;
    }).flat().filter(entry => entry !== "");

    const url = `${declinedUrl}&${moaEntries.join("&")}`;
    window.open(url, "_blank").focus();
    window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
    pageHandler(0);

    const declineButton = document.getElementById("declineButton");
    declineButton.addEventListener("click", () => document.getElementById("moaForm").style.display = "flex");
    const [moaCancelButton, moaConfirmButton] = document.querySelectorAll("#moaForm button");
    moaCancelButton.addEventListener("click", () => document.getElementById("moaForm").style.display = "none");
    moaConfirmButton.addEventListener("click", ignoreForm);

    addInputRatioListeners();
    adhdDiagnosis(false);

    createAsrsForm();
});

document.addEventListener("click", (e) => {
    const clickDate = new Date();
    const question = e.target.closest("tr")?.querySelector("th")?.innerText || "N/A";
    const questionIndex = asrsQuestions.findIndex(q => q.question === question);
    const answerElement = e.target.closest("td")?.querySelector("input");
    const answer = answerElement?.value || -1;
    clicks.push({
        p: page,
        q: questionIndex,
        a: answer === "True" ? 1 : answer === "False" ? 0 : answer,
        c: typeof answerElement?.checked === "boolean" ? answerElement.checked | 0 : -1,
        x: e.clientX,
        y: e.clientY,
        d: clickDate,
    });
});

function appendPartHeader(tbody, partName) {
    const tr = document.createElement("tr");
    const th = document.createElement("th");
    th.colSpan = asrsQuestionOptions.length + 1;
    th.innerText = partName;
    th.classList.add("partHeader");
    tr.appendChild(th);
    tbody.appendChild(tr);
}