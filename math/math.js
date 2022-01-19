// vector in 3 dimensions
class vec3 {
	constructor(x, y, z) {
		this.x = x;
		this.y = y;
		this.z = z;
	}
	// convert to spherical coordinate
	toCoord3() {
		const r = Math.pow((this.x*this.x) + (this.y*this.y) + (this.z*this.z), 0.5);
		const phi = Math.acos(this.z / r);
		const theta = Math.acos(this.x / Math.pow((this.x*this.x) + (this.y*this.y), 0.5));
		const coordinate = new coord3(r, theta, phi);
		return coordinate;
	}
	// get magnitude
	magnitude() {
		return Math.pow((this.x*this.x) + (this.y*this.y) + (this.z*this.z), 0.5);
	}
}

// spherical coordinate
class coord3 {
	constructor(radius, xyangle, zangle) {
		this.r = radius;
		this.theta = xyangle;
		this.phi = zangle;
	}
	// convert to x y z coordinate
	toVec3() {
		const vector = new vec3(this.r * Math.cos(this.theta) * Math.sin(this.phi), this.r * Math.sin(this.theta) * Math.sin(this.phi), this.r * Math.cos(this.phi));
		return vector;
	}
}

// vector calculations
const vector3 = {
	add: function(...args) {
		let x = 0, y = 0, z = 0;
		args.forEach((arg) => {
			x += arg.x;
			y += arg.y;
			z += arg.z;
		});
		return new vec3(x, y, z);
	},
	dotmultiply: function(v1, v2) {
		return (v1.x * v2.x) + (v1.y * v2.y) + (v1.z * v2.z);
	},
	angle: function(v1, v2) {
		return Math.acos(vector3.dotmultiply(v1, v2) / (v1.magnitude() * v2.magnitude()));
	},
	crossmultiply: function(v1, v2) {
		const magnitude = v1.magnitude() * v2.magnitude() * Math.sin(vector3.angle(v1, v2));
		const vector = new vec3((v1.y * v2.z) - (v1.z * v2.y), (v1.x * v2.z) - (v1.z * v2.x), (v1.x * v2.y) - (v1.y * v2.x));
		return {magnitude, vector};
	}
}

// expression
function expfy(string) {
	let expression = string;
	if (expression.includes(".")) { //safety measure
		expression = "";
	}
	if (expression.includes("{")) { //safety measure
		expression = "";
	}
	if (expression.includes("}")) { //safety measure
		expression = "";
	}
	if (expression.includes("sin(")) {
		expression = expression.replaceAll("sin(", "Math.sin(");
	}
	if (expression.includes("cos(")) {
		expression = expression.replaceAll("cos(", "Math.cos(");
	}
	if (expression.includes("tan(")) {
		expression = expression.replaceAll("tan(", "Math.tan(");
	}
	if (expression.includes("cot(")) {
		expression = expression.replaceAll("cot(", "1 / Math.tan(");
	}
	if (expression.includes("sec(")) {
		expression = expression.replaceAll("sec(", "1 / Math.cos(");
	}
	if (expression.includes("cosec(")) {
		expression = expression.replaceAll("cosec(", "1 / Math.sin(");
	}
	if (expression.includes("ln(")) {
		expression = expression.replaceAll("ln(", "Math.log(");
	}
	if (expression.includes("log10(")) {
		expression = expression.replaceAll("log10(", "Math.log10(");
	}
	if (expression.includes("log(")) {
		expression = expression.replaceAll("log(", "Math.log(");
	}
	if (expression.includes("_pi_")) {
		expression = expression.replaceAll("_pi_", "Math.PI");
	}
	if (expression.includes("_e_")) {
		expression = expression.replaceAll("_e_", "Math.E");
	}
	if (expression.includes("_phi_")) {
		expression = expression.replaceAll("_phi_", "(1 + Math.pow(5, 0.5))/2");
	}
	if (expression.includes("_avogadro_")) {
		expression = expression.replaceAll("_avogadro_", "6.02214076e+23");
	}
	if (expression.includes("_planck_")) {
		expression = expression.replaceAll("_planck_", "6.62607015e-34");
	}
	if (expression.includes("_bohrradius_")) {
		expression = expression.replaceAll("_bohrradius_", "5.291772109038e-11");
	}
	if (expression.includes("_rydberginfinity_")) {
		expression = expression.replaceAll("_rydberginfinity_", "10973731.56816021");
	}
	return expression;
}
class expression {
	constructor(string) {
		this.expression = expfy(string);
	}
	evaluateFor(array) {
		try {
			let evalString = "";
			array.forEach((value) => {
				evalString += "let " + expfy(value) + ";\n";
			})
			evalString += "return " + this.expression + ";";
			let evaluate = new Function(evalString)
			let resultofmathcalculationbe = evaluate();
			return resultofmathcalculationbe;
		}
		catch(error) {
			console.error(error);
		}
	}
}
