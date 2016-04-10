$(function() {
    'use strict';
    console.log("ready!");
    var currentSection = "";

    changeContentSectionTo("#about");

    $("#menu-about, #menu-education, #menu-skills, #menu-contacts, #menu-interests").click(function(event) {
        var contentID = event.target.id.replace("menu-", "#");
        changeContentSectionTo(contentID, 700);
    });

    function changeContentSectionTo(sectionName, animationDuration) {
        if (currentSection !== sectionName) {
            $("#content").children().hide();
            $(sectionName).show(animationDuration ? animationDuration : 0, "linear");
            currentSection = sectionName;
        }
    }
});
