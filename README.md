
<p align="center">
  <img src="https://user-images.githubusercontent.com/85501738/155322196-b301af1d-94ec-4636-b802-df488f9db6dd.png" alt="Avocados" />
</p>

In this project I could practice fetching, Manipulation of DOM, grid only responsive design and price formatting.

<p align="center">
  <img src="https://user-images.githubusercontent.com/85501738/155338270-544dfb07-302d-433b-8aa9-e0b9596e301a.gif" alt="Project"/>
</p>

# features

## format price
Was used **Intl.numberFormat()**, in order to show avocados prices in the US currency format.

## Manipulation of DOM
First of all, the project fetch a [Platzi avocados API](https://platzi-avo.vercel.app "API") to get all related data about avocados.

Then, all the elements are creating using DOM manipulation with the Web API. Furthermore, The DocumentFragment object was implemented for prevent the needless usage of resource.


## Responsive design

with the objective of making a simply responsive design, was implemented grid layout.

the magic is in the next CSS code:
```
    grid-template-columns: repeat(auto-fit, minmax(325px, 1fr));
```

this sentence is applied to the grid which contains all avocado cards. In other words we are telling to the computer "place fit the grid with the condition that in each row each card will have at least 325px" so the grid only create new columns when fit a new 325px card. to Clarify, 1fr, means that all cards grow related to the column with in the same portion

## Dark mode
Using an eventListener in a pure css toggle, the project overwrite the root variables of color.


```
  document.body.classList.toggle("dark-theme");
```
Where the dark-theme is a CSS class in which are all the color variables.

# Aditional info
In this project was applied neumorphism design.
