(window.webpackJsonp=window.webpackJsonp||[]).push([[212],{503:function(t,a,s){"use strict";s.r(a);var n=s(43),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),s("p",[t._v("💡 Learn more : "),s("a",{attrs:{href:"https://docs.microsoft.com/azure/storage/common/storage-account-overview?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[t._v("Azure storage account overview"),s("OutboundLink")],1),t._v(".")])]),t._v(" "),s("h4",{attrs:{id:"create-an-azure-storage-blob-container-through-c"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#create-an-azure-storage-blob-container-through-c","aria-hidden":"true"}},[t._v("#")]),t._v(" Create an Azure Storage Blob Container through C#")]),t._v(" "),s("p",[t._v("Azure Storage is described as a service that provides storages that is available, secure, durable, scalable, and redundant. Azure Storage consists of 1) Blob storage, 2) File Storage, and 3) Queue storage. In this post, we'll take a look at creating an Azure Storage Blob container with C#. "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Yesterday"),s("OutboundLink")],1),t._v(", I described how to do it through the Azure Portal.")]),t._v(" "),s("p",[t._v("Go ahead and open the Azure Portal and navigate to the Azure Storage account that we worked with "),s("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip74.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("yesterday"),s("OutboundLink")],1),t._v(".")]),t._v(" "),s("p",[t._v("Look under "),s("strong",[t._v("Settings")]),t._v(", then "),s("strong",[t._v("Access Keys")]),t._v(" and copy the connection string.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp1.png")}}),t._v(" "),s("p",[t._v("Create a C# Console Application, and use NuGet to pull in references to :")]),t._v(" "),s("ul",[s("li",[t._v("WindowsAzure.Storage")]),t._v(" "),s("li",[t._v("Microsoft.WindowsAzure.ConfigurationManager")])]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp2.png")}}),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp3.png")}}),t._v(" "),s("p",[t._v("Inside of your Console app, you will see "),s("strong",[t._v("App.config")]),t._v(", now add the following section:")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('  <appSettings>\n    <add key="StorageConnection" value="YOUR-CONNECTION-STRING-COPIED-FROM-EARLIER"/>\n  </appSettings>\n')])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br")])]),s("p",[t._v("Copy the following code into your Main method:")]),t._v(" "),s("div",{staticClass:"language-csharp line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-csharp"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("static")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("void")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Main")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" args"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" storageAccount "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" CloudStorageAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Parse")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CloudConfigurationManager"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetSetting")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"StorageConnection"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" myClient "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" storageAccount"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateCloudBlobClient")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" container "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" myClient"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("GetContainerReference")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"images-backup"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    container"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("CreateIfNotExists")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("BlobContainerPublicAccessType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Blob"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    Console"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("ReadLine")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br"),s("span",{staticClass:"line-number"},[t._v("7")]),s("br"),s("span",{staticClass:"line-number"},[t._v("8")]),s("br")])]),s("p",[t._v("This code will get our connection string from the "),s("strong",[t._v("App.config")]),t._v(", create our client and a container named "),s("strong",[t._v("images-backup")]),t._v(" if it doesn't exist. We can go back inside of the portal to see if executed correctly.")]),t._v(" "),s("img",{attrs:{src:t.$withBase("/files/storagethroughcsharp4.png")}})])},[],!1,null,null,null);a.default=e.exports}}]);