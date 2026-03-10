export const LEVELS_SQL = [
  // ========== EASY (30 Questions) ==========
  {
    id: 301,
    title: "Missing WHERE Clause",
    difficulty: "Easy",
    language: "SQL",
    description: "DELETE query missing WHERE clause will delete all records.",
    buggyCode: `DELETE FROM users;`,
    fixedCode: `DELETE FROM users WHERE id = 5;`,
    hint: "Always specify a condition in DELETE statements.",
    bugLine: 1,
    explanation: "Without WHERE clause, entire table gets deleted!"
  },
  {
    id: 302,
    title: "Incorrect Column Name",
    difficulty: "Easy",
    language: "SQL",
    description: "Column name is misspelled.",
    buggyCode: `SELECT usernamee FROM users;`,
    fixedCode: `SELECT username FROM users;`,
    hint: "Check column spelling in database schema.",
    bugLine: 1,
    explanation: "Column 'usernamee' doesn't exist in the table."
  },
  {
    id: 303,
    title: "LIKE Without Wildcards",
    difficulty: "Easy",
    language: "SQL",
    description: "LIKE operator used without wildcards.",
    buggyCode: `SELECT * FROM posts WHERE title LIKE "Hello";`,
    fixedCode: `SELECT * FROM posts WHERE title LIKE "%Hello%";`,
    hint: "LIKE requires % for pattern matching.",
    bugLine: 1,
    explanation: "LIKE 'Hello' is same as = 'Hello' without wildcards."
  },
  {
    id: 304,
    title: "Missing Parentheses",
    difficulty: "Easy",
    language: "SQL",
    description: "Missing closing parenthesis in WHERE clause.",
    buggyCode: `SELECT * FROM users WHERE age > 18 AND status = 'active';`,
    fixedCode: `SELECT * FROM users WHERE (age > 18 AND status = 'active');`,
    hint: "Check for balanced parentheses.",
    bugLine: 1,
    explanation: "Missing closing parenthesis causes syntax error."
  },
  {
    id: 305,
    title: "String Quotes Issue",
    difficulty: "Easy",
    language: "SQL",
    description: "Using single quotes for string literals.",
    buggyCode: `SELECT * FROM users WHERE name = "John";`,
    fixedCode: `SELECT * FROM users WHERE name = 'John';`,
    hint: "SQL uses single quotes for string values.",
    bugLine: 1,
    explanation: "Double quotes are for identifiers, single for strings."
  },
  {
    id: 306,
    title: "Missing Comma in SELECT",
    difficulty: "Easy",
    language: "SQL",
    description: "Missing comma between column names.",
    buggyCode: `SELECT id name FROM users;`,
    fixedCode: `SELECT id, name FROM users;`,
    hint: "Separate column names with commas.",
    bugLine: 1,
    explanation: "Missing comma makes 'name' an alias for 'id'."
  },
  {
    id: 307,
    title: "Wrong ORDER BY Syntax",
    difficulty: "Easy",
    language: "SQL",
    description: "Missing BY keyword in ORDER BY.",
    buggyCode: `SELECT * FROM products ORDER price DESC;`,
    fixedCode: `SELECT * FROM products ORDER BY price DESC;`,
    hint: "It's ORDER BY, not just ORDER.",
    bugLine: 1,
    explanation: "ORDER BY is the correct syntax."
  },
  {
    id: 308,
    title: "Missing FROM Clause",
    difficulty: "Easy",
    language: "SQL",
    description: "SELECT statement without FROM clause.",
    buggyCode: `SELECT 1, 2, 3;`,
    fixedCode: `SELECT 1, 2, 3 FROM dual;`,
    hint: "Some databases require FROM clause.",
    bugLine: 1,
    explanation: "MySQL requires FROM DUAL for selecting literals."
  },
  {
    id: 309,
    title: "UPDATE Missing WHERE",
    difficulty: "Easy",
    language: "SQL",
    description: "UPDATE without WHERE updates all rows.",
    buggyCode: `UPDATE users SET status = 'inactive';`,
    fixedCode: `UPDATE users SET status = 'inactive' WHERE id = 10;`,
    hint: "Always use WHERE in UPDATE statements.",
    bugLine: 1,
    explanation: "Without WHERE, all users become inactive."
  },
  {
    id: 310,
    title: "Wrong JOIN Type",
    difficulty: "Easy",
    language: "SQL",
    description: "Using wrong JOIN type for the requirement.",
    buggyCode: `SELECT * FROM users CROSS JOIN orders;`,
    fixedCode: `SELECT * FROM users INNER JOIN orders ON users.id = orders.user_id;`,
    hint: "Use INNER JOIN for matching records.",
    bugLine: 1,
    explanation: "CROSS JOIN creates Cartesian product (all combinations)."
  },
  {
    id: 311,
    title: "Missing GROUP BY",
    difficulty: "Easy",
    language: "SQL",
    description: "Aggregate function without GROUP BY.",
    buggyCode: `SELECT COUNT(*), department FROM employees;`,
    fixedCode: `SELECT COUNT(*), department FROM employees GROUP BY department;`,
    hint: "When using aggregates, non-aggregated columns need GROUP BY.",
    bugLine: 1,
    explanation: "Can't mix aggregate and non-aggregate without GROUP BY."
  },
  {
    id: 312,
    title: "Wrong Date Format",
    difficulty: "Easy",
    language: "SQL",
    description: "Incorrect date format in query.",
    buggyCode: `SELECT * FROM orders WHERE order_date = '2024-13-01';`,
    fixedCode: `SELECT * FROM orders WHERE order_date = '2024-01-13';`,
    hint: "Use YYYY-MM-DD format for dates.",
    bugLine: 1,
    explanation: "Month 13 doesn't exist - should be YYYY-MM-DD."
  },
  {
    id: 313,
    title: "Duplicate Column Names",
    difficulty: "Easy",
    language: "SQL",
    description: "Same column name from different tables.",
    buggyCode: `SELECT name FROM users, profiles;`,
    fixedCode: `SELECT users.name FROM users, profiles WHERE users.id = profiles.user_id;`,
    hint: "Use table aliases or prefix column names.",
    bugLine: 1,
    explanation: "Both tables have 'name' column, causing ambiguity."
  },
  {
    id: 314,
    title: "Missing DISTINCT Keyword",
    difficulty: "Easy",
    language: "SQL",
    description: "Getting duplicate records when unique needed.",
    buggyCode: `SELECT city FROM customers;`,
    fixedCode: `SELECT DISTINCT city FROM customers;`,
    hint: "Use DISTINCT to remove duplicates.",
    bugLine: 1,
    explanation: "Without DISTINCT, same city appears multiple times."
  },
  {
    id: 315,
    title: "Wrong LIMIT Syntax",
    difficulty: "Easy",
    language: "SQL",
    description: "Incorrect LIMIT clause syntax.",
    buggyCode: `SELECT * FROM products LIMIT 10, 20;`,
    fixedCode: `SELECT * FROM products LIMIT 20 OFFSET 10;`,
    hint: "Modern SQL uses LIMIT X OFFSET Y.",
    bugLine: 1,
    explanation: "LIMIT 10,20 is MySQL syntax, standard is LIMIT 20 OFFSET 10."
  },
  {
    id: 316,
    title: "Missing NULL Check",
    difficulty: "Easy",
    language: "SQL",
    description: "Using = instead of IS NULL.",
    buggyCode: `SELECT * FROM users WHERE email = NULL;`,
    fixedCode: `SELECT * FROM users WHERE email IS NULL;`,
    hint: "Use IS NULL for NULL comparisons.",
    bugLine: 1,
    explanation: "NULL is not equal to anything, even NULL."
  },
  {
    id: 317,
    title: "Case-Sensitive String",
    difficulty: "Easy",
    language: "SQL",
    description: "Case-sensitive string comparison.",
    buggyCode: `SELECT * FROM users WHERE username = 'ADMIN';`,
    fixedCode: `SELECT * FROM users WHERE LOWER(username) = 'admin';`,
    hint: "Make comparison case-insensitive.",
    bugLine: 1,
    explanation: "'ADMIN' may not match 'admin' or 'Admin'."
  },
  {
    id: 318,
    title: "Wrong BETWEEN Syntax",
    difficulty: "Easy",
    language: "SQL",
    description: "Incorrect BETWEEN usage.",
    buggyCode: `SELECT * FROM products WHERE price BETWEEN 100 AND 50;`,
    fixedCode: `SELECT * FROM products WHERE price BETWEEN 50 AND 100;`,
    hint: "Lower value must come first in BETWEEN.",
    bugLine: 1,
    explanation: "BETWEEN 100 AND 50 returns no results (lower bound > upper bound)."
  },
  {
    id: 319,
    title: "Missing INSERT Columns",
    difficulty: "Easy",
    language: "SQL",
    description: "INSERT without column list.",
    buggyCode: `INSERT INTO users VALUES (1, 'John');`,
    fixedCode: `INSERT INTO users (id, name) VALUES (1, 'John');`,
    hint: "Always specify column names in INSERT.",
    bugLine: 1,
    explanation: "Without column names, must match exact table structure."
  },
  {
    id: 320,
    title: "Wrong Math Operator",
    difficulty: "Easy",
    language: "SQL",
    description: "Using wrong mathematical operator.",
    buggyCode: `SELECT price * 1.10 AS new_price FROM products;`,
    fixedCode: `SELECT price * 0.10 AS tax, price * 1.10 AS total FROM products;`,
    hint: "Check calculation logic.",
    bugLine: 1,
    explanation: "10% increase is price * 1.10, but label should be 'total_price'."
  },
  {
    id: 321,
    title: "Missing Table Alias",
    difficulty: "Easy",
    language: "SQL",
    description: "Long table name without alias.",
    buggyCode: `SELECT user_registration_details.username FROM user_registration_details;`,
    fixedCode: `SELECT u.username FROM user_registration_details AS u;`,
    hint: "Use aliases for long table names.",
    bugLine: 1,
    explanation: "Table alias makes query more readable."
  },
  {
    id: 322,
    title: "Incorrect HAVING Usage",
    difficulty: "Easy",
    language: "SQL",
    description: "HAVING without GROUP BY.",
    buggyCode: `SELECT COUNT(*) FROM users HAVING COUNT(*) > 10;`,
    fixedCode: `SELECT COUNT(*) FROM users;`,
    hint: "HAVING filters groups, WHERE filters rows.",
    bugLine: 1,
    explanation: "HAVING without GROUP BY is invalid."
  },
  {
    id: 323,
    title: "Wrong Subquery Placement",
    difficulty: "Easy",
    language: "SQL",
    description: "Subquery in wrong clause.",
    buggyCode: `SELECT name FROM (SELECT * FROM users) WHERE id = 1;`,
    fixedCode: `SELECT name FROM users WHERE id = 1;`,
    hint: "Avoid unnecessary subqueries.",
    bugLine: 1,
    explanation: "Simple query doesn't need subquery."
  },
  {
    id: 324,
    title: "Missing ESCAPE Character",
    difficulty: "Easy",
    language: "SQL",
    description: "LIKE with special characters.",
    buggyCode: `SELECT * FROM files WHERE name LIKE '100%.txt';`,
    fixedCode: `SELECT * FROM files WHERE name LIKE '100%.txt' ESCAPE '!';`,
    hint: "Use ESCAPE for literal % or _ in LIKE.",
    bugLine: 1,
    explanation: "% is wildcard, need ESCAPE for literal percent."
  },
  {
    id: 325,
    title: "Duplicate Data Insertion",
    difficulty: "Easy",
    language: "SQL",
    description: "Inserting duplicate primary key.",
    buggyCode: `INSERT INTO users (id, name) VALUES (1, 'John');
INSERT INTO users (id, name) VALUES (1, 'Jane');`,
    fixedCode: `INSERT INTO users (id, name) VALUES (1, 'John');
INSERT INTO users (id, name) VALUES (2, 'Jane');`,
    hint: "Primary keys must be unique.",
    bugLine: 2,
    explanation: "Can't insert same ID twice."
  },
  {
    id: 326,
    title: "Wrong Date Function",
    difficulty: "Easy",
    language: "SQL",
    description: "Using wrong date function.",
    buggyCode: `SELECT GETDATE() FROM users;`,
    fixedCode: `SELECT CURRENT_TIMESTAMP FROM dual;`,
    hint: "Check database-specific date functions.",
    bugLine: 1,
    explanation: "GETDATE() is SQL Server, use CURRENT_TIMESTAMP for standard SQL."
  },
  {
    id: 327,
    title: "Missing Column Alias",
    difficulty: "Easy",
    language: "SQL",
    description: "Calculated column without alias.",
    buggyCode: `SELECT price * quantity FROM orders;`,
    fixedCode: `SELECT price * quantity AS total_amount FROM orders;`,
    hint: "Always alias calculated columns.",
    bugLine: 1,
    explanation: "Without alias, column name is 'price * quantity' which is invalid in some contexts."
  },
  {
    id: 328,
    title: "Incorrect NULL Handling",
    difficulty: "Easy",
    language: "SQL",
    description: "Arithmetic with NULL.",
    buggyCode: `SELECT price + discount FROM products;`,
    fixedCode: `SELECT price + COALESCE(discount, 0) FROM products;`,
    hint: "NULL + anything = NULL.",
    bugLine: 1,
    explanation: "If discount is NULL, result is NULL."
  },
  {
    id: 329,
    title: "Wrong Wildcard Position",
    difficulty: "Easy",
    language: "SQL",
    description: "Incorrect wildcard placement.",
    buggyCode: `SELECT * FROM products WHERE name LIKE '%apple';`,
    fixedCode: `SELECT * FROM products WHERE name LIKE 'apple%';`,
    hint: "% at start means 'ends with', at end means 'starts with'.",
    bugLine: 1,
    explanation: "'%apple' finds names ending with apple, 'apple%' finds starting with apple."
  },
  {
    id: 330,
    title: "Missing Transaction Control",
    difficulty: "Easy",
    language: "SQL",
    description: "Multiple updates without transaction.",
    buggyCode: `UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;`,
    fixedCode: `BEGIN TRANSACTION;
UPDATE account SET balance = balance - 100 WHERE id = 1;
UPDATE account SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
    hint: "Use transactions for multiple related updates.",
    bugLine: 1,
    explanation: "Without transaction, first could succeed and second fail, causing inconsistency."
  },

  // ========== MEDIUM (30 Questions) ==========
  {
    id: 331,
    title: "Nested Subquery Performance",
    difficulty: "Medium",
    language: "SQL",
    description: "Correlated subquery causing performance issues.",
    buggyCode: `SELECT * FROM users u WHERE EXISTS (
  SELECT 1 FROM orders o WHERE o.user_id = u.id AND o.total > 1000
);`,
    fixedCode: `SELECT u.* FROM users u 
INNER JOIN orders o ON u.id = o.user_id 
WHERE o.total > 1000 
GROUP BY u.id;`,
    hint: "Use JOIN instead of correlated subquery for better performance.",
    bugLine: 2,
    explanation: "Correlated subquery executes for each row - very inefficient for large datasets."
  },
  {
    id: 332,
    title: "Missing Index on JOIN Column",
    difficulty: "Medium",
    language: "SQL",
    description: "JOIN on non-indexed column causing slow query.",
    buggyCode: `SELECT * FROM users u 
JOIN orders o ON u.email = o.customer_email;`,
    fixedCode: `-- First create index
CREATE INDEX idx_orders_customer_email ON orders(customer_email);

SELECT * FROM users u 
JOIN orders o ON u.email = o.customer_email;`,
    hint: "Columns used in JOIN should be indexed.",
    bugLine: 2,
    explanation: "JOIN on non-indexed column causes full table scans."
  },
  {
    id: 333,
    title: "Incorrect NULL Handling in Aggregate",
    difficulty: "Medium",
    language: "SQL",
    description: "COUNT(*) vs COUNT(column) difference.",
    buggyCode: `SELECT COUNT(discount) FROM products;`,
    fixedCode: `SELECT COUNT(*) AS total_rows, 
COUNT(discount) AS rows_with_discount,
SUM(CASE WHEN discount IS NOT NULL THEN 1 ELSE 0 END) AS count_not_null
FROM products;`,
    hint: "COUNT(column) excludes NULL values.",
    bugLine: 1,
    explanation: "COUNT(discount) counts only non-NULL discount values."
  },
  {
    id: 334,
    title: "Wrong Data Type Conversion",
    difficulty: "Medium",
    language: "SQL",
    description: "Implicit conversion causing performance issues.",
    buggyCode: `SELECT * FROM users WHERE id = '100';`,
    fixedCode: `SELECT * FROM users WHERE id = 100;`,
    hint: "Compare same data types.",
    bugLine: 1,
    explanation: "Comparing integer id with string forces type conversion on each row."
  },
  {
    id: 335,
    title: "Missing Composite Index",
    difficulty: "Medium",
    language: "SQL",
    description: "Multiple WHERE conditions without composite index.",
    buggyCode: `SELECT * FROM orders 
WHERE status = 'shipped' 
AND order_date > '2024-01-01'
AND customer_id = 123;`,
    fixedCode: `-- Create composite index
CREATE INDEX idx_orders_composite ON orders(status, order_date, customer_id);

SELECT * FROM orders 
WHERE status = 'shipped' 
AND order_date > '2024-01-01'
AND customer_id = 123;`,
    hint: "Multiple WHERE conditions benefit from composite index.",
    bugLine: 1,
    explanation: "Single column indexes may not be used efficiently for multiple conditions."
  },
  {
    id: 336,
    title: "Incorrect GROUP BY with Expression",
    difficulty: "Medium",
    language: "SQL",
    description: "GROUP BY on calculated expression.",
    buggyCode: `SELECT YEAR(order_date), COUNT(*) 
FROM orders 
GROUP BY YEAR(order_date);`,
    fixedCode: `SELECT YEAR(order_date) AS order_year, COUNT(*) 
FROM orders 
GROUP BY YEAR(order_date)
ORDER BY order_year;`,
    hint: "GROUP BY expression must match SELECT expression.",
    bugLine: 3,
    explanation: "Some databases require repeating expression or using column alias."
  },
  {
    id: 337,
    title: "Window Function Misuse",
    difficulty: "Medium",
    language: "SQL",
    description: "Using window function incorrectly.",
    buggyCode: `SELECT name, salary, RANK() OVER () FROM employees;`,
    fixedCode: `SELECT name, salary, 
RANK() OVER (ORDER BY salary DESC) AS rank
FROM employees;`,
    hint: "Window functions need ORDER BY in OVER() clause.",
    bugLine: 1,
    explanation: "RANK() without ORDER BY gives same rank to all rows."
  },
  {
    id: 338,
    title: "Missing UNION ALL vs UNION",
    difficulty: "Medium",
    language: "SQL",
    description: "Using UNION instead of UNION ALL.",
    buggyCode: `SELECT id, name FROM active_users
UNION
SELECT id, name FROM inactive_users;`,
    fixedCode: `SELECT id, name FROM active_users
UNION ALL
SELECT id, name FROM inactive_users;`,
    hint: "UNION removes duplicates, UNION ALL keeps all.",
    bugLine: 2,
    explanation: "UNION performs DISTINCT which is expensive if duplicates don't exist."
  },
  {
    id: 339,
    title: "Incorrect CASE Statement",
    difficulty: "Medium",
    language: "SQL",
    description: "CASE without ELSE causing NULLs.",
    buggyCode: `SELECT name, 
CASE WHEN salary > 50000 THEN 'High' 
WHEN salary > 30000 THEN 'Medium' 
END AS category
FROM employees;`,
    fixedCode: `SELECT name, 
CASE WHEN salary > 50000 THEN 'High' 
WHEN salary > 30000 THEN 'Medium' 
ELSE 'Low' 
END AS category
FROM employees;`,
    hint: "Always include ELSE in CASE statements.",
    bugLine: 1,
    explanation: "Without ELSE, salaries <= 30000 get NULL category."
  },
  {
    id: 340,
    title: "Wrong Subquery Return Type",
    difficulty: "Medium",
    language: "SQL",
    description: "Subquery returning multiple rows in single-value context.",
    buggyCode: `SELECT name, (SELECT department FROM employees WHERE id = users.id) 
FROM users;`,
    fixedCode: `SELECT u.name, e.department 
FROM users u
LEFT JOIN employees e ON u.id = e.id;`,
    hint: "Scalar subquery must return exactly one row.",
    bugLine: 1,
    explanation: "Subquery might return multiple departments for same user."
  },
  {
    id: 341,
    title: "Missing LOCK HINT",
    difficulty: "Medium",
    language: "SQL",
    description: "Deadlock in concurrent updates.",
    buggyCode: `UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;`,
    fixedCode: `BEGIN TRANSACTION;
UPDATE accounts WITH (UPDLOCK) SET balance = balance - 100 WHERE id = 1;
UPDATE accounts WITH (UPDLOCK) SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
    hint: "Use locking hints in concurrent environments.",
    bugLine: 1,
    explanation: "Without proper locking, concurrent transactions can deadlock."
  },
  {
    id: 342,
    title: "Incorrect Pagination Query",
    difficulty: "Medium",
    language: "SQL",
    description: "OFFSET/LIMIT without ORDER BY.",
    buggyCode: `SELECT * FROM products LIMIT 10 OFFSET 20;`,
    fixedCode: `SELECT * FROM products ORDER BY id LIMIT 10 OFFSET 20;`,
    hint: "Always use ORDER BY with pagination.",
    bugLine: 1,
    explanation: "Without ORDER BY, rows can appear in different order each time."
  },
  {
    id: 343,
    title: "Missing Foreign Key Constraint",
    difficulty: "Medium",
    language: "SQL",
    description: "Orphan records due to missing foreign key.",
    buggyCode: `INSERT INTO orders (user_id, amount) VALUES (9999, 100);`,
    fixedCode: `-- First ensure foreign key exists
ALTER TABLE orders ADD CONSTRAINT fk_user 
FOREIGN KEY (user_id) REFERENCES users(id);

-- Then insert (will fail if user 9999 doesn't exist)
INSERT INTO orders (user_id, amount) VALUES (9999, 100);`,
    hint: "Use foreign keys to maintain referential integrity.",
    bugLine: 1,
    explanation: "Without foreign key, can insert order for non-existent user."
  },
  {
    id: 344,
    title: "Wrong Date Range Query",
    difficulty: "Medium",
    language: "SQL",
    description: "Inclusive/exclusive date range issue.",
    buggyCode: `SELECT * FROM orders 
WHERE order_date BETWEEN '2024-01-01' AND '2024-01-31';`,
    fixedCode: `SELECT * FROM orders 
WHERE order_date >= '2024-01-01' 
AND order_date < '2024-02-01';`,
    hint: "BETWEEN is inclusive - includes Jan 31 23:59:59.",
    bugLine: 2,
    explanation: "BETWEEN includes end date - might miss/exclude boundary cases with timestamps."
  },
  {
    id: 345,
    title: "Missing Common Table Expression (CTE)",
    difficulty: "Medium",
    language: "SQL",
    description: "Repeated subquery instead of CTE.",
    buggyCode: `SELECT * FROM 
(SELECT user_id, SUM(amount) FROM orders GROUP BY user_id) t1
JOIN 
(SELECT user_id, COUNT(*) FROM payments GROUP BY user_id) t2
ON t1.user_id = t2.user_id;`,
    fixedCode: `WITH order_totals AS (
  SELECT user_id, SUM(amount) AS total_amount 
  FROM orders GROUP BY user_id
),
payment_counts AS (
  SELECT user_id, COUNT(*) AS payment_count 
  FROM payments GROUP BY user_id
)
SELECT * FROM order_totals ot
JOIN payment_counts pc ON ot.user_id = pc.user_id;`,
    hint: "Use CTEs for complex queries with repeated subqueries.",
    bugLine: 1,
    explanation: "CTEs make query more readable and maintainable."
  },
  {
    id: 346,
    title: "Incorrect NULLS LAST/FIRST",
    difficulty: "Medium",
    language: "SQL",
    description: "NULL handling in ORDER BY.",
    buggyCode: `SELECT * FROM products ORDER BY discount DESC;`,
    fixedCode: `SELECT * FROM products 
ORDER BY discount DESC NULLS LAST;`,
    hint: "Specify NULLS FIRST or NULLS LAST.",
    bugLine: 1,
    explanation: "NULLs may appear first or last depending on database."
  },
  {
    id: 347,
    title: "Missing FULL OUTER JOIN",
    difficulty: "Medium",
    language: "SQL",
    description: "Using UNION instead of FULL JOIN.",
    buggyCode: `SELECT * FROM table1 LEFT JOIN table2 ON t1.id = t2.id
UNION
SELECT * FROM table1 RIGHT JOIN table2 ON t1.id = t2.id;`,
    fixedCode: `SELECT * FROM table1 FULL OUTER JOIN table2 ON t1.id = t2.id;`,
    hint: "Use FULL OUTER JOIN for complete merge.",
    bugLine: 1,
    explanation: "FULL JOIN is cleaner than UNION of LEFT and RIGHT JOIN."
  },
  {
    id: 348,
    title: "Wrong String Aggregation",
    difficulty: "Medium",
    language: "SQL",
    description: "Using wrong string aggregation function.",
    buggyCode: `SELECT user_id, GROUP_CONCAT(product_name) 
FROM orders GROUP BY user_id;`,
    fixedCode: `SELECT user_id, 
STRING_AGG(product_name, ', ') WITHIN GROUP (ORDER BY order_date)
FROM orders GROUP BY user_id;`,
    hint: "Check database-specific string aggregation functions.",
    bugLine: 1,
    explanation: "GROUP_CONCAT is MySQL, STRING_AGG is SQL Server/PostgreSQL."
  },
  {
    id: 349,
    title: "Missing RECURSIVE CTE",
    difficulty: "Medium",
    language: "SQL",
    description: "Hierarchical data without recursive query.",
    buggyCode: `-- Multiple queries for tree structure
SELECT * FROM employees WHERE manager_id IS NULL;
SELECT * FROM employees WHERE manager_id IN (...);`,
    fixedCode: `WITH RECURSIVE org_chart AS (
  SELECT id, name, manager_id, 1 AS level
  FROM employees WHERE manager_id IS NULL
  UNION ALL
  SELECT e.id, e.name, e.manager_id, oc.level + 1
  FROM employees e
  INNER JOIN org_chart oc ON e.manager_id = oc.id
)
SELECT * FROM org_chart ORDER BY level;`,
    hint: "Use RECURSIVE CTE for hierarchical data.",
    bugLine: 1,
    explanation: "Recursive CTE handles tree structures elegantly."
  },
  {
    id: 350,
    title: "Incorrect PIVOT Usage",
    difficulty: "Medium",
    language: "SQL",
    description: "Manual pivot instead of PIVOT operator.",
    buggyCode: `SELECT 
  product_id,
  MAX(CASE WHEN month = 'Jan' THEN sales END) AS Jan,
  MAX(CASE WHEN month = 'Feb' THEN sales END) AS Feb
FROM sales GROUP BY product_id;`,
    fixedCode: `SELECT * FROM (
  SELECT product_id, month, sales 
  FROM sales
) AS src
PIVOT (
  SUM(sales) FOR month IN ([Jan], [Feb], [Mar])
) AS pvt;`,
    hint: "Use PIVOT for cleaner transposition.",
    bugLine: 1,
    explanation: "PIVOT operator is more readable for matrix transformation."
  },
  {
    id: 351,
    title: "Missing MERGE Statement",
    difficulty: "Medium",
    language: "SQL",
    description: "Separate INSERT/UPDATE instead of MERGE.",
    buggyCode: `-- Check if exists then insert or update
IF EXISTS (SELECT 1 FROM users WHERE id = 1)
  UPDATE users SET name = 'John' WHERE id = 1;
ELSE
  INSERT INTO users (id, name) VALUES (1, 'John');`,
    fixedCode: `MERGE INTO users AS target
USING (VALUES (1, 'John')) AS source (id, name)
ON target.id = source.id
WHEN MATCHED THEN 
  UPDATE SET name = source.name
WHEN NOT MATCHED THEN 
  INSERT (id, name) VALUES (source.id, source.name);`,
    hint: "Use MERGE for upsert operations.",
    bugLine: 1,
    explanation: "MERGE is atomic and handles race conditions better."
  },
  {
    id: 352,
    title: "Wrong LATERAL JOIN Usage",
    difficulty: "Medium",
    language: "SQL",
    description: "Correlated subquery instead of LATERAL JOIN.",
    buggyCode: `SELECT u.name, 
(SELECT order_date FROM orders WHERE user_id = u.id ORDER BY order_date DESC LIMIT 1)
FROM users u;`,
    fixedCode: `SELECT u.name, latest.order_date
FROM users u
CROSS JOIN LATERAL (
  SELECT order_date FROM orders 
  WHERE user_id = u.id 
  ORDER BY order_date DESC 
  LIMIT 1
) latest;`,
    hint: "Use LATERAL JOIN for correlated subqueries returning multiple rows.",
    bugLine: 2,
    explanation: "LATERAL JOIN is more efficient and flexible than scalar subquery."
  },
  {
    id: 353,
    title: "Missing JSON Functions",
    difficulty: "Medium",
    language: "SQL",
    description: "Manual JSON parsing instead of JSON functions.",
    buggyCode: `-- Extracting from JSON string manually
SELECT SUBSTRING(json_col, PATINDEX('%"name":"%', json_col) + 8, 
  CHARINDEX('"', json_col, PATINDEX('%"name":"%', json_col) + 8) - 
  (PATINDEX('%"name":"%', json_col) + 8))
FROM table;`,
    fixedCode: `SELECT JSON_VALUE(json_col, '$.name') AS name,
JSON_QUERY(json_col, '$.address') AS address
FROM table;`,
    hint: "Use built-in JSON functions.",
    bugLine: 1,
    explanation: "JSON functions are safer and more efficient than string manipulation."
  },
  {
    id: 354,
    title: "Incorrect Window Frame",
    difficulty: "Medium",
    language: "SQL",
    description: "Missing window frame specification.",
    buggyCode: `SELECT date, amount,
SUM(amount) OVER (ORDER BY date) AS running_total
FROM transactions;`,
    fixedCode: `SELECT date, amount,
SUM(amount) OVER (ORDER BY date ROWS BETWEEN UNBOUNDED PRECEDING AND CURRENT ROW) 
AS running_total
FROM transactions;`,
    hint: "Explicit window frames prevent unexpected results.",
    bugLine: 2,
    explanation: "Default frame may differ between databases."
  },
  {
    id: 355,
    title: "Missing FILTER Clause",
    difficulty: "Medium",
    language: "SQL",
    description: "CASE in aggregate instead of FILTER.",
    buggyCode: `SELECT 
  COUNT(CASE WHEN status = 'active' THEN 1 END) AS active_count,
  COUNT(CASE WHEN status = 'inactive' THEN 1 END) AS inactive_count
FROM users;`,
    fixedCode: `SELECT 
  COUNT(*) FILTER (WHERE status = 'active') AS active_count,
  COUNT(*) FILTER (WHERE status = 'inactive') AS inactive_count
FROM users;`,
    hint: "Use FILTER clause for conditional aggregates.",
    bugLine: 1,
    explanation: "FILTER clause is more readable than CASE in aggregates."
  },
  {
    id: 356,
    title: "Wrong EXCEPT Usage",
    difficulty: "Medium",
    language: "SQL",
    description: "NOT IN instead of EXCEPT.",
    buggyCode: `SELECT id FROM table1 
WHERE id NOT IN (SELECT id FROM table2);`,
    fixedCode: `SELECT id FROM table1
EXCEPT
SELECT id FROM table2;`,
    hint: "Use EXCEPT for set difference.",
    bugLine: 2,
    explanation: "EXCEPT handles NULLs better than NOT IN."
  },
  {
    id: 357,
    title: "Missing MATERIALIZED VIEW",
    difficulty: "Medium",
    language: "SQL",
    description: "Complex query instead of materialized view.",
    buggyCode: `-- Complex aggregation run frequently
SELECT product_id, SUM(sales), AVG(price) 
FROM sales GROUP BY product_id;`,
    fixedCode: `CREATE MATERIALIZED VIEW product_summary AS
SELECT product_id, SUM(sales) AS total_sales, AVG(price) AS avg_price
FROM sales GROUP BY product_id;

SELECT * FROM product_summary;`,
    hint: "Use materialized views for expensive aggregations.",
    bugLine: 1,
    explanation: "Materialized views cache results for better performance."
  },
  {
    id: 358,
    title: "Incorrect Sequence Usage",
    difficulty: "Medium",
    language: "SQL",
    description: "Manual increment instead of sequence.",
    buggyCode: `-- Getting next ID manually
SELECT MAX(id) + 1 FROM users;
INSERT INTO users (id, name) VALUES (?, 'John');`,
    fixedCode: `CREATE SEQUENCE user_id_seq START WITH 1 INCREMENT BY 1;

INSERT INTO users (id, name) VALUES (NEXTVAL('user_id_seq'), 'John');`,
    hint: "Use sequences for generating unique IDs.",
    bugLine: 2,
    explanation: "MAX()+1 can cause race conditions and duplicates."
  },
  {
    id: 359,
    title: "Missing CHECK Constraint",
    difficulty: "Medium",
    language: "SQL",
    description: "Invalid data without validation.",
    buggyCode: `INSERT INTO employees (age, salary) VALUES (-5, -1000);`,
    fixedCode: `ALTER TABLE employees 
ADD CONSTRAINT chk_age CHECK (age >= 18 AND age <= 65),
ADD CONSTRAINT chk_salary CHECK (salary >= 0);

INSERT INTO employees (age, salary) VALUES (25, 50000);`,
    hint: "Use CHECK constraints for data validation.",
    bugLine: 1,
    explanation: "Without constraints, invalid data can enter database."
  },
  {
    id: 360,
    title: "Wrong TRUNCATE vs DELETE",
    difficulty: "Medium",
    language: "SQL",
    description: "Using DELETE to remove all rows.",
    buggyCode: `DELETE FROM log_entries;`,
    fixedCode: `TRUNCATE TABLE log_entries;`,
    hint: "Use TRUNCATE to delete all rows efficiently.",
    bugLine: 1,
    explanation: "DELETE logs each row, TRUNCATE is faster for entire table."
  },

  // ========== HARD (30 Questions) ==========
  {
    id: 361,
    title: "SQL Injection Vulnerability",
    difficulty: "Hard",
    language: "SQL",
    description: "Direct string concatenation in query.",
    buggyCode: `const query = "SELECT * FROM users WHERE username = '" + username + "'";`,
    fixedCode: `const query = "SELECT * FROM users WHERE username = ?";
const params = [username];`,
    hint: "Use parameterized queries or prepared statements.",
    bugLine: 1,
    explanation: "Direct concatenation allows SQL injection attacks."
  },
  {
    id: 362,
    title: "Missing Connection Pooling",
    difficulty: "Hard",
    language: "SQL",
    description: "Creating new connection for each query.",
    buggyCode: `function query(sql) {
  const conn = new Connection();
  const result = conn.execute(sql);
  conn.close();
  return result;
}`,
    fixedCode: `const pool = new ConnectionPool(config);

async function query(sql, params) {
  const conn = await pool.getConnection();
  try {
    const result = await conn.execute(sql, params);
    return result;
  } finally {
    conn.release();
  }
}`,
    hint: "Use connection pooling for database connections.",
    bugLine: 2,
    explanation: "Creating new connections for each query is expensive and can exhaust database connections."
  },
  {
    id: 363,
    title: "N+1 Query Problem",
    difficulty: "Hard",
    language: "SQL",
    description: "Multiple queries in loop instead of JOIN.",
    buggyCode: `const users = db.query("SELECT id, name FROM users");
for (const user of users) {
  const orders = db.query("SELECT * FROM orders WHERE user_id = " + user.id);
  user.orders = orders;
}`,
    fixedCode: `const usersWithOrders = db.query("SELECT u.id, u.name, o.id as order_id, o.amount, o.date FROM users u LEFT JOIN orders o ON u.id = o.user_id ORDER BY u.id"); // Group in application code`,
    hint: "Use JOIN to fetch related data in single query.",
    bugLine: 3,
    explanation: "N+1 queries cause database round trips and poor performance."
  },
  {
    id: 364,
    title: "Missing Query Plan Analysis",
    difficulty: "Hard",
    language: "SQL",
    description: "Not analyzing execution plan.",
    buggyCode: `SELECT * FROM large_table WHERE column LIKE '%search%';`,
    fixedCode: `-- Create full-text index
CREATE FULLTEXT INDEX idx_search ON large_table(column);

-- Use full-text search
SELECT * FROM large_table 
WHERE CONTAINS(column, 'search');`,
    hint: "Always check execution plan for slow queries.",
    bugLine: 1,
    explanation: "LIKE '%value%' can't use indexes and causes full table scan."
  },
  {
    id: 365,
    title: "Wrong Isolation Level",
    difficulty: "Hard",
    language: "SQL",
    description: "Using default isolation level for financial transactions.",
    buggyCode: `BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
    fixedCode: `SET TRANSACTION ISOLATION LEVEL SERIALIZABLE;
BEGIN TRANSACTION;
UPDATE accounts SET balance = balance - 100 WHERE id = 1;
UPDATE accounts SET balance = balance + 100 WHERE id = 2;
COMMIT;`,
    hint: "Use appropriate isolation level for data consistency.",
    bugLine: 1,
    explanation: "Default READ COMMITTED may allow phantom reads in concurrent scenarios."
  },
  {
    id: 366,
    title: "Missing Partitioning",
    difficulty: "Hard",
    language: "SQL",
    description: "Large table without partitioning.",
    buggyCode: `CREATE TABLE sales (
  id BIGINT PRIMARY KEY,
  sale_date DATE,
  amount DECIMAL,
  region VARCHAR(50)
);`,
    fixedCode: `CREATE TABLE sales (
  id BIGINT,
  sale_date DATE,
  amount DECIMAL,
  region VARCHAR(50)
) PARTITION BY RANGE (sale_date);

CREATE TABLE sales_2023 PARTITION OF sales
FOR VALUES FROM ('2023-01-01') TO ('2024-01-01');

CREATE TABLE sales_2024 PARTITION OF sales
FOR VALUES FROM ('2024-01-01') TO ('2025-01-01');`,
    hint: "Partition large tables by date or other criteria.",
    bugLine: 1,
    explanation: "Without partitioning, queries scan entire table even when accessing small date ranges."
  },
  {
    id: 367,
    title: "Incorrect Sharding Strategy",
    difficulty: "Hard",
    language: "SQL",
    description: "Single database for massive data.",
    buggyCode: `-- All data in single database
SELECT * FROM billion_row_table WHERE user_id = 123;`,
    fixedCode: `-- Shard by user_id
-- Database shard1: user_id % 4 = 0
-- Database shard2: user_id % 4 = 1
-- etc.

-- Route query to correct shard
const shard = user_id % 4;
const db = getShardConnection(shard);
db.query("SELECT * FROM users WHERE user_id = ?", [user_id]);`,
    hint: "Implement sharding for horizontal scaling.",
    bugLine: 2,
    explanation: "Single database can't handle billions of rows efficiently."
  },
  {
    id: 368,
    title: "Missing Read Replicas",
    difficulty: "Hard",
    language: "SQL",
    description: "All queries hitting primary database.",
    buggyCode: `-- All reads and writes to same database
app.get('/users', () => {
  return db.query("SELECT * FROM users");
});

app.post('/users', (user) => {
  return db.query("INSERT INTO users ...");
});`,
    fixedCode: `// Configure read replicas
const readDb = getReadReplicaConnection();
const writeDb = getPrimaryConnection();

app.get('/users', () => {
  return readDb.query("SELECT * FROM users");  // Read from replica
});

app.post('/users', (user) => {
  return writeDb.query("INSERT INTO users ...");  // Write to primary
});`,
    hint: "Use read replicas for read-heavy workloads.",
    bugLine: 3,
    explanation: "Read queries on primary database reduce write performance."
  },
  {
    id: 369,
    title: "Wrong Cache Strategy",
    difficulty: "Hard",
    language: "SQL",
    description: "No caching for frequent queries.",
    buggyCode: `function getUser(id) {
  return db.query("SELECT * FROM users WHERE id = ?", [id]);
}`,
    fixedCode: `const cache = new RedisCache();

async function getUser(id) {
  const cacheKey = 'user:' + id;
  let user = await cache.get(cacheKey);
  
  if (!user) {
    user = await db.query("SELECT * FROM users WHERE id = ?", [id]);
    await cache.set(cacheKey, user, { ttl: 300 }); // Cache for 5 minutes
  }
  
  return user;
}`,
    hint: "Cache frequently accessed, rarely changing data.",
    bugLine: 2,
    explanation: "Repeated identical queries waste database resources."
  },
  {
    id: 370,
    title: "Missing Database Index Maintenance",
    difficulty: "Hard",
    language: "SQL",
    description: "Never rebuilding fragmented indexes.",
    buggyCode: `-- Index created long ago, never maintained
CREATE INDEX idx_users_email ON users(email);`,
    fixedCode: `-- Regular index maintenance
-- Check fragmentation
SELECT * FROM sys.dm_db_index_physical_stats(...);

-- Rebuild fragmented indexes
ALTER INDEX idx_users_email ON users REBUILD;

-- Update statistics
UPDATE STATISTICS users;`,
    hint: "Regularly maintain indexes and statistics.",
    bugLine: 1,
    explanation: "Fragmented indexes degrade query performance over time."
  },
  {
    id: 371,
    title: "Incorrect Deadlock Handling",
    difficulty: "Hard",
    language: "SQL",
    description: "No retry logic for deadlocks.",
    buggyCode: `try {
  db.query("UPDATE accounts SET balance = balance - 100 WHERE id = 1");
} catch (error) {
  throw error;
}`,
    fixedCode: `async function updateWithRetry(query, params, maxRetries = 3) {
  for (let i = 0; i < maxRetries; i++) {
    try {
      return await db.query(query, params);
    } catch (error) {
      if (error.code === 'DEADLOCK' && i < maxRetries - 1) {
        await sleep(Math.pow(2, i) * 100); // Exponential backoff
        continue;
      }
      throw error;
    }
  }
}`,
    hint: "Implement retry logic for deadlocks.",
    bugLine: 4,
    explanation: "Deadlocks are normal in concurrent systems - should retry automatically."
  },
  {
    id: 372,
    title: "Missing Connection Timeout",
    difficulty: "Hard",
    language: "SQL",
    description: "Infinite wait for database connection.",
    buggyCode: `const db = new Database(config);
// No timeout set`,
    fixedCode: `const config = {
  host: 'localhost',
  user: 'root',
  password: 'password',
  database: 'test',
  connectTimeout: 10000, // 10 seconds
  acquireTimeout: 10000,
  timeout: 10000
};`,
    hint: "Always set connection timeouts.",
    bugLine: 2,
    explanation: "Without timeout, application can hang indefinitely if database is unreachable."
  },
  {
    id: 373,
    title: "Wrong Bulk Insert Method",
    difficulty: "Hard",
    language: "SQL",
    description: "Individual INSERTs instead of bulk insert.",
    buggyCode: `for (const row of data) {
  db.query("INSERT INTO logs VALUES (?, ?, ?)", row);
}`,
    fixedCode: `// Use bulk insert
  const placeholders = data.map(() => '(?, ?, ?)').join(',');
  const values = data.flat();
  db.query('INSERT INTO logs VALUES ' + placeholders, values);

  // Or use COPY command (PostgreSQL)
  // COPY logs FROM STDIN WITH CSV

  // Or use LOAD DATA (MySQL)
  // LOAD DATA INFILE 'data.csv' INTO TABLE logs`,
    hint: "Use bulk operations for mass inserts.",
    bugLine: 2,
    explanation: "Individual INSERTs have huge overhead for large datasets."
  },
  {
    id: 374,
    title: "Missing Query Timeout",
    difficulty: "Hard",
    language: "SQL",
    description: "Long-running queries blocking system.",
    buggyCode: `const result = db.query("SELECT * FROM huge_table JOIN another_huge_table");`,
    fixedCode: `// Set query timeout
db.query({
  sql: "SELECT * FROM huge_table JOIN another_huge_table",
  timeout: 30000 // 30 seconds
});

// Or use database-level timeout
SET STATEMENT_TIMEOUT = 30000;`,
    hint: "Set timeout for all queries.",
    bugLine: 1,
    explanation: "Long-running queries can block database resources and cause cascading failures."
  },
  {
    id: 375,
    title: "Incorrect Connection Pool Size",
    difficulty: "Hard",
    language: "SQL",
    description: "Wrong pool size configuration.",
    buggyCode: `const pool = mysql.createPool({
  connectionLimit: 100, // Too high
  // ...
});`,
    fixedCode: `// Calculate optimal pool size
// Formula: (core_count * 2) + effective_spindle_count
const poolSize = Math.min(
  (require('os').cpus().length * 2),
  10 // Don't exceed database max_connections
);

const pool = mysql.createPool({
  connectionLimit: poolSize,
  // ...
});`,
    hint: "Size connection pool appropriately.",
    bugLine: 2,
    explanation: "Too many connections waste memory, too few cause queuing."
  },
  {
    id: 376,
    title: "Missing Database Encryption",
    difficulty: "Hard",
    language: "SQL",
    description: "Sensitive data stored in plain text.",
    buggyCode: `CREATE TABLE users (
  id INT PRIMARY KEY,
  ssn VARCHAR(9),  -- Social Security Number
  credit_card VARCHAR(16)
);`,
    fixedCode: `-- Use database encryption
CREATE TABLE users (
  id INT PRIMARY KEY,
  ssn VARBINARY(256),  -- Encrypted
  credit_card VARBINARY(256)  -- Encrypted
);

-- Or use application-level encryption
INSERT INTO users (ssn) VALUES (AES_ENCRYPT('123456789', 'encryption_key'));`,
    hint: "Encrypt sensitive data at rest.",
    bugLine: 3,
    explanation: "Plain text sensitive data is security risk if database is compromised."
  },
  {
    id: 377,
    title: "Wrong Backup Strategy",
    difficulty: "Hard",
    language: "SQL",
    description: "No backup or incomplete backup.",
    buggyCode: `-- No backup strategy implemented`,
    fixedCode: `-- Implement comprehensive backup strategy
-- 1. Full backups weekly
BACKUP DATABASE mydb TO DISK = '/backups/full.bak';

-- 2. Differential backups daily
BACKUP DATABASE mydb TO DISK = '/backups/diff.bak' WITH DIFFERENTIAL;

-- 3. Transaction log backups hourly
BACKUP LOG mydb TO DISK = '/backups/log.bak';

-- 4. Test restore regularly
RESTORE DATABASE mydb_test FROM DISK = '/backups/full.bak';`,
    hint: "Implement 3-2-1 backup strategy.",
    bugLine: 1,
    explanation: "Without proper backups, data loss is inevitable."
  },
  {
    id: 378,
    title: "Missing Database Monitoring",
    difficulty: "Hard",
    language: "SQL",
    description: "No monitoring for database performance.",
    buggyCode: `-- No monitoring queries or alerts`,
    fixedCode: `-- Set up monitoring
-- 1. Slow query log
SET GLOBAL slow_query_log = 'ON';
SET GONG long_query_time = 2;

-- 2. Monitor connections
SHOW PROCESSLIST;

-- 3. Monitor locks
SELECT * FROM information_schema.INNODB_LOCKS;

-- 4. Monitor buffer pool usage
SHOW ENGINE INNODB STATUS;

-- 5. Set up alerts for:
--    - High CPU usage
--    - Low memory
--    - Full disk
--    - Replication lag`,
    hint: "Monitor database health and performance.",
    bugLine: 1,
    explanation: "Without monitoring, problems are discovered too late."
  },
  {
    id: 379,
    title: "Incorrect Database Version Control",
    difficulty: "Hard",
    language: "SQL",
    description: "Manual schema changes without versioning.",
    buggyCode: `-- Manual SQL run on production
ALTER TABLE users ADD COLUMN new_field VARCHAR(100);`,
    fixedCode: `-- Use migration tools
// migration_001_add_new_field.sql
ALTER TABLE users ADD COLUMN new_field VARCHAR(100);

// Track in version control
-- Run migrations in order
-- Rollback capability
-- Test in staging first`,
    hint: "Use database migration tools.",
    bugLine: 2,
    explanation: "Manual schema changes cause inconsistencies and are hard to roll back."
  },
  {
    id: 380,
    title: "Missing Database Replication",
    difficulty: "Hard",
    language: "SQL",
    description: "Single point of failure.",
    buggyCode: `-- Single database server
const db = connect('primary-db');`,
    fixedCode: `-- Set up master-slave replication
-- Primary: accepts writes
-- Replica: accepts reads, can be promoted

// Application code with failover
let db = connect('primary-db');
try {
  db.query("INSERT ...");
} catch (error) {
  if (error.code === 'PRIMARY_DOWN') {
    db = connect('replica-db');
    promoteToPrimary('replica-db');
  }
}`,
    hint: "Implement database replication for high availability.",
    bugLine: 2,
    explanation: "Single database server creates single point of failure."
  },
  {
    id: 381,
    title: "Wrong Database Normalization",
    difficulty: "Hard",
    language: "SQL",
    description: "Over-normalization causing performance issues.",
    buggyCode: `-- Over-normalized design
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100)
);

CREATE TABLE user_emails (
  user_id INT,
  email_type VARCHAR(20),
  email VARCHAR(100),
  PRIMARY KEY (user_id, email_type),
  FOREIGN KEY (user_id) REFERENCES users(id)
);

-- Need 5 joins to get complete user data`,
    fixedCode: `-- Denormalize for performance
CREATE TABLE users (
  id INT PRIMARY KEY,
  name VARCHAR(100),
  primary_email VARCHAR(100),
  secondary_email VARCHAR(100),
  work_email VARCHAR(100)
  -- JSON column for flexible additional emails
  other_emails JSON
);`,
    hint: "Balance normalization with performance needs.",
    bugLine: 1,
    explanation: "Excessive joins degrade read performance - sometimes denormalize for reads."
  },
  {
    id: 382,
    title: "Missing Full-Text Search",
    difficulty: "Hard",
    language: "SQL",
    description: "Using LIKE for text search.",
    buggyCode: `SELECT * FROM documents 
WHERE content LIKE '%database performance%'
OR content LIKE '%query optimization%';`,
    fixedCode: `-- Create full-text index
CREATE FULLTEXT INDEX idx_content ON documents(content);

-- Use full-text search
SELECT * FROM documents 
WHERE MATCH(content) AGAINST('database performance query optimization');`,
    hint: "Use full-text search for text columns.",
    bugLine: 2,
    explanation: "LIKE with wildcards is extremely slow on large text columns."
  },
  {
    id: 383,
    title: "Incorrect Data Archiving Strategy",
    difficulty: "Hard",
    language: "SQL",
    description: "Keeping all historical data in active tables.",
    buggyCode: `-- 10 years of log data in active table
SELECT * FROM activity_logs 
WHERE user_id = 123 
AND timestamp > '2014-01-01';`,
    fixedCode: `-- Archive old data
-- 1. Create archive table
CREATE TABLE activity_logs_archive LIKE activity_logs;

-- 2. Move old data
INSERT INTO activity_logs_archive 
SELECT * FROM activity_logs 
WHERE timestamp < DATE_SUB(NOW(), INTERVAL 2 YEAR);

DELETE FROM activity_logs 
WHERE timestamp < DATE_SUB(NOW(), INTERVAL 2 YEAR);

-- 3. Query both if needed
(SELECT * FROM activity_logs WHERE user_id = 123)
UNION ALL
(SELECT * FROM activity_logs_archive WHERE user_id = 123);`,
    hint: "Archive old data to separate tables/databases.",
    bugLine: 4,
    explanation: "Active tables grow indefinitely, affecting performance and backup times."
  },
  {
    id: 384,
    title: "Missing Database Connection SSL",
    difficulty: "Hard",
    language: "SQL",
    description: "Unencrypted database connections.",
    buggyCode: `const db = mysql.createConnection({
  host: 'dbserver',
  user: 'root',
  password: 'secret',
  // No SSL
});`,
    fixedCode: `const db = mysql.createConnection({
  host: 'dbserver',
  user: 'root',
  password: 'secret',
  ssl: {
    ca: fs.readFileSync('/path/to/ca-cert.pem'),
    key: fs.readFileSync('/path/to/client-key.pem'),
    cert: fs.readFileSync('/path/to/client-cert.pem')
  }
});`,
    hint: "Always use SSL/TLS for database connections.",
    bugLine: 5,
    explanation: "Unencrypted connections expose credentials and data to network sniffing."
  },
  {
    id: 385,
    title: "Wrong Database User Permissions",
    difficulty: "Hard",
    language: "SQL",
    description: "Application using admin credentials.",
    buggyCode: `-- Application connects as root
const db = connect('root', 'password');`,
    fixedCode: `-- Create application user with minimal permissions
CREATE USER 'app_user'@'%' IDENTIFIED BY 'strong_password';
GRANT SELECT, INSERT, UPDATE, DELETE ON app_db.* TO 'app_user'@'%';
-- No DROP, no GRANT, no administrative privileges

-- Application connects with limited user
const db = connect('app_user', 'strong_password');`,
    hint: "Use principle of least privilege for database users.",
    bugLine: 2,
    explanation: "Root access allows SQL injection to drop tables or escalate privileges."
  },
  {
    id: 386,
    title: "Missing Database Connection Pool Monitoring",
    difficulty: "Hard",
    language: "SQL",
    description: "Not monitoring connection pool health.",
    buggyCode: `const pool = createPool(config);
// No monitoring`,
    fixedCode: `const pool = createPool(config);

// Monitor pool health
setInterval(() => {
  const stats = {
    total: pool.totalCount,
    idle: pool.idleCount,
    waiting: pool.waitingCount,
    using: pool.usingCount
  };
  
  if (stats.waiting > 10) {
    alert('Connection pool bottleneck');
  }
  
  if (stats.total === stats.using) {
    alert('All connections in use');
  }
}, 60000); // Check every minute`,
    hint: "Monitor connection pool metrics.",
    bugLine: 3,
    explanation: "Without monitoring, connection pool issues cause silent degradation."
  },
  {
    id: 387,
    title: "Incorrect Database Selection",
    difficulty: "Hard",
    language: "SQL",
    description: "Using relational database for wrong use case.",
    buggyCode: `-- Using SQL for social graph queries
-- Many recursive queries for friend-of-friend`,
    fixedCode: `-- Use graph database for social connections
// Neo4j Cypher query
MATCH (user:User {id: 123})-[:FRIEND*1..3]->(friend)
RETURN friend

-- Or use specialized database for specific needs
-- Time-series: InfluxDB
-- Document: MongoDB
-- Key-value: Redis
-- Search: Elasticsearch`,
    hint: "Choose database technology based on use case.",
    bugLine: 2,
    explanation: "Relational databases are poor for highly connected/graph data."
  },
  {
    id: 388,
    title: "Missing Database Stress Testing",
    difficulty: "Hard",
    language: "SQL",
    description: "No load testing before production.",
    buggyCode: `-- Deploy to production without testing
-- Hope for the best`,
    fixedCode: `-- Implement comprehensive testing
-- 1. Unit tests for queries
-- 2. Integration tests with real data
-- 3. Load testing with production-like data
-- 4. Stress testing beyond expected load
-- 5. Failover testing
-- 6. Backup/restore testing

// Example load test
for (let i = 0; i < 10000; i++) {
  concurrentQueries.push(
    db.query("SELECT * FROM users WHERE email LIKE ?", ['%test' + i + '%'])
  );
}`,
    hint: "Test database performance under load.",
    bugLine: 2,
    explanation: "Without stress testing, performance issues appear only in production."
  },
  {
    id: 389,
    title: "Wrong Database Configuration",
    difficulty: "Hard",
    language: "SQL",
    description: "Using default database settings.",
    buggyCode: `-- MySQL with default my.cnf
-- Default buffer sizes, cache settings`,
    fixedCode: `-- Optimize database configuration
[mysqld]
# Memory settings
innodb_buffer_pool_size = 4G  # 70-80% of RAM
innodb_log_file_size = 1G
key_buffer_size = 256M

# Connection settings
max_connections = 200
thread_cache_size = 100

# Query cache (MySQL 5.7)
query_cache_type = 1
query_cache_size = 128M

# Logging
slow_query_log = 1
long_query_time = 2`,
    hint: "Tune database configuration for your workload.",
    bugLine: 2,
    explanation: "Default configurations are for compatibility, not performance."
  },
  {
    id: 390,
    title: "Missing Database Maintenance Window",
    difficulty: "Hard",
    language: "SQL",
    description: "No scheduled maintenance causing unpredictable downtime.",
    buggyCode: `-- Run maintenance tasks randomly
-- During peak hours
OPTIMIZE TABLE large_table;`,
    fixedCode: `-- Schedule regular maintenance window
-- Weekly, during low traffic (e.g., Sunday 2-4 AM)

-- 1. Backup
-- 2. Update statistics
UPDATE STATISTICS ON ALL TABLES;

-- 3. Rebuild indexes
REORGANIZE/REBUILD FRAGMENTED INDEXES;

-- 4. Purge old data
DELETE FROM logs WHERE created_at < DATE_SUB(NOW(), INTERVAL 90 DAY);

-- 5. Optimize tables
OPTIMIZE TABLE large_tables;`,
    hint: "Schedule regular database maintenance.",
    bugLine: 3,
    explanation: "Unplanned maintenance during peak hours causes outages."
  }
];