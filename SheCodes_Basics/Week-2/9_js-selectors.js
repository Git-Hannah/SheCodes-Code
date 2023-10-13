//Challenge:
//Select the h2 https://www.shecodes.io/
//How many students do we have listed on the page? https://shecodes.io/students

//Answer:
//1. selected h2 on page:
document.querySelector("h2");
//output:
//<h2 class="p-0">
//							Access a new career in Technology
//						</h2>
//2. All students listed are wrapped in a div with the class of .coder, so:
document.querySelectorAll(".coder");
//output: NodeList(100)
//100 Students are listed on the page!
