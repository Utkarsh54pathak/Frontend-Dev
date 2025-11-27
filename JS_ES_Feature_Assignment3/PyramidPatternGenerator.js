"use strict";

function generatePyramidVarSafe(rows = 5) {
    console.log(`\nPyramid rows = ${rows}`);
    for (var i = 1; i <= rows; i++) {
        var line = "";
        for (var k = 1; k <= i; k++) {
            line += "* ";
        }
        console.log(line.trim());
    }
}
generatePyramidVarSafe(4);