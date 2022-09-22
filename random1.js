
const express = require("express");
const server = express();
const url = require("url");


server.get("", function(req, res){

    res.writeHead(200, {"Content-Type": "text/html"});
    let text = "<html><body><table border='1px'>"
    for(let i = 0; i <= 15; i++){
        text += "<tr  height = '20px' width = '20px'>";
        for(let j = 0; j <= 15; j++){
            var d = Math.floor(Math.random() * 3) + 1;
            if(d==1){
                text += "<td bgcolor ='brown' height = '20px' width = '20px'>"
            } else if (d==2){
                text += "<td bgcolor = 'black' height = '20px' width = '20px'>"
            } else {
                text += "<td bgcolor = 'blue'  height = '20px' width = '20px'>"
            } 
            text += "</td>";
        }
        text += "</tr>"
    }

    text+= "</table></body></html>"

    res.write(text);
    res.end();
})

server.listen(2222);
