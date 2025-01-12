```javascript
db.collection('users').aggregate([
  {
    $project: {
      _id: 1,
      name: {
        $cond: {
          if: {
            $type: "$name" 
          },
          then: {
            $toString: "$name"
          },
          else: "$name"
        }
      }
    }
  },
  {
    $match: {
      name: { $regex: /John/i }
    }
  }
]).toArray((err, result) => {
  if (err) throw err;
  console.log(result);
});
```