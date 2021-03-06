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
 *  TO CUSTOMIZE FUNCTIONS IN EnvironmentActionsGenerated.js PLEASE EDIT ../EnvironmentActions.js
 *
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 *
 */

import * as types from "../../actionTypes";
import EnvironmentApi from "../../../api/EnvironmentApi";

let actionsFunction = {

  //CRUD METHODS

  // Create environment
  createEnvironment: function(environment) {
    return function(dispatch) {
      return EnvironmentApi
        .createEnvironment(environment)
        .then(environment => {
          dispatch(actionsFunction.createEnvironmentSuccess(environment));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  createEnvironmentSuccess: function(environment) {
    return { type: types.CREATE_ENVIRONMENT_SUCCESS, payload: environment };
  },


  // Delete environment
  deleteEnvironment: function(id) {
    return function(dispatch) {
      return EnvironmentApi
        .deleteEnvironment(id)
        .then(environment => {
          dispatch(actionsFunction.deleteEnvironmentSuccess(environment));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  deleteEnvironmentSuccess: function(environment) {
    return { type: types.DELETE_ENVIRONMENT_SUCCESS, payload: environment };
  },


  // Find by containers
  findBycontainers: function(key) {
    return function(dispatch) {
      return EnvironmentApi
        .findBycontainers(key)
        .then(item => {
          dispatch(actionsFunction.findBycontainersSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findBycontainersSuccess: function(item) {
    return { type: types.FINDBYCONTAINERS_ENVIRONMENT_SUCCESS, payload: item };
  },


  // Find by projects
  findByprojects: function(key) {
    return function(dispatch) {
      return EnvironmentApi
        .findByprojects(key)
        .then(item => {
          dispatch(actionsFunction.findByprojectsSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByprojectsSuccess: function(item) {
    return { type: types.FINDBYPROJECTS_ENVIRONMENT_SUCCESS, payload: item };
  },


  // Find by services
  findByservices: function(key) {
    return function(dispatch) {
      return EnvironmentApi
        .findByservices(key)
        .then(item => {
          dispatch(actionsFunction.findByservicesSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByservicesSuccess: function(item) {
    return { type: types.FINDBYSERVICES_ENVIRONMENT_SUCCESS, payload: item };
  },


  // Find by vms
  findByvms: function(key) {
    return function(dispatch) {
      return EnvironmentApi
        .findByvms(key)
        .then(item => {
          dispatch(actionsFunction.findByvmsSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByvmsSuccess: function(item) {
    return { type: types.FINDBYVMS_ENVIRONMENT_SUCCESS, payload: item };
  },


  // Find by volumes
  findByvolumes: function(key) {
    return function(dispatch) {
      return EnvironmentApi
        .findByvolumes(key)
        .then(item => {
          dispatch(actionsFunction.findByvolumesSuccess(item));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  findByvolumesSuccess: function(item) {
    return { type: types.FINDBYVOLUMES_ENVIRONMENT_SUCCESS, payload: item };
  },


  // Get environment
  loadEnvironment: function(id) {
    return function(dispatch) {
      return EnvironmentApi
        .getOneEnvironment(id)
        .then(environment => {
          dispatch(actionsFunction.loadEnvironmentSuccess(environment));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEnvironmentSuccess: function(environment) {
    return { type: types.GET_ENVIRONMENT_SUCCESS, payload: environment };
  },

  // Load  list
  loadEnvironmentList: function() {
    return function(dispatch) {
      return EnvironmentApi
        .getEnvironmentList()
        .then(list => {
          dispatch(actionsFunction.loadEnvironmentListSuccess(list));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  loadEnvironmentListSuccess: function(list) {
    return { type: types.LIST_ENVIRONMENT_SUCCESS, payload: list };
  },

	
  // Save environment
  saveEnvironment: function(environment) {
    return function(dispatch) {
      return EnvironmentApi
        .saveEnvironment(environment)
        .then(environment => {
          dispatch(actionsFunction.saveEnvironmentSuccess(environment));
        })
        .catch(error => {
          throw error;
        });
    };
  },

  saveEnvironmentSuccess: function(environment) {
    return { type: types.UPDATE_ENVIRONMENT_SUCCESS, payload: environment };
  },


};

export default actionsFunction;
