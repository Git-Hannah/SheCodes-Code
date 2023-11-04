Notes

Question in Slack:
Hellohello, I have a question:
Something is strange in my if-statement, because when there is an answer given in the prompt, it alerts the correct answer, but ALSO then alerts the answer of the else-statement! where did I go wrong?
Code in thread!

````
function catSurvey() {
                let zodiac = prompt("What is your zodiac sign?");
                zodiac = zodiac
                    .toLowerCase()
                    .trim()
                    .replace("sagitarius", "sagittarius");
                if (
                    zodiac === "aries" ||
                    zodiac === "leo" ||
                    zodiac === "sagittarius"
                ) {
                    alert("The perfect cat for you is a Ginger cat!");
                }
                if (
                    zodiac === "taurus" ||
                    zodiac === "virgo" ||
                    zodiac === "capricorn"
                ) {
                    alert("The perfect cat for you is a Tabby cat!");
                }
                if (
                    zodiac === "gemini" ||
                    zodiac === "libra" ||
                    zodiac === "aquarius"
                ) {
                    alert("The perfect cat for you is a White cat!");
                }
                if (
                    zodiac === "cancer" ||
                    zodiac === "scorpio" ||
                    zodiac === "pisces"
                ) {
                    alert("The perfect cat for you is a Black cat!");
                } else {
                    alert("The perfect cat for you is a Calico cat!");
                }
            }

            let askButton = document.querySelector("button");

            askButton.addEventListener("click", catSurvey);

            ```

    Answer from Kat:
    for if else statements, if there are more than 2 conditions, you have to use "else if" for the middle condition(s) and "else" for the last condition. you can refer to the code snippets on lesson 6 on how to do it.

    ```
if (age < 18) {
  alert("you can't apply");
} else {
  if (age > 120) {
    alert("you can't apply");
  } else {
    alert("you can apply");
  }
}
    ```


