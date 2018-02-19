function templateFormatting(input) {
    console.log('<?xml version="1.0" encoding="UTF-8"?>');
    console.log('<quiz>');
    for (let i = 0; i < input.length; i += 2) {
        console.log(`\t<question>\n\t\t` + input[i] + `\n\t</question>`);
        console.log(`\t<answer>\n\t\t` + input[i + 1] + `\n\t</answer>`);
    }
    console.log('</quiz>');
}
// templateFormatting(["Dry ice is a frozen form of which gas?", "Carbon Dioxide", "What is the brightest star in the night sky?", "Sirius"]);
