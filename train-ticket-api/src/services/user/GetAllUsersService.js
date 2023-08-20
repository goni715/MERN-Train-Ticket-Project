
const GetAllUsersService= async (Request,DataModel) => {

    try {
        let data =await DataModel.aggregate([
            {$project:{_id:1, username:1, email:1, firstName:1, lastName:1, country:1, img:1, city:1, phone:1,isAdmin:1,createdAt:1, updatedAt:1}}
        ]);
        return  {status: "success", data: data}
    } catch (error) {
        return {status: "fail", data: error}
    }
}
module.exports=GetAllUsersService