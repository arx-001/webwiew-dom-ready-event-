
input.addEventListener("keyup", function (event) {

    if (event.keyCode === 13) {
        var keyword = input.value
        event.preventDefault();
        $("#tab-content >.active>#view").attr({ "src": "https://www.google.com/search?q=" + keyword + "" });
    }

    // debounce handler
    function debounce(fn, delay) {
        let timeoutId;

        return function () {
            if (timeoutId) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(() => {
                fn();
            }, delay);
        };
    }

    document.querySelector("#tab-content >.active>#view").addEventListener(
        "dom-ready",
        debounce(function () {
            console.log("loded time");
            // console.log(document.querySelector("#tab-content >.active>#view").getTitle())
        }, 5000)

    );
});



