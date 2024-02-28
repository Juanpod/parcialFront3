//Este componente deberia recibir por props y mostrar en pantalla la informacion
//que envia el usuario

function Card({cedula, setShow}) {
    
    let color = "red"
    return (

      <div>
        
        <h2>El estado de tu cedula <span style={{color:color}}>{cedula.numero}</span>, con numero de documento <span style={{color:color}}>{cedula.documento}</span> es:</h2>
        
        <h3 style={{color:color}}>Verificada</h3>

        <button onClick={() => setShow(false)}>Volver</button>
      </div>
    );
  }
  
  export default Card;