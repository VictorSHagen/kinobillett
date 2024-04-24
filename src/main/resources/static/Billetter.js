$(function (){
        hentAlle();
    });
    function hentAlle(){
        $.get("/hentAlle", function (data){
            formaterData(data);
            console.log(data);
        });
    }
    function formaterData (billetter){
        let ut = "<table class = 'table table-striped'"> + "<tr>" +
            "<th> Film </th> <th> Antall Billetter </th> <th>" +
            "Fornavn</th> <th>Etternavn</th>" +
            "<th>TlfNr</th><th>Epost</th>" +
            "</tr>"
        for(let i in billetter){
            ut += "<tr><td>" + billetter[i].film + "</td><td>" + billetter[i].antall + "</td><td>" + billetter[i].fornavn +
                "</td><td>" + billetter[i].etternavn + "</td><td>" + billetter[i].telefonnr + "</td><td>" +
                billetter[i].epost + "</td>" + "<td>"
        }
        $("#alleBillettene").html(ut)
    }
    function slettBilletter(){
        const Ok = confirm("Vil du slette alle billettene?")
        if (Ok) {
            $.get("/slettAlle", function (){
                hentAlle();
            });
        }
    }