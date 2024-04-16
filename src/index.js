import LinkedList from './linkedList';
import Node from './node';

const node1 = new Node(2);
const list = new LinkedList(node1);

list.append(3);

console.log(list.head.next);
