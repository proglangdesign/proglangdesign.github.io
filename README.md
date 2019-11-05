# proglangdesign.github.io

A website for the programming language design community, including #proglangdesign on Freenode, /r/ProgrammingLanguages, and https://discord.gg/4Kjt3ZE.

You can see this live at [proglangdesign.net](https://proglangdesign.net).

## Adding your project

Add your project to `_data/projects.yml`, and then submit a pull request.
Place your project where it belongs in alphabetical order.
Your project's summary should be under 140 characters (shorter is better).
If your project has an icon, upload it to `images/lang/`.

Configuration format:
```yaml
MyProject:
  # Optional: Your project's website URL.
  website: https://example.com
  # Optional: Your project's GitHub repository.
  github: my-org/my-repo
  # Optional: Your project's GitLab repository.
  gitlab: my-org/my-repo
  # Optional: Your project's icon, located in `images/lang/`.
  icon: example.png
  # Mandatory: You must specify your name here. This may be your real name, or a preferred username.
  # Short syntax:
  # author: johndoe76
  # Long syntax:
  author:
    # Mandatory.
    name: John Doe
    # Optional: Your personal website.
    website: https://johndoe.example.com
  # Mandatory. A short (<140 character) summary of your project.
  # If the line becomes longer than 80 characters, use YAML's block text syntax.
  summary: >
   Lorem ipsum dolor sit amet, consectetur adipiscing elit,
   sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

A typical project:
```yaml
Plasma:
  website: https://plasmalang.org/
  github: PlasmaLang/Plasma
  icon: plasma.png
  author:
    name: Paul Bone
    website: https://paul.bone.id.au/
  summary: >
    A language that balances functional and imperative programming,
    and has state-of-the-art concurrency and parallelism features. 
```
  
A project with a very simple entry:
```yaml
C3:
  github: c3lang/c3
  author: Christoffer Lernö
  summary: >
    An evolution of C, adding modules, error handling and
    semantic macros.
```
