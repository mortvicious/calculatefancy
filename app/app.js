(function() {

     const operators = document.querySelectorAll(`.operators`)
     const integers = document.querySelectorAll(`.btn-int`)
     const secondary = document.querySelectorAll(`.secondary-btn`)
     const display = document.querySelector(`.display`)
     const clearButton = document.querySelector(`.btn-clear`)
     const btnDot = document.querySelector(`.btn-dot`)
     const btnBack = document.querySelector(`.btn-back`)


     const oper = [`+`, `-`, `*`, `/`]
     let op

     hasDot = false
     let typed = false
     let hasInt = false
     let a
     let b 
     let c 


     (function() {
          clearButton.addEventListener(`click`, reset)
          btnDot.addEventListener(`click`, checkDot)
          btnBack.addEventListener(`click`, backspace)
     })();

     (function() {
          integers.forEach(integer => {
               integer.addEventListener(`click`, (number) => {
                    number = integer.textContent
                    hasInt = true
                    setDisplay(number)
                    checkInt()
               })
          })
     })();

     (function() {
          operators.forEach(operator => {
               operator.addEventListener(`click`, () => {
                    clean()
                    checkOperator(operator)
                    checkEqual(operator)
                    hasDot = false
               })
          })
     })();

     function reset() {
          a = undefined
          b = undefined
          typed = false
          clean()
          op = undefined
          console.log(`Reset. A: ${a}, B: ${b}, Operator: ${op}`)
     }

     function enter() {
          return parseFloat(display.textContent)
     }

     function sum() {
          c = a + b
          return c
     }

     function sub() {
          c = a - b
          return c
     }

     function mul() {
          c = a * b
          return c
     }

     function div() {
          c = a / b
          return  c
     }

     function clean() {
          display.textContent = ``
     }

     function setDisplay(s) {
          display.textContent += `${s}`
     }


     function setOp(s) {
          op = s
     }

     function backspace(str) {
          console.log(`clicked`)
          str = display.textContent
          newStr = str.slice(0, -1)
          display.textContent = newStr

               if (typed === false) {
                    a = parseFloat(display.textContent)
               } else if (typed === true) {
                    b = parseFloat(displat.textContent)
               }
     }

     function checkInt() {
          if (typed === false) {
               a = enter()
               console.log(`Declaration of A: ${a}`)////////
               console.log(`hasInt: ${hasInt}`)
          }
          if (typed === true) {
               b = enter()
               console.log(`Declaration of B: ${b}`)/////////
          }
     }


     function checkDot() {
          if(hasDot === false) {
               console.log(hasDot)
               hasDot = true
               s = `.`
               setDisplay(s)
               if (hasDot === true) {
                    console.log(`aw`)
                    return
               }
          }
     }

     function checkOperator(operator) {
          if (typed === false && hasInt === true) {
               if(operator.classList.contains(`btn-add`)) {
                    setOp(oper[0])
                    console.log(hasInt)
               }
               if(operator.classList.contains(`btn-mul`)) {
                    setOp(oper[2])
               }
               if(operator.classList.contains(`btn-div`)) {
                    setOp(oper[3])
               }
               if(operator.classList.contains(`btn-sub`)) {
                    setOp(oper[1])
               }         
               typed = true  
          }
          console.log(`Operator: ${op}, Cleaning display, cleaning logic input`)/////////
     }

     function checkEqual(operator) {
          if (typed === true && hasInt === true) {
               if(operator.classList.contains(`btn-equal`)) {
                    if (op == oper[0]) {
                         sum(a, b)
                    }
                    if (op == oper[2]) {
                         mul(a, b)
                    }
                    if (op == oper[3]) {
                         if (b == 0) {
                              reset()
                              return
                         } else {
                              div(a, b)
                         }
                    }
                    if (op == oper[1]) {
                         sub(a, b)
                    }
                    setDisplay(c)
                    typed = false
                    a = c
                    console.log(`Redeclaration of A: ${c}, Result: ${c}`)
               }
          } 
     }
})();

