import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as s,c as l,a as e,e as r,F as o,b as a,f as d}from"./app.af021222.js";const c={},h=e("h1",{id:"install-inspec-on-linux",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#install-inspec-on-linux","aria-hidden":"true"},"#"),a(" Install InSpec on Linux")],-1),p=e("h2",{id:"option-1-package-installer",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#option-1-package-installer","aria-hidden":"true"},"#"),a(" Option 1 (Package installer)")],-1),u=a("The InSpec package is available for MacOS, RedHat, Ubuntu and Windows. Download the latest package at "),m={href:"https://downloads.chef.io/inspec",target:"_blank",rel:"noopener noreferrer"},b=a("InSpec Downloads"),g=a(" or install InSpec via script:"),_=d(`<div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code># RedHat, Ubuntu, and macOS
$ curl https://omnitruck.chef.io/install.sh | sudo bash -s -- -P inspec
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="option-2-terminal-install" tabindex="-1"><a class="header-anchor" href="#option-2-terminal-install" aria-hidden="true">#</a> Option 2 (Terminal install)</h2><p>Another option is to install InSpec via a command line:</p><h4 id="_1-install-ruby" tabindex="-1"><a class="header-anchor" href="#_1-install-ruby" aria-hidden="true">#</a> 1. Install Ruby</h4><p>When installing from source, gem dependencies may require ruby build tools to be installed.</p><p>For CentOS/RedHat/Fedora:<br><code>$ yum -y install ruby ruby-devel make gcc gcc-c++</code></p><p>For Debian/Ubuntu:<br><code>$ apt-get -y install ruby ruby-dev gcc g++ make</code></p><h4 id="_2-installing-inspec" tabindex="-1"><a class="header-anchor" href="#_2-installing-inspec" aria-hidden="true">#</a> 2. Installing InSpec</h4><p>Now we\u2019re on to the good stuff. Let\u2019s install InSpec:</p><p>To install inspec from rubygems:<br><code>$ gem install inspec</code></p><h4 id="_3-installing-additional-gems" tabindex="-1"><a class="header-anchor" href="#_3-installing-additional-gems" aria-hidden="true">#</a> 3. Installing additional gems</h4><p>Install the following gems:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>$ gem install bundler
$ gem install test-kitchen
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="after-install" tabindex="-1"><a class="header-anchor" href="#after-install" aria-hidden="true">#</a> After Install</h2><p>Once InSpec is installed, run <code>inspec version</code> to verify that the installation was successful.</p>`,15);function f(v,x){const n=i("ExternalLinkIcon");return s(),l(o,null,[h,p,e("p",null,[u,e("a",m,[b,r(n)]),g]),_],64)}var y=t(c,[["render",f],["__file","LinuxInstall.html.vue"]]);export{y as default};
