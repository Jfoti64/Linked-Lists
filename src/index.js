import LinkedList from './linkedList';
import Node from './node';

const node1 = new Node(2);
const list = new LinkedList(node1);

list.append(3);
list.append(4);
list.append(5);
list.prepend(1);

console.log(list.toString());
