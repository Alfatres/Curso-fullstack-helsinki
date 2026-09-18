import Part from "./Part";

const Content = (propss) => {
console.log('Propiedasdes recibidas:',propss.contenido);

      return ( <div>

        <Part name={propss.contenido.partes[0].name} exercise={propss.contenido.partes[0].exercises} />
        <Part name={propss.contenido.partes[1].name} exercise={propss.contenido.partes[1].exercises} />
        <Part name={propss.contenido.partes[2].name} exercise={propss.contenido.partes[2].exercises} />
 
    </div>
    );
};
 
export default Content;