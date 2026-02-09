
let closeBtn = document.getElementById("closebtn");
if (!!closeBtn) {
    closeBtn.addEventListener('click', (event) => {
        let thanksMsg = document.getElementById("thanksmsg");
        if (!!thanksMsg) {
            thanksMsg.classList.add("d-none");
        }

        let subscribeNewsletter = document.getElementById("subscribe_newsletter");
        if (!!subscribeNewsletter) {
            subscribeNewsletter.classList.remove("d-none");
        }

        let closeClass = document.querySelectorAll(".input-error");
        if (!!closeClass) {
            closeClass.forEach(element => {
                element.style.display = "none";
            })
        }

    })
}

let firstNameInputGlob = document.querySelector("#firstname");
let errFirstNameGlob = document.querySelector("#error_firstname");
if (!!firstNameInputGlob && !!errFirstNameGlob) {
    firstNameInputGlob.addEventListener('blur', (event) => {
        if (event.target.value.trim() == "") {
            errFirstNameGlob.style.display = "block";
            errFirstNameGlob.innerHTML = "Enter first name";
        } else if (validateSpecialCharater(event.target.value.trim())) {
            errFirstNameGlob.style.display = "block";
            errFirstNameGlob.innerHTML = "Special characters are not accepted";
        } else {
            errFirstNameGlob.style.display = "none";
            errFirstNameGlob.innerHTML = "Required";
        }
    })
}

let lastNameInputGlob = document.querySelector("#lastname");
let errLastNameGlob = document.querySelector("#error_lastname");
if (!!lastNameInputGlob && !!errLastNameGlob) {
    lastNameInputGlob.addEventListener('blur', (event) => {
        try {
            if (event.target.value.trim() == "") {
                errLastNameGlob.style.display = "block";
                errLastNameGlob.innerHTML = "Enter last name";
            } else if (validateSpecialCharater(event.target.value.trim())) {
                errLastNameGlob.style.display = "block";
                errLastNameGlob.innerHTML = "Special characters are not accepted";
            } else {
                errLastNameGlob.style.display = "none";
                errLastNameGlob.innerHTML = "Required";
            }
        } catch (error) { }
    })
}

let emailInputGlob = document.querySelector("#emailid");
let errEmailGlob = document.querySelector("#error_emailid");
if (!!emailInputGlob && !!errEmailGlob) {
    emailInputGlob.addEventListener('blur', (event) => {
        try {
            if (event.target.value.trim() == "") {
                errEmailGlob.style.display = "block";
                errEmailGlob.innerHTML = "Enter mail ID";
            } else {
                if (validateEmail(event.target.value.trim())) {
                    errEmailGlob.style.display = "none";
                } else {
                    errEmailGlob.style.display = "block";
                    errEmailGlob.innerHTML = "Enter valid email ID";
                }
            }
        } catch (error) { }
    })
}

let subIndustryGlob = document.querySelector("#industry");
let errIndustryGlob = document.querySelector("#error_industry");
if (!!subIndustryGlob && !!errIndustryGlob) {
    subIndustryGlob.addEventListener('change', (event) => {
        try {
            if (event.target.value.trim() == "") {
                errIndustryGlob.style.display = "block";
                errIndustryGlob.innerHTML = "Select industry";
            } else if (event.target.value.trim() == "select") {
                errIndustryGlob.style.display = "block";
                errIndustryGlob.innerHTML = "Select industry";
            } else {
                errIndustryGlob.style.display = "none";
                errIndustryGlob.innerHTML = "Required";
            }
        } catch (error) { }
    })
}

let fillControlInputGlob = document.querySelector(".agree-checkbox");
let errCheckboxGlob = document.querySelector("#error_checkbox");
if (!!fillControlInputGlob) {
    fillControlInputGlob.addEventListener('click', () => {
        try {
            if (event.target.checked) {
                errCheckboxGlob.style.display = "none";
                errCheckboxGlob.innerHTML = "Required";
            } else {
                errCheckboxGlob.style.display = "block";
                errCheckboxGlob.innerHTML = "Required";
            }
        } catch (error) { }
    })
}

let subJobGlob = document.querySelector('#jobtitle');
let errJobTitleGlob = document.querySelector("#error_jobtitle");
if (!!subJobGlob && !!errJobTitleGlob) {
    subJobGlob.addEventListener('change', (event) => {
        try {
            if (event.target.value.trim() == "") {
                errJobTitleGlob.style.display = "block";
                errJobTitleGlob.innerHTML = "Select job title";
            } else if (event.target.value.trim() == "select") {
                errJobTitleGlob.style.display = "block";
                errJobTitleGlob.innerHTML = "Select job title";
            } else {
                errJobTitleGlob.style.display = "none";
                errJobTitleGlob.innerHTML = "Select job title";
            }
        } catch (error) { }
    })
}

let subCountryGlob = document.querySelector('#country');
let errSubCountryGlob = document.querySelector('#error_country');
if (!!subCountryGlob && !!errSubCountryGlob) {
    subCountryGlob.addEventListener('change', (event) => {
        try {
            if (event.target.value.trim() == "") {
                errSubCountryGlob.style.display = "block";
                errSubCountryGlob.innerHTML = "Select country";
            } else if (event.target.value.trim() == "select") {
                errSubCountryGlob.style.display = "block";
                errSubCountryGlob.innerHTML = "Select country";
            } else {
                errSubCountryGlob.style.display = "none";
                errSubCountryGlob.innerHTML = "Select country";
            }
        } catch (error) { }
    })
}

