import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as t,o as r,c,a as n,e,w as p,F as d,b as s,f as i}from"./app.af021222.js";const u={},v=n("h2",{id:"writing-inspec-controls",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#writing-inspec-controls","aria-hidden":"true"},"#"),s(" Writing InSpec Controls")],-1),m=n("p",null,"Now that you understand which methods map to each requirement, you're ready to write InSpec controls.",-1),b=n("h3",{id:"security-configuration-requirements",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#security-configuration-requirements","aria-hidden":"true"},"#"),s(" Security & Configuration Requirements")],-1),k=s("Recall from "),h=s("Section 4"),g=s(" that we want to verify that our NGINX instance had been configured to meet the following requirements:"),f=i(`<div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code><span class="token number">1</span>. NGINX version <span class="token number">1.10</span>.3 or later.
<span class="token number">2</span>. the following NGINX modules should be installed:
   * <span class="token variable"><span class="token variable">\`</span>http_ssl<span class="token variable">\`</span></span>
   * <span class="token variable"><span class="token variable">\`</span>stream_ssl<span class="token variable">\`</span></span>
   * <span class="token variable"><span class="token variable">\`</span>mail_ssl<span class="token variable">\`</span></span>
<span class="token number">3</span>. the NGINX configuration <span class="token function">file</span> - <span class="token variable"><span class="token variable">\`</span>/etc/nginx/nginx.conf<span class="token variable">\`</span></span>- should:
   * be owned by the <span class="token variable"><span class="token variable">\`</span>root<span class="token variable">\`</span></span> user and group.
   * not be readable, writeable, or executable by others.

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="requirement-1-nginx-version" tabindex="-1"><a class="header-anchor" href="#requirement-1-nginx-version" aria-hidden="true">#</a> Requirement (1) - NGINX Version</h3><p>The first requirement is for the NGINX version to be <code>1.10.3 or later</code>.</p><p>We can check this using the InSpec <code>cmp</code> matcher.</p><p>Replace the contents of <code>my_nginx/controls/example.rb</code> with this:</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>control <span class="token string-literal"><span class="token string">&#39;nginx-version&#39;</span></span> <span class="token keyword">do</span>
  impact <span class="token number">1.0</span>
  title <span class="token string-literal"><span class="token string">&#39;NGINX version&#39;</span></span>
  desc <span class="token string-literal"><span class="token string">&#39;The required version of NGINX should be installed.&#39;</span></span>
  describe nginx <span class="token keyword">do</span>
    its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;version&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should cmp <span class="token operator">&gt;=</span> <span class="token string-literal"><span class="token string">&#39;1.10.3&#39;</span></span> <span class="token punctuation">}</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,6),y={class:"custom-container tip"},_=n("p",{class:"custom-container-title"},"The `nginx_conf` resource docs",-1),x={href:"https://www.inspec.io/docs/reference/resources/nginx_conf/",target:"_blank",rel:"noopener noreferrer"},w=n("code",null,"nginx_conf",-1),N=n("p",null,[s("The test has an impact of 1.0, meaning it is most critical. A failure might indicate to the team that this issue should be resolved as soon as possible, likely by upgrading NGINX to a newer version. The test compares "),n("code",null,"nginx.version"),s(" against version 1.10.3.")],-1),I=n("code",null,"cmp",-1),T=s(" is one of InSpec's "),A={href:"https://www.inspec.io/docs/reference/matchers/",target:"_blank",rel:"noopener noreferrer"},q=s("built-in matchers"),G=s(". "),R=n("code",null,"cmp",-1),X=s(" understands version numbers and can use the operators ==, <, <=, >=, and >. "),Y=n("code",null,"cmp",-1),E=s(' compares versions by each segment, not as a string. For example, "7.4" is less than than "7.30".'),L=i(`<p>Next, run <code>inspec exec</code> to execute the profile on the remote target.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>inspec <span class="token builtin class-name">exec</span> /root/my_nginx -t docker://DOCKER_CONTAINER_ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This will ouput:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  Profile: InSpec Profile <span class="token punctuation">(</span>my_nginx<span class="token punctuation">)</span>
  Version: <span class="token number">0.1</span>.0
  Target:  docker://DOCKER_CONTAINER_ID

    \u2714  nginx-version: NGINX version
       \u2714  Nginx Environment version should <span class="token function">cmp</span> <span class="token operator">&gt;=</span> <span class="token string">&quot;1.10.3&quot;</span>


  Profile Summary: <span class="token number">1</span> successful control, <span class="token number">0</span> control failures, <span class="token number">0</span> controls skipped
  Test Summary: <span class="token number">1</span> successful, <span class="token number">0</span> failures, <span class="token number">0</span> skipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>You see that the test passes.</p><h3 id="requirement-2-nginx-modules-are-installed" tabindex="-1"><a class="header-anchor" href="#requirement-2-nginx-modules-are-installed" aria-hidden="true">#</a> Requirement (2) - NGINX Modules are Installed</h3><p>The second requirement verifies that our required modules are installed.</p><ul><li>http_ssl</li><li>stream_ssl</li><li>mail_ssl</li></ul><p>Append your control file to add this describe block:</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>control <span class="token string-literal"><span class="token string">&#39;nginx-modules&#39;</span></span> <span class="token keyword">do</span>
  impact <span class="token number">1.0</span>
  title <span class="token string-literal"><span class="token string">&#39;NGINX modules&#39;</span></span>
  desc <span class="token string-literal"><span class="token string">&#39;The required NGINX modules should be installed.&#39;</span></span>
  describe nginx <span class="token keyword">do</span>
    its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;modules&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should <span class="token keyword">include</span> <span class="token string-literal"><span class="token string">&#39;http_ssl&#39;</span></span> <span class="token punctuation">}</span>
    its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;modules&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should <span class="token keyword">include</span> <span class="token string-literal"><span class="token string">&#39;stream_ssl&#39;</span></span> <span class="token punctuation">}</span>
    its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;modules&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should <span class="token keyword">include</span> <span class="token string-literal"><span class="token string">&#39;mail_ssl&#39;</span></span> <span class="token punctuation">}</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),C={class:"custom-container tip"},M=n("p",{class:"custom-container-title"},"The `nginx_conf` resource docs",-1),S={href:"https://www.inspec.io/docs/reference/resources/nginx_conf/",target:"_blank",rel:"noopener noreferrer"},O=n("code",null,"nginx_conf",-1),P=i(`<p>The second control resembles the first; however, this version uses multiple <code>its</code> statements and the <code>nginx.modules</code> method. The <code>nginx.modules</code> method returns a list; the built-in <code>include</code> matcher verifies whether a value belongs to a given list.</p><p>Run <code>inspec exec</code> on the target.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ inspec <span class="token builtin class-name">exec</span> /root/my_nginx -t docker://DOCKER_CONTAINER_ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Which again, will output:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>
  Profile: InSpec Profile <span class="token punctuation">(</span>my_nginx<span class="token punctuation">)</span>
  Version: <span class="token number">0.1</span>.0
  Target:  docker://DOCKER_CONTAINER_ID

    \u2714  nginx-version: NGINX version
       \u2714  Nginx Environment version should <span class="token function">cmp</span> <span class="token operator">&gt;=</span> <span class="token string">&quot;1.10.3&quot;</span>
    \u2714  nginx-modules: NGINX version
       \u2714  Nginx Environment modules should include <span class="token string">&quot;http_ssl&quot;</span>
       \u2714  Nginx Environment modules should include <span class="token string">&quot;stream_ssl&quot;</span>
       \u2714  Nginx Environment modules should include <span class="token string">&quot;mail_ssl&quot;</span>


  Profile Summary: <span class="token number">2</span> successful controls, <span class="token number">0</span> control failures, <span class="token number">0</span> controls skipped
  Test Summary: <span class="token number">4</span> successful, <span class="token number">0</span> failures, <span class="token number">0</span> skipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This time, both controls pass.</p><h3 id="requirement-3-permission-on-the-nginx-conf-file" tabindex="-1"><a class="header-anchor" href="#requirement-3-permission-on-the-nginx-conf-file" aria-hidden="true">#</a> Requirement (3) - Permission on the <code>nginx_conf</code> file</h3><p>The third requirement verifies that the NGINX configuration file, <code>/etc/nginx/nginx.conf</code>:</p><ul><li>is owned by the root user and group.</li><li>is not be readable, writeable, or executable by others.</li></ul><p>Append your control file to add this describe block:</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>control <span class="token string-literal"><span class="token string">&#39;nginx-conf&#39;</span></span> <span class="token keyword">do</span>
  impact <span class="token number">1.0</span>
  title <span class="token string-literal"><span class="token string">&#39;NGINX configuration&#39;</span></span>
  desc <span class="token string-literal"><span class="token string">&#39;The NGINX config file should owned by root, be writable only by owner, and not writeable or and readable by others.&#39;</span></span>
  describe file<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;/etc/nginx/nginx.conf&#39;</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span>
    it <span class="token punctuation">{</span> should be_owned_by <span class="token string-literal"><span class="token string">&#39;root&#39;</span></span> <span class="token punctuation">}</span>
    it <span class="token punctuation">{</span> should be_grouped_into <span class="token string-literal"><span class="token string">&#39;root&#39;</span></span> <span class="token punctuation">}</span>
    it <span class="token punctuation">{</span> should_not be_readable<span class="token punctuation">.</span>by<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;others&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    it <span class="token punctuation">{</span> should_not be_writable<span class="token punctuation">.</span>by<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;others&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    it <span class="token punctuation">{</span> should_not be_executable<span class="token punctuation">.</span>by<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;others&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),D={class:"custom-container tip"},F=n("p",{class:"custom-container-title"},"The `file` resource docs",-1),V={href:"https://www.inspec.io/docs/reference/resources/file/",target:"_blank",rel:"noopener noreferrer"},K=n("code",null,"file",-1),B=i(`<p>The third control uses the <code>file</code> resource. The first 2 tests use <code>should</code> to verify the <code>root</code> owner and group. The last 3 tests use <code>should_not</code> to verify that the file is not readable, writable, or executable by others.</p><p>Run <code>inspec exec</code> on the target.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ inspec <span class="token builtin class-name">exec</span> /root/my_nginx -t docker://DOCKER_CONTAINER_ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>Again, outputting:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>  Profile: InSpec Profile <span class="token punctuation">(</span>my_nginx<span class="token punctuation">)</span>
  Version: <span class="token number">0.1</span>.0
  Target:  docker://DOCKER_CONTAINER_ID

    <span class="token punctuation">..</span>.
    \xD7  nginx-conf: NGINX configuration <span class="token punctuation">(</span><span class="token number">1</span> failed<span class="token punctuation">)</span>
       \u2714  File /etc/nginx/nginx.conf should be owned by <span class="token string">&quot;root&quot;</span>
       \u2714  File /etc/nginx/nginx.conf should be grouped into <span class="token string">&quot;root&quot;</span>
       \xD7  File /etc/nginx/nginx.conf should not be readable by others
       expected File /etc/nginx/nginx.conf not to be readable by others
       \u2714  File /etc/nginx/nginx.conf should not be writable by others
       \u2714  File /etc/nginx/nginx.conf should not be executable by others


  Profile Summary: <span class="token number">2</span> successful controls, <span class="token number">1</span> control failure, <span class="token number">0</span> controls skipped
  Test Summary: <span class="token number">8</span> successful, <span class="token number">1</span> failure, <span class="token number">0</span> skipped
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>This time you see a failure. You discover that <code>/etc/nginx/nginx.conf</code> is potentially readable by others. Because this control also has an impact of 1.0, your team may need to investigate further.</p><p>Remember, the first step, detect, is where you identify where the problems are so that you can accurately assess risk and prioritize remediation actions.</p><p>For the second step, correct, you can use a configuration management tool or some other automation framework to correct compliance failures for you.</p>`,8),W=s("You won't correct this issue in this module, but later you can check out the "),z={href:"https://learn.chef.io/tracks/integrated-compliance#/",target:"_blank",rel:"noopener noreferrer"},H=s("Integrated Compliance with Chef"),$=s(" track to learn more about how to correct compliance issues using Chef."),j=i(`<h2 id="refactoring-the-code-to-use-inputs" tabindex="-1"><a class="header-anchor" href="#refactoring-the-code-to-use-inputs" aria-hidden="true">#</a> Refactoring the code to use Inputs</h2><p>Your <code>my_nginx</code> profile is off to a great start. As your requirements evolve, you can add additional controls. You can also run this profile as often as you need to verify whether your systems remain in compliance.</p><p>Let&#39;s review the control file, <code>example.rb</code>.</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>control <span class="token string-literal"><span class="token string">&#39;nginx-version&#39;</span></span> <span class="token keyword">do</span>
  impact <span class="token number">1.0</span>
  title <span class="token string-literal"><span class="token string">&#39;NGINX version&#39;</span></span>
  desc <span class="token string-literal"><span class="token string">&#39;The required version of NGINX should be installed.&#39;</span></span>
  describe nginx <span class="token keyword">do</span>
    its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;version&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should cmp <span class="token operator">&gt;=</span> <span class="token string-literal"><span class="token string">&#39;1.10.3&#39;</span></span> <span class="token punctuation">}</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>

control <span class="token string-literal"><span class="token string">&#39;nginx-modules&#39;</span></span> <span class="token keyword">do</span>
  impact <span class="token number">1.0</span>
  title <span class="token string-literal"><span class="token string">&#39;NGINX modules&#39;</span></span>
  desc <span class="token string-literal"><span class="token string">&#39;The required NGINX modules should be installed.&#39;</span></span>
  describe nginx <span class="token keyword">do</span>
    its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;modules&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should <span class="token keyword">include</span> <span class="token string-literal"><span class="token string">&#39;http_ssl&#39;</span></span> <span class="token punctuation">}</span>
    its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;modules&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should <span class="token keyword">include</span> <span class="token string-literal"><span class="token string">&#39;stream_ssl&#39;</span></span> <span class="token punctuation">}</span>
    its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;modules&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should <span class="token keyword">include</span> <span class="token string-literal"><span class="token string">&#39;mail_ssl&#39;</span></span> <span class="token punctuation">}</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>

control <span class="token string-literal"><span class="token string">&#39;nginx-conf&#39;</span></span> <span class="token keyword">do</span>
  impact <span class="token number">1.0</span>
  title <span class="token string-literal"><span class="token string">&#39;NGINX configuration&#39;</span></span>
  desc <span class="token string-literal"><span class="token string">&#39;The NGINX config file should owned by root, be writable only by owner, and not writeable or and readable by others.&#39;</span></span>
  describe file<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;/etc/nginx/nginx.conf&#39;</span></span><span class="token punctuation">)</span> <span class="token keyword">do</span>
    it <span class="token punctuation">{</span> should be_owned_by <span class="token string-literal"><span class="token string">&#39;root&#39;</span></span> <span class="token punctuation">}</span>
    it <span class="token punctuation">{</span> should be_grouped_into <span class="token string-literal"><span class="token string">&#39;root&#39;</span></span> <span class="token punctuation">}</span>
    it <span class="token punctuation">{</span> should_not be_readable<span class="token punctuation">.</span>by<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;others&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    it <span class="token punctuation">{</span> should_not be_writable<span class="token punctuation">.</span>by<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;others&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
    it <span class="token punctuation">{</span> should_not be_executable<span class="token punctuation">.</span>by<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;others&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),J={class:"custom-container tip"},Q=n("p",{class:"custom-container-title"},"The `nginx_conf` resource docs",-1),U={href:"https://www.inspec.io/docs/reference/resources/nginx_conf/",target:"_blank",rel:"noopener noreferrer"},Z=n("code",null,"nginx_conf",-1),nn=i(`<p>Although these rules do what you expect, imagine your control file contains dozens or hundreds of tests. As the data you check for, such as the version or which modules are installed, evolve, it can become tedious to locate and update your tests. You may also find that you repeat the same data in across multiple control files.</p><p>One way to improve these tests is to use <code>inputs</code>. <code>Inputs</code> enable you to separate the <code>logic of your tests</code> from <code>the data your tests</code>. <code>Input files</code> are typically expressed as a <code>YAML</code> file.</p><p><code>Profile Inputs</code> exist in your profile&#39;s main directory within the <code>inspec.yml</code> for global <code>inputs</code> to be used across all the controls in your profile.</p><p>Let&#39;s create the <code>inspec.yml</code> file for our profile:</p><div class="language-yaml ext-yml line-numbers-mode"><pre class="language-yaml"><code><span class="token key atrule">name</span><span class="token punctuation">:</span> my_nginx
<span class="token key atrule">title</span><span class="token punctuation">:</span> InSpec Profile
<span class="token key atrule">maintainer</span><span class="token punctuation">:</span> The Authors
<span class="token key atrule">copyright</span><span class="token punctuation">:</span> The Authors
<span class="token key atrule">copyright_email</span><span class="token punctuation">:</span> you@example.com
<span class="token key atrule">license</span><span class="token punctuation">:</span> Apache<span class="token punctuation">-</span><span class="token number">2.0</span>
<span class="token key atrule">summary</span><span class="token punctuation">:</span> An InSpec Compliance Profile
<span class="token key atrule">version</span><span class="token punctuation">:</span> 0.1.0
<span class="token key atrule">supports</span><span class="token punctuation">:</span>
  <span class="token key atrule">platform</span><span class="token punctuation">:</span> os

<span class="token key atrule">inputs</span><span class="token punctuation">:</span>
  <span class="token punctuation">-</span> <span class="token key atrule">name</span><span class="token punctuation">:</span> nginx_version
    <span class="token key atrule">type</span><span class="token punctuation">:</span> string
    <span class="token key atrule">value</span><span class="token punctuation">:</span> 1.10.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>To access an input you will use the input keyword. You can use this anywhere in your control code.</p><p>For example:</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>control <span class="token string-literal"><span class="token string">&#39;nginx-version&#39;</span></span> <span class="token keyword">do</span>
  impact <span class="token number">1.0</span>
  title <span class="token string-literal"><span class="token string">&#39;NGINX version&#39;</span></span>
  desc <span class="token string-literal"><span class="token string">&#39;The required version of NGINX should be installed.&#39;</span></span>
  describe nginx <span class="token keyword">do</span>
    its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;version&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should cmp <span class="token operator">&gt;=</span> input<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;nginx_version&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">}</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>For our next control we require specific modules</p><p>Example of adding an array object of servers:</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>inputs:
  - name: servers
    type: array
    value:
      - server1
      - server2
      - server3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Similarly as the above example we can edit our <code>inspec.yml</code> file like this:</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>name: my_nginx
title: InSpec Profile
maintainer: The Authors
copyright: The Authors
copyright_email: you@example.com
license: Apache-2.0
summary: An InSpec Compliance Profile
version: 0.1.0
supports:
  platform: os

inputs:
  - name: nginx_version
    type: string
    value: 1.10.3

  - name: nginx_modules
    type: array
    value:
      - http_ssl
      - stream_ssl
      - mail_ssl
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Your control can be changed to look like this:</p><div class="language-ruby ext-rb line-numbers-mode"><pre class="language-ruby"><code>control <span class="token string-literal"><span class="token string">&#39;nginx-modules&#39;</span></span> <span class="token keyword">do</span>
  impact <span class="token number">1.0</span>
  title <span class="token string-literal"><span class="token string">&#39;NGINX modules&#39;</span></span>
  desc <span class="token string-literal"><span class="token string">&#39;The required NGINX modules should be installed.&#39;</span></span>
  
  describe nginx <span class="token keyword">do</span>
    input<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;nginx_modules&#39;</span></span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token keyword">each</span> <span class="token keyword">do</span> <span class="token operator">|</span>current_module<span class="token operator">|</span>
      its<span class="token punctuation">(</span><span class="token string-literal"><span class="token string">&#39;modules&#39;</span></span><span class="token punctuation">)</span> <span class="token punctuation">{</span> should <span class="token keyword">include</span> current_module <span class="token punctuation">}</span>
    <span class="token keyword">end</span>
  <span class="token keyword">end</span>
<span class="token keyword">end</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="multiple-inputs-example" tabindex="-1"><a class="header-anchor" href="#multiple-inputs-example" aria-hidden="true">#</a> Multiple Inputs Example</h2><p>To change your inputs for platform specific cases you can setup multiple input files.</p><p>For example, a inspec.yml:</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>inputs:
  - name: users
    type: array
    required: true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A YAML file named windows.yml</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>users:
  - Administrator
  - Guest
  - Randy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A YAML file named linux.yml</p><div class="language-YAML ext-YAML line-numbers-mode"><pre class="language-YAML"><code>users:
  - root
  - shadow
  - rmadison
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The control file:</p><div class="language-Ruby ext-Ruby line-numbers-mode"><pre class="language-Ruby"><code>control &#39;system-users&#39; do
  impact 0.8
  desc &#39;Confirm the proper users are created on the system&#39;

  describe users do
    its(&#39;usernames&#39;) { should eq input(&#39;users&#39;) }
  end
end
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>The following command runs the tests and applies the inputs specified, first, on the Linux system:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>inspec <span class="token builtin class-name">exec</span> examples/profile-input --input-file examples/windows.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>And, on our Windows systems:</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>inspec <span class="token builtin class-name">exec</span> examples/profile-input --input-file examples/linux.yml
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="running-the-baseline-straight-from-github" tabindex="-1"><a class="header-anchor" href="#running-the-baseline-straight-from-github" aria-hidden="true">#</a> Running the baseline straight from Github</h2>`,30),sn=s("In this module, we use NGINX for learning purposes. If you're interested in NGINX specifically, you may be interested in the "),en={href:"https://github.com/mitre/nginx-srg-baseline",target:"_blank",rel:"noopener noreferrer"},an=s("MITRE nginx-srg-baseline"),tn=s(" profile on GitHub."),ln=i(`<p>To execute the GitHub profile on your target system, run this <code>inspec exec</code> command.</p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>inspec <span class="token builtin class-name">exec</span> https://github.com/mitre/nginx-baseline -t docker://DOCKER_CONTAINER_ID
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,2);function on(rn,cn){const l=t("RouterLink"),a=t("ExternalLinkIcon");return r(),c(d,null,[v,m,b,n("p",null,[k,e(l,{to:"/course/4.html"},{default:p(()=>[h]),_:1}),g]),f,n("div",y,[_,n("p",null,[n("a",x,[w,e(a)])])]),N,n("p",null,[I,T,n("a",A,[q,e(a)]),G,R,X,Y,E]),L,n("div",C,[M,n("p",null,[n("a",S,[O,e(a)])])]),P,n("div",D,[F,n("p",null,[n("a",V,[K,e(a)])])]),B,n("p",null,[W,n("a",z,[H,e(a)]),$]),j,n("div",J,[Q,n("p",null,[n("a",U,[Z,e(a)])])]),nn,n("p",null,[sn,n("a",en,[an,e(a)]),tn]),ln],64)}var un=o(u,[["render",on],["__file","05.html.vue"]]);export{un as default};
