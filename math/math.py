import math

# vector in 3 dimensions
class vec3:
    def __init__(this, x, y, z):
        this.x = x
        this.y = y
        this.z = z
    def stringify(this):
        return f"vec3  {{x: {this.x}, y: {this.y}, z: {this.z}}}"
    # convert to spherical coordinate
    def toCoord3(this):
        r = math.pow((this.x*this.x) + (this.y*this.y) + (this.z*this.z), 0.5)
        phi = math.acos(this.z / r)
        theta = math.acos(this.x / math.pow((this.x*this.x) + (this.y*this.y), 0.5))
        coordinate = coord3(r, theta, phi)
        return coordinate
    # get magnitude
    def magnitude(this):
        return math.pow((this.x*this.x) + (this.y*this.y) + (this.z*this.z), 0.5)

# spherical coordinate
class coord3:
    def __init__(this, radius, xyangle, zangle):
        this.r = radius
        this.theta = xyangle
        this.phi = zangle
    def stringify(this):
        return f"coord3  {{r: {this.r}, theta: {this.theta}, phi: {this.phi}}}"
    # convert to x y z coordinates
    def toVec3(this):
        vector = vec3(this.r * math.cos(this.theta) * math.sin(this.phi), this.r * math.sin(this.theta) * math.sin(this.phi), this.r * math.cos(this.phi))
        return vector

def vector3(function, *vecs):
    if function == "add":
        x = 0
        y = 0
        z = 0
        for arg in vecs:
            x += arg.x
            y += arg.y
            z += arg.z
        return vec3(x, y, z)
    elif function == "dotmultiply":
        return (vecs[0].x * vecs[1].x) + (vecs[0].y * vecs[1].y) + (vecs[0].z * vecs[1].z)
    elif function == "angle":
        return math.acos(vector3("dotmultiply", vecs[0], vecs[1]) / (vecs[0].magnitude() * vecs[1].magnitude()))
    elif function == "crossmultiply":
        magnitude = vecs[0].magnitude() * vecs[1].magnitude() * math.sin(vector3("angle", vecs[0], vecs[1]))
        vector = vec3((vecs[0].y* vecs[1].z) - (vecs[0].z * vecs[1].y), (vecs[0].x * vecs[1].z) - (vecs[0].z * vecs[1].x), (vecs[0].x * vecs[1].y) - (vecs[0].y * vecs[1].x))
        return {"magnitude" : magnitude, "vector" : vector, "display" : {"magnitude" : magnitude, "vector" : vector.stringify()}}

print(vec3(2,1,1).toCoord3().stringify())
print(coord3(2.449489742783178,0.46364760900080615,1.1502619915109316).toVec3().stringify())
print(vector3("add", vec3(1, 1, 1), vec3(1, 2, 2)).stringify())
print(vector3("crossmultiply", vec3(2, 1, 2), vec3(-3, 1, 2))["display"])
