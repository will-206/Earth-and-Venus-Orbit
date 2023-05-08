# Earth-and-Venus-Orbit
![petals](https://user-images.githubusercontent.com/20939293/236384715-1a3ff899-4b3e-4add-932d-810d6f190734.gif)

"When plotted geocentrically – from an Earth-centered perspective – there is a highly noticeable rhythm in the motion of Venus. After eight years, it returns to the same place in our sky on about the same date. This is known as the eight-year cycle of Venus, and stems from the fact that 13 Venusian orbits (13 x 224.8 days) very nearly equals eight Earth years. As a matter of fact, the cycle was known to, and of great interest to, ancient peoples such as the Maya. Today, many know it as the pentagram or petals of Venus." - https://earthsky.org/astronomy-essentials/five-petals-of-venus/

This is my attempt to recreate the animation from this reddit post in JavaScript
https://www.reddit.com/r/GeometryIsNeat/comments/7jayqw/the_orbits_of_earth_and_venus/

<p class="codepen" data-height="300" data-default-tab="html,result" data-slug-hash="PoyOBdJ" data-user="will-206" style="height: 300px; box-sizing: border-box; display: flex; align-items: center; justify-content: center; border: 2px solid; margin: 1em 0; padding: 1em;">
  <span>See the Pen <a href="https://codepen.io/will-206/pen/PoyOBdJ">
  Earth and Venus Orbit</a> by <a href="https://codepen.io/will-206">@will-206</a>
  on <a href="https://codepen.io">CodePen</a>.</span>
</p>
Based on bbaars solar system code (https://github.com/bbaars/SolarSystem)

This code creates an animated solar system scene on an HTML5 canvas with a background of stars, a sun, and two planets (Venus and Earth). The planets rotate around the sun in their respective orbits, and a line is drawn between Venus and Earth every third day for eight complete rotations of Earth. After eight rotations, the lines and planets start to fade out, leaving behind only the "Petals of Venus".
