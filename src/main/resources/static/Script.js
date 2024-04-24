    function regBillett(){
        const billett = {
            film : $("#film").val().trim(),
            antall : $("#antall").val().trim(),
            fornavn : $("#fornavn").val().trim(),
            etternavn : $("#etternavn").val().trim(),
            telefonnr : $("#telefonnr").val().trim(),
            epost : $("#epost").val().trim()
        };

        const regexValidering = {
            antall: /^[0-9]+$/,
            fornavn: /^[a-zA-Z\s]+$/,
            etternavn: /^[a-zA-Z\s]+$/,
            telefonnr: /^[0-9]{8}$/,
            epost: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
        };
        function validerBillett(billett) {
            return Object.keys(regexValidering).every((key) => {
                const value = billett[key];
                const regex = regexValidering[key];
                const result = regex.test(value);
                console.log(key, value, result);
                return result;
            });
        }

        if (!validerBillett(billett)) {
            alert("Some fields are invalid. Please check your input and try again.");
            return;
        }

        $.post("/lagre", billett, function (){
        hentAlle();

    })
        $(':input').val("")
        console.log(billett)
        window.location.href = "Billetter.html";
    }
