var missionMangalData = {
    actorName:"Akashay Kumar",
    releasedDate:2019,
    budget:32,
    directorName:"Jagan Sakti"

}

var geniousData = {
    actorName:"Utkarsh Sharma",
    releasedDate:2018,
    budget:22,
    directorName:"Anil Sharma"

}

var guruData = {
    actorName:"G. srinivas",
    releasedDate:2003,
    budget:720,
    directorName:"Mani Ratnam"
}


async function getLatestDataByCode(params) {
    try {
      const response = await fetch(
        `'https://imdb8.p.rapidapi.com/auto-complete=${params}`,
        {
          method: "GET",
          headers: {
            "x-rapidapi-host": 'imdb8.p.rapidapi.com',
            "x-rapidapi-key":
            'e0340f3e91msha16006eabddbc90p1ccd2fjsnb61a7ced0939'
          },
        }
      );
      const response_1 = await response.json();
      return response_1;
    } catch (err) {
      console.error(err);
    }
}



window.addEventListener("load", getDefaultData)

async function getDefaultData(){
    var showData = await getLatestDataByCode("MM")
    console.log(showData)

    document.getElementById("chan1").textContent = showData[0].actorName
    document.getElementById("chan2").textContent = showData[0].releasedDate
    document.getElementById("chan3").textContent = showData[0].budget
    document.getElementById("chan4").textContent = showData[0].directorName
}

document.getElementById("chan1").textContent = indiaData.actorName
document.getElementById("chan2").textContent = indiaData.releasedDate
document.getElementById("chan3").textContent = indiaData.budget
document.getElementById("chan4").textContent = indiaData.directorName

 var Dropdown = document.getElementById("Dropdown")
 Dropdown.addEventListener("change", updateData)

async function updateData(){
    var Dropdown = document.getElementById("Dropdown")
    var selectedData = Dropdown.options[Dropdown.selectedIndex].value;

    var showData = await getLatestDataByCode(selectedData)
    console.log(showData)
}
    document.getElementById("chan1").textContent = showData[0].actorName
    document.getElementById("chan2").textContent = showData[0].releasedDate
    document.getElementById("chan3").textContent = showData[0].budget
    document.getElementById("chan4").textContent = showData[0].directorName

    if(Dropdown.options[Dropdown.selectedIndex].value
 === "MM"){

    document.getElementById("chan1").textContent = missionMangalData.actorName
    document.getElementById("chan2").textContent = missionMangalData.releasedDate
    document.getElementById("chan3").textContent =missionMangalData.budget
    document.getElementById("chan4").textContent = missionMangalData.directorName
    
    }
    else if(Dropdown.options[Dropdown.selectedIndex].value
 ==="GE"){   

    document.getElementById("chan1").textContent = geniousData.actorName
    document.getElementById("chan2").textContent = geniousData.releasedDate
    document.getElementById("chan3").textContent =geniousData.budget
    document.getElementById("chan4").textContent =geniousData.directorName
    

    }
    else if(Dropdown.options[Dropdown.selectedIndex].value
        ==="GU"){
    document.getElementById("chan1").textContent = guruData.actorName
    document.getElementById("chan2").textContent = guruData.releasedDate
    document.getElementById("chan3").textContent =guruData.budget
    document.getElementById("chan4").textContent =guruData.directorName
            
}
        
