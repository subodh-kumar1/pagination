var current_page = 1; // Initial page num
var itemsPerPage = 2; // To show 2 records per page

var myObj = [
    { item: "item 1"},
    { item: "item 2"},
    { item: "item 3"},
    { item: "item 4"},
    { item: "item 5"},
    { item: "item 6"},
    { item: "item 7"},
    { item: "item 8"},
    { item: "item 9"},
    { item: "item 10"}
];

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}
function nextPage()
{
    if (current_page < maxNumOfPage()) {
        current_page++;
        changePage(current_page);
    }
}
function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > maxNumOfPage()) page = maxNumOfPage();

    listing_table.innerHTML = "";

    for (var i = (page-1) * itemsPerPage; i < (page * itemsPerPage); i++) {
        listing_table.innerHTML += myObj[i].item + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == maxNumOfPage()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}
function maxNumOfPage()
{
    return Math.ceil(myObj.length / itemsPerPage);
}
//initial load of page
window.onload = function() {
    changePage(1);
};
