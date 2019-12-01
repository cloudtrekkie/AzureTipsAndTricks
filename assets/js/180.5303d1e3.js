(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{470:function(e,t,r){"use strict";r.r(t);var o=r(43),a=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/containers/?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure for Containers"),r("OutboundLink")],1),e._v(".")]),e._v(" "),r("p",[e._v("📺 Watch the video : "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=Kx7mOgdr3Ro&list=PLLasX02E8BPCNCK8Thcxu-Y-XcBUbhFWC&index=36?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("How to Get Started with Docker and Azure"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"containers-for-the-rest-of-us"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#containers-for-the-rest-of-us","aria-hidden":"true"}},[e._v("#")]),e._v(" Containers for the rest of us")]),e._v(" "),r("p",[e._v("For some reason, I find containers are confusing and my goal with my "),r("a",{attrs:{href:"https://michaelcrump.net/azure-tips-and-tricks-complete-list/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Tips and Tricks"),r("OutboundLink")],1),e._v(" is to try to make things easier. In this mini-series, I'll walk you through "),r("a",{attrs:{href:"https://www.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),r("OutboundLink")],1),e._v(" and how I use it with Azure. Below is a list of post that you can expect for this week.")]),e._v(" "),r("ul",[r("li",[r("router-link",{attrs:{to:"./tip45.html"}},[e._v("Azure Tips and Tricks Part 45 - Getting Started with Docker and Azure")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./tip46.html"}},[e._v("Today - Azure Tips and Tricks Part 46 - Run an app inside a Container Image with Docker")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./tip47.html"}},[e._v("Azure Tips and Tricks Part 47 - Creating a Container Image with Docker")])],1),e._v(" "),r("li",[r("router-link",{attrs:{to:"./tip48.html"}},[e._v("Azure Tips and Tricks Part 48 - Pushing a Container Image to a Docker Repo")])],1)]),e._v(" "),r("h4",{attrs:{id:"getting-started-with-docker-and-azure"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#getting-started-with-docker-and-azure","aria-hidden":"true"}},[e._v("#")]),e._v(" Getting Started with Docker and Azure")]),e._v(" "),r("p",[r("strong",[e._v("What is Docker?")]),e._v(" Docker is an open-source project that automates the deployment of applications inside software containers. It automates the repetitive tasks of setting up and configuring development environments so that developers can develop.")]),e._v(" "),r("p",[e._v("Head over to "),r("a",{attrs:{href:"https://www.docker.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Docker"),r("OutboundLink")],1),e._v(" and you'll want to download the Community Edition. Keep in mind that there are two channels. Which are the Stable and Edge version. As you can imagine, the stable build is... well... stable and the edge build is for those that want the latest bits (which may not be tested). Choose your poison. For this series, we'll use the Stable version.")]),e._v(" "),r("p",[e._v("Once it has been downloaded and installed, you should see a green light that indicates that docker is running.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/dockerazure1.png")}}),e._v(" "),r("p",[e._v("You can easily verify it was installed properly by opening terminal or a command prompt and typing "),r("code",[e._v("docker info")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/dockerazure2.png")}}),e._v(" "),r("p",[e._v("If you would like to see version information then type "),r("code",[e._v("docker version")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/dockerazure3.png")}}),e._v(" "),r("p",[e._v("Great, so now let's pull an image since it is up and running properly. Head over to "),r("a",{attrs:{href:"http://store.docker.com",target:"_blank",rel:"noopener noreferrer"}},[e._v("store.docker.com"),r("OutboundLink")],1),e._v(" and search for aspnetcore-build.")]),e._v(" "),r("p",[r("strong",[e._v("Why this image?")]),e._v(" We want to run an ASP.NET Core without installing the tools, platform and SDK on my local machine.")]),e._v(" "),r("p",[e._v("If you search for "),r("code",[e._v("aspnetcore-build")]),e._v(" then you'll land on this "),r("a",{attrs:{href:"https://store.docker.com/community/images/microsoft/aspnetcore-build",target:"_blank",rel:"noopener noreferrer"}},[e._v("page"),r("OutboundLink")],1),e._v(". Pay close attention to the following command (highlighted below) that we'll use to copy into our terminal/command prompt to pull down the image.")]),e._v(" "),r("p",[e._v("Note the structure of the command - "),r("code",[e._v("docker pull microsoft/aspnetcore-build")]),e._v(". If you're familiar with git, then this syntax feels right at home. You can also type "),r("code",[e._v("docker help")]),e._v(" for a full list of commands.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/dockerazure4.png")}}),e._v(" "),r("p",[e._v("You'll see Docker pulled the image from Docker Store, and when it completes, you can type "),r("code",[e._v("docker images")]),e._v(" to list all the images available to use.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/dockerazure5.gif")}}),e._v(" "),r("div",{staticClass:"language-text line-numbers-mode"},[r("pre",{pre:!0,attrs:{class:"language-text"}},[r("code",[e._v("Michaels-MacBook-Pro:~ mbcrump$ docker images\nREPOSITORY                   TAG                 IMAGE ID            CREATED             SIZE\nmicrosoft/aspnetcore-build   latest              c0c285a7a306        37 hours ago        1.85GB\n")])]),e._v(" "),r("div",{staticClass:"line-numbers-wrapper"},[r("span",{staticClass:"line-number"},[e._v("1")]),r("br"),r("span",{staticClass:"line-number"},[e._v("2")]),r("br"),r("span",{staticClass:"line-number"},[e._v("3")]),r("br")])])])},[],!1,null,null,null);t.default=a.exports}}]);