function subscribeNewsletterForm() {
    try {
        let returnType = true;
        let firstNameInput = document.querySelector("#firstname");
        let errFirstName = document.querySelector("#error_firstname");
        let lastNameInput = document.querySelector("#lastname");
        let errLastName = document.querySelector("#error_lastname");
        let emailInput = document.querySelector("#emailid");
        let errEmail = document.querySelector("#error_emailid");

        if (!!firstNameInput && firstNameInput.value == "" && !!errFirstName) {
            errFirstName.style.display = "block";
            errFirstName.innerHTML = "Enter valid first name";
            returnType = false;
        }

        if (!!lastNameInput && lastNameInput.value == "" && !!errLastName) {
            errLastName.style.display = "block";
            errLastName.innerHTML = "Enter valid last name";
            returnType = false;
        }

        if (!!emailInput && emailInput.value == "" && !!errEmail) {
            errEmail.style.display = "block";
            errEmail.innerHTML = "Enter email ID";
            returnType = false;
        } else if (!!emailInput.value && validateEmail(emailInput.value) == true) {
            errEmail.style.display = "none";
            returnType = true;
        } else if (!!errEmail) {
            errEmail.style.display = "block";
            errEmail.innerHTML = "Enter valid email ID";
            returnType = false;
        }

        let selectIndustryInput = document.querySelector("#industry");
        let errIndustry = document.querySelector("#error_industry");
        if (!!selectIndustryInput && !!errIndustry && (selectIndustryInput.value == "" || selectIndustryInput.value == "select")) {
            errIndustry.style.display = "block";
            errIndustry.innerHTML = "Select industry";
            returnType = false;
        }

        let selectJobTitle = document.querySelector('#jobtitle');
        let errJobTitle = document.querySelector("#error_jobtitle");
        if (!!selectJobTitle && !!errJobTitle && (selectJobTitle.value == "" || selectJobTitle.value == "select")) {
            errJobTitle.style.display = "block";
            errJobTitle.innerHTML = "Select job title";
            returnType = false;
        }

        let selectSubCountry = document.querySelector('#country');
        let errSubCountry = document.querySelector('#error_country');
        if (!!selectSubCountry && !!errSubCountry && (selectSubCountry.value == "" || selectSubCountry.value == "select")) {
            errSubCountry.style.display = "block";
            errSubCountry.innerHTML = "Select country";
            returnType = false;
        }

        // Not found in the popup
        let fillControlInput = document.querySelector(".agree-checkbox");
        let errCheckbox = document.querySelector("#error_checkbox");
        if (!!fillControlInput && !fillControlInput.checked && errCheckbox) {
            errCheckbox.style.display = "block";
            errCheckbox.innerHTML = "Required";
            returnType = false;
        }

        if (returnType) {
            let errFields = document.querySelector(".input-error");
            if (!!errFields) {
                errFields.style.display = "none";
            }

            let pagetitle = document.title;
            let pageReferalurl = document.referrer;
            let srcUrl = window.location.href;
            // let company = !!document.querySelector("#companyname1") && document.querySelector("#companyname1").value;

            let reqPayload = {
                Offercode: 1,
                rid: 0,
                ridprogress: 0,
                groupiconcount: 0,
                pagetitle: pagetitle,
                pagereferrerurl: pageReferalurl,
                cid: 0,
                iskyc: 0,
                SourceURL: srcUrl,
                kycredirecturl: 0,
                hdnMscrm: 0,
                hdnResUrl: "https://run.resulticks.com/",
                hdnbookingdate: 0,
                hdnbookingtime: 0,
                "Firstname": firstNameInput.value,
                "Lastname": lastNameInput.value,
                EmailID: emailInput.value,
                Country: selectSubCountry.value,
                Industry: selectIndustryInput.value,
                "Jobtitle": selectJobTitle.value,
                checkbox: "on",
            }

            let url = "https://resu.io/Subscription/IndexInsert/cust_cc33cd4b_2fea_4b94_9123_bb7d48ff673e/186";
            let options = {
                method: "POST",
                body: JSON.stringify(reqPayload)
            }
            fetch(url, options).then((res) => {
                if (res.ok) {
                    let thanksMsg = document.getElementById("thanksmsg");
                    if (!!thanksMsg) {
                        thanksMsg.classList.remove("d-none");
                    }

                    let subscribeNewsletter = document.getElementById("subscribe_newsletter");
                    if (!!subscribeNewsletter) {
                        subscribeNewsletter.classList.add("d-none");
                    }

                    let closeClass = document.querySelectorAll(".input-error");
                    if (!!closeClass) {
                        closeClass.forEach(element => {
                            element.style.display = "none";
                        })
                    }

                    !!document.getElementById("subscribe_newsletter") && document.getElementById("subscribe_newsletter").reset();
                }
            }).catch(err => { });
        } else {
            return false;
        }
    } catch (error) { }
}

function validateSpecialCharater(sVal) {
    let filter = /^[a-zA-Z0-9 ]+jQuery/;
    if (filter.test(sVal)) {
        return true;
    } else {
        return false;
    }
}

function validateEmail(emailField) {
    let reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;
    return reg.test(emailField);
}

function init() {
    try {
        let firstName = document.querySelector("#firstname");
        if (!!firstName) {
            firstName.addEventListener('keypress', (event) => {
                let inputValue = event.charCode;
                if (!(inputValue >= 65 && inputValue <= 122) && inputValue != 32 && inputValue != 0) {
                    event.preventDefault();
                }
            })
        }
        let lastName = document.querySelector("#lastname");
        if (!!lastName) {
            lastName.addEventListener('keypress', (event) => {
                let inputValue = event.charCode;
                if (!(inputValue >= 65 && inputValue <= 122) && inputValue != 32 && inputValue != 0) {
                    event.preventDefault();
                }
            })
        }
    } catch (error) { }
}

function partnerProgramForm() {
    
}

document.addEventListener('DOMContentLoaded', init);

