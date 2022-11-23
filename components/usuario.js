Vue.component(
    'usuario',
    {
        template:
        `
            <div>
                <p>usuario: {{usuario.nombreCompleto}}</p>
                <p>direccion: {{usuario.direccion}}</p>
                <p>celular: {{usuario.celular}}</p>
            </div>
        `,
        props:["usuario"],
    }
);  
