document.addEventListener("DOMContentLoaded", function () {

    const loginForm =
        document.getElementById("loginForm");


    loginForm.addEventListener("submit", function (event) {

        event.preventDefault();


        // ==============================
        // GET FORM DATA
        // ==============================

        const name =
            document.getElementById("studentName")
                .value
                .trim();


        const studentType =
            document.querySelector(
                'input[name="studentType"]:checked'
            );


        const mobile =
            document.getElementById("mobileNumber")
                .value
                .trim();


        // ==============================
        // VALIDATION
        // ==============================

        if (
            name === "" ||
            !studentType ||
            mobile === ""
        ) {

            alert("Please fill all details.");

            return;
        }


        if (!/^[0-9]{10}$/.test(mobile)) {

            alert(
                "Please enter a valid 10-digit mobile number."
            );

            return;
        }


        // ==============================
        // SAVE STUDENT DATA
        // ==============================

        const studentData = {

            name: name,

            studentType: studentType.value,

            mobile: mobile

        };


        localStorage.setItem(
            "studentData",
            JSON.stringify(studentData)
        );


        localStorage.setItem(
            "isLoggedIn",
            "true"
        );


        // ==============================
        // START QUIZ
        // ==============================

        window.location.href =
            "quiz.html";

    });

});