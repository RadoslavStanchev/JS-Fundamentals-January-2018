function treasureLocator(input) {
    for (let i = 0; i < input.length; i += 2) {
        let x = Number(input[i]);
        let y = Number(input[i + 1]);
        if (1 <= x && x <= 3 && 1 <= y && y <= 3) {
            console.log('Tuvalu');
        }
        else if (8 <= x && x <= 9 && 0 <= y && y <= 1) {
            console.log('Tokelau');
        }
        else if (0 <= x && x <= 2 && 6 <= y && y <= 8) {
            console.log('Tonga');
        }
        else if (5 <= x && x <= 7 && 3 <= y && y <= 6) {
            console.log('Samoa');
        }
        else if (4 <= x && x <= 9 && 7 <= y && y <= 8) {
            console.log('Cook');
        }
        else {
            console.log('On the bottom of the ocean');
        }
    }
}
// treasureLocator([4, 2, 1.5, 6.5, 1, 3]);