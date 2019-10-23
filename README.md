# proglangdesign.github.io

A website for the programming language design community, including #proglangdesign on Freenode, /r/ProgrammingLanguages, and https://discord.gg/4Kjt3ZE.

You can see this live at [proglangdesign.net](https://www.proglangdesign.net).

## Adding your project

Add your project to `_data/projects.yml`, and then submit a pull request.
Place your project where it belongs in alphabetical order.
Your project's summary should be under 140 characters (shorter is better).
If your project has an icon, upload it to `images/lang/`.

Full example:
```yaml
  # Mandatory: The name of your project
- name: Kitten
  # Mandatory: Your project's website or source code repository.
  #   Make sure this remains updated; if your project appears dead,
  #   it will be removed from the website.
  website: https://kittenlang.org/
  # Optional. Your project's icon, located in `images/lang/`.
  icon: kitten.png
  author:
    # Mandatory. This can be your real name, or your preferred username.
    name: evincar
    # Optional. If you do not specify a website, use `author: My Name` instead.
    # This could be a personal website, GitHub account, or even Reddit account.
    website: https://github.com/evincarofautumn
  # Mandatory. A short (<140 character) summary of your project.
  # If the line becomes longer than 80 characters, use YAML's block text syntax.
  summary: A statically typed concatenative language with effect types.
```
  
Simplest example:

```yaml
- name: Egel
  website: https://egel-lang.github.io/
  author: spruit11
  summary: >
    An interpreter for eager untyped combinator rewriting implemented in C++.
```
