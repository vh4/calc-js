
const CACHE_KEY = "calculation_history";

function putHistory(data) {
    if (typeof(Storage) !== "undefined") {

        let historyData = null;

        if (localStorage.getItem(CACHE_KEY) === null) {
            historyData = [];
        } else {
            historyData = JSON.parse(localStorage.getItem(CACHE_KEY));
        }
  
        historyData.unshift(data);
        console.log(historyData)
  
        if (historyData.length > 5) {
            historyData.pop();
        }
  
        localStorage.setItem(CACHE_KEY, JSON.stringify(historyData));
    }
 }

 function showHistory() {
    if (typeof(Storage) !== "undefined") {
        return JSON.parse(localStorage.getItem(CACHE_KEY)) || [];
    } else {
        return [];
    }
 }

 function renderHistory() {
    const historyData = showHistory();
    let historyList = document.querySelector("#historyList");
  
  
    historyList.innerHTML = "";
  
  
    for (let history of historyData) {
        let row = document.createElement('tr');
        row.innerHTML = "<td>" + history.firstNumber + "</td>";
        row.innerHTML += "<td>" + history.operator + "</td>";
        row.innerHTML += "<td>" + history.secondNumber + "</td>";
        row.innerHTML += "<td>" + history.result + "</td>";
  
        historyList.appendChild(row);
    }
 }

 renderHistory();
