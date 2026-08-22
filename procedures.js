// ============================================================
// PAINMED PRO
// PAIN PROCEDURES DATABASE
// ============================================================
//
// This file is ONLY for the Pain Procedures page.
//
// Do NOT put this into the main script.js.
//
// To add a YouTube video:
// Change youtube: ""
// to:
// youtube: "https://www.youtube.com/watch?v=XXXXXXXXXXX"
//
// ============================================================


const procedures = [

    // --------------------------------------------------------
    // 1. Epidural Steroid Injection
    // --------------------------------------------------------

    {
        name: "Epidural Steroid Injection",

        description:
            "Interventional procedure for radicular and spinal pain",

        page:
            "epidural-steroid-injection.html",

        youtube:
            ""
    },


    // --------------------------------------------------------
    // 2. Medial Branch Block
    // --------------------------------------------------------

    {
        name: "Medial Branch Block",

        description:
            "Diagnostic block for facet-mediated spinal pain",

        page:
            "",

        youtube:
            ""
    },


    // --------------------------------------------------------
    // 3. Facet Joint Injection
    // --------------------------------------------------------

    {
        name: "Facet Joint Injection",

        description:
            "Injection for suspected facet-mediated pain",

        page:
            "",

        youtube:
            ""
    },


    // --------------------------------------------------------
    // 4. Radiofrequency Ablation
    // --------------------------------------------------------

    {
        name: "Radiofrequency Ablation",

        description:
            "Denervation procedure for selected chronic pain",

        page:
            "",

        youtube:
            ""
    },


    // --------------------------------------------------------
    // 5. Sacroiliac Joint Injection
    // --------------------------------------------------------

    {
        name: "Sacroiliac Joint Injection",

        description:
            "Diagnostic and therapeutic SI joint procedure",

        page:
            "",

        youtube:
            "https://www.youtube.com/watch?v=LRN_RSjLZ4Q"
    },


    // --------------------------------------------------------
    // 6. Genicular Nerve Block
    // --------------------------------------------------------

    {
        name: "Genicular Nerve Block",

        description:
            "Procedure used in chronic knee pain",

        page:
            "",

        youtube:
            "https://www.youtube.com/watch?v=DGv0I9ZPpOE"
    },


    // --------------------------------------------------------
    // 7. Genicular Nerve RFA
    // --------------------------------------------------------

    {
        name: "Genicular Nerve RFA",

        description:
            "Radiofrequency treatment for selected knee pain",

        page:
            "",

        youtube:
            ""
    },


    // --------------------------------------------------------
    // 8. Stellate Ganglion Block
    // --------------------------------------------------------

    {
        name: "Stellate Ganglion Block",

        description:
            "Sympathetic block for selected pain conditions",

        page:
            "",

        youtube:
            "https://www.youtube.com/watch?v=B6ROeVFUJSY"
    },


    // --------------------------------------------------------
    // 9. Celiac Plexus Block
    // --------------------------------------------------------

    {
        name: "Celiac Plexus Block",

        description:
            "Intervention for selected upper abdominal pain",

        page:
            "",

        youtube:
            "https://www.youtube.com/watch?v=gVW67kyb8v4"
    },


    // --------------------------------------------------------
    // 10. Ganglion Impar Block
    // --------------------------------------------------------

    {
        name: "Ganglion Impar Block",

        description:
            "Intervention for selected pelvic and perineal pain",

        page:
            "",

        youtube:
            "https://www.youtube.com/watch?v=3LSe7szv0r8"
    }

];


// ============================================================
// RENDER PROCEDURES
// ============================================================

function renderProcedures(list = procedures) {

    const container =
        document.getElementById("procedure-list");

    const noResults =
        document.getElementById("no-results");


    container.innerHTML = "";


    if (list.length === 0) {

        noResults.style.display = "block";

        return;

    }


    noResults.style.display = "none";


    list.forEach(procedure => {

        const card =
            document.createElement("div");

        card.className =
            "procedure-card";


        // ----------------------------------------------------
        // Procedure information
        // ----------------------------------------------------

        const info =
            document.createElement("div");

        info.className =
            "procedure-info";


        info.innerHTML = `
            <h3>${procedure.name}</h3>
            <p>${procedure.description}</p>
        `;


        // If a procedure page exists,
        // make the procedure information clickable.

        if (procedure.page) {

            info.classList.add("clickable");

            info.addEventListener("click", function() {

                window.location.href =
                    procedure.page;

            });

        }


        card.appendChild(info);


        // ----------------------------------------------------
        // YouTube button
        // ----------------------------------------------------

        if (procedure.youtube) {

            const youtube =
                document.createElement("a");


            youtube.className =
                "youtube-button";


            youtube.href =
                procedure.youtube;


            youtube.target =
                "_blank";


            youtube.rel =
                "noopener noreferrer";


            youtube.setAttribute(
                "aria-label",
                "Watch " + procedure.name + " on YouTube"
            );


            youtube.innerHTML = `
                <div class="youtube-icon"></div>
            `;


            card.appendChild(youtube);

        }

        else {

            // No video yet.
            // Show a greyed-out YouTube icon.

            const youtube =
                document.createElement("div");


            youtube.className =
                "youtube-button disabled";


            youtube.setAttribute(
                "aria-label",
                "Video not available yet"
            );


            youtube.innerHTML = `
                <div class="youtube-icon"></div>
            `;


            card.appendChild(youtube);

        }


        container.appendChild(card);

    });

}


// ============================================================
// SEARCH
// ============================================================

function searchProcedures() {

    const searchInput =
        document.getElementById("search");


    const search =
        searchInput.value
            .toLowerCase()
            .trim();


    const filtered =
        procedures.filter(procedure => {

            return (

                procedure.name
                    .toLowerCase()
                    .includes(search)

                ||

                procedure.description
                    .toLowerCase()
                    .includes(search)

            );

        });


    renderProcedures(filtered);

}


// ============================================================
// INITIALIZATION
// ============================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        renderProcedures();


        const search =
            document.getElementById("search");


        search.addEventListener(
            "input",
            searchProcedures
        );

    }
);