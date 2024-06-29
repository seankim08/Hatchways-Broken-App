# Broken App Issues
1. The original code used map with async functions without properly awaiting the promises, leading to an array of unresolved promises.
2. The catch block lacked an error object, causing a reference error when trying to pass err to next.