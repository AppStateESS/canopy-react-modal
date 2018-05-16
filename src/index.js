'use strict'
import React, {Component} from 'react'
import PropTypes from 'prop-types'

/* global $ */

export default class Modal extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    if (this.props.onClose) {
      $('#' + this.props.modalId).on('hidden.bs.modal', function () {
        this.props.onClose()
      }.bind(this))
    }
  }

  render() {
    return (
      <div id={this.props.modalId} className="modal fade" tabIndex="-1" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title">{this.props.header}</h4>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              {this.props.body}
            </div>
            <div className="modal-footer">
              {this.props.footer}
              <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Modal.propTypes = {
  onClose: PropTypes.func,
  body: PropTypes.oneOfType([PropTypes.string,PropTypes.object,]),
  modalId: PropTypes.string,
  header: PropTypes.string,
  footer: PropTypes.string,
}
Modal.defaultProps = {
  header: null,
  body: null,
  footer: null,
  modalId: 'reactModal',
  onClose: null
}
