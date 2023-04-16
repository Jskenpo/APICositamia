const { Router } = require('express'); 
const router = Router();
const { obtenerTop10EnfermedadesFallecidos, 
    agregarMedico, obtenerTop10MedicosMasPacientes, 
    PacientesMasAsistencias, 
    SuministrosEscasos,
    HospitalesMasPacientes, 
    SuministrosVencidos, 
    ReporteMedico, 
    ReporteMedicoByID, 
    HistorialMedico, 
    HistorialMedicoByID, 
    NuevoReporteMedico, 
    NuevoHistorialMedico } = require('../controllers/index.controller');

//queries predefinidos para proyecto
router.get('/Fallecidos', obtenerTop10EnfermedadesFallecidos);
router.get('/MedicosMP', obtenerTop10MedicosMasPacientes);
router.get('/PacientesMA', PacientesMasAsistencias);
router.get('/SuministrosE', SuministrosEscasos);
router.get('/HospitalesMP', HospitalesMasPacientes);
router.get('/SuministrosV', SuministrosVencidos);
router.get('/ReporteM', ReporteMedico);
router.get('/Historial', HistorialMedico);

//usuario especifico 
router.get('/ReporteM/:id', ReporteMedicoByID);
router.get('/Historial/:id', HistorialMedicoByID);



//queries para agregar
router.post('/queries', agregarMedico);
router.post('/ReporteM', NuevoReporteMedico);
router.post('/Historial', NuevoHistorialMedico);


module.exports = router;