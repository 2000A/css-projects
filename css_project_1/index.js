console.log(document.getRootNode());
const rootNode = document.getRootNode();
console.log(rootNode);

console.log(rootNode.childNodes);

const childOfRoot = rootNode.childNodes[1];
console.log(childOfRoot.childNodes);

const rootElement = childOfRoot.childNodes;
console.log(rootElement);

// rootElement.forEach((childs)=>{
//     console.log(childs);
// })
const headElement = rootElement[0];
const text = rootElement[1];
const body = rootElement[2];

console.log(headElement);

//parent relationship
console.log(headElement.parentNode);
console.log(text.parentNode);


//sibling
console.log(headElement.nextSibling);
console.log(headElement.nextSibling.nextSibling);
console.log(headElement.nextElementSibling);//it will skip text

console.log(headElement.childNodes);
console.log(body.childNodes);

const h1 = document.querySelector("h1");
const bodykhoj = h1.parentNode.parentNode.parentNode;
console.log(bodykhoj);

