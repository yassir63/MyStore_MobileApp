import { axiosClient } from "../axios";

export function findAll(){
    const data = axiosClient.get('produits').then((res)=>{
        return res.data ;
    });
    return data;
}

export function findOne(id){
    const data = axiosClient.get('produits/'+id).then((res)=>{
        return res.data ;        
    });
    return data;
}

export function updateOne(id,datos){
    datos = transform_string_integer(datos);
    const data = axiosClient.patch('produits/'+id,datos).then((res)=>{
        return res.data ;

    });
    return data;

}

export function create(datos){
    datos = transform_string_integer(datos);
    axiosClient.post('produits',datos);
}


function transform_string_integer(datos){
    for(var key in datos) {
        if (['id_produit','Prix_vente','Prix_achat','quantite'].indexOf(key) != -1) {
            datos[key] = parseInt(datos[key]) ;
        }
        }
        return datos;
}