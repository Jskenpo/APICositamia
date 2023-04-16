const { Router } = require('express'); 
const router = Router();
const { obtenerTop10EnfermedadesFallecidos, agregarMedico, obtenerTop10MedicosMasPacientes, PacientesMasAsistencias, SuministrosEscasos, HospitalesMasPacientes, SuministrosVencidos } = require('../controllers/index.controller');

//queries predefinidos para proyecto
router.get('/Fallecidos', obtenerTop10EnfermedadesFallecidos);
router.get('/MedicosMP', obtenerTop10MedicosMasPacientes);
router.get('/PacientesMA', PacientesMasAsistencias);
router.get('/SuministrosE', SuministrosEscasos);
router.get('/HospitalesMP', HospitalesMasPacientes);
router.get('/SuministrosV', SuministrosVencidos);

//usuario especifico 



//queries para agregar
router.post('/queries', agregarMedico);


module.exports = router;