import { connect } from 'react-redux';
import { Prompt, Redirect, Route, Switch, withRouter } from 'react-router';
import { Link, NavLink } from 'react-router-dom';
import { actions } from './actions';
import defaults from './defaults';
import hook from './hook';
import model from './model';
import render from './render';
import Router from './router';

export default {
  model,
  actions,
  hook,
  defaults,
  connect,
  render,

  Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  Prompt,
  withRouter
};

export {
  model,
  actions,
  hook,
  defaults,
  connect,
  render,

  Router,
  Route,
  Link,
  NavLink,
  Switch,
  Redirect,
  Prompt,
  withRouter
};
