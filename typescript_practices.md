## Best Practices

Prefer interfaces for defining object shapes and class contracts.
Use type aliases for unions, intersections, tuples, and utility compositions.
Avoid any; prefer unknown when the type is not yet known.
Use generics to write reusable, type-safe functions, classes, and interfaces.
Enable strict mode ("strict": true) in tsconfig.json for stronger type checking.
Use utility types like Partial, Pick, Omit, and Record to reduce duplication.


Question	                                Answer

What is TypeScript?	                        A statically typed superset of JavaScript.
Difference between type and interface?	    Interfaces are ideal for object shapes and support declaration merging; 
                                            types can also represent unions, intersections, tuples, and primitives.
Can an interface extend another interface?	Yes
Can a class implement multiple interfaces?	Yes
What are generics?	                        Type parameters that make code reusable and type-safe.
What does keyof do?	                        Produces a union of an object's property names.
Difference between any and unknown?	        any disables type checking; unknown requires type narrowing before use.
What is Partial<T>?	                        Makes every property in T optional.
What is Pick<T, K>?	                        Creates a type with only the selected properties.
What is Omit<T, K>?	                        Creates a type by excluding specified properties.
What is Record<K, V>?	                    Creates an object type with keys of type K and values of type V.

Your learning workflow
Write code
      │
      ▼
basictypes_example.ts
      │
      ▼
tsc basictypes_example.ts
      │
      ▼
basictypes_example.js
      │
      ▼
node basictypes_example.js