// ============================================================
// PAINMED PRO
// PAIN PROCEDURES DATABASE
// ============================================================
//
// This file is ONLY for the Pain Procedures page.
//
// youtube = a specific curated video (optional)
// If youtube is empty, the app automatically opens a YouTube
// search for that procedure instead.
// ============================================================

const procedures = [

    {
        name: "Epidural Steroid Injection",
        description: "Interventional procedure for radicular and spinal pain",
        page: "epidural-steroid-injection.html",
        youtube: ""
    },

    {
        name: "Medial Branch Block",
        description: "Diagnostic block for facet-mediated spinal pain",
        page: "",
        youtube: ""
    },

    {
        name: "Facet Joint Injection",
        description: "Injection for suspected facet-mediated pain",
        page: "",
        youtube: ""
    },

    {
        name: "Radiofrequency Ablation",
        description: "Denervation procedure for selected chronic pain",
        page: "",
        youtube: ""
    },

    {
        name: "Sacroiliac Joint Injection",
        description: "Diagnostic and therapeutic SI joint procedure",
        page: "",
        youtube: "https://www.youtube.com/watch?v=LRN_RSjLZ4Q"
    },

    {
        name: "Genicular Nerve Block",
        description: "Procedure used in chronic knee pain",
        page: "",
        youtube: "https://www.youtube.com/watch?v=DGv0I9ZPpOE"
    },

    {
        name: "Genicular Nerve RFA",
        description: "Radiofrequency treatment for selected knee pain",
        page: "",
        youtube: ""
    },

    {
        name: "Stellate Ganglion Block",
        description: "Sympathetic block for selected pain conditions",
        page: "",
        youtube: "https://www.youtube.com/watch?v=B6ROeVFUJSY"
    },

    {
        name: "Celiac Plexus Block",
        description: "Intervention for selected upper abdominal pain",
        page: "",
        youtube: "https://www.youtube.com/watch?v=gVW67kyb8v4"
    },

    {
        name: "Ganglion Impar Block",
        description: "Intervention for selected pelvic and perineal pain",
        page: "",
        youtube: "https://www.youtube.com/watch?v=3LSe7szv0r8"
    }

];


// ============================================================
// YOUTUBE LINK
// ============================================================

function getYouTubeLink(procedure) {

    // Use a manually verified video when available.
    if (procedure.youtube) {
        return procedure.youtube;
    }

    // Otherwise open a YouTube search for the procedure.
    // This avoids inventing or hard-coding an unverified video.
    return "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(
            procedure.name + " ultrasound guided pain procedure"
        );
}


// ============================================================
// RENDER PROCEDURES
// ============================================================

function renderProcedures(list = procedures) {

    const container = document.getElementById("procedure-list");
    const noResults = document.getElementById("no-results");

    if (!container) return;

    container.innerHTML = "";

    if (list.length === 0) {
        if (noResults) noResults.style.display = "block";
        return;
    }

    if (noResults) noResults.style.display = "none";

    list.forEach(procedure => {

        const card = document.createElement("div");
        card.className = "procedure-card";

        // ----------------------------------------------------
        // Procedure information
        // ----------------------------------------------------

        const info = document.createElement("div");
        info.className = "procedure-info";

        info.innerHTML = `
            <h3>${procedure.name}</h3>
            <p>${procedure.description}</p>
        `;

        if (procedure.page) {
            info.classList.add("clickable");
            info.setAttribute("role", "button");
            info.setAttribute("tabindex", "0");

            const openProcedure = function() {
                window.location.href = procedure.page;
            };

            info.addEventListener("click", openProcedure);
            info.addEventListener("keydown", function(event) {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    openProcedure();
                }
            });
        }

        card.appendChild(info);

        // ----------------------------------------------------
        // YouTube button — available for EVERY procedure
        // ----------------------------------------------------

        const youtube = document.createElement("a");
        youtube.className = "youtube-button";
        youtube.href = getYouTubeLink(procedure);
        youtube.target = "_blank";
        youtube.rel = "noopener noreferrer";
        youtube.setAttribute(
            "aria-label",
            "Watch " + procedure.name + " on YouTube"
        );
        youtube.title = procedure.youtube
            ? "Watch selected YouTube video"
            : "Search YouTube for this procedure";

        youtube.innerHTML = `
            <span class="youtube-icon" aria-hidden="true">▶</span>
            <span class="youtube-label">YouTube</span>
        `;

        card.appendChild(youtube);
        container.appendChild(card);
    });
}


// ============================================================
// SEARCH
// ============================================================

function searchProcedures() {

    const searchInput = document.getElementById("search");
    if (!searchInput) return;

    const search = searchInput.value.toLowerCase().trim();

    const filtered = procedures.filter(procedure => {
        return (
            procedure.name.toLowerCase().includes(search) ||
            procedure.description.toLowerCase().includes(search)
        );
    });

    renderProcedures(filtered);
}


// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener("DOMContentLoaded", function() {

    renderProcedures();

    const search = document.getElementById("search");

    if (search) {
        search.addEventListener("input", searchProcedures);
    }
});
