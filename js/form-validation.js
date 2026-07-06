function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
      var c = ca[i];
      while (c.charAt(0) == ' ') c = c.substring(1, c.length);
      if (c.indexOf(nameEQ) == 0)
          return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function GetParameterValues(param) {
  var url = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
  for (var i = 0; i < url.length; i++) {
      var urlparam = url[i].split('=');
      if (urlparam[0] == param) {
          return urlparam[1];
      }
  }
}

function JsonSort(jsonDataValues) {
  return jsonDataValues.sort(function (a, b) {
      var c = new Date(a.Dtx);
      var d = new Date(b.Dtx);
      if (c > d) return -1;
      if (c < d) return 1;
      return 0;
  });
}

function GetValues(param) {

  var Val_ = null;
  Val_ = GetParameterValues(param);
  if (Val_ == undefined) {
      var cookievalue = readCookie("ResData");
      if (cookievalue != null) {

          var jsonDataValues = JSON.parse(cookievalue);

          if (jsonDataValues != null) {

              console.log(jsonDataValues);
              var jsonDataValue = JsonSort(jsonDataValues)[0];
              if (param == 'cid') {
                  return jsonDataValue.Cid;
              }
              if (param == 'rid') {
                  return jsonDataValue.Rid;;
              }




          }

      }
  }
  else {
      return Val_;
  }


}

function getsourceurl() {
  return window.location.href;
}

function getpagetitle() {
  var pageTitle = document.title;
  // var pageTitle = $(document).find("title").text();
  if (pageTitle == "" || pageTitle == undefined) {
      pageTitle = "";
  }
  return pageTitle;
}

function getProfileId() {
  

//   var profileId = ReWebSDK.userRegister_payloadDefault.profileID;

var profileId="";

  if (profileId == "" || profileId == undefined) {
      profileId = "";
  }
  return profileId;

}


var RID_ = null;
var CID_ = null;
RID_ = GetValues('rid');
CID_ = GetValues('cid');

if (RID_ == undefined) {
    RID_ = "";
}
if (CID_ == undefined) {
    CID_ = "";
}

function subscribeNewsletterFormDefaults() {
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
}

