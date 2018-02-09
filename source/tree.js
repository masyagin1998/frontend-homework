function tree(height) {
    if (height < 3)
        return null;
    var stringTree = "";
    for (var i = 0; i < height - 1; i++) {
        for (var j = 0; j < (height - 1) - i - 1; j++) stringTree += " ";
        for (j = 0; j < 2 * i + 1; j++) stringTree += "*";
        for (j = 0; j < (height - 1) - i - 1; j++) stringTree += " ";
        stringTree += "\n";
    }
    for (i = 0; i < height - 2; i++) stringTree += " ";
    stringTree += "|";
    for (i = 0; i < height - 2; i++) stringTree += " ";
    stringTree += "\n";
    return stringTree;
}
