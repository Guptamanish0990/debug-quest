export const LEVELS_MONGODB = [
  // ========== EASY (30 Questions) ==========
  {
    id: 401,
    title: "Missing $ Operator",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Using SQL-style operators in MongoDB.",
    buggyCode: `db.users.find({ age > 18 });`,
    fixedCode: `db.users.find({ age: { $gt: 18 } });`,
    hint: "MongoDB uses $ operators: $gt, $lt, $gte, $lte.",
    bugLine: 1,
    explanation: "MongoDB doesn't support SQL-style comparison operators."
  },
  {
    id: 402,
    title: "Missing $set in Update",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Update without $set replaces entire document.",
    buggyCode: `db.users.updateOne({ id: 1 }, { name: "Alex" });`,
    fixedCode: `db.users.updateOne({ id: 1 }, { $set: { name: "Alex" } });`,
    hint: "Use $set to update specific fields.",
    bugLine: 1,
    explanation: "Without $set, entire document is replaced with {name: 'Alex'}."
  },
  {
    id: 403,
    title: "Incorrect Query Syntax",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Wrong query object syntax.",
    buggyCode: `db.users.findOne("name" : "John");`,
    fixedCode: `db.users.findOne({ "name": "John" });`,
    hint: "Query must be inside curly braces.",
    bugLine: 1,
    explanation: "findOne expects a query object, not key-value pairs directly."
  },
  {
    id: 404,
    title: "Missing Array Query",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Querying array field incorrectly.",
    buggyCode: `db.users.find({ tags: "admin" });`,
    fixedCode: `db.users.find({ tags: { $in: ["admin"] } });`,
    hint: "Use array operators for array fields.",
    bugLine: 1,
    explanation: "For exact array match, but for checking if array contains value, use different approach."
  },
  {
    id: 405,
    title: "Wrong AND Condition",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Multiple conditions without $and.",
    buggyCode: `db.users.find({ age > 25, status: "active" });`,
    fixedCode: `db.users.find({ $and: [{ age: { $gt: 25 } }, { status: "active" }] });`,
    hint: "Use $and for multiple conditions or comma-separated.",
    bugLine: 1,
    explanation: "MongoDB uses comma as AND, but syntax must be correct."
  },
  {
    id: 406,
    title: "Missing Projection",
    difficulty: "Easy",
    language: "MongoDB",
    description: "No projection to limit returned fields.",
    buggyCode: `db.users.find({ age: { $gt: 18 } });`,
    fixedCode: `db.users.find({ age: { $gt: 18 } }, { name: 1, email: 1, _id: 0 });`,
    hint: "Use projection to return only needed fields.",
    bugLine: 1,
    explanation: "Without projection, returns all fields including large ones."
  },
  {
    id: 407,
    title: "Case-Sensitive String Match",
    difficulty: "Easy",
    language: "MongoDB",
    description: "String matching without case-insensitivity.",
    buggyCode: `db.users.find({ email: "JOHN@example.com" });`,
    fixedCode: `db.users.find({ email: { $regex: /^JOHN@example\.com$/i } });`,
    hint: "Use regex with 'i' flag or store lowercase.",
    bugLine: 1,
    explanation: "MongoDB string matching is case-sensitive by default."
  },
  {
    id: 408,
    title: "Wrong Insert Syntax",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Insert without document wrapper.",
    buggyCode: `db.users.insert(name: "John", age: 30);`,
    fixedCode: `db.users.insert({ name: "John", age: 30 });`,
    hint: "Insert expects a document object.",
    bugLine: 1,
    explanation: "insert() method requires a document object in curly braces."
  },
  {
    id: 409,
    title: "Missing Sort Syntax",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Incorrect sort parameter.",
    buggyCode: `db.users.find().sort("name");`,
    fixedCode: `db.users.find().sort({ name: 1 });`,
    hint: "sort() expects an object with field: direction.",
    bugLine: 1,
    explanation: "sort() requires object like {field: 1} for ascending, {field: -1} for descending."
  },
  {
    id: 410,
    title: "Limit Without Sort",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Using limit without sort for pagination.",
    buggyCode: `db.users.find().skip(10).limit(10);`,
    fixedCode: `db.users.find().sort({ _id: 1 }).skip(10).limit(10);`,
    hint: "Always use sort() with skip() and limit().",
    bugLine: 1,
    explanation: "Without sort, pagination results can be inconsistent."
  },
  {
    id: 411,
    title: "Missing $in Operator",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Multiple OR conditions without $in.",
    buggyCode: `db.users.find({ $or: [{ status: "active" }, { status: "pending" }] });`,
    fixedCode: `db.users.find({ status: { $in: ["active", "pending"] } });`,
    hint: "Use $in for matching multiple values.",
    bugLine: 1,
    explanation: "$in is more efficient than $or for same field comparisons."
  },
  {
    id: 412,
    title: "Wrong Date Query",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Querying date with string.",
    buggyCode: `db.logs.find({ created: "2024-01-01" });`,
    fixedCode: `db.logs.find({ created: ISODate("2024-01-01") });`,
    hint: "Store and query dates as Date objects.",
    bugLine: 1,
    explanation: "String comparison doesn't work correctly for date ranges."
  },
  {
    id: 413,
    title: "Missing Index Hint",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Not using available indexes.",
    buggyCode: `db.users.find({ email: "test@example.com" });`,
    fixedCode: `db.users.createIndex({ email: 1 });
db.users.find({ email: "test@example.com" }).hint({ email: 1 });`,
    hint: "Create and use indexes for frequent queries.",
    bugLine: 1,
    explanation: "Without index, MongoDB performs collection scan."
  },
  {
    id: 414,
    title: "Incorrect $ne Usage",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Using $ne incorrectly.",
    buggyCode: `db.users.find({ status: { $ne: ["banned", "inactive"] } });`,
    fixedCode: `db.users.find({ status: { $nin: ["banned", "inactive"] } });`,
    hint: "Use $nin for 'not in' list.",
    bugLine: 1,
    explanation: "$ne doesn't work with arrays, use $nin."
  },
  {
    id: 415,
    title: "Missing $exists Check",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Checking field existence incorrectly.",
    buggyCode: `db.users.find({ middleName: null });`,
    fixedCode: `db.users.find({ middleName: { $exists: true, $ne: null } });`,
    hint: "Use $exists to check field presence.",
    bugLine: 1,
    explanation: "null could mean field doesn't exist or value is null."
  },
  {
    id: 416,
    title: "Wrong $regex Syntax",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Incorrect regex pattern.",
    buggyCode: `db.users.find({ name: /john/ });`,
    fixedCode: `db.users.find({ name: { $regex: /^john$/i } });`,
    hint: "Use anchors and flags in regex.",
    bugLine: 1,
    explanation: '/john/ matches anywhere in string, might want exact or case-insensitive.'
  },
  {
    id: 417,
    title: "Missing $elemMatch",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Querying nested array objects incorrectly.",
    buggyCode: `db.users.find({ "skills.name": "JavaScript", "skills.level": "expert" });`,
    fixedCode: `db.users.find({ skills: { $elemMatch: { name: "JavaScript", level: "expert" } } });`,
    hint: "Use $elemMatch for multiple conditions on same array element.",
    bugLine: 1,
    explanation: "Without $elemMatch, conditions can match different array elements."
  },
  {
    id: 418,
    title: "Incorrect Count Usage",
    difficulty: "Easy",
    language: "MongoDB",
    description: "count() deprecated usage.",
    buggyCode: `db.users.find({ status: "active" }).count();`,
    fixedCode: `db.users.countDocuments({ status: "active" });`,
    hint: "Use countDocuments() or estimatedDocumentCount().",
    bugLine: 1,
    explanation: "count() is deprecated in newer MongoDB versions."
  },
  {
    id: 419,
    title: "Missing $type Operator",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Not checking field type.",
    buggyCode: `db.users.find({ age: { $gt: 0 } });`,
    fixedCode: `db.users.find({ age: { $type: "number", $gt: 0 } });`,
    hint: "Use $type to ensure correct data type.",
    bugLine: 1,
    explanation: "Age could be string '25' causing comparison issues."
  },
  {
    id: 420,
    title: "Wrong $pull Syntax",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Removing from array incorrectly.",
    buggyCode: `db.users.updateOne({ id: 1 }, { tags: "removed" });`,
    fixedCode: `db.users.updateOne({ id: 1 }, { $pull: { tags: "removed" } });`,
    hint: "Use $pull to remove from array.",
    bugLine: 1,
    explanation: "Without $pull, you're setting tags to string 'removed'."
  },
  {
    id: 421,
    title: "Missing $addToSet",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Adding to array without duplicate check.",
    buggyCode: `db.users.updateOne({ id: 1 }, { $push: { tags: "admin" } });`,
    fixedCode: `db.users.updateOne({ id: 1 }, { $addToSet: { tags: "admin" } });`,
    hint: "Use $addToSet to avoid duplicates.",
    bugLine: 1,
    explanation: "$push adds duplicate values, $addToSet only if not exists."
  },
  {
    id: 422,
    title: "Incorrect $inc Usage",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Manual increment instead of $inc.",
    buggyCode: `let user = db.users.findOne({ id: 1 });
db.users.updateOne({ id: 1 }, { $set: { views: user.views + 1 } });`,
    fixedCode: `db.users.updateOne({ id: 1 }, { $inc: { views: 1 } });`,
    hint: "Use $inc for atomic increments.",
    bugLine: 3,
    explanation: "Manual increment is not atomic and can cause race conditions."
  },
  {
    id: 423,
    title: "Wrong $size Query",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Checking array size incorrectly.",
    buggyCode: `db.users.find({ tags.length > 3 });`,
    fixedCode: `db.users.find({ tags: { $size: 3 } });`,
    hint: "Use $size for array length queries.",
    bugLine: 1,
    explanation: "MongoDB uses $size operator for array length."
  },
  {
    id: 424,
    title: "Missing $all Operator",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Checking all array elements incorrectly.",
    buggyCode: `db.users.find({ tags: "js", tags: "node" });`,
    fixedCode: `db.users.find({ tags: { $all: ["js", "node"] } });`,
    hint: "Use $all to require all elements in array.",
    bugLine: 1,
    explanation: "Multiple same field conditions override each other."
  },
  {
    id: 425,
    title: "Incorrect Text Search",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Using $regex instead of text search.",
    buggyCode: `db.articles.find({ content: { $regex: /database performance/i } });`,
    fixedCode: `db.articles.createIndex({ content: "text" });
db.articles.find({ $text: { $search: "database performance" } });`,
    hint: "Use text indexes for full-text search.",
    bugLine: 1,
    explanation: "$regex is slow for text search, text indexes are optimized."
  },
  {
    id: 426,
    title: "Wrong $unset Usage",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Setting to null instead of removing field.",
    buggyCode: `db.users.updateOne({ id: 1 }, { $set: { middleName: null } });`,
    fixedCode: `db.users.updateOne({ id: 1 }, { $unset: { middleName: "" } });`,
    hint: "Use $unset to remove fields.",
    bugLine: 1,
    explanation: "$set: {field: null} keeps field with null value, $unset removes field."
  },
  {
    id: 427,
    title: "Missing $slice",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Getting all array elements when only few needed.",
    buggyCode: `db.users.find({}, { comments: 1 });`,
    fixedCode: `db.users.find({}, { comments: { $slice: 5 } });`,
    hint: "Use $slice to limit array elements in projection.",
    bugLine: 1,
    explanation: "Without $slice, returns all array elements which could be large."
  },
  {
    id: 428,
    title: "Incorrect Bulk Write",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Individual operations instead of bulk.",
    buggyCode: `for (let doc of docs) {
  db.collection.insertOne(doc);
}`,
    fixedCode: `const bulk = db.collection.initializeUnorderedBulkOp();
for (let doc of docs) {
  bulk.insert(doc);
}
bulk.execute();`,
    hint: "Use bulk operations for multiple writes.",
    bugLine: 2,
    explanation: "Individual operations have network overhead."
  },
  {
    id: 429,
    title: "Wrong $rename Usage",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Manual field rename instead of $rename.",
    buggyCode: `db.users.updateMany({}, { $set: { newField: "$oldField" } });
db.users.updateMany({}, { $unset: { oldField: "" } });`,
    fixedCode: `db.users.updateMany({}, { $rename: { "oldField": "newField" } });`,
    hint: "Use $rename to rename fields.",
    bugLine: 1,
    explanation: "$rename atomically renames field, manual approach not atomic."
  },
  {
    id: 430,
    title: "Missing $expr for Field Comparison",
    difficulty: "Easy",
    language: "MongoDB",
    description: "Comparing fields without $expr.",
    buggyCode: `db.products.find({ price > discountPrice });`,
    fixedCode: `db.products.find({ $expr: { $gt: ["$price", "$discountPrice"] } });`,
    hint: "Use $expr to compare fields within document.",
    bugLine: 1,
    explanation: "Can't compare fields directly, need $expr with aggregation operators."
  },

  // ========== MEDIUM (30 Questions) ==========
  {
    id: 431,
    title: "Missing Compound Index",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Single field indexes instead of compound.",
    buggyCode: `db.users.createIndex({ status: 1 });
db.users.createIndex({ created: 1 });
// Query uses both
db.users.find({ status: "active", created: { $gt: ISODate("2024-01-01") } });`,
    fixedCode: `db.users.createIndex({ status: 1, created: 1 });
db.users.find({ status: "active", created: { $gt: ISODate("2024-01-01") } });`,
    hint: "Create compound indexes for multi-field queries.",
    bugLine: 4,
    explanation: "Compound index is more efficient than intersecting single indexes."
  },
  {
    id: 432,
    title: "Incorrect Index Direction",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Wrong index sort direction.",
    buggyCode: `db.users.createIndex({ created: 1 });
db.users.find().sort({ created: -1 }).limit(100);`,
    fixedCode: `db.users.createIndex({ created: -1 });
db.users.find().sort({ created: -1 }).limit(100);`,
    hint: "Index direction should match sort direction.",
    bugLine: 1,
    explanation: "Descending sort can't use ascending index efficiently."
  },
  {
    id: 433,
    title: "Missing Covered Query",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Not using covered queries.",
    buggyCode: `db.users.find({ status: "active" }, { name: 1, email: 1, _id: 0 });`,
    fixedCode: `db.users.createIndex({ status: 1, name: 1, email: 1 });
db.users.find({ status: "active" }, { name: 1, email: 1, _id: 0 });`,
    hint: "Create indexes that cover all queried fields.",
    bugLine: 1,
    explanation: "Covered query reads only from index, not documents."
  },
  {
    id: 434,
    title: "Wrong $lookup Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Application-side join instead of $lookup.",
    buggyCode: `const orders = db.orders.find({ user_id: 1 });
const user = db.users.findOne({ id: 1 });
// Combine in application`,
    fixedCode: `db.orders.aggregate([
  { $match: { user_id: 1 } },
  { $lookup: {
    from: "users",
    localField: "user_id",
    foreignField: "id",
    as: "user"
  }},
  { $unwind: "$user" }
]);`,
    hint: "Use $lookup for server-side joins.",
    bugLine: 1,
    explanation: "Application-side joins cause multiple database round trips."
  },
  {
    id: 435,
    title: "Missing $facet for Multiple Aggregations",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Multiple aggregation pipelines.",
    buggyCode: `const total = db.orders.countDocuments({});
const byStatus = db.orders.aggregate([{ $group: { _id: "$status", count: { $sum: 1 } } }]);
// Two queries`,
    fixedCode: `db.orders.aggregate([
  { $facet: {
    total: [{ $count: "count" }],
    byStatus: [{ $group: { _id: "$status", count: { $sum: 1 } } }],
    recent: [{ $match: { date: { $gt: ISODate("2024-01-01") } } }]
  }}
]);`,
    hint: "Use $facet for multiple aggregations in one query.",
    bugLine: 1,
    explanation: "$facet runs multiple pipelines in single query."
  },
  {
    id: 436,
    title: "Incorrect $group Stage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Missing _id in $group.",
    buggyCode: `db.orders.aggregate([
  { $group: { total: { $sum: "$amount" } } }
]);`,
    fixedCode: `db.orders.aggregate([
  { $group: { 
    _id: null,  // Group all documents
    total: { $sum: "$amount" },
    count: { $sum: 1 }
  } }
]);`,
    hint: "$group requires _id field.",
    bugLine: 2,
    explanation: "_id defines grouping key, use null for all documents."
  },
  {
    id: 437,
    title: "Missing $match Early in Pipeline",
    difficulty: "Medium",
    language: "MongoDB",
    description: "$match not at beginning of pipeline.",
    buggyCode: `db.orders.aggregate([
  { $project: { amount: 1, status: 1 } },
  { $match: { status: "completed" } },  // Too late
  { $group: { _id: null, total: { $sum: "$amount" } } }
]);`,
    fixedCode: `db.orders.aggregate([
  { $match: { status: "completed" } },  // First stage
  { $project: { amount: 1 } },
  { $group: { _id: null, total: { $sum: "$amount" } } }
]);`,
    hint: "Place $match as early as possible.",
    bugLine: 3,
    explanation: "Early $match reduces documents processed in pipeline."
  },
  {
    id: 438,
    title: "Wrong $project Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Including unnecessary fields.",
    buggyCode: `db.orders.aggregate([
  { $match: { status: "completed" } },
  { $project: { _id: 1, amount: 1, customer: 1, items: 1 } },  // Too many
  { $group: { _id: "$customer", total: { $sum: "$amount" } } }
]);`,
    fixedCode: `db.orders.aggregate([
  { $match: { status: "completed" } },
  { $project: { customer: 1, amount: 1 } },  // Only needed
  { $group: { _id: "$customer", total: { $sum: "$amount" } } }
]);`,
    hint: "Project only fields needed in pipeline.",
    bugLine: 2,
    explanation: "Unnecessary fields increase memory usage and processing time."
  },
  {
    id: 439,
    title: "Missing $unwind Optimization",
    difficulty: "Medium",
    language: "MongoDB",
    description: "$unwind without preserving null/empty arrays.",
    buggyCode: `db.users.aggregate([
  { $unwind: "$tags" },  // Excludes documents without tags
  { $group: { _id: "$tags", count: { $sum: 1 } } }
]);`,
    fixedCode: `db.users.aggregate([
  { $unwind: { path: "$tags", preserveNullAndEmptyArrays: true } },
  { $group: { _id: "$tags", count: { $sum: 1 } } }
]);`,
    hint: "Use preserveNullAndEmptyArrays to keep all documents.",
    bugLine: 2,
    explanation: "Default $unwind excludes documents with null or empty arrays."
  },
  {
    id: 440,
    title: "Incorrect $addFields Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Using $project instead of $addFields.",
    buggyCode: `db.orders.aggregate([
  { $project: {
    amount: 1,
    tax: 1,
    total: { $add: ["$amount", "$tax"] },
    _id: 0  // Removes _id
  } }
]);`,
    fixedCode: `db.orders.aggregate([
  { $addFields: {
    total: { $add: ["$amount", "$tax"] }
  } }
]);`,
    hint: "Use $addFields to add fields without removing others.",
    bugLine: 1,
    explanation: "$project replaces document, $addFields adds to existing document."
  },
  {
    id: 441,
    title: "Missing $sortByCount",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Manual count and sort.",
    buggyCode: `db.orders.aggregate([
  { $group: { _id: "$status", count: { $sum: 1 } } },
  { $sort: { count: -1 } }
]);`,
    fixedCode: `db.orders.aggregate([
  { $sortByCount: "$status" }
]);`,
    hint: "Use $sortByCount for common pattern.",
    bugLine: 1,
    explanation: "$sortByCount combines $group and $sort stages."
  },
  {
    id: 442,
    title: "Wrong $graphLookup Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Recursive application-side queries.",
    buggyCode: `// Application code recursively fetches managers
function getManagers(employeeId) {
  const emp = db.employees.findOne({ id: employeeId });
  if (emp.manager_id) {
    const manager = getManagers(emp.manager_id);
    return [emp, ...manager];
  }
  return [emp];
}`,
    fixedCode: `db.employees.aggregate([
  { $match: { id: 123 } },
  { $graphLookup: {
    from: "employees",
    startWith: "$manager_id",
    connectFromField: "manager_id",
    connectToField: "id",
    as: "managementChain",
    depthField: "level"
  }}
]);`,
    hint: "Use $graphLookup for recursive/graph queries.",
    bugLine: 1,
    explanation: "$graphLookup performs recursive search in single query."
  },
  {
    id: 443,
    title: "Missing $bucket for Histograms",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Manual bucketing instead of $bucket.",
    buggyCode: `// Application code manually creates buckets
const orders = db.orders.find();
const buckets = { "0-100": 0, "100-500": 0, "500+": 0 };
orders.forEach(o => {
  if (o.amount <= 100) buckets["0-100"]++;
  else if (o.amount <= 500) buckets["100-500"]++;
  else buckets["500+"]++;
});`,
    fixedCode: `db.orders.aggregate([
  { $bucket: {
    groupBy: "$amount",
    boundaries: [0, 100, 500, 1000],
    default: "1000+",
    output: {
      count: { $sum: 1 },
      total: { $sum: "$amount" }
    }
  }}
]);`,
    hint: "Use $bucket for histograms.",
    bugLine: 1,
    explanation: "$bucket creates histograms server-side."
  },
  {
    id: 444,
    title: "Incorrect $redact Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Application-side filtering instead of $redact.",
    buggyCode: `// Filter sensitive data in application
const users = db.users.find();
const filtered = users.map(u => {
  delete u.password;
  delete u.ssn;
  return u;
});`,
    fixedCode: `db.users.aggregate([
  { $redact: {
    $cond: {
      if: { $eq: [ "$role", "admin" ] },
      then: "$$DESCEND",
      else: { $cond: {
        if: { $eq: [ "$role", "user" ] },
        then: { $literal: "$$PRUNE" },
        else: "$$KEEP"
      }}
    }
  }}
]);`,
    hint: "Use $redact for field-level security.",
    bugLine: 1,
    explanation: "$redact filters documents based on content at database level."
  },
  {
    id: 445,
    title: "Missing $merge for Materialized Views",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Manual materialized view updates.",
    buggyCode: `// Application code updates summary table
const summary = db.orders.aggregate([
  { $group: { _id: "$product", total: { $sum: "$amount" } } }
]);
db.daily_summary.deleteMany({});
db.daily_summary.insertMany(summary);`,
    fixedCode: `db.orders.aggregate([
  { $match: { date: { $gte: ISODate("2024-01-01") } } },
  { $group: { _id: "$product", total: { $sum: "$amount" } } },
  { $merge: {
    into: "daily_summary",
    on: "_id",
    whenMatched: "replace",
    whenNotMatched: "insert"
  }}
]);`,
    hint: "Use $merge for materialized views.",
    bugLine: 1,
    explanation: "$merge atomically updates target collection with aggregation results."
  },
  {
    id: 446,
    title: "Wrong $out Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "$out replacing entire collection.",
    buggyCode: `db.orders.aggregate([
  { $group: { _id: "$product", total: { $sum: "$amount" } } },
  { $out: "product_summary" }  // Replaces entire collection
]);`,
    fixedCode: `db.orders.aggregate([
  { $group: { _id: "$product", total: { $sum: "$amount" } } },
  { $merge: {
    into: "product_summary",
    on: "_id",
    whenMatched: "merge",
    whenNotMatched: "insert"
  }}
]);`,
    hint: "Use $merge instead of $out for incremental updates.",
    bugLine: 3,
    explanation: "$out replaces entire collection, $merge updates incrementally."
  },
  {
    id: 447,
    title: "Missing $indexStats for Index Analysis",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Not analyzing index usage.",
    buggyCode: `// Using indexes without monitoring
db.users.createIndex({ email: 1 });
// No monitoring of index usage`,
    fixedCode: `// Check index usage
db.users.aggregate([{ $indexStats: {} }]);

// Result shows:
// - accesses (number of operations)
// - ops (number of operations since last restart)
// - since (when stats started)

// Remove unused indexes
db.users.dropIndex("email_1");`,
    hint: "Monitor index usage with $indexStats.",
    bugLine: 3,
    explanation: "Unused indexes waste storage and slow writes."
  },
  {
    id: 448,
    title: "Incorrect Shard Key Selection",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Poor shard key causing hotspots.",
    buggyCode: `// Shard by monotonically increasing value
sh.shardCollection("db.orders", { _id: 1 });`,
    fixedCode: `// Use compound shard key with high cardinality
sh.shardCollection("db.orders", { customer_id: 1, _id: 1 });

// Or use hashed shard key
sh.shardCollection("db.logs", { _id: "hashed" });`,
    hint: "Choose shard key with high cardinality and even distribution.",
    bugLine: 2,
    explanation: "Monotonically increasing shard keys cause all writes to go to last shard."
  },
  {
    id: 449,
    title: "Missing Read Concern/Write Concern",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Default consistency levels.",
    buggyCode: `db.orders.insertOne({ amount: 100 });
// Default write concern`,
    fixedCode: `// Strong consistency
db.orders.insertOne(
  { amount: 100 },
  { writeConcern: { w: "majority", j: true } }
);

// Read from primary
db.orders.find({}).readConcern("majority");`,
    hint: "Set appropriate read/write concern for your consistency needs.",
    bugLine: 2,
    explanation: "Default settings may not provide required consistency guarantees."
  },
  {
    id: 450,
    title: "Wrong Transaction Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "No transactions for multi-document operations.",
    buggyCode: `// Transfer without transaction
db.accounts.updateOne({ id: 1 }, { $inc: { balance: -100 } });
db.accounts.updateOne({ id: 2 }, { $inc: { balance: 100 } });`,
    fixedCode: `const session = db.getMongo().startSession();
session.startTransaction();
try {
  db.accounts.updateOne(
    { id: 1 },
    { $inc: { balance: -100 } },
    { session }
  );
  db.accounts.updateOne(
    { id: 2 },
    { $inc: { balance: 100 } },
    { session }
  );
  session.commitTransaction();
} catch (error) {
  session.abortTransaction();
  throw error;
} finally {
  session.endSession();
}`,
    hint: "Use transactions for atomic multi-document operations.",
    bugLine: 1,
    explanation: "Without transaction, first could succeed and second fail."
  },
  {
    id: 451,
    title: "Missing Change Streams",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Polling instead of change streams.",
    buggyCode: `// Polling for changes
setInterval(() => {
  const newOrders = db.orders.find({ _id: { $gt: lastId } });
  // Process new orders
}, 5000);`,
    fixedCode: `// Use change streams
const changeStream = db.orders.watch();
changeStream.on('change', (change) => {
  // Real-time processing
  console.log(change);
});`,
    hint: "Use change streams for real-time data changes.",
    bugLine: 3,
    explanation: "Polling causes delay and unnecessary database load."
  },
  {
    id: 452,
    title: "Incorrect $currentOp Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Not monitoring running operations.",
    buggyCode: `// No monitoring of slow queries
// Users complain about performance`,
    fixedCode: `// Monitor current operations
db.currentOp(true);

// Find slow operations
db.currentOp({
  "active": true,
  "secs_running": { "$gt": 5 }
});

// Kill long running operations
db.killOp(opid);`,
    hint: "Use $currentOp to monitor and manage operations.",
    bugLine: 1,
    explanation: "Without monitoring, can't identify problematic queries."
  },
  {
    id: 453,
    title: "Missing $sample for Random Sampling",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Application-side random sampling.",
    buggyCode: `// Get all then sample in application
const all = db.users.find().toArray();
const random = all[Math.floor(Math.random() * all.length)];`,
    fixedCode: `// Server-side random sampling
db.users.aggregate([
  { $sample: { size: 10 } }
]);`,
    hint: "Use $sample for random document selection.",
    bugLine: 2,
    explanation: "Application-side sampling loads all documents unnecessarily."
  },
  {
    id: 454,
    title: "Wrong $collStats Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Not monitoring collection statistics.",
    buggyCode: `// No monitoring of collection health
// Unexpected storage issues`,
    fixedCode: `// Get collection statistics
db.runCommand({ collStats: "users" });

// Returns:
// - size (total size in bytes)
// - count (number of documents)
// - avgObjSize (average document size)
// - storageSize (allocated storage)
// - nindexes (number of indexes)
// - totalIndexSize (size of all indexes)`,
    hint: "Use $collStats to monitor collection health.",
    bugLine: 1,
    explanation: "Without monitoring, storage issues cause production problems."
  },
  {
    id: 455,
    title: "Missing $planCacheStats",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Not monitoring query plan cache.",
    buggyCode: `// Query performance degrades over time
// No insight into plan cache`,
    fixedCode: `// Check plan cache
db.runCommand({ planCacheListFilters: "users" });
db.runCommand({ planCacheClear: "users" });

// Or for specific query shape
db.users.aggregate([
  { $planCacheStats: {} }
]);`,
    hint: "Monitor and manage query plan cache.",
    bugLine: 1,
    explanation: "Stale query plans can cause performance degradation."
  },
  {
    id: 456,
    title: "Incorrect $geoNear Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Application-side distance calculations.",
    buggyCode: `// Calculate distances in application
const places = db.places.find().toArray();
const nearby = places.filter(p => {
  const distance = calculateDistance(userLocation, p.location);
  return distance < 10; // 10 km
});`,
    fixedCode: `// Create geospatial index
db.places.createIndex({ location: "2dsphere" });

// Use $geoNear for server-side calculation
db.places.aggregate([
  { $geoNear: {
    near: { type: "Point", coordinates: [ -73.99279, 40.719296 ] },
    distanceField: "dist.calculated",
    maxDistance: 10000, // 10 km in meters
    spherical: true
  }},
  { $limit: 10 }
]);`,
    hint: "Use geospatial queries for location-based searches.",
    bugLine: 1,
    explanation: "Application-side distance calculations are inefficient."
  },
  {
    id: 457,
    title: "Missing $convert for Type Safety",
    difficulty: "Medium",
    language: "MongoDB",
    description: "No type conversion in aggregations.",
    buggyCode: `db.orders.aggregate([
  { $group: { 
    _id: "$customer_id",
    total: { $sum: "$amount" }  // amount might be string
  } }
]);`,
    fixedCode: `db.orders.aggregate([
  { $addFields: {
    amount_numeric: { $convert: {
      input: "$amount",
      to: "decimal",
      onError: 0,
      onNull: 0
    }}
  }},
  { $group: { 
    _id: "$customer_id",
    total: { $sum: "$amount_numeric" }
  } }
]);`,
    hint: "Use $convert for type-safe operations.",
    bugLine: 3,
    explanation: "Mixed types cause incorrect aggregations."
  },
  {
    id: 458,
    title: "Wrong $function Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Application-side processing that could be server-side.",
    buggyCode: `// Process in application
const orders = db.orders.find().toArray();
const processed = orders.map(o => ({
  ...o,
  category: categorizeOrder(o.amount)
}));`,
    fixedCode: `// Use $function for server-side JavaScript
db.orders.aggregate([
  { $addFields: {
    category: {
      $function: {
        body: function(amount) {
          if (amount < 100) return "small";
          if (amount < 1000) return "medium";
          return "large";
        },
        args: ["$amount"],
        lang: "js"
      }
    }
  }}
]);`,
    hint: "Use $function for complex server-side logic.",
    bugLine: 1,
    explanation: "Server-side processing reduces data transfer."
  },
  {
    id: 459,
    title: "Missing $mergeObjects",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Manual object merging.",
    buggyCode: `db.orders.aggregate([
  { $lookup: { from: "users", localField: "user_id", foreignField: "id", as: "user" } },
  { $addFields: {
    // Manual field copying
    user_name: { $arrayElemAt: ["$user.name", 0] },
    user_email: { $arrayElemAt: ["$user.email", 0] }
  } }
]);`,
    fixedCode: `db.orders.aggregate([
  { $lookup: { from: "users", localField: "user_id", foreignField: "id", as: "user" } },
  { $unwind: "$user" },
  { $replaceRoot: { newRoot: { $mergeObjects: ["$$ROOT", "$user"] } } },
  { $project: { user: 0 } }  // Remove duplicate user field
]);`,
    hint: "Use $mergeObjects to combine documents.",
    bugLine: 3,
    explanation: "$mergeObjects is cleaner than manual field copying."
  },
  {
    id: 460,
    title: "Incorrect $switch Usage",
    difficulty: "Medium",
    language: "MongoDB",
    description: "Nested $cond instead of $switch.",
    buggyCode: `db.orders.aggregate([
  { $addFields: {
    priority: {
      $cond: {
        if: { $eq: ["$status", "urgent"] },
        then: "high",
        else: {
          $cond: {
            if: { $eq: ["$status", "normal"] },
            then: "medium",
            else: "low"
          }
        }
      }
    }
  }}
]);`,
    fixedCode: `db.orders.aggregate([
  { $addFields: {
    priority: {
      $switch: {
        branches: [
          { case: { $eq: ["$status", "urgent"] }, then: "high" },
          { case: { $eq: ["$status", "normal"] }, then: "medium" },
          { case: { $eq: ["$status", "low"] }, then: "low" }
        ],
        default: "unknown"
      }
    }
  }}
]);`,
    hint: "Use $switch for multiple conditional branches.",
    bugLine: 3,
    explanation: "$switch is more readable than nested $cond statements."
  },

  // ========== HARD (30 Questions) ==========
  {
    id: 461,
    title: "Missing Database Profiling",
    difficulty: "Hard",
    language: "MongoDB",
    description: "No query profiling enabled.",
    buggyCode: `// No profiling, slow queries unknown
// Users report performance issues`,
    fixedCode: `// Enable profiling
db.setProfilingLevel(2);  // Log all operations

// Or slow operations only
db.setProfilingLevel(1, { slowms: 100 });

// Check profile collection
db.system.profile.find().sort({ ts: -1 }).limit(10);

// Analyze slow queries
db.system.profile.find({ millis: { $gt: 1000 } });`,
    hint: "Enable and analyze database profiling.",
    bugLine: 1,
    explanation: "Without profiling, can't identify slow queries."
  },
  {
    id: 462,
    title: "Incorrect Connection Pooling",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Creating new connections for each query.",
    buggyCode: `// New connection for each request
app.get('/users', async () => {
  const client = new MongoClient(uri);
  await client.connect();
  const users = client.db().collection('users').find();
  await client.close();
  return users;
});`,
    fixedCode: `// Connection pooling
const { MongoClient } = require('mongodb');

const client = new MongoClient(uri, {
  maxPoolSize: 10,
  minPoolSize: 5,
  maxIdleTimeMS: 30000,
  waitQueueTimeoutMS: 10000
});

// Reuse connection
app.get('/users', async () => {
  return client.db().collection('users').find().toArray();
});`,
    hint: "Use connection pooling for MongoDB connections.",
    bugLine: 3,
    explanation: "New connections for each query exhausts database resources."
  },
  {
    id: 463,
    title: "Missing Index on Array Field Size",
    difficulty: "Hard",
    language: "MongoDB",
    description: "No index for $size queries.",
    buggyCode: `// Frequent $size queries without index
db.users.find({ tags: { $size: 3 } });`,
    fixedCode: `// Create computed field with index
db.users.aggregate([
  { $addFields: { tags_count: { $size: "$tags" } } },
  { $out: "users_with_count" }
]);

db.users_with_count.createIndex({ tags_count: 1 });

// Query using indexed field
db.users_with_count.find({ tags_count: 3 });`,
    hint: "Create computed field for array size queries.",
    bugLine: 2,
    explanation: "$size can't use indexes, need computed field."
  },
  {
    id: 464,
    title: "Wrong WiredTiger Configuration",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Default WiredTiger settings for high-write workload.",
    buggyCode: `// Using default WiredTiger settings
// High write workload causes performance issues`,
    fixedCode: `// Optimize WiredTiger for workload
// In mongod.conf
storage:
  wiredTiger:
    engineConfig:
      cacheSizeGB: 8  # 50% of RAM for dedicated MongoDB
      journalCompressor: snappy
    collectionConfig:
      blockCompressor: snappy
    indexConfig:
      prefixCompression: true

// For high write: increase cache, tune checkpoint interval
storage.wiredTiger.engineConfig.cacheSizeGB: 16
storage.wiredTiger.engineConfig.checkpoint=(wait=60,log_size=2GB)`,
    hint: "Tune WiredTiger storage engine for your workload.",
    bugLine: 1,
    explanation: "Default settings optimized for general use, not specific workloads."
  },
  {
    id: 465,
    title: "Missing Time Series Collections",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Using regular collections for time series data.",
    buggyCode: `// Regular collection for time series
db.sensor_data.insertOne({
  sensor_id: 1,
  timestamp: new Date(),
  value: 23.5
});

// Many documents, poor time-based queries`,
    fixedCode: `// Create time series collection
db.createCollection("sensor_data", {
  timeseries: {
    timeField: "timestamp",
    metaField: "sensor_id",
    granularity: "seconds"
  },
  expireAfterSeconds: 2592000  // 30 days TTL
});

// Automatic bucketing and compression
// Optimized for time-based queries`,
    hint: "Use time series collections for time-stamped data.",
    bugLine: 1,
    explanation: "Time series collections automatically bucket and compress data."
  },
  {
    id: 466,
    title: "Incorrect Replica Set Configuration",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Single node or misconfigured replica set.",
    buggyCode: `// Single MongoDB instance
// No high availability
mongod --dbpath /data/db`,
    fixedCode: `// Configure 3-node replica set
# Node 1 (Primary)
mongod --replSet rs0 --port 27017 --dbpath /data/rs0-0

# Node 2 (Secondary)
mongod --replSet rs0 --port 27018 --dbpath /data/rs0-1

# Node 3 (Arbiter)
mongod --replSet rs0 --port 27019 --dbpath /data/rs0-2

# Initialize replica set
rs.initiate({
  _id: "rs0",
  members: [
    { _id: 0, host: "host1:27017" },
    { _id: 1, host: "host2:27018" },
    { _id: 2, host: "host3:27019", arbiterOnly: true }
  ]
});`,
    hint: "Use replica sets for high availability.",
    bugLine: 3,
    explanation: "Single node has no failover capability."
  },
  {
    id: 467,
    title: "Missing Compound Geospatial Index",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Geospatial index without other query fields.",
    buggyCode: `// Only geospatial index
db.places.createIndex({ location: "2dsphere" });

// Query with additional filters is slow
db.places.find({
  location: { $near: { ... } },
  category: "restaurant",
  rating: { $gt: 4 }
});`,
    fixedCode: `// Compound geospatial index
db.places.createIndex({ 
  category: 1,
  rating: 1,
  location: "2dsphere"
});

// Query uses compound index efficiently`,
    hint: "Create compound indexes including geospatial field.",
    bugLine: 5,
    explanation: "Additional filters can't use geospatial index alone."
  },
  {
    id: 468,
    title: "Wrong Sharding Strategy for Time-Series",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Poor shard key for time-series data.",
    buggyCode: `// Shard by time only - causes hotspots
sh.shardCollection("db.metrics", { timestamp: 1 });`,
    fixedCode: `// Compound shard key for time-series
sh.shardCollection("db.metrics", { 
  sensor_id: 1,  // High cardinality
  timestamp: 1   // Time component
});

// Or use hashed shard key
sh.shardCollection("db.metrics", { 
  _id: "hashed" 
});`,
    hint: "Use compound shard key for time-series data.",
    bugLine: 2,
    explanation: "Time-only shard key causes all new data to go to one shard."
  },
  {
    id: 469,
    title: "Missing TTL Index for Data Expiry",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Manual deletion instead of TTL indexes.",
    buggyCode: `// Manual cleanup job
setInterval(() => {
  db.logs.deleteMany({ 
    created: { $lt: new Date(Date.now() - 30*24*60*60*1000) } 
  });
}, 3600000);`,
    fixedCode: `// Create TTL index
db.logs.createIndex(
  { created: 1 },
  { expireAfterSeconds: 2592000 }  // 30 days
);

// Automatic deletion by MongoDB`,
    hint: "Use TTL indexes for automatic data expiration.",
    bugLine: 3,
    explanation: "TTL indexes automatically delete old documents."
  },
  {
    id: 470,
    title: "Incorrect Read Preference for Analytics",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Analytics queries hitting primary.",
    buggyCode: `// Analytics query on primary
const analytics = db.orders.aggregate([
  { $match: { ... } },
  // Complex aggregation
]);`,
    fixedCode: `// Use secondary for analytics
const analytics = db.orders
  .withReadPreference('secondary')
  .aggregate([
    { $match: { ... } },
    // Complex aggregation
  ]);

// Or use specific tag set
const analytics = db.orders
  .withReadPreference('secondary', [{ dc: 'east' }])
  .aggregate([...]);`,
    hint: "Route analytics queries to secondary nodes.",
    bugLine: 2,
    explanation: "Analytics queries can overload primary node."
  },
  {
    id: 471,
    title: "Missing Capped Collections for Logs",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Regular collections for high-volume logs.",
    buggyCode: `// Regular collection for logs
db.createCollection("app_logs");
// Unlimited growth`,
    fixedCode: `// Capped collection for logs
db.createCollection("app_logs", {
  capped: true,
  size: 100000000,  // 100MB
  max: 100000       // Max documents
});

// Automatic FIFO when full
// Fixed size, no indexes needed for FIFO`,
    hint: "Use capped collections for high-volume, fixed-size data.",
    bugLine: 3,
    explanation: "Capped collections automatically remove old documents."
  },
  {
    id: 472,
    title: "Wrong $lookup with Uncorrelated Subquery",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Inefficient $lookup usage.",
    buggyCode: `// $lookup without pipeline (correlated)
db.orders.aggregate([
  { $lookup: {
    from: "users",
    localField: "user_id",
    foreignField: "_id",
    as: "user"
  }}
]);`,
    fixedCode: `// More efficient with pipeline and uncorrelated
db.orders.aggregate([
  { $lookup: {
    from: "users",
    let: { user_id: "$user_id" },
    pipeline: [
      { $match: { 
        $expr: { $eq: ["$_id", "$$user_id"] }
      }},
      { $project: { name: 1, email: 1 } }
    ],
    as: "user"
  }},
  { $unwind: "$user" }
]);`,
    hint: "Use $lookup with pipeline for better control.",
    bugLine: 2,
    explanation: "Pipeline $lookup can include transformations and filters."
  },
  {
    id: 473,
    title: "Missing MongoDB Atlas Search",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Not using Atlas Search for complex search.",
    buggyCode: `// Manual search implementation
db.products.find({
  $or: [
    { title: { $regex: /search term/i } },
    { description: { $regex: /search term/i } },
    { tags: { $in: ["search", "term"] } }
  ]
});`,
    fixedCode: `// Use Atlas Search
db.products.aggregate([
  { $search: {
    index: "default",
    text: {
      query: "search term",
      path: { wildcard: "*" }  // Search all fields
    }
  }},
  { $project: { score: { $meta: "searchScore" } } }
]);`,
    hint: "Use Atlas Search for full-featured search capabilities.",
    bugLine: 2,
    explanation: "Atlas Search provides relevance scoring, facets, autocomplete."
  },
  {
    id: 474,
    title: "Incorrect Change Streams Resume Token",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Not storing resume token for change streams.",
    buggyCode: `// Change stream without resume capability
const stream = db.collection.watch();
stream.on('change', change => {
  // Process change
});`,
    fixedCode: `// Store and resume from token
let resumeToken = null;

const stream = db.collection.watch({}, { 
  resumeAfter: resumeToken 
});

stream.on('change', change => {
  // Process change
  resumeToken = change._id;  // Store for resume
  
  // Persist to durable storage
  saveResumeToken(change._id);
});

// On restart, resume from stored token`,
    hint: "Store resume tokens for change stream durability.",
    bugLine: 1,
    explanation: "Without resume token, change streams restart from current time."
  },
  {
    id: 475,
    title: "Missing MongoDB Compass Explain Plans",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Not analyzing query execution plans.",
    buggyCode: `// Running queries without analysis
db.orders.find({ status: "pending" }).explain("executionStats");`,
    fixedCode: `// Comprehensive explain analysis
const explain = db.orders.explain("allPlansExecution")
  .find({ status: "pending" })
  .sort({ created: -1 })
  .limit(100);

// Analyze in Compass or programmatically
// Check:
// - winningPlan
// - rejectedPlans
// - executionStats
// - index usage
// - docs examined vs returned`,
    hint: "Use explain() to analyze query performance.",
    bugLine: 2,
    explanation: "Explain plans show index usage and execution statistics."
  },
  {
    id: 476,
    title: "Wrong $facet with Large Data Sets",
    difficulty: "Hard",
    language: "MongoDB",
    description: "$facet processing entire collection.",
    buggyCode: `// $facet without $match first
db.large_collection.aggregate([
  { $facet: {
    stats: [{ $group: { ... } }],
    recent: [{ $sort: { date: -1 }, $limit: 10 }]
  }}
]);`,
    fixedCode: `// Limit data before $facet
db.large_collection.aggregate([
  { $match: { date: { $gt: ISODate("2024-01-01") } } },
  { $facet: {
    stats: [{ $group: { ... } }],
    recent: [{ $sort: { date: -1 }, $limit: 10 }]
  }}
]);

// Or process in parallel applications
const stats = db.collection.aggregate([...]);
const recent = db.collection.aggregate([...]);
// Run in parallel`,
    hint: "Limit data before $facet or use parallel queries.",
    bugLine: 1,
    explanation: "$facet processes same documents for each pipeline."
  },
  {
    id: 477,
    title: "Missing MongoDB Charts Integration",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Exporting data for visualization.",
    buggyCode: `// Export data for external visualization
const data = db.sales.aggregate([...]).toArray();
// Send to external tool`,
    fixedCode: `// Use MongoDB Charts
// 1. Create data source from aggregation
// 2. Build charts directly in MongoDB
// 3. Embed in applications

// Or use $merge to materialize views
db.sales.aggregate([
  { $group: { ... } },
  { $merge: { into: "sales_summary" } }
]);

// Charts reads from materialized view`,
    hint: "Use MongoDB Charts for integrated visualization.",
    bugLine: 2,
    explanation: "External visualization requires data export/import."
  },
  {
    id: 478,
    title: "Incorrect $jsonSchema Validation",
    difficulty: "Hard",
    language: "MongoDB",
    description: "No schema validation in application layer.",
    buggyCode: `// No schema validation
db.users.insertOne({
  name: "John",
  age: "twenty-five"  // Should be number
});`,
    fixedCode: `// JSON schema validation
db.createCollection("users", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["name", "email", "age"],
      properties: {
        name: { bsonType: "string" },
        email: { 
          bsonType: "string",
          pattern: "^\\S+@\\S+\\.\\S+$"
        },
        age: { 
          bsonType: "int",
          minimum: 0,
          maximum: 150
        }
      }
    }
  }
});`,
    hint: "Use $jsonSchema for document validation.",
    bugLine: 1,
    explanation: "Database-level validation ensures data consistency."
  },
  {
    id: 479,
    title: "Missing MongoDB Realm Functions",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Application logic instead of database functions.",
    buggyCode: `// Application calculates derived field
const order = db.orders.findOne({ _id: orderId });
order.total = order.subtotal + order.tax - order.discount;
// Application updates`,
    fixedCode: `// Realm function for calculated field
exports = function(orderId) {
  const orders = context.services.get("mongodb-atlas").db("shop").collection("orders");
  const order = orders.findOne({ _id: orderId });
  
  const total = order.subtotal + order.tax - order.discount;
  
  return orders.updateOne(
    { _id: orderId },
    { $set: { total: total } }
  );
};

// Call from application or trigger`,
    hint: "Use Realm functions for server-side logic.",
    bugLine: 3,
    explanation: "Realm functions run closer to data, reduce latency."
  },
  {
    id: 480,
    title: "Wrong MongoDB Driver Version",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Using outdated MongoDB driver.",
    buggyCode: `// Old driver version
const MongoClient = require('mongodb').MongoClient;
// Version 2.x or 3.x`,
    fixedCode: `// Latest driver with better performance
const { MongoClient } = require('mongodb');
// Version 4.x or later

// Check compatibility
// https://docs.mongodb.com/drivers/node/current/compatibility/

// Use connection string options
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // ... other modern options
});`,
    hint: "Use latest MongoDB driver with modern features.",
    bugLine: 2,
    explanation: "New drivers have better performance, connection pooling, and features."
  },
  {
    id: 481,
    title: "Missing Queryable Encryption",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Storing sensitive data unencrypted.",
    buggyCode: `// Plain text sensitive data
db.patients.insertOne({
  name: "John Doe",
  ssn: "123-45-6789",
  diagnosis: "Condition"
});`,
    fixedCode: `// Queryable Encryption (MongoDB 6.0+)
// 1. Create encryption key
// 2. Define encrypted fields in schema
// 3. Enable encryption in client

const client = new MongoClient(uri, {
  autoEncryption: {
    keyVaultNamespace: "encryption.__keyVault",
    kmsProviders: { /* AWS KMS or local */ },
    schemaMap: {
      "clinic.patients": {
        "bsonType": "object",
        "properties": {
          "ssn": {
            "encrypt": {
              "bsonType": "string",
              "algorithm": "AEAD_AES_256_CBC_HMAC_SHA_512-Random",
              "keyId": [/* key ID */]
            }
          }
        }
      }
    }
  }
});`,
    hint: "Use Queryable Encryption for sensitive data.",
    bugLine: 4,
    explanation: "Queryable Encryption allows querying encrypted data."
  },
  {
    id: 482,
    title: "Incorrect MongoDB Atlas Auto-Scaling",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Fixed cluster size instead of auto-scaling.",
    buggyCode: `// Fixed cluster size
// M10 tier always
// Manual scaling required`,
    fixedCode: `// Enable auto-scaling in Atlas
// 1. Set compute auto-scaling
//    - Min: M10
//    - Max: M30
//    - Scale at 75% CPU

// 2. Enable storage auto-scaling
//    - Auto-expand: ON
//    - Max storage: 100GB

// 3. Configure alerts
//    - Scale-up notification
//    - Scale-down notification

// Programmatic scaling via API
const res = await atlasClient.clusters.update('clusterName', {
  providerSettings: {
    instanceSizeName: 'M20',
    autoScaling: {
      compute: {
        enabled: true,
        scaleDownEnabled: true,
        minInstanceSize: 'M10',
        maxInstanceSize: 'M30'
      }
    }
  }
});`,
    hint: "Use auto-scaling for variable workloads.",
    bugLine: 3,
    explanation: "Auto-scaling adjusts resources based on load."
  },
  {
    id: 483,
    title: "Missing MongoDB Performance Advisor",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Manual performance tuning.",
    buggyCode: `// Manual index creation guesswork
db.collection.createIndex({ field: 1 });
// Hope it helps`,
    fixedCode: `// Use Performance Advisor (Atlas)
// 1. Check Performance Advisor in Atlas UI
// 2. Review suggested indexes
// 3. Apply with one click

// Or via API
const suggestions = await atlasClient.performanceAdvisor
  .getSuggestedIndexes('projectId', 'clusterName');

// Analyze and create
suggestions.forEach(suggestion => {
  if (suggestion.impact > 0.5) {  // High impact
    db.runCommand({
      createIndexes: "collection",
      indexes: [suggestion.index]
    });
  }
});`,
    hint: "Use Performance Advisor for index recommendations.",
    bugLine: 2,
    explanation: "Performance Advisor analyzes queries and suggests optimal indexes."
  },
  {
    id: 484,
    title: "Wrong $out for Real-time Aggregations",
    difficulty: "Hard",
    language: "MongoDB",
    description: "$out causing collection lock.",
    buggyCode: `// $out locks collection
db.orders.aggregate([
  { $group: { ... } },
  { $out: "daily_summary" }  // Locks collection
]);`,
    fixedCode: `// Use $merge for non-blocking
db.orders.aggregate([
  { $group: { ... } },
  { $merge: {
    into: "daily_summary",
    on: "_id",
    whenMatched: "merge",
    whenNotMatched: "insert"
  }}
]);

// Or use Atlas Triggers for real-time
// Trigger on insert/update
// Incrementally update summary`,
    hint: "Use $merge instead of $out for live collections.",
    bugLine: 3,
    explanation: "$out replaces entire collection with exclusive lock."
  },
  {
    id: 485,
    title: "Missing MongoDB Backup Strategies",
    difficulty: "Hard",
    language: "MongoDB",
    description: "No backup or incomplete backup.",
    buggyCode: `// No backup strategy
// Hope nothing goes wrong`,
    fixedCode: `// Comprehensive backup strategy
// 1. Atlas Cloud Backups (automated)
//    - Daily snapshots
//    - Point-in-time recovery

// 2. mongodump for on-prem
mongodump --uri="mongodb://localhost:27017" --out=/backups/$(date +%Y%m%d)

// 3. Filesystem snapshots
//    With journaling enabled
//    Consistent snapshot

// 4. Test restore regularly
mongorestore --uri="mongodb://localhost:27017" /backups/latest

// 5. Cross-region backup copy
aws s3 cp /backups/latest s3://backup-bucket/`,
    hint: "Implement 3-2-1 backup strategy.",
    bugLine: 2,
    explanation: "Without backups, data loss is catastrophic."
  },
  {
    id: 486,
    title: "Incorrect MongoDB Monitoring Setup",
    difficulty: "Hard",
    language: "MongoDB",
    description: "No monitoring or alerting.",
    buggyCode: `// No monitoring
// Issues discovered by users`,
    fixedCode: `// Comprehensive monitoring
// 1. Atlas Monitoring (built-in)
//    - CPU, Memory, Disk
//    - Oplog window
//    - Connections

// 2. Custom metrics
db.serverStatus();
db.currentOp();
db.getReplicationInfo();

// 3. Alerting
//    - High CPU (>80%)
//    - Low memory (<20%)
//    - Replication lag (>10s)
//    - Too many connections

// 4. Integration
//    - Prometheus + Grafana
//    - CloudWatch
//    - Datadog`,
    hint: "Monitor all MongoDB metrics and set alerts.",
    bugLine: 2,
    explanation: "Without monitoring, issues cause outages before detection."
  },
  {
    id: 487,
    title: "Missing MongoDB Stitch/Realm Integration",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Separate backend instead of integrated.",
    buggyCode: `// Separate backend server
// Express.js + MongoDB driver
// Manual connection management`,
    fixedCode: `// Use MongoDB Realm
// 1. Realm Functions (serverless)
exports = function(arg1, arg2) {
  // Database operations
  return result;
};

// 2. Realm Triggers
exports = function(changeEvent) {
  // Real-time processing
};

// 3. Realm Sync (offline-first)
const realm = new Realm({
  schema: [TaskSchema],
  sync: {
    user: app.currentUser,
    partitionValue: "myPartition"
  }
});

// 4. Realm Authentication
const credentials = Realm.Credentials.anonymous();
const user = await app.logIn(credentials);`,
    hint: "Use MongoDB Realm for integrated backend.",
    bugLine: 3,
    explanation: "Realm provides serverless functions, triggers, sync, and auth."
  },
  {
    id: 488,
    title: "Wrong Data Modeling for Mobile Sync",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Not designing for Realm Sync.",
    buggyCode: `// Normalized data model
// Not suitable for sync
{
  _id: 1,
  user_id: 123,
  items: [456, 789]  // References
}`,
    fixedCode: `// Denormalized for sync
// Each device has complete data
{
  _id: 1,
  partition: "user=123",
  user: {
    _id: 123,
    name: "John"
  },
  items: [
    { _id: 456, name: "Item 1" },
    { _id: 789, name: "Item 2" }
  ]
}

// Use partition-based sync
const config = {
  sync: {
    user: user,
    partitionValue: "user=123"
  }
};`,
    hint: "Design data model for partition-based sync.",
    bugLine: 5,
    explanation: "Realm Sync works best with denormalized, partition-based data."
  },
  {
    id: 489,
    title: "Missing MongoDB Compass Aggregation Builder",
    difficulty: "Hard",
    language: "MongoDB",
    description: "Writing aggregations manually without testing.",
    buggyCode: `// Write aggregation in code
// Deploy without testing
const pipeline = [
  { $match: { ... } },
  { $group: { ... } }
];
db.collection.aggregate(pipeline);`,
    fixedCode: `// Use Compass Aggregation Builder
// 1. Open Compass
// 2. Select Aggregations tab
// 3. Build pipeline visually
// 4. Test with sample data
// 5. Export to code

// Or use $currentOp to test
const testPipeline = [
  { $match: { ... } },
  { $limit: 100 },  // Test with sample
  { $group: { ... } }
];

// Validate with explain
db.collection.explain().aggregate(testPipeline);`,
    hint: "Use Compass to build and test aggregations.",
    bugLine: 2,
    explanation: "Untested aggregations can have performance issues."
  },
  {
    id: 490,
    title: "Incorrect MongoDB Upgrade Strategy",
    difficulty: "Hard",
    language: "MongoDB",
    description: "In-place upgrade without testing.",
    buggyCode: `// Direct upgrade in production
// mongod --upgrade
// Hope it works`,
    fixedCode: `// Proper upgrade strategy
// 1. Backup current deployment
mongodump --uri="..." --out=backup

// 2. Test upgrade in staging
//    Same hardware/config
//    Test all queries

// 3. Check compatibility
//    - Driver compatibility
//    - Feature compatibility
//    - Deprecation warnings

// 4. Rolling upgrade (replica set)
//    a. Upgrade secondaries one by one
//    b. Step down primary
//    c. Upgrade former primary

// 5. Monitor after upgrade
//    - Performance
//    - Errors
//    - Feature flags

// 6. Rollback plan
//    Restore from backup
//    Downgrade procedure`,
    hint: "Follow proper upgrade procedure with testing.",
    bugLine: 3,
    explanation: "Direct upgrades can cause downtime and compatibility issues."
  }
];