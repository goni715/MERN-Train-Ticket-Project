
const IsNotEmail = async (value) => {
    let EmailRegx = /\S+@\S+\.\S+/;

    if(!EmailRegx.test(value) === true){
        return true;
    }
}

module.exports=IsNotEmail