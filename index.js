function findMatching(drivers, name){
    const lowercaseDrivers = name.toLowerCase()
    const matchingDrivers = drivers.filter((driver) => {
        const lowercaseDriver = driver.toLowerCase();
        return lowercaseDriver.startsWith(lowercaseDrivers)
    });
    return matchingDrivers;
}

function fuzzyMatch(names, passInName){
    const sameStart = names.filter((driver) => {
    return driver.startsWith(passInName);})
    return sameStart;
}

function matchName(drivers, string){
    return drivers.filter((driver) => driver.name === string)
}