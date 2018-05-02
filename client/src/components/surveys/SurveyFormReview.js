// SurveyFormReview shows users their form inputs for review
import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';
import { withRouter } from 'react-router-dom';
import * as actions from '../../actions'

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label })  => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>
          {formValues[name]}
        </div>
      </div>
    );
  });

    return (
      <div>
        <div className="card-content">
          <h5>Please confirm your entries</h5>
          <div>
            {reviewFields}
          </div>
        </div>
        <div className="card-action">
          <button className="yellow darken-3 btn-flat" onClick={onCancel}>
            Back
          </button>
          <button
            className="green btn-flat right white-text"
            onClick={() => submitSurvey(formValues, history)}
          >
            Send Survey
            <i className="material-icons right">email</i>
          </button>
        </div>
      </div>
    );
}

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values};
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
