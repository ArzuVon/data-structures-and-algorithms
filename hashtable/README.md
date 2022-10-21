# Hashtables Challenge

A hash table or hash map is a data structure that implements a dictionary. It maps keys to values.

## Challenge

Implement a Hashtable Class with the following methods:

` set``get``has``keys``hash `

---

## Approach & Efficiency

Time: O(n)
Space: O(n)

---

## Whiteboard

---

## API

### `set`

- Arguments: key, value
- Returns: nothing

- This method should hash the key, and set the key and value pair in the table, handling collisions as needed.

- Should a given key already exist, replace its value from the value argument given to this method.

### `get`

- Arguments: key
- Returns: Value associated with that key in the table

### `has`

- Arguments: key
- Returns: Boolean, indicating if the key exists in the table already.

### `keys`

- Returns: Collection of keys

### `hash`

- Arguments: key
- Returns: Index in the collection for that key
