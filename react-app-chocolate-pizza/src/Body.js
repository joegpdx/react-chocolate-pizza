import React, { Component } from "react";
import Date from "./Date.js"

export default class Body extends Component {
  render() {
    return <div>
        <h1>Chocolate Pizza</h1>
          <Date datetext="Posted on 15 Dec 2013" />
          <img src="print-icon.png" alt="print page icon" />
          <img src="choco-pizza.png" alt="Cholocate pizza with m and m toppings" />
            <p> For the fig-swirl: melt butter over medium heat in a saucepan. Add brown Sugar and stir to dissolve. have all of
            the figs and toss in the sausepan with water and lemon jucie. cook over medium heat, stirring frequently, until
            you have a chunky-jammy mixture. Add salt with one or two stirs, set aside and let cool completely.</p>
            
            <p>Ice cream: in an small pot over medium heat. combine milk, and granulated sugar until sugar is completely
                dissolved and the milk is just barely lukewarm. Whisk in the egg yolks. Set mixture in the fridge and wait until
                the fig mixture is cooled.</p>
                
            <p> Using an ice cream machine, pour liquids into the frozen basin and process according to manufacturer
            instructions, i.e., let spin and thicken for 20 minutes before adding mascarpone, fig jam mixture and the nuts.
            Continue to process for +/- 10 minuties. Pour semi-frozen into a pyrex dish or glass tupperware. Freeze for at
            least two hours before serving. </p>          

            <form id="form">
            <input type="checkbox" /> 1 ½ cups milk<br />
            <input type="checkbox" /> ½ cup marscapone<br />
            <input type="checkbox" />½ tsp pink salt<br />
            <input type="checkbox" />1 lb Black Mission Figs<br />
            <input type="checkbox" />½ cup brown sugar<br />
            <input type="checkbox" />2-4 tbsp water<br />
            <input type="checkbox" />1 ½ cups heavy cream<br />
            <input type="checkbox" /><del>1/3 granulated sugar</del><br />
            <input type="checkbox" /><del>2 egg yolks</del><br />
            <input type="checkbox" />1 lemon, juiced<br />
            <input type="checkbox" />2 tbsp butter<br />
            <input type="checkbox" />1 cup honey roasted pecans, roughly chopped<br />
            </form>
    </div>;
  }
}