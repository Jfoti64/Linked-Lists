import Node from "./node";

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  getListHead() {
    return this.head;
  }

  setListHead(newHead) {
    this.head = newHead;
  }

  getLastListItem() {
    const listHead = this.getListHead()
    if (listHead == null) {
      return listHead;
    }
    let currentItem = listHead;
    while (currentItem.next != null) {
      currentItem = currentItem.next;
    }
    return currentItem;
  }

  append(value) {
    const newNode = new Node(value);
    if (this.head === null) {
      // If the list is empty, set the new node as the head of the list
      this.head = newNode;
    } else {
      // If the list is not empty, find the last item and append the new node
      const lastItem = this.getLastListItem();
      lastItem.setNext(newNode);
    }
  }

  prepend(value) {
    
  }
  
}

export default LinkedList;
