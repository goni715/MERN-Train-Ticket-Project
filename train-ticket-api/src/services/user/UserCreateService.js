const hashedPassword = require("../../utility/hashedPassword");
const UserCreateService= async (Request,DataModel) => {
    try{
        let PostBody=Request.body;
        PostBody.password = await hashedPassword(PostBody.password);//hashedPassword
        let data = await DataModel.create(PostBody)
        return {status: "success", data: data}
    }
    catch (error) {
        return {status: "error", data: error}
    }
}
module.exports=UserCreateService