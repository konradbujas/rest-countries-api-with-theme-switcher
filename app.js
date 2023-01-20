
import { renderDashboard } from "./view-dashboard.js";
import { renderDetail } from "./view-detail.js";

// console.log('Hey there! ;)');

if (window.location.search.includes("?country=")) {
    // console.log("routing learning work perfect ! ;D");
    
    renderDetail();
} else {
    document.querySelector(".filters").classList.add("active");
    renderDashboard();
};