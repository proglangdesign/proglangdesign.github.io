// Filters the projects by tags defined in projects.yml
// Implemented by Matt Hall (github.com/mh15)



// Only enable the feature if JS is enabled
document.querySelector("#tags").style.display = "flex"

const projects = document.querySelector("#projects-list")


const filters = new Set()

/**
 * Compare two projects
 * @param {HTMLElement} a 
 * @param {HTMLElement} b 
 * @returns {number}
 */
function projectComparator(a, b) {
    const tagsA = getTags(a)
    const tagsB = getTags(b)

    // Get a score for the projects
    let scoreA = 0
    let scoreB = 0
    for (const tag of filters) {
        if (tagsA.includes(tag)) {
            scoreA++
        }
        if (tagsB.includes(tag)) {
            scoreB++
        }
    }

    if (scoreA > scoreB) {
        return -1
    } else if (scoreA < scoreB) {
        return 1
    } else {
        // Sort unfiltered items alphabetically
        return a.innerText > b.innerText ? 1 : -1
    }
}

/**
 * Set the current filters and sort
 * @param {HTMLElement} el 
 * @param {string|null} f 
 */
function setFilter(el, f) {
    if (f == null) {
        // Turn off all filters
        document.querySelectorAll(".tag").forEach(tag => {
            tag.classList.remove("tag-selected")
        })

        filters.clear()
    } else {
        // Turn on or off one filter
        el.classList.toggle("tag-selected")

        // Add or remove from the list of filters
        if (filters.has(f)) {
            filters.delete(f)
        } else {
            filters.add(f)
        }
    }

    // Sort in place
    Array.from(projects.children)
        .sort(projectComparator)
        .forEach(node => projects.appendChild(node));

}

/**
 * Get the tags for a project
 * @param {HTMLElement} el 
 * @returns {string[]}
 */
function getTags(el) {
    const data = el.getAttribute("data-tags")
    if (!data) return []
    const list = data.split(",")

    return list
}