function start(){var data_file = "FriendsAndFamily.json";
var http_request = new XMLHttpRequest();

try {
    // Opera 8.0+, Firefox, Chrome, Safari
    http_request = new XMLHttpRequest();

} catch (e) {
    // Internet Explorer Browsers
    try {
        http_request = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
        try {
            http_request = new ActiveXObject("Microsoft.XMLHTTP");
        } catch (e) {
            // Something went wrong
            alert("Your browser broke!");
        }
    }
}
http_request.onreadystatechange = function () {
    if (http_request.readyState == 4) {
        // Javascript function JSON.parse to parse JSON data
        var jsonObj = JSON.parse(http_request.responseText);
        var text = "<option value='0'>--</option>";
        var pets = jsonObj.pets;
        for (var i = 0; i < pets.length ; i++) {
          //off by 1
            var valueIndex = i + 1
           text = text + "<option value = '" + valueIndex + "'>" + pets[i].name + " " + pets[i].lname + "</option>";
        }
        document.getElementById("PetSel").innerHTML = text;
    }
}
http_request.open("GET", data_file, true);
http_request.send();
}


///_________---------------------------------------------------------------------





function wrtJSON() {

    var data_file = "FriendsAndFamily.json";
    var http_request = new XMLHttpRequest();

    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();

    } catch (e) {
        // Internet Explorer Browsers
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }
    ///TODO
    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {



            var jsonObj = JSON.parse(http_request.responseText);

            var relationInputText = document.getElementById("RelationInput").value
            var nameInputText = document.getElementById("NameInput").value

            if(relationInputText.value == "" && nameInputText.value == ""){
              document.getElementById("Searchable").innerHTML = "";
              return
            }

            var pets = jsonObj.pets

            var itemsInList = "<tr><th>First Name</th><th>Last Name</th><th>Relation</th></tr>";

            for(var i = 0; i< pets.length; i++){
              var pet = pets[i];
              if(pet.name.indexOf(relationInputText) && nameInputText != ""){//has name add
                  itemsInList += contentForEntry(pet);
              }else if (pet.lname.indexOf(relationInputText) && nameInputText != "") {//has last name add
                  itemsInList += contentForEntry(pet);
              }else if(pet.relation.indexOf(relationInputText) && relationInputText != ""){//has relationship add
                  itemsInList += contentForEntry(pet);
              }


            }
            document.getElementById("Searchable").innerHTML = itemsInList;
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}

function contentForEntry(pet){
    return "<tr><td>"+ pet.name+ "</td><td>"+pet.lname+"</td><td>"+pet.relation+"</td></tr>";
}

///_________---------------------------------------------------------------------





function drpJSON() {
//i hope it's ok that i copy pasted this.
//this is needed to access other files?
    var data_file = "FriendsAndFamily.json";
    var http_request = new XMLHttpRequest();
    try {
        // Opera 8.0+, Firefox, Chrome, Safari
        http_request = new XMLHttpRequest();

    } catch (e) {
        // Internet Explorer Browsers
        try {
            http_request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (e) {
            try {
                http_request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e) {
                // Something went wrong
                alert("Your browser broke!");
                return false;
            }
        }
    }
    //TODO
    http_request.onreadystatechange = function () {
        if (http_request.readyState == 4) {
            // Javascript function JSON.parse to parse JSON data
            var jsonObj = JSON.parse(http_request.responseText);

            // jsonObj variable now contains the data structure and can
            // be accessed as jsonObj.name and jsonObj.country.
            var First = "";
            var Last = "";
            var Relation = "";
            //off by 1
            var selectedIndex = document.getElementById("PetSel").value - 1;
            if(selectedIndex > 0 && selectedIndex < jsonObj.pets.length){
                var pet = jsonObj.pets[selectedIndex];
                First = pet.name;
                Last = pet.lname;
                Relation = Relation + pet.relation;
            }

            document.getElementById("First Name").innerHTML = First;
            document.getElementById("Last Name").innerHTML = Last;
            document.getElementById("Relation").innerHTML = Relation;
        }
    }
    http_request.open("GET", data_file, true);
    http_request.send();
}
