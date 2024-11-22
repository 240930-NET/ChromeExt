window.onload = async function() {

    

    document.body.addEventListener("click", (e) => {

        const myDiv = document.getElementById("recordings-drop-down");

        myDiv.focus();

        myDiv.click();

        console.log(myDiv);
        const text = e.target?.innerHTML
        
        //console.log(text);

        if(text == "Recordings") {
            let classCollection = document.getElementsByClassName("vjs-tech");

            if(classCollection) {
                console.log(classCollection);
            }
        }


    });



    //Get all the weeks
    // const weeks = document.querySelectorAll('[id^="week_"]');
    // const numofWeeks = weeks.length;
};