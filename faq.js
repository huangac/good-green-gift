let link = new Array; let site = new Array; let url = new Array; let category = new Array; let keywords = new Array;

link[0] = "Piskel - free online sprite editor" ; site[0] = "Piskel" ; url[0] = "https://www.piskelapp.com/" ; category[0] = "Art" ; keywords[0] = "pixel art sprite game" ;
link[1] = "Home" ; site[1] = "Pinterest" ; url[1] = "https://www.pinterest.com/" ; category[1] = "Social Media" ; keywords[1] = "moodboard pictures aesthetic " ;
link[2] = "Spotify web player" ; site[2] = "Spotify" ; url[2] = "https://open.spotify.com/" ; category[2] = "Music" ; keywords[2] = "playlist songs album singer" ;
link[3] = "Iovine and Young Academy" ; site[3] = "University of Southern California" ; url[3] = "https://iovine-young.usc.edu/" ; category[3] = "School" ; keywords[3] = "dr dre andre jimmy usc iya cohort arts technology and the business innovation" ;
link[4] = "Jacqueline Sung's LinkedIn" ; site[4] = "LinkedIn" ; url[4] = "https://www.linkedin.com/in/jacqueline-sung-83b540248/" ; category[4] = "Work" ; keywords[4] = "link work jobs resume connections" ;
link[5] = "Figma Community" ; site[5] = "Figma" ; url[5] = "https://www.figma.com/community" ; category[5] = "Design" ; keywords[5] = "mockups uiux flow frameworks" ;
link[6] = "USC's Premiere Creative Design Agency" ; site[6] = "Innovative Design at USC" ; url[6] = "https://www.innodatusc.com/" ; category[6] = "Design" ; keywords[6] = "innoD clubs student organization" ;
link[7] = "Home" ; site[7] = "New Jeans" ; url[7] = "https://newjeans.kr/" ; category[7] = "Kpop" ; keywords[7] = "hybe danielle minji haerin hyejin hanni music" ;
link[8] = "Home" ; site[8] = "DoorDash" ; url[8] = "https://www.doordash.com/" ; category[8] = "Food" ; keywords[8] = "delivery pickup restaurants menus" ;
link[9] = "skribbl - Free Multiplayer Drawing & Guessing Game" ; site[9] = "skribbl" ; url[9] = "https://skribbl.io/" ; category[9] = "Game" ; keywords[9] = "pictionary online draw play " ;
link[10] = "Home" ; site[10] = "Amazon" ; url[10] = "https://www.amazon.com/" ; category[10] = "Shopping" ; keywords[10] = "online catalog delivery pickup " ;
link[11] = "Coolors - The super fast color palettes generator!" ; site[11] = "Coolors" ; url[11] = "https://coolors.co/" ; category[11] = "Design" ; keywords[11] = "palette generate hues RGB colors" ;
link[12] = "Home" ; site[12] = "Instagram" ; url[12] = "https://www.instagram.com/" ; category[12] = "Social Media" ; keywords[12] = "photos aesthetic friends post stories messaging" ;
link[13] = "Home" ; site[13] = "Notion" ; url[13] = "https://www.notion.so/" ; category[13] = "Productivity" ; keywords[13] = "work jobs management organization" ;
link[14] = "Home" ; site[14] = "HBO Max" ; url[14] = "https://www.hbomax.com/" ; category[14] = "Entertainment" ; keywords[14] = "movies series tv shows " ;
link[15] = "Netflix - Watch TV Shows Online, Watch Movies Online" ; site[15] = "Netflix" ; url[15] = "https://www.netflix.com/" ; category[15] = "Entertainment" ; keywords[15] = "movies series tv shows" ;
link[16] = "Home" ; site[16] = "Youtube" ; url[16] = "https://www.youtube.com/" ; category[16] = "Social Media" ; keywords[16] = "watch videos youtuber entertainment " ;
link[17] = "Minesweeper Online - Play Free Online Minesweeper" ; site[17] = "Minesweeper" ; url[17] = "https://minesweeperonline.com/" ; category[17] = "Game" ; keywords[17] = "simple play game mine online" ;
link[18] = "TikTok - Make Your Day" ; site[18] = "TikTok" ; url[18] = "https://www.tiktok.com/en/" ; category[18] = "Social Media" ; keywords[18] = "short videos entertainment funny " ;
link[19] = "POPCAT" ; site[19] = "Popcat" ; url[19] = "https://popcat.click/" ; category[19] = "Game" ; keywords[19] = "fun cat cute play click tap" ;

let code="";

const match = function(input){
    let ifmatch = false
    if(input !== ""){
        for(let i = 0 ; i < link.length ; i++){
            if(link[i].toLowerCase().indexOf(input)>=0||
                site[i].toLowerCase().indexOf(input)>=0||
                url[i].toLowerCase().indexOf(input)>=0||
                category[i].toLowerCase().indexOf(input)>=0||
                keywords[i].toLowerCase().indexOf(input)>=0)
                {
                    ifmatch=true;
                }
                if(ifmatch){
                    results(i);
                }
                
                ifmatch=false
        }
    }
    
    
}

const results= function(i){
    code += link[i] + "<br/>";
    code += site[i] + "<br/>";
    code += category[i] + "<br/>";
    code += "<a href='" + url[i] + "'><p>Visit</p></a>";
    code += "<br />"
}

$(document).ready(function() {
    $("#searchbutton").on("click", function () {
        $("#content").css("position", "absolute");
        code="";

        let input = $("#searchVal").val().toLowerCase();
        match(input);
        if(code==""){
            code += "no results"
        }


        $("#content").html(code);
        $("#content").css("visibility", "visible");

    })
})