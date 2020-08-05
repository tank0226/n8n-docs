(window.webpackJsonp=window.webpackJsonp||[]).push([[171],{539:function(e,t,a){e.exports=a.p+"assets/img/workflow.e589fa31.png"},781:function(e,t,a){"use strict";a.r(t);var l=a(26),i=Object(l.a)({},(function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[l("h1",{attrs:{id:"trello"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#trello"}},[e._v("#")]),e._v(" Trello")]),e._v(" "),l("p",[l("a",{attrs:{href:"https://trello.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("Trello"),l("OutboundLink")],1),e._v(" is a web-based Kanban-style list-making application which is a subsidiary of Atlassian. Users can create their task boards with different columns and move the tasks between them.")]),e._v(" "),l("div",{staticClass:"custom-block tip"},[l("p",{staticClass:"custom-block-title"},[e._v("🔑 Credentials")]),e._v(" "),l("p",[e._v("You can find authentication information for this node "),l("RouterLink",{attrs:{to:"/nodes/credentials/Trello/"}},[e._v("here")]),e._v(".")],1)]),e._v(" "),l("h2",{attrs:{id:"basic-operations"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#basic-operations"}},[e._v("#")]),e._v(" Basic Operations")]),e._v(" "),l("ul",[l("li",[e._v("Attachment\n"),l("ul",[l("li",[e._v("Create a new attachment for a card")]),e._v(" "),l("li",[e._v("Delete an attachment")]),e._v(" "),l("li",[e._v("Get the data of an attachment")]),e._v(" "),l("li",[e._v("Returns all attachments for the card")])])]),e._v(" "),l("li",[e._v("Board\n"),l("ul",[l("li",[e._v("Create a new board")]),e._v(" "),l("li",[e._v("Delete a board")]),e._v(" "),l("li",[e._v("Get the data of a board")]),e._v(" "),l("li",[e._v("Update a board")])])]),e._v(" "),l("li",[e._v("Card\n"),l("ul",[l("li",[e._v("Create a new card")]),e._v(" "),l("li",[e._v("Delete a card")]),e._v(" "),l("li",[e._v("Get the data of a card")]),e._v(" "),l("li",[e._v("Update a card")])])]),e._v(" "),l("li",[e._v("Checklist\n"),l("ul",[l("li",[e._v("Create a new checklist")]),e._v(" "),l("li",[e._v("Delete a checklist")]),e._v(" "),l("li",[e._v("Delete a checklist item")]),e._v(" "),l("li",[e._v("Get the data of a checklist")]),e._v(" "),l("li",[e._v("Returns all checklists for the card")]),e._v(" "),l("li",[e._v("Get a specific checklist on a card")]),e._v(" "),l("li",[e._v("Get the completed checklist items on a card")]),e._v(" "),l("li",[e._v("Update an item in a checklist on a card")])])]),e._v(" "),l("li",[e._v("Label\n"),l("ul",[l("li",[e._v("Add a label to a card")]),e._v(" "),l("li",[e._v("Create a new label")]),e._v(" "),l("li",[e._v("Delete a label")]),e._v(" "),l("li",[e._v("Get the data of a label")]),e._v(" "),l("li",[e._v("Returns all labels for the board")]),e._v(" "),l("li",[e._v("Remove a label from a card")]),e._v(" "),l("li",[e._v("Update a label")])])]),e._v(" "),l("li",[e._v("List\n"),l("ul",[l("li",[e._v("Archive/Unarchive a list")]),e._v(" "),l("li",[e._v("Create a new list")]),e._v(" "),l("li",[e._v("Get the data of a list")]),e._v(" "),l("li",[e._v("Update a list")])])])]),e._v(" "),l("h2",{attrs:{id:"example-usage"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#example-usage"}},[e._v("#")]),e._v(" Example Usage")]),e._v(" "),l("p",[e._v("This workflow allows you to create a new card in Trello. You can also find the "),l("a",{attrs:{href:"https://n8n.io/workflows/461",target:"_blank",rel:"noopener noreferrer"}},[e._v("workflow"),l("OutboundLink")],1),e._v(" on the website. This example usage workflow would use the following two nodes.")]),e._v(" "),l("ul",[l("li",[l("RouterLink",{attrs:{to:"/nodes/nodes-library/core-nodes/Start/"}},[e._v("Start")])],1),e._v(" "),l("li",[l("a",{attrs:{href:""}},[e._v("Trello")])])]),e._v(" "),l("p",[e._v("The final workflow should look like the following image.")]),e._v(" "),l("p",[l("img",{attrs:{src:a(539),alt:"A workflow with the Trello node"}})]),e._v(" "),l("h3",{attrs:{id:"_1-start-node"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_1-start-node"}},[e._v("#")]),e._v(" 1. Start node")]),e._v(" "),l("p",[e._v("The start node exists by default when you create a new workflow.")]),e._v(" "),l("h3",{attrs:{id:"_2-trello-node"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#_2-trello-node"}},[e._v("#")]),e._v(" 2. Trello node")]),e._v(" "),l("ol",[l("li",[e._v("First of all, you'll have to enter credentials for the Trello node. You can find out how to do that "),l("RouterLink",{attrs:{to:"/nodes/credentials/Trello/"}},[e._v("here")]),e._v(".")],1),e._v(" "),l("li",[e._v("Enter the ID of the list in which you want to create a new card in the "),l("em",[e._v("List ID")]),e._v(" field. You can find instructions on how to obtain the ID of the list in the FAQs below.")]),e._v(" "),l("li",[e._v("Enter the name of the card in the "),l("em",[e._v("Name")]),e._v(" field.")]),e._v(" "),l("li",[e._v("Enter the description of the card in the "),l("em",[e._v("Description")]),e._v(" field.")]),e._v(" "),l("li",[e._v("Click on "),l("em",[e._v("Execute Node")]),e._v(" to run the workflow.")])]),e._v(" "),l("h2",{attrs:{id:"faqs"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#faqs"}},[e._v("#")]),e._v(" FAQs")]),e._v(" "),l("h3",{attrs:{id:"how-do-i-find-the-list-id"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#how-do-i-find-the-list-id"}},[e._v("#")]),e._v(" How do I find the List ID?")]),e._v(" "),l("ol",[l("li",[e._v("Open the Trello board that contains the list.")]),e._v(" "),l("li",[e._v("If the list doesn't have any cards, add a card to the list.")]),e._v(" "),l("li",[e._v("Open the card, add '.json' at the end of the URL, and press enter.")]),e._v(" "),l("li",[e._v("In the JSON file, you will see a field called "),l("code",[e._v("idList")]),e._v(".")]),e._v(" "),l("li",[e._v("Copy "),l("code",[e._v("idList")]),e._v("and paste it in the "),l("em",[e._v("List ID")]),e._v(" field in n8n.")])]),e._v(" "),l("h2",{attrs:{id:"further-reading"}},[l("a",{staticClass:"header-anchor",attrs:{href:"#further-reading"}},[e._v("#")]),e._v(" Further Reading")]),e._v(" "),l("ul",[l("li",[l("a",{attrs:{href:"https://medium.com/n8n-io/automating-conference-organization-processes-with-n8n-ab8f64a7a520",target:"_blank",rel:"noopener noreferrer"}},[e._v("Automating Conference Organization Processes with n8n"),l("OutboundLink")],1)])])])}),[],!1,null,null,null);t.default=i.exports}}]);