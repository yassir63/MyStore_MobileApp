import { axiosClient } from "../axios";

export function findAll(){
    const data = axiosClient.get('achats').then((res)=>{
        return res.data ;
    });

    return data;

}

export function findOne(id){
    const data = axiosClient.get('achats/'+id).then((res)=>{
        return res.data ;        
    });
    return data;
}

export function updateOne(id,info){
    datos = transform_string_integer(info);
    const data = axiosClient.patch('achats/'+id,info).then((res)=>{
        return res.data ;

    });
    return data;

}

export function create(info){
    datos = transform_string_integer(info);
    axiosClient.post('achats',info);
}


function transform_string_integer(info){
    for(var key in info) {
        if (['id_achat','montant'].indexOf(key) != -1) {
            info[key] = parseInt(info[key]) ;
        }
        }
        return info;
}

