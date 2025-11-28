   function calcularTotal(){
        const selectElements=document.querySelectorAll('select');
        const checkedCheckboxes=document.querySelectorAll('input[type="checkbox"]:checked');
        const inputsConPrecio=[...selectElements,...checkedCheckboxes].filter(el=>{
            return !isNaN(parseFloat(el.value));
        });
        const total=inputsConPrecio.reduce((acumulado,elemento)=>{
            const precio=parseFloat(elemento.value||0);
            return acumulado+precio;
        },0);
        document.getElementById('costo_total').value=`$${total.toLocaleString('es-MX')}`;
    }
    calcularTotal();