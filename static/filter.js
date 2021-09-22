
console.log("Projects filtering script loaded.")

const projects = document.querySelector("#projects-list")

document.querySelector("#tags").style.display = "flex"

const filters = new Set()
// filters.add("jvm")
// filters.add("compiled")

// projectComparator(
//     document.querySelector("#project-c3"),
//     document.querySelector("#project-imp"),
// )

function projectComparator(a, b) {
    const tagsA = getTags(a)
    const tagsB = getTags(b)

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

function getTags(el) {
    const data = el.getAttribute("data-tags")
    if (!data) return []
    const list = data.split(",")

    return list
}