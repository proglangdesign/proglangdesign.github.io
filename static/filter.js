// Filters the projects by tags defined in projects.yml
// Implemented by Matt Hall (github.com/mh15)

const projects = document.querySelector(".projects-list")
const filters = new Set()

// Only enable the feature if JS is enabled
// Add the tag buttons in JS
const tagContainer = document.querySelector("#tags")
if (tagContainer != null) {
    const tagNames = getTags(tagContainer, "data-all-tags")
    if (tagNames.length > 0) {
        tagNames.forEach(name => {
            let tag = document.createElement("div")
            tag.classList.add("shell", "tag")
            tag.innerHTML = name
            tag.onclick = () => {
                setFilter(tag, name)
            }
            tagContainer.appendChild(tag)
        })
    }
}

/**
 * Compare two projects
 * @param {HTMLElement} a
 * @param {HTMLElement} b
 * @returns {number}
 */
function projectComparator(a, b) {
    const tagsA = getTags(a, "data-tags")
    const tagsB = getTags(b, "data-tags")

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
 * @param {string} attribute
 * @returns {string[]}
 */
function getTags(el, attribute) {
    const data = el.getAttribute(attribute)
    if (!data) return []
    const list = data.split(",")

    return list
}
