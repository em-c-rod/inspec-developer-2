import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as s,c as l,a as e,e as d,F as r,b as a,f as o}from"./app.af021222.js";const c={},u=e("h1",{id:"install-inspec-on-mac",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-inspec-on-mac","aria-hidden":"true"},"#"),a(" Install InSpec on Mac")],-1),h=e("h2",{id:"option-1-package-installer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#option-1-package-installer","aria-hidden":"true"},"#"),a(" Option 1 (Package installer)")],-1),p=a("The InSpec package is available for MacOS, RedHat, Ubuntu and Windows. Download the latest package at "),v={href:"https://downloads.chef.io/inspec",target:"_blank",rel:"noopener noreferrer"},m=a("InSpec Downloads"),b=a(" or install InSpec via script:"),g=o(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># RedHat, Ubuntu, and macOS
$ curl https://omnitruck.chef.io/install.sh | sudo bash -s -- -P inspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="option-2-terminal-install" tabindex="-1"><a class="header-anchor" href="#option-2-terminal-install" aria-hidden="true">#</a> Option 2 (Terminal install)</h2><p>Another option is to install InSpec via a command line:</p><h4 id="_1-install-homebrew" tabindex="-1"><a class="header-anchor" href="#_1-install-homebrew" aria-hidden="true">#</a> 1. Install Homebrew</h4><p>Before I could install InSpec, I needed to have the latest version of Ruby installed. And before I could install the latest version of Ruby, I had to install Homebrew, the OS X package manager.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ /usr/bin/ruby -e &quot;$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)&quot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_2-update-ruby" tabindex="-1"><a class="header-anchor" href="#_2-update-ruby" aria-hidden="true">#</a> 2. Update Ruby</h4><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ brew install rbenv ruby-build
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Add rbenv to bash so that it loads every time you open a terminal</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ echo &#39;if which rbenv &gt; /dev/null; then eval &quot;$(rbenv init -)&quot;; fi&#39; &gt;&gt; ~/.bash_profile
$ source ~/.bash_profile

$ rbenv install 2.7.2
$ rbenv global 2.7.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Close terminal and reopen.</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ ruby -v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_3-installing-inspec" tabindex="-1"><a class="header-anchor" href="#_3-installing-inspec" aria-hidden="true">#</a> 3. Installing InSpec</h4><p>Now we\u2019re on to the good stuff. Let\u2019s install InSpec:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ gem install inspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h4 id="_4-installing-additional-gems" tabindex="-1"><a class="header-anchor" href="#_4-installing-additional-gems" aria-hidden="true">#</a> 4. Installing additional gems</h4><p>Install the following gems:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ gem install bundler
$ gem install test-kitchen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="after-install" tabindex="-1"><a class="header-anchor" href="#after-install" aria-hidden="true">#</a> After Install</h2><p>Once InSpec is installed, run <code>inspec version</code> to verify that the installation was successful.</p>`,20);function x(f,_){const n=t("ExternalLinkIcon");return s(),l(r,null,[u,h,e("p",null,[p,e("a",v,[m,d(n)]),b]),g],64)}var S=i(c,[["render",x],["__file","MacInstall.html.vue"]]);export{S as default};