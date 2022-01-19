# python-and-js-tools-and-codes  
## math  
These are some math functions and classes useful while programming. It is written in 2 programming languages- JavaScript and Python. The Python version yet lacks the `expression` class, but it is planned for future. A C++ version is also planned for future.  
Tutorial:  
1. JavaScript  
`vec3` class  
This class is built for working with vectors with 3 components, making it useful while working with things like WebGL.  
```javascript
vector = new vec3(x, y, z); // Initialisation
magnitude = vector.magnitude() // Returns the magnitude of vector
```  
2. Python  
This class is bbuilt for working with vectors with 3 components, making it useful while working with things like PyOpenGL.  
```python
vector = vec3(x, y, z) // Initialisation
displayvector = vector.stringify() // Returns a string, which arranges the components of the vector in the format it is displayed by JavaScript
magnitude = vector.magnitude() // Returns the magnitude of vector
```  
