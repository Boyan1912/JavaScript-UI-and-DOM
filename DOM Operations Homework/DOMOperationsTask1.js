/*Create a function that takes an id or DOM element and an array of contents

 if an id is provided, select the element
 Add divs to the element
 Each div's content must be one of the items from the contents array
 The function must remove all previous content from the DOM element provided
 Throws if:
 The provided first parameter is neither string or existing DOM element
 The provided id does not select anything (there is no element that has such an id)
 Any of the function params is missing
 Any of the function params is not as described
 Any of the contents is neight string or number
 In that case, the content of the element must not be changed
*/

function solve(){
    function checkIfUndefined(input){
        if (input === undefined){
            throw Error(input + ' is undefined!');
        }
    }

    function validateArray(input){
        if (Array.isArray(input)){
            var i, len;
            for (i = 0; len = input.length, i < len; i++) {
                checkIfUndefined(input[i]);
                if (typeof input[i] !== 'string'){
                    if (typeof input[i] !== 'number'){
                        throw Error
                    }
                }if (typeof input[i] !== 'number'){
                    if (typeof input[i] !== 'string'){
                        throw Error
                    }
                }
            }
        }else{
            throw new Error(input + ' must be an array!');
        }
    }

    return function changeContent(element, contents){
        checkIfUndefined(element);
        validateArray(contents);

        var dFrag = document.createDocumentFragment();
        var sampleDiv = document.createElement('div');

        for (var i = 0; i < contents.length; i++) {
            var div = sampleDiv.cloneNode(true);
            div.innerHTML = contents[i];
            dFrag.appendChild(div);
        }
        var mainElement = document.getElementById(element) || element;
        checkIfUndefined(mainElement);
        mainElement.innerHTML = '';
        mainElement.appendChild(dFrag);
    }
}
