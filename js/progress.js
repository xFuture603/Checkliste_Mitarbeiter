// changing progressbar when button is clicked
$(".button").click(function () {
    animateProgress(parseInt($(this).data('diff')));
});

// animate progress by a step indicated by data-diff
function animateProgress(diff) {
    var currValue = $("#progress").val();
    var toValue = currValue + diff;
    
    toValue = toValue < 0 ? 0 : toValue;
    toValue = toValue > 100 ? 100 : toValue;

    $("#progress").animate({'value': toValue}, 500);
}