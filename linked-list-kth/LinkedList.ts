kthFromEnd(k: number) {
    if (k < 0) {
      throw "k must be positive";
    }
    let tracker = this.start;
    let count = 0;
    tracker = this.start;
    while (tracker !== undefined) {
      count++;
      tracker = tracker.next;
    }
    tracker = this.start;
    count -= 1;
    if (k >= count) {
      throw "list too long";
    }
    while (tracker !== undefined) {
      if (count === k) {
        return tracker.item;
      }
      count--;
      tracker = tracker.next;
    }
  }