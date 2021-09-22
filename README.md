# proglangdesign.github.io

A website for the programming language design community, including #proglangdesign on [Libera.Chat](https://Libera.Chat), /r/ProgrammingLanguages, and https://discord.gg/4Kjt3ZE.

You can see this live at [proglangdesign.net](https://proglangdesign.net).

## Adding your project

Add your project to `_data/projects.yml`, and then submit a pull request.
Place your project where it belongs in alphabetical order.
Your project's summary should be under 140 characters (shorter is better).
If your project has an icon, upload it to `images/lang/`.

The most basic possible configuration:
```yaml
MyProject:
  github: my-org/my-repo
  author: John Doe
  summary: A brief (<140 character) description of my project.
  tags:
    - compiled
    - systems
```
Tags can be found in `_data/tags.yml`.

A real project with such an entry:
```yaml
C3:
  github: c3lang/c3
  author: Christoffer Lernö
  # Wrap lines over 80 characters long.
  summary: >
    An evolution of C, adding modules, error handling and
    semantic macros.
```

A more typical project:
```yaml
Plasma:
  website: https://plasmalang.org/
  github: PlasmaLang/Plasma
  # Place your icon in `images/lang/`.
  # Non-white SVGs or transparent PNGs are preferred.
  # If you are concerned about licensing issues with your language's icon,
  # you may link to it on an external site using a normal URL.
  icon: plasma.png
  # icon: https://example.com/icon/plasma.png
  author:
    name: Paul Bone
    website: https://paul.bone.id.au/
  summary: >
    A language that balances functional and imperative programming,
    and has state-of-the-art concurrency and parallelism features. 
```

A project with two contributors:
```yaml
Example:
  website: https://example.com
  authors:
    - arthur
    - name: Jess Writer
      website: https://jwriter.example.com
    - zeus94
  summary: Currently, no real project uses `authors`.
```

A project which prefers not to single out contributors:
```yaml
Monte:
  website: https://monte.readthedocs.io/en/latest/index.html
  github: monte-language
  libera: monte
  organization:
    name: The Monte authors
    # This page should include a list of the people involved.
    # Monte doesn't have a dedicated list, so the LICENSE file will suffice.
    website: https://github.com/monte-language/monte/blob/master/LICENSE
  summary: A dynamic programming language inspired by Python and E.
```

A large project, only one contributor of which is part of our community:
```yaml
Mercury:
  website: https://mercurylang.org/
  github: Mercury-Language/mercury
  icon: mercury.png
  organization:
    name: many
    website: https://mercurylang.org/development/people.html
  # This generated authorship list will be `many, including Paul Bone`.
  # The `including` bit is inserted automatically.
  # You may also use `authors`.
  author:
    name: Paul Bone
    website: https://paul.bone.id.au/
  summary: >
    A logic/functional programming language
    with advanced static analysis and error detection features.
```

Every single community type:
```yaml
MyProject:
  # You should include at least an author name and a website or repository.
  website: https://kittenlang.org
  github: inko-lang/inko
  gitlab: my-org/my-repo
  # Make sure you don't have too many icons, or they won't all fit.
  # I'd recommend no more than two: one forum-like service (e.g. Reddit, Discourse)
  # and one chat-like service (e.g. Libera, Matrix).
  # If you're really over more services than that, I'd personally recommend reconsidering;
  # a fragmented community isn't good for anybody.
  # If you use a service that isn't listed here, just open an issue, and I'll add it.
  reddit: futhark               # for /r/futhark
  discourse: https://discourse.inko-lang.org/
  discord: 4Kjt3ZE              # your invite code, as in https://discord.gg/4Kjt3ZE
  matrix: +inko:matrix.org      # or use a # for a channel instead of a group
  gitter: pikelet-lang/Lobby    # as in https://gitter.im/pikelet-lang/Lobby
  libera: fennel                # for #fennel on Libera.Chat
  twitter: rebuild_lang         # for @rebuild_lang
  author: Person
```
