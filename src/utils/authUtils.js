import { Response } from "miragejs";
import jwt_decode from 'jwt-decode';
import dayjs from 'dayjs';

// used  for Authorizing Route in Backend 
// for Authorizing - token is filled && jwt-secret 
// After that Specific Detail is Pulled  Out 

export const AuthorizingRoute = function (request) {
    const encodedToken = request.requestHeaders.authorization;
    const decodedToken = jwt_decode(
        encodedToken,
        'jassa@123'
    );
    if(decodedToken){
        const user = this.db.users.findBy({ email : decodedToken.email });
        if(user){
            return user._id;
        }
    }
    return new Response(401,{} , {errors :[" The  token is invalid ,UnAuthorized Access "]})
};

export const formatDate = () => dayjs().format('dddd , MMMM D,YYYY [at] h:mm A');