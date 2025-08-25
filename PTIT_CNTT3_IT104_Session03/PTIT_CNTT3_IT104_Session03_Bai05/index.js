var capitalizeFirstLetter = function (str) {
    if (!str)
        return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
};
var fisrtName = "john";
var lastName = "doe";
fisrtName = capitalizeFirstLetter(fisrtName);
lastName = capitalizeFirstLetter(lastName);
var fullName = "".concat(fisrtName, " ").concat(lastName);
console.log(fullName); // John Doe
