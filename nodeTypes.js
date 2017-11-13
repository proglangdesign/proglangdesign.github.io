const jtree = require("jtree")
const fs = require("fs")

class page extends jtree.program {
  html() {
    const header = fs.readFileSync("./header.html", "utf8")
    const footer = fs.readFileSync("./footer.html", "utf8")
    const middle = this.getChildren()
      .map(child => child.compile())
      .join("\n")
    return header + middle + footer
  }

  compile(language) {
    return this[language]()
  }

  tsv() {
    const header = `languageName website github user userGithub description\n`.replace(/ /g, "\t")
    const langNodes = this.getTopDownArray().filter(node => node instanceof language)
    const langs = langNodes.map(node => node.compileToArray().join("\t")).join("\n")
    return header + langs
  }
}

class user extends jtree.NonTerminalNode {
  compile() {
    const description = this.getNode("language description").childrenToString()
    const username = this.getUserName()
    const userGithub = this.getGitHubLink()
    const userLink = userGithub ? `<a href="${userGithub}">${username}</a>` : username
    return `<dt class="username">${userLink}</dt>
      <dd>${description}</dd>\n\n`
  }

  getUserName() {
    return this.getWord(1)
  }

  getGitHubLink() {
    return this.findBeam("github")
  }
}

class language extends jtree.NonTerminalNode {
  compileToArray() {
    return [
      this.getWord(1),
      this.findBeam("website"),
      this.findBeam("github"),
      this.getParent().getUserName(),
      this.getParent().getGitHubLink(),
      this.getNode("description")
        .childrenToString()
        .replace(/\n/g, " ")
    ]
  }
}

module.exports = {
  page: page,
  language: language,
  user: user
}
