const nameArg = process.argv[2] || process.env.USER || "world";
console.log(`Hello ${nameArg}`);
