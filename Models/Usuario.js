class vendedor{
    vendedor(){

    }
    // REQUERIMIENTOS DEL SELLER
    nombre="";
    usuario="";
    password="";
    Ofertas=[];
    Calidades = "";
    cualidades = "";
    Capacidad_de_Entrega="";
    Capacidad_financiera="";
    Seguros= [];

// CARACTERISTICAS A PONDERAR
Servicio_pre_venta = Boolean
Servicio_post_venta= Boolean
//TODO: 
Tiempos_de_entrega= Number //dias? semanas? meses? 
Formas_de_pago= {
    efectivo:Boolean,
    cheque:Boolean,
    credito:Boolean,
    consignacion:Boolean,
}
Penalizaciones= {
    aplican: Boolean,
    porcentaje: Number,
    indemnizacion: Boolean,
    cobroSobreDaños: Boolean,
    
}
otros= ["","",""]




    getOrden(){
        return this.Ofertas.length;
    }
    /**
     * genera una nueva oferta y la guarda en el arrelo
     * @param {
     * } valor 
     */
    pushOferta(valor) {
        this.Ofertas.push(
            {
                valor:valor,
                date:new Date(),
                orden: this.getOrden()
            }
        )
        
    }
}


class COMPRADOR{
    COMPRADOR(){
        
    }
    // REQUERIMIENTOS DEL SELLER
    nombre="";
    usuario="";
    password="";
    Ofertas=[];
    Calidades = "";
    cualidades = "";
    Capacidad_de_Entrega="";
    Capacidad_financiera="";
    Seguros= [];

// CARACTERISTICAS A PONDERAR
Servicio_pre_venta = Boolean
Servicio_post_venta= Boolean
//TODO: 
Tiempos_de_entrega= Number //dias? semanas? meses? 
Formas_de_pago= {
    efectivo:Boolean,
    cheque:Boolean,
    credito:Boolean,
    consignacion:Boolean,
}
Penalizaciones= {
    aplican: Boolean,
    porcentaje: Number,
    indemnizacion: Boolean,
    cobroSobreDaños: Boolean,
    
}
otros= ["","",""]

}
class Ofertas{
    valor=0;
    fecha=0;
    orden=0; //
}

// [
    
// ronda 1 a
// oferta 10
// fecha Date.now()
// orden Ofertas/length() 0 

 
// ronda 1 b
// oferta 10
// fecha Date.now()
// orden Ofertas/length() 1


// ronda 1 c
// oferta 10
// fecha Date.now()
// orden Ofertas/length() 2

// ronda 1 d
// oferta 10
// fecha Date.now()
// orden Ofertas/length() 3


// ronda 1
// oferta 10
// fecha Date.now()
// orden Ofertas/length() 4
// ]


module.exports = {
vendedor,
Ofertas
}