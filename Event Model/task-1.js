/*
 Create a function that takes an id or DOM element and:

 If an id is provided, select the element
 Finds all elements with class button or content within the provided element
 Change the content of all .button elements with "hide"
 When a .button is clicked:
 Find the topmost .content element, that is before another .button and:
 If the .content is visible:
 Hide the .content
 Change the content of the .button to "show"
 If the .content is hidden:
 Show the .content
 Change the content of the .button to "hide"
 If there isn't a .content element after the clicked .button and before other .button, do nothing
 Throws if:
 The provided DOM element is non-existant
 The id is either not a string or does not select any DOM element
*/

 function solve(){
    return function (selector) {
        var element = selector instanceof HTMLElement ? selector : document.getElementById(selector),
            buttons,
            i, j, len, index,
            allElementChildren = element.children;

        if (element === undefined){
            throw new Error(selector + ' is invalid argument!');
        }

        //buttons = element.getElementsByClassName('button');

        buttons = document.querySelectorAll('.button');

        for (i = 0; len = buttons.length, i < len; i+=1){
            buttons[i].innerHTML = 'hide'
        }

        for (i = 0; len = buttons.length, i < len; i++) {

            buttons[i].addEventListener('click', function(){
                var indexClickedButton = Array.prototype.indexOf.call(allElementChildren, this);

                for (j = indexClickedButton + 1; j < allElementChildren.length; j++) {
                    if (allElementChildren[j].className === 'content'){
                        for (index = j; index < allElementChildren.length; index++){
                            if (allElementChildren[index].className === 'button'){
                                if (allElementChildren[j].style.visibility === 'hidden'){
                                    allElementChildren[j].style.visibility = 'visible';
                                    this.innerHTML = 'hide';
                                    allElementChildren[index].innerHTML = 'hide';
                                }else{
                                    allElementChildren[j].style.visibility = 'hidden';
                                    this.innerHTML = 'show';
                                    allElementChildren[index].innerHTML = 'show';
                                }
                                return;
                            }
                        }
                    }else if (allElementChildren[j].className === 'button'){
                        return;
                    }
                }
            })
        }
    };
};

module.exports = solve;