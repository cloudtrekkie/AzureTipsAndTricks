(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{347:function(e,t,r){"use strict";r.r(t);var o=r(43),n=Object(o.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("div",{staticClass:"tip custom-block"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("💡 Learn more : "),r("a",{attrs:{href:"https://docs.microsoft.com/azure/iot-hub/about-iot-hub?WT.mc_id=docs-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Azure IoT Hub Overview"),r("OutboundLink")],1),e._v(".")])]),e._v(" "),r("h4",{attrs:{id:"the-series-so-far"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#the-series-so-far","aria-hidden":"true"}},[e._v("#")]),e._v(" The Series So Far")]),e._v(" "),r("p",[e._v("At Build 2018, we first saw the "),r("a",{attrs:{href:"http://aka.ms/button?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("IoT Button"),r("OutboundLink")],1),e._v(". I started "),r("a",{attrs:{href:"https://www.youtube.com/watch?v=OdGHWwRBf_c?WT.mc_id=youtube-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("exploring the device"),r("OutboundLink")],1),e._v(" with the very first unboxing and decided to create a mini-series to walk you how to use the device from start to finish. The series (so far) is located below")]),e._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip122.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("This post - Creating an IoT for the IoT Button"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip123.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Configuring and Setting up the IoT Button"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip124.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Creating the Azure Logic App for our IoT Button"),r("OutboundLink")],1)]),e._v(" "),r("li",[r("a",{attrs:{href:"https://microsoft.github.io/AzureTipsAndTricks/blog/tip125.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Using Azure Function to call our Logic App with the IoT Button"),r("OutboundLink")],1)])]),e._v(" "),r("p",[e._v("I recently recorded a fun video with my daughter unboxing the new "),r("a",{attrs:{href:"http://aka.ms/button?WT.mc_id=akams-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("IoT Button"),r("OutboundLink")],1),e._v(" that was handed out at Build 2018.")]),e._v(" "),r("iframe",{attrs:{width:"560",height:"315",src:"https://www.youtube.com/embed/OdGHWwRBf_c?rel=0",frameborder:"0",allow:"autoplay; encrypted-media",allowfullscreen:""}}),e._v(" "),r("h4",{attrs:{id:"we-need-an-iot-hub-captain"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#we-need-an-iot-hub-captain","aria-hidden":"true"}},[e._v("#")]),e._v(" We need an IoT Hub, Captain!")]),e._v(" "),r("p",[e._v("Before we can start enjoying the IoT Button, we first need to setup an IoT Hub.")]),e._v(" "),r("p",[e._v("Go inside of the Azure Portal and search for "),r("strong",[e._v("IoT Hub")]),e._v(" and begin to create one. Fill out the following information, but keep notepad open and save the "),r("strong",[e._v("IoT Hub Name")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/iotbutton1.png")}}),e._v(" "),r("p",[e._v("Make sure that you select the "),r("strong",[e._v("Free Tier")]),e._v(" and you can leave the rest at defaults. If you already have an IoT Hub with a free tier, then you'll need to either use that one or delete it to create another free tier.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/iotbutton2.png")}}),e._v(" "),r("p",[e._v("Once it creates, save your Hostname as you'll use that later.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/iotbutton3.png")}}),e._v(" "),r("p",[e._v("You'll want to click on "),r("strong",[e._v("Shared Access Policies")]),e._v(" and then "),r("strong",[e._v("iothubowner")]),e._v(" and copy and paste the "),r("strong",[e._v("Conneection String - Primary")]),e._v(" for later use.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/iotbutton4.png")}}),e._v(" "),r("p",[e._v("Now download "),r("a",{attrs:{href:"https://github.com/Azure/azure-iot-sdks/releases?WT.mc_id=github-azuredevtips-micrum",target:"_blank",rel:"noopener noreferrer"}},[e._v("Device Explorer"),r("OutboundLink")],1),e._v(" for Windows or you can use the iothub-explorer tool for Mac. Now paste in your IoT Hub Connection string and press "),r("strong",[e._v("Update")]),e._v(". You should see SAS populate.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/iotbutton5.png")}}),e._v(" "),r("p",[e._v("Switch over to the "),r("strong",[e._v("Management")]),e._v(" tab and click "),r("strong",[e._v("Create")]),e._v(" and give it a name and select "),r("strong",[e._v("Auto-Generate Keys")]),e._v(", and then "),r("strong",[e._v("Create")]),e._v(".")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/iotbutton6.png")}}),e._v(" "),r("p",[e._v("The keys are now created, copy them someplace safe.")]),e._v(" "),r("img",{attrs:{src:e.$withBase("/files/iotbutton7.png")}}),e._v(" "),r("p",[e._v("Right click on the newly created device and select "),r("strong",[e._v("Copy connection string for selected device")]),e._v(". Now that you have they keys, we'll need to configure the device tomorrow.")])])},[],!1,null,null,null);t.default=n.exports}}]);