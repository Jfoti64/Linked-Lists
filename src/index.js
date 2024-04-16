import LinkedList from './linkedList';
import Node from './node';

const node1 = new Node(2);
const list = new LinkedList(node1);

list.append(3);
list.prepend(1);

//console.log(list.head.next);
console.log(list.size());
list.pop();
console.log(list.size());
console.log(list.atIndex(1));