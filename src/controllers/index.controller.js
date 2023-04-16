const { Pool } = require('pg');

const pool = new Pool({
    user: 'postgres',
    host: 'medicom.c64q2jpilfie.us-east-2.rds.amazonaws.com',
    database: 'MediComBD',
    password: 'ClaveRDS#1',
    port: 5432,
});

const obtenerTop10EnfermedadesFallecidos = async (req, res) => {
    const consulta = `
    select r.enfermedad_tratada, count(*) as pacientes_fallecidos from reporte_medico r
    join(
        select id_reporte_medico, status from historial
        where seguimiento = (select max(seguimiento) from historial h2 where h2.id_reporte_medico = historial.id_reporte_medico)
    ) h on r.id_reporte = h.id_reporte_medico
    where h.status = 'Muerto'
    group by r.enfermedad_tratada
    order by pacientes_fallecidos desc
    limit 10;
  `;
    try {
        const response = await pool.query(consulta);
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
    }


}

const agregarMedico = async (req, res) => {
    const { num_colegiado, nombre, direccion, telefono, id_centro_medico, especialidad, contraseña } = req.body;
    const response = await pool.query('INSERT INTO medico (num_colegiado,nombre,direccion,telefono,id_centro_medico,especialidad,contraseña) VALUES ($1,$2,$3,$4,$5,$6,$7)', [num_colegiado, nombre, direccion, telefono, id_centro_medico, especialidad, contraseña]);
    console.log(response);

    res.send('Medico agregado');
}

const obtenerTop10MedicosMasPacientes = async (req, res) => {
    const consulta = `
    select medico.num_colegiado, medico.nombre, count(reporte_medico.id_medico) as pacientes_atendidos from medico
    join reporte_medico
    on medico.num_colegiado = reporte_medico.id_medico
    group by medico.num_colegiado, medico.nombre
    order by pacientes_atendidos desc 
    limit 10
  `;
    try {
        const response = await pool.query(consulta);
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
    }


}

const PacientesMasAsistencias = async (req, res) => {
    const consulta = `
    select paciente.nombre, count(historial.id_reporte_medico) as asistencias_centros_medicos, paciente.peso, paciente.altura, paciente.masa_corporal from paciente
    join reporte_medico
    on paciente.dpi = reporte_medico.id_paciente
    join historial
    on historial.id_reporte_medico = reporte_medico.id_reporte
    group by paciente.nombre, paciente.peso, paciente.altura, paciente.masa_corporal
    order by asistencias_centros_medicos desc
    limit 5
  `;
    try {
        const response = await pool.query(consulta);
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
    }


}

const SuministrosEscasos = async (req, res) => {
    const consulta = `
    select inventario.nombre_producto, centro_medico.nombre , inventario.cantidad_producto, inventario.capacidad_producto, 
    cast(inventario.cantidad_producto as float)/cast(inventario.capacidad_producto as float) * 100 as porcentaje_disponible 
    from inventario
    join centro_medico 
    on inventario.id_centro_medico = centro_medico.id
    where inventario.cantidad_producto <= 0.2 * inventario.capacidad_producto
    order by porcentaje_disponible desc
  `;
    try {
        const response = await pool.query(consulta);
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
    }


}

const HospitalesMasPacientes = async (req, res) => {
    const consulta = `
    select centro_medico.nombre, count(reporte_medico.id_centro_medico) as pacientes_atendidos from centro_medico
    join reporte_medico
    on centro_medico.id = reporte_medico.id_centro_medico
    group by centro_medico.nombre
    order by pacientes_atendidos desc
    limit 3
  `;
    try {
        const response = await pool.query(consulta);
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
    }
}

const SuministrosVencidos = async (req, res) => {
    const consulta = `
    select inventario.nombre_producto, centro_medico.nombre , inventario.cantidad_producto, inventario.capacidad_producto, 
    cast(inventario.cantidad_producto as float)/cast(inventario.capacidad_producto as float) * 100 as porcentaje_disponible,
    inventario.fecha_vencimiento
    from inventario
    join centro_medico on inventario.id_centro_medico = centro_medico.id
    where inventario.cantidad_producto <= 0.15 * inventario.capacidad_producto
    or inventario.fecha_vencimiento <= current_date + interval '30 days'
    order by inventario.fecha_vencimiento asc
  `;
    try {
        const response = await pool.query(consulta);
        console.log(response.rows);
        res.status(200).json(response.rows);
    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    obtenerTop10EnfermedadesFallecidos,
    agregarMedico,
    obtenerTop10MedicosMasPacientes,
    PacientesMasAsistencias,
    SuministrosEscasos,
    HospitalesMasPacientes,
    SuministrosVencidos
}
