console.log('Meal Maker')
let menu = {
    _courses : 
    {
        appetizers : [],
        mains : [],
        desserts : [],
    },
    get appetizersIn() 
    {
        return this._courses.appetizers
    },
    get mainsIn() 
    {
        return this._courses.mains
    },
    get dessertsIn()
    {
        return this._courses.desserts
    },
    
    set appetizersIn(appetizers)
    {
        this.appetizers = appetizers
    },
    set mainsIn(mains)
    {
        this._courses.mains = mains
    },
    set dessertsIn(desserts)
    {
        this._courses.desserts = desserts
    },
    get coursesIn(){
        return {
            appetizers : this.appetizersIn,
            mains : this.mainsIn,
            desserts : this.dessertsIn,
        }
    },
    addDishToCourse(courseName, dishName, dishPrice)
    {
        const dish = {
            name: dishName,
            price: dishPrice
        }
        return this._courses[courseName].push(dish);
    },
      
    getRandomDishFromCourse(courseName)
    {
        const dishes = this._courses[courseName]
        const randomIndex = Math.floor(Math.random() * dishes.length)
        return dishes[randomIndex]
    },
    generateRandomMeal()
    {
        const appetizer = this.getRandomDishFromCourse('appetizers');
        const main = this.getRandomDishFromCourse('mains')
        const dessert = this.getRandomDishFromCourse('desserts')
        const totalprice = appetizer.price + main.price + dessert.price
        return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The total price is $${totalprice}`
    },
}
// console.log(menu.coursesIn)
// console.log(this._courses)
// menu.appetizersIn = 'Salad'
// console.log(menu.appetizersIn)
menu.addDishToCourse('appetizers', 'Ceaser Salad', 5)
menu.addDishToCourse('appetizers', 'King Salad', 5)
menu.addDishToCourse('appetizers', 'egg Salad', 5)

menu.addDishToCourse('mains', 'Rice', 5)
menu.addDishToCourse('mains', 'Biriyani', 5)
menu.addDishToCourse('mains', 'Pulao', 5)

menu.addDishToCourse('desserts', 'Icecream', 5)
menu.addDishToCourse('desserts', 'Gulab Jamun', 5)
menu.addDishToCourse('desserts', 'pastry', 5)

let meal = menu.generateRandomMeal()
// let meal = menu.addDishToCourse()
console.log(meal)