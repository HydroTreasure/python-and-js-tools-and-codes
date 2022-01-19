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
`coord3` class  
This class is built for working with spherical coordinates, making it useful while working with things like physics.  
```javascript
coordinate = new coord3(r, xyangle, zangle); // Initialisation
```  
Methods to convert `vec3` to `coord3` and vice versa  
```javascript
vec3(x, y, z).toCoord3(); //polar coordinate to spherical coordinate
coord3(r, xyangle, zangle).toVec3(); //spherical coordinate to polar coordinate
```  
2. Python  

`vec3` class  
This class is built for working with vectors with 3 components, making it useful while working with things like PyOpenGL.  
```python
vector = vec3(x, y, z) // Initialisation
displayvector = vector.stringify() // Returns a string, which arranges the components of the vector in the format it is displayed by JavaScript
magnitude = vector.magnitude() // Returns the magnitude of vector
```  
`coord3` class  
This class is built for working with spherical coordinates, making it useful while working with things like physics.  
```python
coordinate = coord3(r, xyangle, zangle) // Initialisation
displayvector = coordinate.stringify() // Returns a string, which arranges the components of the coordinate in the format it is displayed by JavaScript
```  
Methods to convert `vec3` to `coord3` and vice versa  
```javascript
vec3(x, y, z).toCoord3() //polar coordinate to spherical coordinate
coord3(r, xyangle, zangle).toVec3() //spherical coordinate to polar coordinate
```  
