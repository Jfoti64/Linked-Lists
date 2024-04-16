class Node {
  constructor(value = null) {
    this.value = value;
    this.next = null;
  }

  getValue() {
    return this.value;
  }

  setValue(newValue) {
    this.value = newValue;
  }

  setNext(nextValue) {
    this.next = nextValue;
  }
}

export default Node;
