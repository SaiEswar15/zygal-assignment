function weekArray(startDay, endDay)
{
    const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
    let arr = [];

    // Find the index of the start day
    const startIndex = days.indexOf(startDay);

    // Loop from the start day to the end day, wrapping around if necessary
    let currentIndex = startIndex;

    do {
    console.log(days[currentIndex]);
    arr.push(days[currentIndex]);

    if (days[currentIndex] === endDay) {
        break;
    }

    currentIndex = (currentIndex + 1) % days.length;
    } while (true);

    return arr;
}

function getFirstDayOfMonth(year, month) {
    
    const firstDay = new Date(year, month - 1, 1);
    const num = firstDay.getDay(); 
    if(num===0) return "Mon"
    if(num===1) return "Tue"
    if(num===2) return "Wed"
    if(num===3) return "Thu"
    if(num===4) return "Fri"
    if(num===5) return "Sat"
    if(num===6) return "Sun"
    
}

function getEndDayOfMonth(year, month) {
    
    const endDay = new Date(year, month - 1, 1);
    const num = endDay.getDay(); 
    if(num===0) return "Sun"
    if(num===1) return "Mon"
    if(num===2) return "Tue"
    if(num===3) return "Wed"
    if(num===4) return "Thu"
    if(num===5) return "Fri"
    if(num===6) return "Sat"
    
}



const years = {};


function updateDays() {
    const month = parseInt(document.getElementById("month").value); //August
    const year = parseInt(document.getElementById("year").value); //2023
    const daysInMonth = new Date(year, month, 0).getDate();
    const highlightNumber = parseInt(document.getElementById("highlight-number").value); //23

     
    if(!years[year])
    {
        years[year] = {}; //2023 : {}
    }
    const selectedYear = years[year]; 

    if(!selectedYear[month])
    {
        selectedYear[month] = {};  // 2023 : {August : {}}
    }  
    const selectedMonth = selectedYear[month]; 
    

    selectedMonth[highlightNumber] = !selectedMonth[highlightNumber];

    // console.log(years);
    
    const weeksContainer = document.getElementById("weeks-container");
    weeksContainer.innerHTML = "";

    const buttonsContainer = document.getElementById("buttons-container");
    buttonsContainer.innerHTML = "";

    const startDay = getFirstDayOfMonth(year, month);
    const endDay = getEndDayOfMonth(year, month);

    const arr = weekArray(startDay, endDay);

    for(let i = 0;i<arr.length;i++)
    {
        const button = document.createElement("button");
        button.classList.add("week-btn");
        button.textContent = arr[i];
        weeksContainer.appendChild(button);
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const button = document.createElement("button");
        button.classList.add("day-button");
        button.textContent = i;
        
        if (selectedMonth[i]) {
            button.classList.add("green-bg");
        }
        buttonsContainer.appendChild(button);
    }
}

