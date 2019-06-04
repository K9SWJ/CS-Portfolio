var text="I am a student at Summit Denali in Sunnyvale. For my first ever high school electives course I decided to take on Intro to Programing. I had Mr.Hesby in the past so I knew he was a cool dude (or at least I hoped he still was) so I was pretty compfortable going in. <img src='http://www.summitps.org/uploads/images/schoolpages/Denali%20Mascot.png'>";
function displayparagraph() {
    var paragraph = document.getElementById("paragraph");
    paragraph.innerHTML = text;
}

var text2="Before going in I had already passed HTML and was very compfortable. As I said before I had Mr.Hesby in 6th and 7th grade so I already knew a little bit about coding. However, I knew very little about HTML and CSS. The class has been awesome and so much fun. I have done so much in this class and feel very accomplished about my work.";
function displayparagraph2(){
    var paragraph = document.getElementById("paragraph2");
    paragraph.innerHTML = text2;
}

var text3="My mom works as a lunch server for Summit Denali at the Middle School. This has helped me know all my teachers very well as well as get to know a lot of the expedition teachers since I usually have to stay after school. My dad works for Marvell Computer Chips and has a friend that programs some of the websites. I got to meet him and see the code, how it works, and what he does all day.<a href=\"https://www.marvell.com/\"> Marvell's website (please press ctrl before clicking the website)</a>";
function displayparagraph3(){
    var paragraph = document.getElementById("paragraph3");
    paragraph.innerHTML = text3;
}

var text4="In my free time I like to learn different languages on <strong>Duolingo.</strong> Jag <em>talar</em>, <em>skriva</em>, och <em>läser</em> Svenska. I also play competitve soccer for Sunnyvale Alliance. Our last tournament we won 3rd place and I helped my team by scoring a goal as well as assisting the second goal. For the rest of the season we aim to not lose a single game and win all the tournaments we play in. <br><img src='https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg' height='160'><img src='https://www.gotsport.com/content/clubs/logos/c_16185.jpg' height='160'>";
function displayparagraph4(){
    var paragraph = document.getElementById("paragraph4");
    paragraph.innerHTML = text4;
}
var text5="I play drums at home and currently own a black Ludwig drum set. I take drum lessons at <strong>5 Star Music</strong>. <a href= https://www.ludwig-drums.com/> This is a link to the Ludwig website. (Again please press ctrl before openning the page.)";
function displayparagraph5(){
    var paragraph = document.getElementById("paragraph5");
    paragraph.innerHTML = text5;
}
var text6="I come from a very European family. My family is <strong>Czech, Polish, Swedish, Irish and mostly German </strong>. During the World Cup me and my brother made bets about which team would win in the group stage. It was Sweden vs Germany. My brother speaks German while I speak Swedish so during the entire match we would go back and forth saying which side was better. <br> <img src='https://upload.wikimedia.org/wikipedia/en/4/4c/Flag_of_Sweden.svg' height='120'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANMAAAB+CAMAAACJW9TbAAAAElBMVEUAAAD/zgDdAADvAADYAAD/4ADMPp7AAAAAf0lEQVR4nO3PCRHAQAwAofTzb7k2bjPggBkAAAAAAAAAADjAs8/c+zg1ODU4NTg1ODU4NTg1ODU4NTg1ODU4NTg1ODU4NTg1ODU4NTg1rDy9+8y3z1z7ODU4NTg1ODU4NTg1ODU4NTg1ODU4NTg1ODU4NTg1ODU4NTg1ODU4NfzXW22gUeWztgAAAABJRU5ErkJggg==' height='120'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAACDCAMAAADPlbUiAAAADFBMVEX////cFDzup67aACP8CdZBAAAAcElEQVR4nO3PMRHAMAwAMTfhz7kUsr5PYqAZAAAAAAAAAAAAAAAAAF6ddeauM986SgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgVKBUoFSgULSz/gWDib6qMEXgAAAABJRU5ErkJggg==' height='120'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABkCAMAAAC8R1L8AAAAY1BMVEX////XFBoRRX7UAAAAP3vdERIAOnluiKqQKkhHapbl6vArVok/PW7IGCNsNFuzHzGrIjcvQHR3MFRSOWaWKES9HCxiNmCCLk/W3udTc5ubrMSInbixvtDEAABjKlZ8krGeJ0FFsv2GAAACGklEQVRogc3ZCXKCQBCFYWgJwUhM0Oz7/U+ZIRNLBYFZenl9gq/+emNKU1zfFJBXbT6sCRePqIZMRg5GgMmov/oVLtmfi/BWRv+HluzgogprZXSEVUjJ6OSQktHZ1WuUZOcul+zNWuSPhgfyMEcuqmqEZGOXk61frFkXXQgP86ILYGUTLvOVTbn6ZJYrm3bZJptx9R//ZslmXYYf//Muu5UtuaxWtugyWlmAy2RlIS6LZGEut7J3SJd6smCX+16imSzc5ZJt9JLFuNzD/IZ0Ka4s0uUepk6yWJfWyuJdOg8zwaWSLMnVr0z4e0maq/8lTzZZqkv6L2ayy62sEkyW4XLN5FaW5RJ8mHkuuf9K5LqkfmLPdgl9luW7+pXxJ+NwSayMx8W/MiYXezI2F319rviOzdX9XJWMx+V6umVlMbmYY3G5tsyxeFz8sVhcArEYXN29hCrbJRMr2yUUK9O1K8VYGS6pZWW6xJaV5eruRFWpLsllpbtkl5Xs2orHSnG10stKc8kvK8WlsawE126lxYpxKS0r1qW1rDiXaqxw17NqrFBXq/YMo1zqsYJc+0d9VYDLItayS/sZBroaI9W8y2ZZi67GZlkLLstYM67GEjXpam1jTbnsnuGcay/7jTXVZb0sf0NXixCrHLkeMFQDF8Sy/J26MJblr0CMVR5dHcyy/BWIscqDCyxW6V3c/3PiuAJuWf4KxFjufgE8I0BY4n1u5gAAAABJRU5ErkJggg==' height='120'><img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJcAAABLCAMAAABKveUfAAAAUVBMVEX///8AcznnYwDh4eEAbSuesabZva7mXQDwnnSEsZcAbS3pWQCsvrTTrp3oXAAAZhrrTwDxm27oUwDj3dnT19XAzMXcx7zZuajN0c+2w7ze19MKY1JCAAAAgElEQVRoge3a6xHBQABG0Q3ZRYLEc9F/oWr4xoxf51ZwCrjlVdPe27R2SvuUuoxZy6GkXa7nrLWXOg5ZU+7a7zZZc+Pi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi4uLi+tX1l391zlp7uR/THvHv+2xh/fYFPOFHebfRwQQAAAAASUVORK5CYII=' height='120'>";
function displayparagraph6(){
    var paragraph = document.getElementById("paragraph6");
    paragraph.innerHTML = text6;
}