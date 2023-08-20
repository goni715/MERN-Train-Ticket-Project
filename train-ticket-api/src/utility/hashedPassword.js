const bcrypt = require("bcrypt");

const hashedPassword = async (password) => {
    const salt = await bcrypt.genSalt(10);
     return await bcrypt.hash(password, salt); //hashedPassword

}

module.exports=hashedPassword