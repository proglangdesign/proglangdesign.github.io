// Filters the projects by tags defined in projects.yml and
// shows tag descriptions.
// Implemented by Matt Hall (github.com/mh15), modified by others.

const projects = document.querySelector(".projects-list")
const filters = new Set()

// Add the tag buttons in JS
const tagContainer = document.querySelector("#tags")
let tags = new Object()

/**
 * This loads up the tags and adds the tag buttons
 */
function addTagButtons() {
    if (tagContainer == null) {
        return;
    }
    tags = getTags(tagContainer, null, false)
    console.log("filter.js: Tags data was loaded: " + JSON.stringify(tags))
    for (const entry of Object.values(tags)) {
        let tag = document.createElement("div")
        tag.classList.add("shell", "tag")
        tag.innerHTML = entry.name
        tag.onclick = () => {
            setFilter(tag, entry)
        }
        tagContainer.appendChild(tag)
    }
}

/**
 * Compare two projects
 * @param {HTMLElement} a
 * @param {HTMLElement} b
 * @returns {number}
 */
function projectComparator(a, b) {
    const tagsA = getTags(a, "data-tags", true)
    const tagsB = getTags(b, "data-tags", true)

    // Get a score for the projects
    let scoreA = 0
    let scoreB = 0
    for (const tagName of filters) {
        if (tagsA.includes(tagName)) {
            scoreA++
        }
        if (tagsB.includes(tagName)) {
            scoreB++
        }
    }

    if (scoreA != filters.size) scoreA = 0
    if (scoreB != filters.size) scoreB = 0

    if (filters.size > 0) {
        if (scoreA == 0) a.classList.add("project-filtered")
        if (scoreB == 0) b.classList.add("project-filtered")
    }

    if (scoreA > scoreB) {
        return -1
    } else if (scoreA < scoreB) {
        return 1
    } else {
        // Sort unfiltered items alphabetically
        return a.innerText.toLowerCase() > b.innerText.toLowerCase() ? 1 : -1
    }
}

/**
 * For some reason, JS doesn't have a HTML escape built-in.
 * @param {string} s
 */
function escapeHTML(s) {
    return s.replaceAll("<", "&lt;").
        replaceAll(">", "&gt;").
        replaceAll("&", "&amp;").
        replaceAll("'", "&#039;").
        replaceAll('"', "&quot;")
}

/**
 * Set the current filters and sort.
 * @param {HTMLElement} el 
 * @param {object|null} f 
 */
function setFilter(el, f) {
    let tagName = null
    if (f != null) {
        tagName = f.name + ""
    }
    console.log("filter.js: Clicked tag: " + tagName)
    let tagSummaryDiv = document.querySelector(".tags-summary-field")
    if (tagSummaryDiv == null) {
        tagSummaryDiv = document.createElement("div")
        tagSummaryDiv.classList.add("tags-summary-field")
        tagSummaryDiv.innerHTML = ""
        tagSummaryDiv.style.display = "none"
        tagContainer.appendChild(tagSummaryDiv)
    }

    if (tagName == null || (filters.length == 1 &&
            filters.has(tagName))) {
        // Turn off all filters
        document.querySelectorAll(".tag").forEach(tag => {
            tag.classList.remove("tag-selected")
        })
        console.log("filter.js: Filters are being cleared.")

        // Hide the tag summary:
        tagSummaryDiv.innerHTML = ""
        tagSummaryDiv.style.display = "none"

        filters.clear()
    } else {
        // Turn on or off one filter
        el.classList.toggle("tag-selected")

        // Add or remove from the list of filters
        if (filters.has(tagName)) {
            filters.delete(tagName + "")
        } else {
            filters.add(tagName + "")
        }
        console.log("filter.js: Filters were changed to: " +
            JSON.stringify(Array.from(filters)))

        // Display the tag description(s):
        let tagDescHtml = ""
        for (const filterItem of filters) {
            let desc = tags[filterItem]["description"]
            if (desc === null || desc == "") {
                continue
            }
            tagDescHtml += "<tag-desc><em>" + escapeHTML(filterItem) +
                ":</em> " + escapeHTML(desc) + "</tag-desc>"
        }
        if (tagDescHtml != "") {
            tagDescHtml = "<h4>Info about selected categories:</h4>" +
                tagDescHtml
            tagSummaryDiv.innerHTML = tagDescHtml
            tagSummaryDiv.style.display = "block"
        } else {
            tagSummaryDiv.innerHTML = ""
            tagSummaryDiv.style.display = "none"
        }
    }
    Array.from(projects.children).forEach(project => {
        project.classList.remove("project-filtered")
    })


    // Sort in place
    Array.from(projects.children)
        .sort(projectComparator)
        .forEach(node => projects.appendChild(node));

    // If no filters are selected, don't fade out projects.
    // if (filters.size == 0) {
    //     Array.from(projects.children).forEach(project => {
    //         project.classList.remove("project-filtered")
    //     })

    // }

}

/**
 * Get the tags for a project
 * @param {HTMLElement} el
 * @param {string|null) attribute
 * @returns {string[]}
 */
function getTags(el, attribute, asNames) {
    if (asNames !== true) {
        asNames = false
    }
    if (attribute == null) {
        attribute = "data-tags-all-names"
    }
    const data = el.getAttribute(attribute)
    if (!data) return []
    const namelist = data.split(",")
    if (asNames) {
        return namelist
    }

    let result = {}
    for (const name of namelist) {
        if (name.trim() == "") {
            continue
        }
        let desc = el.getAttribute("data-tag-desc-" +
            name.replace(" ", "-"))
        if (desc != null && desc.trim() == "") {
            desc = null
        }
        result[name] = {
            "name": name,
            "description": desc,
        }
    }
    return result
}

addTagButtons()

