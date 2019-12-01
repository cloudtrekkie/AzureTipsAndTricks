(window.webpackJsonp=window.webpackJsonp||[]).push([[67],{374:function(e,t,a){"use strict";a.r(t);var n=a(43),s=Object(n.a)({},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("div",{staticClass:"tip custom-block"},[a("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),a("p",[e._v("💡 Learn more : "),a("a",{attrs:{href:"https://docs.microsoft.com/azure/cognitive-services?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure Cognitive Services"),a("OutboundLink")],1),e._v(".")])]),e._v(" "),a("h4",{attrs:{id:"how-to-quickly-check-the-endpoint-api-of-qna-maker"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#how-to-quickly-check-the-endpoint-api-of-qna-maker","aria-hidden":"true"}},[e._v("#")]),e._v(" How to quickly check the EndPoint API of QnA Maker")]),e._v(" "),a("p",[e._v("If you haven't experimented with "),a("a",{attrs:{href:"https://qnamaker.ai/",target:"_blank",rel:"noopener noreferrer"}},[e._v("QnA Maker"),a("OutboundLink")],1),e._v(" then it is time. It enables you to quickly create a question and answer service from content like FAQ documents, URLs, and product manuals. You can create a knowledge base with existing data sources that you already have. Once complete, you might want to consume the endpoint API through applications such as Fiddler or cURL. In this post, I'll show you quickly how you can do both.")]),e._v(" "),a("p",[e._v("For Fiddler:")]),e._v(" "),a("p",[e._v("You need to specify "),a("code",[e._v("TLS1.2")]),e._v(". Simply go to "),a("strong",[e._v("Tools")]),e._v(" > "),a("strong",[e._v("Options")]),e._v(" > "),a("strong",[e._v("HTTPS")]),e._v(" to make "),a("strong",[e._v("tls1.2")]),e._v(" allowable.")]),e._v(" "),a("img",{attrs:{src:e.$withBase("/files/fiddlerazure1.png")}}),e._v(" "),a("p",[e._v("For cURL:")]),e._v(" "),a("p",[e._v("Simply replace placeholder text and it should work!")]),e._v(" "),a("div",{staticClass:"language-text line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v('curl \\\n--header "Content-type: application/json" \\\n--header "Authorization: EndpointKey placeholder-text-remove-me" \\\n--request POST \\\n--data \'{"question":"Have you completed the Azure Tips and Tricks Survey yet?"}\' \\\nhttps://myazureresourcename.azurewebsites.net/qnamaker/knowledgebases/placeholder-text-remove-me/generateAnswer\n')])]),e._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[e._v("1")]),a("br"),a("span",{staticClass:"line-number"},[e._v("2")]),a("br"),a("span",{staticClass:"line-number"},[e._v("3")]),a("br"),a("span",{staticClass:"line-number"},[e._v("4")]),a("br"),a("span",{staticClass:"line-number"},[e._v("5")]),a("br"),a("span",{staticClass:"line-number"},[e._v("6")]),a("br")])]),a("p",[e._v("I hope this helped!")])])},[],!1,null,null,null);t.default=s.exports}}]);