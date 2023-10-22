
const successResponse = (res, msg)=> {
	var data = {
		message: msg
	}
	return res.status(200).json(data);
}

const successResponseWithData = (res, msg, data) =>{
	var resData = {
		message: msg,
		data: data
	}
	return res.status(200).json(resData)
}

const ErrorResponse =  (res, msg, error) =>{
	var data = {
		message: msg,
		errorMensaje:error.message,
		error:error
	}
	return res.status(500).json(data)
}

const notFoundResponse =  (res, msg) =>{
	var data = {
		message: msg
	}
	return res.status(404).json(data)
}

const validationErrorWithData =  (res, msg, data) =>{
	var resData = {
		message: msg,
		data: data
	}
	return res.status(400).json(resData)
}
const validationError =  (res, msg) =>{
	var resData = {
		message: msg
	}
	return res.status(400).json(resData)
}
const autenticationSuccess =  (res, msg,token,user) =>{
	var resData = {
		message: msg,
		token:token,
		data:user
	}
	return res.status(400).json(resData)
}

const unauthorizedResponse =  (res, msg)=> {
	var data = {
		message: msg
	}
	return res.status(401).json(data)
}

const insufficientResponse = (res,msg)=>{
	var data = {
		message: msg
	}
	return res.status(500).json(data)
}
module.exports = {
    successResponse,
    successResponseWithData,
    ErrorResponse,notFoundResponse,
    validationErrorWithData,
    unauthorizedResponse,
	insufficientResponse,
	validationError,
	autenticationSuccess

}