Vue.component(
    'consumo',
    {
        template:
        `
            <div>
                <p>Reporte del Mes de: {{consumo.mes}}</p>
            </div>
        `,
        props:["consumo"],
    }
); 