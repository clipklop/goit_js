/***
 *  ## Задание 1 (Chaining)
***/

var ladder = {
    step: 0,
    up: function() { // вверх по лестнице
      this.step++;
      return this;
    },
    down: function() { // вниз по лестнице
      this.step--;
      return this;
    },
    showStep: function() { // вывести текущую ступеньку
      console.log( this.step );
      return this;
    }
  };

  // ladder.up().up().down().up().down().up().showStep().up().showStep();


/***
 *  ## Задание 2 (Calculator)
***/
function Calculator() {
  let methods = {
    "-": function(a, b) {
      return a - b;
    },
    "+": function(a, b) {
      return a + b;
    }
  };

  this.calculate = function(str) {
    let first = str.split(' ')[0], operator = str.split(' ')[1], second = str.split(' ')[2]
    return methods[operator](first, second);
    // return eval(first +operator+ second); // more cooler variant?
  }
  this.addMethod = function(name, func) {
    methods[name] = func;
  }
}
var calc = new Calculator;

console.log( calc.calculate('11 - 7') ); // 10

calc.addMethod('*', function(a, b) {
  return a * b;
});
calc.addMethod('/', function(a, b) {
  return a / b;
});
calc.addMethod('**', function(a, b) {
  return Math.pow(a, b);
});
// console.log( calc.calculate('99 * 3') ); // 10
// console.log( calc.calculate('99 / 3') ); // 10
// console.log( calc.calculate('99 ** 3') ); // 10

/***
 *  ## Задание 4 (Object counter)
***/

function Article() {
  this.created = new Date();
  // ... ваш код ...
  Article.count++;
  Article.date_created = this.created;
}

Article.count = 0;


Article.showStats = function() {
  console.log('Всего: ' +this.count+ ", Последняя: " +this.date_created);
}

// new Article();
// new Article();

// Article.showStats(); // Всего: 2, Последняя: (дата)

// new Article();

// Article.showStats(); // Всего: 3, Последняя: (дата)