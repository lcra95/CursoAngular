function activar(quien:string, 
                 objeto:string = "mensaje", 
                 momento?:string){
    
    let mensaje:string;
    if(momento){
        mensaje =`${quien} activaste el ${objeto} justo ${momento}`;
    }else{
        mensaje =`${quien} activaste el ${objeto}`;
    }
    
    alert(mensaje);
}

activar("Flaquis", "Señal", "Ahora");