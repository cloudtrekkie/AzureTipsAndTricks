(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{489:function(e,n,a){"use strict";a.r(n);var t=a(43),s=Object(t.a)({},function(){var e=this,n=e.$createElement,a=e._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/azure-functions/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Functions Documentation"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"java-in-azure-function-with-vs-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#java-in-azure-function-with-vs-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Java in Azure Function with VS Code")]),e._v(" "),a("p",[e._v("I just spent time over the weekend playing with Java in Azure Functions. As a prior Java developer and Azure Functions fan, you'll be happy to know that you can scaffold an app in a couple of ways.")]),e._v(" "),a("h4",{attrs:{id:"getting-setup"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#getting-setup","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting setup")]),e._v(" "),a("p",[e._v("You'll need a few things before getting started such as:")]),e._v(" "),a("p",[a("a",{attrs:{href:"https://www.microsoft.com/net/core",target:"_blank",rel:"noopener noreferrer"}},[e._v(".NET Core"),a("OutboundLink")],1),e._v(","),a("a",{attrs:{href:"https://www.azul.com/downloads/zulu/",target:"_blank",rel:"noopener noreferrer"}},[e._v("JDK"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://docs.microsoft.com/cli/azure?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure CLI"),a("OutboundLink")],1),e._v(", "),a("a",{attrs:{href:"https://maven.apache.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("Apache Maven"),a("OutboundLink")],1),e._v(" and "),a("a",{attrs:{href:"https://nodejs.org/download/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Node.js"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("Once that is ready, you can easily turn this on by "),a("code",[e._v("npm install -g azure-functions-core-tools@core")]),e._v(". You should see the following:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("\n> azure-functions-core-tools@2.0.1-beta.18 uninstall /usr/local/lib/node_modules/azure-functions-core-tools\n> node lib/uninstall.js\n\ndeleting /Users/mbcrump/.azurefunctions/bin\n/usr/local/bin/func -> /usr/local/lib/node_modules/azure-functions-core-tools/lib/main.js\n/usr/local/bin/azfun -> /usr/local/lib/node_modules/azure-functions-core-tools/lib/main.js\n/usr/local/bin/azurefunctions -> /usr/local/lib/node_modules/azure-functions-core-tools/lib/main.js\n\n> azure-functions-core-tools@2.0.1-beta.22 postinstall /usr/local/lib/node_modules/azure-functions-core-tools\n> node lib/install.js\n\n[==================] Downloading Azure Functions Cli\n+ azure-functions-core-tools@2.0.1-beta.22\nadded 1 package and updated 6 packages in 18.873s\n")])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br"),a("span",{staticClass:"line-number"},[e._v("7")]),a("br"),a("span",{staticClass:"line-number"},[e._v("8")]),a("br"),a("span",{staticClass:"line-number"},[e._v("9")]),a("br"),a("span",{staticClass:"line-number"},[e._v("10")]),a("br"),a("span",{staticClass:"line-number"},[e._v("11")]),a("br"),a("span",{staticClass:"line-number"},[e._v("12")]),a("br"),a("span",{staticClass:"line-number"},[e._v("13")]),a("br"),a("span",{staticClass:"line-number"},[e._v("14")]),a("br"),a("span",{staticClass:"line-number"},[e._v("15")]),a("br")])]),a("h4",{attrs:{id:"use-maven-to-generate-a-java-azure-functions-app"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-maven-to-generate-a-java-azure-functions-app","aria-hidden":"true"}},[e._v("#")]),e._v(" Use Maven to generate a Java Azure Functions app")]),e._v(" "),a("p",[e._v("You'll now take advantage of Maven and will scaffold a new Azure Functions project with "),a("code",[e._v("mvn archetype:generate -DarchetypeGroupId=com.microsoft.azure -DarchetypeArtifactId=azure-functions-archetype")]),e._v(".")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/functionjava1.gif")}}),e._v(" "),a("p",[a("strong",[e._v("Remember this!")]),e._v(" There is a ridiculous number of things you can do with Maven. Check out the "),a("a",{attrs:{href:"https://github.com/Microsoft/azure-maven-plugins/tree/master/azure-functions-maven-plugin?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub repo"),a("OutboundLink")],1),e._v(" for usage and configuration examples.")]),e._v(" "),a("p",[e._v("I'd also recommend installing the extension that is suggested for Java projects:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/functionjava2.png")}}),e._v(" "),a("p",[e._v("OK, cool! We have scaffolded a Java Azure Function project and we are using VS Code to edit it.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/functionjava3.png")}}),e._v(" "),a("p",[e._v("Make note of the following comments in the Java code as we'll use the 2nd curl command shortly:")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('    /**\n     * This function listens at endpoint "/api/hello". Two ways to invoke it using "curl" command in bash:\n     * 1. curl -d "HTTP Body" {your host}/api/hello\n     * 2. curl {your host}/api/hello?name=HTTP%20Query\n     */\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br")])]),a("p",[e._v("You can now run "),a("code",[e._v("mvn clean package")]),e._v(" and "),a("code",[e._v("mvn azure-functions:run")]),e._v(" from inside the integrated terminal or command prompt. You'll now have a localhost URL that you run the curl command "),a("code",[e._v("curl {your host}/api/hello?name=HTTP%20Query")]),e._v(" to ensure it was working properly. You should see "),a("code",[e._v("Hello HTTP Query!")]),e._v(".")]),e._v(" "),a("h4",{attrs:{id:"use-the-plugin-for-visual-studio-code"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#use-the-plugin-for-visual-studio-code","aria-hidden":"true"}},[e._v("#")]),e._v(" Use the plugin for Visual Studio Code")]),e._v(" "),a("p",[a("strong",[e._v("Remember this!")]),e._v("  Keep in mind that you'll need all the prerequisites covered earlier in this post before proceeding.")]),e._v(" "),a("p",[e._v("I covered the plugin back in "),a("router-link",{attrs:{to:"./tip50/"}},[e._v("post 50")]),e._v(", but basically grab the plugin and login into your Azure account and create a new Azure Function as shown below:")],1),e._v(" "),a("p",[e._v("Click New and you'll see the following:")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/functionjava4.png")}}),e._v(" "),a("p",[e._v("Now you'll walk through the same steps that you did before through the command line, but now right inside VS Code.")])])},[],!1,null,null,null);n.default=s.exports}}]);