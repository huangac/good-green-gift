let link = new Array; let site = new Array; let url = new Array; let category = new Array; let keywords = new Array;

link[0] = "Where do we ship to?"; site[0] = "We currently only deliver our plant locally in Los Angeles but we are planning to expand in the next few months!";
link[1] = "What makes the Good Green Gift different from usual plant pots?"; site[1] = "The Good Green Gift is a unique plant pot that offers a sustainable and eco-friendly way of watering plants. Unlike traditional plant pots, the Good Green Gift has a 3-D modeled design that features a hole to fill the water in just once. Once filled, the water sits at the bottom of the pot, providing a constant supply of water to the roots of the plant. ";
link[2] = "What was the inspiration behind Good Green Gift?"; site[2] = "The inspiration behind the Good Green Gift stemmed from the common problem of plants wilting and dying due to the inability to keep up with regular watering, especially for busy individuals such as college students. Recognizing the need for a practical and sustainable solution, the team behind the Good Green Gift designed a pot that provides a constant supply of water to the roots of the plant, alleviating the need for frequent watering and allowing the plant to thrive. The result is a convenient and eco-friendly product that allows even the busiest individuals to enjoy the benefits of indoor plants without the stress of maintenance.";
link[3] = "How does the Good Green Gift work?"; site[3] = "The pot features a hole at the top for filling water, which is then stored in a reservoir at the bottom of the pot. The plant sits on top of a perforated platform that allows water to seep through and reach the roots of the plant. As the plant draws water from the reservoir, the level of water in the pot decreases, creating a vacuum that allows the pot to draw more water from the reservoir when needed. This ensures that the plant always has access to the right amount of water and prevents over or under watering.";
link[4] = "How many colors do we make?"; site[4] = "We currently have only 1 color, which is our signature white.";
link[5] = "How much does the Good Green Gift cost?"; site[5] = "Each pot is $24.99.";
link[6] = "How are we entering the market?"; site[6] = "We are bringing 'The Good Green Gift' to market. We plan to grow this business through social media branding, visual marketing and focus on sustainable gifting. ";
link[7] = "Who are our competitors and what makes us different?"; site[7] = "LivelyRoot, BloomScape, The Sill are all competitors but what sets us apart is their ability to remove everyday inconveniences from people’s lives.";
link[8] = "Who is the team behind the Good Green Gift?"; site[8] = "Our team is Kaylie Li, the product manager, BJ Moon, the designer, Dominic Jocus, product designer, Tiana Day, marketing manager, Diora Juraboeva, engineer. We are a team of innovative USC students who are passionate about creating unique and sustainable self-watering pots and indoor plant kits that provide the 'gift of life' and inspire meaningful gift-giving experiences.";
link[9] = "What makes our packaging so convenient?"; site[9] = "All you have to do is lift up the top and all the sides of the box open up. ";
link[10] = "How can you personalize your pot?"; site[10] = "We will soon be coming out with a painting set alongside our pots so that people can paint and personalize their pots.";
link[11] = "How did we come up with the design?"; site[11] = "Our team did a lot of research on the development of “self-watering” technique and its effectiveness, the waterproofing techniques, and also into the 3-D printing techniques.";
link[12] = "What is our mission?"; site[12] = "Our mission is to provide our customers with the 'gift of life' through our innovative 3D printed self-watering pots and indoor plant kit, creating meaningful gift-giving experiences that live beyond the moment.";
link[13] = "What do our customers say about us?"; site[13] = "Notion";
link[14] = "What market are we exploring?"; site[14] = "The household plant and gift-giving industry is a rapidly growing market, with an estimated value of over $22 billion in 2020. This industry is driven by a growing interest in houseplants and their associated health and wellness benefits, as well as an increasing desire for unique and meaningful gift-giving experiences.";

let code = "";

const match = function (input) {
    let ifmatch = false
    if (input !== "") {
        for (let i = 0; i < link.length; i++) {
            if (link[i].toLowerCase().indexOf(input) >= 0 ||
                site[i].toLowerCase().indexOf(input) >= 0) {
                ifmatch = true;
            }
            if (ifmatch) {
                results(i);
            }

            ifmatch = false
        }
    }


}

const results = function (i) {
    code += "<h2>" + link[i] + "</h2><br/>";
    code += site[i] + "<br/><br/>";

}

$(document).ready(function () {
    for (let i = 0; i < link.length; i++) {
    code += "<h2>" + link[i] + "</h2><br/>" + site[i] + "<br/><br/>";
    }
    document.querySelector("#content").innerHTML = code;

    $("#searchbutton").on("click", function () {
        $("#content").css("position", "absolute");
        code = "";

        let input = $("#searchVal").val().toLowerCase();
        match(input);
        if (code == "") {
            code += "no results"
        }


        $("#content").html(code);
        $("#content").css("visibility", "visible");

    })
})

function evaluate() {

    // check the value of  #episodeselect and fill in the .innerHTML of the #episodesummary div accordingly 
    if (document.querySelector("#faqselect").value == "all") {
        code = "";
        for (let i = 0; i < link.length; i++) {
            code += "<h2>" + link[i] + "</h2><br/>" + site[i] + "<br/><br/>";
            }
            document.querySelector("#content").innerHTML = code;
    }
    if (document.querySelector("#faqselect").value == "about purchasing") {
        code = "";
        code += "<h2>" + link[0] + "</h2><br/>" + site[0] + "<br/><br/>";
        code += "<h2>" + link[4] + "</h2><br/>" + site[4] + "<br/><br/>";
        code += "<h2>" + link[5] + "</h2><br/>" + site[5] + "<br/><br/>";
        document.querySelector("#content").innerHTML = code;
    }
    if (document.querySelector("#faqselect").value == "about the business") {
        code = "";
        code += "<h2>" + link[6] + "</h2><br/>" + site[6] + "<br/><br/>";
        code += "<h2>" + link[7] + "</h2><br/>" + site[7] + "<br/><br/>";
        code += "<h2>" + link[8] + "</h2><br/>" + site[8] + "<br/><br/>";
        code += "<h2>" + link[12] + "</h2><br/>" + site[12] + "<br/><br/>";
        code += "<h2>" + link[14] + "</h2><br/>" + site[14] + "<br/><br/>";
        document.querySelector("#content").innerHTML = code;
    }
    if (document.querySelector("#faqselect").value == "about the product") {
        code = "";
        code += "<h2>" + link[1] + "</h2><br/>" + site[1] + "<br/><br/>";
        code += "<h2>" + link[2] + "</h2><br/>" + site[2] + "<br/><br/>";
        code += "<h2>" + link[3] + "</h2><br/>" + site[3] + "<br/><br/>";
        code += "<h2>" + link[9] + "</h2><br/>" + site[9] + "<br/><br/>";
        code += "<h2>" + link[10] + "</h2><br/>" + site[10] + "<br/><br/>";
        code += "<h2>" + link[11] + "</h2><br/>" + site[11] + "<br/><br/>";
        code += "<h2>" + link[13] + "</h2><br/>" + site[13] + "<br/><br/>";
        document.querySelector("#content").innerHTML = code;
    }

}

document.querySelector("#check").addEventListener("click", function () {
    evaluate();
});