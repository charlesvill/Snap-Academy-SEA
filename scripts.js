/**
 * Data Catalog Project Starter Code - SEA Stage 2
 *
 * This file is where you should be doing most of your work. You should
 * also make changes to the HTML and CSS files, but we want you to prioritize
 * demonstrating your understanding of data structures, and you'll do that
 * with the JavaScript code you write in this file.
 *
 * The comments in this file are only to help you learn how the starter code
 * works. The instructions for the project are in the README. That said, here
 * are the three things you should do first to learn about the starter code:
 * - 1 - Change something small in index.html or style.css, then reload your
 *    browser and make sure you can see that change.
 * - 2 - On your browser, right click anywhere on the page and select
 *    "Inspect" to open the browser developer tools. Then, go to the "console"
 *    tab in the new window that opened up. This console is where you will see
 *    JavaScript errors and logs, which is extremely helpful for debugging.
 *    (These instructions assume you're using Chrome, opening developer tools
 *    may be different on other browsers. We suggest using Chrome.)
 * - 3 - Add another string to the titles array a few lines down. Reload your
 *    browser and observe what happens. You should see a fourth "card" appear
 *    with the string you added to the array, but a broken image.
 *
 */
import dataSet from "./recipes/recipes.js";

console.log("the imported file is array? ", Array.isArray(dataSet));
// This function adds cards the page to display the data in the array
function showCards() {
  const cardContainer = document.getElementById("card-container");
  cardContainer.innerHTML = "";
  const templateCard = document.querySelector(".card");

  dataSet.forEach((recipe) => {
    const recipeName = recipe.title;
    const cookTime = Number(recipe.metadata.cook_time_minutes);
    const dietLabels = {
      "vegan": recipe.metadata.vegan,
      "vegetarian": recipe.metadata.vegetarian,
      "gluten_free": recipe.metadata.gluten_free
    };
    const imgUrl = recipe.metadata.image;
    const tags = recipe.metadata.tags;

    const nextCard = templateCard.cloneNode(true); // Copy the template card
    editCardContent(nextCard, recipeName, cookTime, dietLabels, imgUrl, tags); // Edit title and image
    cardContainer.appendChild(nextCard); // Add new card to the container
  });

}

function editCardContent(
  card,
  recipeName,
  cookTime,
  dietLabels,
  imageUrl,
  tags,
) {
  card.style.display = "block";

  const cardHeader = card.querySelector("h2");
  cardHeader.textContent = recipeName;

  const timeText = card.querySelector(".time");
  timeText.textContent = cookTime;
  console.log(timeText, "is the element found for timeTExt");
  console.log("time text: ", cookTime);

  // cycle through dietrary restriction labels & add relevant label to card
  createDietLabels(card, dietLabels);

  const cardImage = card.querySelector(".recipe-img");
  cardImage.src = imageUrl;
  cardImage.alt = recipeName + " Poster";

  console.log("new card:", recipeName, "- html: ", card);

  // tags 
  createTagCollection(card, tags);
}

function createDietLabels(card, dietObj) {
  const container = card.querySelector(".diet-list");

  for (const property in dietObj) {
    console.log(property);
    if (dietObj[property] == true) {
      const templateLabel = card.querySelector(".diet-item");
      console.log(templateLabel, "here is the template label");
      const newLabel = templateLabel.cloneNode(true);
      dietLabel(newLabel, property);
      container.appendChild(newLabel);
    }
    console.log("total structure of diet container: ", container);
  }
}

function dietLabel(labelElement, label) {
  const labelDirectory = {
    "vegan": "./assets/vegan.png",
    "vegetarian": "./assets/tag.png",
    "gluten_free": "./assets/gluten-free.png"
  };
  labelElement.style.display = "block";
  const labelImg = labelElement.querySelector("img");
  labelImg.src = labelDirectory[label];
  console.log("the source for new label made: ", labelDirectory[label]);
  labelImg.alt = label + " label";
}

function createTagCollection(card, tags) {
  const tagList = card.querySelector(".tags");
  tags.forEach((tag) => {
    const tagTemplate = tagList.querySelector(".tag-item");
    const newTag = tagTemplate.cloneNode(true);
    newTag.style.display = "block";
    newTag.textContent = tag;
    tagList.appendChild(newTag);
  });


}


// This calls the addCards() function when the page is first loaded
document.addEventListener("DOMContentLoaded", showCards);

function quoteAlert() {
  console.log("Button Clicked!");
  alert(
    "I guess I can kiss heaven goodbye, because it got to be a sin to look this good!",
  );
}

function removeLastCard() {
  titles.pop(); // Remove last item in titles array
  showCards(); // Call showCards again to refresh
}

// script -> html [cardcontainer]
//
//
// ** DRIVER SCRIPT **
// [show cards limit 10]
// [filter by tag event listener]
// [sort by cook time event listener]
//  [next page event listener if >= 10 results]
//
//
// ** DISPLAYING CARDS **
//
// [show cards] - map over data set
//      |
// [create card]
//
// ** MANIPULATE CARDS **
//
// [filter by unique tags]
//
//
//
//  [filter by vegan]
//
//
//  [filter by vegetarian]
//
//
// [sort by cook time]
//
