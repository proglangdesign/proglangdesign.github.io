const jtree = require("jtree")
const fs = require("fs")

class page extends jtree.program {
  compile() {
    const header = fs.readFileSync("./header.html", "utf8")
    const footer = fs.readFileSync("./footer.html", "utf8")
    const middle = this.getChildren()
      .map(child => child.compile())
      .join("\n")
    return header + middle + footer
  }
}

class user extends jtree.NonTerminalNode {
  compile() {
    const description = this.getNode("language description").childrenToString()
    const username = this.getWord(1)
    const userGithub = this.findBeam("github")
    const userLink = userGithub ? `<a href="${userGithub}">${username}</a>` : username
    return `<dt class="username">${userLink}</dt>
      <dd>${description}</dd>\n\n`
  }
}

module.exports = {
  page: page,
  user: user
}
