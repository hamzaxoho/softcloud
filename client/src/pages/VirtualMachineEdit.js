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
// Dependencies
import React, { Component } from "react";
import { Link } from "react-router-dom";
import Utils from "../utils/utils";

// Redux
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// Material UI
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputLabel from "@material-ui/core/InputLabel";
import FormControl from "@material-ui/core/FormControl";

// Custom Actions


// START IMPORT ACTIONS
import VirtualMachineActions from "../redux/actions/VirtualMachineActions";
import EnvironmentActions from "../redux/actions/EnvironmentActions";
import ProjectActions from "../redux/actions/ProjectActions";
import VolumeActions from "../redux/actions/VolumeActions";

// END IMPORT ACTIONS

/** APIs

* actionsVirtualMachine.create
*	@description CRUD ACTION create
*
* actionsVirtualMachine.update
*	@description CRUD ACTION update
*	@param ObjectId id - Id
*
* actionsVirtualMachine.get
*	@description CRUD ACTION get
*	@param ObjectId id - Id resource
*
* actionsEnvironment.findByvms
*	@description CRUD ACTION findByvms
*	@param Objectid key - Id of model to search for
*
* actionsProject.findByvms
*	@description CRUD ACTION findByvms
*	@param Objectid key - Id of model to search for
*
* actionsVolume.list
*	@description CRUD ACTION list
*

**/

class VirtualMachineEdit extends Component {
  // Init virtualmachine
  constructor(props) {
    super(props);
    this.state = {
      virtualmachine: {}
    };
  }

  // Load data on start
  componentDidMount() {
    if (this.props.match.params.id !== "new") {
      this.props.actionsVirtualMachine.loadVirtualMachine(this.props.match.params.id);
      this.props.actionsEnvironment.findByvms(this.props.match.params.id);
      this.props.actionsProject.findByvms(this.props.match.params.id);
    }
    
    this.props.actionsVolume.loadVolumeList();
  }

  // Insert props virtualmachine in state
  componentWillReceiveProps(props) {
    this.setState(...this.state, {
      virtualmachine: props.virtualmachine
    });
  }

  // Save data
  save(event) {
    event.preventDefault();
    if (this.state.virtualmachine._id) {
      this.props.actionsVirtualMachine.saveVirtualMachine(this.state.virtualmachine).then(data => {
        this.props.history.push("/virtualmachines/");
      });
    } else {
      this.props.actionsVirtualMachine.createVirtualMachine(this.state.virtualmachine).then(data => {
        this.props.history.push("/virtualmachines/");
      });
    }
  }

  // Show content
  render() {
    return (
      <div>
        <h1>VirtualMachine Edit</h1>
        <form className="myForm" onSubmit={this.save.bind(this)}>

          
          <TextField
            id="CPUS"
            label="CPUS"
            value={this.state.virtualmachine.CPUS || ""}
            onChange={Utils.handleChange.bind(this, "virtualmachine")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="DiskSize"
            label="DiskSize"
            value={this.state.virtualmachine.DiskSize || ""}
            onChange={Utils.handleChange.bind(this, "virtualmachine")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Memory"
            label="Memory"
            value={this.state.virtualmachine.Memory || ""}
            onChange={Utils.handleChange.bind(this, "virtualmachine")}
            type="number"
            margin="normal"
            fullWidth
          />
          
          
          <TextField
            id="Name"
            label="Name"
            value={this.state.virtualmachine.Name || ""}
            onChange={Utils.handleChange.bind(this, "virtualmachine")}
            margin="normal"
            fullWidth
          />
          
          {/* RELATIONS */}

          <h2 className="mb-20">Relations</h2>
          
          {/* Relation 1:m volumes with Volume */}
          
          <FormControl fullWidth className="mb-20">
            <InputLabel shrink htmlFor="volumes">
              Volumes
            </InputLabel>
            <Select
              value={this.state.virtualmachine.volumes || ""}
              onChange={Utils.handleChangeSelect.bind(this, "virtualmachine")}
              inputProps={{
                id: "volumes",
                name: "volumes"
              }}
              fullWidth
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              {this.props.listVolume && this.props.listVolume.map(row => (
                <MenuItem value={row._id} key={row._id}>
                  {row._id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          
          
          {/* EXTERNAL RELATIONS */}
          
          {/* External relation with Environment */}
          
          <h3>Environment</h3>
          {(!this.props.listEnvironment || this.props.listEnvironment.length === 0) && 
            <div>No Environment associated</div>
          }
          {this.props.listEnvironment &&
            this.props.listEnvironment.map((item, i) => {
              return (
                <Link to={"/environments/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* External relation with Project */}
          
          <h3>Project</h3>
          {(!this.props.listProject || this.props.listProject.length === 0) && 
            <div>No Project associated</div>
          }
          {this.props.listProject &&
            this.props.listProject.map((item, i) => {
              return (
                <Link to={"/projects/" + item._id} key={item._id}>
                  {item._id}
                </Link>
              );
            })}

          
          {/* Footer */}
          <div className="footer-card">
            <Link to="/virtualmachines/">Back to list</Link>

            <Button type="submit" variant="contained" color="primary">
              Save
            </Button>
          </div>
        </form>
      </div>
    );
  }
}

// Store actions
const mapDispatchToProps = function(dispatch) {
  return { 
    actionsVirtualMachine: bindActionCreators(VirtualMachineActions, dispatch),
    actionsEnvironment: bindActionCreators(EnvironmentActions, dispatch),
    actionsProject: bindActionCreators(ProjectActions, dispatch),
    actionsVolume: bindActionCreators(VolumeActions, dispatch),
  };
};

// Validate types
VirtualMachineEdit.propTypes = { 
  actionsVirtualMachine: PropTypes.object.isRequired,
  actionsEnvironment: PropTypes.object.isRequired,
  actionsProject: PropTypes.object.isRequired,
  actionsVolume: PropTypes.object.isRequired,
};

// Get props from state
function mapStateToProps(state, ownProps) {
  return {
    virtualmachine: state.VirtualMachineEditReducer.virtualmachine,
    listVolume: state.VirtualMachineEditReducer.listVolume,
    listEnvironment: state.VirtualMachineEditReducer.listEnvironment,
    listProject: state.VirtualMachineEditReducer.listProject
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VirtualMachineEdit);