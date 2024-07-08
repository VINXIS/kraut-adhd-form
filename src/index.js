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
    },
    {
        question: "In which year were you diagnosed with ADHD?",
        inputName: "yod",
        inputType: "number",
        entry: "entry.1526675713",
    },
    {
        question: "What methods were used to diagnose for ADHD? (Check all that apply)",
        inputName: "diagnosedMethod",
        inputType: "checkbox",
        entry: "entry.63037250",
    },
    {
        question: "Are you currently taking your ADHD medication regularly (more than 3 days/week in the past 2 weeks)?",
        inputName: "takingMedication",
        inputType: "radio",
        entry: "entry.844708561",
    },
    {
        question: "Do you suspect you may have ADHD?",
        inputName: "suspectADHD",
        inputType: "radio",
        entry: "entry.1550574022",
    },
    {
        question: "Why do you suspect you may have ADHD?",
        inputName: "whySuspectADHD",
        inputType: "textarea",
        entry: "entry.698666662",
    }
]

const asisQuestions = [{
    "question": "I regularly hit “reply all” by mistake for e-mails",
    "entry": "entry.1180294866"
    }, {
    "question": "I avoid nice restaurants because meals take too long",
    "entry": "entry.1729376175"
    }, {
    "question": "It’s very difficult for me to stay focused on homework or other tasks",
    "entry": "entry.1366320492"
    }, {
    "question": "I have so much energy, I sometimes have trouble catching my breath",
    "entry": "entry.1012025606"
    }, {
    "question": "I find it difficult to stay quiet",
    "entry": "entry.376512316"
    }, {
    "question": "I often burn food when cooking because I forget about it",
    "entry": "entry.1606171849"
    }, {
    "question": "I frequently misplace or lose my personal belongings",
    "entry": "entry.388384380"
    }, {
    "question": "I’m good at keeping secrets",
    "entry": "entry.433009121"
    }, {
    "question": "I frequently feel restless",
    "entry": "entry.1907571640"
    }, {
    "question": "I sometimes enjoy quiet time",
    "entry": "entry.327099982"
    }, {
    "question": "I would pass up a very high paying job if it required me to sit at a desk all day ",
    "entry": "entry.1253157306"
    }, {
    "question": "I can typically find things in my own home",
    "entry": "entry.194936679"
    }, {
    "question": "When I have a big decision, I prefer to take time to think about it",
    "entry": "entry.342717729"
    }, {
    "question": "People seem to think I am a good listener",
    "entry": "entry.937639672"
    }, {
    "question": "Most of the time I can engage in uninterrupted pleasurable activity",
    "entry": "entry.186469105"
    }, {
    "question": "Others seem to find it difficult to keep up with me",
    "entry": "entry.640419731"
    }, {
    "question": "I feel I am a good judge of character",
    "entry": "entry.586368867"
    }, {
    "question": "I’m an impulsive buyer",
    "entry": "entry.394013469"
    }, {
    "question": "I regularly get distracted by the teacher in class",
    "entry": "entry.830652180"
    }, {
    "question": "People say that I am generally helpful",
    "entry": "entry.1526792226"
    }, {
    "question": "I frequently send e-mails to the wrong person by mistake",
    "entry": "entry.1728251790"
    }, {
    "question": "I frequently offend people",
    "entry": "entry.1096044739"
    }, {
    "question": "People think I am too loud at parties",
    "entry": "entry.1355664473"
    }, {
    "question": "Even when directly spoken to, I have trouble listening",
    "entry": "entry.1606653276"
    }, {
    "question": "When I have a big decision, I like to take time to think about it",
    "entry": "entry.1425883855"
    }, {
    "question": "I move from one activity to another so often that I never get anything done",
    "entry": "entry.512546777"
    }, {
    "question": "I often butt into the conversations of others",
    "entry": "entry.1572853130"
    }, {
    "question": "People think that I am caring",
    "entry": "entry.1091569406"
    }, {
    "question": "I forget things when doing chores",
    "entry": "entry.180604283"
    }, {
    "question": "I am the most talkative person I know",
    "entry": "entry.1607619617"
    }, {
    "question": "I am sensitive to other people’s needs",
    "entry": "entry.50312923"
    }, {
    "question": "Rather than interrupt, I mostly let people finish talking",
    "entry": "entry.1855323503"
    }, {
    "question": "I often misplace or lose my personal belongings",
    "entry": "entry.1633370391"
    }, {
    "question": "I forget to tie my shoes",
    "entry": "entry.1677265166"
    }, {
    "question": "I find it difficult to wait for my turn",
    "entry": "entry.1342912434"
    }, {
    "question": "I talk a lot, even when I don’t have anything particularly important to say",
    "entry": "entry.1962158077"
    }, {
    "question": "I often hit “reply all” by mistake for e-mails",
    "entry": "entry.941816539"
    }, {
    "question": "I sometimes speak slowly when trying to think of something to say",
    "entry": "entry.1026495874"
    }, {
    "question": "People say that I am usually helpful",
    "entry": "entry.968600294"
    }, {
    "question": "People think I am a good listener",
    "entry": "entry.371954748"
    }, {
    "question": "I’m empathetic to the needs of others",
    "entry": "entry.1207378031"
    }, {
    "question": "I regularly make careless mistakes",
    "entry": "entry.217182363"
    }, {
    "question": "I would not pass up a high paying job if it required me to sit at a desk all day",
    "entry": "entry.516189164"
    }, {
    "question": "Others often tell me that I am too restless or fidgety",
    "entry": "entry.1769583407"
    }, {
    "question": "I have trouble staying seated",
    "entry": "entry.1927194966"
    }, {
    "question": "I am disorganized and can’t seem to learn how to become organized",
    "entry": "entry.1894142833"
    }, {
    "question": "I am unable to watch my favorite TV show without taking a break",
    "entry": "entry.1846961360"
    }, {
    "question": "I tend to avoid activities that require sustained concentration and a lot of mental effort",
    "entry": "entry.1758407233"
    }, {
    "question": "I frequently miss a button when putting on a shirt",
    "entry": "entry.193984427"
    }, {
    "question": "I rarely forget to tie my shoes",
    "entry": "entry.1661073800"
    }, {
    "question": "I am good at keeping secrets",
    "entry": "entry.2013640086"
    }, {
    "question": "I often get distracted or sidetracked before I complete an activity",
    "entry": "entry.1499401814"
}];
function createAsisForm() {
    const div = document.getElementById("asisForm");
    const form = document.createElement("form");
    form.setAttribute("id", "asisQuestions");
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

        ["True", "False"].forEach((text) => {
            const td = document.createElement("td");
            const input = document.createElement("input");
            input.type = "radio";
            input.name = `question${i}`;
            input.value = text;
            td.appendChild(input);
            tr.appendChild(td);
        });

        tbody.appendChild(tr);
    });
    table.appendChild(tbody);
    form.appendChild(table);
    div.appendChild(form);    
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
    "randomNoHighlight",
];
const asrsFormOrderFunctions = {
    "normal": (asrsQuestions) => asrsQuestions,
    "noHighlight": (asrsQuestions) => asrsQuestions,
    "random": (asrsQuestions) => asrsQuestions.sort(() => Math.random() - 0.5),
    "randomNoHighlight": (asrsQuestions) => asrsQuestions.sort(() => Math.random() - 0.5),
}
const asrsFormType = asrsFormTypes[Math.floor(Math.random() * asrsFormTypes.length)];
const asrsOrderedQuestions = asrsFormOrderFunctions[asrsFormType](asrsQuestions);
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
    if (asrsSelected.length !== asrsOrderedQuestions.length) {
        const trs = Array.from(asrsQuestionsForm.querySelectorAll("tr"));
        trs.forEach(tr => {
            if (tr.querySelector("input:checked") === null && tr.querySelector("input") !== null)
                tr.querySelector("th").classList.add("missing");
            else
                tr.querySelector("th").classList.remove("missing");
        });
        alert("Please answer all Screening Form #1 questions. They are highlighted in red.");
        return;
    }

    const asisQuestionsForm = document.getElementById("asisQuestions");
    const asisSelected = Array.from(asisQuestionsForm.querySelectorAll("input:checked"));
    if (asisSelected.length !== asisQuestions.length) {
        // Mark any tr with missing answers with a missing class, and remove the missing class from any answered ones
        const trs = Array.from(asisQuestionsForm.querySelectorAll("tr"));
        trs.forEach(tr => {
            if (tr.querySelector("input:checked") === null && tr.querySelector("input") !== null)
                tr.querySelector("th").classList.add("missing");
            else
                tr.querySelector("th").classList.remove("missing");
        });
        alert("Please answer all Screening Form #2 questions");
        return;
    }

    const entries = [
        ...demographicsEntries,
        ...asisSelected.map((input, i) => {
            const question = asisQuestions[i];
            return `${question.entry}=${encodeURIComponent(input.value)}`;
        }),
        ...asrsSelected.map((input, i) => {
            const question = asrsOrderedQuestions[i];
            return `${question.entry}=${encodeURIComponent(asrsQuestionOptions[input.value])}`;
        })
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
    if (page !== 3)
        buttons.appendChild(createButton("Next", (e) => pageHandler(1)));
    if (page === 3)
        buttons.appendChild(submitButton);
}

let page = 0;
const pageDivIDS = ["frontSection", "demographicsForm", "asrsForm", "asisForm"];
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
}

function ignoreForm() {
    if (!confirm("THIS IS ONLY FOR MEDICAL STAFF/ASSISTANTS.\n\nAre you sure you want to confirm form decline?"))
        return;

    window.open(declinedUrl, "_blank").focus();
    window.location.reload();
}

document.addEventListener("DOMContentLoaded", () => {
    pageHandler(0);

    const declineButton = document.getElementById("declineButton");
    declineButton.addEventListener("click", ignoreForm);

    addInputRatioListeners();
    adhdDiagnosis(false);

    createAsisForm();
    createAsrsForm();
});

document.addEventListener("click", (e) => {
    const clickDate = new Date();
    const question = e.target.closest("tr")?.querySelector("th")?.innerText || "N/A";
    const questionIndex = page === 3 ? asisQuestions.findIndex(q => q.question === question) : asrsOrderedQuestions.findIndex(q => q.question === question);
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
    th.colSpan = asrsQuestionOptions.length + 1;
    th.innerText = partName;
    th.classList.add("partHeader");
    tr.appendChild(th);
    tbody.appendChild(tr);
}