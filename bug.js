```javascript
const query = { name: /John/i }; // Case-insensitive search

db.collection('users').find(query).toArray((err, result) => {
  if (err) throw err;
  console.log(result); 
});
```