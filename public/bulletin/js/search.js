
$('input[name="search"]').on('input',function(e){
    $('#links').empty();
    var i = 0;
    var result = 0;
    var searchinput = document.querySelectorAll('[name="search"]')[0].value;
    if (searchinput.length > 0) {
        while (i < Object.keys(datas).length) {
            var searchcontent = datas[i].content.toLowerCase()
            if (searchcontent.search(searchinput.toLowerCase()) >= 0) {
                var div = document.createElement("div");
                var div2 = document.createElement("div");
                var li = document.createElement("li");
                var p = document.createElement("p");
                var p2 = document.createElement("p");
                var icon = document.createElement("i");
                icon.setAttribute("class", "mdi-editor-attach-file tooltipped");
                icon.setAttribute("data-position", "left");
                icon.setAttribute("data-delay", "50");
                icon.setAttribute("data-tooltip", "Attachment available");
                li.setAttribute("id", i);
                var title = document.createTextNode(datas[i].title.toUpperCase() + " - " + datas[i].posted_date);


                var contents = document.createTextNode(datas[i].content);
                div2.appendChild(p);
                var s = datas[i].images;
                s = s.replace("bulletinfile", "https://online.mmu.edu.my/bulletinfile");
                p.innerHTML = s;
                if (datas[i].attachment !== "") {
                    var s2 = "Attachment: <br>" + datas[i].attachment + "<br>";
                    p2.innerHTML = s2;
                    div2.appendChild(p2);
                    div.appendChild(icon);
                }


                div.appendChild(title);
                p.appendChild(contents);

                div.setAttribute("class", "collapsible-header");
                div.setAttribute("id", datas[i].posted_ID);
                div2.setAttribute("class", "collapsible-body");
                document.getElementById("links").appendChild(li);
                document.getElementById(i).appendChild(div);
                document.getElementById(i).appendChild(div2);
                p = document.getElementById(i).children[1].children[0]
                p.innerHTML = p.innerHTML.replace(/\n\n/g, "<br>")
                    /**console.log("done")**/
                result++;
                i++;
            } else {
                i++;
            }
        }
    } else {
        parsejson2();
    }
        if (result == 0 && searchinput.length > 0){
            $('#links').empty();
            console.log("empt")
            var div = document.createElement("div");
            var li = document.createElement("li");

            li.setAttribute("id", i);
            var title = document.createTextNode("Not Found");

            div.appendChild(title);

            div.setAttribute("class", "collapsible-header");
            document.getElementById("links").appendChild(li);
            document.getElementById(i).appendChild(div);  
        }    
    $('.collapsible').collapsible({
    accordion: false // A setting that changes the collapsible behavior to expandable instead of the default accordion style
    });
});



        function parsejson2() {
            var i = 0
            while (i < Object.keys(datas).length) {
                var div = document.createElement("div");
                var div2 = document.createElement("div");
                var li = document.createElement("li");
                var p = document.createElement("p");
                var p2 = document.createElement("p");
                var icon = document.createElement("i");
                icon.setAttribute("class", "mdi-editor-attach-file tooltipped");
                icon.setAttribute("data-position", "left");
                icon.setAttribute("data-delay", "50");
                icon.setAttribute("data-tooltip", "Attachment available");
                li.setAttribute("id", i);
                var title = document.createTextNode(datas[i].title.toUpperCase() + " - " + datas[i].posted_date);


                var contents = document.createTextNode(datas[i].content);
                div2.appendChild(p);
                var s = datas[i].images;
                s = s.replace("bulletinfile", "https://online.mmu.edu.my/bulletinfile");
                p.innerHTML = s;
                if (datas[i].attachment !== "") {
                    var s2 = "Attachment: <br>" + datas[i].attachment + "<br>";
                    p2.innerHTML = s2;
                    div2.appendChild(p2);
                    div.appendChild(icon);
                }


                div.appendChild(title);
                p.appendChild(contents);

                div.setAttribute("class", "collapsible-header");
                div.setAttribute("id", datas[i].posted_ID);
                div2.setAttribute("class", "collapsible-body");
                document.getElementById("links").appendChild(li);
                document.getElementById(i).appendChild(div);
                document.getElementById(i).appendChild(div2);
                p = document.getElementById(i).children[1].children[0]
                p.innerHTML = p.innerHTML.replace(/\n\n/g, "<br>")
                    /**console.log("done")**/
                i++;
            }
        }