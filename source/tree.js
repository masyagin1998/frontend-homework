'use strict';

const tree = height => {
    if (isNaN(height) || (height < 3)) {
        return null;
    }
    let stringTree = "";
    for (let i = 0; i < height - 1; i++) {
        stringTree += (" ".repeat((height - 1) - i - 1) +
                       "*".repeat(2 * i + 1) +
                       " ".repeat((height - 1) - i - 1) +
                       "\n");
    }
    stringTree += (" ".repeat(height - 2) +
                   "|" +
                   " ".repeat(height - 2) +
                   "\n");
    return stringTree;
};