subscribeNewsletterFormDefaults();

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
            // returnType = true;
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

            // let pagetitle = document.title;
            // let pageReferalurl = document.referrer;
            // let srcUrl = window.location.href;
            // let company = !!document.querySelector("#companyname1") && document.querySelector("#companyname1").value;

            let reqPayload = {
                "First_name": firstNameInput.value,
				"Last_name": lastNameInput.value,
				"EmailID": emailInput.value,
				"MobileNo": "",
				"Country": selectSubCountry.value,
				"Industry": selectIndustryInput.value,
				"Job_Title": selectJobTitle.value,
				"Company": "",
				"Receive_Udpates": "",
				"Purpose": "",
				"Purpose": "",
				"SyncSDKID": "",
				"formid": "186",
				"apikey": "cc33cd4b_2fea_4b94_9123_bb7d48ff673e",
				"SourceURL": getsourceurl(),
				"pagereferrerurl": "",
				"rid": RID_,
				"cid": CID_,
				"pagetitle": getpagetitle(),
				"ProfileID": getProfileId()
            } 

            let url = "https://formapiv5.resul.io/Subscription/IndexInsertAPI";
            let options = {
                method: "POST",
				 headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(reqPayload).toString()
            }
            fetch(url, options).then((res) => {
                if (res.ok) {
                    window.location.href = location.origin + "/thank-you-newsletter.html";
                    // let thanksMsg = document.getElementById("thanksmsg");
                    // if (!!thanksMsg) {
                    //     thanksMsg.classList.remove("d-none");
                    // }

                    // let subscribeNewsletter = document.getElementById("subscribe_newsletter");
                    // if (!!subscribeNewsletter) {
                    //     subscribeNewsletter.classList.add("d-none");
                    // }

                    // let closeClass = document.querySelectorAll(".input-error");
                    // if (!!closeClass) {
                    //     closeClass.forEach(element => {
                    //         element.style.display = "none";
                    //     })
                    // }

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

function validateMobileNumber(inputText) {
    var regex = /^(\+\d{1,3}[- ]?)?\d{10}$/;
    let value = regex.test(inputText);
    if (value == true) {
        return false;
    } else {
        return true;
    }
}

function initDefaultValidation() {
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

initDefaultValidation();

function partnerProgramFormDefaults() {
    let closeBtn = document.getElementById("pclosebtn");
    if (!!closeBtn) {
        closeBtn.addEventListener('click', (event) => {
            let thanksMsg = document.getElementById("pthanksmsg");
            if (!!thanksMsg) {
                thanksMsg.classList.add("d-none");
            }

            let subscribeNewsletter = document.getElementById("psubscribe_newsletter");
            if (!!subscribeNewsletter) {
                subscribeNewsletter.classList.remove("d-none");
            }

            let closeClass = document.querySelectorAll(".pinput-error");
            if (!!closeClass) {
                closeClass.forEach(element => {
                    element.style.display = "none";
                })
            }

        })
    }

    let firstNameInputGlob = document.querySelector("#pfirstname");
    let errFirstNameGlob = document.querySelector("#error_pfirstname");
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

    let lastNameInputGlob = document.querySelector("#plastname");
    let errLastNameGlob = document.querySelector("#error_plastname");
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

    let emailInputGlob = document.querySelector("#pemailid");
    let errEmailGlob = document.querySelector("#error_pemailid");
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

    let subIndustryGlob = document.querySelector("#pindustry");
    let errIndustryGlob = document.querySelector("#error_pindustry");
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

    let fillControlInputGlob = document.querySelector("#pcheckbox");
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

    let subJobGlob = document.querySelector('#pjobtitle');
    let errJobTitleGlob = document.querySelector("#error_pjobtitle");
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

    let subCountryGlob = document.querySelector('#pcountry');
    let errSubCountryGlob = document.querySelector('#error_pcountry');
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

    let mobileNoGlob = document.querySelector("#pmobileno");
    let errMobileNoGlob = document.querySelector("#error_pmobileno");
    if (!!mobileNoGlob && !!errMobileNoGlob) {
        mobileNoGlob.addEventListener('blur', (event) => {
            try {
                if (event.target.value.trim() == "") {
                    errMobileNoGlob.style.display = "block";
                    errMobileNoGlob.innerHTML = "Enter mobile number";
                } else if (validateMobileNumber(event.target.value)) {
                    errMobileNoGlob.style.display = "block";
                    event.target.value = "";
                    errMobileNoGlob.innerHTML = "Enter valid mobile number";
                } else {
                    errMobileNoGlob.style.display = "none";
                    errMobileNoGlob.innerHTML = "Required";
                }
            } catch (error) { }
        })
    }

    let partnerTypeGlob = document.querySelector("#ppartnertype");
    let errpartnerTypeGlob = document.querySelector("#error_ppartnertype");
    if (!!partnerTypeGlob && !!errpartnerTypeGlob) {
        partnerTypeGlob.addEventListener('change', (event) => {
            try {
                if (event.target.value.trim() == "") {
                    errpartnerTypeGlob.style.display = "block";
                    errpartnerTypeGlob.innerHTML = "Select partner type";
                } else if (event.target.value.trim() == "select") {
                    errpartnerTypeGlob.style.display = "block";
                    errpartnerTypeGlob.innerHTML = "Select partner type";
                } else {
                    errpartnerTypeGlob.style.display = "none";
                    errpartnerTypeGlob.innerHTML = "Required";
                }
            } catch (error) { }
        })
    }
}

partnerProgramFormDefaults();


// function partnerProgramForm() {
//   try {
//       let returnType = true;
//       let firstNameInput = document.querySelector("#pfirstname");
//       let errFirstName = document.querySelector("#error_pfirstname");
//       let lastNameInput = document.querySelector("#plastname");
//       let errLastName = document.querySelector("#error_plastname");
//       let emailInput = document.querySelector("#pemailid");
//       let errEmail = document.querySelector("#error_pemailid");
//       let mobileNoGlob = document.querySelector("#pmobileno");
//       let errMobileNoGlob = document.querySelector("#error_pmobileno");
//       if (!!emailInput && emailInput.value == "" && !!errEmail) {
//           errEmail.style.display = "block";
//           errEmail.innerHTML = "Enter email ID";
//           returnType = false;
//       } else if (!!emailInput.value && validateEmail(emailInput.value) == true) {
//           errEmail.style.display = "none";
//           returnType = true;
//       } else if (!!errEmail) {
//           errEmail.style.display = "block";
//           errEmail.innerHTML = "Enter valid email ID";
//           returnType = false;
//       }
//       if (!!mobileNoGlob && mobileNoGlob.value == "" && !!errMobileNoGlob) {
//           errMobileNoGlob.style.display = "block";
//           errMobileNoGlob.innerHTML = "Enter mobile number";
//           returnType = false;
//       }
//       if (!!firstNameInput && firstNameInput.value == "" && !!errFirstName) {
//           errFirstName.style.display = "block";
//           errFirstName.innerHTML = "Enter valid first name";
//           returnType = false;
//       }
//       if (!!lastNameInput && lastNameInput.value == "" && !!errLastName) {
//           errLastName.style.display = "block";
//           errLastName.innerHTML = "Enter valid last name";
//           returnType = false;
//       }
//       let partnerTypeGlob = document.querySelector("#ppartnertype");
//       let errpartnerTypeGlob = document.querySelector("#error_ppartnertype");
//       if (!!partnerTypeGlob && !!errpartnerTypeGlob && (partnerTypeGlob.value == "" || partnerTypeGlob.value == "select")) {
//           errpartnerTypeGlob.style.display = "block";
//           errpartnerTypeGlob.innerHTML = "Select partner type";
//           returnType = false;
//       }
//       let selectIndustryInput = document.querySelector("#pindustry");
//       let errIndustry = document.querySelector("#error_pindustry");
//       if (!!selectIndustryInput && !!errIndustry && (selectIndustryInput.value == "" || selectIndustryInput.value == "select")) {
//           errIndustry.style.display = "block";
//           errIndustry.innerHTML = "Select industry";
//           returnType = false;
//       }
//       let selectJobTitle = document.querySelector('#pjobtitle');
//       let errJobTitle = document.querySelector("#error_pjobtitle");
//       if (!!selectJobTitle && !!errJobTitle && (selectJobTitle.value == "" || selectJobTitle.value == "select")) {
//           errJobTitle.style.display = "block";
//           errJobTitle.innerHTML = "Select job title";
//           returnType = false;
//       }
//       let selectSubCountry = document.querySelector('#pcountry');
//       let errSubCountry = document.querySelector('#error_pcountry');
//       if (!!selectSubCountry && !!errSubCountry && (selectSubCountry.value == "" || selectSubCountry.value == "select")) {
//           errSubCountry.style.display = "block";
//           errSubCountry.innerHTML = "Select country";
//           returnType = false;
//       }
//       let fillControlInput = document.querySelector("#pcheckbox");
//       let errCheckbox = document.querySelector("#error_pcheckbox");
//       if (!!fillControlInput && !fillControlInput.checked && errCheckbox) {
//           errCheckbox.style.display = "block";
//           errCheckbox.innerHTML = "Required";
//           returnType = false;
//       }
//       if (returnType) {
//           let errFields = document.querySelector(".pinput-error");
//           if (!!errFields) {
//               errFields.style.display = "none";
//           }
//           // let pagetitle = document.title;
//           // let pageReferalurl = document.referrer;
//           // let srcUrl = window.location.href;
//           // let reqPayload = {
//           //     Offercode: 1,
//           //     rid: 0,
//           //     ridprogress: 0,
//           //     groupiconcount: 0,
//           //     pagetitle: pagetitle,
//           //     pagereferrerurl: pageReferalurl,
//           //     cid: 0,
//           //     iskyc: 0,
//           //     SourceURL: srcUrl,
//           //     kycredirecturl: 0,
//           //     hdnMscrm: 0,
//           //     hdnResUrl: "https://run.resulticks.com/",
//           //     hdnbookingdate: 0,
//           //     hdnbookingtime: 0,
//           //     "First_name": firstNameInput.value,
//           //     "Last_name": lastNameInput.value,
//           //     "EmailID": emailInput.value,
//           //     "Partner": partnerTypeGlob.value,
//           //     "MobileNo": mobileNoGlob.value,
//           //     "Country": selectSubCountry.value,
//           //     "Industry": selectIndustryInput.value,
//           //     "Job_Title": selectJobTitle.value,
//           //     checkbox: "on",
//           // }
//           let reqPayload = {
//             "FirstName": firstNameInput.value, 
//             "LastName": lastNameInput.value, 
//             "MobileNo": mobileNoGlob.value, 
//             "EmailID": emailInput.value, 
//             "Partner": partnerTypeGlob.value, 
//             "Company": "value",
//             "JobTitle": selectJobTitle.value, 
//             "Industry": selectIndustryInput.value, 
//             "ReceiveUpdates": "", 
//             "Country": selectSubCountry.value, 
//             "Purpose": "",
//             "SyncSDKID": "",
//             "FormId": "223", 
//             "DbId": "cc33cd4b_2fea_4b94_9123_bb7d48ff673e", 
//             "SourceURL": getsourceurl(),
//             "PageReferrerURL": "", 
//             "Rid": RID_, 
//             "Cid": CID_, 
//             "PageTitle": getpagetitle(),
//         }
        
//           let url = document.querySelector("#psubscribe_newsletter").getAttribute('apiUrl');

//           console.log(url,"url");


//           let options = {
//               method: "POST",
// 			  headers: {
//                 "Content-Type": "application/x-www-form-urlencoded"
// 			  },
// 			  //contentType : "application/x-www-form-urlencoded; charset=UTF-8",
//               body: JSON.stringify(reqPayload)
//           }

//           // console.log("above fetch" , options);
//           // console.log("above reqPayload" , reqPayload);

//           fetch(url, options).then((res) => {
//             if (res.ok) {
//                 // console.log("Response", res);
//                 res.json().then(data => {
// 					console.log("Data", data);
// 					if(data.result) {
// 					    window.location.href = location.origin + "/thank-you-partner-program.html";
//                     } else {
// 						console.log("Error", data);
// 					}
// 				})
//                 // let thanksMsg = document.getElementById("pthanksmsg");
//                 // if (!!thanksMsg) {
//                 //     thanksMsg.classList.remove("d-none");
//                 // }

//                 // let subscribeNewsletter = document.getElementById("psubscribe_newsletter");
//                 // if (!!subscribeNewsletter) {
//                 //     subscribeNewsletter.classList.add("d-none");
//                 // }

//                 // let closeClass = document.querySelectorAll(".pinput-error");
//                 // if (!!closeClass) {
//                 //     closeClass.forEach(element => {
//                 //         element.style.display = "none";
//                 //     })
//                 // }

//                 !!document.getElementById("psubscribe_newsletter") && document.getElementById("psubscribe_newsletter").reset();
//             }
//         }).catch(err => { });
//       } else {
//           return false;
//       }
//   } catch (error) { console.log(error,"error below");}
// }


function partnerProgramForm() {
  try {
    let returnType = true;

    // Inputs
    let firstNameInput = document.querySelector("#pfirstname");
    let lastNameInput = document.querySelector("#plastname");
    let emailInput = document.querySelector("#pemailid");
    let mobileNoGlob = document.querySelector("#pmobileno");
    let partnerTypeGlob = document.querySelector("#ppartnertype");
    let selectIndustryInput = document.querySelector("#pindustry");
    let selectJobTitle = document.querySelector("#pjobtitle");
    let selectSubCountry = document.querySelector("#pcountry");
    let fillControlInput = document.querySelector("#pcheckbox");

    // Error elements
    let errFirstName = document.querySelector("#error_pfirstname");
    let errLastName = document.querySelector("#error_plastname");
    let errEmail = document.querySelector("#error_pemailid");
    let errMobileNoGlob = document.querySelector("#error_pmobileno");
    let errpartnerTypeGlob = document.querySelector("#error_ppartnertype");
    let errIndustry = document.querySelector("#error_pindustry");
    let errJobTitle = document.querySelector("#error_pjobtitle");
    let errSubCountry = document.querySelector("#error_pcountry");
    let errCheckbox = document.querySelector("#error_pcheckbox");

    let iwouldlikereceieveupdate = document.querySelector("#rcheckbox1").checked?"Yes":"No";

    // console.log(iwouldlikereceieveupdate)

    // Email validation
    if (!emailInput.value) {
      errEmail.style.display = "block";
      errEmail.innerHTML = "Enter email ID";
      returnType = false;
    } else if (!validateEmail(emailInput.value)) {
      errEmail.style.display = "block";
      errEmail.innerHTML = "Enter valid email ID";
      returnType = false;
    } else {
      errEmail.style.display = "none";
    }

    // Mobile
    if (!mobileNoGlob.value) {
      errMobileNoGlob.style.display = "block";
      errMobileNoGlob.innerHTML = "Enter mobile number";
      returnType = false;
    }

    // First name
    if (!firstNameInput.value) {
      errFirstName.style.display = "block";
      errFirstName.innerHTML = "Enter valid first name";
      returnType = false;
    }

    // Last name
    if (!lastNameInput.value) {
      errLastName.style.display = "block";
      errLastName.innerHTML = "Enter valid last name";
      returnType = false;
    }

   
     let rcompanyNameGlob = document.querySelector("#rcompanyname");
        let errrcompanyNameGlob = document.querySelector("#error_rcompanyname");
        if (!!rcompanyNameGlob && rcompanyNameGlob.value == "" && !!errrcompanyNameGlob) {
            errrcompanyNameGlob.style.display = "block";
            errrcompanyNameGlob.innerHTML = "Enter company name";
            returnType = false;
        }
    
    // Partner type
    if (!partnerTypeGlob.value || partnerTypeGlob.value === "select") {
      errpartnerTypeGlob.style.display = "block";
      errpartnerTypeGlob.innerHTML = "Select partner type";
      returnType = false;
    }

    // Industry
    if (!selectIndustryInput.value || selectIndustryInput.value === "select") {
      errIndustry.style.display = "block";
      errIndustry.innerHTML = "Select industry";
      returnType = false;
    }

    // Job title
    if (!selectJobTitle.value || selectJobTitle.value === "select") {
      errJobTitle.style.display = "block";
      errJobTitle.innerHTML = "Select job title";
      returnType = false;
    }

    // Country
    if (!selectSubCountry.value || selectSubCountry.value === "select") {
      errSubCountry.style.display = "block";
      errSubCountry.innerHTML = "Select country";
      returnType = false;
    }

    // Checkbox
    if (!fillControlInput.checked) {
      errCheckbox.style.display = "block";
      errCheckbox.innerHTML = "Required";
      returnType = false;
    }

    

    // Stop if validation failed
    if (!returnType) return false;

    // Build payload
    let reqPayload = {
      First_name: firstNameInput.value,
      Last_name: lastNameInput.value,
      MobileNo: mobileNoGlob.value,
      EmailID: emailInput.value,
      Partner: partnerTypeGlob.value,
      Company: rcompanyNameGlob.value,
      Job_Title: selectJobTitle.value,
      Industry: selectIndustryInput.value,
      Receive_Updates: iwouldlikereceieveupdate||"",
      Country: selectSubCountry.value,
      SyncSDKID: "",
      FormId: "223",
      DbId: "cc33cd4b_2fea_4b94_9123_bb7d48ff673e",
      SourceURL: getsourceurl(),
      PageReferrerURL: "",
      Rid: RID_,
      Cid: CID_,
      PageTitle: getpagetitle(),
      notifyStatus:true,
    };


    console.log("data",reqPayload)
    let url = document
      .getElementById("psubscribe_newsletter")
      .getAttribute("apiUrl");

    // FETCH (FORM-ENCODED)
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      body: new URLSearchParams(reqPayload).toString()
    })
      .then(res => res.json())
      .then(data => {
        console.log("API Response:", data);

        if (data.result) {
          const form = document.getElementById("psubscribe_newsletter");
          if (form) form.reset();

          window.location.href =location.origin + "/thank-you-partner-program.html";
        } else {
          console.error("API Error:", data);
        }
      })
      .catch(err => console.error("Fetch Error:", err));

  } catch (error) {
    console.error("JS Error:", error);
  }
}

function initPartnerValidation() {
    try {
        let firstName = document.querySelector("#pfirstname");
        if (!!firstName) {
            firstName.addEventListener('keypress', (event) => {
                let inputValue = event.charCode;
                if (!(inputValue >= 65 && inputValue <= 122) && inputValue != 32 && inputValue != 0) {
                    event.preventDefault();
                }
            })
        }
        let lastName = document.querySelector("#plastname");
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

function reqFormDefaults() {

    let mobileNoGlob = document.querySelector("#rmobileno");
    let errMobileNoGlob = document.querySelector("#error_rmobileno");
    if (!!mobileNoGlob && !!errMobileNoGlob) {
        mobileNoGlob.addEventListener('blur', (event) => {
            try {
                if (event.target.value.trim() == "") {
                    errMobileNoGlob.style.display = "block";
                    errMobileNoGlob.innerHTML = "Enter mobile number";
                } else if (validateMobileNumber(event.target.value)) {
                    errMobileNoGlob.style.display = "block";
                    event.target.value = "";
                    errMobileNoGlob.innerHTML = "Enter valid mobile number";
                } else {
                    errMobileNoGlob.style.display = "none";
                    errMobileNoGlob.innerHTML = "Required";
                }
            } catch (error) { }
        })
    }

    let companyNameGlob = document.querySelector("#rcompanyname");
    let errcompanyNameGlob = document.querySelector("#error_rcompanyname");
    if (!!companyNameGlob && !!errcompanyNameGlob) {
        companyNameGlob.addEventListener('blur', (event) => {
            if (event.target.value.trim() == "") {
                errcompanyNameGlob.style.display = "block";
                errcompanyNameGlob.innerHTML = "Enter company name";
            } else if (validateSpecialCharater(event.target.value.trim())) {
                errcompanyNameGlob.style.display = "block";
                errcompanyNameGlob.innerHTML = "Special characters are not accepted";
            } else {
                errcompanyNameGlob.style.display = "none";
                errcompanyNameGlob.innerHTML = "Required";
            }
        })
    }

    let firstNameInputGlob = document.querySelector("#rfirstname");
    let errFirstNameGlob = document.querySelector("#error_rfirstname");
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

    let lastNameInputGlob = document.querySelector("#rlastname");
    let errLastNameGlob = document.querySelector("#error_rlastname");
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

    let emailInputGlob = document.querySelector("#remailid");
    let errEmailGlob = document.querySelector("#error_remailid");
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

    let subIndustryGlob = document.querySelector("#rindustry");
    let errIndustryGlob = document.querySelector("#error_rindustry");
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

    let fillControlInputGlob1 = document.querySelector("#rcheckbox1");
    let errCheckboxGlob1 = document.querySelector("#error_rcheckbox1");
    if (!!fillControlInputGlob1) {
        fillControlInputGlob1.addEventListener('click', (event) => {
            try {
                if (event.target.checked) {
                    errCheckboxGlob1.style.display = "none";
                    errCheckboxGlob1.innerHTML = "Required";
                } else {
                    errCheckboxGlob1.style.display = "block";
                    errCheckboxGlob1.innerHTML = "Required";
                }
            } catch (error) { }
        })
    }

    let fillControlInputGlob2 = document.querySelector("#rcheckbox2");
    let errCheckboxGlob2 = document.querySelector("#error_rcheckbox2");
    if (!!fillControlInputGlob2) {
        fillControlInputGlob2.addEventListener('click', (event) => {
            try {
                if (event.target.checked) {
                    errCheckboxGlob2.style.display = "none";
                    errCheckboxGlob2.innerHTML = "Required";
                } else {
                    errCheckboxGlob2.style.display = "block";
                    errCheckboxGlob2.innerHTML = "Required";
                }
            } catch (error) { }
        })
    }

    let subJobGlob = document.querySelector('#rjobtitle');
    let errJobTitleGlob = document.querySelector("#error_rjobtitle");
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

    let subCountryGlob = document.querySelector('#rcountry');
    let errSubCountryGlob = document.querySelector('#error_rcountry');
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

    let productGlob = document.querySelector('#rproduct');
    let errproductGlob = document.querySelector('#error_rproduct');
    if (!!productGlob && !!errproductGlob) {
        productGlob.addEventListener('change', (event) => {
            try {
                if (event.target.value.trim() == "") {
                    errproductGlob.style.display = "block";
                    errproductGlob.innerHTML = "Select product";
                } else if (event.target.value.trim() == "select") {
                    errproductGlob.style.display = "block";
                    errproductGlob.innerHTML = "Select product";
                } else {
                    errproductGlob.style.display = "none";
                    errproductGlob.innerHTML = "Select product";
                }
            } catch (error) { }
        })
    }
}

reqFormDefaults();

function reqMeetingForm() {
    try {
        let returnType = true;
        let firstNameInput = document.querySelector("#rfirstname");
        let errFirstName = document.querySelector("#error_rfirstname");
        let lastNameInput = document.querySelector("#rlastname");
        let errLastName = document.querySelector("#error_rlastname");
        let emailInput = document.querySelector("#remailid");
        let errEmail = document.querySelector("#error_remailid");

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

        let selectIndustryInput = document.querySelector("#rindustry");
        let errIndustry = document.querySelector("#error_rindustry");
        if (!!selectIndustryInput && !!errIndustry && (selectIndustryInput.value == "" || selectIndustryInput.value == "select")) {
            errIndustry.style.display = "block";
            errIndustry.innerHTML = "Select industry";
            returnType = false;
        }

        let selectJobTitle = document.querySelector('#rjobtitle');
        let errJobTitle = document.querySelector("#error_rjobtitle");
        if (!!selectJobTitle && !!errJobTitle && (selectJobTitle.value == "" || selectJobTitle.value == "select")) {
            errJobTitle.style.display = "block";
            errJobTitle.innerHTML = "Select job title";
            returnType = false;
        }

        let mobileNoGlob = document.querySelector("#rmobileno");
        let errMobileNoGlob = document.querySelector("#error_rmobileno");
        if (!!mobileNoGlob && mobileNoGlob.value == "" && !!errMobileNoGlob) {
            errMobileNoGlob.style.display = "block";
            errMobileNoGlob.innerHTML = "Enter mobile number";
            returnType = false;
        }

        let rcompanyNameGlob = document.querySelector("#rcompanyname");
        let errrcompanyNameGlob = document.querySelector("#error_rcompanyname");
        if (!!rcompanyNameGlob && rcompanyNameGlob.value == "" && !!errrcompanyNameGlob) {
            errrcompanyNameGlob.style.display = "block";
            errrcompanyNameGlob.innerHTML = "Enter company name";
            returnType = false;
        }

        let selectSubCountry = document.querySelector('#rcountry');
        let errSubCountry = document.querySelector('#error_rcountry');
        if (!!selectSubCountry && !!errSubCountry && (selectSubCountry.value == "" || selectSubCountry.value == "select")) {
            errSubCountry.style.display = "block";
            errSubCountry.innerHTML = "Select country";
            returnType = false;
        }

        let productGlob = document.querySelector('#rproduct');
        let errproductGlob = document.querySelector('#error_rproduct');
        if (!!productGlob && !!errproductGlob && (productGlob.value == "" || productGlob.value == "select")) {
            errproductGlob.style.display = "block";
            errproductGlob.innerHTML = "Select product";
            returnType = false;
        }

        // Not found in the popup
        let fillControlInput1 = document.querySelector("#rcheckbox1");
        let errCheckbox1 = document.querySelector("#error_rcheckbox1");
        if (!!fillControlInput1 && !fillControlInput1.checked && errCheckbox1) {
            errCheckbox1.style.display = "block";
            errCheckbox1.innerHTML = "Required";
            returnType = false;
        }

        let fillControlInput2 = document.querySelector("#rcheckbox2");
        let errCheckbox2 = document.querySelector("#error_rcheckbox2");
        if (!!fillControlInput2 && !fillControlInput2.checked && errCheckbox2) {
            errCheckbox2.style.display = "block";
            errCheckbox2.innerHTML = "Required";
            returnType = false;
        }

        

        if (returnType) {
            let errFields = document.querySelector(".rinput-error");
            if (!!errFields) {
                errFields.style.display = "none";
            }

            // let pagetitle = document.title;
            // let pageReferalurl = document.referrer;
            // let srcUrl = window.location.href;
            // let company = !!document.querySelector("#rcompanyname") && document.querySelector("#rcompanyname").value;

            let company = document.querySelector("#rcompanyname")?.value || "";
                             let reqPayload = {
                                First_name: firstNameInput.value,
                                Last_name: lastNameInput.value,
                                EmailID: emailInput.value,
                                MobileNo: mobileNoGlob.value,
                                Country: selectSubCountry.value,
                                Industry: selectIndustryInput.value,
                                Job_Title: selectJobTitle.value,
                                Company: company || "",
                                Receive_Udpates: fillControlInput2.value,
                                Purpose: productGlob.value,
                                SyncSDKID: "",
                                formId: "215",
                                dbId: "cc33cd4b_2fea_4b94_9123_bb7d48ff673e",
                                SourceURL: getsourceurl(),
                                pagereferrerurl: "",
                                rid: RID_ || "",
                                cid: CID_ || "",
                                pagetitle: getpagetitle(),
                                notifyStatus: true,
                                };

                let url = document.querySelector("#rsubscribe_newsletter").getAttribute('apiUrl');
                let options = {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams(reqPayload)
                }
                // console.log(reqPayload)
            fetch(url, options).then((res) => {
                if (res.ok) {
                    window.location.href = location.origin + "/thank-you-request-meeting.html";
                    // let thanksMsg = document.getElementById("pthanksmsg");
                    // if (!!thanksMsg) {
                    //     thanksMsg.classList.remove("d-none");
                    // }

                    // let subscribeNewsletter = document.getElementById("psubscribe_newsletter");
                    // if (!!subscribeNewsletter) {
                    //     subscribeNewsletter.classList.add("d-none");
                    // }

                    // let closeClass = document.querySelectorAll(".pinput-error");
                    // if (!!closeClass) {
                    //     closeClass.forEach(element => {
                    //         element.style.display = "none";
                    //     })
                    // }

                    !!document.getElementById("rsubscribe_newsletter") && document.getElementById("rsubscribe_newsletter").reset();
                }
            }).catch(err => { });
        } else {
            return false;
        }
    } catch (error) { }
}

function initReqValidation() {
    try {
        let firstName = document.querySelector("#rfirstname");
        if (!!firstName) {
            firstName.addEventListener('keypress', (event) => {
                let inputValue = event.charCode;
                if (!(inputValue >= 65 && inputValue <= 122) && inputValue != 32 && inputValue != 0) {
                    event.preventDefault();
                }
            })
        }
        let lastName = document.querySelector("#rlastname");
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

function contactFormDefaults() {
    let mobileNoGlob = document.querySelector("#cmobileno");
    let errMobileNoGlob = document.querySelector("#error_cmobileno");
    if (!!mobileNoGlob && !!errMobileNoGlob) {
        mobileNoGlob.addEventListener('blur', (event) => {
            try {
                if (event.target.value.trim() == "") {
                    errMobileNoGlob.style.display = "block";
                    errMobileNoGlob.innerHTML = "Enter mobile number";
                } else if (validateMobileNumber(event.target.value)) {
                    errMobileNoGlob.style.display = "block";
                    event.target.value = "";
                    errMobileNoGlob.innerHTML = "Enter valid mobile number";
                } else {
                    errMobileNoGlob.style.display = "none";
                    errMobileNoGlob.innerHTML = "Required";
                }
            } catch (error) { }
        })
    }

    let companyNameGlob = document.querySelector("#ccompanyname");
    let errcompanyNameGlob = document.querySelector("#error_ccompanyname");
    if (!!companyNameGlob && !!errcompanyNameGlob) {
        companyNameGlob.addEventListener('blur', (event) => {
            if (event.target.value.trim() == "") {
                errcompanyNameGlob.style.display = "block";
                errcompanyNameGlob.innerHTML = "Enter company name";
            } else if (validateSpecialCharater(event.target.value.trim())) {
                errcompanyNameGlob.style.display = "block";
                errcompanyNameGlob.innerHTML = "Special characters are not accepted";
            } else {
                errcompanyNameGlob.style.display = "none";
                errcompanyNameGlob.innerHTML = "Required";
            }
        })
    }

    let firstNameInputGlob = document.querySelector("#cfirstname");
    let errFirstNameGlob = document.querySelector("#error_cfirstname");
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

    let lastNameInputGlob = document.querySelector("#clastname");
    let errLastNameGlob = document.querySelector("#error_clastname");
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

    let emailInputGlob = document.querySelector("#cemailid");
    let errEmailGlob = document.querySelector("#error_cemailid");
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

    let subIndustryGlob = document.querySelector("#cindustry");
    let errIndustryGlob = document.querySelector("#error_cindustry");
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

    let fillControlInputGlob = document.querySelector("#ccheckbox");
    let errCheckboxGlob = document.querySelector("#error_ccheckbox");
    if (!!fillControlInputGlob) {
        fillControlInputGlob.addEventListener('click', (event) => {
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

    let subJobGlob = document.querySelector('#cjobtitle');
    let errJobTitleGlob = document.querySelector("#error_cjobtitle");
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

    let subCountryGlob = document.querySelector('#ccountry');
    let errSubCountryGlob = document.querySelector('#error_ccountry');
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

    let purPoseContact = document.querySelector('#cpurposeofcontact');
    let errpurPoseContact = document.querySelector('#error_cpurposeofcontact');
    if (!!purPoseContact && !!errpurPoseContact) {
        purPoseContact.addEventListener('change', (event) => {
            try {
                if (event.target.value.trim() == "") {
                    errpurPoseContact.style.display = "block";
                    errpurPoseContact.innerHTML = "Select purpose of contact";
                } else if (event.target.value.trim() == "select") {
                    errpurPoseContact.style.display = "block";
                    errpurPoseContact.innerHTML = "Select purpose of contact";
                } else {
                    errpurPoseContact.style.display = "none";
                    errpurPoseContact.innerHTML = "Select purpose of contact";
                }
            } catch (error) { }
        })
    }
}

contactFormDefaults();

function contactFormValidation() {
    try {
        let returnType = true;
        let firstNameInput = document.querySelector("#cfirstname");
        let errFirstName = document.querySelector("#error_cfirstname");
        let lastNameInput = document.querySelector("#clastname");
        let errLastName = document.querySelector("#error_clastname");
        let emailInput = document.querySelector("#cemailid");
        let errEmail = document.querySelector("#error_cemailid");

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

        let purPoseContact = document.querySelector('#cpurposeofcontact');
        let errpurPoseContact = document.querySelector('#error_cpurposeofcontact');
        if (!!purPoseContact && !!errpurPoseContact && (purPoseContact.value == "" || purPoseContact.value == "select")) {
            errpurPoseContact.style.display = "block";
            errpurPoseContact.innerHTML = "Select purpose of contact";
            returnType = false;
        }

        let selectIndustryInput = document.querySelector("#cindustry");
        let errIndustry = document.querySelector("#error_cindustry");
        if (!!selectIndustryInput && !!errIndustry && (selectIndustryInput.value == "" || selectIndustryInput.value == "select")) {
            errIndustry.style.display = "block";
            errIndustry.innerHTML = "Select industry";
            returnType = false;
        }

        let selectJobTitle = document.querySelector('#cjobtitle');
        let errJobTitle = document.querySelector("#error_cjobtitle");
        if (!!selectJobTitle && !!errJobTitle && (selectJobTitle.value == "" || selectJobTitle.value == "select")) {
            errJobTitle.style.display = "block";
            errJobTitle.innerHTML = "Select job title";
            returnType = false;
        }

        let mobileNoGlob = document.querySelector("#cmobileno");
        let errMobileNoGlob = document.querySelector("#error_cmobileno");
        if (!!mobileNoGlob && mobileNoGlob.value == "" && !!errMobileNoGlob) {
            errMobileNoGlob.style.display = "block";
            errMobileNoGlob.innerHTML = "Enter mobile number";
            returnType = false;
        }

        let rcompanyNameGlob = document.querySelector("#ccompanyname");
        let errrcompanyNameGlob = document.querySelector("#error_ccompanyname");
        if (!!rcompanyNameGlob && rcompanyNameGlob.value == "" && !!errrcompanyNameGlob) {
            errrcompanyNameGlob.style.display = "block";
            errrcompanyNameGlob.innerHTML = "Enter company name";
            returnType = false;
        }

        let selectSubCountry = document.querySelector('#ccountry');
        let errSubCountry = document.querySelector('#error_ccountry');
        if (!!selectSubCountry && !!errSubCountry && (selectSubCountry.value == "" || selectSubCountry.value == "select")) {
            errSubCountry.style.display = "block";
            errSubCountry.innerHTML = "Select country";
            returnType = false;
        }

        // Not found in the popup
        let fillControlInput = document.querySelector("#ccheckbox");
        let errCheckbox = document.querySelector("#error_ccheckbox");
        if (!!fillControlInput && !fillControlInput.checked && errCheckbox) {
            errCheckbox.style.display = "block";
            errCheckbox.innerHTML = "Required";
            returnType = false;
        }

        if (returnType) {
            let errFields = document.querySelector(".cinput-error");
            if (!!errFields) {
                errFields.style.display = "none";
            }

            // let pagetitle = document.title;
            // let pageReferalurl = document.referrer;
            // let srcUrl = window.location.href;
            // let company = !!document.querySelector("#ccompanyname") && document.querySelector("#ccompanyname").value;

            let company = document.querySelector("#ccompanyname")?.value || "";
            let ReceiveUdpates = document.querySelector("#ccheckbox1").checked?"Yes":"No";


            let reqPayload = {
                        First_name: firstNameInput.value,
                        Last_name: lastNameInput.value,
                        MobileNo: mobileNoGlob.value,
                        EmailID: emailInput.value,
                        Company: company,
                        Job_Title: selectJobTitle.value,
                        Industry: selectIndustryInput.value,
                        Receive_Udpates: ReceiveUdpates || "N",
                        Country: selectSubCountry.value,
                        Purpose_of_contact: purPoseContact ? purPoseContact.value : "",
                        SyncSDKID: "",
                        formId: "185",
                        dbId:"cc33cd4b_2fea_4b94_9123_bb7d48ff673e",
                        SourceURL: getsourceurl(),
                        pagereferrerurl: "",
                        Comments: "",
                        rid: RID_ || "",
                        cid: CID_ || "",
                        pagetitle: getpagetitle(),
                        notifyStatus: true,
            }

            // console.log(reqPayload)

            let url = document.querySelector("#csubscribe_newsletter").getAttribute('apiUrl');
            let options = {
                method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
                body: new URLSearchParams(reqPayload)

            }
            console.log(new URLSearchParams(reqPayload).toString());
            fetch(url, options).then((res) => {
                if (res.ok) {
                    // window.location.href = location.origin + "/thank-you-contact.html";
                    // let thanksMsg = document.getElementById("pthanksmsg");
                    // if (!!thanksMsg) {
                    //     thanksMsg.classList.remove("d-none");
                    // }

                    // let subscribeNewsletter = document.getElementById("psubscribe_newsletter");
                    // if (!!subscribeNewsletter) {
                    //     subscribeNewsletter.classList.add("d-none");
                    // }

                    // let closeClass = document.querySelectorAll(".pinput-error");
                    // if (!!closeClass) {
                    //     closeClass.forEach(element => {
                    //         element.style.display = "none";
                    //     })
                    // }

                    !!document.getElementById("csubscribe_newsletter") && document.getElementById("csubscribe_newsletter").reset();
                }
            }).catch(err => { });
        } else {
            return false;
        }
    } catch (error) { }
}


function initContactValidation() {
    try {
        let firstName = document.querySelector("#rfirstname");
        if (!!firstName) {
            firstName.addEventListener('keypress', (event) => {
                let inputValue = event.charCode;
                if (!(inputValue >= 65 && inputValue <= 122) && inputValue != 32 && inputValue != 0) {
                    event.preventDefault();
                }
            })
        }
        let lastName = document.querySelector("#rlastname");
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


switch (true) {
    case window.location.href.includes("resulticks-partner.html"):
        try {
            initPartnerValidation();
        } catch (error) { }
        break;
    case window.location.href.includes("request-a-meeting.html"):
        try {
            initReqValidation();
        } catch (error) { }
        break;
    case window.location.href.includes("contact-us.html"):
        try {
            initContactValidation();
        } catch (error) { }
        break;
}

