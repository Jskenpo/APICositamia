const { Router } = require('express'); 
const router = Router();
const { obtenerTop10EnfermedadesFallecidos, 
    agregarMedico, 
    obtenerTop10MedicosMasPacientes, 
    PacientesMasAsistencias, 
    SuministrosEscasos,
    HospitalesMasPacientes, 
    SuministrosVencidos, 
    ReporteMedico, 
    ReporteMedicoByID, 
    HistorialMedico, 
    HistorialMedicoByID, 
    NuevoReporteMedico, 
    NuevoHistorialMedico, 
    Paciente, 
    PacienteByID, 
    NewPaciente, 
    Inventario ,
    InventarioByID, 
    nuevoProducto, 
    UpdateMedico, 
    Medico} = require('../controllers/index.controller');

//queries predefinidos para proyecto
router.get('/Fallecidos', obtenerTop10EnfermedadesFallecidos);
router.get('/MedicosMP', obtenerTop10MedicosMasPacientes);
router.get('/PacientesMA', PacientesMasAsistencias);
router.get('/SuministrosE', SuministrosEscasos);
router.get('/HospitalesMP', HospitalesMasPacientes);
router.get('/SuministrosV', SuministrosVencidos);
router.get('/ReporteM', ReporteMedico);
router.get('/Historial', HistorialMedico);
router.get('/Paciente', Paciente);
router.get('/Inventario', Inventario);
router.get('/Medico', Medico);


//usuario especifico 
router.get('/ReporteM/:id', ReporteMedicoByID);
router.get('/Historial/:id', HistorialMedicoByID);
router.get('/Paciente/:id', PacienteByID);
router.get('/Inventario/:id', InventarioByID);



//queries para agregar
router.post('/Medico', agregarMedico);
router.post('/ReporteM', NuevoReporteMedico);
router.post('/Historial', NuevoHistorialMedico);
router.post('/Paciente', NewPaciente);
router.post('/Inventario', nuevoProducto);

//update
router.put('/Medico/:id', UpdateMedico);


module.exports = router;