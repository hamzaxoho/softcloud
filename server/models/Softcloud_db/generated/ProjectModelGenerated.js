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
 *  TO CUSTOMIZE ProjectModelGenerated.js PLEASE EDIT ../ProjectModel.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */
// Database
import Database from "../../../classes/Database_Softcloud_db";
import mongoose, { Schema } from "mongoose";

// Logger
import Logger from "../../../classes/Logger";

const generatedModel = {
  /**
   * Init  schema
   */
  init() {
    const db = Database.getConnection();

    /**
      * Project
      */
    const projectSchema = new mongoose.Schema({
      Name: {
        type: "String", 
        required: true
      },
      // RELATIONS
      containers: {
        type: Schema.ObjectId,
        ref: "Container"
      },
      environments: {
        type: Schema.ObjectId,
        ref: "Environment"
      },
      services: {
        type: Schema.ObjectId,
        ref: "Service"
      },
      vms: {
        type: Schema.ObjectId,
        ref: "VirtualMachine"
      },
      
      
      // EXTERNAL RELATIONS
      /*
      projects: {
        type: Schema.ObjectId,
        ref: "User"
      },
      */
    });

    generatedModel.setModel(db.connection.model("Project", projectSchema));

    return projectSchema;
  },

  /**
   * Set Model
   */
  setModel: model => {
    generatedModel.model = model;
  },

  /**
   * Get model
   */
  getModel: () => {
    return generatedModel.model;
  },

  // Start queries
    

  // CRUD METHODS


  /**
  * ProjectModel.create
  *   @description CRUD ACTION create
  *
  */
  async create(item) {
    const obj = new generatedModel.model(item);
    return await obj.save();
  },
  
  /**
  * ProjectModel.delete
  *   @description CRUD ACTION delete
  *   @param ObjectId id Id
  *
  */
  async delete(id) {
    return await generatedModel.model.findByIdAndRemove(id);
  },
  
  /**
  * ProjectModel.findBycontainers
  *   @description CRUD ACTION findBycontainers
  *   @param Objectid key Id of model to search for
  *
  */
  async findBycontainers(key) {
    return await generatedModel.model.find({ 'containers' : key});
  },
  
  /**
  * ProjectModel.findByenvironments
  *   @description CRUD ACTION findByenvironments
  *   @param Objectid key Id of model to search for
  *
  */
  async findByenvironments(key) {
    return await generatedModel.model.find({ 'environments' : key});
  },
  
  /**
  * ProjectModel.findByservices
  *   @description CRUD ACTION findByservices
  *   @param Objectid key Id of model to search for
  *
  */
  async findByservices(key) {
    return await generatedModel.model.find({ 'services' : key});
  },
  
  /**
  * ProjectModel.findByvms
  *   @description CRUD ACTION findByvms
  *   @param Objectid key Id of model to search for
  *
  */
  async findByvms(key) {
    return await generatedModel.model.find({ 'vms' : key});
  },
  
  /**
  * ProjectModel.get
  *   @description CRUD ACTION get
  *   @param ObjectId id Id resource
  *
  */
  async get(id) {
    return await generatedModel.model.findOne({ _id : id });
  },
  
  /**
  * ProjectModel.list
  *   @description CRUD ACTION list
  *
  */
  async list() {
    return await generatedModel.model.find();
  },
  
  /**
  * ProjectModel.update
  *   @description CRUD ACTION update
  *   @param ObjectId id Id
  *
  */
  async update(item) { 
    return await generatedModel.model.findOneAndUpdate({ _id: item._id }, item, {'new': true});
  },
  


};

export default generatedModel;
