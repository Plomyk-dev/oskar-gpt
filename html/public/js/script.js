var active = "main", ticketcount = 0, total = 0;
const active_select = "rgb(47,191,249)", inactive_select = "rgb(41, 121, 150)", judgement_elements = document.querySelectorAll(".judgement-item"), judgement_summary = document.querySelector("#judgement-summary");
var activeTicketList = "";
window.onload = () => {
  document.querySelector("#" + active).style.display = "block";
  $("html").css("display", "none");
  $("body").css("display", "none");
  let _0x2745x9 = "<p>" + Translation[0].categories + "</p>";
  let _0x2745xa = "";
  for (let _0x2745xb in judgementTicketList) {
    let _0x2745xc = judgementTicketList[_0x2745xb];
    let _0x2745xd = _0x2745xc.data;
    if (_0x2745xb == 0) {
      _0x2745x9 = _0x2745x9 + `${'<p class="category-button-selected" onclick="changeTicketCategory(this, \''}` + _0x2745xb + `${'\')" id="'}` + _0x2745xc.categoryName + `${'">'}` + _0x2745xc.categoryName + `${"</p>"}`;
      for (let _0x2745xe in _0x2745xd) {
        let _0x2745xf = _0x2745xd[_0x2745xe];
        let _0x2745x10 = _0x2745xf.name;
        let _0x2745x11 = _0x2745xf.time;
        let _0x2745x12 = _0x2745xf.bill;
        let _0x2745x13 = _0x2745xf.count;
        _0x2745xa = _0x2745xa + `${'<div class="judgement-ticket-box"><p class="ticket-count"><span>'}` + _0x2745x13 + `${'</span><br/><span><i class="fa-light fa-plus" onclick="addAmount(this, \''}` + _0x2745xb + `${"', '"}` + _0x2745xe + `${'\')"></i><i class="fa-light fa-minus" onclick="decreaseAmount(this, \''}` + _0x2745xb + `${"', '"}` + _0x2745xe + `${'\')"></i></span></p><div id="icon"><i class="fa-solid fa-circle"></i></div><p class="content"><br/>'}` + _0x2745x10 + `${'<br/><p class="judgement-ticket-amount">'}` + _0x2745x11 + `${" msc.<span>$"}` + _0x2745x12 + `${"</span></p></p></div>"}`;
      }
    } else {
      _0x2745x9 = _0x2745x9 + `${'<p class="category-button" onclick="changeTicketCategory(this, \''}` + _0x2745xb + `${'\')" id="'}` + _0x2745xc.categoryName + `${'">'}` + _0x2745xc.categoryName + `${"</p>"}`;
    }
  }
  ;
  this.document.getElementById("category-nav").innerHTML = _0x2745x9;
  this.document.getElementById("main-ticket-list").innerHTML = _0x2745xa;
  if (judgementTicketList.length > 0) {
    activeTicketList = document.querySelector("#" + judgementTicketList[0].categoryName);
  }
};
const patrolSelect = document.querySelector(".patrol-select"), patrolBox = document.querySelector("#popup-patrol-background"), citizenBg = document.querySelector("#popup-citizen-background"), citizenPictureEdit = document.querySelector("#popup-citizen-picture-edit"), citizenWanted = document.querySelector("#popup-citizen-wanted"), citizenNote = document.querySelector("#popup-citizen-note"), citizenDescription = document.querySelector("#popup-citizen-description"), vehicleBg = document.querySelector("#popup-vehicle-background"), vehicleWanted = document.querySelector("#popup-vehicle-wanted"), vehicleDescription = document.querySelector("#popup-vehicle-description"), vehicleNote = document.querySelector("#popup-vehicle-note"), workerAddPopup = document.querySelector("#popup-worker-background"), discourseBg = document.querySelector("#popup-discourse-background"), discoursePictureEdit = document.querySelector("#popup-discourse-picture-edit"), discoursePhoto = document.querySelector("#discourse-picture-edit"), announceBg = document.querySelector("#popup-announce-background"), announceDesc = document.querySelector("#popup-announce-description"), judgementBg = document.querySelector("#popup-judgement-background"), judgementImport = document.querySelector("#popup-judgement-import");
let headerNameAndTime = '<span class="tirex-name">' + Translation[0].hellow + ", <b>NAME, SURNAME - TIME</b></span>";
var ownJobGrade = 0, discourseCitizensList = [], discourseOfficersList = [], discourseVehiclesList = [], discourseImagesList = [], judgementsCitizensList = [], judgementsTicketList = [];
function mainAddFpList(_0x2745x30) {
  let _0x2745x31 = "<tr><th>" + Translation[0].nameAndSurname + "</th><th>" + Translation[0].patrol + "</th><th>" + Translation[0].radioChannel + "</th><th>" + Translation[0].status + "</th><th>" + Translation[0].badgeNumber + "</th></tr>";
  let _0x2745x32 = 0;
  for (let _0x2745xb in _0x2745x30) {
    let _0x2745xc = _0x2745x30[_0x2745xb];
    let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
    let _0x2745x33 = Translation[0].missing;
    let _0x2745x34 = _0x2745xc.radio;
    let _0x2745x35 = _0x2745xc.status;
    let _0x2745x36 = _0x2745xc.badge;
    if (_0x2745x35 == "yes") {
      _0x2745x31 = _0x2745x31 + "<tr><td>" + _0x2745x10 + "</td><td>" + _0x2745x33 + "</td><td>" + _0x2745x34 + '</td><td><span class="status available">' + Translation[0].available + "</span></td><td>" + _0x2745x36 + "</td></tr>";
      _0x2745x32 = _0x2745x32 + 1;
    } else {
      _0x2745x31 = _0x2745x31 + "<tr><td>" + _0x2745x10 + "</td><td>" + _0x2745x33 + "</td><td>" + _0x2745x34 + '</td><td><span class="status unavailable">' + Translation[0].notAvailable + "</span></td><td>" + _0x2745x36 + "</td></tr>";
    }
  }
  ;
  this.document.getElementById("cop-count").innerHTML = _0x2745x32;
  this.document.getElementById("tirex-fpList").innerHTML = _0x2745x31;
  return;
}
function patrolsAddPatrolList(_0x2745x38, _0x2745x39) {
  var _0x2745x3a = [];
  var _0x2745x3b = [];
  for (let _0x2745xb in _0x2745x38) {
    let _0x2745xc = _0x2745x38[_0x2745xb];
    let _0x2745x30 = _0x2745xc.officers;
    let _0x2745x3c = _0x2745x3a.length;
    for (let _0x2745xe in _0x2745x30) {
      let _0x2745x3d = _0x2745x30[_0x2745xe];
      let _0x2745x3e = _0x2745x3d.ssn;
      if (_0x2745x3e == _0x2745x39) {
        _0x2745x3a.push(_0x2745xc);
        break;
      }
    }
    ;
    if (_0x2745x3c == _0x2745x3a.length) {
      _0x2745x3b.push(_0x2745xc);
    }
  }
  ;
  let _0x2745x3f = "";
  for (let _0x2745xb in _0x2745x3a) {
    let _0x2745xc = _0x2745x3a[_0x2745xb];
    let _0x2745x40 = _0x2745xc.yourSsn;
    let _0x2745x41 = _0x2745xc.creator;
    let _0x2745x42 = _0x2745xc.patrolId;
    let _0x2745x43 = _0x2745xc.patrolType;
    let _0x2745x30 = _0x2745xc.officers;
    let _0x2745x44 = _0x2745xc.blocked;
    if (_0x2745x41 == _0x2745x39) {
      if (_0x2745x44 == true) {
        _0x2745x3f = `${'<div class="item patrol" id="patrol-num1" style="--width:calc(100% - 30px); --height: 225px; background-color: var(--itemcolor); --margin: 5px 15px;"><div id="header"><p>Patrol '}` + _0x2745x43 + `${" #"}` + _0x2745x42 + `${'</p><div id="patrol-buttons"><span class="patrol-button patrol-invalid onlyCursorHover" onclick="menagePatrol(\'block\', \''}` + _0x2745x42 + `${"')\">"}` + Translation[0].occupied + `${"</span><span id=\"patrol-party\" onclick=\"menagePatrol('leave','"}` + _0x2745x42 + `${'\')" class="patrol-button patrol-invalid">'}` + Translation[0].leave + `${"</span></div><span>"}` + Translation[0].activeOfficers + `${'</span></div><table class="patrol-members">'}`;
      } else {
        _0x2745x3f = `${'<div class="item patrol" id="patrol-num1" style="--width:calc(100% - 30px); --height: 225px; background-color: var(--itemcolor); --margin: 5px 15px;"><div id="header"><p>Patrol '}` + _0x2745x43 + `${" #"}` + _0x2745x42 + `${'</p><div id="patrol-buttons"><span class="patrol-button patrol-valid onlyCursorHover" onclick="menagePatrol(\'block\', \''}` + _0x2745x42 + `${"')\">"}` + Translation[0].available + `${"</span><span id=\"patrol-party\" onclick=\"menagePatrol('leave', '"}` + _0x2745x42 + `${'\')" class="patrol-button patrol-invalid">'}` + Translation[0].leave + `${"</span></div><span>"}` + Translation[0].activeOfficers + `${'</span></div><table class="patrol-members">'}`;
      }
    } else {
      if (_0x2745x44 == true) {
        _0x2745x3f = `${'<div class="item patrol" id="patrol-num1" style="--width:calc(100% - 30px); --height: 225px; background-color: var(--itemcolor); --margin: 5px 15px;"><div id="header"><p>Patrol '}` + _0x2745x43 + `${" #"}` + _0x2745x42 + `${'</p><div id="patrol-buttons"><span class="patrol-button patrol-invalid">'}` + Translation[0].occupied + `${"</span><span id=\"patrol-party\" onclick=\"menagePatrol('leave','"}` + _0x2745x42 + `${'\')" class="patrol-button patrol-invalid">'}` + Translation[0].leave + `${"</span></div><span>"}` + Translation[0].activeOfficers + `${'</span></div><table class="patrol-members">'}`;
      } else {
        _0x2745x3f = `${'<div class="item patrol" id="patrol-num1" style="--width:calc(100% - 30px); --height: 225px; background-color: var(--itemcolor); --margin: 5px 15px;"><div id="header"><p>Patrol '}` + _0x2745x43 + `${" #"}` + _0x2745x42 + `${'</p><div id="patrol-buttons"><span class="patrol-button patrol-valid">'}` + Translation[0].available + `${"</span><span id=\"patrol-party\" onclick=\"menagePatrol('leave', '"}` + _0x2745x42 + `${'\')" class="patrol-button patrol-invalid">'}` + Translation[0].leave + `${"</span></div><span>"}` + Translation[0].activeOfficers + `${'</span></div><table class="patrol-members">'}`;
      }
    }
    ;
    for (let _0x2745xe in _0x2745x30) {
      let _0x2745x3d = _0x2745x30[_0x2745xe];
      let _0x2745x3e = _0x2745x3d.ssn;
      let _0x2745x36 = _0x2745x3d.badge;
      let _0x2745x45 = _0x2745x3d.job;
      let _0x2745x10 = _0x2745x3d.name;
      if (_0x2745x3e == _0x2745x40) {
        _0x2745x3f = _0x2745x3f + "<tr><td>" + _0x2745x10 + " (" + Translation[0].you + ")</td><td>" + _0x2745x45 + "</td><td>" + _0x2745x36 + "</td></tr>";
      } else {
        if (_0x2745x40 == _0x2745x41) {
          _0x2745x3f = _0x2745x3f + `${"<tr><td><i class=\"fa-regular fa-trash party-kick\" onclick=\"menagePatrol('kick', '"}` + _0x2745x3e + `${"')\"></i>"}` + _0x2745x10 + `${"</td><td>"}` + _0x2745x45 + `${"</td><td>"}` + _0x2745x36 + `${"</td></tr>"}`;
        } else {
          _0x2745x3f = _0x2745x3f + "<tr><td>" + _0x2745x10 + "</td><td>" + _0x2745x45 + "</td><td>" + _0x2745x36 + "</td></tr>";
        }
      }
    }
    ;
    _0x2745x3f = _0x2745x3f + "</table></div>";
  }
  ;
  for (let _0x2745xb in _0x2745x3b) {
    let _0x2745xc = _0x2745x3b[_0x2745xb];
    let _0x2745x42 = _0x2745xc.patrolId;
    let _0x2745x43 = _0x2745xc.patrolType;
    let _0x2745x30 = _0x2745xc.officers;
    let _0x2745x44 = _0x2745xc.blocked;
    if (_0x2745x44 == true) {
      _0x2745x3f = `${'<div class="item patrol" id="patrol-num1" style="--width:calc(100% - 30px); --height: 225px; background-color: var(--itemcolor); --margin: 5px 15px;"><div id="header"><p>'}` + Translation[0].patrol + `${" "}` + _0x2745x43 + `${" #"}` + _0x2745x42 + `${'</p><div id="patrol-buttons"><span class="patrol-button patrol-invalid">'}` + Translation[0].occupied + `${'</span><span id="patrol-party" class="patrol-button patrol-valid">'}` + Translation[0].join + `${"</span></div><span>"}` + Translation[0].activeOfficers + `${'</span></div><table class="patrol-members">'}`;
    } else {
      _0x2745x3f = `${'<div class="item patrol" id="patrol-num1" style="--width:calc(100% - 30px); --height: 225px; background-color: var(--itemcolor); --margin: 5px 15px;"><div id="header"><p>'}` + Translation[0].patrol + `${" "}` + _0x2745x43 + `${" #"}` + _0x2745x42 + `${'</p><div id="patrol-buttons"><span class="patrol-button patrol-valid">'}` + Translation[0].available + `${"</span><span id=\"patrol-party\" onclick=\"menagePatrol('join', '"}` + _0x2745x42 + `${'\')" class="patrol-button patrol-valid">'}` + Translation[0].join + `${"</span></div><span>"}` + Translation[0].activeOfficers + `${'</span></div><table class="patrol-members">'}`;
    }
    ;
    for (let _0x2745xe in _0x2745x30) {
      let _0x2745x3d = _0x2745x30[_0x2745xe];
      let _0x2745x36 = _0x2745x3d.badge;
      let _0x2745x45 = _0x2745x3d.job;
      let _0x2745x10 = _0x2745x3d.name;
      _0x2745x3f = _0x2745x3f + "<tr><td>" + _0x2745x10 + "</td><td>" + _0x2745x45 + "</td><td>" + _0x2745x36 + "</td></tr>";
    }
    ;
    _0x2745x3f = _0x2745x3f + "</table></div>";
  }
  ;
  this.document.getElementById("tirex-patrols").innerHTML = _0x2745x3f;
  return;
}
function patrolAddDispatchList(_0x2745x47) {
  let _0x2745x48 = `${""}`;
  if (_0x2745x47.length > 0) {
    for (let _0x2745xb in _0x2745x47) {
      let _0x2745xc = _0x2745x47[_0x2745xb];
      let _0x2745x49 = _0x2745xc.id;
      let _0x2745x4a = _0x2745xc.content;
      let _0x2745x30 = _0x2745xc.officers;
      let _0x2745x4b = _0x2745xc.maxOfficers;
      _0x2745x48 = _0x2745x48 + `${'<tr><td style="width:40%">'}` + _0x2745x4a + `${"</td><td>#"}` + _0x2745x49 + `${'</td><td><span style="font-size:14px;">'}` + Translation[0].policeOfficersAbbreviation + `${": "}` + _0x2745x30.length + `${"/"}` + _0x2745x4b + `${"</span></td><td><span onclick=\"dispatchDataAction('deleteFromList', '"}` + _0x2745x49 + `${"')\"><i class=\"fa-regular fa-trash\"></i></span><span onclick=\"dispatchDataAction('addToList', '"}` + _0x2745x49 + `${'\')"><i class="fa-regular fa-plus"></i></span></td></tr>'}`;
    }
  }
  ;
  this.document.getElementById("patrol-announcements").innerHTML = _0x2745x48;
}
function citizensAddCitizenList(_0x2745x4d) {
  let _0x2745x4e = '<tr><th style="width:50%;">' + Translation[0].citizen + '</th><th style="width:20%;">' + Translation[0].wanted + '</th><th style="width:20%;">' + Translation[0].socialSecurityNumber + '</th><th style="width:10%;"></th></tr>';
  if (_0x2745x4d.length > 0) {
    for (let _0x2745xb in _0x2745x4d) {
      let _0x2745xc = _0x2745x4d[_0x2745xb];
      let _0x2745x40 = _0x2745xc.ssn;
      let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
      let _0x2745x4f = _0x2745xc.wanted;
      let _0x2745x50 = "public/img/citizen-picture-none.png";
      if (_0x2745xc.image && _0x2745xc.image.length > 0) {
        _0x2745x50 = _0x2745xc.image;
      }
      ;
      if (_0x2745x4f.toUpperCase() == "TAK") {
        _0x2745x4e = _0x2745x4e + `${"<tr onclick=\"showCitizen('"}` + _0x2745x40 + `${'\')"><td><img src="'}` + _0x2745x50 + `${'" id="table-citizen-picture"><p class="citizen-name">'}` + _0x2745x10 + `${'</p></td><td><span style="background-color: rgb(150, 0, 0) !important;">'}` + Translation[0].yes.toUpperCase() + `${"</span></td><td>"}` + _0x2745x40 + `${'</td><td><span><i class="fa-solid fa-angle-right"></i></span></td></tr>'}`;
      } else {
        _0x2745x4e = _0x2745x4e + `${"<tr onclick=\"showCitizen('"}` + _0x2745x40 + `${'\')"><td><img src="'}` + _0x2745x50 + `${'" id="table-citizen-picture"><p class="citizen-name">'}` + _0x2745x10 + `${"</p></td><td><span>"}` + Translation[0].no.toUpperCase() + `${"</span></td><td>"}` + _0x2745x40 + `${'</td><td><span><i class="fa-solid fa-angle-right"></i></span></td></tr>'}`;
      }
    }
  }
  ;
  this.document.getElementById("citizen-list-table").innerHTML = _0x2745x4e;
  return;
}
function citizensAddCitizenWanted(_0x2745x4d) {
  let _0x2745x52 = "<p>" + Translation[0].newCitizenBolo + "</p>";
  if (_0x2745x4d.length > 0) {
    for (let _0x2745xb in _0x2745x4d) {
      let _0x2745xc = _0x2745x4d[_0x2745xb];
      let _0x2745x10 = _0x2745xc.name;
      let _0x2745x40 = _0x2745xc.ssn;
      _0x2745x52 = _0x2745x52 + `${'<div class="wanted-box onlyCursorHover" onclick="showCitizen(\''}` + _0x2745x40 + `${'\', \'citizens\')"><div id="icon"><i class="fa-solid fa-circle"></i></div><div id="content">'}` + _0x2745x10 + `${"</div></div>"}`;
    }
  }
  ;
  this.document.getElementById("wanted").innerHTML = _0x2745x52;
  return;
}
function citizensAddVehicleWanted(_0x2745x54) {
  let _0x2745x55 = "<p>" + Translation[0].newCarBolo + "</p>";
  if (_0x2745x54.length > 0) {
    for (let _0x2745xb in _0x2745x54) {
      let _0x2745xc = _0x2745x54[_0x2745xb];
      let _0x2745x56 = _0x2745xc.model;
      let _0x2745x57 = _0x2745xc.plates;
      let _0x2745x58 = _0x2745xc.vin;
      _0x2745x55 = _0x2745x55 + `${'<div class="bolo-box onlyCursorHover" onclick="showVehicle(\''}` + _0x2745x58 + `${"', 'vehicles')\"><div id=\"name\">"}` + _0x2745x56 + `${'</div><div id="register">'}` + _0x2745x57 + `${"</div></div>"}`;
    }
  }
  ;
  this.document.getElementById("bolo").innerHTML = _0x2745x55;
  return;
}
function vehiclesAddVehicleList(_0x2745x54) {
  let _0x2745x5a = '<table id="discourse-list"><tr><th style="width:30%">' + Translation[0].model + '</th><th style="width:10%">' + Translation[0].wanted + '</th><th style="width:20%">' + Translation[0].owner + '</th><th style="width:15%">' + Translation[0].vin.toUpperCase() + '</th><th style="width:20%">' + Translation[0].carPlate + '</th><th style="width:5%"></th></tr>';
  if (_0x2745x54.length > 0) {
    for (let _0x2745xb in _0x2745x54) {
      let _0x2745xc = _0x2745x54[_0x2745xb];
      let _0x2745x56 = _0x2745xc.model;
      let _0x2745x4f = _0x2745xc.wanted;
      let _0x2745x5b = _0x2745xc.owner;
      let _0x2745x58 = _0x2745xc.vin;
      let _0x2745x57 = _0x2745xc.plates;
      if (_0x2745x4f.toUpperCase() == "TAK") {
        _0x2745x5a = _0x2745x5a + `${"<tr onclick=\"showVehicle('"}` + _0x2745x58 + `${"')\"><td>"}` + _0x2745x56 + `${'</td><td><span class="table-data-background" style="background-color: rgb(150, 0, 0) !important;">'}` + Translation[0].yes.toUpperCase() + `${'</span></td><td><span class="table-data-background">'}` + _0x2745x5b + `${"</span></td><td>"}` + _0x2745x58 + `${"</td><td>"}` + _0x2745x57 + `${'</td><td><span><i class="fa-solid fa-angle-right"></i></span></td></tr>'}`;
      } else {
        _0x2745x5a = _0x2745x5a + `${"<tr onclick=\"showVehicle('"}` + _0x2745x58 + `${"')\"><td>"}` + _0x2745x56 + `${'</td><td><span class="table-data-background">'}` + Translation[0].no.toUpperCase() + `${'</span></td><td><span class="table-data-background">'}` + _0x2745x5b + `${"</span></td><td>"}` + _0x2745x58 + `${"</td><td>"}` + _0x2745x57 + `${'</td><td><span><i class="fa-solid fa-angle-right"></i></span></td></tr>'}`;
      }
    }
  }
  ;
  _0x2745x5a = _0x2745x5a + "</table>";
  this.document.getElementById("tirex-car-list").innerHTML = _0x2745x5a;
  return;
}
function weaponsAddWeaponList(_0x2745x5d) {
  let _0x2745x5e = "<tr><th>" + Translation[0].model + "</th><th>" + Translation[0].owner + "</th><th>" + Translation[0].serialNumber + "</th><th>" + Translation[0].purchaseDate + "</th></tr>";
  if (_0x2745x5d.length > 0) {
    for (let _0x2745xb in _0x2745x5d) {
      let _0x2745xc = _0x2745x5d[_0x2745xb];
      let _0x2745x56 = _0x2745xc.model;
      let _0x2745x5b = _0x2745xc.name;
      let _0x2745x5f = _0x2745xc.serial_number;
      let _0x2745x60 = _0x2745xc.purchase;
      _0x2745x5e = _0x2745x5e + "<tr><td>" + _0x2745x56 + '</td><td><span class="table-data-background">' + _0x2745x5b + '</span></td><td><span class="table-data-background">' + _0x2745x5f + "</span></td><td>" + _0x2745x60 + "</td></tr>";
    }
  }
  ;
  this.document.getElementById("weapon-evi-table").innerHTML = _0x2745x5e;
  return;
}
function discourseAddDiscourseList(_0x2745x62) {
  let _0x2745x63 = '<table id="discourse-list"><tr><th style="width:30%">' + Translation[0].caseTitle + '</th><th style="width:10%">' + Translation[0].caseNumber + '</th><th style="width:20%">' + Translation[0].editDate + '</th><th style="width:15%">' + Translation[0].author + '</th><th style="width:20%">' + Translation[0].status + '</th><th style="width:5%"></th></tr>';
  if (_0x2745x62.length > 0) {
    for (let _0x2745xb in _0x2745x62) {
      let _0x2745xc = _0x2745x62[_0x2745xb];
      let _0x2745x10 = _0x2745xc.name;
      let _0x2745x49 = _0x2745xc.id;
      let _0x2745x64 = _0x2745xc.edit_date;
      let _0x2745x65 = _0x2745xc.author;
      let _0x2745x35 = _0x2745xc.status;
      if (_0x2745x35 == "true") {
        _0x2745x63 = _0x2745x63 + `${"<tr onclick=\"showDiscourse('"}` + _0x2745x49 + `${"')\"><td>"}` + _0x2745x10 + `${"</td><td>#"}` + _0x2745x49 + `${"</td><td>"}` + _0x2745x64 + `${"</td><td>"}` + _0x2745x65.name + `${'</td><td><span class="patrol-button patrol-valid">'}` + Translation[0].valid + `${'</span></td><td><span><i class="fa-solid fa-angle-right"></i></span></td></tr>'}`;
      } else {
        _0x2745x63 = _0x2745x63 + `${"<tr onclick=\"showDiscourse('"}` + _0x2745x49 + `${"')\"><td>"}` + _0x2745x10 + `${"</td><td>#"}` + _0x2745x49 + `${"</td><td>"}` + _0x2745x64 + `${"</td><td>"}` + _0x2745x65.name + `${'</td><td><span class="patrol-button patrol-invalid">'}` + Translation[0].invalid + `${'</span></td><td><span><i class="fa-solid fa-angle-right"></i></span></td></tr>'}`;
      }
    }
  }
  ;
  _0x2745x63 = _0x2745x63 + "</table>";
  this.document.getElementById("tirex-discourse-list").innerHTML = _0x2745x63;
  return;
}
function annoucementsAddList(_0x2745x67) {
  let _0x2745x68 = "<p>" + Translation[0].newAnnouncements + "</p>";
  if (_0x2745x67.length > 0) {
    for (let _0x2745xb in _0x2745x67) {
      let _0x2745xc = _0x2745x67[_0x2745xb];
      let _0x2745x65 = _0x2745xc.author;
      let _0x2745x49 = _0x2745xc.id;
      let _0x2745x35 = _0x2745xc.status;
      let _0x2745x60 = _0x2745xc.expiry_date;
      let _0x2745x4a = _0x2745xc.content;
      if (_0x2745x35 == "true") {
        _0x2745x35 = Translation[0].active.toUpperCase();
      } else {
        _0x2745x35 = Translation[0].inactive.toUpperCase();
      }
      ;
      _0x2745x68 = _0x2745x68 + '<div class="item announcement-box" style="--width: calc(100% - 100px); --height: auto; background-color:var(--itemcolor); --margin: 5px 25px; --padding: 0px 25px 15px 25px;"><span>#' + _0x2745x49 + '<span style="float:right;">' + _0x2745x65 + '</span></span><p><span style="margin-top:10px;display:inline-block;"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i> ' + Translation[0].expires + ": <span>00:00 " + _0x2745x60 + '</span></span><span style="float:right;background-color:var(--buttoncolor);color:black;margin:0;" class="judgement-button">' + _0x2745x35 + "</span></p><br/>" + _0x2745x4a + "</div>";
    }
  }
  ;
  this.document.getElementById("annoucements-panel").innerHTML = _0x2745x68;
  return;
}
function workersAddWorkerList(_0x2745x6a) {
  let _0x2745x6b = '<table id="discourse-list"><tr><th style="width:30%">' + Translation[0].nameAndSurname + '</th><th style="width:10%">' + Translation[0].grade + '</th><th style="width:20%">' + Translation[0].patrol + '</th><th style="width:15%">' + Translation[0].lastActive + '</th><th style="width:20%">' + Translation[0].timeOnDuty + '</th><th style="width:5%"></th></tr>';
  if (_0x2745x6a.length > 0) {
    for (let _0x2745xb in _0x2745x6a) {
      let _0x2745xc = _0x2745x6a[_0x2745xb];
      let _0x2745x40 = _0x2745xc.ssn;
      let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
      let _0x2745x6c = _0x2745xc.job_grade;
      let _0x2745x33 = _0x2745xc.patrol;
      let _0x2745x6d = _0x2745xc.lastOnDuty;
      let _0x2745x6e = _0x2745xc.dutyTime;
      _0x2745x6b = _0x2745x6b + `${"<tr onclick=\"showWorker('"}` + _0x2745x40 + `${"')\"><td>"}` + _0x2745x10 + `${"</td><td>"}` + _0x2745x6c + `${"</td><td>"}` + _0x2745x33 + `${"</td><td>"}` + _0x2745x6d + `${"</td><td>"}` + _0x2745x6e + `${'</td><td><span><i class="fa-solid fa-angle-right"></i></span></td></tr>'}`;
    }
  }
  ;
  _0x2745x6b = _0x2745x6b + "</table>";
  this.document.getElementById("tirex-worker-list").innerHTML = _0x2745x6b;
  return;
}
function updateGptData(_0x2745xc) {
  if (active == "main") {
    headerNameAndTime = '<span class="tirex-name">' + Translation[0].hellow + ", " + _0x2745xc.name + " - " + _0x2745xc.dutyTime + "</span>";
    $(".tirex-name").text("" + Translation[0].hellow + ", " + _0x2745xc.name + " - " + _0x2745xc.dutyTime);
    this.document.getElementById("annoucement").innerHTML = _0x2745xc.annoucement;
    mainAddFpList(_0x2745xc.officers);
    citizensAddCitizenWanted(_0x2745xc.citizens);
    citizensAddVehicleWanted(_0x2745xc.vehicles);
  } else {
    if (active == "patrol") {
      patrolsAddPatrolList(_0x2745xc.patrols, _0x2745xc.ssn);
      patrolAddDispatchList(_0x2745xc.dispatch);
    } else {
      if (active == "citizens") {
        citizensAddCitizenList(_0x2745xc);
      } else {
        if (active == "vehicles") {
          vehiclesAddVehicleList(_0x2745xc);
        } else {
          if (active == "weapon_evi") {
            weaponsAddWeaponList(_0x2745xc.weaponList);
          } else {
            if (active == "discourse") {
              discourseAddDiscourseList(_0x2745xc);
            } else {
              if (active == "judgement") {} else {
                if (active == "evidence") {} else {
                  if (active == "annoucem") {
                    annoucementsAddList(_0x2745xc);
                  } else {
                    if (active == "workers") {
                      workersAddWorkerList(_0x2745xc);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ;
  return;
}
function openPopup(_0x2745x71, _0x2745x72) {
  document.querySelector("#citizen-note-description").innerHTML = "";
  if (_0x2745x72) {
    var _0x2745x73 = _0x2745x72.parentElement.parentElement.children[1].innerHTML.trim();
    document.querySelector("#citizen-note-description").innerHTML = _0x2745x73;
  }
  ;
  if (_0x2745x71 == "patrol") {
    patrolBox.style.display = "block";
    document.querySelector("#patrol-selected-vehicle").value = "";
    document.querySelector("#patrol-display-number").value = "";
  } else {
    if (_0x2745x71 == "citizen-picture-edit") {
      citizenBg.style.display = "block";
      citizenPictureEdit.style.display = "block";
    } else {
      if (_0x2745x71 == "popup-citizen-wanted") {
        citizenBg.style.display = "block";
        citizenWanted.style.display = "block";
        return;
      } else {
        if (_0x2745x71 == "popup-citizen-description") {
          citizenBg.style.display = "block";
          citizenDescription.style.display = "block";
          return;
        } else {
          if (_0x2745x71 == "popup-citizen-note") {
            citizenBg.style.display = "block";
            citizenNote.style.display = "block";
            return;
          } else {
            if (_0x2745x71 == "popup-vehicle-wanted") {
              vehicleBg.style.display = "block";
              vehicleWanted.style.display = "block";
              return;
            } else {
              if (_0x2745x71 == "popup-vehicle-note") {
                vehicleBg.style.display = "block";
                vehicleNote.style.display = "block";
                return;
              } else {
                if (_0x2745x71 == "popup-vehicle-description") {
                  vehicleBg.style.display = "block";
                  vehicleDescription.style.display = "block";
                  return;
                } else {
                  if (_0x2745x71 == "popup-add-worker") {
                    workerAddPopup.style.display = "block";
                    document.querySelector("#popup-add-worker").style.display = "block";
                    return;
                  } else {
                    if (_0x2745x71 == "popup-worker-description") {
                      workerAddPopup.style.display = "block";
                      document.querySelector("#popup-worker-description").style.display = "block";
                      return;
                    } else {
                      if (_0x2745x71 == "popup-worker-level") {
                        workerAddPopup.style.display = "block";
                        document.querySelector("#popup-worker-level").style.display = "block";
                        return;
                      } else {
                        if (_0x2745x71 == "popup-worker-license") {
                          workerAddPopup.style.display = "block";
                          document.querySelector("#popup-worker-license").style.display = "block";
                          return;
                        } else {
                          if (_0x2745x71 == "popup-worker-crypto") {
                            workerAddPopup.style.display = "block";
                            document.querySelector("#popup-worker-crypto").style.display = "block";
                            return;
                          } else {
                            if (_0x2745x71 == "popup-worker-badge") {
                              workerAddPopup.style.display = "block";
                              document.querySelector("#popup-worker-badge").style.display = "block";
                              return;
                            } else {
                              if (_0x2745x71 == "discourse-picture-edit") {
                                discourseBg.style.display = "block";
                                discoursePictureEdit.style.display = "block";
                              } else {
                                if (_0x2745x71 == "popup-announce-description") {
                                  this.document.getElementById("announcement-description").value = "";
                                  this.document.getElementById("tirex-expiry-days").value = "";
                                  announceBg.style.display = "block";
                                  announceDesc.style.display = "block";
                                } else {
                                  if (_0x2745x71 == "popup-judgement-import") {
                                    judgementBg.style.display = "block";
                                    judgementImport.style.display = "block";
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function closePopup(_0x2745x71) {
  if (_0x2745x71 == "patrol") {
    return patrolBox.style.display = "none";
  } else {
    if (_0x2745x71 == "citizen-picture-edit") {
      citizenBg.style.display = "none";
      citizenPictureEdit.style.display = "none";
      return;
    } else {
      if (_0x2745x71 == "discourse-picture-edit") {
        discourseBg.style.display = "none";
        discoursePictureEdit.style.display = "none";
        return;
      } else {
        if (_0x2745x71 == "popup-citizen-wanted") {
          citizenBg.style.display = "none";
          citizenWanted.style.display = "none";
          return;
        } else {
          if (_0x2745x71 == "popup-citizen-description") {
            citizenBg.style.display = "none";
            citizenDescription.style.display = "none";
            return;
          } else {
            if (_0x2745x71 == "popup-citizen-note") {
              citizenBg.style.display = "none";
              citizenNote.style.display = "none";
              return;
            } else {
              if (_0x2745x71 == "popup-vehicle-wanted") {
                vehicleBg.style.display = "none";
                vehicleWanted.style.display = "none";
                return;
              } else {
                if (_0x2745x71 == "popup-vehicle-note") {
                  vehicleBg.style.display = "none";
                  vehicleNote.style.display = "none";
                  return;
                } else {
                  if (_0x2745x71 == "popup-vehicle-description") {
                    vehicleBg.style.display = "none";
                    vehicleDescription.style.display = "none";
                    return;
                  } else {
                    if (_0x2745x71 == "popup-add-worker") {
                      workerAddPopup.style.display = "none";
                      document.querySelector("#popup-add-worker").style.display = "none";
                      return;
                    } else {
                      if (_0x2745x71 == "popup-worker-description") {
                        workerAddPopup.style.display = "none";
                        document.querySelector("#popup-worker-description").style.display = "none";
                        return;
                      } else {
                        if (_0x2745x71 == "popup-worker-level") {
                          workerAddPopup.style.display = "none";
                          document.querySelector("#popup-worker-level").style.display = "none";
                          return;
                        } else {
                          if (_0x2745x71 == "popup-worker-license") {
                            workerAddPopup.style.display = "none";
                            document.querySelector("#popup-worker-license").style.display = "none";
                            return;
                          } else {
                            if (_0x2745x71 == "popup-worker-crypto") {
                              workerAddPopup.style.display = "none";
                              document.querySelector("#popup-worker-crypto").style.display = "none";
                              return;
                            } else {
                              if (_0x2745x71 == "popup-worker-badge") {
                                workerAddPopup.style.display = "none";
                                document.querySelector("#popup-worker-badge").style.display = "none";
                                return;
                              } else {
                                if (_0x2745x71 == "popup-announce-description") {
                                  announceBg.style.display = "none";
                                  announceDesc.style.display = "none";
                                  return;
                                } else {
                                  if (_0x2745x71 == "popup-judgement-import") {
                                    judgementBg.style.display = "none";
                                    judgementImport.style.display = "none";
                                    return;
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
}
function addFromPopup(_0x2745x71, _0x2745xc) {
  if (_0x2745x71 == "patrol") {
    patrolVeh = document.querySelector("#patrol-selected-vehicle").value;
    patrolNumber = document.querySelector("#patrol-display-number").value;
    let _0x2745x76 = $("#tirex-search-patrol").val();
    let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
    let _0x2745x78 = $("#tirex-gpt-dispatch-search").val();
    let _0x2745x79 = _0x2745x78.replace(/\s+/g, "");
    $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "create", patrolType: patrolVeh, patrolNumber: patrolNumber})).then(_0x2745xc => {
      return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", type2: "search", name: _0x2745x77, name2: _0x2745x79})).then(_0x2745xc => {
        return updateGptData(_0x2745xc);
      });
    });
  } else {
    if (_0x2745x71 == "citizen-picture-edit") {
      let _0x2745x7a = document.querySelector("#citizen-picture-url").value;
      $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "newImage", user: _0x2745xc, image: _0x2745x7a})).then(_0x2745xc => {
        return showCitizen(_0x2745xc);
      });
    } else {
      if (_0x2745x71 == "popup-citizen-wanted") {
        let _0x2745x40 = _0x2745xc;
        let _0x2745x7b = $("#citizen-wanted-number").val();
        let _0x2745x4a = $("#citizen-wanted-description").val();
        let _0x2745x7c = $("#citizen-wanted-duration").val();
        if (!_0x2745x7b) {
          _0x2745x7b = Translation[0].lack;
        }
        ;
        if (!_0x2745x4a) {
          _0x2745x4a = Translation[0].lack;
        }
        ;
        if (!_0x2745x7c) {
          _0x2745x7c = 0;
        }
        ;
        $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "addWanted", user: _0x2745x40, content: _0x2745x4a, case: _0x2745x7b, expiry: _0x2745x7c})).then(_0x2745xc => {
          return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "citizen", user: _0x2745x40})).then(_0x2745xc => {
            return setupCitizenInfo(_0x2745xc);
          });
        });
      } else {
        if (_0x2745x71 == "popup-citizen-note") {
          citizenNoteAction("add", _0x2745xc, "none");
        } else {
          if (_0x2745x71 == "discourse-picture-edit") {
            let _0x2745x7a = document.querySelector("#discourse-picture-url").value;
            discourseAddElement(_0x2745x7a, "none", _0x2745xc);
          } else {
            if (_0x2745x71 == "popup-add-worker") {
              let _0x2745x7d = $("#tirex-workers-add-worker-id").val();
              let _0x2745x7e = this.document.getElementById("tirex-workers-add-worker-grade-list").value;
              let _0x2745x7f = _0x2745x7e.split("-");
              $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "addWorker", player: _0x2745x7d, newJob: _0x2745x7f[0], newGrade: _0x2745x7f[1]})).then(_0x2745xc => {
                return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active})).then(_0x2745xc => {
                  return updateGptData(_0x2745xc);
                });
              });
            } else {
              if (_0x2745x71 == "popup-worker-description") {} else {
                if (_0x2745x71 == "popup-vehicle-wanted") {
                  let _0x2745x58 = _0x2745xc;
                  let _0x2745x7b = $("#vehicle-wanted-number").val();
                  let _0x2745x4a = $("#tirex-vehicle-wanted-description").val();
                  let _0x2745x7c = $("#vehicle-wanted-duration").val();
                  if (!_0x2745x7b) {
                    _0x2745x7b = Translation[0].lack;
                  }
                  ;
                  if (!_0x2745x4a) {
                    _0x2745x4a = Translation[0].lack;
                  }
                  ;
                  if (!_0x2745x7c) {
                    _0x2745x7c = 0;
                  }
                  ;
                  $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "addWanted", user: _0x2745x58, content: _0x2745x4a, case: _0x2745x7b, expiry: _0x2745x7c})).then(_0x2745xc => {
                    return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "vehicle", vehicle: _0x2745x58})).then(_0x2745xc => {
                      return setupVehicleInfo(_0x2745xc);
                    });
                  });
                } else {
                  if (_0x2745x71 == "popup-vehicle-note") {
                    vehicleNoteAction("add", _0x2745xc, "none");
                  } else {
                    if (_0x2745x71 == "popup-vehicle-description") {} else {
                      if (_0x2745x71 == "popup-judgement-import") {
                        let _0x2745x7b = this.document.getElementById("judgement-imported-id").value;
                        let _0x2745x11 = 0;
                        let _0x2745x12 = 0;
                        this.document.getElementById("tirex-judgement-menu-time").value = _0x2745x11;
                        this.document.getElementById("tirex-judgement-menu-bill").value = _0x2745x12;
                        this.document.getElementById("tirex-judgement-menu-case").value = "";
                        this.document.getElementById("tirex-tickets-block-list").innerHTML = `${'<span class="discourse-person-button">'}` + Translation[0].lack + `${"</span>"}`;
                        $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "getCaseJudgement", case: _0x2745x7b})).then(_0x2745x80 => {
                          if (_0x2745x80.length > 0) {
                            let _0x2745x81 = "";
                            judgementsTicketList = [];
                            for (let _0x2745xb in _0x2745x80) {
                              let _0x2745xc = _0x2745x80[_0x2745xb];
                              for (let _0x2745xe in judgementTicketList) {
                                let _0x2745xd = judgementTicketList[_0x2745xe];
                                if (_0x2745xd.categoryName == _0x2745xc.category) {
                                  for (let _0x2745x82 in _0x2745xd.data) {
                                    let _0x2745xf = _0x2745xd.data[_0x2745x82];
                                    if (_0x2745xf.name == _0x2745xc.name) {
                                      for (let _0x2745x83 = 0; _0x2745x83 < _0x2745xc.count; _0x2745x83++) {
                                        _0x2745x11 = _0x2745x11 + _0x2745xf.time;
                                        _0x2745x12 = _0x2745x12 + _0x2745xf.bill;
                                      }
                                    }
                                  }
                                }
                              }
                              ;
                              _0x2745x81 = _0x2745x81 + `${'<span class="discourse-person-button">[ '}` + _0x2745xc.category + `${" ] "}` + _0x2745xc.name + `${" x"}` + _0x2745xc.count + `${"</span>"}`;
                              judgementsTicketList.push({category: _0x2745xc.category, name: _0x2745xc.name, count: _0x2745xc.count});
                            }
                            ;
                            this.document.getElementById("tirex-tickets-block-list").innerHTML = _0x2745x81;
                            this.document.getElementById("tirex-judgement-menu-case").value = _0x2745x7b;
                            this.document.getElementById("tirex-judgement-menu-time").value = _0x2745x11;
                            this.document.getElementById("tirex-judgement-menu-bill").value = _0x2745x12;
                          }
                        });
                      } else {
                        if (_0x2745x71 == "popup-announce-description") {
                          let _0x2745x4a = this.document.getElementById("announcement-description").value;
                          let _0x2745x7c = this.document.getElementById("tirex-expiry-days").value;
                          if (!_0x2745x7c) {
                            _0x2745x7c = 0;
                          }
                          ;
                          $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "addAnnounce", content: _0x2745x4a, days: _0x2745x7c})).then(_0x2745xc => {
                            return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active})).then(_0x2745xc => {
                              return annoucementsAddList(_0x2745xc);
                            });
                          });
                        } else {
                          if (_0x2745x71 == "popup-worker-level") {
                            let _0x2745x7e = this.document.getElementById("tirex-workers-change-worker-grade").value;
                            let _0x2745x7f = _0x2745x7e.split("-");
                            let _0x2745x84 = _0x2745xc;
                            $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "changeGrade", player: _0x2745x84, newGrade: _0x2745x7f[1]})).then(_0x2745xc => {
                              return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "worker", user: _0x2745x84})).then(_0x2745xc => {
                                return setupWorkerInfo(_0x2745xc);
                              });
                            });
                          } else {
                            if (_0x2745x71 == "popup-worker-license") {
                              let _0x2745x85 = this.document.getElementById("tirex-workers-change-worker-license").value;
                              let _0x2745x84 = _0x2745xc;
                              $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "changeLicense", player: _0x2745x84, license: _0x2745x85})).then(_0x2745xc => {
                                return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "worker", user: _0x2745x84})).then(_0x2745xc => {
                                  return setupWorkerInfo(_0x2745xc);
                                });
                              });
                            } else {
                              if (_0x2745x71 == "popup-worker-badge") {
                                let _0x2745x86 = $("#tirex-workers-new-badge").val();
                                let _0x2745x84 = _0x2745xc;
                                $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "changeBadge", player: _0x2745x84, newBadge: _0x2745x86})).then(_0x2745xc => {
                                  return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "worker", user: _0x2745x84})).then(_0x2745xc => {
                                    return setupWorkerInfo(_0x2745xc);
                                  });
                                });
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ;
  return closePopup(_0x2745x71);
}
function menagePatrol(_0x2745x88, _0x2745x42) {
  let _0x2745x76 = $("#tirex-search-patrol").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  let _0x2745x78 = $("#tirex-gpt-dispatch-search").val();
  let _0x2745x79 = _0x2745x78.replace(/\s+/g, "");
  if (_0x2745x88 == "kick") {
    $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: _0x2745x88, player: ssn})).then(_0x2745xc => {
      return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", type2: "search", name: _0x2745x77, name2: _0x2745x79})).then(_0x2745xc => {
        return updateGptData(_0x2745xc);
      });
    });
  } else {
    $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: _0x2745x88, id: _0x2745x42})).then(_0x2745xc => {
      return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", type2: "search", name: _0x2745x77, name2: _0x2745x79})).then(_0x2745xc => {
        return updateGptData(_0x2745xc);
      });
    });
  }
}
function annoucementDelete(_0x2745x72) {
  _0x2745x72.parentElement.remove();
}
function turnSection(_0x2745x71) {
  document.querySelector("#" + active).style.display = "none";
  document.querySelector("#" + _0x2745x71).style.display = "block";
  active = _0x2745x71;
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
  return;
}
function showCase(_0x2745x7b) {
  turnSection("discourse");
  showDiscourse(_0x2745x7b);
}
function deleteCitizenWanted(_0x2745x49, _0x2745x40) {
  $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "deleteWanted", id: _0x2745x49})).then(_0x2745xc => {
    return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "citizen", user: _0x2745x40})).then(_0x2745xc => {
      return setupCitizenInfo(_0x2745xc);
    });
  });
}
function citizenNoteAction(_0x2745x8e, _0x2745x40, _0x2745x49) {
  if (_0x2745x8e == "add") {
    let _0x2745x4a = $("#citizen-note-description").val();
    const _0x2745x8f = document.querySelector("#pill1-citizen");
    $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "addNote", user: _0x2745x40, content: _0x2745x4a, important: _0x2745x8f.checked})).then(_0x2745xc => {
      return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "citizen", user: _0x2745x40})).then(_0x2745xc => {
        return setupCitizenInfo(_0x2745xc);
      });
    });
  } else {
    if (_0x2745x8e == "openAdd") {
      this.document.getElementById("popup-citizen-note").innerHTML = `${"<p>"}` + Translation[0].addNote + `${'</p><div class="toggle-pill"><input type="checkbox" id="pill1-citizen" name="check"><label for="pill1-citizen"></label></div><span class="toggle-pill-label">'}` + Translation[0].important + `${'</span><textarea id="citizen-note-description" placeholder="'}` + Translation[0].typeContent + `${'"></textarea><input type="button" onclick="closePopup(\'popup-citizen-note\')" class="popup-button popup-cancel" style="--width:calc(50% - 5px);" value="'}` + Translation[0].cancel + `${'"><input type="button" onclick="addFromPopup(\'popup-citizen-note\', \''}` + _0x2745x40 + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:0px 0px 0px 10px;"  value="'}` + Translation[0].submit + `${'">'}`;
      openPopup("popup-citizen-note");
    } else {
      if (_0x2745x8e == "edit") {
        closePopup("popup-citizen-note");
        let _0x2745x4a = $("#citizen-note-description").val();
        $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "editNote", id: _0x2745x49, content: _0x2745x4a})).then(_0x2745xc => {
          return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "citizen", user: _0x2745x40})).then(_0x2745xc => {
            return setupCitizenInfo(_0x2745xc);
          });
        });
      } else {
        if (_0x2745x8e == "openEdit") {
          $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "getNote", id: _0x2745x49})).then(_0x2745xc => {
            this.document.getElementById("popup-citizen-note").innerHTML = `${"<p>"}` + Translation[0].editNote + `${'</p><textarea id="citizen-note-description" placeholder="'}` + Translation[0].typeContent + `${'"></textarea><input type="button" onclick="closePopup(\'popup-citizen-note\')" class="popup-button popup-cancel" style="--width:calc(50% - 5px);" value="'}` + Translation[0].cancel + `${'"><input type="button" onclick="citizenNoteAction(\'edit\', \''}` + _0x2745xc.ssn + `${"', '"}` + _0x2745xc.id + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:0px 0px 0px 10px;"  value="'}` + Translation[0].submit + `${'">'}`;
            this.document.getElementById("citizen-note-description").value = _0x2745xc.content;
            openPopup("popup-citizen-note");
          });
        } else {
          if (_0x2745x8e == "delete") {
            $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "deleteNote", id: _0x2745x49})).then(_0x2745xc => {
              return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "citizen", user: _0x2745x40})).then(_0x2745xc => {
                return setupCitizenInfo(_0x2745xc);
              });
            });
          }
        }
      }
    }
  }
}
function setupCitizenInfo(_0x2745x80) {
  let _0x2745xc = _0x2745x80;
  let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
  let _0x2745x91 = _0x2745xc.dateofbirth;
  let _0x2745x40 = _0x2745xc.ssn;
  let _0x2745x50 = "public/img/citizen-picture-none.png";
  if (_0x2745xc.image && _0x2745xc.image.length > 0) {
    _0x2745x50 = _0x2745xc.image;
  }
  ;
  let _0x2745x92 = `${'<div class="item" style="--width:256px; --height:256px; background-color:var(--itemcolor); background: url('}` + _0x2745x50 + `${'); background-size: 100% 100%; --margin: 25px;"><p class="citizen-picture-edit" onclick="openPopup(\'citizen-picture-edit\')"><i class="fa-light fa-pen"></i></p></div><div id="citizen-personal-info" class="item" style="background-color:transparent; --width: calc(100% - 256px - 125px - 10px); --height: 246px; --margin: 25px 0px 0px 50px; --padding:10px;"><span>'}` + Translation[0].nameAndSurname + `${"</span><p>"}` + _0x2745x10 + `${"</p><hr/><span>"}` + Translation[0].dateOfBirth + `${"</span><p>"}` + _0x2745x91 + `${"</p><hr/><span>"}` + Translation[0].socialSecurityNumber + `${"</span><p>"}` + _0x2745x40 + `${"</p><hr/></div>"}`;
  let _0x2745x93 = "";
  let _0x2745x94 = "";
  let _0x2745x95 = "";
  let _0x2745x96 = "";
  if (_0x2745xc.wanted.length > 0) {
    for (let _0x2745xb in _0x2745xc.wanted) {
      let _0x2745xd = _0x2745xc.wanted[_0x2745xb];
      let _0x2745x97 = _0x2745xd.wantedId;
      let _0x2745x4a = _0x2745xd.content;
      let _0x2745x7b = _0x2745xd.case;
      let _0x2745x65 = _0x2745xd.author;
      let _0x2745x98 = _0x2745xd.expiry_date;
      if (_0x2745x7b == Translation[0].lack) {
        _0x2745x93 = _0x2745x93 + `${'<div class="item citizen-wanted-box"  style="--width: calc(100% - 100px); --height: auto; background-color:var(--veryred); --margin: 25px 25px; --padding: 0px 25px 15px 25px;"><div id="header"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i> '}` + Translation[0].expires + `${": <span>00:00 "}` + _0x2745x98 + `${'</span><span style="float:right;">'}` + _0x2745x65 + `${'</span></div><div id="note">'}` + _0x2745x4a + `${'</div><div id="footer"><span id="info">'}` + _0x2745x7b + `${'</span><span id="button" onclick="deleteCitizenWanted(\''}` + _0x2745x97 + `${"', '"}` + _0x2745x40 + `${'\')"><i class="fa-light fa-trash"></i></span></div></div>'}`;
      } else {
        _0x2745x93 = _0x2745x93 + `${'<div class="item citizen-wanted-box"  style="--width: calc(100% - 100px); --height: auto; background-color:var(--veryred); --margin: 25px 25px; --padding: 0px 25px 15px 25px;"><div id="header"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i> '}` + Translation[0].expires + `${": <span>00:00 "}` + _0x2745x98 + `${'</span><span style="float:right;">'}` + _0x2745x65 + `${'</span></div><div id="note">'}` + _0x2745x4a + `${'</div><div id="footer"><span class="onlyCursorHover" id="info" onclick="showCase(\''}` + _0x2745x7b + `${"')\">#"}` + _0x2745x7b + `${'</span><span id="button" onclick="deleteCitizenWanted(\''}` + _0x2745x97 + `${"', '"}` + _0x2745x40 + `${'\')"><i class="fa-light fa-trash"></i></span></div></div>'}`;
      }
    }
    ;
    $("#tirex-citizen-status-nowanted").css("display", "none");
    $("#tirex-citizen-status-wanted").css("display", "block");
  } else {
    $("#tirex-citizen-status-wanted").css("display", "none");
    $("#tirex-citizen-status-nowanted").css("display", "block");
  }
  ;
  if (_0x2745xc.vehicles.length > 0) {
    for (let _0x2745xb in _0x2745xc.vehicles) {
      let _0x2745xd = _0x2745xc.vehicles[_0x2745xb];
      let _0x2745x56 = _0x2745xd.model;
      let _0x2745x58 = _0x2745xd.vin;
      let _0x2745x57 = _0x2745xd.plates;
      let _0x2745x99 = _0x2745xd.wanted;
      if (_0x2745x99.length > 0) {
        _0x2745x96 = _0x2745x96 + `${'<div class="item person-car" style="--width: calc(100% - 100px); --height: 200px; background-color: var(--itemcolor); --margin: 0px 25px; --padding: 0px 25px;"><p>'}` + _0x2745x56 + `${"</p><hr/><span>Numer VIN: <strong>"}` + _0x2745x58 + `${"</strong></span><hr/><span>Tablica rejestracyjna: <strong> "}` + _0x2745x57 + `${"</strong></span><hr/><span>Status:"}`;
        for (let _0x2745xe in _0x2745x99) {
          let _0x2745x97 = _0x2745x99[_0x2745xe];
          _0x2745x96 = _0x2745x96 + `${'<span class="citizen-button citizen-button-status" onclick="showVehicle(\''}` + _0x2745x58 + `${"', 'vehicles')\" style=\"background-color: rgb(150,0,0) !important\">Poszukiwanie #"}` + _0x2745x97 + `${"</span>"}`;
        }
        ;
        _0x2745x96 = _0x2745x96 + `${"</span></div>"}`;
      } else {
        _0x2745x96 = _0x2745x96 + `${'<div class="item person-car" style="--width: calc(100% - 100px); --height: 200px; background-color: var(--itemcolor); --margin: 0px 25px; --padding: 0px 25px;"><p>'}` + _0x2745x56 + `${"</p><hr/><span>Numer VIN: <strong>"}` + _0x2745x58 + `${"</strong></span><hr/><span>Tablica rejestracyjna: <strong> "}` + _0x2745x57 + `${'</strong></span><hr/><span>Status: <span class="citizen-button citizen-button-status">Brak Poszukiwań</span></span></div>'}`;
      }
    }
    ;
    $(".tirex-citizen-cars-hide").css("display", "none");
    $(".tirex-citizen-cars-block").css("display", "block");
  } else {
    $(".tirex-citizen-cars-block").css("display", "none");
    $(".tirex-citizen-cars-hide").css("display", "block");
  }
  ;
  if (_0x2745xc.history.length > 0) {
    for (let _0x2745xb in _0x2745xc.history) {
      let _0x2745xd = _0x2745xc.history[_0x2745xb];
      let _0x2745x49 = _0x2745xd.id;
      let _0x2745x12 = _0x2745xd.bill;
      let _0x2745x11 = _0x2745xd.time;
      let _0x2745x9a = _0x2745xd.create_time;
      let _0x2745x9b = _0x2745xd.create_date;
      let _0x2745x65 = _0x2745xd.author;
      let _0x2745x9c = _0x2745xd.reason;
      _0x2745x94 = _0x2745x94 + `${'<div class="citizen-ticket-box"><div><span style="float:left;">#'}` + _0x2745x49 + `${'</span><span style="float:right;">'}` + _0x2745x65 + `${'</span></div><br/><div style="margin: 5px 0px;"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i>'}` + _0x2745x9a + `${" "}` + _0x2745x9b + `${"&nbsp;&nbsp;$"}` + _0x2745x12 + `${" | "}` + _0x2745x11 + `${" msc.</div>"}`;
      for (let _0x2745xe in _0x2745x9c) {
        let _0x2745xf = _0x2745x9c[_0x2745xe];
        _0x2745x94 = _0x2745x94 + `${'<div class="citizen-button citizen-button-status" style="margin:0; cursor: default !important;">[ '}` + _0x2745xf.category + `${" ] "}` + _0x2745xf.name + `${" x"}` + _0x2745xf.count + `${"</div>"}`;
      }
      ;
      _0x2745x94 = _0x2745x94 + `${"</div>"}`;
    }
    ;
    if (_0x2745xc.history.length > 3) {
      $("#tirex-citizen-history-button").css("display", "block");
    } else {
      $("#tirex-citizen-history-button").css("display", "none");
    }
  } else {
    $("#tirex-citizen-history-button").css("display", "none");
  }
  ;
  if (_0x2745xc.notes.length > 0) {
    for (let _0x2745xb in _0x2745xc.notes) {
      let _0x2745xd = _0x2745xc.notes[_0x2745xb];
      let _0x2745x49 = _0x2745xd.id;
      let _0x2745x8f = _0x2745xd.important;
      let _0x2745x4a = _0x2745xd.content;
      let _0x2745x9a = _0x2745xd.create_time;
      let _0x2745x9b = _0x2745xd.create_date;
      let _0x2745x65 = _0x2745xd.author;
      if (_0x2745x8f == "true") {
        _0x2745x95 = _0x2745x95 + `${'<div class="item citizen-wanted-box"  style="--width: calc(100% - 100px); --height: auto; background-color:var(--veryred); --margin: 10px 25px; --padding: 0px 25px 15px 25px;"><div id="header"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i><span>'}` + _0x2745x9a + `${" "}` + _0x2745x9b + `${'</span><span style="float:right;">'}` + _0x2745x65 + `${'</span></div><div id="note">'}` + _0x2745x4a + `${'</div><div id="footer"><span id="del-note" class="citizen-button citizen-button-status" style="margin:0;" onclick="citizenNoteAction(\'delete\', \''}` + _0x2745x40 + `${"', '"}` + _0x2745x49 + `${'\')">Usuń</span><span id="edit-note" class="citizen-button citizen-button-status" onclick="citizenNoteAction(\'openEdit\', \''}` + _0x2745x40 + `${"', '"}` + _0x2745x49 + `${"')\">Edytuj notatkę</span></div></div>"}`;
      } else {
        _0x2745x95 = _0x2745x95 + `${'<div class="item citizen-wanted-box"  style="--width: calc(100% - 100px); --height: auto; background-color:var(--itemcolor); --margin: 10px 25px; --padding: 0px 25px 15px 25px;"><div id="header"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i><span>'}` + _0x2745x9a + `${" "}` + _0x2745x9b + `${'</span><span style="float:right;">'}` + _0x2745x65 + `${'</span></div><div id="note">'}` + _0x2745x4a + `${'</div><div id="footer"><span id="del-note" class="citizen-button citizen-button-status" style="margin:0;" onclick="citizenNoteAction(\'delete\', \''}` + _0x2745x40 + `${"', '"}` + _0x2745x49 + `${'\')">Usuń</span><span id="edit-note" class="citizen-button citizen-button-status" onclick="citizenNoteAction(\'openEdit\', \''}` + _0x2745x40 + `${"', '"}` + _0x2745x49 + `${"')\">Edytuj notatkę</span></div></div>"}`;
      }
    }
    ;
    if (_0x2745xc.notes.length > 1) {
      $("#tirex-citizen-notes-button").css("display", "block");
    } else {
      $("#tirex-citizen-notes-button").css("display", "none");
    }
  } else {
    $("#tirex-citizen-notes-button").css("display", "none");
  }
  ;
  this.document.getElementById("tirex-citizen-info-header").innerHTML = _0x2745x92;
  this.document.getElementById("tirex-citizen-status-wanted").innerHTML = _0x2745x93;
  this.document.getElementById("vehicle-list").innerHTML = _0x2745x96;
  this.document.getElementById("citizen-ticket-list").innerHTML = _0x2745x94;
  this.document.getElementById("citizen-note-list").innerHTML = _0x2745x95;
  this.document.querySelector(".citizen-header").innerHTML = "<span id='citizen-previous' onclick='hideCitizen(this)'><i class='fa-solid fa-angle-left'></i></span>" + Translation[0].citizen + ": <span>" + _0x2745x10 + "</span><button onclick=\"addUserToJudgements('" + _0x2745x40 + "', '" + _0x2745x10 + "')\"><i class='fa-regular fa-circle-plus'></i>&nbsp;&nbsp;&nbsp;" + Translation[0].addJudgment + "</button>";
  this.document.getElementById("citizen-settings").innerHTML = `${'<br/><span class="citizen-button citizen-button-status" onclick="openPopup(\'popup-citizen-wanted\')">'}` + Translation[0].addWanted + `${'</span><!-- <span class="citizen-button citizen-button-status" onclick="openPopup(\'popup-citizen-description\')" style="margin-left:0;">Edytuj komentarz</span> --><span class="citizen-button citizen-button-status" onclick="citizenNoteAction(\'openAdd\', \''}` + _0x2745x40 + `${'\')" style="margin-left:0;">'}` + Translation[0].addNote + `${'</span><!-- <span class="citizen-button citizen-button-status" onclick="turnSection(\'judgement\')" style="margin-left:0;">'}` + Translation[0].addJudgment + `${"</span> --><br/><br/>"}`;
  this.document.getElementById("popup-citizen-wanted").innerHTML = `${"<p>"}` + Translation[0].addNewWanted + `${'</p><input type="number" id="citizen-wanted-number" placeholder="'}` + Translation[0].enterCaseNumber + `${" ("}` + Translation[0].optional + `${')"><textarea id="citizen-wanted-description" placeholder="'}` + Translation[0].content + `${'"></textarea><input type="number" id="citizen-wanted-duration" placeholder="'}` + Translation[0].numberOfDaysOfSearching + `${'"><input type="button" onclick="closePopup(\'popup-citizen-wanted\')" class="popup-button popup-cancel" style="--width:calc(50% - 5px);" value="'}` + Translation[0].cancel + `${'"><input type="button" onclick="addFromPopup(\'popup-citizen-wanted\', \''}` + _0x2745x40 + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:0px 0px 0px 10px;"  value="'}` + Translation[0].submit + `${'">'}`;
  this.document.getElementById("popup-citizen-note").innerHTML = `${"<p>"}` + Translation[0].addNote + `${'</p><div class="toggle-pill"><input type="checkbox" id="pill1-citizen" name="check"><label for="pill1-citizen"></label></div><span class="toggle-pill-label">'}` + Translation[0].important + `${'</span><textarea id="citizen-note-description" placeholder="'}` + Translation[0].typeContent + `${'"></textarea><input type="button" onclick="closePopup(\'popup-citizen-note\')" class="popup-button popup-cancel" style="--width:calc(50% - 5px);" value="'}` + Translation[0].cancel + `${'"><input type="button" onclick="addFromPopup(\'popup-citizen-note\', \''}` + _0x2745x40 + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:0px 0px 0px 10px;"  value="'}` + Translation[0].submit + `${'">'}`;
  return;
}
function deleteVehicleWanted(_0x2745x49, _0x2745x58) {
  $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "deleteWanted", id: _0x2745x49})).then(_0x2745xc => {
    return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "vehicle", vehicle: _0x2745x58})).then(_0x2745xc => {
      return setupVehicleInfo(_0x2745xc);
    });
  });
}
function vehicleNoteAction(_0x2745x8e, _0x2745x58, _0x2745x49) {
  if (_0x2745x8e == "add") {
    let _0x2745x4a = $("#vehicle-note-description").val();
    const _0x2745x8f = document.querySelector("#pill1-vehicle");
    $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "addNote", vin: _0x2745x58, important: _0x2745x8f, content: _0x2745x4a})).then(_0x2745xc => {
      return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "vehicle", vehicle: _0x2745x58})).then(_0x2745xc => {
        return setupVehicleInfo(_0x2745xc);
      });
    });
  } else {
    if (_0x2745x8e == "openAdd") {
      this.document.getElementById("popup-vehicle-note").innerHTML = `${"<p>"}` + Translation[0].addNote + `${'</p><div class="toggle-pill"><input type="checkbox" id="pill1-vehicle" name="check"><label for="pill1-vehicle"></label></div><span class="toggle-pill-label">'}` + Translation[0].important + `${'</span><textarea id="vehicle-note-description" placeholder="'}` + Translation[0].typeContent + `${'"></textarea><input type="button" onclick="closePopup(\'popup-vehicle-note\')" class="popup-button popup-cancel" style="--width:calc(50% - 5px);" value="'}` + Translation[0].cancel + `${'"><input type="button" onclick="addFromPopup(\'popup-vehicle-note\', \''}` + _0x2745x58 + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:0px 0px 0px 10px;"  value="'}` + Translation[0].submit + `${'">'}`;
      openPopup("popup-vehicle-note");
    } else {
      if (_0x2745x8e == "edit") {
        closePopup("popup-vehicle-note");
        let _0x2745x4a = $("#vehicle-note-description").val();
        $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "editNote", id: _0x2745x49, content: _0x2745x4a})).then(_0x2745xc => {
          return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "vehicle", vehicle: _0x2745x58})).then(_0x2745xc => {
            return setupVehicleInfo(_0x2745xc);
          });
        });
      } else {
        if (_0x2745x8e == "openEdit") {
          $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "getNote", id: _0x2745x49})).then(_0x2745xc => {
            this.document.getElementById("popup-vehicle-note").innerHTML = `${"<p>"}` + Translation[0].editNote + `${'</p><textarea id="vehicle-note-description" placeholder="'}` + Translation[0].typeContent + `${'"></textarea><input type="button" onclick="closePopup(\'popup-vehicle-note\')" class="popup-button popup-cancel" style="--width:calc(50% - 5px);" value="'}` + Translation[0].cancel + `${'"><input type="button" onclick="vehicleNoteAction(\'edit\', \''}` + _0x2745xc.vin + `${"', '"}` + _0x2745xc.id + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:0px 0px 0px 10px;"  value="'}` + Translation[0].submit + `${'">'}`;
            this.document.getElementById("vehicle-note-description").value = _0x2745xc.content;
            openPopup("popup-vehicle-note");
          });
        } else {
          if (_0x2745x8e == "delete") {
            $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "deleteNote", id: _0x2745x49})).then(_0x2745xc => {
              return $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "vehicle", vehicle: _0x2745x58})).then(_0x2745xc => {
                return setupVehicleInfo(_0x2745xc);
              });
            });
          }
        }
      }
    }
  }
}
function setupVehicleInfo(_0x2745x80) {
  let _0x2745xc = _0x2745x80[0];
  let _0x2745x56 = _0x2745xc.model;
  let _0x2745x58 = _0x2745xc.vin;
  let _0x2745x57 = _0x2745xc.plate;
  let _0x2745x5b = _0x2745xc.ssn;
  let _0x2745xa0 = _0x2745xc.cossn;
  let _0x2745xa1 = _0x2745xc.ownerName;
  let _0x2745xa2 = _0x2745xc.coownerName;
  let _0x2745x92 = "";
  let _0x2745x93 = "";
  let _0x2745x95 = "";
  if (_0x2745xa0 && _0x2745xa2) {
    _0x2745x92 = _0x2745x92 + `${'<div id="left"><span>'}` + Translation[0].model + `${"</span><p>"}` + _0x2745x56 + `${"</p><hr/><span>"}` + Translation[0].owner + `${'</span><p><span class="citizen-button citizen-button-status" onclick="showCitizen(\''}` + _0x2745x5b + `${"', 'citizens')\" style=\"margin-left:0;\">"}` + _0x2745xa1 + `${"</span></p><hr/><span>"}` + Translation[0].coowner + `${'</span><p><span class="citizen-button citizen-button-status" onclick="showCitizen(\''}` + _0x2745xa0 + `${"', 'citizens')\" style=\"margin-left:0;\">"}` + _0x2745xa2 + `${"</span></p><hr/></div>"}`;
  } else {
    _0x2745x92 = _0x2745x92 + `${'<div id="left"><span>'}` + Translation[0].model + `${"</span><p>"}` + _0x2745x56 + `${"</p><hr/><span>"}` + Translation[0].owner + `${'</span><p><span class="citizen-button citizen-button-status" onclick="showCitizen(\''}` + _0x2745x5b + `${"', 'citizens')\" style=\"margin-left:0;\">"}` + _0x2745xa1 + `${"</span></p><hr/><span>"}` + Translation[0].coowner + `${'</span><p><span class="citizen-button citizen-button-status" style="margin-left:0; cursor:default !important;">'}` + Translation[0].lack + `${"</span></p><hr/></div>"}`;
  }
  ;
  _0x2745x92 = _0x2745x92 + `${'<div id="right"><span>'}` + Translation[0].vinNumber + `${"</span><p>"}` + _0x2745x58 + `${"</p><hr/><span>"}` + Translation[0].carPlate + `${"</span><p>"}` + _0x2745x57 + `${"</p><hr/></div>"}`;
  if (_0x2745xc.wanted.length > 0) {
    for (let _0x2745xb in _0x2745xc.wanted) {
      let _0x2745xd = _0x2745xc.wanted[_0x2745xb];
      let _0x2745x97 = _0x2745xd.wantedId;
      let _0x2745x4a = _0x2745xd.content;
      let _0x2745x7b = _0x2745xd.case;
      let _0x2745x65 = _0x2745xd.author;
      let _0x2745x98 = _0x2745xd.expiry_date;
      if (_0x2745x7b == Translation[0].lack) {
        _0x2745x93 = _0x2745x93 + `${'<div class="item citizen-wanted-box"  style="--width: calc(100% - 100px); --height: auto; background-color:var(--veryred); --margin: 25px 25px; --padding: 0px 25px 15px 25px;"><div id="header"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i> '}` + Translation[0].expires + `${": <span>00:00 "}` + _0x2745x98 + `${'</span><span style="float:right;">'}` + _0x2745x65 + `${'</span></div><div id="note">'}` + _0x2745x4a + `${'</div><div id="footer"><span id="info">'}` + _0x2745x7b + `${'</span><span id="button" onclick="deleteVehicleWanted(\''}` + _0x2745x97 + `${"', '"}` + _0x2745x58 + `${'\')"><i class="fa-light fa-trash"></i></span></div></div>'}`;
      } else {
        _0x2745x93 = _0x2745x93 + `${'<div class="item citizen-wanted-box"  style="--width: calc(100% - 100px); --height: auto; background-color:var(--veryred); --margin: 25px 25px; --padding: 0px 25px 15px 25px;"><div id="header"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i> '}` + Translation[0].expires + `${": <span>00:00 "}` + _0x2745x98 + `${'</span><span style="float:right;">'}` + _0x2745x65 + `${'</span></div><div id="note">'}` + _0x2745x4a + `${'</div><div class="onlyCursorHover" id="footer" onclick="showCase(\''}` + _0x2745x7b + `${'\')"><span id="info">#'}` + _0x2745x7b + `${'</span><span id="button" onclick="deleteVehicleWanted(\''}` + _0x2745x97 + `${"', '"}` + _0x2745x58 + `${'\')"><i class="fa-light fa-trash"></i></span></div></div>'}`;
      }
    }
    ;
    $("#tirex-vehicle-status-nowanted").css("display", "none");
    $("#tirex-vehicle-status-wanted").css("display", "block");
  } else {
    $("#tirex-vehicle-status-wanted").css("display", "none");
    $("#tirex-vehicle-status-nowanted").css("display", "block");
  }
  ;
  if (_0x2745xc.notes.length > 0) {
    for (let _0x2745xb in _0x2745xc.notes) {
      let _0x2745xd = _0x2745xc.notes[_0x2745xb];
      let _0x2745x49 = _0x2745xd.id;
      let _0x2745x8f = _0x2745xd.important;
      let _0x2745x4a = _0x2745xd.content;
      let _0x2745x9a = _0x2745xd.create_time;
      let _0x2745x9b = _0x2745xd.create_date;
      let _0x2745x65 = _0x2745xd.author;
      if (_0x2745x8f == "true") {
        _0x2745x95 = _0x2745x95 + `${'<div class="item citizen-wanted-box"  style="--width: calc(100% - 100px); --height: auto; background-color:var(--veryred); --margin: 10px 25px; --padding: 0px 25px 15px 25px;"><div id="header"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i><span>'}` + _0x2745x9a + `${" "}` + _0x2745x9b + `${'</span><span style="float:right;">'}` + _0x2745x65 + `${'</span></div><div id="note">'}` + _0x2745x4a + `${'</div><div id="footer"><span id="del-note" class="citizen-button citizen-button-status" style="margin:0;" onclick="vehicleNoteAction(\'delete\', \''}` + _0x2745x58 + `${"', '"}` + _0x2745x49 + `${"')\">"}` + Translation[0].delete + `${'</span><span id="edit-note" class="citizen-button citizen-button-status" onclick="vehicleNoteAction(\'openEdit\', \''}` + _0x2745x58 + `${"', '"}` + _0x2745x49 + `${"')\">"}` + Translation[0].editNote + `${"</span></div></div>"}`;
      } else {
        _0x2745x95 = _0x2745x95 + `${'<div class="item citizen-wanted-box"  style="--width: calc(100% - 100px); --height: auto; background-color:var(--itemcolor); --margin: 10px 25px; --padding: 0px 25px 15px 25px;"><div id="header"><i style="margin:0px 10px 0px 0px;" class="fa-light fa-calendar"></i><span>'}` + _0x2745x9a + `${" "}` + _0x2745x9b + `${'</span><span style="float:right;">'}` + _0x2745x65 + `${'</span></div><div id="note">'}` + _0x2745x4a + `${'</div><div id="footer"><span id="del-note" class="citizen-button citizen-button-status" style="margin:0;" onclick="vehicleNoteAction(\'delete\', \''}` + _0x2745x58 + `${"', '"}` + _0x2745x49 + `${"')\">"}` + Translation[0].delete + `${'</span><span id="edit-note" class="citizen-button citizen-button-status" onclick="vehicleNoteAction(\'openEdit\', \''}` + _0x2745x58 + `${"', '"}` + _0x2745x49 + `${"')\">"}` + Translation[0].editNote + `${"</span></div></div>"}`;
      }
    }
    ;
    if (_0x2745xc.notes.length > 1) {
      $("#tirex-vehicle-notes-button").css("display", "block");
    } else {
      $("#tirex-vehicle-notes-button").css("display", "none");
    }
  } else {
    $("#tirex-vehicle-notes-button").css("display", "none");
  }
  ;
  this.document.getElementById("tirex-vehicle-status-wanted").innerHTML = _0x2745x93;
  this.document.getElementById("vehicle-note-list").innerHTML = _0x2745x95;
  this.document.getElementById("tirex-vehicle-header").innerHTML = _0x2745x92;
  this.document.getElementById("vehicle-settings").innerHTML = `${'<br/><span class="citizen-button citizen-button-status" style="margin-left:0;" onclick="openPopup(\'popup-vehicle-wanted\')">'}` + Translation[0].addWanted + `${"</span><span class=\"citizen-button citizen-button-status\" onclick=\"vehicleNoteAction('openAdd', '"}` + _0x2745x58 + `${'\')" style="margin-left:0;">'}` + Translation[0].addNote + `${"</span><br/><br/>"}`;
  this.document.getElementById("popup-vehicle-wanted").innerHTML = `${"<p>"}` + Translation[0].addNewWanted + `${'</p><input type="text" id="vehicle-wanted-number" placeholder="'}` + Translation[0].enterCaseNumber + `${" ("}` + Translation[0].optional + `${')"><textarea id="tirex-vehicle-wanted-description" placeholder="'}` + Translation[0].content + `${'"></textarea><input type="number" id="vehicle-wanted-duration" placeholder="'}` + Translation[0].numberOfDaysOfSearching + `${'"><input type="button" onclick="closePopup(\'popup-vehicle-wanted\')" class="popup-button popup-cancel" style="--width:calc(50% - 5px);" value="'}` + Translation[0].cancel + `${'"><input type="button" onclick="addFromPopup(\'popup-vehicle-wanted\', \''}` + _0x2745x58 + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:0px 0px 0px 10px;"  value="'}` + Translation[0].submit + `${'">'}`;
  return;
}
function showCitizen(_0x2745xc, _0x2745xd) {
  this.document.getElementById("tirex-search-citizen").value = "";
  if (_0x2745xd) {
    turnSection(_0x2745xd);
    $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "citizen", user: _0x2745xc})).then(_0x2745xc => {
      return setupCitizenInfo(_0x2745xc);
    });
    this.document.getElementById("popup-citizen-picture-edit").innerHTML = `${"<p>"}` + Translation[0].provideUrlLinkToPhoto + `${'</p><input type="text" id="citizen-picture-url"><input type="button" onclick="closePopup(\'citizen-picture-edit\')" class="popup-button popup-cancel" style="--width:calc(50% - 5px);" value="'}` + Translation[0].cancel + `${'"><input type="button" onclick="addFromPopup(\'citizen-picture-edit\', \''}` + _0x2745xc + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:0px 0px 0px 10px;"  value="'}` + Translation[0].submit + `${'">'}`;
    document.querySelector("#citizen-search-content").style.display = "none";
    document.querySelector("#citizen-more-info").style.display = "block";
  } else {
    $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "citizen", user: _0x2745xc})).then(_0x2745xc => {
      return setupCitizenInfo(_0x2745xc);
    });
    this.document.getElementById("popup-citizen-picture-edit").innerHTML = `${"<p>"}` + Translation[0].provideUrlLinkToPhoto + `${'</p><input type="text" id="citizen-picture-url"><input type="button" onclick="closePopup(\'citizen-picture-edit\')" class="popup-button popup-cancel" style="--width:calc(50% - 5px);" value="'}` + Translation[0].cancel + `${'"><input type="button" onclick="addFromPopup(\'citizen-picture-edit\', \''}` + _0x2745xc + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:0px 0px 0px 10px;"  value="'}` + Translation[0].submit + `${'">'}`;
    document.querySelector("#citizen-search-content").style.display = "none";
    document.querySelector("#citizen-more-info").style.display = "block";
  }
}
function hideCitizen(_0x2745x71) {
  document.querySelector("#citizen-search-content").style.display = "block";
  document.querySelector("#citizen-more-info").style.display = "none";
  document.querySelector(".citizen-header").innerHTML = headerNameAndTime;
}
function setupWorkerInfo(_0x2745x80) {
  let _0x2745xa6 = "";
  let _0x2745xc = _0x2745x80;
  let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
  let _0x2745x91 = _0x2745xc.dateofbirth;
  let _0x2745x33 = _0x2745xc.patrol;
  let _0x2745xa7 = _0x2745xc.ssn;
  let _0x2745x6c = _0x2745xc.job_grade;
  let _0x2745x36 = _0x2745xc.badge;
  let _0x2745x6e = _0x2745xc.dutyTime;
  let _0x2745xa8 = _0x2745xc.licens;
  let _0x2745xa9 = "";
  if (_0x2745xa8.length > 0) {
    for (let _0x2745xb in _0x2745xa8) {
      let _0x2745xaa = _0x2745xa8[_0x2745xb];
      let _0x2745x10 = _0x2745xaa.name;
      if (_0x2745xb == 0) {
        _0x2745xa9 = _0x2745xa9 + _0x2745x10;
      } else {
        _0x2745xa9 = _0x2745xa9 + ", " + _0x2745x10;
      }
    }
  } else {
    _0x2745xa9 = "Brak";
  }
  ;
  _0x2745xa6 = _0x2745xa6 + '<div id="left"><span>' + Translation[0].nameAndSurname + "</span><p>" + _0x2745x10 + "</p><hr/><span>" + Translation[0].patrol + "</span><p>" + _0x2745x33 + "</p><hr/><span>" + Translation[0].grade + "</span><p>" + _0x2745x6c + "</p><hr/><span>" + Translation[0].timeOnDuty + "</span><p>" + _0x2745x6e + "</p><hr/><span>" + Translation[0].licenses + "</span><p>" + _0x2745xa9 + "</p></div>";
  _0x2745xa6 = _0x2745xa6 + '<div id="right"><span>' + Translation[0].dateOfBirth + "</span><p>" + _0x2745x91 + "</p><hr/><span>" + Translation[0].socialSecurityNumber + "</span><p>" + _0x2745xa7 + "</p><hr/><span>" + Translation[0].badgeNumber + "</span><p>" + _0x2745x36 + "</p><hr/></div>";
  _0x2745xa6 = _0x2745xa6 + "<hr/><br/>";
  _0x2745xa6 = _0x2745xa6 + `${'<span class="citizen-button citizen-button-status" style="margin-left:0;" onclick="openPopup(\'popup-worker-level\')">'}` + Translation[0].changeGrade + `${'</span><span class="citizen-button citizen-button-status" style="margin-left:0;" onclick="openPopup(\'popup-worker-license\')">'}` + Translation[0].manageLicense + `${'</span><span class="citizen-button citizen-button-status" style="margin-left:0;" onclick="openPopup(\'popup-worker-badge\')">'}` + Translation[0].manageGrade + `${"</span>"}`;
  this.document.getElementById("worker-details").innerHTML = _0x2745xa6;
  this.document.getElementById("tirex-workers-level-button").innerHTML = `${"<input type=\"button\" onclick=\"addFromPopup('popup-worker-level', '"}` + _0x2745xa7 + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:-35px 0px 0px 130px;"  value="'}` + Translation[0].submit + `${'">'}`;
  this.document.getElementById("tirex-workers-license-button").innerHTML = `${"<input type=\"button\" onclick=\"addFromPopup('popup-worker-license', '"}` + _0x2745xa7 + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:-35px 0px 0px 130px;"  value="'}` + Translation[0].submit + `${'">'}`;
  this.document.getElementById("tirex-workers-badge-button").innerHTML = `${"<input type=\"button\" onclick=\"addFromPopup('popup-worker-badge', '"}` + _0x2745xa7 + `${'\')" class="popup-button popup-confirm" style="--width:calc(50% - 5px);--margin:-35px 0px 0px 130px;"  value="'}` + Translation[0].submit + `${'">'}`;
  return;
}
function showWorker(_0x2745xc) {
  this.document.getElementById("tirex-search-worker").value = "";
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "worker", user: _0x2745xc})).then(_0x2745xc => {
    return setupWorkerInfo(_0x2745xc);
  });
  document.querySelector("#workers-search-box").style.display = "none";
  document.querySelector("#worker-details").style.display = "block";
  document.querySelector(".worker-header").innerHTML = "<span id='citizen-previous' onclick='hideWorker(this)'><i class='fa-solid fa-angle-left'></i></span>" + headerNameAndTime;
}
function hideWorker(_0x2745x71) {
  document.querySelector("#workers-search-box").style.display = "block";
  document.querySelector("#worker-details").style.display = "none";
  document.querySelector(".worker-header").innerHTML = headerNameAndTime + '<button onclick="openPopup(\'popup-add-worker\')"><i class="fa-regular fa-circle-plus"></i>&nbsp;&nbsp;&nbsp;' + Translation[0].addWorker + "</button>";
}
function setupDiscourseInfo(_0x2745x80) {
  discourseCitizensList = [];
  discourseOfficersList = [];
  discourseVehiclesList = [];
  discourseImagesList = [];
  let _0x2745x49 = _0x2745x80.id;
  let _0x2745x10 = _0x2745x80.name;
  let _0x2745x35 = _0x2745x80.status;
  var _0x2745x4d = _0x2745x80.citizens;
  var _0x2745x30 = _0x2745x80.officers;
  var _0x2745x54 = _0x2745x80.vehicles;
  var _0x2745xae = _0x2745x80.judgments;
  let _0x2745x4a = _0x2745x80.content;
  var _0x2745xaf = _0x2745x80.images;
  var _0x2745x65 = _0x2745x80.author;
  this.document.getElementById("tirex-discourse-setup-content").value = _0x2745x4a;
  this.document.getElementById("tirex-discourse-citizens-buttons").innerHTML = "";
  this.document.getElementById("tirex-discourse-officers-buttons").innerHTML = "";
  this.document.getElementById("tirex-discourse-vehicles-buttons").innerHTML = "";
  this.document.getElementById("tirex-discurse-load-images-list").innerHTML = "";
  for (let _0x2745xb in _0x2745x4d) {
    let _0x2745xc = _0x2745x4d[_0x2745xb];
    discourseAddElement(_0x2745xc.ssn, _0x2745xc.name, "citizen1");
  }
  ;
  for (let _0x2745xb in _0x2745x30) {
    let _0x2745xc = _0x2745x30[_0x2745xb];
    discourseAddElement(_0x2745xc.ssn, _0x2745xc.name, "officer1");
  }
  ;
  for (let _0x2745xb in _0x2745x54) {
    let _0x2745xc = _0x2745x54[_0x2745xb];
    discourseAddElement(_0x2745xc.vin, _0x2745xc.plate, "vehicle1");
  }
  ;
  for (let _0x2745xb in _0x2745xaf) {
    let _0x2745xc = _0x2745xaf[_0x2745xb];
    discourseAddElement(_0x2745xc.image, "none", "image1");
  }
  ;
  let _0x2745xb0 = "";
  if (_0x2745xae.length > 0) {
    for (let _0x2745xb in _0x2745xae) {
      let _0x2745xc = _0x2745xae[_0x2745xb];
      _0x2745xb0 = _0x2745xb0 + `${'<span class="judgement-button">[ '}` + _0x2745xc.category + `${" ] "}` + _0x2745xc.name + `${" x"}` + _0x2745xc.count + `${"</span>"}`;
    }
  } else {
    _0x2745xb0 = _0x2745xb0 + `${'<span class="judgement-button">'}` + Translation[0].lack + `${"</span>"}`;
  }
  ;
  this.document.getElementById("tirex-judgments-blocks").innerHTML = _0x2745xb0;
  this.document.getElementById("tirex-discourse-title").innerHTML = "<p>" + _0x2745x10 + "</p>";
  this.document.getElementById("tirex-discourse-author-name").innerHTML = "<p>" + _0x2745x65.name + "</p>";
  this.document.getElementById("tirex-discourse-case-id").innerHTML = "<p>#" + _0x2745x49 + "</p>";
  if (_0x2745x35 == "true") {
    this.document.getElementById("tirex-discourse-case-status").innerHTML = `${'<p><span class="patrol-button patrol-valid onlyCursorHover" id="tirex-button-discourse-status" onclick="changeDiscourseStatus(\'dos\')">'}` + Translation[0].valid + `${"</span></p>"}`;
  } else {
    this.document.getElementById("tirex-discourse-case-status").innerHTML = `${'<p><span class="patrol-button patrol-invalid onlyCursorHover" id="tirex-button-discourse-status" onclick="changeDiscourseStatus(\'dos\')">'}` + Translation[0].invalid + `${"</span></p>"}`;
  }
  ;
  this.document.getElementById("tirex-case-buttons-add").innerHTML = `${'<span class="judgement-button" style="background-color:var(--buttoncolor);color:black;cursor:pointer;" onclick="caseJudgements(\'open\', \''}` + _0x2745x49 + `${"')\">"}` + Translation[0].addJudgment + `${"</span>"}`;
}
function showDiscourse(_0x2745xc) {
  let _0x2745x7b = _0x2745xc;
  this.document.getElementById("tirex-search-discourses").value = "";
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "discourse", id: _0x2745x7b})).then(_0x2745xc => {
    return setupDiscourseInfo(_0x2745xc);
  });
  document.querySelector("#discourse-search-box").style.display = "none";
  document.querySelector("#discourse-details").style.display = "block";
  document.querySelector(".discourse-header").innerHTML = "<span id='citizen-previous' onclick='hideDiscourse(this)'><i class='fa-solid fa-angle-left'></i></span>" + headerNameAndTime + `${"<button onclick=\"saveDataInDiscourse('"}` + _0x2745x7b + `${'\')"><i class="fa-regular fa-floppy-disk"></i>&nbsp;&nbsp;&nbsp;'}` + Translation[0].saveChanges + `${"</button>"}`;
  $("#tirex-discourse-button2").css("display", "block");
  $("#tirex-discourse-button1").css("display", "none");
}
function hideDiscourse(_0x2745x71) {
  document.querySelector("#discourse-search-box").style.display = "block";
  document.querySelector("#discourse-details").style.display = "none";
  document.querySelector(".discourse-header").innerHTML = headerNameAndTime;
}
function showVehicle(_0x2745xc, _0x2745xd) {
  this.document.getElementById("tirex-search-cars").value = "";
  if (_0x2745xd) {
    turnSection(_0x2745xd);
    $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "vehicle", vehicle: _0x2745xc})).then(_0x2745xc => {
      return setupVehicleInfo(_0x2745xc);
    });
    document.querySelector("#vehicle-search-box").style.display = "none";
    document.querySelector("#vehicle-details").style.display = "block";
    document.querySelector(".vehicle-header").innerHTML = "<span id='citizen-previous' onclick='hideVehicle(this)'><i class='fa-solid fa-angle-left'></i></span>" + headerNameAndTime;
  } else {
    $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "vehicle", vehicle: _0x2745xc})).then(_0x2745xc => {
      return setupVehicleInfo(_0x2745xc);
    });
    document.querySelector("#vehicle-search-box").style.display = "none";
    document.querySelector("#vehicle-details").style.display = "block";
    document.querySelector(".vehicle-header").innerHTML = "<span id='citizen-previous' onclick='hideVehicle(this)'><i class='fa-solid fa-angle-left'></i></span>" + headerNameAndTime;
  }
}
function hideVehicle(_0x2745x71) {
  document.querySelector("#vehicle-search-box").style.display = "block";
  document.querySelector("#vehicle-details").style.display = "none";
  document.querySelector(".vehicle-header").innerHTML = headerNameAndTime;
}
function showEvidence(_0x2745x71) {
  document.querySelector("#evidence-search-box").style.display = "none";
  document.querySelector("#evidence-details").style.display = "block";
  document.querySelector(".evidence-header").innerHTML = "<span id='citizen-previous' onclick='hideEvidence(this)'><i class='fa-solid fa-angle-left'></i></span><span>Dowód nr #00</b></span>";
}
function hideEvidence(_0x2745x71) {
  document.querySelector("#evidence-search-box").style.display = "block";
  document.querySelector("#evidence-details").style.display = "none";
  document.querySelector(".evidence-header").innerHTML = headerNameAndTime;
}
function toggleVehicleInfo(_0x2745x71, _0x2745xb8, _0x2745xb9) {
  if (_0x2745xb8) {
    if (_0x2745xb9 == 1) {
      document.querySelector("#vehicle-note-list").style.height = "auto";
      _0x2745x71.setAttribute("value", Translation[0].collapse);
      _0x2745x71.setAttribute("onclick", "toggleVehicleInfo(this, false, 1)");
    } else {
      if (_0x2745xb9 == 2) {
        document.querySelector("#vehicle-discourse-list").style.height = "auto";
        _0x2745x71.setAttribute("value", Translation[0].collapse);
        _0x2745x71.setAttribute("onclick", "toggleVehicleInfo(this, false, 2)");
      }
    }
  } else {
    if (_0x2745xb9 == 1) {
      document.querySelector("#vehicle-note-list").style.height = "150px";
      _0x2745x71.setAttribute("value", Translation[0].expand);
      _0x2745x71.setAttribute("onclick", "toggleVehicleInfo(this, true, 1)");
    } else {
      if (_0x2745xb9 == 2) {
        document.querySelector("#vehicle-discourse-list").style.height = "150px";
        _0x2745x71.setAttribute("value", Translation[0].expand);
        _0x2745x71.setAttribute("onclick", "toggleVehicleInfo(this, true, 2)");
      }
    }
  }
}
function togglePlayerVehicles(_0x2745x71, _0x2745xb8, _0x2745xb9) {
  if (_0x2745xb8) {
    if (_0x2745xb9 == 1) {
      document.querySelector("#citizen-ticket-list").style.height = "auto";
      _0x2745x71.setAttribute("value", Translation[0].collapse);
      _0x2745x71.setAttribute("onclick", "togglePlayerVehicles(this, false, 1)");
    } else {
      if (_0x2745xb9 == 2) {
        document.querySelector("#citizen-note-list").style.height = "auto";
        _0x2745x71.setAttribute("value", Translation[0].collapse);
        _0x2745x71.setAttribute("onclick", "togglePlayerVehicles(this, false, 2)");
      } else {
        if (_0x2745xb9 == 3) {
          document.querySelector("#vehicle-list").style.height = "auto";
          _0x2745x71.setAttribute("value", Translation[0].collapse);
          _0x2745x71.setAttribute("onclick", "togglePlayerVehicles(this, false, 3)");
        }
      }
    }
  } else {
    if (_0x2745xb9 == 1) {
      document.querySelector("#citizen-ticket-list").style.height = "150px";
      _0x2745x71.setAttribute("value", Translation[0].expand);
      _0x2745x71.setAttribute("onclick", "togglePlayerVehicles(this, true, 1)");
    } else {
      if (_0x2745xb9 == 2) {
        document.querySelector("#citizen-note-list").style.height = "150px";
        _0x2745x71.setAttribute("value", Translation[0].expand);
        _0x2745x71.setAttribute("onclick", "togglePlayerVehicles(this, true, 2)");
      } else {
        if (_0x2745xb9 == 3) {
          document.querySelector("#vehicle-list").style.height = "150px";
          _0x2745x71.setAttribute("value", Translation[0].expand);
          _0x2745x71.setAttribute("onclick", "togglePlayerVehicles(this, true, 3)");
        }
      }
    }
  }
}
function changeTicketCategory(_0x2745x71, _0x2745x49) {
  activeTicketList.setAttribute("class", "category-button");
  _0x2745x71.setAttribute("class", "category-button-selected");
  activeTicketList = _0x2745x71;
  let _0x2745xa = "";
  for (let _0x2745xb in judgementTicketList[_0x2745x49].data) {
    let _0x2745xc = judgementTicketList[_0x2745x49].data[_0x2745xb];
    let _0x2745x10 = _0x2745xc.name;
    let _0x2745x11 = _0x2745xc.time;
    let _0x2745x12 = _0x2745xc.bill;
    let _0x2745x13 = _0x2745xc.count;
    _0x2745xa = _0x2745xa + `${'<div class="judgement-ticket-box"><p class="ticket-count"><span>'}` + _0x2745x13 + `${'</span><br/><span><i class="fa-light fa-plus" onclick="addAmount(this, \''}` + _0x2745x49 + `${"', '"}` + _0x2745xb + `${'\')"></i><i class="fa-light fa-minus" onclick="decreaseAmount(this, \''}` + _0x2745x49 + `${"', '"}` + _0x2745xb + `${'\')"></i></span></p><div id="icon"><i class="fa-solid fa-circle"></i></div><p class="content"><br/>'}` + _0x2745x10 + `${'<br/><p class="judgement-ticket-amount">'}` + _0x2745x11 + `${" msc.<span>$"}` + _0x2745x12 + `${"</span></p></p></div>"}`;
  }
  ;
  this.document.getElementById("main-ticket-list").innerHTML = _0x2745xa;
}
var moneyAmount = 0;
jailAmount = 0;
function addAmount(_0x2745x71, _0x2745x49, _0x2745xbe) {
  el = _0x2745x71.parentElement.parentElement.children[0];
  el.innerHTML = parseInt(el.innerHTML) + 1;
  judgementTicketList[_0x2745x49].data[_0x2745xbe].count = judgementTicketList[_0x2745x49].data[_0x2745xbe].count + 1;
  moneyAmount = moneyAmount + judgementTicketList[_0x2745x49].data[_0x2745xbe].bill;
  jailAmount = jailAmount + judgementTicketList[_0x2745x49].data[_0x2745xbe].time;
  this.document.getElementById("moneyamount").value = "$ " + moneyAmount;
  this.document.getElementById("jailamount").value = jailAmount + " msc.";
}
function decreaseAmount(_0x2745x71, _0x2745x49, _0x2745xbe) {
  el = _0x2745x71.parentElement.parentElement.children[0];
  if (el.innerHTML > 0) {
    el.innerHTML = parseInt(el.innerHTML) - 1;
    judgementTicketList[_0x2745x49].data[_0x2745xbe].count = judgementTicketList[_0x2745x49].data[_0x2745xbe].count - 1;
    moneyAmount = moneyAmount - judgementTicketList[_0x2745x49].data[_0x2745xbe].bill;
    jailAmount = jailAmount - judgementTicketList[_0x2745x49].data[_0x2745xbe].time;
  }
  ;
  this.document.getElementById("moneyamount").value = "$ " + moneyAmount;
  this.document.getElementById("jailamount").value = jailAmount + " msc.";
}
function openJudgementList(_0x2745x71) {
  for (let _0x2745xb in judgementTicketList) {
    for (let _0x2745xe in judgementTicketList[_0x2745xb].data) {
      judgementTicketList[_0x2745xb].data[_0x2745xe].count = 0;
    }
  }
  ;
  changeTicketCategory(activeTicketList, 0);
  moneyAmount = 0;
  jailAmount = 0;
  this.document.getElementById("moneyamount").value = "$ " + moneyAmount;
  this.document.getElementById("jailamount").value = jailAmount + " msc.";
  this.document.getElementById("tirex-judgement-close-button").innerHTML = `${'<button onclick="closeJudgementList(this)" class="discourse-refresh" style="width:15%;">Powrót</button>'}`;
  this.document.getElementById("tirex-judgement-add-button").innerHTML = `${'<button onclick="saveJudgementList(this)" class="discourse-refresh" style="width:25%;float:right;margin-right:15px;padding:10px 25px;border-radius:5px;margin-top:0px;">Zapisz</button>'}`;
  document.querySelector("#judgement-firstpage").style.display = "none";
  document.querySelector("#judgement-ticket-list").style.display = "block";
}
function closeJudgementList(_0x2745x71) {
  document.querySelector("#judgement-firstpage").style.display = "block";
  document.querySelector("#judgement-ticket-list").style.display = "none";
}
function saveJudgementList(_0x2745x71) {
  this.document.getElementById("tirex-judgement-menu-time").value = jailAmount;
  this.document.getElementById("tirex-judgement-menu-bill").value = moneyAmount;
  this.document.getElementById("tirex-judgement-menu-case").value = "";
  let _0x2745x81 = "";
  judgementsTicketList = [];
  for (let _0x2745xb in judgementTicketList) {
    for (let _0x2745xe in judgementTicketList[_0x2745xb].data) {
      if (judgementTicketList[_0x2745xb].data[_0x2745xe].count > 0) {
        _0x2745x81 = _0x2745x81 + `${'<span class="discourse-person-button">[ '}` + judgementTicketList[_0x2745xb].categoryName + `${" ] "}` + judgementTicketList[_0x2745xb].data[_0x2745xe].name + `${" x"}` + judgementTicketList[_0x2745xb].data[_0x2745xe].count + `${"</span>"}`;
        judgementsTicketList.push({category: judgementTicketList[_0x2745xb].categoryName, name: judgementTicketList[_0x2745xb].data[_0x2745xe].name, count: judgementTicketList[_0x2745xb].data[_0x2745xe].count});
      }
    }
  }
  ;
  if (_0x2745x81.length === 0) {
    _0x2745x81 = _0x2745x81 + `${'<span class="discourse-person-button">'}` + Translation[0].lack + `${"</span>"}`;
  }
  ;
  this.document.getElementById("tirex-tickets-block-list").innerHTML = _0x2745x81;
  document.querySelector("#judgement-firstpage").style.display = "block";
  document.querySelector("#judgement-ticket-list").style.display = "none";
}
function sendToJailAndGiveBill() {
  let _0x2745xc4 = judgementsCitizensList;
  if (_0x2745xc4.length > 0) {
    let _0x2745x11 = this.document.getElementById("tirex-judgement-menu-time").value;
    let _0x2745x12 = this.document.getElementById("tirex-judgement-menu-bill").value;
    $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "sendJailAndBill", players: _0x2745xc4, reason: judgementsTicketList, bill: _0x2745x12, time: _0x2745x11}));
  }
}
function createNewDiscourse() {
  discourseCitizensList = [];
  discourseOfficersList = [];
  discourseVehiclesList = [];
  discourseImagesList = [];
  turnSection("discourse");
  document.querySelector("#discourse-search-box").style.display = "none";
  document.querySelector("#discourse-details").style.display = "none";
  document.querySelector("#new-discourse").style.display = "block";
  document.querySelector(".discourse-header").innerHTML = "<span id='citizen-previous' onclick='hideNewDiscourse()'><i class='fa-solid fa-angle-left'></i></span>" + headerNameAndTime;
  $("#tirex-discourse-button1").css("display", "block");
  $("#tirex-discourse-button2").css("display", "none");
}
function hideNewDiscourse() {
  document.querySelector("#new-discourse").style.display = "none";
  document.querySelector("#discourse-search-box").style.display = "block";
  document.querySelector(".discourse-header").innerHTML = headerNameAndTime;
}
function refreshWorkersList() {
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "refresh"})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
}
function openDiscoursePanel() {
  hideNewDiscourse();
  hideDiscourse(this);
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: ""})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
  return;
}
function addUserToJudgements(_0x2745x40, _0x2745x10) {
  turnSection("judgement");
  discourseAddElement(_0x2745x40, _0x2745x10, "judgements-citizen");
}
function changeDiscourseStatus(_0x2745xc) {
  if (_0x2745xc == "uno") {
    const _0x2745xcb = document.querySelector("#tirex-discourse-status-button");
    if (_0x2745xcb.innerText == Translation[0].invalid) {
      _0x2745xcb.classList.remove("patrol-invalid");
      _0x2745xcb.classList.add("patrol-valid");
      _0x2745xcb.innerHTML = Translation[0].valid;
    } else {
      _0x2745xcb.classList.remove("patrol-valid");
      _0x2745xcb.classList.add("patrol-invalid");
      _0x2745xcb.innerHTML = Translation[0].invalid;
    }
  } else {
    if (_0x2745xc == "dos") {
      const _0x2745xcb = document.querySelector("#tirex-button-discourse-status");
      if (_0x2745xcb.innerText == Translation[0].invalid) {
        _0x2745xcb.classList.remove("patrol-invalid");
        _0x2745xcb.classList.add("patrol-valid");
        _0x2745xcb.innerHTML = Translation[0].valid;
      } else {
        _0x2745xcb.classList.remove("patrol-valid");
        _0x2745xcb.classList.add("patrol-invalid");
        _0x2745xcb.innerHTML = Translation[0].invalid;
      }
    }
  }
  ;
  return;
}
function discourseAddElement(_0x2745xc, _0x2745x3d, _0x2745xb8) {
  if (_0x2745xb8 == "citizen") {
    discourseCitizensList.push({ssn: _0x2745xc, name: _0x2745x3d});
    let _0x2745xcd = "";
    for (let _0x2745xb in discourseCitizensList) {
      let _0x2745xce = discourseCitizensList[_0x2745xb];
      let _0x2745x10 = _0x2745xce.name;
      let _0x2745x40 = _0x2745xce.ssn;
      _0x2745xcd = _0x2745xcd + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'deleteCitizen')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
    }
    ;
    this.document.getElementById("tirex-citizens-buttons").innerHTML = _0x2745xcd;
    discourseCitizens("");
    this.document.getElementById("tirex-search-discourse-citizen").value = "";
  } else {
    if (_0x2745xb8 == "officer") {
      discourseOfficersList.push({ssn: _0x2745xc, name: _0x2745x3d});
      let _0x2745xcf = "";
      for (let _0x2745xb in discourseOfficersList) {
        let _0x2745xce = discourseOfficersList[_0x2745xb];
        let _0x2745x10 = _0x2745xce.name;
        let _0x2745x40 = _0x2745xce.ssn;
        _0x2745xcf = _0x2745xcf + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'deleteOfficer')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
      }
      ;
      this.document.getElementById("tirex-officers-buttons").innerHTML = _0x2745xcf;
      discourseOfficers("");
      this.document.getElementById("tirex-search-discourse-officer").value = "";
    } else {
      if (_0x2745xb8 == "vehicle") {
        discourseVehiclesList.push({vin: _0x2745xc, plate: _0x2745x3d});
        let _0x2745xd0 = "";
        for (let _0x2745xb in discourseVehiclesList) {
          let _0x2745xce = discourseVehiclesList[_0x2745xb];
          let _0x2745x58 = _0x2745xce.vin;
          let _0x2745x57 = _0x2745xce.plate;
          _0x2745xd0 = _0x2745xd0 + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x58 + `${"', 'none', 'deleteVehicle')\"></i>"}` + _0x2745x57 + `${" ["}` + _0x2745x58 + `${"]</span>"}`;
        }
        ;
        this.document.getElementById("tirex-vehicles-buttons").innerHTML = _0x2745xd0;
        discourseVehicles("");
        this.document.getElementById("tirex-search-discourse-vehicle").value = "";
      } else {
        if (_0x2745xb8 == "image") {
          discourseImagesList.push({image: _0x2745xc});
          let _0x2745xd1 = "";
          for (let _0x2745xb in discourseImagesList) {
            let _0x2745xce = discourseImagesList[_0x2745xb];
            let _0x2745x50 = _0x2745xce.image;
            _0x2745xd1 = _0x2745xd1 + `${'<div class="discourse-photo" style="position: relative;"><img style="margin:0px;width:350px;height:200px;" src="'}` + _0x2745x50 + `${'"></img><span class="onlyCursorHover" id="tirex-trash-block-image" onclick="discourseAddElement(\''}` + _0x2745xb + `${"', 'none', 'deleteImage')\"><i class=\"fa-regular fa-trash\" id=\"tirex-trash-inblock-image\"></i></span></div>"}`;
          }
          ;
          this.document.getElementById("tirex-discurse-images-list").innerHTML = _0x2745xd1;
          this.document.getElementById("discourse-picture-url").value = "";
        } else {
          if (_0x2745xb8 == "deleteCitizen") {
            for (let _0x2745xb in discourseCitizensList) {
              let _0x2745xce = discourseCitizensList[_0x2745xb];
              let _0x2745x40 = _0x2745xce.ssn;
              if (_0x2745x40 == _0x2745xc) {
                discourseCitizensList.splice(_0x2745xb, 1);
                break;
              }
            }
            ;
            let _0x2745xcd = "";
            for (let _0x2745xb in discourseCitizensList) {
              let _0x2745xce = discourseCitizensList[_0x2745xb];
              let _0x2745x10 = _0x2745xce.name;
              let _0x2745x40 = _0x2745xce.ssn;
              _0x2745xcd = _0x2745xcd + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'deleteCitizen')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
            }
            ;
            this.document.getElementById("tirex-citizens-buttons").innerHTML = _0x2745xcd;
          } else {
            if (_0x2745xb8 == "deleteOfficer") {
              for (let _0x2745xb in discourseOfficersList) {
                let _0x2745xce = discourseOfficersList[_0x2745xb];
                let _0x2745x40 = _0x2745xce.ssn;
                if (_0x2745x40 == _0x2745xc) {
                  discourseOfficersList.splice(_0x2745xb, 1);
                  break;
                }
              }
              ;
              let _0x2745xcf = "";
              for (let _0x2745xb in discourseOfficersList) {
                let _0x2745xce = discourseOfficersList[_0x2745xb];
                let _0x2745x10 = _0x2745xce.name;
                let _0x2745x40 = _0x2745xce.ssn;
                _0x2745xcf = _0x2745xcf + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'deleteOfficer')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
              }
              ;
              this.document.getElementById("tirex-officers-buttons").innerHTML = _0x2745xcf;
            } else {
              if (_0x2745xb8 == "deleteVehicle") {
                for (let _0x2745xb in discourseVehiclesList) {
                  let _0x2745xce = discourseVehiclesList[_0x2745xb];
                  let _0x2745x58 = _0x2745xce.vin;
                  if (_0x2745x58 == _0x2745xc) {
                    discourseVehiclesList.splice(_0x2745xb, 1);
                    break;
                  }
                }
                ;
                let _0x2745xd0 = "";
                for (let _0x2745xb in discourseVehiclesList) {
                  let _0x2745xce = discourseVehiclesList[_0x2745xb];
                  let _0x2745x58 = _0x2745xce.vin;
                  let _0x2745x57 = _0x2745xce.plate;
                  _0x2745xd0 = _0x2745xd0 + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x58 + `${"', 'none', 'deleteVehicle')\"></i>"}` + _0x2745x57 + `${" ["}` + _0x2745x58 + `${"]</span>"}`;
                }
                ;
                this.document.getElementById("tirex-vehicles-buttons").innerHTML = _0x2745xd0;
              } else {
                if (_0x2745xb8 == "deleteImage") {
                  discourseImagesList.splice(_0x2745xc, 1);
                  let _0x2745xd1 = "";
                  for (let _0x2745xb in discourseImagesList) {
                    let _0x2745xce = discourseImagesList[_0x2745xb];
                    let _0x2745x50 = _0x2745xce.image;
                    _0x2745xd1 = _0x2745xd1 + `${'<div class="discourse-photo" style="position: relative;"><img style="margin:0px;width:350px;height:200px;" src="'}` + _0x2745x50 + `${'"></img><span class="onlyCursorHover" id="tirex-trash-block-image" onclick="discourseAddElement(\''}` + _0x2745xb + `${"', 'none', 'deleteImage')\"><i class=\"fa-regular fa-trash\" id=\"tirex-trash-inblock-image\"></i></span></div>"}`;
                  }
                  ;
                  this.document.getElementById("tirex-discurse-images-list").innerHTML = _0x2745xd1;
                } else {
                  if (_0x2745xb8 == "citizen1") {
                    discourseCitizensList.push({ssn: _0x2745xc, name: _0x2745x3d});
                    let _0x2745xcd = "";
                    for (let _0x2745xb in discourseCitizensList) {
                      let _0x2745xce = discourseCitizensList[_0x2745xb];
                      let _0x2745x10 = _0x2745xce.name;
                      let _0x2745x40 = _0x2745xce.ssn;
                      _0x2745xcd = _0x2745xcd + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'deleteCitizen1')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
                    }
                    ;
                    this.document.getElementById("tirex-discourse-citizens-buttons").innerHTML = _0x2745xcd;
                    discourseCitizens1("");
                    this.document.getElementById("tirex-search-discourse-setup-citizen").value = "";
                  } else {
                    if (_0x2745xb8 == "officer1") {
                      discourseOfficersList.push({ssn: _0x2745xc, name: _0x2745x3d});
                      let _0x2745xcf = "";
                      for (let _0x2745xb in discourseOfficersList) {
                        let _0x2745xce = discourseOfficersList[_0x2745xb];
                        let _0x2745x10 = _0x2745xce.name;
                        let _0x2745x40 = _0x2745xce.ssn;
                        _0x2745xcf = _0x2745xcf + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'deleteOfficer1')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
                      }
                      ;
                      this.document.getElementById("tirex-discourse-officers-buttons").innerHTML = _0x2745xcf;
                      discourseOfficers1("");
                      this.document.getElementById("tirex-search-discourse-setup-officer").value = "";
                    } else {
                      if (_0x2745xb8 == "vehicle1") {
                        discourseVehiclesList.push({vin: _0x2745xc, plate: _0x2745x3d});
                        let _0x2745xd0 = "";
                        for (let _0x2745xb in discourseVehiclesList) {
                          let _0x2745xce = discourseVehiclesList[_0x2745xb];
                          let _0x2745x58 = _0x2745xce.vin;
                          let _0x2745x57 = _0x2745xce.plate;
                          _0x2745xd0 = _0x2745xd0 + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x58 + `${"', 'none', 'deleteVehicle1')\"></i>"}` + _0x2745x57 + `${" ["}` + _0x2745x58 + `${"]</span>"}`;
                        }
                        ;
                        this.document.getElementById("tirex-discourse-vehicles-buttons").innerHTML = _0x2745xd0;
                        discourseVehicles1("");
                        this.document.getElementById("tirex-search-discourse-setup-vehicle").value = "";
                      } else {
                        if (_0x2745xb8 == "image1") {
                          discourseImagesList.push({image: _0x2745xc});
                          let _0x2745xd1 = "";
                          for (let _0x2745xb in discourseImagesList) {
                            let _0x2745xce = discourseImagesList[_0x2745xb];
                            let _0x2745x50 = _0x2745xce.image;
                            _0x2745xd1 = _0x2745xd1 + `${'<div class="discourse-photo" style="position: relative;"><img style="margin:0px;width:350px;height:200px;" src="'}` + _0x2745x50 + `${'"></img><span class="onlyCursorHover" id="tirex-trash-block-image" onclick="discourseAddElement(\''}` + _0x2745xb + `${"', 'none', 'deleteImage1')\"><i class=\"fa-regular fa-trash\" id=\"tirex-trash-inblock-image\"></i></span></div>"}`;
                          }
                          ;
                          this.document.getElementById("tirex-discurse-load-images-list").innerHTML = _0x2745xd1;
                          this.document.getElementById("discourse-picture-url").value = "";
                        } else {
                          if (_0x2745xb8 == "deleteCitizen1") {
                            for (let _0x2745xb in discourseCitizensList) {
                              let _0x2745xce = discourseCitizensList[_0x2745xb];
                              let _0x2745x40 = _0x2745xce.ssn;
                              if (_0x2745x40 == _0x2745xc) {
                                discourseCitizensList.splice(_0x2745xb, 1);
                                break;
                              }
                            }
                            ;
                            let _0x2745xcd = "";
                            for (let _0x2745xb in discourseCitizensList) {
                              let _0x2745xce = discourseCitizensList[_0x2745xb];
                              let _0x2745x10 = _0x2745xce.name;
                              let _0x2745x40 = _0x2745xce.ssn;
                              _0x2745xcd = _0x2745xcd + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'deleteCitizen1')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
                            }
                            ;
                            this.document.getElementById("tirex-discourse-citizens-buttons").innerHTML = _0x2745xcd;
                          } else {
                            if (_0x2745xb8 == "deleteOfficer1") {
                              for (let _0x2745xb in discourseOfficersList) {
                                let _0x2745xce = discourseOfficersList[_0x2745xb];
                                let _0x2745x40 = _0x2745xce.ssn;
                                if (_0x2745x40 == _0x2745xc) {
                                  discourseOfficersList.splice(_0x2745xb, 1);
                                  break;
                                }
                              }
                              ;
                              let _0x2745xcf = "";
                              for (let _0x2745xb in discourseOfficersList) {
                                let _0x2745xce = discourseOfficersList[_0x2745xb];
                                let _0x2745x10 = _0x2745xce.name;
                                let _0x2745x40 = _0x2745xce.ssn;
                                _0x2745xcf = _0x2745xcf + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'deleteOfficer1')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
                              }
                              ;
                              this.document.getElementById("tirex-discourse-officers-buttons").innerHTML = _0x2745xcf;
                            } else {
                              if (_0x2745xb8 == "deleteVehicle1") {
                                for (let _0x2745xb in discourseVehiclesList) {
                                  let _0x2745xce = discourseVehiclesList[_0x2745xb];
                                  let _0x2745x58 = _0x2745xce.vin;
                                  if (_0x2745x58 == _0x2745xc) {
                                    discourseVehiclesList.splice(_0x2745xb, 1);
                                    break;
                                  }
                                }
                                ;
                                let _0x2745xd0 = "";
                                for (let _0x2745xb in discourseVehiclesList) {
                                  let _0x2745xce = discourseVehiclesList[_0x2745xb];
                                  let _0x2745x58 = _0x2745xce.vin;
                                  let _0x2745x57 = _0x2745xce.plate;
                                  _0x2745xd0 = _0x2745xd0 + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x58 + `${"', 'none', 'deleteVehicle1')\"></i>"}` + _0x2745x57 + `${" ["}` + _0x2745x58 + `${"]</span>"}`;
                                }
                                ;
                                this.document.getElementById("tirex-discourse-vehicles-buttons").innerHTML = _0x2745xd0;
                              } else {
                                if (_0x2745xb8 == "deleteImage1") {
                                  discourseImagesList.splice(_0x2745xc, 1);
                                  let _0x2745xd1 = "";
                                  for (let _0x2745xb in discourseImagesList) {
                                    let _0x2745xce = discourseImagesList[_0x2745xb];
                                    let _0x2745x50 = _0x2745xce.image;
                                    _0x2745xd1 = _0x2745xd1 + `${'<div class="discourse-photo" style="position: relative;"><img style="margin:0px;width:350px;height:200px;" src="'}` + _0x2745x50 + `${'"></img><span class="onlyCursorHover" id="tirex-trash-block-image" onclick="discourseAddElement(\''}` + _0x2745xb + `${"', 'none', 'deleteImage')\"><i class=\"fa-regular fa-trash\" id=\"tirex-trash-inblock-image\"></i></span></div>"}`;
                                  }
                                  ;
                                  this.document.getElementById("tirex-discurse-load-images-list").innerHTML = _0x2745xd1;
                                } else {
                                  if (_0x2745xb8 == "judgements-citizen") {
                                    judgementsCitizensList.push({ssn: _0x2745xc, name: _0x2745x3d});
                                    let _0x2745xcd = "";
                                    for (let _0x2745xb in judgementsCitizensList) {
                                      let _0x2745xce = judgementsCitizensList[_0x2745xb];
                                      let _0x2745x10 = _0x2745xce.name;
                                      let _0x2745x40 = _0x2745xce.ssn;
                                      _0x2745xcd = _0x2745xcd + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'delete-judgements-citizen')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
                                    }
                                    ;
                                    this.document.getElementById("tirex-judgements-buttons").innerHTML = _0x2745xcd;
                                    judgementsCitizens("");
                                    this.document.getElementById("tirex-search-judgements-citizen").value = "";
                                  } else {
                                    if (_0x2745xb8 == "delete-judgements-citizen") {
                                      for (let _0x2745xb in judgementsCitizensList) {
                                        let _0x2745xce = judgementsCitizensList[_0x2745xb];
                                        let _0x2745x40 = _0x2745xce.ssn;
                                        if (_0x2745x40 == _0x2745xc) {
                                          judgementsCitizensList.splice(_0x2745xb, 1);
                                          break;
                                        }
                                      }
                                      ;
                                      let _0x2745xcd = "";
                                      for (let _0x2745xb in judgementsCitizensList) {
                                        let _0x2745xce = judgementsCitizensList[_0x2745xb];
                                        let _0x2745x10 = _0x2745xce.name;
                                        let _0x2745x40 = _0x2745xce.ssn;
                                        _0x2745xcd = _0x2745xcd + `${'<span class="judgement-button"><i class="fa-regular fa-trash party-kick" onclick="discourseAddElement(\''}` + _0x2745x40 + `${"', 'none', 'delete-judgements-citizen')\"></i>"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</span>"}`;
                                      }
                                      ;
                                      this.document.getElementById("tirex-judgements-buttons").innerHTML = _0x2745xcd;
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  ;
  return;
}
function discourseCitizens(_0x2745x80) {
  const _0x2745xd3 = document.querySelector("#tirex-menu1");
  const _0x2745xd4 = _0x2745xd3.querySelector("#tirex-box1");
  let _0x2745xd5 = "";
  if (_0x2745x80.length > 0) {
    for (let _0x2745xb in _0x2745x80) {
      let _0x2745xc = _0x2745x80[_0x2745xb];
      let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
      let _0x2745x40 = _0x2745xc.ssn;
      _0x2745xd5 = _0x2745xd5 + `${"<li onclick=\"discourseAddElement('"}` + _0x2745x40 + `${"', '"}` + _0x2745x10 + `${"', 'citizen')\">"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</li>"}`;
    }
    ;
    _0x2745xd4.innerHTML = _0x2745xd5;
    _0x2745xd3.classList.add("active");
  } else {
    _0x2745xd3.classList.remove("active");
  }
  ;
  return;
}
function discourseOfficers(_0x2745x80) {
  const _0x2745xd3 = document.querySelector("#tirex-menu2");
  const _0x2745xd4 = _0x2745xd3.querySelector("#tirex-box2");
  let _0x2745xd5 = "";
  if (_0x2745x80.length > 0) {
    for (let _0x2745xb in _0x2745x80) {
      let _0x2745xc = _0x2745x80[_0x2745xb];
      let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
      let _0x2745x40 = _0x2745xc.ssn;
      _0x2745xd5 = _0x2745xd5 + `${"<li onclick=\"discourseAddElement('"}` + _0x2745x40 + `${"', '"}` + _0x2745x10 + `${"', 'officer')\">"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</li>"}`;
    }
    ;
    _0x2745xd4.innerHTML = _0x2745xd5;
    _0x2745xd3.classList.add("active");
  } else {
    _0x2745xd3.classList.remove("active");
  }
  ;
  return;
}
function discourseVehicles(_0x2745x80) {
  const _0x2745xd3 = document.querySelector("#tirex-menu3");
  const _0x2745xd4 = _0x2745xd3.querySelector("#tirex-box3");
  let _0x2745xd5 = "";
  if (_0x2745x80.length > 0) {
    for (let _0x2745xb in _0x2745x80) {
      let _0x2745xc = _0x2745x80[_0x2745xb];
      let _0x2745x57 = _0x2745xc.plate;
      let _0x2745x58 = _0x2745xc.vin;
      _0x2745xd5 = _0x2745xd5 + `${"<li onclick=\"discourseAddElement('"}` + _0x2745x58 + `${"', '"}` + _0x2745x57 + `${"', 'vehicle')\">"}` + _0x2745x57 + `${" ["}` + _0x2745x58 + `${"]</li>"}`;
    }
    ;
    _0x2745xd4.innerHTML = _0x2745xd5;
    _0x2745xd3.classList.add("active");
  } else {
    _0x2745xd3.classList.remove("active");
  }
  ;
  return;
}
function addNewDiscourse() {
  var _0x2745xc = [];
  let _0x2745xd9 = $("#tirex-new-discourse-name").val();
  let _0x2745xda = "false";
  if (document.querySelector("#tirex-discourse-status-button").innerText == Translation[0].valid) {
    _0x2745xda = "true";
  }
  ;
  var _0x2745xdb = discourseCitizensList;
  var _0x2745xdc = discourseOfficersList;
  var _0x2745xdd = discourseVehiclesList;
  var _0x2745xde = judgementsTicketList;
  let _0x2745xdf = $("#tirex-discourse-content").val();
  var _0x2745xe0 = discourseImagesList;
  if (_0x2745xd9.length > 0 && _0x2745xdf.length > 0) {
    _0x2745xc.push({name: _0x2745xd9, status: _0x2745xda, citizens: _0x2745xdb, officers: _0x2745xdc, vehicles: _0x2745xdd, judgements: _0x2745xde, content: _0x2745xdf, images: _0x2745xe0});
    $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "addDiscourse", newdata: _0x2745xc})).then(_0x2745xc => {
      return openDiscoursePanel();
    });
  }
}
function discourseCitizens1(_0x2745x80) {
  const _0x2745xd3 = document.querySelector("#tirex-menu1-1");
  const _0x2745xd4 = _0x2745xd3.querySelector("#tirex-box1-1");
  let _0x2745xd5 = "";
  if (_0x2745x80.length > 0) {
    for (let _0x2745xb in _0x2745x80) {
      let _0x2745xc = _0x2745x80[_0x2745xb];
      let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
      let _0x2745x40 = _0x2745xc.ssn;
      _0x2745xd5 = _0x2745xd5 + `${"<li onclick=\"discourseAddElement('"}` + _0x2745x40 + `${"', '"}` + _0x2745x10 + `${"', 'citizen1')\">"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</li>"}`;
    }
    ;
    _0x2745xd4.innerHTML = _0x2745xd5;
    _0x2745xd3.classList.add("active");
  } else {
    _0x2745xd3.classList.remove("active");
  }
  ;
  return;
}
function discourseOfficers1(_0x2745x80) {
  const _0x2745xd3 = document.querySelector("#tirex-menu1-2");
  const _0x2745xd4 = _0x2745xd3.querySelector("#tirex-box1-2");
  let _0x2745xd5 = "";
  if (_0x2745x80.length > 0) {
    for (let _0x2745xb in _0x2745x80) {
      let _0x2745xc = _0x2745x80[_0x2745xb];
      let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
      let _0x2745x40 = _0x2745xc.ssn;
      _0x2745xd5 = _0x2745xd5 + `${"<li onclick=\"discourseAddElement('"}` + _0x2745x40 + `${"', '"}` + _0x2745x10 + `${"', 'officer1')\">"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</li>"}`;
    }
    ;
    _0x2745xd4.innerHTML = _0x2745xd5;
    _0x2745xd3.classList.add("active");
  } else {
    _0x2745xd3.classList.remove("active");
  }
  ;
  return;
}
function discourseVehicles1(_0x2745x80) {
  const _0x2745xd3 = document.querySelector("#tirex-menu1-3");
  const _0x2745xd4 = _0x2745xd3.querySelector("#tirex-box1-3");
  let _0x2745xd5 = "";
  if (_0x2745x80.length > 0) {
    for (let _0x2745xb in _0x2745x80) {
      let _0x2745xc = _0x2745x80[_0x2745xb];
      let _0x2745x57 = _0x2745xc.plate;
      let _0x2745x58 = _0x2745xc.vin;
      _0x2745xd5 = _0x2745xd5 + `${"<li onclick=\"discourseAddElement('"}` + _0x2745x58 + `${"', '"}` + _0x2745x57 + `${"', 'vehicle1')\">"}` + _0x2745x57 + `${" ["}` + _0x2745x58 + `${"]</li>"}`;
    }
    ;
    _0x2745xd4.innerHTML = _0x2745xd5;
    _0x2745xd3.classList.add("active");
  } else {
    _0x2745xd3.classList.remove("active");
  }
  ;
  return;
}
function saveDataInDiscourse(_0x2745x7b) {
  var _0x2745xc = [];
  let _0x2745xda = "false";
  if (document.querySelector("#tirex-button-discourse-status").innerText == Translation[0].valid) {
    _0x2745xda = "true";
  }
  ;
  var _0x2745xdb = discourseCitizensList;
  var _0x2745xdc = discourseOfficersList;
  var _0x2745xdd = discourseVehiclesList;
  var _0x2745xde = judgementsTicketList;
  let _0x2745xdf = $("#tirex-discourse-setup-content").val();
  var _0x2745xe0 = discourseImagesList;
  if (_0x2745xdf.length > 0) {
    _0x2745xc.push({id: _0x2745x7b, status: _0x2745xda, citizens: _0x2745xdb, officers: _0x2745xdc, vehicles: _0x2745xdd, judgements: _0x2745xde, content: _0x2745xdf, images: _0x2745xe0});
    $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "editDiscourse", newdata: _0x2745xc})).then(_0x2745xc => {
      return openDiscoursePanel();
    });
  }
}
function judgementsCitizens(_0x2745x80) {
  const _0x2745xd3 = document.querySelector("#tirex-menu-judgements");
  const _0x2745xd4 = _0x2745xd3.querySelector("#tirex-box-judgements");
  let _0x2745xd5 = "";
  if (_0x2745x80.length > 0) {
    for (let _0x2745xb in _0x2745x80) {
      let _0x2745xc = _0x2745x80[_0x2745xb];
      let _0x2745x10 = _0x2745xc.firstname + " " + _0x2745xc.lastname;
      let _0x2745x40 = _0x2745xc.ssn;
      _0x2745xd5 = _0x2745xd5 + `${"<li onclick=\"discourseAddElement('"}` + _0x2745x40 + `${"', '"}` + _0x2745x10 + `${"', 'judgements-citizen')\">"}` + _0x2745x10 + `${" ["}` + _0x2745x40 + `${"]</li>"}`;
    }
    ;
    _0x2745xd4.innerHTML = _0x2745xd5;
    _0x2745xd3.classList.add("active");
  } else {
    _0x2745xd3.classList.remove("active");
  }
  ;
  return;
}
function caseJudgements(_0x2745xb8, _0x2745x7b) {
  if (_0x2745xb8 == "open") {
    turnSection("judgement");
    openJudgementList(this);
    this.document.getElementById("tirex-judgement-close-button").innerHTML = `${"<button onclick=\"caseJudgements('returnToCase', '"}` + _0x2745x7b + `${'\')" class="discourse-refresh" style="width:15%;">Powrót</button>'}`;
    this.document.getElementById("tirex-judgement-add-button").innerHTML = `${"<button onclick=\"caseJudgements('setJudgeToCase', '"}` + _0x2745x7b + `${'\')" class="discourse-refresh" style="width:25%;float:right;margin-right:15px;padding:10px 25px;border-radius:5px;margin-top:0px;">Zapisz</button>'}`;
  } else {
    if (_0x2745xb8 == "returnToCase") {
      closeJudgementList(this);
      showCase(_0x2745x7b);
    } else {
      if (_0x2745xb8 == "setJudgeToCase") {
        closeJudgementList(this);
        judgementsTicketList = [];
        for (let _0x2745xb in judgementTicketList) {
          for (let _0x2745xe in judgementTicketList[_0x2745xb].data) {
            if (judgementTicketList[_0x2745xb].data[_0x2745xe].count > 0) {
              judgementsTicketList.push({category: judgementTicketList[_0x2745xb].categoryName, name: judgementTicketList[_0x2745xb].data[_0x2745xe].name, count: judgementTicketList[_0x2745xb].data[_0x2745xe].count});
            }
          }
        }
        ;
        $.post("http://ES-Gpt/GptAddData", JSON.stringify({active: active, type: "setCaseJudgements", case: _0x2745x7b, judgements: judgementsTicketList})).then(_0x2745xc => {
          return showCase(_0x2745x7b);
        });
      }
    }
  }
}
function loadGptData(_0x2745xc) {
  let ownJobGrade = _0x2745xc.jobData.ownJobGrade;
  let _0x2745xe8 = '<option value="" disabled selected hidden>' + Translation[0].selectPatrolType + "</option>";
  for (let _0x2745xb in _0x2745xc.patrolUnits) {
    let _0x2745x33 = _0x2745xc.patrolUnits[_0x2745xb];
    _0x2745xe8 = _0x2745xe8 + `${'<option value="'}` + _0x2745x33 + `${'">'}` + _0x2745x33 + `${"</option>"}`;
  }
  ;
  this.document.getElementById("patrol-selected-vehicle").innerHTML = _0x2745xe8;
  let _0x2745xe9 = "";
  for (let _0x2745xb in _0x2745xc.jobData.jobGrades) {
    let _0x2745xea = _0x2745xc.jobData.jobGrades[_0x2745xb];
    let _0x2745xeb = _0x2745xea.label;
    let _0x2745xec = _0x2745xea.grade;
    let _0x2745xed = _0x2745xea.job_name;
    if (_0x2745xec < ownJobGrade) {
      _0x2745xe9 = _0x2745xe9 + `${'<option value="'}` + _0x2745xed + `${"-"}` + _0x2745xec + `${'">'}` + _0x2745xeb + `${"</option>"}`;
    }
  }
  ;
  this.document.getElementById("tirex-workers-change-worker-grade").innerHTML = _0x2745xe9;
  this.document.getElementById("tirex-workers-add-worker-grade-list").innerHTML = _0x2745xe9;
  let _0x2745xee = "";
  for (let _0x2745xb in _0x2745xc.jobData.jobLicense) {
    let _0x2745xef = _0x2745xc.jobData.jobLicense[_0x2745xb];
    let _0x2745xf0 = _0x2745xef.type;
    let _0x2745xf1 = _0x2745xef.label;
    _0x2745xee = _0x2745xee + `${'<option value="'}` + _0x2745xf0 + `${'">'}` + _0x2745xf1 + `${"</option>"}`;
  }
  ;
  this.document.getElementById("tirex-workers-change-worker-license").innerHTML = _0x2745xee;
  return;
}
function dispatchDataAction(_0x2745x8e, _0x2745x49) {
  let _0x2745xf3 = _0x2745x49;
  if (_0x2745x8e == "addToList") {
    $.post("http://ES-Gpt/DispatchGetData", JSON.stringify({type: "addToList", id: _0x2745xf3}));
  } else {
    if (_0x2745x8e == "getCoords") {
      $.post("http://ES-Gpt/DispatchGetData", JSON.stringify({type: "getCoords", id: _0x2745xf3}));
    } else {
      if (_0x2745x8e == "deleteFromList") {
        $.post("http://ES-Gpt/DispatchGetData", JSON.stringify({type: "deleteFromList", id: _0x2745xf3}));
      } else {
        if (_0x2745x8e == "deleteReport") {
          $.post("http://ES-Gpt/DispatchGetData", JSON.stringify({type: "deleteReport", id: _0x2745xf3}));
        }
      }
    }
  }
}
function loadDispatchData(_0x2745x80, _0x2745x39) {
  var _0x2745xf5 = [];
  var _0x2745xf6 = [];
  let _0x2745xf7 = "";
  let _0x2745xf8 = "";
  for (let _0x2745xb in _0x2745x80) {
    let _0x2745xc = _0x2745x80[_0x2745xb];
    let _0x2745x30 = _0x2745xc.officers;
    let _0x2745xf9 = _0x2745xf5.length;
    for (let _0x2745xe in _0x2745x30) {
      let _0x2745x40 = _0x2745x30[_0x2745xe].user;
      if (_0x2745x40 == _0x2745x39) {
        _0x2745xf5.push(_0x2745xc);
        break;
      }
    }
    ;
    if (_0x2745xf9 == _0x2745xf5.length) {
      _0x2745xf6.push(_0x2745xc);
    }
  }
  ;
  for (let _0x2745xb in _0x2745xf5) {
    let _0x2745xc = _0x2745xf5[_0x2745xb];
    let _0x2745x49 = _0x2745xc.id;
    let _0x2745x30 = _0x2745xc.officers;
    let _0x2745x9a = _0x2745xc.createTime;
    let _0x2745x4a = _0x2745xc.content;
    let _0x2745xb8 = _0x2745xc.type;
    let _0x2745xfa = _0x2745xc.street;
    let _0x2745x4b = _0x2745xc.maxOfficers;
    let _0x2745xfb = "";
    for (let _0x2745xe in _0x2745x30) {
      let _0x2745xd = _0x2745x30[_0x2745xe];
      let _0x2745x36 = _0x2745xd.badge;
      _0x2745xfb = _0x2745xfb + `${'<span class="patrol-unit">'}` + _0x2745x36 + `${"</span>"}`;
    }
    ;
    _0x2745xf7 = _0x2745xf7 + `${'<div class="dispatch-box" style="margin-bottom:20;"><div class="header"><span id="close"><i class="fa-light fa-circle-xmark" onclick="dispatchDataAction(\'deleteFromList\', \''}` + _0x2745x49 + `${'\')"></i></span><span id="time">'}` + _0x2745x9a + `${"</span>"}` + _0x2745xfb + `${'</div><div class="left-content"><p>'}` + _0x2745x4a + `${"</p><span>"}` + _0x2745xfa + `${'</span></div><div class="right-content"><span class="button button-warning">'}` + _0x2745xb8 + `${'</span></div><div class="left-footer"><br/><span value="'}` + Translation[0].endReport + `${'" class="button button-action" onclick="dispatchDataAction(\'deleteReport\', \''}` + _0x2745x49 + `${"')\">"}` + Translation[0].endReport + `${'</span><span value="'}` + Translation[0].location + `${'" class="button button-action" onclick="dispatchDataAction(\'getCoords\', \''}` + _0x2745x49 + `${"')\">"}` + Translation[0].location + `${'</span></div><div class="right-footer"><br/><span class="patrol-units">'}` + _0x2745x30.length + `${"/"}` + _0x2745x4b + `${"</span></div></div>"}`;
  }
  ;
  for (let _0x2745xb in _0x2745xf6) {
    let _0x2745xc = _0x2745xf6[_0x2745xb];
    let _0x2745x49 = _0x2745xc.id;
    let _0x2745x30 = _0x2745xc.officers;
    let _0x2745x9a = _0x2745xc.createTime;
    let _0x2745x4a = _0x2745xc.content;
    let _0x2745xb8 = _0x2745xc.type;
    let _0x2745xfa = _0x2745xc.street;
    let _0x2745x4b = _0x2745xc.maxOfficers;
    let _0x2745xfb = "";
    for (let _0x2745xe in _0x2745x30) {
      let _0x2745xd = _0x2745x30[_0x2745xe];
      let _0x2745x36 = _0x2745xd.badge;
      _0x2745xfb = _0x2745xfb + `${'<span class="patrol-unit">'}` + _0x2745x36 + `${"</span>"}`;
    }
    ;
    _0x2745xf8 = _0x2745xf8 + `${'<div class="dispatch-box"><div class="header"><span id="close"><i class="fa-light fa-circle-xmark" onclick="dispatchDataAction(\'deleteFromList\', \''}` + _0x2745x49 + `${'\')"></i></span><span id="time">'}` + _0x2745x9a + `${"</span>"}` + _0x2745xfb + `${'</div><div class="left-content"><p>'}` + _0x2745x4a + `${"</p><span>"}` + _0x2745xfa + `${'</span></div><div class="right-content"><span class="button button-warning">'}` + _0x2745xb8 + `${'</span></div><div class="left-footer"><br/><span value="Reaguj" class="button button-action" onclick="dispatchDataAction(\'addToList\', \''}` + _0x2745x49 + `${"')\">"}` + Translation[0].react + `${'</span><span value="'}` + Translation[0].location + `${'" class="button button-action" onclick="dispatchDataAction(\'getCoords\', \''}` + _0x2745x49 + `${"')\">"}` + Translation[0].location + `${'</span></div><div class="right-footer"><br/><span class="patrol-units">'}` + _0x2745x30.length + `${"/"}` + _0x2745x4b + `${"</span></div></div>"}`;
  }
  ;
  this.document.getElementById("tirex-dispatch-now-reports").innerHTML = _0x2745xf7;
  this.document.getElementById("tirex-dispatch-data").innerHTML = _0x2745xf8;
  return;
}
function refreshWorkerList() {
  let _0x2745x76 = $("#tirex-search-worker").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", name: _0x2745x77})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
}
window.addEventListener("message", function (_0x2745xfd) {
  let _0x2745xc = _0x2745xfd.data;
  let _0x2745xb8 = _0x2745xc.type;
  let _0x2745xfe = _0x2745xc.acces;
  _0x2745xc = _0x2745xc[1];
  if (_0x2745xb8 == "OPEN-GPT") {
    if (_0x2745xfe == true) {
      $(".tirex-worker-panel").css("display", "block");
      $("#tirex-announcements-add-button").css("display", "block");
    } else {
      if (active == "workers") {
        turnSection("main");
      }
    }
    ;
    $("html").css("display", "block");
    $("body").css("display", "block");
    $("#tirex-gpt-section").css("display", "block");
    $("#tirex-dispatch-section").css("display", "none");
    updateGptData(_0x2745xc);
    loadGptData(_0x2745xfd.data);
  } else {
    if (_0x2745xb8 == "OPEN_DISPATCH") {
      $("html").css("display", "block");
      $("body").css("display", "block");
      $("#tirex-dispatch-section").css("display", "block");
      $("#tirex-gpt-section").css("display", "none");
      loadDispatchData(_0x2745xc, _0x2745xfd.data.ssn);
    } else {
      if (_0x2745xb8 == "LOAD_DISPATCH_DATA") {
        loadDispatchData(_0x2745xc, _0x2745xfd.data.ssn);
        if (active == "patrol") {
          let _0x2745x76 = $("#tirex-search-patrol").val();
          let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
          let _0x2745x78 = $("#tirex-gpt-dispatch-search").val();
          let _0x2745x79 = _0x2745x78.replace(/\s+/g, "");
          $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", type2: "search", name: _0x2745x77, name2: _0x2745x79})).then(_0x2745xc => {
            return updateGptData(_0x2745xc);
          });
        }
      } else {
        if (_0x2745xb8 == "CLOSE") {
          $("html").css("display", "none");
          $("body").css("display", "none");
          $("#tirex-gpt-section").css("display", "none");
          $("#tirex-dispatch-section").css("display", "none");
          $(".tirex-worker-panel").css("display", "none");
          $("#tirex-announcements-add-button").css("display", "none");
        }
      }
    }
  }
});
$("#tirex-search-discourse-citizen").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-discourse-citizen").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search-citizen", name: _0x2745x77})).then(_0x2745xc => {
    return discourseCitizens(_0x2745xc);
  });
});
$("#tirex-search-discourse-officer").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-discourse-officer").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search-officer", name: _0x2745x77})).then(_0x2745xc => {
    return discourseOfficers(_0x2745xc);
  });
});
$("#tirex-search-discourse-vehicle").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-discourse-vehicle").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search-vehicle", name: _0x2745x77})).then(_0x2745xc => {
    return discourseVehicles(_0x2745xc);
  });
});
$("#tirex-search-discourse-setup-citizen").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-discourse-setup-citizen").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search-citizen", name: _0x2745x77})).then(_0x2745xc => {
    return discourseCitizens1(_0x2745xc);
  });
});
$("#tirex-search-discourse-setup-officer").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-discourse-setup-officer").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search-officer", name: _0x2745x77})).then(_0x2745xc => {
    return discourseOfficers1(_0x2745xc);
  });
});
$("#tirex-search-discourse-setup-vehicle").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-discourse-setup-vehicle").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search-vehicle", name: _0x2745x77})).then(_0x2745xc => {
    return discourseVehicles1(_0x2745xc);
  });
});
$("#tirex-search-judgements-citizen").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-judgements-citizen").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search-citizen", name: _0x2745x77})).then(_0x2745xc => {
    return judgementsCitizens(_0x2745xc);
  });
});
$("#tirex-search-patrol").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-patrol").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  let _0x2745x78 = $("#tirex-gpt-dispatch-search").val();
  let _0x2745x79 = _0x2745x78.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", type2: "search", name: _0x2745x77, name2: _0x2745x79})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
});
$("#tirex-gpt-dispatch-search").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-patrol").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  let _0x2745x78 = $("#tirex-gpt-dispatch-search").val();
  let _0x2745x79 = _0x2745x78.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", type2: "search", name: _0x2745x77, name2: _0x2745x79})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
});
$("#tirex-search-citizen").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-citizen").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", name: _0x2745x77})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
});
$("#tirex-search-cars").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-cars").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", name: _0x2745x77})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
});
$("#tirex-search-weapon").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-weapon").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", name: _0x2745x77})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
});
$("#tirex-search-discourses").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-discourses").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", name: _0x2745x77})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
});
$("#tirex-search-worker").keyup(function (_0x2745xff) {
  let _0x2745x76 = $("#tirex-search-worker").val();
  let _0x2745x77 = _0x2745x76.replace(/\s+/g, "");
  $.post("http://ES-Gpt/GptGetData", JSON.stringify({active: active, type: "search", name: _0x2745x77})).then(_0x2745xc => {
    return updateGptData(_0x2745xc);
  });
});
function GptCloseAll() {
  $.post("http://ES-Gpt/GptClose", JSON.stringify({active: active}));
  return;
}
$(".close").click(function () {
  GptCloseAll();
});
$(document).keyup(function (_0x2745xff) {
  if (_0x2745xff.keyCode == 27) {
    GptCloseAll();
  }
});
