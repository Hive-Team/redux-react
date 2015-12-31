import React from 'react'
import { render } from 'react-dom'
import { Router } from 'react-router'
import routes from './config/routes'
import './assets/styles/hive-css-mobile.css'

render(
  routes,
  document.getElementById('root')
)
