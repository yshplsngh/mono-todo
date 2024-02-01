import express, {Router} from 'express'
const router:Router = express.Router()
import {createNote, deleteNote, getAllNotes, updateNote} from "../controller/note.Controller";
import {JWTverify} from "../middleware/JWTverification";


router.route('/createNote').post(JWTverify,createNote);
router.route('/getAllNotes').get(JWTverify,getAllNotes);
router.route('/updateNote').post(JWTverify,updateNote);
router.route('/deleteNote').delete(JWTverify,deleteNote);
export {router as noteRouter}