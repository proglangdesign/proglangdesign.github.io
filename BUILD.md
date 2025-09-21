
Building the website
====================

To build this website locally, the following instructions
might get you there:

1. Install ruby, ruby dev headers, and ruby builder.

2. Open a terminal and change directory to this repository.

3. (Optional, if you don't want to install it as root:)

   `bundler config set --local path "/home/`whoami`/.local/share/gem"`

4. `bundler install`

5. (Optional, if you don't have jekyll installed)

   `bundle add jekyll`

6. `~/.local/share/gem/ruby/3.4.0/bin/jekyll build`

   (Important: adjust with your ruby version!)


