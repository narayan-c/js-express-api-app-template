const {google} = require("googleapis");

async function getMetadata() {

	
    const metadata = {age: 33, name: 'test'};
    return metadata;
}


// Get double for the given number parameter
async function double(srno){
    return 2*srno;
}



module.exports = {
    getMetadata,
    double
}
