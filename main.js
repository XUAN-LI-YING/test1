/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("let url = \"ws://120.108.204.10:3000\"\r\n// let url = \"ws://localhost:3000\"\r\n\r\nlet socket= new WebSocket(url);\r\nlet intervalID \r\nsocket.addEventListener('error',(e)=>{\r\n    View.showError('伺服器掛掉 或 沒有網路')\r\n    intervalID = setInterval(()=>{\r\n        socket = new WebSocket(url);\r\n        Model.init()\r\n    },60*1000)\r\n})\r\n\r\nlet Model = {\r\n    userID: 3,\r\n    init(){\r\n        \r\n        View.init()\r\n        socket.addEventListener(\"open\", () => {\r\n            clearInterval(intervalID)\r\n            View.offError()\r\n            let connect_msg={\r\n                type: 'app_connect',\r\n                content: {\r\n                    id: this.userID,\r\n                    time: Controll.getTime()\r\n                }\r\n            }\r\n            this.send(connect_msg)\r\n        });\r\n        \r\n\r\n            // receive a message from the server\r\n        socket.addEventListener(\"message\", ({ data }) => {\r\n            const packet = JSON.parse(data);\r\n            \r\n            switch (packet.type) {\r\n                case \"app_msg\":\r\n                    View.showMsg(packet.content)\r\n                break;\r\n                case \"record\":\r\n                    View.showRecord(packet.content.record)\r\n                break;\r\n            }\r\n        });\r\n    },\r\n    send(obj){\r\n        try{\r\n            socket.send(JSON.stringify(obj))\r\n        }catch(e){\r\n            View.showError('伺服器掛掉 或 沒有網路')\r\n        }\r\n        \r\n    }\r\n}\r\nlet Controll ={ \r\n\r\n    submit(value){\r\n        let encode = btoa(encodeURI(value))\r\n        \r\n        let text={\r\n            type: 'app_msg',\r\n            content:{\r\n                id: Model.userID,\r\n                text: `${encode}`,\r\n                img: '',\r\n                time: Controll.getTime()\r\n            }  \r\n        }\r\n        Model.send(text)\r\n    },\r\n    getTime(){\r\n        let date = new Date()\r\n        let hour = date.getHours()/10 < 1 ? `0${date.getHours()}`:date.getHours()  \r\n        let min = date.getMinutes()/10 < 1 ? `0${date.getMinutes()}`:date.getMinutes() \r\n        \r\n        return `${date.getMonth()+1}/${date.getDate()} ${hour}:${min}`\r\n    }\r\n}\r\nlet View ={\r\n    body : document.getElementsByClassName('body')[0],\r\n    textArea : document.getElementsByTagName('textarea')[0],\r\n    submit: document.getElementsByClassName('submit')[0],\r\n    errorMsg: document.getElementsByClassName('error')[0],\r\n    characters: document.getElementsByClassName('character'),\r\n    init(){\r\n        this.characters[0].addEventListener('click',(e)=>{\r\n            e.target.style.display = 'none'\r\n            this.characters[1].style.display = 'block'\r\n            Model.userID = 0\r\n        })\r\n        this.characters[1].addEventListener('click',(e)=>{\r\n            e.target.style.display = 'none'\r\n            this.characters[0].style.display = 'block'\r\n            Model.userID = 2\r\n        })\r\n        this.submit.addEventListener('click',()=>{\r\n            if(this.textArea.value!=\"\"){\r\n                Controll.submit.call(null,this.textArea.value)\r\n                this.textArea.value=''\r\n            }else\r\n                alert('輸入後按發送')\r\n        })\r\n    },\r\n    showMsg(content){\r\n        // console.log(content)\r\n        \r\n\r\n        let msg = document.createElement('div')\r\n        switch(content.auth){\r\n            case 'wu_app':\r\n            case 'wu':\r\n                msg.className ='client'\r\n                break\r\n            case 'li_app':\r\n            case 'li':\r\n                msg.className ='server'\r\n                break;\r\n        }\r\n        let text = decodeURI(atob(content.text))\r\n        text = View.addBrTag(text)\r\n        msg.innerHTML = `<h5>${content.auth}</h5> ${text} <br> <span>${content.time}</span>`\r\n        this.body.appendChild(msg)\r\n        this.body.scrollTop = this.body.scrollHeight\r\n\r\n        \r\n    },\r\n    showError(msg){\r\n        this.errorMsg.textContent = msg\r\n        this.errorMsg.style.display = 'block' \r\n    },\r\n    offError(){\r\n        this.errorMsg.style.display = 'none' \r\n    },\r\n    showRecord(record){\r\n        record.forEach(el => {\r\n            this.showMsg(el)\r\n        });\r\n        \r\n    },\r\n    addBrTag(text){\r\n        return text.split('`').join('<br>')\r\n    }\r\n    \r\n}\r\nModel.init()\n\n//# sourceURL=webpack://app/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;