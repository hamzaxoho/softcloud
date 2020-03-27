/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://app.skaffolder.com/#!/register?friend=5e7b0e7f06e8563f32298de1
*
* You will get 10% discount for each one of your friends
* 
*/
/**
 * 
 * 
  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
 
 * DO NOT EDIT THIS FILE!! 
 * 
 *  TO CUSTOMIZE ProjectControllerGenerated.js PLEASE EDIT ../ProjectController.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
import Properties from "../../../properties";
import ProjectModel from "../../../models/Softcloud_db/ProjectModel";
import ErrorManager from "../../../classes/ErrorManager";
import { authorize } from "../../../security/SecurityManager";
import ProjectController from "../ProjectController";

const generatedControllers = {
  /**
   * Init routes
   */
  init: router => {
    const baseUrl = `${Properties.api}/project`;
    router.post(baseUrl + "", authorize([]), ProjectController.create);
    router.delete(baseUrl + "/:id", authorize([]), ProjectController.delete);
    router.get(baseUrl + "/findBycontainers/:key", authorize([]), ProjectController.findBycontainers);
    router.get(baseUrl + "/findByenvironments/:key", authorize([]), ProjectController.findByenvironments);
    router.get(baseUrl + "/findByservices/:key", authorize([]), ProjectController.findByservices);
    router.get(baseUrl + "/findByvms/:key", authorize([]), ProjectController.findByvms);
    router.get(baseUrl + "/:id", authorize([]), ProjectController.get);
    router.get(baseUrl + "", authorize([]), ProjectController.list);
    router.post(baseUrl + "/:id", authorize([]), ProjectController.update);
  },


  // CRUD METHODS


  /**
  * ProjectModel.create
  *   @description CRUD ACTION create
  *
  */
  create: async (req, res) => {
    try {
      const result = await ProjectModel.create(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ProjectModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  delete: async (req, res) => {
    try {
      const result = await ProjectModel.delete(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ProjectModel.findBycontainers
  *   @description CRUD ACTION findBycontainers
  *   @param Objectid key Id of model to search for
  *
  */
  findBycontainers: async (req, res) => {
    try {
      const result = await ProjectModel.findBycontainers(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ProjectModel.findByenvironments
  *   @description CRUD ACTION findByenvironments
  *   @param Objectid key Id of model to search for
  *
  */
  findByenvironments: async (req, res) => {
    try {
      const result = await ProjectModel.findByenvironments(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ProjectModel.findByservices
  *   @description CRUD ACTION findByservices
  *   @param Objectid key Id of model to search for
  *
  */
  findByservices: async (req, res) => {
    try {
      const result = await ProjectModel.findByservices(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ProjectModel.findByvms
  *   @description CRUD ACTION findByvms
  *   @param Objectid key Id of model to search for
  *
  */
  findByvms: async (req, res) => {
    try {
      const result = await ProjectModel.findByvms(req.params.key);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ProjectModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  get: async (req, res) => {
    try {
      const result = await ProjectModel.get(req.params.id);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  /**
  * ProjectModel.list
  *   @description CRUD ACTION list
  *
  */
  list: async (req, res) => {
    try {
      const result = await ProjectModel.list();
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  /**
  * ProjectModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  update: async (req, res) => {
    try {
      const result = await ProjectModel.update(req.body);
      res.json(result);
    } catch (err) {
      const safeErr = ErrorManager.getSafeError(err);
      res.status(safeErr.status).json(safeErr);
    }
  },
  
  
  // Custom APIs

};

export default generatedControllers;
