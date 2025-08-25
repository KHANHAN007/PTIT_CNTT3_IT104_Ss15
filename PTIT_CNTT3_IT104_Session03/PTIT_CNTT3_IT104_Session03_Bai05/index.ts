const capitalizeFirstLetter = (str: string): string => {
    if (!str)
        return str;
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}
let fisrtName: string = "john";
let lastName: string = "doe";
fisrtName = capitalizeFirstLetter(fisrtName);
lastName = capitalizeFirstLetter(lastName);
let fullName: string = `${fisrtName} ${lastName}`;
console.log(fullName); // John Doe