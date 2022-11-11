# Graph Business Trip

>Given a business trip itinerary, and an Alaska Airlines route map, is the trip possible with direct flights? If so, how much will the total trip cost be?

## Challenge

- Write a function called business trip
  - Arguments: graph, array of city names
  - Return: the cost of the trip (if it’s possible) or null (if not)

---

### Approach & Efficiency

- While we can go through the list
- Find the adjacent city
- If the next city is not adjacent, return null / Otherwise, add the cost and continue

---

## [Whiteboard](https://miro.com/app/board/uXjVPdgoi_Q=/)


---

### Big O

- Time: O(n)
- Space: O(n)
