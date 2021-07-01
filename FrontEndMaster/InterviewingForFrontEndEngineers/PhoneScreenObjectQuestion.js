/**

1. Create a "Foods" class or constructor that will take two arguments: a root element and a data object(foodData).

2. Render all of the items in the data object into the DOM with the root element as the parent

3. If the user clicks on a food item, it should be removed from the list

Rules:

- Only Vanilla JS
- Feel free to use Google, Bing, DuckduckGo to look things up
- Time limit: 30 minutes


/* DO NOT MODIFY */

const rootElement = document.querySelector('.foods');

const foodData = [
  {
    id: 1,
    image: 'taco',
    name: 'taco'
  },
  {
    id: 2,
    image: 'burger',
    name: 'burger'
  },
  {
    id: 3,
    image: 'eggplant',
    name: 'eggplant'
  },
  {
    id: 4,
    image: 'pancake',
    name: 'pancake'
  },
  {
    id: 5,
    image: 'apple',
    name: 'apple'
  }
];

/* DO NOT MODIFY */

class Food {
  constructor(el, foodData){
    this._root = el;
    this._data = foodData
  }

  renderList(){
    this._root.addEventListner('click', event =>{
      const { target } = event;
      target.remove()
    });

    const fragment = document.createDocumentFragment();

    this._data.forEach(i => {
      fragment.appendChild(this.createFoodItem(i));
    });

    this._root.appendChild(fragment);
  }

  createFoodItem(item){
    const itemEl = document.createElement('div');
    itemEl.innerText = item.image;
    itemEl.classList.add(item.name);

    return itemEl;
  }
}

/**
appending multiple times causes performance degradation
with createDocumentFragment, and using forEach to append to that fragment, after completion, you append and you only use it once.

Same thing with having the remove element in one function and using target, it allows for event delegation which also improve performance. 
**/
