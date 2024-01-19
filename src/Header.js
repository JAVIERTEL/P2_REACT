export default function Header(){
    return (<div id="cabecera">
        <img src={process.env.PUBLIC_URL + "/sun.webp"} className="logo" alt="logo" />
        <h3 className='mensaje'>Página de Javier González Pérez</h3>
    </div>);
};