import Part from "./Part";

const Content = (propss) => {
console.log('Propiedasdes recibidas:',propss.contenido);

      return ( <div>

        <Part name={propss.contenido[0].name} exercise={propss.contenido[0].exercises} />
        <Part name={propss.contenido[1].name} exercise={propss.contenido[1].exercises} />
        <Part name={propss.contenido[2].name} exercise={propss.contenido[2].exercises} />
 
    </div>
    );
};
 
export default Content;