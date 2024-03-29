import { axiosClient } from "../axios";

export function findAll(){
    const data = axiosClient.get('credit').then((res)=>{
        return res.data ;
    });

    return data;

}

export function findOne(id){
    const data = axiosClient.get('credit/'+id).then((res)=>{
        return res.data ;        
    });
    return data;
}

export function deleteOne(id){
    const data = axiosClient.delete('credit/'+id).then((res)=>{
        return res.data ;        
    });
    return data;
}

export function updateOne(id,info){
    datos = transform_string_integer(info);
    const data = axiosClient.patch('credit/'+id,info).then((res)=>{
        return res.data ;

    });
    return data;

}

export function create(info){
    datos = transform_string_integer(info);
    axiosClient.post('credit',info);
}


// function transform_string_integer(info){
//     for(var key in info) {
//         if (['id_achat','montant'].indexOf(key) != -1) {
//             info[key] = parseInt(info[key]) ;
//         }
//         }
//         return info;
// }

