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
`vector3` object  
Contains methods for calculating vectors  
```javascript
vector3.add(/*unlimited arguments, all vec3*/); //Adds all arguments, and returns result vec3
vector3.dotmultiply(v1, v2); //Returns the dot product of v1 and v2
vector3.angle(v1, v2); //Returns the angle between v1 and v2
vector3.crossmultiply(v1, v2); //Returns an object, of which "magnitude" property contains magnitude of v1 to v2 cross product vector and "vector" property contains v1 to v2 cross product vector
```  
`expression` class  
This is another class, but since it uses `Function` class, it lacks code security, though I have tried to make it as good as possible. For now, let us leave with one example.  
```javascript
new expression("2*u + sin(v) -11").evaluateFor(["u = 5", "v = _pi_/2"]) // = 0
```  
2. Python  

`vec3` class  
This class is built for working with vectors with 3 components, making it useful while working with things like PyOpenGL.  
```python
vector = vec3(x, y, z) # Initialisation
displayvector = vector.stringify() # Returns a string, which arranges the components of the vector in the format it is displayed by JavaScript
magnitude = vector.magnitude() # Returns the magnitude of vector
```  
`coord3` class  
This class is built for working with spherical coordinates, making it useful while working with things like physics.  
```python
coordinate = coord3(r, xyangle, zangle) # Initialisation
displayvector = coordinate.stringify() # Returns a string, which arranges the components of the coordinate in the format it is displayed by JavaScript
```  
Methods to convert `vec3` to `coord3` and vice versa  
```python
vec3(x, y, z).toCoord3() #polar coordinate to spherical coordinate
coord3(r, xyangle, zangle).toVec3() #spherical coordinate to polar coordinate
```  
`vector3()` method  
Contains various tools for calculating vectors  
```python
vector3("add", \ #unlimited arguments, all vec3
) #Adds all vec3 arguments, and returns result vec3
vector3("dotmultiply", v1, v2) #Returns the dot product of v1 and v2
vector3("angle", v1, v2) #Returns the angle between v1 and v2
vector3("crossmultiply", v1, v2) #Returns a dictionary, of which "magnitude" property contains magnitude of v1 to v2 cross product vector, "vector" property contains v1 to v2 cross product vector,
vector3("crossmultiply", v1, v2)["display"] #and display property containing "magnitude" as magnitude of v1 to v2 cross product vector and "vector" property contains stringified form of v1 to v2 cross product vector  
TODO: Replace many of these with operator overloads (possibly as an alias)
