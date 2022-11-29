# CSS Grid

CSS Grid can be used to build simple and skeletal layouts. It can also be used to create polished, professional-level layouts.

Here, we are going to re-create the design of an online furniture store with CSS Grid.

## Instructions

### Part 1: Hero Section

The final result, that we are going to build be like, (images/part-1-solution.png)

* In `style.css`, create a selector that targets the `heroGrid ID` and add the properties,
            margin: 0px 5%;
            display: grid;
            min-height: 500px;
            height: 70vh;

* Use the `grid-template-rows:`,`grid-template-columns:`, and `grid-template-areas`: properties to create the structure of the CSS Grid.

* The `#heroGrid` ID at the top of the page has two rows and two columns, and, the first row and first column each occupy `75%` of their respective areas.The second row and second column each occupy the remaining `25%` of their respective areas. Apply it for the `grid-template-rows:` and `grid-template-columns:` properties, and, finally add, `#heroGrid{ grid-template-areas: }`.

*The `featuredProduct` occupies the top and bottom left areas, the `secondaryProduct` is in the top right, and the `CTA` is in the bottom right.

* Add content to the CSS Grid.

* Create three CSS selectors that target the IDs of each area within the grid from the HTML: `featuredProduct`, `secondaryProduct`, and `CTA`. Within each selector, define the value for the `grid-area:` property so that each CSS selector and the CSS contained within it is associated with the correct area within the grid.

* Add a `background-image:` to each `.heroGridArea` class selector using the images provided in the images folder.

* Add the following properties and values to the `#CTA ID` selector. These will be used to style content within this grid area.
          grid-area: CTA;
          justify-content: space-around;
          cursor: pointer;
          background-image: url("../images/woodbg.png");

Create a CSS selector that targets the `.heroGridArea` class and add the following CSS properties:
          background-position: center;
          background-repeat: no-repeat;
          background-size: cover;
          align-items: center;
          display: flex;
          position: relative;

* In order to align the headline `div`, add a `border: 5px solid #FF6200;`.

* Next, add a transparent `background-color:`, and set the value to `rgba(255,255,255,0.8);`. It will set the background color to white at 80% opacity. 

* Position the headline `div`  to `position: absolute;`so that it’s floating above and between the `featuredProduct` and `secondaryProduct` grid areas.

* Lastly, add a `z-index value` to move the `headline` `div` above its parent and then add `padding` to create some spacing.

* Now, finally, open index.html in your browser. You should see your final result—the grid you just built!

